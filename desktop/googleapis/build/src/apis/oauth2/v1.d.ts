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
export declare namespace oauth2_v1 {
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
     * Google OAuth2 API
     *
     * Obtains end-user authorization grants for use with other Google APIs.
     *
     * @example
     * const {google} = require('googleapis');
     * const oauth2 = google.oauth2('v1');
     *
     * @namespace oauth2
     * @type {Function}
     * @version v1
     * @variation v1
     * @param {object=} options Options for Oauth2
     */
    class Oauth2 {
        context: APIRequestContext;
        userinfo: Resource$Userinfo;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
        /**
         * oauth2.tokeninfo
         * @desc Get token info
         * @alias oauth2.tokeninfo
         * @memberOf! oauth2(v1)
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.access_token The oauth2 access token
         * @param {string=} params.id_token The ID token
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        tokeninfo(params?: Params$$Tokeninfo, options?: MethodOptions): GaxiosPromise<Schema$Tokeninfo>;
        tokeninfo(params: Params$$Tokeninfo, options: MethodOptions | BodyResponseCallback<Schema$Tokeninfo>, callback: BodyResponseCallback<Schema$Tokeninfo>): void;
        tokeninfo(params: Params$$Tokeninfo, callback: BodyResponseCallback<Schema$Tokeninfo>): void;
        tokeninfo(callback: BodyResponseCallback<Schema$Tokeninfo>): void;
    }
    interface Schema$Tokeninfo {
        /**
         * The access type granted with this token. It can be offline or online.
         */
        access_type?: string;
        /**
         * Who is the intended audience for this token. In general the same as
         * issued_to.
         */
        audience?: string;
        /**
         * The email address of the user. Present only if the email scope is present
         * in the request.
         */
        email?: string;
        /**
         * Boolean flag which is true if the email address is verified. Present only
         * if the email scope is present in the request.
         */
        email_verified?: boolean;
        /**
         * The expiry time of the token, as number of seconds left until expiry.
         */
        expires_in?: number;
        /**
         * The issue time of the token, as number of seconds.
         */
        issued_at?: number;
        /**
         * To whom was the token issued to. In general the same as audience.
         */
        issued_to?: string;
        /**
         * Who issued the token.
         */
        issuer?: string;
        /**
         * Nonce of the id token.
         */
        nonce?: string;
        /**
         * The space separated list of scopes granted to this token.
         */
        scope?: string;
        /**
         * The obfuscated user id.
         */
        user_id?: string;
        /**
         * Boolean flag which is true if the email address is verified. Present only
         * if the email scope is present in the request.
         */
        verified_email?: boolean;
    }
    interface Schema$Userinfoplus {
        /**
         * The user&#39;s email address.
         */
        email?: string;
        /**
         * The user&#39;s last name.
         */
        family_name?: string;
        /**
         * The user&#39;s gender.
         */
        gender?: string;
        /**
         * The user&#39;s first name.
         */
        given_name?: string;
        /**
         * The hosted domain e.g. example.com if the user is Google apps user.
         */
        hd?: string;
        /**
         * The obfuscated ID of the user.
         */
        id?: string;
        /**
         * URL of the profile page.
         */
        link?: string;
        /**
         * The user&#39;s preferred locale.
         */
        locale?: string;
        /**
         * The user&#39;s full name.
         */
        name?: string;
        /**
         * URL of the user&#39;s picture image.
         */
        picture?: string;
        /**
         * Boolean flag which is true if the email address is verified. Always
         * verified because we only return the user&#39;s primary email address.
         */
        verified_email?: boolean;
    }
    interface Params$$Tokeninfo extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The oauth2 access token
         */
        access_token?: string;
        /**
         * The ID token
         */
        id_token?: string;
    }
    class Resource$Userinfo {
        context: APIRequestContext;
        v2: Resource$Userinfo$V2;
        constructor(context: APIRequestContext);
        /**
         * oauth2.userinfo.get
         * @desc Get user info
         * @alias oauth2.userinfo.get
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Userinfo$Get, options?: MethodOptions): GaxiosPromise<Schema$Userinfoplus>;
        get(params: Params$Resource$Userinfo$Get, options: MethodOptions | BodyResponseCallback<Schema$Userinfoplus>, callback: BodyResponseCallback<Schema$Userinfoplus>): void;
        get(params: Params$Resource$Userinfo$Get, callback: BodyResponseCallback<Schema$Userinfoplus>): void;
        get(callback: BodyResponseCallback<Schema$Userinfoplus>): void;
    }
    interface Params$Resource$Userinfo$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
    }
    class Resource$Userinfo$V2 {
        context: APIRequestContext;
        me: Resource$Userinfo$V2$Me;
        constructor(context: APIRequestContext);
    }
    class Resource$Userinfo$V2$Me {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * oauth2.userinfo.v2.me.get
         * @desc Get user info
         * @alias oauth2.userinfo.v2.me.get
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Userinfo$V2$Me$Get, options?: MethodOptions): GaxiosPromise<Schema$Userinfoplus>;
        get(params: Params$Resource$Userinfo$V2$Me$Get, options: MethodOptions | BodyResponseCallback<Schema$Userinfoplus>, callback: BodyResponseCallback<Schema$Userinfoplus>): void;
        get(params: Params$Resource$Userinfo$V2$Me$Get, callback: BodyResponseCallback<Schema$Userinfoplus>): void;
        get(callback: BodyResponseCallback<Schema$Userinfoplus>): void;
    }
    interface Params$Resource$Userinfo$V2$Me$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
    }
}
