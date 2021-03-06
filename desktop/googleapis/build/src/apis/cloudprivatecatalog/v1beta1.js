"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const googleapis_common_1 = require("googleapis-common");
// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace
var cloudprivatecatalog_v1beta1;
(function (cloudprivatecatalog_v1beta1) {
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
        constructor(options, google) {
            this.context = { _options: options || {}, google };
            this.folders = new Resource$Folders(this.context);
            this.organizations = new Resource$Organizations(this.context);
            this.projects = new Resource$Projects(this.context);
        }
    }
    cloudprivatecatalog_v1beta1.Cloudprivatecatalog = Cloudprivatecatalog;
    class Resource$Folders {
        constructor(context) {
            this.context = context;
            this.catalogs = new Resource$Folders$Catalogs(this.context);
            this.products = new Resource$Folders$Products(this.context);
            this.versions = new Resource$Folders$Versions(this.context);
        }
    }
    cloudprivatecatalog_v1beta1.Resource$Folders = Resource$Folders;
    class Resource$Folders$Catalogs {
        constructor(context) {
            this.context = context;
        }
        search(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://cloudprivatecatalog.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/{+resource}/catalogs:search')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['resource'],
                pathParams: ['resource'],
                context: this.context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    cloudprivatecatalog_v1beta1.Resource$Folders$Catalogs = Resource$Folders$Catalogs;
    class Resource$Folders$Products {
        constructor(context) {
            this.context = context;
        }
        search(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://cloudprivatecatalog.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/{+resource}/products:search')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['resource'],
                pathParams: ['resource'],
                context: this.context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    cloudprivatecatalog_v1beta1.Resource$Folders$Products = Resource$Folders$Products;
    class Resource$Folders$Versions {
        constructor(context) {
            this.context = context;
        }
        search(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://cloudprivatecatalog.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/{+resource}/versions:search')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['resource'],
                pathParams: ['resource'],
                context: this.context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    cloudprivatecatalog_v1beta1.Resource$Folders$Versions = Resource$Folders$Versions;
    class Resource$Organizations {
        constructor(context) {
            this.context = context;
            this.catalogs = new Resource$Organizations$Catalogs(this.context);
            this.products = new Resource$Organizations$Products(this.context);
            this.versions = new Resource$Organizations$Versions(this.context);
        }
    }
    cloudprivatecatalog_v1beta1.Resource$Organizations = Resource$Organizations;
    class Resource$Organizations$Catalogs {
        constructor(context) {
            this.context = context;
        }
        search(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://cloudprivatecatalog.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/{+resource}/catalogs:search')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['resource'],
                pathParams: ['resource'],
                context: this.context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    cloudprivatecatalog_v1beta1.Resource$Organizations$Catalogs = Resource$Organizations$Catalogs;
    class Resource$Organizations$Products {
        constructor(context) {
            this.context = context;
        }
        search(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://cloudprivatecatalog.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/{+resource}/products:search')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['resource'],
                pathParams: ['resource'],
                context: this.context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    cloudprivatecatalog_v1beta1.Resource$Organizations$Products = Resource$Organizations$Products;
    class Resource$Organizations$Versions {
        constructor(context) {
            this.context = context;
        }
        search(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://cloudprivatecatalog.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/{+resource}/versions:search')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['resource'],
                pathParams: ['resource'],
                context: this.context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    cloudprivatecatalog_v1beta1.Resource$Organizations$Versions = Resource$Organizations$Versions;
    class Resource$Projects {
        constructor(context) {
            this.context = context;
            this.catalogs = new Resource$Projects$Catalogs(this.context);
            this.products = new Resource$Projects$Products(this.context);
            this.versions = new Resource$Projects$Versions(this.context);
        }
    }
    cloudprivatecatalog_v1beta1.Resource$Projects = Resource$Projects;
    class Resource$Projects$Catalogs {
        constructor(context) {
            this.context = context;
        }
        search(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://cloudprivatecatalog.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/{+resource}/catalogs:search')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['resource'],
                pathParams: ['resource'],
                context: this.context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    cloudprivatecatalog_v1beta1.Resource$Projects$Catalogs = Resource$Projects$Catalogs;
    class Resource$Projects$Products {
        constructor(context) {
            this.context = context;
        }
        search(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://cloudprivatecatalog.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/{+resource}/products:search')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['resource'],
                pathParams: ['resource'],
                context: this.context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    cloudprivatecatalog_v1beta1.Resource$Projects$Products = Resource$Projects$Products;
    class Resource$Projects$Versions {
        constructor(context) {
            this.context = context;
        }
        search(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://cloudprivatecatalog.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1beta1/{+resource}/versions:search')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['resource'],
                pathParams: ['resource'],
                context: this.context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    cloudprivatecatalog_v1beta1.Resource$Projects$Versions = Resource$Projects$Versions;
})(cloudprivatecatalog_v1beta1 = exports.cloudprivatecatalog_v1beta1 || (exports.cloudprivatecatalog_v1beta1 = {}));
//# sourceMappingURL=v1beta1.js.map