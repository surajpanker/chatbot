"use strict";
/**
 * Copyright 2018 Google LLC. All Rights Reserved.
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const execa = require("execa");
const fs = require("fs");
const nunjucks = require("nunjucks");
const p_queue_1 = require("p-queue");
const path = require("path");
const util_1 = require("util");
const readdir = util_1.promisify(fs.readdir);
const writeFile = util_1.promisify(fs.writeFile);
const srcPath = path.join(__dirname, '../../../src');
const apiPath = path.join(srcPath, 'apis');
const templatePath = path.join(srcPath, 'generator/templates/index.html.njk');
const docsPath = path.join(__dirname, '../../../docs');
const indexPath = path.join(docsPath, 'index.html');
if (!fs.existsSync(docsPath)) {
    fs.mkdirSync(docsPath);
}
/**
 * Iterate over each API directory, and use the `compodoc` tool to generate
 * reference API documentation in the `docs` folder.  This folder is ignored
 * in git, so a publish must be done with `npm run publish-docs`.
 *
 * To use this, run `npm run generate-docs`.
 */
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const children = yield readdir(apiPath);
        const dirs = children.filter(x => {
            return !x.endsWith('.ts') && !x.includes('dfareporting') &&
                !x.includes('compute');
        });
        const contents = nunjucks.render(templatePath, { apis: dirs });
        yield writeFile(indexPath, contents);
        const q = new p_queue_1.default({ concurrency: 50 });
        console.log(`Generating docs for ${dirs.length} APIs...`);
        let i = 0;
        const promises = dirs.map(dir => {
            return q
                .add(() => execa('npx', ['compodoc', `src/apis/${dir}`, '-d', `./docs/${dir}`]))
                .then(() => {
                i++;
                console.log(`[${i}/${dirs.length}] ${dir}`);
            });
        });
        yield Promise.all(promises);
    });
}
main().catch(console.error);
//# sourceMappingURL=docs.js.map