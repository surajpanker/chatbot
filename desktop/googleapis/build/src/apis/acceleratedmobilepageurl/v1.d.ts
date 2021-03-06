/**
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { GaxiosPromise } from 'gaxios';
import { Compute, JWT, OAuth2Client, UserRefreshClient } from 'google-auth-library';
import { APIRequestContext, BodyResponseCallback, GlobalOptions, GoogleConfigurable, MethodOptions } from 'googleapis-common';
export declare namespace acceleratedmobilepageurl_v1 {
    interface Options extends GlobalOptions {
        version: 'v1';
    }
    interface StandardParameters {
        /**
         * V1 error format.
         */
        '$.xgafv'?: string;
        /**
         * OAuth access token.
         */
        access_token?: string;
        /**
         * Data format for response.
         */
        alt?: string;
        /**
         * JSONP
         */
        callback?: string;
        /**
         * Selector specifying which fields to include in a partial response.
         */
        fields?: string;
        /**
         * API key. Your API key identifies your project and provides you with API
         * access, quota, and reports. Required unless you provide an OAuth 2.0
         * token.
         */
        key?: string;
        /**
         * OAuth 2.0 token for the current user.
         */
        oauth_token?: string;
        /**
         * Returns response with indentations and line breaks.
         */
        prettyPrint?: boolean;
        /**
         * Available to use for quota purposes for server-side applications. Can be
         * any arbitrary string assigned to a user, but should not exceed 40
         * characters.
         */
        quotaUser?: string;
        /**
         * Legacy upload protocol for media (e.g. "media", "multipart").
         */
        uploadType?: string;
        /**
         * Upload protocol for media (e.g. "raw", "multipart").
         */
        upload_protocol?: string;
    }
    /**
     * Accelerated Mobile Pages (AMP) URL API
     *
     * Retrieves the list of AMP URLs (and equivalent AMP Cache URLs) for a given
     * list of public URL(s).
     *
     * @example
     * const {google} = require('googleapis');
     * const acceleratedmobilepageurl = google.acceleratedmobilepageurl('v1');
     *
     * @namespace acceleratedmobilepageurl
     * @type {Function}
     * @version v1
     * @variation v1
     * @param {object=} options Options for Acceleratedmobilepageurl
     */
    class Acceleratedmobilepageurl {
        context: APIRequestContext;
        ampUrls: Resource$Ampurls;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * AMP URL response for a requested URL.
     */
    interface Schema$AmpUrl {
        /**
         * The AMP URL pointing to the publisher&#39;s web server.
         */
        ampUrl?: string;
        /**
         * The [AMP Cache URL](/amp/cache/overview#amp-cache-url-format) pointing to
         * the cached document in the Google AMP Cache.
         */
        cdnAmpUrl?: string;
        /**
         * The original non-AMP URL.
         */
        originalUrl?: string;
    }
    /**
     * AMP URL Error resource for a requested URL that couldn&#39;t be found.
     */
    interface Schema$AmpUrlError {
        /**
         * The error code of an API call.
         */
        errorCode?: string;
        /**
         * An optional descriptive error message.
         */
        errorMessage?: string;
        /**
         * The original non-AMP URL.
         */
        originalUrl?: string;
    }
    /**
     * AMP URL request for a batch of URLs.
     */
    interface Schema$BatchGetAmpUrlsRequest {
        /**
         * The lookup_strategy being requested.
         */
        lookupStrategy?: string;
        /**
         * List of URLs to look up for the paired AMP URLs. The URLs are
         * case-sensitive. Up to 50 URLs per lookup (see [Usage
         * Limits](/amp/cache/reference/limits)).
         */
        urls?: string[];
    }
    /**
     * Batch AMP URL response.
     */
    interface Schema$BatchGetAmpUrlsResponse {
        /**
         * For each URL in BatchAmpUrlsRequest, the URL response. The response might
         * not be in the same order as URLs in the batch request. If
         * BatchAmpUrlsRequest contains duplicate URLs, AmpUrl is generated only
         * once.
         */
        ampUrls?: Schema$AmpUrl[];
        /**
         * The errors for requested URLs that have no AMP URL.
         */
        urlErrors?: Schema$AmpUrlError[];
    }
    class Resource$Ampurls {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * acceleratedmobilepageurl.ampUrls.batchGet
         * @desc Returns AMP URL(s) and equivalent [AMP Cache
         * URL(s)](/amp/cache/overview#amp-cache-url-format).
         * @alias acceleratedmobilepageurl.ampUrls.batchGet
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {().BatchGetAmpUrlsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        batchGet(params?: Params$Resource$Ampurls$Batchget, options?: MethodOptions): GaxiosPromise<Schema$BatchGetAmpUrlsResponse>;
        batchGet(params: Params$Resource$Ampurls$Batchget, options: MethodOptions | BodyResponseCallback<Schema$BatchGetAmpUrlsResponse>, callback: BodyResponseCallback<Schema$BatchGetAmpUrlsResponse>): void;
        batchGet(params: Params$Resource$Ampurls$Batchget, callback: BodyResponseCallback<Schema$BatchGetAmpUrlsResponse>): void;
        batchGet(callback: BodyResponseCallback<Schema$BatchGetAmpUrlsResponse>): void;
    }
    interface Params$Resource$Ampurls$Batchget extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Request body metadata
         */
        requestBody?: Schema$BatchGetAmpUrlsRequest;
    }
}
