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
export declare namespace genomics_v1 {
    interface Options extends GlobalOptions {
        version: 'v1';
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
     * Genomics API
     *
     * Uploads, processes, queries, and searches Genomics data in the cloud.
     *
     * @example
     * const {google} = require('googleapis');
     * const genomics = google.genomics('v1');
     *
     * @namespace genomics
     * @type {Function}
     * @version v1
     * @variation v1
     * @param {object=} options Options for Genomics
     */
    class Genomics {
        context: APIRequestContext;
        operations: Resource$Operations;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * The request message for Operations.CancelOperation.
     */
    interface Schema$CancelOperationRequest {
    }
    /**
     * Describes a Compute Engine resource that is being managed by a running
     * pipeline.
     */
    interface Schema$ComputeEngine {
        /**
         * The names of the disks that were created for this pipeline.
         */
        diskNames?: string[];
        /**
         * The instance on which the operation is running.
         */
        instanceName?: string;
        /**
         * The machine type of the instance.
         */
        machineType?: string;
        /**
         * The availability zone in which the instance resides.
         */
        zone?: string;
    }
    /**
     * An event generated when a container is forcibly terminated by the worker.
     * Currently, this only occurs when the container outlives the timeout
     * specified by the user.
     */
    interface Schema$ContainerKilledEvent {
        /**
         * The numeric ID of the action that started the container.
         */
        actionId?: number;
    }
    /**
     * An event generated when a container starts.
     */
    interface Schema$ContainerStartedEvent {
        /**
         * The numeric ID of the action that started this container.
         */
        actionId?: number;
        /**
         * The public IP address that can be used to connect to the container. This
         * field is only populated when at least one port mapping is present. If the
         * instance was created with a private address, this field will be empty
         * even if port mappings exist.
         */
        ipAddress?: string;
        /**
         * The container-to-host port mappings installed for this container. This
         * set will contain any ports exposed using the `PUBLISH_EXPOSED_PORTS` flag
         * as well as any specified in the `Action` definition.
         */
        portMappings?: {
            [key: string]: number;
        };
    }
    /**
     * An event generated when a container exits.
     */
    interface Schema$ContainerStoppedEvent {
        /**
         * The numeric ID of the action that started this container.
         */
        actionId?: number;
        /**
         * The exit status of the container.
         */
        exitStatus?: number;
        /**
         * The tail end of any content written to standard error by the container.
         * If the content emits large amounts of debugging noise or contains
         * sensitive information, you can prevent the content from being printed by
         * setting the `DISABLE_STANDARD_ERROR_CAPTURE` flag.  Note that only a
         * small amount of the end of the stream is captured here. The entire stream
         * is stored in the `/google/logs` directory mounted into each action, and
         * can be copied off the machine as described elsewhere.
         */
        stderr?: string;
    }
    /**
     * An event generated whenever a resource limitation or transient error delays
     * execution of a pipeline that was otherwise ready to run.
     */
    interface Schema$DelayedEvent {
        /**
         * A textual description of the cause of the delay. The string can change
         * without notice because it is often generated by another service (such as
         * Compute Engine).
         */
        cause?: string;
        /**
         * If the delay was caused by a resource shortage, this field lists the
         * Compute Engine metrics that are preventing this operation from running
         * (for example, `CPUS` or `INSTANCES`). If the particular metric is not
         * known, a single `UNKNOWN` metric will be present.
         */
        metrics?: string[];
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
     * Carries information about events that occur during pipeline execution.
     */
    interface Schema$Event {
        /**
         * A human-readable description of the event. Note that these strings can
         * change at any time without notice. Any application logic must use the
         * information in the `details` field.
         */
        description?: string;
        /**
         * Machine-readable details about the event.
         */
        details?: {
            [key: string]: any;
        };
        /**
         * The time at which the event occurred.
         */
        timestamp?: string;
    }
    /**
     * An event generated when the execution of a pipeline has failed. Note that
     * other events can continue to occur after this event.
     */
    interface Schema$FailedEvent {
        /**
         * The human-readable description of the cause of the failure.
         */
        cause?: string;
        /**
         * The Google standard error code that best describes this failure.
         */
        code?: string;
    }
    /**
     * The response message for Operations.ListOperations.
     */
    interface Schema$ListOperationsResponse {
        /**
         * The standard List next-page token.
         */
        nextPageToken?: string;
        /**
         * A list of operations that matches the specified filter in the request.
         */
        operations?: Schema$Operation[];
    }
    /**
     * This resource represents a long-running operation that is the result of a
     * network API call.
     */
    interface Schema$Operation {
        /**
         * If the value is `false`, it means the operation is still in progress. If
         * `true`, the operation is completed, and either `error` or `response` is
         * available.
         */
        done?: boolean;
        /**
         * The error result of the operation in case of failure or cancellation.
         */
        error?: Schema$Status;
        /**
         * An OperationMetadata or Metadata object. This will always be returned
         * with the Operation.
         */
        metadata?: {
            [key: string]: any;
        };
        /**
         * The server-assigned name, which is only unique within the same service
         * that originally returns it. For example&amp;#58;
         * `operations/CJHU7Oi_ChDrveSpBRjfuL-qzoWAgEw`
         */
        name?: string;
        /**
         * An Empty object.
         */
        response?: {
            [key: string]: any;
        };
    }
    /**
     * An event that occurred during an Operation.
     */
    interface Schema$OperationEvent {
        /**
         * Required description of event.
         */
        description?: string;
        /**
         * Optional time of when event finished. An event can have a start time and
         * no finish time. If an event has a finish time, there must be a start
         * time.
         */
        endTime?: string;
        /**
         * Optional time of when event started.
         */
        startTime?: string;
    }
    /**
     * Metadata describing an Operation.
     */
    interface Schema$OperationMetadata {
        /**
         * This field is deprecated. Use `labels` instead. Optionally provided by
         * the caller when submitting the request that creates the operation.
         */
        clientId?: string;
        /**
         * The time at which the job was submitted to the Genomics service.
         */
        createTime?: string;
        /**
         * The time at which the job stopped running.
         */
        endTime?: string;
        /**
         * Optional event messages that were generated during the job&#39;s
         * execution. This also contains any warnings that were generated during
         * import or export.
         */
        events?: Schema$OperationEvent[];
        /**
         * Optionally provided by the caller when submitting the request that
         * creates the operation.
         */
        labels?: {
            [key: string]: string;
        };
        /**
         * The Google Cloud Project in which the job is scoped.
         */
        projectId?: string;
        /**
         * The original request that started the operation. Note that this will be
         * in current version of the API. If the operation was started with v1beta2
         * API and a GetOperation is performed on v1 API, a v1 request will be
         * returned.
         */
        request?: {
            [key: string]: any;
        };
        /**
         * Runtime metadata on this Operation.
         */
        runtimeMetadata?: {
            [key: string]: any;
        };
        /**
         * The time at which the job began to run.
         */
        startTime?: string;
    }
    /**
     * An event generated when the worker starts pulling an image.
     */
    interface Schema$PullStartedEvent {
        /**
         * The URI of the image that was pulled.
         */
        imageUri?: string;
    }
    /**
     * An event generated when the worker stops pulling an image.
     */
    interface Schema$PullStoppedEvent {
        /**
         * The URI of the image that was pulled.
         */
        imageUri?: string;
    }
    /**
     * The response to the RunPipeline method, returned in the operation&#39;s
     * result field on success.
     */
    interface Schema$RunPipelineResponse {
    }
    /**
     * Runtime metadata that will be populated in the runtimeMetadata field of the
     * Operation associated with a RunPipeline execution.
     */
    interface Schema$RuntimeMetadata {
        /**
         * Execution information specific to Google Compute Engine.
         */
        computeEngine?: Schema$ComputeEngine;
    }
    /**
     * The `Status` type defines a logical error model that is suitable for
     * different programming environments, including REST APIs and RPC APIs. It is
     * used by [gRPC](https://github.com/grpc). The error model is designed to be:
     * - Simple to use and understand for most users - Flexible enough to meet
     * unexpected needs  # Overview  The `Status` message contains three pieces of
     * data: error code, error message, and error details. The error code should
     * be an enum value of google.rpc.Code, but it may accept additional error
     * codes if needed.  The error message should be a developer-facing English
     * message that helps developers *understand* and *resolve* the error. If a
     * localized user-facing error message is needed, put the localized message in
     * the error details or localize it in the client. The optional error details
     * may contain arbitrary information about the error. There is a predefined
     * set of error detail types in the package `google.rpc` that can be used for
     * common error conditions.  # Language mapping  The `Status` message is the
     * logical representation of the error model, but it is not necessarily the
     * actual wire format. When the `Status` message is exposed in different
     * client libraries and different wire protocols, it can be mapped
     * differently. For example, it will likely be mapped to some exceptions in
     * Java, but more likely mapped to some error codes in C.  # Other uses  The
     * error model and the `Status` message can be used in a variety of
     * environments, either with or without APIs, to provide a consistent
     * developer experience across different environments.  Example uses of this
     * error model include:  - Partial errors. If a service needs to return
     * partial errors to the client,     it may embed the `Status` in the normal
     * response to indicate the partial     errors.  - Workflow errors. A typical
     * workflow has multiple steps. Each step may     have a `Status` message for
     * error reporting.  - Batch operations. If a client uses batch request and
     * batch response, the     `Status` message should be used directly inside
     * batch response, one for     each error sub-response.  - Asynchronous
     * operations. If an API call embeds asynchronous operation     results in its
     * response, the status of those operations should be     represented directly
     * using the `Status` message.  - Logging. If some API errors are stored in
     * logs, the message `Status` could     be used directly after any stripping
     * needed for security/privacy reasons.
     */
    interface Schema$Status {
        /**
         * The status code, which should be an enum value of google.rpc.Code.
         */
        code?: number;
        /**
         * A list of messages that carry the error details.  There is a common set
         * of message types for APIs to use.
         */
        details?: Array<{
            [key: string]: any;
        }>;
        /**
         * A developer-facing error message, which should be in English. Any
         * user-facing error message should be localized and sent in the
         * google.rpc.Status.details field, or localized by the client.
         */
        message?: string;
    }
    /**
     * An event generated when the execution of a container results in a non-zero
     * exit status that was not otherwise ignored. Execution will continue, but
     * only actions that are flagged as `ALWAYS_RUN` will be executed. Other
     * actions will be skipped.
     */
    interface Schema$UnexpectedExitStatusEvent {
        /**
         * The numeric ID of the action that started the container.
         */
        actionId?: number;
        /**
         * The exit status of the container.
         */
        exitStatus?: number;
    }
    /**
     * An event generated after a worker VM has been assigned to run the pipeline.
     */
    interface Schema$WorkerAssignedEvent {
        /**
         * The worker&#39;s instance name.
         */
        instance?: string;
        /**
         * The zone the worker is running in.
         */
        zone?: string;
    }
    /**
     * An event generated when the worker VM that was assigned to the pipeline has
     * been released (deleted).
     */
    interface Schema$WorkerReleasedEvent {
        /**
         * The worker&#39;s instance name.
         */
        instance?: string;
        /**
         * The zone the worker was running in.
         */
        zone?: string;
    }
    class Resource$Operations {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * genomics.operations.cancel
         * @desc Starts asynchronous cancellation on a long-running operation. The
         * server makes a best effort to cancel the operation, but success is not
         * guaranteed. Clients may use Operations.GetOperation or
         * Operations.ListOperations to check whether the cancellation succeeded or
         * the operation completed despite cancellation. Authorization requires the
         * following [Google IAM](https://cloud.google.com/iam) permission&#58;  *
         * `genomics.operations.cancel`
         * @example
         * * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
         * // 2. This sample uses Application Default Credentials for
         * authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //
         * https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The name of the operation resource to be cancelled.
         *     name: 'operations/my-operation',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.operations.cancel(request, function(err) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired &&
         * authClient.createScopedRequired()) { var scopes =
         * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
         * authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         * @alias genomics.operations.cancel
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the operation resource to be cancelled.
         * @param {().CancelOperationRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        cancel(params?: Params$Resource$Operations$Cancel, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        cancel(params: Params$Resource$Operations$Cancel, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        cancel(params: Params$Resource$Operations$Cancel, callback: BodyResponseCallback<Schema$Empty>): void;
        cancel(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * genomics.operations.get
         * @desc Gets the latest state of a long-running operation. Clients can use
         * this method to poll the operation result at intervals as recommended by
         * the API service. Authorization requires the following [Google
         * IAM](https://cloud.google.com/iam) permission&#58;  *
         * `genomics.operations.get`
         * @example
         * * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
         * // 2. This sample uses Application Default Credentials for
         * authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //
         * https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The name of the operation resource.
         *     name: 'operations/my-operation',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   genomics.operations.get(request, function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired &&
         * authClient.createScopedRequired()) { var scopes =
         * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
         * authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         * @alias genomics.operations.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the operation resource.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Operations$Get, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        get(params: Params$Resource$Operations$Get, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        get(params: Params$Resource$Operations$Get, callback: BodyResponseCallback<Schema$Operation>): void;
        get(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * genomics.operations.list
         * @desc Lists operations that match the specified filter in the request.
         * Authorization requires the following [Google
         * IAM](https://cloud.google.com/iam) permission&#58;  *
         * `genomics.operations.list`
         * @example
         * * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Genomics API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/genomics
         * // 2. This sample uses Application Default Credentials for
         * authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk and run
         * //    `gcloud beta auth application-default login`.
         * //    For more information, see
         * //
         * https://developers.google.com/identity/protocols/application-default-credentials
         * // 3. Install the Node.js client library by running
         * //    `npm install googleapis --save`
         *
         * var google = require('googleapis');
         * var genomics = google.genomics('v1');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The name of the operation's parent resource.
         *     name: 'operations',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     var operationsPage = response['operations'];
         *     if (!operationsPage) {
         *       return;
         *     }
         *     for (var i = 0; i < operationsPage.length; i++) {
         *       // TODO: Change code below to process each resource in
         * `operationsPage`: console.log(JSON.stringify(operationsPage[i], null,
         * 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       genomics.operations.list(request, handlePage);
         *     }
         *   };
         *
         *   genomics.operations.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
         *       return;
         *     }
         *     if (authClient.createScopedRequired &&
         * authClient.createScopedRequired()) { var scopes =
         * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
         * authClient.createScoped(scopes);
         *     }
         *     callback(authClient);
         *   });
         * }
         * @alias genomics.operations.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter A string for filtering Operations. In v2alpha1, the following filter fields are supported&#58;  * createTime&#58; The time this job was created * events&#58; The set of event (names) that have occurred while running   the pipeline.  The &#58; operator can be used to determine if a   particular event has occurred. * error&#58; If the pipeline is running, this value is NULL.  Once the   pipeline finishes, the value is the standard Google error code. * labels.key or labels."key with space" where key is a label key. * done&#58; If the pipeline is running, this value is false. Once the   pipeline finishes, the value is true.  In v1 and v1alpha2, the following filter fields are supported&#58;  * projectId&#58; Required. Corresponds to   OperationMetadata.projectId. * createTime&#58; The time this job was created, in seconds from the   [epoch](http://en.wikipedia.org/wiki/Unix_time). Can use `>=` and/or `<=`   operators. * status&#58; Can be `RUNNING`, `SUCCESS`, `FAILURE`, or `CANCELED`. Only   one status may be specified. * labels.key where key is a label key.  Examples&#58;  * `projectId = my-project AND createTime >= 1432140000` * `projectId = my-project AND createTime >= 1432140000 AND createTime <= 1432150000 AND status = RUNNING` * `projectId = my-project AND labels.color = *` * `projectId = my-project AND labels.color = red`
         * @param {string} params.name The name of the operation's parent resource.
         * @param {integer=} params.pageSize The maximum number of results to return. The maximum value is 256.
         * @param {string=} params.pageToken The standard list page token.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Operations$List, options?: MethodOptions): GaxiosPromise<Schema$ListOperationsResponse>;
        list(params: Params$Resource$Operations$List, options: MethodOptions | BodyResponseCallback<Schema$ListOperationsResponse>, callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
        list(params: Params$Resource$Operations$List, callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    }
    interface Params$Resource$Operations$Cancel extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the operation resource to be cancelled.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CancelOperationRequest;
    }
    interface Params$Resource$Operations$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the operation resource.
         */
        name?: string;
    }
    interface Params$Resource$Operations$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * A string for filtering Operations. In v2alpha1, the following filter
         * fields are supported&#58;  * createTime&#58; The time this job was
         * created * events&#58; The set of event (names) that have occurred while
         * running   the pipeline.  The &#58; operator can be used to determine if a
         * particular event has occurred. * error&#58; If the pipeline is running,
         * this value is NULL.  Once the   pipeline finishes, the value is the
         * standard Google error code. * labels.key or labels."key with space" where
         * key is a label key. * done&#58; If the pipeline is running, this value is
         * false. Once the   pipeline finishes, the value is true.  In v1 and
         * v1alpha2, the following filter fields are supported&#58;  *
         * projectId&#58; Required. Corresponds to   OperationMetadata.projectId. *
         * createTime&#58; The time this job was created, in seconds from the
         * [epoch](http://en.wikipedia.org/wiki/Unix_time). Can use `>=` and/or `<=`
         * operators. * status&#58; Can be `RUNNING`, `SUCCESS`, `FAILURE`, or
         * `CANCELED`. Only   one status may be specified. * labels.key where key is
         * a label key.  Examples&#58;  * `projectId = my-project AND createTime >=
         * 1432140000` * `projectId = my-project AND createTime >= 1432140000 AND
         * createTime <= 1432150000 AND status = RUNNING` * `projectId = my-project
         * AND labels.color = *` * `projectId = my-project AND labels.color = red`
         */
        filter?: string;
        /**
         * The name of the operation's parent resource.
         */
        name?: string;
        /**
         * The maximum number of results to return. The maximum value is 256.
         */
        pageSize?: number;
        /**
         * The standard list page token.
         */
        pageToken?: string;
    }
}
