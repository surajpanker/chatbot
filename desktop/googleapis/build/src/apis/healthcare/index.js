"use strict";
// Copyright 2019 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
/*! THIS FILE IS AUTO-GENERATED */
const googleapis_common_1 = require("googleapis-common");
const v1alpha_1 = require("./v1alpha");
const v1alpha2_1 = require("./v1alpha2");
const v1beta1_1 = require("./v1beta1");
exports.VERSIONS = {
    'v1alpha': v1alpha_1.healthcare_v1alpha.Healthcare,
    'v1alpha2': v1alpha2_1.healthcare_v1alpha2.Healthcare,
    'v1beta1': v1beta1_1.healthcare_v1beta1.Healthcare,
};
function healthcare(versionOrOptions) {
    return googleapis_common_1.getAPI('healthcare', versionOrOptions, exports.VERSIONS, this);
}
exports.healthcare = healthcare;
const auth = new googleapis_common_1.AuthPlus();
exports.auth = auth;
//# sourceMappingURL=index.js.map