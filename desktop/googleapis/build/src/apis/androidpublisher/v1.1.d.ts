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
export declare namespace androidpublisher_v1_1 {
    interface Options extends GlobalOptions {
        version: 'v1_1';
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
     * Google Play Developer API
     *
     * Accesses Android application developers&#39; Google Play accounts.
     *
     * @example
     * const {google} = require('googleapis');
     * const androidpublisher = google.androidpublisher('v1.1');
     *
     * @namespace androidpublisher
     * @type {Function}
     * @version v1.1
     * @variation v1.1
     * @param {object=} options Options for Androidpublisher
     */
    class Androidpublisher {
        context: APIRequestContext;
        inapppurchases: Resource$Inapppurchases;
        purchases: Resource$Purchases;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * An InappPurchase resource indicates the status of a user&#39;s inapp
     * product purchase.
     */
    interface Schema$InappPurchase {
        /**
         * The consumption state of the inapp product. Possible values are:   - Yet
         * to be consumed  - Consumed
         */
        consumptionState?: number;
        /**
         * A developer-specified string that contains supplemental information about
         * an order.
         */
        developerPayload?: string;
        /**
         * This kind represents an inappPurchase object in the androidpublisher
         * service.
         */
        kind?: string;
        /**
         * The order id associated with the purchase of the inapp product.
         */
        orderId?: string;
        /**
         * The purchase state of the order. Possible values are:   - Purchased  -
         * Canceled
         */
        purchaseState?: number;
        /**
         * The time the product was purchased, in milliseconds since the epoch (Jan
         * 1, 1970).
         */
        purchaseTime?: string;
        /**
         * The type of purchase of the inapp product. This field is only set if this
         * purchase was not made using the standard in-app billing flow. Possible
         * values are:   - Test (i.e. purchased from a license testing account)  -
         * Promo (i.e. purchased using a promo code)  - Rewarded (i.e. from watching
         * a video ad instead of paying)
         */
        purchaseType?: number;
    }
    /**
     * A SubscriptionPurchase resource indicates the status of a user&#39;s
     * subscription purchase.
     */
    interface Schema$SubscriptionPurchase {
        /**
         * Whether the subscription will automatically be renewed when it reaches
         * its current expiry time.
         */
        autoRenewing?: boolean;
        /**
         * Time at which the subscription was granted, in milliseconds since the
         * Epoch.
         */
        initiationTimestampMsec?: string;
        /**
         * This kind represents a subscriptionPurchase object in the
         * androidpublisher service.
         */
        kind?: string;
        /**
         * Time at which the subscription will expire, in milliseconds since the
         * Epoch.
         */
        validUntilTimestampMsec?: string;
    }
    class Resource$Inapppurchases {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * androidpublisher.inapppurchases.get
         * @desc Checks the purchase and consumption status of an inapp item.
         * @alias androidpublisher.inapppurchases.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.packageName The package name of the application the inapp product was sold in (for example, 'com.some.thing').
         * @param {string} params.productId The inapp product SKU (for example, 'com.some.thing.inapp1').
         * @param {string} params.token The token provided to the user's device when the inapp product was purchased.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Inapppurchases$Get, options?: MethodOptions): GaxiosPromise<Schema$InappPurchase>;
        get(params: Params$Resource$Inapppurchases$Get, options: MethodOptions | BodyResponseCallback<Schema$InappPurchase>, callback: BodyResponseCallback<Schema$InappPurchase>): void;
        get(params: Params$Resource$Inapppurchases$Get, callback: BodyResponseCallback<Schema$InappPurchase>): void;
        get(callback: BodyResponseCallback<Schema$InappPurchase>): void;
    }
    interface Params$Resource$Inapppurchases$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The package name of the application the inapp product was sold in (for
         * example, 'com.some.thing').
         */
        packageName?: string;
        /**
         * The inapp product SKU (for example, 'com.some.thing.inapp1').
         */
        productId?: string;
        /**
         * The token provided to the user's device when the inapp product was
         * purchased.
         */
        token?: string;
    }
    class Resource$Purchases {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * androidpublisher.purchases.cancel
         * @desc Cancels a user's subscription purchase. The subscription remains
         * valid until its expiration time.
         * @alias androidpublisher.purchases.cancel
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.packageName The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
         * @param {string} params.subscriptionId The purchased subscription ID (for example, 'monthly001').
         * @param {string} params.token The token provided to the user's device when the subscription was purchased.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        cancel(params?: Params$Resource$Purchases$Cancel, options?: MethodOptions): GaxiosPromise<void>;
        cancel(params: Params$Resource$Purchases$Cancel, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        cancel(params: Params$Resource$Purchases$Cancel, callback: BodyResponseCallback<void>): void;
        cancel(callback: BodyResponseCallback<void>): void;
        /**
         * androidpublisher.purchases.get
         * @desc Checks whether a user's subscription purchase is valid and returns
         * its expiry time.
         * @alias androidpublisher.purchases.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.packageName The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
         * @param {string} params.subscriptionId The purchased subscription ID (for example, 'monthly001').
         * @param {string} params.token The token provided to the user's device when the subscription was purchased.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Purchases$Get, options?: MethodOptions): GaxiosPromise<Schema$SubscriptionPurchase>;
        get(params: Params$Resource$Purchases$Get, options: MethodOptions | BodyResponseCallback<Schema$SubscriptionPurchase>, callback: BodyResponseCallback<Schema$SubscriptionPurchase>): void;
        get(params: Params$Resource$Purchases$Get, callback: BodyResponseCallback<Schema$SubscriptionPurchase>): void;
        get(callback: BodyResponseCallback<Schema$SubscriptionPurchase>): void;
    }
    interface Params$Resource$Purchases$Cancel extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The package name of the application for which this subscription was
         * purchased (for example, 'com.some.thing').
         */
        packageName?: string;
        /**
         * The purchased subscription ID (for example, 'monthly001').
         */
        subscriptionId?: string;
        /**
         * The token provided to the user's device when the subscription was
         * purchased.
         */
        token?: string;
    }
    interface Params$Resource$Purchases$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The package name of the application for which this subscription was
         * purchased (for example, 'com.some.thing').
         */
        packageName?: string;
        /**
         * The purchased subscription ID (for example, 'monthly001').
         */
        subscriptionId?: string;
        /**
         * The token provided to the user's device when the subscription was
         * purchased.
         */
        token?: string;
    }
}
