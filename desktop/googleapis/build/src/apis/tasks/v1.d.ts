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
export declare namespace tasks_v1 {
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
     * Tasks API
     *
     * Manages your tasks and task lists.
     *
     * @example
     * const {google} = require('googleapis');
     * const tasks = google.tasks('v1');
     *
     * @namespace tasks
     * @type {Function}
     * @version v1
     * @variation v1
     * @param {object=} options Options for Tasks
     */
    class Tasks {
        context: APIRequestContext;
        tasklists: Resource$Tasklists;
        tasks: Resource$Tasks;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    interface Schema$Task {
        /**
         * Completion date of the task (as a RFC 3339 timestamp). This field is
         * omitted if the task has not been completed.
         */
        completed?: string;
        /**
         * Flag indicating whether the task has been deleted. The default if False.
         */
        deleted?: boolean;
        /**
         * Due date of the task (as a RFC 3339 timestamp). Optional.
         */
        due?: string;
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * Flag indicating whether the task is hidden. This is the case if the task
         * had been marked completed when the task list was last cleared. The
         * default is False. This field is read-only.
         */
        hidden?: boolean;
        /**
         * Task identifier.
         */
        id?: string;
        /**
         * Type of the resource. This is always &quot;tasks#task&quot;.
         */
        kind?: string;
        /**
         * Collection of links. This collection is read-only.
         */
        links?: Array<{
            description?: string;
            link?: string;
            type?: string;
        }>;
        /**
         * Notes describing the task. Optional.
         */
        notes?: string;
        /**
         * Parent task identifier. This field is omitted if it is a top-level task.
         * This field is read-only. Use the &quot;move&quot; method to move the task
         * under a different parent or to the top level.
         */
        parent?: string;
        /**
         * String indicating the position of the task among its sibling tasks under
         * the same parent task or at the top level. If this string is greater than
         * another task&#39;s corresponding position string according to
         * lexicographical ordering, the task is positioned after the other task
         * under the same parent task (or at the top level). This field is
         * read-only. Use the &quot;move&quot; method to move the task to another
         * position.
         */
        position?: string;
        /**
         * URL pointing to this task. Used to retrieve, update, or delete this task.
         */
        selfLink?: string;
        /**
         * Status of the task. This is either &quot;needsAction&quot; or
         * &quot;completed&quot;.
         */
        status?: string;
        /**
         * Title of the task.
         */
        title?: string;
        /**
         * Last modification time of the task (as a RFC 3339 timestamp).
         */
        updated?: string;
    }
    interface Schema$TaskList {
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * Task list identifier.
         */
        id?: string;
        /**
         * Type of the resource. This is always &quot;tasks#taskList&quot;.
         */
        kind?: string;
        /**
         * URL pointing to this task list. Used to retrieve, update, or delete this
         * task list.
         */
        selfLink?: string;
        /**
         * Title of the task list.
         */
        title?: string;
        /**
         * Last modification time of the task list (as a RFC 3339 timestamp).
         */
        updated?: string;
    }
    interface Schema$TaskLists {
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * Collection of task lists.
         */
        items?: Schema$TaskList[];
        /**
         * Type of the resource. This is always &quot;tasks#taskLists&quot;.
         */
        kind?: string;
        /**
         * Token that can be used to request the next page of this result.
         */
        nextPageToken?: string;
    }
    interface Schema$Tasks {
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * Collection of tasks.
         */
        items?: Schema$Task[];
        /**
         * Type of the resource. This is always &quot;tasks#tasks&quot;.
         */
        kind?: string;
        /**
         * Token used to access the next page of this result.
         */
        nextPageToken?: string;
    }
    class Resource$Tasklists {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * tasks.tasklists.delete
         * @desc Deletes the authenticated user's specified task list.
         * @alias tasks.tasklists.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.tasklist Task list identifier.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Tasklists$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Tasklists$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Tasklists$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * tasks.tasklists.get
         * @desc Returns the authenticated user's specified task list.
         * @alias tasks.tasklists.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.tasklist Task list identifier.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Tasklists$Get, options?: MethodOptions): GaxiosPromise<Schema$TaskList>;
        get(params: Params$Resource$Tasklists$Get, options: MethodOptions | BodyResponseCallback<Schema$TaskList>, callback: BodyResponseCallback<Schema$TaskList>): void;
        get(params: Params$Resource$Tasklists$Get, callback: BodyResponseCallback<Schema$TaskList>): void;
        get(callback: BodyResponseCallback<Schema$TaskList>): void;
        /**
         * tasks.tasklists.insert
         * @desc Creates a new task list and adds it to the authenticated user's
         * task lists.
         * @alias tasks.tasklists.insert
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {().TaskList} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert(params?: Params$Resource$Tasklists$Insert, options?: MethodOptions): GaxiosPromise<Schema$TaskList>;
        insert(params: Params$Resource$Tasklists$Insert, options: MethodOptions | BodyResponseCallback<Schema$TaskList>, callback: BodyResponseCallback<Schema$TaskList>): void;
        insert(params: Params$Resource$Tasklists$Insert, callback: BodyResponseCallback<Schema$TaskList>): void;
        insert(callback: BodyResponseCallback<Schema$TaskList>): void;
        /**
         * tasks.tasklists.list
         * @desc Returns all the authenticated user's task lists.
         * @alias tasks.tasklists.list
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.maxResults Maximum number of task lists returned on one page. Optional. The default is 20 (max allowed: 100).
         * @param {string=} params.pageToken Token specifying the result page to return. Optional.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Tasklists$List, options?: MethodOptions): GaxiosPromise<Schema$TaskLists>;
        list(params: Params$Resource$Tasklists$List, options: MethodOptions | BodyResponseCallback<Schema$TaskLists>, callback: BodyResponseCallback<Schema$TaskLists>): void;
        list(params: Params$Resource$Tasklists$List, callback: BodyResponseCallback<Schema$TaskLists>): void;
        list(callback: BodyResponseCallback<Schema$TaskLists>): void;
        /**
         * tasks.tasklists.patch
         * @desc Updates the authenticated user's specified task list. This method
         * supports patch semantics.
         * @alias tasks.tasklists.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.tasklist Task list identifier.
         * @param {().TaskList} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Tasklists$Patch, options?: MethodOptions): GaxiosPromise<Schema$TaskList>;
        patch(params: Params$Resource$Tasklists$Patch, options: MethodOptions | BodyResponseCallback<Schema$TaskList>, callback: BodyResponseCallback<Schema$TaskList>): void;
        patch(params: Params$Resource$Tasklists$Patch, callback: BodyResponseCallback<Schema$TaskList>): void;
        patch(callback: BodyResponseCallback<Schema$TaskList>): void;
        /**
         * tasks.tasklists.update
         * @desc Updates the authenticated user's specified task list.
         * @alias tasks.tasklists.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.tasklist Task list identifier.
         * @param {().TaskList} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Tasklists$Update, options?: MethodOptions): GaxiosPromise<Schema$TaskList>;
        update(params: Params$Resource$Tasklists$Update, options: MethodOptions | BodyResponseCallback<Schema$TaskList>, callback: BodyResponseCallback<Schema$TaskList>): void;
        update(params: Params$Resource$Tasklists$Update, callback: BodyResponseCallback<Schema$TaskList>): void;
        update(callback: BodyResponseCallback<Schema$TaskList>): void;
    }
    interface Params$Resource$Tasklists$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Task list identifier.
         */
        tasklist?: string;
    }
    interface Params$Resource$Tasklists$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Task list identifier.
         */
        tasklist?: string;
    }
    interface Params$Resource$Tasklists$Insert extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Request body metadata
         */
        requestBody?: Schema$TaskList;
    }
    interface Params$Resource$Tasklists$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Maximum number of task lists returned on one page. Optional. The default
         * is 20 (max allowed: 100).
         */
        maxResults?: string;
        /**
         * Token specifying the result page to return. Optional.
         */
        pageToken?: string;
    }
    interface Params$Resource$Tasklists$Patch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Task list identifier.
         */
        tasklist?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$TaskList;
    }
    interface Params$Resource$Tasklists$Update extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Task list identifier.
         */
        tasklist?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$TaskList;
    }
    class Resource$Tasks {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * tasks.tasks.clear
         * @desc Clears all completed tasks from the specified task list. The
         * affected tasks will be marked as 'hidden' and no longer be returned by
         * default when retrieving all tasks for a task list.
         * @alias tasks.tasks.clear
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.tasklist Task list identifier.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        clear(params?: Params$Resource$Tasks$Clear, options?: MethodOptions): GaxiosPromise<void>;
        clear(params: Params$Resource$Tasks$Clear, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        clear(params: Params$Resource$Tasks$Clear, callback: BodyResponseCallback<void>): void;
        clear(callback: BodyResponseCallback<void>): void;
        /**
         * tasks.tasks.delete
         * @desc Deletes the specified task from the task list.
         * @alias tasks.tasks.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.task Task identifier.
         * @param {string} params.tasklist Task list identifier.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Tasks$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Tasks$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Tasks$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * tasks.tasks.get
         * @desc Returns the specified task.
         * @alias tasks.tasks.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.task Task identifier.
         * @param {string} params.tasklist Task list identifier.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Tasks$Get, options?: MethodOptions): GaxiosPromise<Schema$Task>;
        get(params: Params$Resource$Tasks$Get, options: MethodOptions | BodyResponseCallback<Schema$Task>, callback: BodyResponseCallback<Schema$Task>): void;
        get(params: Params$Resource$Tasks$Get, callback: BodyResponseCallback<Schema$Task>): void;
        get(callback: BodyResponseCallback<Schema$Task>): void;
        /**
         * tasks.tasks.insert
         * @desc Creates a new task on the specified task list.
         * @alias tasks.tasks.insert
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.parent Parent task identifier. If the task is created at the top level, this parameter is omitted. Optional.
         * @param {string=} params.previous Previous sibling task identifier. If the task is created at the first position among its siblings, this parameter is omitted. Optional.
         * @param {string} params.tasklist Task list identifier.
         * @param {().Task} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert(params?: Params$Resource$Tasks$Insert, options?: MethodOptions): GaxiosPromise<Schema$Task>;
        insert(params: Params$Resource$Tasks$Insert, options: MethodOptions | BodyResponseCallback<Schema$Task>, callback: BodyResponseCallback<Schema$Task>): void;
        insert(params: Params$Resource$Tasks$Insert, callback: BodyResponseCallback<Schema$Task>): void;
        insert(callback: BodyResponseCallback<Schema$Task>): void;
        /**
         * tasks.tasks.list
         * @desc Returns all tasks in the specified task list.
         * @alias tasks.tasks.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.completedMax Upper bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by completion date.
         * @param {string=} params.completedMin Lower bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by completion date.
         * @param {string=} params.dueMax Upper bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by due date.
         * @param {string=} params.dueMin Lower bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by due date.
         * @param {string=} params.maxResults Maximum number of task lists returned on one page. Optional. The default is 20 (max allowed: 100).
         * @param {string=} params.pageToken Token specifying the result page to return. Optional.
         * @param {boolean=} params.showCompleted Flag indicating whether completed tasks are returned in the result. Optional. The default is True.
         * @param {boolean=} params.showDeleted Flag indicating whether deleted tasks are returned in the result. Optional. The default is False.
         * @param {boolean=} params.showHidden Flag indicating whether hidden tasks are returned in the result. Optional. The default is False.
         * @param {string} params.tasklist Task list identifier.
         * @param {string=} params.updatedMin Lower bound for a task's last modification time (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by last modification time.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Tasks$List, options?: MethodOptions): GaxiosPromise<Schema$Tasks>;
        list(params: Params$Resource$Tasks$List, options: MethodOptions | BodyResponseCallback<Schema$Tasks>, callback: BodyResponseCallback<Schema$Tasks>): void;
        list(params: Params$Resource$Tasks$List, callback: BodyResponseCallback<Schema$Tasks>): void;
        list(callback: BodyResponseCallback<Schema$Tasks>): void;
        /**
         * tasks.tasks.move
         * @desc Moves the specified task to another position in the task list. This
         * can include putting it as a child task under a new parent and/or move it
         * to a different position among its sibling tasks.
         * @alias tasks.tasks.move
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.parent New parent task identifier. If the task is moved to the top level, this parameter is omitted. Optional.
         * @param {string=} params.previous New previous sibling task identifier. If the task is moved to the first position among its siblings, this parameter is omitted. Optional.
         * @param {string} params.task Task identifier.
         * @param {string} params.tasklist Task list identifier.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        move(params?: Params$Resource$Tasks$Move, options?: MethodOptions): GaxiosPromise<Schema$Task>;
        move(params: Params$Resource$Tasks$Move, options: MethodOptions | BodyResponseCallback<Schema$Task>, callback: BodyResponseCallback<Schema$Task>): void;
        move(params: Params$Resource$Tasks$Move, callback: BodyResponseCallback<Schema$Task>): void;
        move(callback: BodyResponseCallback<Schema$Task>): void;
        /**
         * tasks.tasks.patch
         * @desc Updates the specified task. This method supports patch semantics.
         * @alias tasks.tasks.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.task Task identifier.
         * @param {string} params.tasklist Task list identifier.
         * @param {().Task} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Tasks$Patch, options?: MethodOptions): GaxiosPromise<Schema$Task>;
        patch(params: Params$Resource$Tasks$Patch, options: MethodOptions | BodyResponseCallback<Schema$Task>, callback: BodyResponseCallback<Schema$Task>): void;
        patch(params: Params$Resource$Tasks$Patch, callback: BodyResponseCallback<Schema$Task>): void;
        patch(callback: BodyResponseCallback<Schema$Task>): void;
        /**
         * tasks.tasks.update
         * @desc Updates the specified task.
         * @alias tasks.tasks.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.task Task identifier.
         * @param {string} params.tasklist Task list identifier.
         * @param {().Task} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Tasks$Update, options?: MethodOptions): GaxiosPromise<Schema$Task>;
        update(params: Params$Resource$Tasks$Update, options: MethodOptions | BodyResponseCallback<Schema$Task>, callback: BodyResponseCallback<Schema$Task>): void;
        update(params: Params$Resource$Tasks$Update, callback: BodyResponseCallback<Schema$Task>): void;
        update(callback: BodyResponseCallback<Schema$Task>): void;
    }
    interface Params$Resource$Tasks$Clear extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Task list identifier.
         */
        tasklist?: string;
    }
    interface Params$Resource$Tasks$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Task identifier.
         */
        task?: string;
        /**
         * Task list identifier.
         */
        tasklist?: string;
    }
    interface Params$Resource$Tasks$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Task identifier.
         */
        task?: string;
        /**
         * Task list identifier.
         */
        tasklist?: string;
    }
    interface Params$Resource$Tasks$Insert extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Parent task identifier. If the task is created at the top level, this
         * parameter is omitted. Optional.
         */
        parent?: string;
        /**
         * Previous sibling task identifier. If the task is created at the first
         * position among its siblings, this parameter is omitted. Optional.
         */
        previous?: string;
        /**
         * Task list identifier.
         */
        tasklist?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Task;
    }
    interface Params$Resource$Tasks$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Upper bound for a task's completion date (as a RFC 3339 timestamp) to
         * filter by. Optional. The default is not to filter by completion date.
         */
        completedMax?: string;
        /**
         * Lower bound for a task's completion date (as a RFC 3339 timestamp) to
         * filter by. Optional. The default is not to filter by completion date.
         */
        completedMin?: string;
        /**
         * Upper bound for a task's due date (as a RFC 3339 timestamp) to filter by.
         * Optional. The default is not to filter by due date.
         */
        dueMax?: string;
        /**
         * Lower bound for a task's due date (as a RFC 3339 timestamp) to filter by.
         * Optional. The default is not to filter by due date.
         */
        dueMin?: string;
        /**
         * Maximum number of task lists returned on one page. Optional. The default
         * is 20 (max allowed: 100).
         */
        maxResults?: string;
        /**
         * Token specifying the result page to return. Optional.
         */
        pageToken?: string;
        /**
         * Flag indicating whether completed tasks are returned in the result.
         * Optional. The default is True.
         */
        showCompleted?: boolean;
        /**
         * Flag indicating whether deleted tasks are returned in the result.
         * Optional. The default is False.
         */
        showDeleted?: boolean;
        /**
         * Flag indicating whether hidden tasks are returned in the result.
         * Optional. The default is False.
         */
        showHidden?: boolean;
        /**
         * Task list identifier.
         */
        tasklist?: string;
        /**
         * Lower bound for a task's last modification time (as a RFC 3339 timestamp)
         * to filter by. Optional. The default is not to filter by last modification
         * time.
         */
        updatedMin?: string;
    }
    interface Params$Resource$Tasks$Move extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * New parent task identifier. If the task is moved to the top level, this
         * parameter is omitted. Optional.
         */
        parent?: string;
        /**
         * New previous sibling task identifier. If the task is moved to the first
         * position among its siblings, this parameter is omitted. Optional.
         */
        previous?: string;
        /**
         * Task identifier.
         */
        task?: string;
        /**
         * Task list identifier.
         */
        tasklist?: string;
    }
    interface Params$Resource$Tasks$Patch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Task identifier.
         */
        task?: string;
        /**
         * Task list identifier.
         */
        tasklist?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Task;
    }
    interface Params$Resource$Tasks$Update extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Task identifier.
         */
        task?: string;
        /**
         * Task list identifier.
         */
        tasklist?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Task;
    }
}
