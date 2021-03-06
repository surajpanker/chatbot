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
export declare namespace oslogin_v1alpha {
    interface Options extends GlobalOptions {
        version: 'v1alpha';
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
     * Cloud OS Login API
     *
     * Manages OS login configuration for Google account users.
     *
     * @example
     * const {google} = require('googleapis');
     * const oslogin = google.oslogin('v1alpha');
     *
     * @namespace oslogin
     * @type {Function}
     * @version v1alpha
     * @variation v1alpha
     * @param {object=} options Options for Oslogin
     */
    class Oslogin {
        context: APIRequestContext;
        users: Resource$Users;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * A generic empty message that you can re-use to avoid defining duplicated
     * empty messages in your APIs. A typical example is to use it as the request
     * or the response type of an API method. For instance:      service Foo { rpc
     * Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON
     * representation for `Empty` is empty JSON object `{}`.
     */
    interface Schema$Empty {
    }
    /**
     * A response message from importing an SSH public key.
     */
    interface Schema$ImportSshPublicKeyResponse {
        /**
         * The login profile information for the user.
         */
        loginProfile?: Schema$LoginProfile;
    }
    /**
     * The user profile information used for logging in to a virtual machine on
     * Google Compute Engine.
     */
    interface Schema$LoginProfile {
        /**
         * A unique user ID.
         */
        name?: string;
        /**
         * The list of POSIX accounts associated with the user.
         */
        posixAccounts?: Schema$PosixAccount[];
        /**
         * A map from SSH public key fingerprint to the associated key object.
         */
        sshPublicKeys?: {
            [key: string]: Schema$SshPublicKey;
        };
    }
    /**
     * The POSIX account information associated with a Google account.
     */
    interface Schema$PosixAccount {
        /**
         * Output only. A POSIX account identifier.
         */
        accountId?: string;
        /**
         * The GECOS (user information) entry for this account.
         */
        gecos?: string;
        /**
         * The default group ID.
         */
        gid?: string;
        /**
         * The path to the home directory for this account.
         */
        homeDirectory?: string;
        /**
         * The operating system type where this account applies.
         */
        operatingSystemType?: string;
        /**
         * Only one POSIX account can be marked as primary.
         */
        primary?: boolean;
        /**
         * The path to the logic shell for this account.
         */
        shell?: string;
        /**
         * System identifier for which account the username or uid applies to. By
         * default, the empty value is used.
         */
        systemId?: string;
        /**
         * The user ID.
         */
        uid?: string;
        /**
         * The username of the POSIX account.
         */
        username?: string;
    }
    /**
     * The SSH public key information associated with a Google account.
     */
    interface Schema$SshPublicKey {
        /**
         * An expiration time in microseconds since epoch.
         */
        expirationTimeUsec?: string;
        /**
         * Output only. The SHA-256 fingerprint of the SSH public key.
         */
        fingerprint?: string;
        /**
         * Public key text in SSH format, defined by &lt;a
         * href=&quot;https://www.ietf.org/rfc/rfc4253.txt&quot;
         * target=&quot;_blank&quot;&gt;RFC4253&lt;/a&gt; section 6.6.
         */
        key?: string;
    }
    class Resource$Users {
        context: APIRequestContext;
        projects: Resource$Users$Projects;
        sshPublicKeys: Resource$Users$Sshpublickeys;
        constructor(context: APIRequestContext);
        /**
         * oslogin.users.getLoginProfile
         * @desc Retrieves the profile information used for logging in to a virtual
         * machine on Google Compute Engine.
         * @alias oslogin.users.getLoginProfile
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The unique ID for the user in format `users/{user}`.
         * @param {string=} params.operatingSystemType The type of operating system associated with the account.
         * @param {string=} params.projectId The project ID of the Google Cloud Platform project.
         * @param {string=} params.systemId A system ID for filtering the results of the request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getLoginProfile(params?: Params$Resource$Users$Getloginprofile, options?: MethodOptions): GaxiosPromise<Schema$LoginProfile>;
        getLoginProfile(params: Params$Resource$Users$Getloginprofile, options: MethodOptions | BodyResponseCallback<Schema$LoginProfile>, callback: BodyResponseCallback<Schema$LoginProfile>): void;
        getLoginProfile(params: Params$Resource$Users$Getloginprofile, callback: BodyResponseCallback<Schema$LoginProfile>): void;
        getLoginProfile(callback: BodyResponseCallback<Schema$LoginProfile>): void;
        /**
         * oslogin.users.importSshPublicKey
         * @desc Adds an SSH public key and returns the profile information. Default
         * POSIX account information is set when no username and UID exist as part
         * of the login profile.
         * @alias oslogin.users.importSshPublicKey
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent The unique ID for the user in format `users/{user}`.
         * @param {string=} params.projectId The project ID of the Google Cloud Platform project.
         * @param {().SshPublicKey} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        importSshPublicKey(params?: Params$Resource$Users$Importsshpublickey, options?: MethodOptions): GaxiosPromise<Schema$ImportSshPublicKeyResponse>;
        importSshPublicKey(params: Params$Resource$Users$Importsshpublickey, options: MethodOptions | BodyResponseCallback<Schema$ImportSshPublicKeyResponse>, callback: BodyResponseCallback<Schema$ImportSshPublicKeyResponse>): void;
        importSshPublicKey(params: Params$Resource$Users$Importsshpublickey, callback: BodyResponseCallback<Schema$ImportSshPublicKeyResponse>): void;
        importSshPublicKey(callback: BodyResponseCallback<Schema$ImportSshPublicKeyResponse>): void;
    }
    interface Params$Resource$Users$Getloginprofile extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The unique ID for the user in format `users/{user}`.
         */
        name?: string;
        /**
         * The type of operating system associated with the account.
         */
        operatingSystemType?: string;
        /**
         * The project ID of the Google Cloud Platform project.
         */
        projectId?: string;
        /**
         * A system ID for filtering the results of the request.
         */
        systemId?: string;
    }
    interface Params$Resource$Users$Importsshpublickey extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The unique ID for the user in format `users/{user}`.
         */
        parent?: string;
        /**
         * The project ID of the Google Cloud Platform project.
         */
        projectId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SshPublicKey;
    }
    class Resource$Users$Projects {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * oslogin.users.projects.delete
         * @desc Deletes a POSIX account.
         * @alias oslogin.users.projects.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name A reference to the POSIX account to update. POSIX accounts are identified by the project ID they are associated with. A reference to the POSIX account is in format `users/{user}/projects/{project}`.
         * @param {string=} params.operatingSystemType The type of operating system associated with the account.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Users$Projects$Delete, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Users$Projects$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Users$Projects$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
    }
    interface Params$Resource$Users$Projects$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * A reference to the POSIX account to update. POSIX accounts are identified
         * by the project ID they are associated with. A reference to the POSIX
         * account is in format `users/{user}/projects/{project}`.
         */
        name?: string;
        /**
         * The type of operating system associated with the account.
         */
        operatingSystemType?: string;
    }
    class Resource$Users$Sshpublickeys {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * oslogin.users.sshPublicKeys.delete
         * @desc Deletes an SSH public key.
         * @alias oslogin.users.sshPublicKeys.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The fingerprint of the public key to update. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user}/sshPublicKeys/{fingerprint}`.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Users$Sshpublickeys$Delete, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Users$Sshpublickeys$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Users$Sshpublickeys$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * oslogin.users.sshPublicKeys.get
         * @desc Retrieves an SSH public key.
         * @alias oslogin.users.sshPublicKeys.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The fingerprint of the public key to retrieve. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user}/sshPublicKeys/{fingerprint}`.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Users$Sshpublickeys$Get, options?: MethodOptions): GaxiosPromise<Schema$SshPublicKey>;
        get(params: Params$Resource$Users$Sshpublickeys$Get, options: MethodOptions | BodyResponseCallback<Schema$SshPublicKey>, callback: BodyResponseCallback<Schema$SshPublicKey>): void;
        get(params: Params$Resource$Users$Sshpublickeys$Get, callback: BodyResponseCallback<Schema$SshPublicKey>): void;
        get(callback: BodyResponseCallback<Schema$SshPublicKey>): void;
        /**
         * oslogin.users.sshPublicKeys.patch
         * @desc Updates an SSH public key and returns the profile information. This
         * method supports patch semantics.
         * @alias oslogin.users.sshPublicKeys.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The fingerprint of the public key to update. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user}/sshPublicKeys/{fingerprint}`.
         * @param {string=} params.updateMask Mask to control which fields get updated. Updates all if not present.
         * @param {().SshPublicKey} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Users$Sshpublickeys$Patch, options?: MethodOptions): GaxiosPromise<Schema$SshPublicKey>;
        patch(params: Params$Resource$Users$Sshpublickeys$Patch, options: MethodOptions | BodyResponseCallback<Schema$SshPublicKey>, callback: BodyResponseCallback<Schema$SshPublicKey>): void;
        patch(params: Params$Resource$Users$Sshpublickeys$Patch, callback: BodyResponseCallback<Schema$SshPublicKey>): void;
        patch(callback: BodyResponseCallback<Schema$SshPublicKey>): void;
    }
    interface Params$Resource$Users$Sshpublickeys$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The fingerprint of the public key to update. Public keys are identified
         * by their SHA-256 fingerprint. The fingerprint of the public key is in
         * format `users/{user}/sshPublicKeys/{fingerprint}`.
         */
        name?: string;
    }
    interface Params$Resource$Users$Sshpublickeys$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The fingerprint of the public key to retrieve. Public keys are identified
         * by their SHA-256 fingerprint. The fingerprint of the public key is in
         * format `users/{user}/sshPublicKeys/{fingerprint}`.
         */
        name?: string;
    }
    interface Params$Resource$Users$Sshpublickeys$Patch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The fingerprint of the public key to update. Public keys are identified
         * by their SHA-256 fingerprint. The fingerprint of the public key is in
         * format `users/{user}/sshPublicKeys/{fingerprint}`.
         */
        name?: string;
        /**
         * Mask to control which fields get updated. Updates all if not present.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SshPublicKey;
    }
}
