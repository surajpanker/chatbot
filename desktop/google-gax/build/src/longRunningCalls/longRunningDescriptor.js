"use strict";
/**
 * Copyright 2020 Google LLC
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
const longRunningApiCaller_1 = require("./longRunningApiCaller");
/**
 * A descriptor for long-running operations.
 */
class LongRunningDescriptor {
    constructor(operationsClient, responseDecoder, metadataDecoder) {
        this.operationsClient = operationsClient;
        this.responseDecoder = responseDecoder;
        this.metadataDecoder = metadataDecoder;
    }
    getApiCaller(settings) {
        return new longRunningApiCaller_1.LongrunningApiCaller(this);
    }
}
exports.LongRunningDescriptor = LongRunningDescriptor;
//# sourceMappingURL=longRunningDescriptor.js.map