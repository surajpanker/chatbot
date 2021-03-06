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
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = require("url");
const logging_1 = require("./logging");
const constants_1 = require("./constants");
const resolver_dns_1 = require("./resolver-dns");
const http = require("http");
const logging = require("./logging");
const subchannel_1 = require("./subchannel");
const TRACER_NAME = 'proxy';
function trace(text) {
    logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, text);
}
function getProxyInfo() {
    let proxyEnv = '';
    let envVar = '';
    /* Prefer using 'grpc_proxy'. Fallback on 'http_proxy' if it is not set.
     * Also prefer using 'https_proxy' with fallback on 'http_proxy'. The
     * fallback behavior can be removed if there's a demand for it.
     */
    if (process.env.grpc_proxy) {
        envVar = 'grpc_proxy';
        proxyEnv = process.env.grpc_proxy;
    }
    else if (process.env.https_proxy) {
        envVar = 'https_proxy';
        proxyEnv = process.env.https_proxy;
    }
    else if (process.env.http_proxy) {
        envVar = 'http_proxy';
        proxyEnv = process.env.http_proxy;
    }
    else {
        return {};
    }
    let proxyUrl;
    try {
        proxyUrl = new url_1.URL(proxyEnv);
    }
    catch (e) {
        logging_1.log(constants_1.LogVerbosity.ERROR, `cannot parse value of "${envVar}" env var`);
        return {};
    }
    if (proxyUrl.protocol !== 'http:') {
        logging_1.log(constants_1.LogVerbosity.ERROR, `"${proxyUrl.protocol}" scheme not supported in proxy URI`);
        return {};
    }
    let userCred = null;
    if (proxyUrl.username) {
        if (proxyUrl.password) {
            logging_1.log(constants_1.LogVerbosity.INFO, 'userinfo found in proxy URI');
            userCred = `${proxyUrl.username}:${proxyUrl.password}`;
        }
        else {
            userCred = proxyUrl.username;
        }
    }
    const result = {
        address: proxyUrl.host
    };
    if (userCred) {
        result.creds = userCred;
    }
    trace('Proxy server ' + result.address + ' set by environment variable ' + envVar);
    return result;
}
const PROXY_INFO = getProxyInfo();
function getNoProxyHostList() {
    /* Prefer using 'no_grpc_proxy'. Fallback on 'no_proxy' if it is not set. */
    let noProxyStr = process.env.no_grpc_proxy;
    let envVar = 'no_grpc_proxy';
    if (!noProxyStr) {
        noProxyStr = process.env.no_proxy;
        envVar = 'no_proxy';
    }
    if (noProxyStr) {
        trace('No proxy server list set by environment variable ' + envVar);
        return noProxyStr.split(',');
    }
    else {
        return [];
    }
}
const NO_PROXY_HOSTS = getNoProxyHostList();
function shouldUseProxy(target) {
    if (!PROXY_INFO.address) {
        return false;
    }
    let serverHost;
    const parsedTarget = resolver_dns_1.parseTarget(target);
    if (parsedTarget) {
        serverHost = parsedTarget.host;
    }
    else {
        return false;
    }
    for (const host of NO_PROXY_HOSTS) {
        if (host === serverHost) {
            trace('Not using proxy for target in no_proxy list: ' + target);
            return false;
        }
    }
    return true;
}
exports.shouldUseProxy = shouldUseProxy;
function getProxiedConnection(target, subchannelAddress) {
    if (!(PROXY_INFO.address && shouldUseProxy(target) && subchannel_1.isTcpSubchannelAddress(subchannelAddress))) {
        return Promise.reject();
    }
    const subchannelAddressPathString = `${subchannelAddress.host}:${subchannelAddress.port}`;
    trace('Using proxy ' + PROXY_INFO.address + ' to connect to ' + target + ' at ' + subchannelAddress);
    const options = {
        method: 'CONNECT',
        host: PROXY_INFO.address,
        path: subchannelAddressPathString
    };
    if (PROXY_INFO.creds) {
        options.headers = {
            'Proxy-Authorization': 'Basic ' + Buffer.from(PROXY_INFO.creds).toString('base64')
        };
    }
    return new Promise((resolve, reject) => {
        const request = http.request(options);
        request.once('connect', (res, socket, head) => {
            request.removeAllListeners();
            socket.removeAllListeners();
            if (res.statusCode === 200) {
                trace('Successfully connected to ' + subchannelAddress + ' through proxy ' + PROXY_INFO.address);
                resolve(socket);
            }
            else {
                logging_1.log(constants_1.LogVerbosity.ERROR, 'Failed to connect to ' + subchannelAddress + ' through proxy ' + PROXY_INFO.address + ' with status ' + res.statusCode);
                reject();
            }
        });
        request.once('error', (err) => {
            request.removeAllListeners();
            logging_1.log(constants_1.LogVerbosity.ERROR, 'Failed to connect to proxy ' + PROXY_INFO.address + ' with error ' + err.message);
            reject();
        });
    });
}
exports.getProxiedConnection = getProxiedConnection;
//# sourceMappingURL=http_proxy.js.map