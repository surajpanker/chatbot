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
export declare namespace cloudprivatecatalog_v1beta1 {
    interface Options extends GlobalOptions {
        version: 'v1beta1';
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
     * Cloud Private Catalog API
     *
     * Enable cloud users to discover enterprise catalogs and products in their
     * organizations.
     *
     * @example
     * const {google} = require('googleapis');
     * const cloudprivatecatalog = google.cloudprivatecatalog('v1beta1');
     *
     * @namespace cloudprivatecatalog
     * @type {Function}
     * @version v1beta1
     * @variation v1beta1
     * @param {object=} options Options for Cloudprivatecatalog
     */
    class Cloudprivatecatalog {
        context: APIRequestContext;
        folders: Resource$Folders;
        organizations: Resource$Organizations;
        projects: Resource$Projects;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * The readonly representation of a catalog computed with a given resource
     * context.
     */
    interface Schema$GoogleCloudPrivatecatalogV1beta1Catalog {
        /**
         * Output only. The time when the catalog was created.
         */
        createTime?: string;
        /**
         * Output only. The description of the catalog.
         */
        description?: string;
        /**
         * Output only. The descriptive name of the catalog as it appears in UIs.
         */
        displayName?: string;
        /**
         * Output only. The resource name of the target catalog, in the format of
         * `catalogs/{catalog_id}&#39;.
         */
        name?: string;
        /**
         * Output only. The time when the catalog was last updated.
         */
        updateTime?: string;
    }
    /**
     * The readonly representation of a product computed with a given resource
     * context.
     */
    interface Schema$GoogleCloudPrivatecatalogV1beta1Product {
        /**
         * Output only. The type of the product asset. It can be one of the
         * following values:  * `google.deploymentmanager.Template` *
         * `google.cloudprivatecatalog.ListingOnly`
         */
        assetType?: string;
        /**
         * Output only. The time when the product was created.
         */
        createTime?: string;
        /**
         * Output only. The display metadata to describe the product. The JSON
         * schema of the metadata differs by Product.asset_type. When the type is
         * `google.deploymentmanager.Template`, the schema is as follows:  ```
         * &quot;$schema&quot;: http://json-schema.org/draft-04/schema# type: object
         * properties:   name:     type: string     minLength: 1     maxLength: 64
         * description:     type: string     minLength: 1     maxLength: 2048
         * tagline:     type: string     minLength: 1     maxLength: 100
         * support_info:     type: string     minLength: 1     maxLength: 2048
         * creator:     type: string     minLength: 1     maxLength: 100
         * documentation:     type: array     items:       type: object properties:
         * url:           type: string           pattern:
         * &quot;^(https?)://[-a-zA-Z0-9+&amp;@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%=~_|]&quot;
         * title:           type: string           minLength: 1           maxLength:
         * 64         description:           type: string           minLength: 1
         * maxLength: 2048 required: - name - description additionalProperties:
         * false  ```  When the asset type is
         * `google.cloudprivatecatalog.ListingOnly`, the schema is as follows:  ```
         * &quot;$schema&quot;: http://json-schema.org/draft-04/schema# type: object
         * properties:   name:     type: string     minLength: 1     maxLength: 64
         * description:     type: string     minLength: 1     maxLength: 2048
         * tagline:     type: string     minLength: 1     maxLength: 100
         * support_info:     type: string     minLength: 1     maxLength: 2048
         * creator:     type: string     minLength: 1     maxLength: 100
         * documentation:     type: array     items:       type: object properties:
         * url:           type: string           pattern:
         * &quot;^(https?)://[-a-zA-Z0-9+&amp;@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%=~_|]&quot;
         * title:           type: string           minLength: 1           maxLength:
         * 64         description:           type: string           minLength: 1
         * maxLength: 2048   signup_url:     type: string     pattern:
         * &quot;^(https?)://[-a-zA-Z0-9+&amp;@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%=~_|]&quot;
         * required: - name - description - signup_url additionalProperties: false
         * ```
         */
        displayMetadata?: {
            [key: string]: any;
        };
        /**
         * Output only. The icon URI of the product.
         */
        iconUri?: string;
        /**
         * Output only. The resource name of the target product, in the format of
         * `products/a-z*[a-z0-9]&#39;.  A unique identifier for the product under a
         * catalog.
         */
        name?: string;
        /**
         * Output only. The time when the product was last updated.
         */
        updateTime?: string;
    }
    /**
     * Response message for PrivateCatalog.SearchCatalogs.
     */
    interface Schema$GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse {
        /**
         * The `Catalog`s computed from the resource context.
         */
        catalogs?: Schema$GoogleCloudPrivatecatalogV1beta1Catalog[];
        /**
         * A pagination token returned from a previous call to SearchCatalogs that
         * indicates from where listing should continue. This field is optional.
         */
        nextPageToken?: string;
    }
    /**
     * Response message for PrivateCatalog.SearchProducts.
     */
    interface Schema$GoogleCloudPrivatecatalogV1beta1SearchProductsResponse {
        /**
         * A pagination token returned from a previous call to SearchProducts that
         * indicates from where listing should continue. This field is optional.
         */
        nextPageToken?: string;
        /**
         * The `Product` resources computed from the resource context.
         */
        products?: Schema$GoogleCloudPrivatecatalogV1beta1Product[];
    }
    /**
     * Response message for PrivateCatalog.SearchVersions.
     */
    interface Schema$GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse {
        /**
         * A pagination token returned from a previous call to SearchVersions that
         * indicates from where the listing should continue. This field is optional.
         */
        nextPageToken?: string;
        /**
         * The `Version` resources computed from the resource context.
         */
        versions?: Schema$GoogleCloudPrivatecatalogV1beta1Version[];
    }
    /**
     * The consumer representation of a version which is a child resource under a
     * `Product` with asset data.
     */
    interface Schema$GoogleCloudPrivatecatalogV1beta1Version {
        /**
         * Output only. The asset which has been validated and is ready to be
         * provisioned. See google.cloud.privatecatalogproducer.v1beta.Version.asset
         * for details.
         */
        asset?: {
            [key: string]: any;
        };
        /**
         * Output only. The time when the version was created.
         */
        createTime?: string;
        /**
         * Output only. The user-supplied description of the version. Maximum of 256
         * characters.
         */
        description?: string;
        /**
         * Output only. The resource name of the version, in the format
         * `catalogs/{catalog_id}/products/{product_id}/versions/a-z*[a-z0-9]&#39;.
         * A unique identifier for the version under a product.
         */
        name?: string;
        /**
         * Output only. The time when the version was last updated.
         */
        updateTime?: string;
    }
    class Resource$Folders {
        context: APIRequestContext;
        catalogs: Resource$Folders$Catalogs;
        products: Resource$Folders$Products;
        versions: Resource$Folders$Versions;
        constructor(context: APIRequestContext);
    }
    class Resource$Folders$Catalogs {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * cloudprivatecatalog.folders.catalogs.search
         * @desc Search Catalog resources that consumers have access to, within the
         * scope of the consumer cloud resource hierarchy context.
         * @alias cloudprivatecatalog.folders.catalogs.search
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.pageSize The maximum number of entries that are requested.
         * @param {string=} params.pageToken A pagination token returned from a previous call to SearchCatalogs that indicates where this listing should continue from. This field is optional.
         * @param {string=} params.query The query to filter the catalogs. The supported queries are:  * Get a single catalog: `name=catalogs/{catalog_id}`
         * @param {string} params.resource_ Required. The name of the resource context. It can be in following formats:  * `projects/{project_id}` * `folders/{folder_id}` * `organizations/{organization_id}`
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        search(params?: Params$Resource$Folders$Catalogs$Search, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse>;
        search(params: Params$Resource$Folders$Catalogs$Search, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse>, callback: BodyResponseCallback<Schema$GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse>): void;
        search(params: Params$Resource$Folders$Catalogs$Search, callback: BodyResponseCallback<Schema$GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse>): void;
        search(callback: BodyResponseCallback<Schema$GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse>): void;
    }
    interface Params$Resource$Folders$Catalogs$Search extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The maximum number of entries that are requested.
         */
        pageSize?: number;
        /**
         * A pagination token returned from a previous call to SearchCatalogs that
         * indicates where this listing should continue from. This field is
         * optional.
         */
        pageToken?: string;
        /**
         * The query to filter the catalogs. The supported queries are:  * Get a
         * single catalog: `name=catalogs/{catalog_id}`
         */
        query?: string;
        /**
         * Required. The name of the resource context. It can be in following
         * formats:  * `projects/{project_id}` * `folders/{folder_id}` *
         * `organizations/{organization_id}`
         */
        resource?: string;
    }
    class Resource$Folders$Products {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * cloudprivatecatalog.folders.products.search
         * @desc Search Product resources that consumers have access to, within the
         * scope of the consumer cloud resource hierarchy context.
         * @alias cloudprivatecatalog.folders.products.search
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.pageSize The maximum number of entries that are requested.
         * @param {string=} params.pageToken A pagination token returned from a previous call to SearchProducts that indicates where this listing should continue from. This field is optional.
         * @param {string=} params.query The query to filter the products.  The supported queries are: * List products of all catalogs: empty * List products under a catalog: `parent=catalogs/{catalog_id}` * Get a product by name: `name=catalogs/{catalog_id}/products/{product_id}`
         * @param {string} params.resource_ Required. The name of the resource context. See SearchCatalogsRequest.resource for details.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        search(params?: Params$Resource$Folders$Products$Search, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudPrivatecatalogV1beta1SearchProductsResponse>;
        search(params: Params$Resource$Folders$Products$Search, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudPrivatecatalogV1beta1SearchProductsResponse>, callback: BodyResponseCallback<Schema$GoogleCloudPrivatecatalogV1beta1SearchProductsResponse>): void;
        search(params: Params$Resource$Folders$Products$Search, callback: BodyResponseCallback<Schema$GoogleCloudPrivatecatalogV1beta1SearchProductsResponse>): void;
        search(callback: BodyResponseCallback<Schema$GoogleCloudPrivatecatalogV1beta1SearchProductsResponse>): void;
    }
    interface Params$Resource$Folders$Products$Search extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The maximum number of entries that are requested.
         */
        pageSize?: number;
        /**
         * A pagination token returned from a previous call to SearchProducts that
         * indicates where this listing should continue from. This field is
         * optional.
         */
        pageToken?: string;
        /**
         * The query to filter the products.  The supported queries are: * List
         * products of all catalogs: empty * List products under a catalog:
         * `parent=catalogs/{catalog_id}` * Get a product by name:
         * `name=catalogs/{catalog_id}/products/{product_id}`
         */
        query?: string;
        /**
         * Required. The name of the resource context. See
         * SearchCatalogsRequest.resource for details.
         */
        resource?: string;
    }
    class Resource$Folders$Versions {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * cloudprivatecatalog.folders.versions.search
         * @desc Search Version resources that consumers have access to, within the
         * scope of the consumer cloud resource hierarchy context.
         * @alias cloudprivatecatalog.folders.versions.search
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.pageSize The maximum number of entries that are requested.
         * @param {string=} params.pageToken A pagination token returned from a previous call to SearchVersions that indicates where this listing should continue from. This field is optional.
         * @param {string=} params.query The query to filter the versions. Required.  The supported queries are: * List versions under a product: `parent=catalogs/{catalog_id}/products/{product_id}` * Get a version by name: `name=catalogs/{catalog_id}/products/{product_id}/versions/{version_id}`
         * @param {string} params.resource_ Required. The name of the resource context. See SearchCatalogsRequest.resource for details.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        search(params?: Params$Resource$Folders$Versions$Search, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse>;
        search(params: Params$Resource$Folders$Versions$Search, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse>, callback: BodyResponseCallback<Schema$GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse>): void;
        search(params: Params$Resource$Folders$Versions$Search, callback: BodyResponseCallback<Schema$GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse>): void;
        search(callback: BodyResponseCallback<Schema$GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse>): void;
    }
    interface Params$Resource$Folders$Versions$Search extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The maximum number of entries that are requested.
         */
        pageSize?: number;
        /**
         * A pagination token returned from a previous call to SearchVersions that
         * indicates where this listing should continue from. This field is
         * optional.
         */
        pageToken?: string;
        /**
         * The query to filter the versions. Required.  The supported queries are: *
         * List versions under a product:
         * `parent=catalogs/{catalog_id}/products/{product_id}` * Get a version by
         * name:
         * `name=catalogs/{catalog_id}/products/{product_id}/versions/{version_id}`
         */
        query?: string;
        /**
         * Required. The name of the resource context. See
         * SearchCatalogsRequest.resource for details.
         */
        resource?: string;
    }
    class Resource$Organizations {
        context: APIRequestContext;
        catalogs: Resource$Organizations$Catalogs;
        products: Resource$Organizations$Products;
        versions: Resource$Organizations$Versions;
        constructor(context: APIRequestContext);
    }
    class Resource$Organizations$Catalogs {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * cloudprivatecatalog.organizations.catalogs.search
         * @desc Search Catalog resources that consumers have access to, within the
         * scope of the consumer cloud resource hierarchy context.
         * @alias cloudprivatecatalog.organizations.catalogs.search
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.pageSize The maximum number of entries that are requested.
         * @param {string=} params.pageToken A pagination token returned from a previous call to SearchCatalogs that indicates where this listing should continue from. This field is optional.
         * @param {string=} params.query The query to filter the catalogs. The supported queries are:  * Get a single catalog: `name=catalogs/{catalog_id}`
         * @param {string} params.resource_ Required. The name of the resource context. It can be in following formats:  * `projects/{project_id}` * `folders/{folder_id}` * `organizations/{organization_id}`
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        search(params?: Params$Resource$Organizations$Catalogs$Search, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse>;
        search(params: Params$Resource$Organizations$Catalogs$Search, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse>, callback: BodyResponseCallback<Schema$GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse>): void;
        search(params: Params$Resource$Organizations$Catalogs$Search, callback: BodyResponseCallback<Schema$GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse>): void;
        search(callback: BodyResponseCallback<Schema$GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse>): void;
    }
    interface Params$Resource$Organizations$Catalogs$Search extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The maximum number of entries that are requested.
         */
        pageSize?: number;
        /**
         * A pagination token returned from a previous call to SearchCatalogs that
         * indicates where this listing should continue from. This field is
         * optional.
         */
        pageToken?: string;
        /**
         * The query to filter the catalogs. The supported queries are:  * Get a
         * single catalog: `name=catalogs/{catalog_id}`
         */
        query?: string;
        /**
         * Required. The name of the resource context. It can be in following
         * formats:  * `projects/{project_id}` * `folders/{folder_id}` *
         * `organizations/{organization_id}`
         */
        resource?: string;
    }
    class Resource$Organizations$Products {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * cloudprivatecatalog.organizations.products.search
         * @desc Search Product resources that consumers have access to, within the
         * scope of the consumer cloud resource hierarchy context.
         * @alias cloudprivatecatalog.organizations.products.search
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.pageSize The maximum number of entries that are requested.
         * @param {string=} params.pageToken A pagination token returned from a previous call to SearchProducts that indicates where this listing should continue from. This field is optional.
         * @param {string=} params.query The query to filter the products.  The supported queries are: * List products of all catalogs: empty * List products under a catalog: `parent=catalogs/{catalog_id}` * Get a product by name: `name=catalogs/{catalog_id}/products/{product_id}`
         * @param {string} params.resource_ Required. The name of the resource context. See SearchCatalogsRequest.resource for details.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        search(params?: Params$Resource$Organizations$Products$Search, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudPrivatecatalogV1beta1SearchProductsResponse>;
        search(params: Params$Resource$Organizations$Products$Search, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudPrivatecatalogV1beta1SearchProductsResponse>, callback: BodyResponseCallback<Schema$GoogleCloudPrivatecatalogV1beta1SearchProductsResponse>): void;
        search(params: Params$Resource$Organizations$Products$Search, callback: BodyResponseCallback<Schema$GoogleCloudPrivatecatalogV1beta1SearchProductsResponse>): void;
        search(callback: BodyResponseCallback<Schema$GoogleCloudPrivatecatalogV1beta1SearchProductsResponse>): void;
    }
    interface Params$Resource$Organizations$Products$Search extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The maximum number of entries that are requested.
         */
        pageSize?: number;
        /**
         * A pagination token returned from a previous call to SearchProducts that
         * indicates where this listing should continue from. This field is
         * optional.
         */
        pageToken?: string;
        /**
         * The query to filter the products.  The supported queries are: * List
         * products of all catalogs: empty * List products under a catalog:
         * `parent=catalogs/{catalog_id}` * Get a product by name:
         * `name=catalogs/{catalog_id}/products/{product_id}`
         */
        query?: string;
        /**
         * Required. The name of the resource context. See
         * SearchCatalogsRequest.resource for details.
         */
        resource?: string;
    }
    class Resource$Organizations$Versions {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * cloudprivatecatalog.organizations.versions.search
         * @desc Search Version resources that consumers have access to, within the
         * scope of the consumer cloud resource hierarchy context.
         * @alias cloudprivatecatalog.organizations.versions.search
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.pageSize The maximum number of entries that are requested.
         * @param {string=} params.pageToken A pagination token returned from a previous call to SearchVersions that indicates where this listing should continue from. This field is optional.
         * @param {string=} params.query The query to filter the versions. Required.  The supported queries are: * List versions under a product: `parent=catalogs/{catalog_id}/products/{product_id}` * Get a version by name: `name=catalogs/{catalog_id}/products/{product_id}/versions/{version_id}`
         * @param {string} params.resource_ Required. The name of the resource context. See SearchCatalogsRequest.resource for details.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        search(params?: Params$Resource$Organizations$Versions$Search, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse>;
        search(params: Params$Resource$Organizations$Versions$Search, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse>, callback: BodyResponseCallback<Schema$GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse>): void;
        search(params: Params$Resource$Organizations$Versions$Search, callback: BodyResponseCallback<Schema$GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse>): void;
        search(callback: BodyResponseCallback<Schema$GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse>): void;
    }
    interface Params$Resource$Organizations$Versions$Search extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The maximum number of entries that are requested.
         */
        pageSize?: number;
        /**
         * A pagination token returned from a previous call to SearchVersions that
         * indicates where this listing should continue from. This field is
         * optional.
         */
        pageToken?: string;
        /**
         * The query to filter the versions. Required.  The supported queries are: *
         * List versions under a product:
         * `parent=catalogs/{catalog_id}/products/{product_id}` * Get a version by
         * name:
         * `name=catalogs/{catalog_id}/products/{product_id}/versions/{version_id}`
         */
        query?: string;
        /**
         * Required. The name of the resource context. See
         * SearchCatalogsRequest.resource for details.
         */
        resource?: string;
    }
    class Resource$Projects {
        context: APIRequestContext;
        catalogs: Resource$Projects$Catalogs;
        products: Resource$Projects$Products;
        versions: Resource$Projects$Versions;
        constructor(context: APIRequestContext);
    }
    class Resource$Projects$Catalogs {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * cloudprivatecatalog.projects.catalogs.search
         * @desc Search Catalog resources that consumers have access to, within the
         * scope of the consumer cloud resource hierarchy context.
         * @alias cloudprivatecatalog.projects.catalogs.search
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.pageSize The maximum number of entries that are requested.
         * @param {string=} params.pageToken A pagination token returned from a previous call to SearchCatalogs that indicates where this listing should continue from. This field is optional.
         * @param {string=} params.query The query to filter the catalogs. The supported queries are:  * Get a single catalog: `name=catalogs/{catalog_id}`
         * @param {string} params.resource_ Required. The name of the resource context. It can be in following formats:  * `projects/{project_id}` * `folders/{folder_id}` * `organizations/{organization_id}`
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        search(params?: Params$Resource$Projects$Catalogs$Search, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse>;
        search(params: Params$Resource$Projects$Catalogs$Search, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse>, callback: BodyResponseCallback<Schema$GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse>): void;
        search(params: Params$Resource$Projects$Catalogs$Search, callback: BodyResponseCallback<Schema$GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse>): void;
        search(callback: BodyResponseCallback<Schema$GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse>): void;
    }
    interface Params$Resource$Projects$Catalogs$Search extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The maximum number of entries that are requested.
         */
        pageSize?: number;
        /**
         * A pagination token returned from a previous call to SearchCatalogs that
         * indicates where this listing should continue from. This field is
         * optional.
         */
        pageToken?: string;
        /**
         * The query to filter the catalogs. The supported queries are:  * Get a
         * single catalog: `name=catalogs/{catalog_id}`
         */
        query?: string;
        /**
         * Required. The name of the resource context. It can be in following
         * formats:  * `projects/{project_id}` * `folders/{folder_id}` *
         * `organizations/{organization_id}`
         */
        resource?: string;
    }
    class Resource$Projects$Products {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * cloudprivatecatalog.projects.products.search
         * @desc Search Product resources that consumers have access to, within the
         * scope of the consumer cloud resource hierarchy context.
         * @alias cloudprivatecatalog.projects.products.search
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.pageSize The maximum number of entries that are requested.
         * @param {string=} params.pageToken A pagination token returned from a previous call to SearchProducts that indicates where this listing should continue from. This field is optional.
         * @param {string=} params.query The query to filter the products.  The supported queries are: * List products of all catalogs: empty * List products under a catalog: `parent=catalogs/{catalog_id}` * Get a product by name: `name=catalogs/{catalog_id}/products/{product_id}`
         * @param {string} params.resource_ Required. The name of the resource context. See SearchCatalogsRequest.resource for details.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        search(params?: Params$Resource$Projects$Products$Search, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudPrivatecatalogV1beta1SearchProductsResponse>;
        search(params: Params$Resource$Projects$Products$Search, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudPrivatecatalogV1beta1SearchProductsResponse>, callback: BodyResponseCallback<Schema$GoogleCloudPrivatecatalogV1beta1SearchProductsResponse>): void;
        search(params: Params$Resource$Projects$Products$Search, callback: BodyResponseCallback<Schema$GoogleCloudPrivatecatalogV1beta1SearchProductsResponse>): void;
        search(callback: BodyResponseCallback<Schema$GoogleCloudPrivatecatalogV1beta1SearchProductsResponse>): void;
    }
    interface Params$Resource$Projects$Products$Search extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The maximum number of entries that are requested.
         */
        pageSize?: number;
        /**
         * A pagination token returned from a previous call to SearchProducts that
         * indicates where this listing should continue from. This field is
         * optional.
         */
        pageToken?: string;
        /**
         * The query to filter the products.  The supported queries are: * List
         * products of all catalogs: empty * List products under a catalog:
         * `parent=catalogs/{catalog_id}` * Get a product by name:
         * `name=catalogs/{catalog_id}/products/{product_id}`
         */
        query?: string;
        /**
         * Required. The name of the resource context. See
         * SearchCatalogsRequest.resource for details.
         */
        resource?: string;
    }
    class Resource$Projects$Versions {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * cloudprivatecatalog.projects.versions.search
         * @desc Search Version resources that consumers have access to, within the
         * scope of the consumer cloud resource hierarchy context.
         * @alias cloudprivatecatalog.projects.versions.search
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.pageSize The maximum number of entries that are requested.
         * @param {string=} params.pageToken A pagination token returned from a previous call to SearchVersions that indicates where this listing should continue from. This field is optional.
         * @param {string=} params.query The query to filter the versions. Required.  The supported queries are: * List versions under a product: `parent=catalogs/{catalog_id}/products/{product_id}` * Get a version by name: `name=catalogs/{catalog_id}/products/{product_id}/versions/{version_id}`
         * @param {string} params.resource_ Required. The name of the resource context. See SearchCatalogsRequest.resource for details.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        search(params?: Params$Resource$Projects$Versions$Search, options?: MethodOptions): GaxiosPromise<Schema$GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse>;
        search(params: Params$Resource$Projects$Versions$Search, options: MethodOptions | BodyResponseCallback<Schema$GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse>, callback: BodyResponseCallback<Schema$GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse>): void;
        search(params: Params$Resource$Projects$Versions$Search, callback: BodyResponseCallback<Schema$GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse>): void;
        search(callback: BodyResponseCallback<Schema$GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse>): void;
    }
    interface Params$Resource$Projects$Versions$Search extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The maximum number of entries that are requested.
         */
        pageSize?: number;
        /**
         * A pagination token returned from a previous call to SearchVersions that
         * indicates where this listing should continue from. This field is
         * optional.
         */
        pageToken?: string;
        /**
         * The query to filter the versions. Required.  The supported queries are: *
         * List versions under a product:
         * `parent=catalogs/{catalog_id}/products/{product_id}` * Get a version by
         * name:
         * `name=catalogs/{catalog_id}/products/{product_id}/versions/{version_id}`
         */
        query?: string;
        /**
         * Required. The name of the resource context. See
         * SearchCatalogsRequest.resource for details.
         */
        resource?: string;
    }
}
