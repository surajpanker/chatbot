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
export declare namespace groupsmigration_v1 {
    interface Options extends GlobalOptions {
        version: 'v1';
    }
    interface StandardParameters {
        /**
         * Data format for the response.
         */
        alt?: string;
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
         * An opaque string that represents a user for quota purposes. Must not
         * exceed 40 characters.
         */
        quotaUser?: string;
        /**
         * Deprecated. Please use quotaUser instead.
         */
        userIp?: string;
    }
    /**
     * Groups Migration API
     *
     * Groups Migration Api.
     *
     * @example
     * const {google} = require('googleapis');
     * const groupsmigration = google.groupsmigration('v1');
     *
     * @namespace groupsmigration
     * @type {Function}
     * @version v1
     * @variation v1
     * @param {object=} options Options for Groupsmigration
     */
    class Groupsmigration {
        context: APIRequestContext;
        archive: Resource$Archive;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * JSON response template for groups migration API.
     */
    interface Schema$Groups {
        /**
         * The kind of insert resource this is.
         */
        kind?: string;
        /**
         * The status of the insert request.
         */
        responseCode?: string;
    }
    class Resource$Archive {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * groupsmigration.archive.insert
         * @desc Inserts a new mail into the archive of the Google group.
         * @alias groupsmigration.archive.insert
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.groupId The group ID
         * @param {object} params.media Media object
         * @param {string} params.media.mimeType Media mime-type
         * @param {string|object} params.media.body Media body contents
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert(params?: Params$Resource$Archive$Insert, options?: MethodOptions): GaxiosPromise<Schema$Groups>;
        insert(params: Params$Resource$Archive$Insert, options: MethodOptions | BodyResponseCallback<Schema$Groups>, callback: BodyResponseCallback<Schema$Groups>): void;
        insert(params: Params$Resource$Archive$Insert, callback: BodyResponseCallback<Schema$Groups>): void;
        insert(callback: BodyResponseCallback<Schema$Groups>): void;
    }
    interface Params$Resource$Archive$Insert extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The group ID
         */
        groupId?: string;
        /**
         * Media metadata
         */
        media?: {
            /**
             * Media mime-type
             */
            mimeType?: string;
            /**
             * Media body contents
             */
            body?: any;
        };
    }
}
