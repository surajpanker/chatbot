"use strict";
/*
 * Copyright 2019 gRPC authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resolver_1 = require("./resolver");
const dns = require("dns");
const util = require("util");
const service_config_1 = require("./service-config");
const constants_1 = require("./constants");
const metadata_1 = require("./metadata");
const logging = require("./logging");
const constants_2 = require("./constants");
const TRACER_NAME = 'dns_resolver';
function trace(text) {
    logging.trace(constants_2.LogVerbosity.DEBUG, TRACER_NAME, text);
}
/* These regular expressions match IP addresses with optional ports in different
 * formats. In each case, capture group 1 contains the address, and capture
 * group 2 contains the port number, if present */
/**
 * Matches 4 groups of up to 3 digits each, separated by periods, optionally
 * followed by a colon and a number.
 */
const IPV4_REGEX = /^(\d{1,3}(?:\.\d{1,3}){3})(?::(\d+))?$/;
/**
 * Matches any number of groups of up to 4 hex digits (case insensitive)
 * separated by 1 or more colons. This variant does not match a port number.
 */
const IPV6_REGEX = /^([0-9a-f]{0,4}(?::{1,2}[0-9a-f]{0,4})+)$/i;
/**
 * Matches the same as the IPv6_REGEX, surrounded by square brackets, and
 * optionally followed by a colon and a number.
 */
const IPV6_BRACKET_REGEX = /^\[([0-9a-f]{0,4}(?::{1,2}[0-9a-f]{0,4})+)\](?::(\d+))?$/i;
/**
 * Matches `[dns:][//authority/]host[:port]`, where `authority` and `host` are
 * both arbitrary sequences of dot-separated strings of alphanumeric characters
 * and `port` is a sequence of digits. Group 1 contains the hostname and group
 * 2 contains the port number if provided.
 */
const DNS_REGEX = /^(?:dns:)?(?:\/\/(?:[a-zA-Z0-9-]+\.?)+\/)?((?:[a-zA-Z0-9-]+\.?)+)(?::(\d+))?$/;
/**
 * The default TCP port to connect to if not explicitly specified in the target.
 */
const DEFAULT_PORT = '443';
const resolveTxtPromise = util.promisify(dns.resolveTxt);
const dnsLookupPromise = util.promisify(dns.lookup);
/**
 * Attempt to parse a target string as an IP address
 * @param target
 * @return An "IP:port" string in an array if parsing was successful, `null` otherwise
 */
function parseIP(target) {
    /* These three regular expressions are all mutually exclusive, so we just
     * want the first one that matches the target string, if any do. */
    const ipv4Match = IPV4_REGEX.exec(target);
    const match = ipv4Match || IPV6_REGEX.exec(target) || IPV6_BRACKET_REGEX.exec(target);
    if (match === null) {
        return null;
    }
    // ipv6 addresses should be bracketed
    const addr = match[1];
    let port;
    if (match[2]) {
        port = match[2];
    }
    else {
        port = DEFAULT_PORT;
    }
    return [{ host: addr, port: +port }];
}
/**
 * Merge any number of arrays into a single alternating array
 * @param arrays
 */
function mergeArrays(...arrays) {
    const result = [];
    for (let i = 0; i <
        Math.max.apply(null, arrays.map(array => array.length)); i++) {
        for (const array of arrays) {
            if (i < array.length) {
                result.push(array[i]);
            }
        }
    }
    return result;
}
/**
 * Resolver implementation that handles DNS names and IP addresses.
 */
