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
var speech_v1p1beta1;
(function (speech_v1p1beta1) {
    /**
     * Cloud Speech-to-Text API
     *
     * Converts audio to text by applying powerful neural network models.
     *
     * @example
     * const {google} = require('googleapis');
     * const speech = google.speech('v1p1beta1');
     *
     * @namespace speech
     * @type {Function}
     * @version v1p1beta1
     * @variation v1p1beta1
     * @param {object=} options Options for Speech
     */
    class Speech {
        constructor(options, google) {
            this.context = { _options: options || {}, google };
            this.operations = new Resource$Operations(this.context);
            this.projects = new Resource$Projects(this.context);
            this.speech = new Resource$Speech(this.context);
        }
    }
    speech_v1p1beta1.Speech = Speech;
    class Resource$Operations {
        constructor(context) {
            this.context = context;
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://speech.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1p1beta1/operations/{+name}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['name'],
                pathParams: ['name'],
                context: this.context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://speech.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1p1beta1/operations')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: [],
                pathParams: [],
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
    speech_v1p1beta1.Resource$Operations = Resource$Operations;
    class Resource$Projects {
        constructor(context) {
            this.context = context;
            this.locations = new Resource$Projects$Locations(this.context);
            this.operations = new Resource$Projects$Operations(this.context);
        }
    }
    speech_v1p1beta1.Resource$Projects = Resource$Projects;
    class Resource$Projects$Locations {
        constructor(context) {
            this.context = context;
            this.operations =
                new Resource$Projects$Locations$Operations(this.context);
        }
    }
    speech_v1p1beta1.Resource$Projects$Locations = Resource$Projects$Locations;
    class Resource$Projects$Locations$Operations {
        constructor(context) {
            this.context = context;
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://speech.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1p1beta1/{+name}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['name'],
                pathParams: ['name'],
                context: this.context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://speech.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1p1beta1/{+name}/operations')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['name'],
                pathParams: ['name'],
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
    speech_v1p1beta1.Resource$Projects$Locations$Operations = Resource$Projects$Locations$Operations;
    class Resource$Projects$Operations {
        constructor(context) {
            this.context = context;
            this.manualRecognitionTasks =
                new Resource$Projects$Operations$Manualrecognitiontasks(this.context);
        }
    }
    speech_v1p1beta1.Resource$Projects$Operations = Resource$Projects$Operations;
    class Resource$Projects$Operations$Manualrecognitiontasks {
        constructor(context) {
            this.context = context;
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://speech.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1p1beta1/{+name}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['name'],
                pathParams: ['name'],
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
    speech_v1p1beta1.Resource$Projects$Operations$Manualrecognitiontasks = Resource$Projects$Operations$Manualrecognitiontasks;
    class Resource$Speech {
        constructor(context) {
            this.context = context;
        }
        longrunningrecognize(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://speech.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1p1beta1/speech:longrunningrecognize')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: [],
                pathParams: [],
                context: this.context
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        recognize(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://speech.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1p1beta1/speech:recognize')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: [],
                pathParams: [],
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
    speech_v1p1beta1.Resource$Speech = Resource$Speech;
})(speech_v1p1beta1 = exports.speech_v1p1beta1 || (exports.speech_v1p1beta1 = {}));
//# sourceMappingURL=v1p1beta1.js.map