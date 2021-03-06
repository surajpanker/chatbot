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
export declare namespace reseller_v1 {
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
     * Enterprise Apps Reseller API
     *
     * Creates and manages your customers and their subscriptions.
     *
     * @example
     * const {google} = require('googleapis');
     * const reseller = google.reseller('v1');
     *
     * @namespace reseller
     * @type {Function}
     * @version v1
     * @variation v1
     * @param {object=} options Options for Reseller
     */
    class Reseller {
        context: APIRequestContext;
        customers: Resource$Customers;
        resellernotify: Resource$Resellernotify;
        subscriptions: Resource$Subscriptions;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * JSON template for address of a customer.
     */
    interface Schema$Address {
        /**
         * A customer&#39;s physical address. An address can be composed of one to
         * three lines. The addressline2 and addressLine3 are optional.
         */
        addressLine1?: string;
        /**
         * Line 2 of the address.
         */
        addressLine2?: string;
        /**
         * Line 3 of the address.
         */
        addressLine3?: string;
        /**
         * The customer contact&#39;s name. This is required.
         */
        contactName?: string;
        /**
         * For countryCode information, see the ISO 3166 country code elements.
         * Verify that country is approved for resale of Google products. This
         * property is required when creating a new customer.
         */
        countryCode?: string;
        /**
         * Identifies the resource as a customer address. Value: customers#address
         */
        kind?: string;
        /**
         * An example of a locality value is the city of San Francisco.
         */
        locality?: string;
        /**
         * The company or company division name. This is required.
         */
        organizationName?: string;
        /**
         * A postalCode example is a postal zip code such as 94043. This property is
         * required when creating a new customer.
         */
        postalCode?: string;
        /**
         * An example of a region value is CA for the state of California.
         */
        region?: string;
    }
    /**
     * JSON template for the ChangePlan rpc request.
     */
    interface Schema$ChangePlanRequest {
        /**
         * Google-issued code (100 char max) for discounted pricing on subscription
         * plans. Deal code must be included in changePlan request in order to
         * receive discounted rate. This property is optional. If a deal code has
         * already been added to a subscription, this property may be left empty and
         * the existing discounted rate will still apply (if not empty, only provide
         * the deal code that is already present on the subscription). If a deal
         * code has never been added to a subscription and this property is left
         * blank, regular pricing will apply.
         */
        dealCode?: string;
        /**
         * Identifies the resource as a subscription change plan request. Value:
         * subscriptions#changePlanRequest
         */
        kind?: string;
        /**
         * The planName property is required. This is the name of the
         * subscription&#39;s payment plan. For more information about the Google
         * payment plans, see API concepts.  Possible values are:   -
         * ANNUAL_MONTHLY_PAY - The annual commitment plan with monthly payments
         * Caution: ANNUAL_MONTHLY_PAY is returned as ANNUAL in all API responses.
         * - ANNUAL_YEARLY_PAY - The annual commitment plan with yearly payments   -
         * FLEXIBLE - The flexible plan   - TRIAL - The 30-day free trial plan
         */
        planName?: string;
        /**
         * This is an optional property. This purchase order (PO) information is for
         * resellers to use for their company tracking usage. If a purchaseOrderId
         * value is given it appears in the API responses and shows up in the
         * invoice. The property accepts up to 80 plain text characters.
         */
        purchaseOrderId?: string;
        /**
         * This is a required property. The seats property is the number of user
         * seat licenses.
         */
        seats?: Schema$Seats;
    }
    /**
     * JSON template for a customer.
     */
    interface Schema$Customer {
        /**
         * Like the &quot;Customer email&quot; in the reseller tools, this email is
         * the secondary contact used if something happens to the customer&#39;s
         * service such as service outage or a security issue. This property is
         * required when creating a new customer and should not use the same domain
         * as customerDomain.
         */
        alternateEmail?: string;
        /**
         * The customer&#39;s primary domain name string. customerDomain is required
         * when creating a new customer. Do not include the www prefix in the domain
         * when adding a customer.
         */
        customerDomain?: string;
        /**
         * Whether the customer&#39;s primary domain has been verified.
         */
        customerDomainVerified?: boolean;
        /**
         * This property will always be returned in a response as the unique
         * identifier generated by Google. In a request, this property can be either
         * the primary domain or the unique identifier generated by Google.
         */
        customerId?: string;
        /**
         * Identifies the resource as a customer. Value: reseller#customer
         */
        kind?: string;
        /**
         * Customer contact phone number. Must start with &quot;+&quot; followed by
         * the country code. The rest of the number can be contiguous numbers or
         * respect the phone local format conventions, but it must be a real phone
         * number and not, for example, &quot;123&quot;. This field is silently
         * ignored if invalid.
         */
        phoneNumber?: string;
        /**
         * A customer&#39;s address information. Each field has a limit of 255
         * charcters.
         */
        postalAddress?: Schema$Address;
        /**
         * URL to customer&#39;s Admin console dashboard. The read-only URL is
         * generated by the API service. This is used if your client application
         * requires the customer to complete a task in the Admin console.
         */
        resourceUiUrl?: string;
    }
    /**
     * JSON template for a subscription renewal settings.
     */
    interface Schema$RenewalSettings {
        /**
         * Identifies the resource as a subscription renewal setting. Value:
         * subscriptions#renewalSettings
         */
        kind?: string;
        /**
         * Renewal settings for the annual commitment plan. For more detailed
         * information, see renewal options in the administrator help center. When
         * renewing a subscription, the renewalType is a required property.
         */
        renewalType?: string;
    }
    /**
     * JSON template for resellernotify getwatchdetails response.
     */
    interface Schema$ResellernotifyGetwatchdetailsResponse {
        /**
         * List of registered service accounts.
         */
        serviceAccountEmailAddresses?: string[];
        /**
         * Topic name of the PubSub
         */
        topicName?: string;
    }
    /**
     * JSON template for resellernotify response.
     */
    interface Schema$ResellernotifyResource {
        /**
         * Topic name of the PubSub
         */
        topicName?: string;
    }
    /**
     * JSON template for subscription seats.
     */
    interface Schema$Seats {
        /**
         * Identifies the resource as a subscription seat setting. Value:
         * subscriptions#seats
         */
        kind?: string;
        /**
         * Read-only field containing the current number of users that are assigned
         * a license for the product defined in skuId. This field&#39;s value is
         * equivalent to the numerical count of users returned by the Enterprise
         * License Manager API method: listForProductAndSku
         */
        licensedNumberOfSeats?: number;
        /**
         * This is a required property and is exclusive to subscriptions with
         * FLEXIBLE or TRIAL plans. This property sets the maximum number of
         * licensed users allowed on a subscription. This quantity can be increased
         * up to the maximum limit defined in the reseller&#39;s contract. The
         * minimum quantity is the current number of users in the customer account.
         * Note: G Suite subscriptions automatically assign a license to every user.
         */
        maximumNumberOfSeats?: number;
        /**
         * This is a required property and is exclusive to subscriptions with
         * ANNUAL_MONTHLY_PAY and ANNUAL_YEARLY_PAY plans. This property sets the
         * maximum number of licenses assignable to users on a subscription. The
         * reseller can add more licenses, but once set, the numberOfSeats cannot be
         * reduced until renewal. The reseller is invoiced based on the
         * numberOfSeats value regardless of how many of these user licenses are
         * assigned. Note: G Suite subscriptions automatically assign a license to
         * every user.
         */
        numberOfSeats?: number;
    }
    /**
     * JSON template for a subscription.
     */
    interface Schema$Subscription {
        /**
         * Read-only field that returns the current billing method for a
         * subscription.
         */
        billingMethod?: string;
        /**
         * The creationTime property is the date when subscription was created. It
         * is in milliseconds using the Epoch format. See an example Epoch
         * converter.
         */
        creationTime?: string;
        /**
         * Primary domain name of the customer
         */
        customerDomain?: string;
        /**
         * This property will always be returned in a response as the unique
         * identifier generated by Google. In a request, this property can be either
         * the primary domain or the unique identifier generated by Google.
         */
        customerId?: string;
        /**
         * Google-issued code (100 char max) for discounted pricing on subscription
         * plans. Deal code must be included in insert requests in order to receive
         * discounted rate. This property is optional, regular pricing applies if
         * left empty.
         */
        dealCode?: string;
        /**
         * Identifies the resource as a Subscription. Value: reseller#subscription
         */
        kind?: string;
        /**
         * The plan property is required. In this version of the API, the G Suite
         * plans are the flexible plan, annual commitment plan, and the 30-day free
         * trial plan. For more information about the API&quot;s payment plans, see
         * the API concepts.
         */
        plan?: {
            commitmentInterval?: {
                endTime?: string;
                startTime?: string;
            };
            isCommitmentPlan?: boolean;
            planName?: string;
        };
        /**
         * This is an optional property. This purchase order (PO) information is for
         * resellers to use for their company tracking usage. If a purchaseOrderId
         * value is given it appears in the API responses and shows up in the
         * invoice. The property accepts up to 80 plain text characters.
         */
        purchaseOrderId?: string;
        /**
         * Renewal settings for the annual commitment plan. For more detailed
         * information, see renewal options in the administrator help center.
         */
        renewalSettings?: Schema$RenewalSettings;
        /**
         * URL to customer&#39;s Subscriptions page in the Admin console. The
         * read-only URL is generated by the API service. This is used if your
         * client application requires the customer to complete a task using the
         * Subscriptions page in the Admin console.
         */
        resourceUiUrl?: string;
        /**
         * This is a required property. The number and limit of user seat licenses
         * in the plan.
         */
        seats?: Schema$Seats;
        /**
         * A required property. The skuId is a unique system identifier for a
         * product&#39;s SKU assigned to a customer in the subscription. For
         * products and SKUs available in this version of the API, see  Product and
         * SKU IDs.
         */
        skuId?: string;
        /**
         * Read-only external display name for a product&#39;s SKU assigned to a
         * customer in the subscription. SKU names are subject to change at
         * Google&#39;s discretion. For products and SKUs available in this version
         * of the API, see  Product and SKU IDs.
         */
        skuName?: string;
        /**
         * This is an optional property.
         */
        status?: string;
        /**
         * The subscriptionId is the subscription identifier and is unique for each
         * customer. This is a required property. Since a subscriptionId changes
         * when a subscription is updated, we recommend not using this ID as a key
         * for persistent data. Use the subscriptionId as described in retrieve all
         * reseller subscriptions.
         */
        subscriptionId?: string;
        /**
         * Read-only field containing an enumerable of all the current suspension
         * reasons for a subscription. It is possible for a subscription to have
         * many concurrent, overlapping suspension reasons. A subscription&#39;s
         * STATUS is SUSPENDED until all pending suspensions are removed.  Possible
         * options include:   - PENDING_TOS_ACCEPTANCE - The customer has not logged
         * in and accepted the G Suite Resold Terms of Services.   -
         * RENEWAL_WITH_TYPE_CANCEL - The customer&#39;s commitment ended and their
         * service was cancelled at the end of their term.   - RESELLER_INITIATED -
         * A manual suspension invoked by a Reseller.   - TRIAL_ENDED - The
         * customer&#39;s trial expired without a plan selected.   - OTHER - The
         * customer is suspended for an internal Google reason (e.g. abuse or
         * otherwise).
         */
        suspensionReasons?: string[];
        /**
         * Read-only transfer related information for the subscription. For more
         * information, see retrieve transferable subscriptions for a customer.
         */
        transferInfo?: {
            minimumTransferableSeats?: number;
            transferabilityExpirationTime?: string;
        };
        /**
         * The G Suite annual commitment and flexible payment plans can be in a
         * 30-day free trial. For more information, see the API concepts.
         */
        trialSettings?: {
            isInTrial?: boolean;
            trialEndTime?: string;
        };
    }
    /**
     * JSON template for a subscription list.
     */
    interface Schema$Subscriptions {
        /**
         * Identifies the resource as a collection of subscriptions. Value:
         * reseller#subscriptions
         */
        kind?: string;
        /**
         * The continuation token, used to page through large result sets. Provide
         * this value in a subsequent request to return the next page of results.
         */
        nextPageToken?: string;
        /**
         * The subscriptions in this page of results.
         */
        subscriptions?: Schema$Subscription[];
    }
    class Resource$Customers {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * reseller.customers.get
         * @desc Get a customer account.
         * @alias reseller.customers.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Customers$Get, options?: MethodOptions): GaxiosPromise<Schema$Customer>;
        get(params: Params$Resource$Customers$Get, options: MethodOptions | BodyResponseCallback<Schema$Customer>, callback: BodyResponseCallback<Schema$Customer>): void;
        get(params: Params$Resource$Customers$Get, callback: BodyResponseCallback<Schema$Customer>): void;
        get(callback: BodyResponseCallback<Schema$Customer>): void;
        /**
         * reseller.customers.insert
         * @desc Order a new customer's account.
         * @alias reseller.customers.insert
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.customerAuthToken The customerAuthToken query string is required when creating a resold account that transfers a direct customer's subscription or transfers another reseller customer's subscription to your reseller management. This is a hexadecimal authentication token needed to complete the subscription transfer. For more information, see the administrator help center.
         * @param {().Customer} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert(params?: Params$Resource$Customers$Insert, options?: MethodOptions): GaxiosPromise<Schema$Customer>;
        insert(params: Params$Resource$Customers$Insert, options: MethodOptions | BodyResponseCallback<Schema$Customer>, callback: BodyResponseCallback<Schema$Customer>): void;
        insert(params: Params$Resource$Customers$Insert, callback: BodyResponseCallback<Schema$Customer>): void;
        insert(callback: BodyResponseCallback<Schema$Customer>): void;
        /**
         * reseller.customers.patch
         * @desc Update a customer account's settings. This method supports patch
         * semantics.
         * @alias reseller.customers.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
         * @param {().Customer} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Customers$Patch, options?: MethodOptions): GaxiosPromise<Schema$Customer>;
        patch(params: Params$Resource$Customers$Patch, options: MethodOptions | BodyResponseCallback<Schema$Customer>, callback: BodyResponseCallback<Schema$Customer>): void;
        patch(params: Params$Resource$Customers$Patch, callback: BodyResponseCallback<Schema$Customer>): void;
        patch(callback: BodyResponseCallback<Schema$Customer>): void;
        /**
         * reseller.customers.update
         * @desc Update a customer account's settings.
         * @alias reseller.customers.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
         * @param {().Customer} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Customers$Update, options?: MethodOptions): GaxiosPromise<Schema$Customer>;
        update(params: Params$Resource$Customers$Update, options: MethodOptions | BodyResponseCallback<Schema$Customer>, callback: BodyResponseCallback<Schema$Customer>): void;
        update(params: Params$Resource$Customers$Update, callback: BodyResponseCallback<Schema$Customer>): void;
        update(callback: BodyResponseCallback<Schema$Customer>): void;
    }
    interface Params$Resource$Customers$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Either the customer's primary domain name or the customer's unique
         * identifier. If using the domain name, we do not recommend using a
         * customerId as a key for persistent data. If the domain name for a
         * customerId is changed, the Google system automatically updates.
         */
        customerId?: string;
    }
    interface Params$Resource$Customers$Insert extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The customerAuthToken query string is required when creating a resold
         * account that transfers a direct customer's subscription or transfers
         * another reseller customer's subscription to your reseller management.
         * This is a hexadecimal authentication token needed to complete the
         * subscription transfer. For more information, see the administrator help
         * center.
         */
        customerAuthToken?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Customer;
    }
    interface Params$Resource$Customers$Patch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Either the customer's primary domain name or the customer's unique
         * identifier. If using the domain name, we do not recommend using a
         * customerId as a key for persistent data. If the domain name for a
         * customerId is changed, the Google system automatically updates.
         */
        customerId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Customer;
    }
    interface Params$Resource$Customers$Update extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Either the customer's primary domain name or the customer's unique
         * identifier. If using the domain name, we do not recommend using a
         * customerId as a key for persistent data. If the domain name for a
         * customerId is changed, the Google system automatically updates.
         */
        customerId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Customer;
    }
    class Resource$Resellernotify {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * reseller.resellernotify.getwatchdetails
         * @desc Returns all the details of the watch corresponding to the reseller.
         * @alias reseller.resellernotify.getwatchdetails
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getwatchdetails(params?: Params$Resource$Resellernotify$Getwatchdetails, options?: MethodOptions): GaxiosPromise<Schema$ResellernotifyGetwatchdetailsResponse>;
        getwatchdetails(params: Params$Resource$Resellernotify$Getwatchdetails, options: MethodOptions | BodyResponseCallback<Schema$ResellernotifyGetwatchdetailsResponse>, callback: BodyResponseCallback<Schema$ResellernotifyGetwatchdetailsResponse>): void;
        getwatchdetails(params: Params$Resource$Resellernotify$Getwatchdetails, callback: BodyResponseCallback<Schema$ResellernotifyGetwatchdetailsResponse>): void;
        getwatchdetails(callback: BodyResponseCallback<Schema$ResellernotifyGetwatchdetailsResponse>): void;
        /**
         * reseller.resellernotify.register
         * @desc Registers a Reseller for receiving notifications.
         * @alias reseller.resellernotify.register
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.serviceAccountEmailAddress The service account which will own the created Cloud-PubSub topic.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        register(params?: Params$Resource$Resellernotify$Register, options?: MethodOptions): GaxiosPromise<Schema$ResellernotifyResource>;
        register(params: Params$Resource$Resellernotify$Register, options: MethodOptions | BodyResponseCallback<Schema$ResellernotifyResource>, callback: BodyResponseCallback<Schema$ResellernotifyResource>): void;
        register(params: Params$Resource$Resellernotify$Register, callback: BodyResponseCallback<Schema$ResellernotifyResource>): void;
        register(callback: BodyResponseCallback<Schema$ResellernotifyResource>): void;
        /**
         * reseller.resellernotify.unregister
         * @desc Unregisters a Reseller for receiving notifications.
         * @alias reseller.resellernotify.unregister
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.serviceAccountEmailAddress The service account which owns the Cloud-PubSub topic.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        unregister(params?: Params$Resource$Resellernotify$Unregister, options?: MethodOptions): GaxiosPromise<Schema$ResellernotifyResource>;
        unregister(params: Params$Resource$Resellernotify$Unregister, options: MethodOptions | BodyResponseCallback<Schema$ResellernotifyResource>, callback: BodyResponseCallback<Schema$ResellernotifyResource>): void;
        unregister(params: Params$Resource$Resellernotify$Unregister, callback: BodyResponseCallback<Schema$ResellernotifyResource>): void;
        unregister(callback: BodyResponseCallback<Schema$ResellernotifyResource>): void;
    }
    interface Params$Resource$Resellernotify$Getwatchdetails extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
    }
    interface Params$Resource$Resellernotify$Register extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The service account which will own the created Cloud-PubSub topic.
         */
        serviceAccountEmailAddress?: string;
    }
    interface Params$Resource$Resellernotify$Unregister extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The service account which owns the Cloud-PubSub topic.
         */
        serviceAccountEmailAddress?: string;
    }
    class Resource$Subscriptions {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * reseller.subscriptions.activate
         * @desc Activates a subscription previously suspended by the reseller
         * @alias reseller.subscriptions.activate
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
         * @param {string} params.subscriptionId This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        activate(params?: Params$Resource$Subscriptions$Activate, options?: MethodOptions): GaxiosPromise<Schema$Subscription>;
        activate(params: Params$Resource$Subscriptions$Activate, options: MethodOptions | BodyResponseCallback<Schema$Subscription>, callback: BodyResponseCallback<Schema$Subscription>): void;
        activate(params: Params$Resource$Subscriptions$Activate, callback: BodyResponseCallback<Schema$Subscription>): void;
        activate(callback: BodyResponseCallback<Schema$Subscription>): void;
        /**
         * reseller.subscriptions.changePlan
         * @desc Update a subscription plan. Use this method to update a plan for a
         * 30-day trial or a flexible plan subscription to an annual commitment plan
         * with monthly or yearly payments.
         * @alias reseller.subscriptions.changePlan
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
         * @param {string} params.subscriptionId This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
         * @param {().ChangePlanRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        changePlan(params?: Params$Resource$Subscriptions$Changeplan, options?: MethodOptions): GaxiosPromise<Schema$Subscription>;
        changePlan(params: Params$Resource$Subscriptions$Changeplan, options: MethodOptions | BodyResponseCallback<Schema$Subscription>, callback: BodyResponseCallback<Schema$Subscription>): void;
        changePlan(params: Params$Resource$Subscriptions$Changeplan, callback: BodyResponseCallback<Schema$Subscription>): void;
        changePlan(callback: BodyResponseCallback<Schema$Subscription>): void;
        /**
         * reseller.subscriptions.changeRenewalSettings
         * @desc Update a user license's renewal settings. This is applicable for
         * accounts with annual commitment plans only.
         * @alias reseller.subscriptions.changeRenewalSettings
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
         * @param {string} params.subscriptionId This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
         * @param {().RenewalSettings} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        changeRenewalSettings(params?: Params$Resource$Subscriptions$Changerenewalsettings, options?: MethodOptions): GaxiosPromise<Schema$Subscription>;
        changeRenewalSettings(params: Params$Resource$Subscriptions$Changerenewalsettings, options: MethodOptions | BodyResponseCallback<Schema$Subscription>, callback: BodyResponseCallback<Schema$Subscription>): void;
        changeRenewalSettings(params: Params$Resource$Subscriptions$Changerenewalsettings, callback: BodyResponseCallback<Schema$Subscription>): void;
        changeRenewalSettings(callback: BodyResponseCallback<Schema$Subscription>): void;
        /**
         * reseller.subscriptions.changeSeats
         * @desc Update a subscription's user license settings.
         * @alias reseller.subscriptions.changeSeats
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
         * @param {string} params.subscriptionId This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
         * @param {().Seats} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        changeSeats(params?: Params$Resource$Subscriptions$Changeseats, options?: MethodOptions): GaxiosPromise<Schema$Subscription>;
        changeSeats(params: Params$Resource$Subscriptions$Changeseats, options: MethodOptions | BodyResponseCallback<Schema$Subscription>, callback: BodyResponseCallback<Schema$Subscription>): void;
        changeSeats(params: Params$Resource$Subscriptions$Changeseats, callback: BodyResponseCallback<Schema$Subscription>): void;
        changeSeats(callback: BodyResponseCallback<Schema$Subscription>): void;
        /**
         * reseller.subscriptions.delete
         * @desc Cancel or transfer a subscription to direct.
         * @alias reseller.subscriptions.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
         * @param {string} params.deletionType The deletionType query string enables the cancellation, downgrade, or suspension of a subscription.
         * @param {string} params.subscriptionId This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Subscriptions$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Subscriptions$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Subscriptions$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * reseller.subscriptions.get
         * @desc Get a specific subscription.
         * @alias reseller.subscriptions.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
         * @param {string} params.subscriptionId This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Subscriptions$Get, options?: MethodOptions): GaxiosPromise<Schema$Subscription>;
        get(params: Params$Resource$Subscriptions$Get, options: MethodOptions | BodyResponseCallback<Schema$Subscription>, callback: BodyResponseCallback<Schema$Subscription>): void;
        get(params: Params$Resource$Subscriptions$Get, callback: BodyResponseCallback<Schema$Subscription>): void;
        get(callback: BodyResponseCallback<Schema$Subscription>): void;
        /**
         * reseller.subscriptions.insert
         * @desc Create or transfer a subscription.
         * @alias reseller.subscriptions.insert
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.customerAuthToken The customerAuthToken query string is required when creating a resold account that transfers a direct customer's subscription or transfers another reseller customer's subscription to your reseller management. This is a hexadecimal authentication token needed to complete the subscription transfer. For more information, see the administrator help center.
         * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
         * @param {().Subscription} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert(params?: Params$Resource$Subscriptions$Insert, options?: MethodOptions): GaxiosPromise<Schema$Subscription>;
        insert(params: Params$Resource$Subscriptions$Insert, options: MethodOptions | BodyResponseCallback<Schema$Subscription>, callback: BodyResponseCallback<Schema$Subscription>): void;
        insert(params: Params$Resource$Subscriptions$Insert, callback: BodyResponseCallback<Schema$Subscription>): void;
        insert(callback: BodyResponseCallback<Schema$Subscription>): void;
        /**
         * reseller.subscriptions.list
         * @desc List of subscriptions managed by the reseller. The list can be all
         * subscriptions, all of a customer's subscriptions, or all of a customer's
         * transferable subscriptions.
         * @alias reseller.subscriptions.list
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.customerAuthToken The customerAuthToken query string is required when creating a resold account that transfers a direct customer's subscription or transfers another reseller customer's subscription to your reseller management. This is a hexadecimal authentication token needed to complete the subscription transfer. For more information, see the administrator help center.
         * @param {string=} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
         * @param {string=} params.customerNamePrefix When retrieving all of your subscriptions and filtering for specific customers, you can enter a prefix for a customer name. Using an example customer group that includes exam.com, example20.com and example.com:   - exa -- Returns all customer names that start with 'exa' which could include exam.com, example20.com, and example.com. A name prefix is similar to using a regular expression's asterisk, exa*.  - example -- Returns example20.com and example.com.
         * @param {integer=} params.maxResults When retrieving a large list, the maxResults is the maximum number of results per page. The nextPageToken value takes you to the next page. The default is 20.
         * @param {string=} params.pageToken Token to specify next page in the list
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Subscriptions$List, options?: MethodOptions): GaxiosPromise<Schema$Subscriptions>;
        list(params: Params$Resource$Subscriptions$List, options: MethodOptions | BodyResponseCallback<Schema$Subscriptions>, callback: BodyResponseCallback<Schema$Subscriptions>): void;
        list(params: Params$Resource$Subscriptions$List, callback: BodyResponseCallback<Schema$Subscriptions>): void;
        list(callback: BodyResponseCallback<Schema$Subscriptions>): void;
        /**
         * reseller.subscriptions.startPaidService
         * @desc Immediately move a 30-day free trial subscription to a paid service
         * subscription.
         * @alias reseller.subscriptions.startPaidService
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
         * @param {string} params.subscriptionId This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        startPaidService(params?: Params$Resource$Subscriptions$Startpaidservice, options?: MethodOptions): GaxiosPromise<Schema$Subscription>;
        startPaidService(params: Params$Resource$Subscriptions$Startpaidservice, options: MethodOptions | BodyResponseCallback<Schema$Subscription>, callback: BodyResponseCallback<Schema$Subscription>): void;
        startPaidService(params: Params$Resource$Subscriptions$Startpaidservice, callback: BodyResponseCallback<Schema$Subscription>): void;
        startPaidService(callback: BodyResponseCallback<Schema$Subscription>): void;
        /**
         * reseller.subscriptions.suspend
         * @desc Suspends an active subscription.
         * @alias reseller.subscriptions.suspend
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
         * @param {string} params.subscriptionId This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        suspend(params?: Params$Resource$Subscriptions$Suspend, options?: MethodOptions): GaxiosPromise<Schema$Subscription>;
        suspend(params: Params$Resource$Subscriptions$Suspend, options: MethodOptions | BodyResponseCallback<Schema$Subscription>, callback: BodyResponseCallback<Schema$Subscription>): void;
        suspend(params: Params$Resource$Subscriptions$Suspend, callback: BodyResponseCallback<Schema$Subscription>): void;
        suspend(callback: BodyResponseCallback<Schema$Subscription>): void;
    }
    interface Params$Resource$Subscriptions$Activate extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Either the customer's primary domain name or the customer's unique
         * identifier. If using the domain name, we do not recommend using a
         * customerId as a key for persistent data. If the domain name for a
         * customerId is changed, the Google system automatically updates.
         */
        customerId?: string;
        /**
         * This is a required property. The subscriptionId is the subscription
         * identifier and is unique for each customer. Since a subscriptionId
         * changes when a subscription is updated, we recommend to not use this ID
         * as a key for persistent data. And the subscriptionId can be found using
         * the retrieve all reseller subscriptions method.
         */
        subscriptionId?: string;
    }
    interface Params$Resource$Subscriptions$Changeplan extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Either the customer's primary domain name or the customer's unique
         * identifier. If using the domain name, we do not recommend using a
         * customerId as a key for persistent data. If the domain name for a
         * customerId is changed, the Google system automatically updates.
         */
        customerId?: string;
        /**
         * This is a required property. The subscriptionId is the subscription
         * identifier and is unique for each customer. Since a subscriptionId
         * changes when a subscription is updated, we recommend to not use this ID
         * as a key for persistent data. And the subscriptionId can be found using
         * the retrieve all reseller subscriptions method.
         */
        subscriptionId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ChangePlanRequest;
    }
    interface Params$Resource$Subscriptions$Changerenewalsettings extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Either the customer's primary domain name or the customer's unique
         * identifier. If using the domain name, we do not recommend using a
         * customerId as a key for persistent data. If the domain name for a
         * customerId is changed, the Google system automatically updates.
         */
        customerId?: string;
        /**
         * This is a required property. The subscriptionId is the subscription
         * identifier and is unique for each customer. Since a subscriptionId
         * changes when a subscription is updated, we recommend to not use this ID
         * as a key for persistent data. And the subscriptionId can be found using
         * the retrieve all reseller subscriptions method.
         */
        subscriptionId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$RenewalSettings;
    }
    interface Params$Resource$Subscriptions$Changeseats extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Either the customer's primary domain name or the customer's unique
         * identifier. If using the domain name, we do not recommend using a
         * customerId as a key for persistent data. If the domain name for a
         * customerId is changed, the Google system automatically updates.
         */
        customerId?: string;
        /**
         * This is a required property. The subscriptionId is the subscription
         * identifier and is unique for each customer. Since a subscriptionId
         * changes when a subscription is updated, we recommend to not use this ID
         * as a key for persistent data. And the subscriptionId can be found using
         * the retrieve all reseller subscriptions method.
         */
        subscriptionId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Seats;
    }
    interface Params$Resource$Subscriptions$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Either the customer's primary domain name or the customer's unique
         * identifier. If using the domain name, we do not recommend using a
         * customerId as a key for persistent data. If the domain name for a
         * customerId is changed, the Google system automatically updates.
         */
        customerId?: string;
        /**
         * The deletionType query string enables the cancellation, downgrade, or
         * suspension of a subscription.
         */
        deletionType?: string;
        /**
         * This is a required property. The subscriptionId is the subscription
         * identifier and is unique for each customer. Since a subscriptionId
         * changes when a subscription is updated, we recommend to not use this ID
         * as a key for persistent data. And the subscriptionId can be found using
         * the retrieve all reseller subscriptions method.
         */
        subscriptionId?: string;
    }
    interface Params$Resource$Subscriptions$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Either the customer's primary domain name or the customer's unique
         * identifier. If using the domain name, we do not recommend using a
         * customerId as a key for persistent data. If the domain name for a
         * customerId is changed, the Google system automatically updates.
         */
        customerId?: string;
        /**
         * This is a required property. The subscriptionId is the subscription
         * identifier and is unique for each customer. Since a subscriptionId
         * changes when a subscription is updated, we recommend to not use this ID
         * as a key for persistent data. And the subscriptionId can be found using
         * the retrieve all reseller subscriptions method.
         */
        subscriptionId?: string;
    }
    interface Params$Resource$Subscriptions$Insert extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The customerAuthToken query string is required when creating a resold
         * account that transfers a direct customer's subscription or transfers
         * another reseller customer's subscription to your reseller management.
         * This is a hexadecimal authentication token needed to complete the
         * subscription transfer. For more information, see the administrator help
         * center.
         */
        customerAuthToken?: string;
        /**
         * Either the customer's primary domain name or the customer's unique
         * identifier. If using the domain name, we do not recommend using a
         * customerId as a key for persistent data. If the domain name for a
         * customerId is changed, the Google system automatically updates.
         */
        customerId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Subscription;
    }
    interface Params$Resource$Subscriptions$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The customerAuthToken query string is required when creating a resold
         * account that transfers a direct customer's subscription or transfers
         * another reseller customer's subscription to your reseller management.
         * This is a hexadecimal authentication token needed to complete the
         * subscription transfer. For more information, see the administrator help
         * center.
         */
        customerAuthToken?: string;
        /**
         * Either the customer's primary domain name or the customer's unique
         * identifier. If using the domain name, we do not recommend using a
         * customerId as a key for persistent data. If the domain name for a
         * customerId is changed, the Google system automatically updates.
         */
        customerId?: string;
        /**
         * When retrieving all of your subscriptions and filtering for specific
         * customers, you can enter a prefix for a customer name. Using an example
         * customer group that includes exam.com, example20.com and example.com:   -
         * exa -- Returns all customer names that start with 'exa' which could
         * include exam.com, example20.com, and example.com. A name prefix is
         * similar to using a regular expression's asterisk, exa*.  - example --
         * Returns example20.com and example.com.
         */
        customerNamePrefix?: string;
        /**
         * When retrieving a large list, the maxResults is the maximum number of
         * results per page. The nextPageToken value takes you to the next page. The
         * default is 20.
         */
        maxResults?: number;
        /**
         * Token to specify next page in the list
         */
        pageToken?: string;
    }
    interface Params$Resource$Subscriptions$Startpaidservice extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Either the customer's primary domain name or the customer's unique
         * identifier. If using the domain name, we do not recommend using a
         * customerId as a key for persistent data. If the domain name for a
         * customerId is changed, the Google system automatically updates.
         */
        customerId?: string;
        /**
         * This is a required property. The subscriptionId is the subscription
         * identifier and is unique for each customer. Since a subscriptionId
         * changes when a subscription is updated, we recommend to not use this ID
         * as a key for persistent data. And the subscriptionId can be found using
         * the retrieve all reseller subscriptions method.
         */
        subscriptionId?: string;
    }
    interface Params$Resource$Subscriptions$Suspend extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Either the customer's primary domain name or the customer's unique
         * identifier. If using the domain name, we do not recommend using a
         * customerId as a key for persistent data. If the domain name for a
         * customerId is changed, the Google system automatically updates.
         */
        customerId?: string;
        /**
         * This is a required property. The subscriptionId is the subscription
         * identifier and is unique for each customer. Since a subscriptionId
         * changes when a subscription is updated, we recommend to not use this ID
         * as a key for persistent data. And the subscriptionId can be found using
         * the retrieve all reseller subscriptions method.
         */
        subscriptionId?: string;
    }
}