class DnsResolver {
    constructor(target, listener) {
        this.target = target;
        this.listener = listener;
        this.pendingLookupPromise = null;
        this.pendingTxtPromise = null;
        this.latestLookupResult = null;
        this.latestServiceConfig = null;
        this.latestServiceConfigError = null;
        trace('Resolver constructed for target ' + target);
        this.ipResult = parseIP(target);
        const dnsMatch = DNS_REGEX.exec(target);
        if (dnsMatch === null) {
            this.dnsHostname = null;
            this.port = null;
        }
        else {
            this.dnsHostname = dnsMatch[1];
            if (dnsMatch[2]) {
                this.port = dnsMatch[2];
            }
            else {
                this.port = DEFAULT_PORT;
            }
        }
        this.percentage = Math.random() * 100;
        this.defaultResolutionError = {
            code: constants_1.Status.UNAVAILABLE,
            details: `Name resolution failed for target ${this.target}`,
            metadata: new metadata_1.Metadata(),
        };
    }
    /**
     * If the target is an IP address, just provide that address as a result.
     * Otherwise, initiate A, AAAA, and TXT lookups
     */
    startResolution() {
        if (this.ipResult !== null) {
            trace('Returning IP address for target ' + this.target);
            setImmediate(() => {
                this.listener.onSuccessfulResolution(this.ipResult, null, null);
            });
            return;
        }
        if (this.dnsHostname !== null) {
            /* We clear out latestLookupResult here to ensure that it contains the
             * latest result since the last time we started resolving. That way, the
             * TXT resolution handler can use it, but only if it finishes second. We
             * don't clear out any previous service config results because it's
             * better to use a service config that's slightly out of date than to
             * revert to an effectively blank one. */
            this.latestLookupResult = null;
            const hostname = this.dnsHostname;
            /* We lookup both address families here and then split them up later
             * because when looking up a single family, dns.lookup outputs an error
             * if the name exists but there are no records for that family, and that
             * error is indistinguishable from other kinds of errors */
            this.pendingLookupPromise = dnsLookupPromise(hostname, { all: true });
            this.pendingLookupPromise.then(addressList => {
                this.pendingLookupPromise = null;
                const ip4Addresses = addressList.filter(addr => addr.family === 4);
                const ip6Addresses = addressList.filter(addr => addr.family === 6);
                this.latestLookupResult = mergeArrays(ip6Addresses, ip4Addresses).map(addr => ({ host: addr.address, port: +this.port }));
                const allAddressesString = '[' +
                    this.latestLookupResult.map(addr => addr.host + ':' + addr.port).join(',') +
                    ']';
                trace('Resolved addresses for target ' +
                    this.target +
                    ': ' +
                    allAddressesString);
                if (this.latestLookupResult.length === 0) {
                    this.listener.onError(this.defaultResolutionError);
                    return;
                }
                /* If the TXT lookup has not yet finished, both of the last two
                 * arguments will be null, which is the equivalent of getting an
                 * empty TXT response. When the TXT lookup does finish, its handler
                 * can update the service config by using the same address list */
                this.listener.onSuccessfulResolution(this.latestLookupResult, this.latestServiceConfig, this.latestServiceConfigError);
            }, err => {
                trace('Resolution error for target ' +
                    this.target +
                    ': ' +
                    err.message);
                this.pendingLookupPromise = null;
                this.listener.onError(this.defaultResolutionError);
            });
            /* If there already is a still-pending TXT resolution, we can just use
             * that result when it comes in */
            if (this.pendingTxtPromise === null) {
                /* We handle the TXT query promise differently than the others because
                 * the name resolution attempt as a whole is a success even if the TXT
                 * lookup fails */
                this.pendingTxtPromise = resolveTxtPromise(hostname);
                this.pendingTxtPromise.then(txtRecord => {
                    this.pendingTxtPromise = null;
                    try {
                        this.latestServiceConfig = service_config_1.extractAndSelectServiceConfig(txtRecord, this.percentage);
                    }
                    catch (err) {
                        this.latestServiceConfigError = {
                            code: constants_1.Status.UNAVAILABLE,
                            details: 'Parsing service config failed',
                            metadata: new metadata_1.Metadata(),
                        };
                    }
                    if (this.latestLookupResult !== null) {
                        /* We rely here on the assumption that calling this function with
                         * identical parameters will be essentialy idempotent, and calling
                         * it with the same address list and a different service config
                         * should result in a fast and seamless switchover. */
                        this.listener.onSuccessfulResolution(this.latestLookupResult, this.latestServiceConfig, this.latestServiceConfigError);
                    }
                }, err => {
                    this.latestServiceConfigError = {
                        code: constants_1.Status.UNAVAILABLE,
                        details: 'TXT query failed',
                        metadata: new metadata_1.Metadata(),
                    };
                    if (this.latestLookupResult !== null) {
                        this.listener.onSuccessfulResolution(this.latestLookupResult, this.latestServiceConfig, this.latestServiceConfigError);
                    }
                });
            }
        }
    }
    updateResolution() {
        trace('Resolution update requested for target ' + this.target);
        if (this.pendingLookupPromise === null) {
            this.startResolution();
        }
    }
    /**
     * Get the default authority for the given target. For IP targets, that is
     * the IP address. For DNS targets, it is the hostname.
     * @param target
     */
    static getDefaultAuthority(target) {
        const ipMatch = IPV4_REGEX.exec(target) ||
            IPV6_REGEX.exec(target) ||
            IPV6_BRACKET_REGEX.exec(target);
        if (ipMatch) {
            return ipMatch[1];
        }
        const dnsMatch = DNS_REGEX.exec(target);
        if (dnsMatch) {
            return dnsMatch[1];
        }
        throw new Error(`Failed to parse target ${target}`);
    }
}
/**
 * Set up the DNS resolver class by registering it as the handler for the
 * "dns:" prefix and as the default resolver.
 */
function setup() {
    resolver_1.registerResolver('dns:', DnsResolver);
    resolver_1.registerDefaultResolver(DnsResolver);
}
exports.setup = setup;
function parseTarget(target) {
    var _a, _b, _c, _d;
    const match = (_c = (_b = (_a = IPV4_REGEX.exec(target)) !== null && _a !== void 0 ? _a : IPV6_REGEX.exec(target)) !== null && _b !== void 0 ? _b : IPV6_BRACKET_REGEX.exec(target)) !== null && _c !== void 0 ? _c : DNS_REGEX.exec(target);
    if (match) {
        return {
            host: match[1],
            port: (_d = match[2]) !== null && _d !== void 0 ? _d : undefined
        };
    }
    else {
        return null;
    }
}
exports.parseTarget = parseTarget;
//# sourceMappingURL=resolver-dns.js.map