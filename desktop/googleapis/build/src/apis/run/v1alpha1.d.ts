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
export declare namespace run_v1alpha1 {
    interface Options extends GlobalOptions {
        version: 'v1alpha1';
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
     * Cloud Run API
     *
     * Deploy and manage user provided container images that scale automatically
     * based on HTTP traffic.
     *
     * @example
     * const {google} = require('googleapis');
     * const run = google.run('v1alpha1');
     *
     * @namespace run
     * @type {Function}
     * @version v1alpha1
     * @variation v1alpha1
     * @param {object=} options Options for Run
     */
    class Run {
        context: APIRequestContext;
        namespaces: Resource$Namespaces;
        projects: Resource$Projects;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * Information for connecting over HTTP(s).
     */
    interface Schema$Addressable {
        hostname?: string;
    }
    /**
     * Specifies the audit configuration for a service. The configuration
     * determines which permission types are logged, and what identities, if any,
     * are exempted from logging. An AuditConfig must have one or more
     * AuditLogConfigs.  If there are AuditConfigs for both `allServices` and a
     * specific service, the union of the two AuditConfigs is used for that
     * service: the log_types specified in each AuditConfig are enabled, and the
     * exempted_members in each AuditLogConfig are exempted.  Example Policy with
     * multiple AuditConfigs:      {       &quot;audit_configs&quot;: [         {
     * &quot;service&quot;: &quot;allServices&quot; &quot;audit_log_configs&quot;:
     * [             {               &quot;log_type&quot;: &quot;DATA_READ&quot;,
     * &quot;exempted_members&quot;: [ &quot;user:foo@gmail.com&quot; ] }, {
     * &quot;log_type&quot;: &quot;DATA_WRITE&quot;,             },             {
     * &quot;log_type&quot;: &quot;ADMIN_READ&quot;,             }           ] },
     * {           &quot;service&quot;: &quot;fooservice.googleapis.com&quot;
     * &quot;audit_log_configs&quot;: [             { &quot;log_type&quot;:
     * &quot;DATA_READ&quot;,             },             { &quot;log_type&quot;:
     * &quot;DATA_WRITE&quot;,               &quot;exempted_members&quot;: [
     * &quot;user:bar@gmail.com&quot;               ]             }           ] }
     * ]     }  For fooservice, this policy enables DATA_READ, DATA_WRITE and
     * ADMIN_READ logging. It also exempts foo@gmail.com from DATA_READ logging,
     * and bar@gmail.com from DATA_WRITE logging.
     */
    interface Schema$AuditConfig {
        /**
         * The configuration for logging of each type of permission.
         */
        auditLogConfigs?: Schema$AuditLogConfig[];
        /**
         * Specifies a service that will be enabled for audit logging. For example,
         * `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a
         * special value that covers all services.
         */
        service?: string;
    }
    /**
     * Provides the configuration for logging a type of permissions. Example: {
     * &quot;audit_log_configs&quot;: [         {           &quot;log_type&quot;:
     * &quot;DATA_READ&quot;,           &quot;exempted_members&quot;: [
     * &quot;user:foo@gmail.com&quot;           ]         },         {
     * &quot;log_type&quot;: &quot;DATA_WRITE&quot;,         }       ]     }  This
     * enables &#39;DATA_READ&#39; and &#39;DATA_WRITE&#39; logging, while
     * exempting foo@gmail.com from DATA_READ logging.
     */
    interface Schema$AuditLogConfig {
        /**
         * Specifies the identities that do not cause logging for this type of
         * permission. Follows the same format of Binding.members.
         */
        exemptedMembers?: string[];
        /**
         * The log type that this config enables.
         */
        logType?: string;
    }
    /**
     * A domain that a user has been authorized to administer. To authorize use of
     * a domain, verify ownership via [Webmaster
     * Central](https://www.google.com/webmasters/verification/home).
     */
    interface Schema$AuthorizedDomain {
        /**
         * Relative name of the domain authorized for use. Example: `example.com`.
         */
        id?: string;
        /**
         * Read only. Full path to the `AuthorizedDomain` resource in the API.
         * Example: `apps/myapp/authorizedDomains/example.com`.
         */
        name?: string;
    }
    /**
     * Associates `members` with a `role`.
     */
    interface Schema$Binding {
        /**
         * The condition that is associated with this binding. NOTE: an unsatisfied
         * condition will not allow user access via current binding. Different
         * bindings, including their conditions, are examined independently.
         */
        condition?: Schema$Expr;
        /**
         * Specifies the identities requesting access for a Cloud Platform resource.
         * `members` can have the following values:  * `allUsers`: A special
         * identifier that represents anyone who is    on the internet; with or
         * without a Google account.  * `allAuthenticatedUsers`: A special
         * identifier that represents anyone    who is authenticated with a Google
         * account or a service account.  * `user:{emailid}`: An email address that
         * represents a specific Google    account. For example, `alice@gmail.com` .
         * * `serviceAccount:{emailid}`: An email address that represents a service
         * account. For example, `my-other-app@appspot.gserviceaccount.com`.  *
         * `group:{emailid}`: An email address that represents a Google group. For
         * example, `admins@example.com`.   * `domain:{domain}`: The G Suite domain
         * (primary) that represents all the    users of that domain. For example,
         * `google.com` or `example.com`.
         */
        members?: string[];
        /**
         * Role that is assigned to `members`. For example, `roles/viewer`,
         * `roles/editor`, or `roles/owner`.
         */
        role?: string;
    }
    /**
     * Adds and removes POSIX capabilities from running containers.
     */
    interface Schema$Capabilities {
        /**
         * Added capabilities +optional
         */
        add?: string[];
        /**
         * Removed capabilities +optional
         */
        drop?: string[];
    }
    /**
     * ConfigMapEnvSource selects a ConfigMap to populate the environment
     * variables with.  The contents of the target ConfigMap&#39;s Data field will
     * represent the key-value pairs as environment variables.
     */
    interface Schema$ConfigMapEnvSource {
        /**
         * The ConfigMap to select from.
         */
        localObjectReference?: Schema$LocalObjectReference;
        /**
         * Specify whether the ConfigMap must be defined +optional
         */
        optional?: boolean;
    }
    /**
     * Configuration represents the &quot;floating HEAD&quot; of a linear history
     * of Revisions, and optionally how the containers those revisions reference
     * are built. Users create new Revisions by updating the Configuration&#39;s
     * spec. The &quot;latest created&quot; revision&#39;s name is available under
     * status, as is the &quot;latest ready&quot; revision&#39;s name. See also:
     * https://github.com/knative/serving/blob/master/docs/spec/overview.md#configuration
     */
    interface Schema$Configuration {
        /**
         * The API version for this call such as &quot;v1alpha1&quot;.
         */
        apiVersion?: string;
        /**
         * The kind of resource, in this case always &quot;Configuration&quot;.
         */
        kind?: string;
        /**
         * Metadata associated with this Configuration, including name, namespace,
         * labels, and annotations.
         */
        metadata?: Schema$ObjectMeta;
        /**
         * Spec holds the desired state of the Configuration (from the client).
         */
        spec?: Schema$ConfigurationSpec;
        /**
         * Status communicates the observed state of the Configuration (from the
         * controller).
         */
        status?: Schema$ConfigurationStatus;
    }
    /**
     * ConfigurationCondition defines a readiness condition for a Configuration.
     */
    interface Schema$ConfigurationCondition {
        /**
         * Last time the condition transitioned from one status to another.
         * +optional
         */
        lastTransitionTime?: string;
        /**
         * Human-readable message indicating details about last transition.
         * +optional
         */
        message?: string;
        /**
         * One-word CamelCase reason for the condition&#39;s last transition.
         * +optional
         */
        reason?: string;
        /**
         * Status of the condition, one of True, False, Unknown.
         */
        status?: string;
        /**
         * ConfigurationConditionType is used to communicate the status of the
         * reconciliation process. See also:
         * https://github.com/knative/serving/blob/master/docs/spec/errors.md#error-conditions-and-reporting
         * Types include:&quot;Ready&quot;
         */
        type?: string;
    }
    /**
     * ConfigurationSpec holds the desired state of the Configuration (from the
     * client).
     */
    interface Schema$ConfigurationSpec {
        /**
         * Deprecated and not currently populated by Cloud Run. See
         * metadata.generation instead, which is the sequence number containing the
         * latest generation of the desired state.  Read-only.
         */
        generation?: number;
        /**
         * RevisionTemplate holds the latest specification for the Revision to be
         * stamped out. The template references the container image, and may also
         * include labels and annotations that should be attached to the Revision.
         * To correlate a Revision, and/or to force a Revision to be created when
         * the spec doesn&#39;t otherwise change, a nonce label may be provided in
         * the template metadata. For more details, see:
         * https://github.com/knative/serving/blob/master/docs/client-conventions.md#associate-modifications-with-revisions
         * Cloud Run does not currently support referencing a build that is
         * responsible for materializing the container image from source.
         */
        revisionTemplate?: Schema$RevisionTemplate;
    }
    /**
     * ConfigurationStatus communicates the observed state of the Configuration
     * (from the controller).
     */
    interface Schema$ConfigurationStatus {
        /**
         * Conditions communicates information about ongoing/complete reconciliation
         * processes that bring the &quot;spec&quot; inline with the observed state
         * of the world.
         */
        conditions?: Schema$ConfigurationCondition[];
        /**
         * LatestCreatedRevisionName is the last revision that was created from this
         * Configuration. It might not be ready yet, for that use
         * LatestReadyRevisionName.
         */
        latestCreatedRevisionName?: string;
        /**
         * LatestReadyRevisionName holds the name of the latest Revision stamped out
         * from this Configuration that has had its &quot;Ready&quot; condition
         * become &quot;True&quot;.
         */
        latestReadyRevisionName?: string;
        /**
         * ObservedGeneration is the &#39;Generation&#39; of the Configuration that
         * was last processed by the controller. The observed generation is updated
         * even if the controller failed to process the spec and create the
         * Revision.  Clients polling for completed reconciliation should poll until
         * observedGeneration = metadata.generation, and the Ready condition&#39;s
         * status is True or False.
         */
        observedGeneration?: number;
    }
    /**
     * A single application container. This specifies both the container to run,
     * the command to run in the container and the arguments to supply to it. Note
     * that additional arguments may be supplied by the system to the container at
     * runtime.
     */
    interface Schema$Container {
        /**
         * Arguments to the entrypoint. The docker image&#39;s CMD is used if this
         * is not provided. Variable references $(VAR_NAME) are expanded using the
         * container&#39;s environment. If a variable cannot be resolved, the
         * reference in the input string will be unchanged. The $(VAR_NAME) syntax
         * can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references
         * will never be expanded, regardless of whether the variable exists or not.
         * Cannot be updated. More info:
         * https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
         * +optional
         */
        args?: string[];
        /**
         * Entrypoint array. Not executed within a shell. The docker image&#39;s
         * ENTRYPOINT is used if this is not provided. Variable references
         * $(VAR_NAME) are expanded using the container&#39;s environment. If a
         * variable cannot be resolved, the reference in the input string will be
         * unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie:
         * $$(VAR_NAME). Escaped references will never be expanded, regardless of
         * whether the variable exists or not. Cannot be updated. More info:
         * https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
         * +optional
         */
        command?: string[];
        /**
         * List of environment variables to set in the container. Cannot be updated.
         * +optional
         */
        env?: Schema$EnvVar[];
        /**
         * List of sources to populate environment variables in the container. The
         * keys defined within a source must be a C_IDENTIFIER. All invalid keys
         * will be reported as an event when the container is starting. When a key
         * exists in multiple sources, the value associated with the last source
         * will take precedence. Values defined by an Env with a duplicate key will
         * take precedence. Cannot be updated. +optional
         */
        envFrom?: Schema$EnvFromSource[];
        /**
         * Docker image name. More info:
         * https://kubernetes.io/docs/concepts/containers/images
         */
        image?: string;
        /**
         * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always
         * if :latest tag is specified, or IfNotPresent otherwise. Cannot be
         * updated. More info:
         * https://kubernetes.io/docs/concepts/containers/images#updating-images
         * +optional
         */
        imagePullPolicy?: string;
        /**
         * Actions that the management system should take in response to container
         * lifecycle events. Cannot be updated. +optional
         */
        lifecycle?: Schema$Lifecycle;
        /**
         * Periodic probe of container liveness. Container will be restarted if the
         * probe fails. Cannot be updated. More info:
         * https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
         * +optional
         */
        livenessProbe?: Schema$Probe;
        /**
         * Name of the container specified as a DNS_LABEL. Each container must have
         * a unique name (DNS_LABEL). Cannot be updated.
         */
        name?: string;
        /**
         * List of ports to expose from the container. Exposing a port here gives
         * the system additional information about the network connections a
         * container uses, but is primarily informational. Not specifying a port
         * here DOES NOT prevent that port from being exposed. Any port which is
         * listening on the default &quot;0.0.0.0&quot; address inside a container
         * will be accessible from the network. Cannot be updated. +optional
         */
        ports?: Schema$ContainerPort[];
        /**
         * Periodic probe of container service readiness. Container will be removed
         * from service endpoints if the probe fails. Cannot be updated. More info:
         * https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
         * +optional
         */
        readinessProbe?: Schema$Probe;
        /**
         * Compute Resources required by this container. Cannot be updated. More
         * info:
         * https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
         * +optional
         */
        resources?: Schema$ResourceRequirements;
        /**
         * Security options the pod should run with. More info:
         * https://kubernetes.io/docs/concepts/policy/security-context/ More info:
         * https://kubernetes.io/docs/tasks/configure-pod-container/security-context/
         * +optional
         */
        securityContext?: Schema$SecurityContext;
        /**
         * Whether this container should allocate a buffer for stdin in the
         * container runtime. If this is not set, reads from stdin in the container
         * will always result in EOF. Default is false. +optional
         */
        stdin?: boolean;
        /**
         * Whether the container runtime should close the stdin channel after it has
         * been opened by a single attach. When stdin is true the stdin stream will
         * remain open across multiple attach sessions. If stdinOnce is set to true,
         * stdin is opened on container start, is empty until the first client
         * attaches to stdin, and then remains open and accepts data until the
         * client disconnects, at which time stdin is closed and remains closed
         * until the container is restarted. If this flag is false, a container
         * processes that reads from stdin will never receive an EOF. Default is
         * false +optional
         */
        stdinOnce?: boolean;
        /**
         * Optional: Path at which the file to which the container&#39;s termination
         * message will be written is mounted into the container&#39;s filesystem.
         * Message written is intended to be brief final status, such as an
         * assertion failure message. Will be truncated by the node if greater than
         * 4096 bytes. The total message length across all containers will be
         * limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.
         * +optional
         */
        terminationMessagePath?: string;
        /**
         * Indicate how the termination message should be populated. File will use
         * the contents of terminationMessagePath to populate the container status
         * message on both success and failure. FallbackToLogsOnError will use the
         * last chunk of container log output if the termination message file is
         * empty and the container exited with an error. The log output is limited
         * to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot
         * be updated. +optional
         */
        terminationMessagePolicy?: string;
        /**
         * Whether this container should allocate a TTY for itself, also requires
         * &#39;stdin&#39; to be true. Default is false. +optional
         */
        tty?: boolean;
        /**
         * volumeDevices is the list of block devices to be used by the container.
         * This is an alpha feature and may change in the future. +optional
         */
        volumeDevices?: Schema$VolumeDevice[];
        /**
         * Pod volumes to mount into the container&#39;s filesystem. Cannot be
         * updated. +optional
         */
        volumeMounts?: Schema$VolumeMount[];
        /**
         * Container&#39;s working directory. If not specified, the container
         * runtime&#39;s default will be used, which might be configured in the
         * container image. Cannot be updated. +optional
         */
        workingDir?: string;
    }
    /**
     * ContainerPort represents a network port in a single container.
     */
    interface Schema$ContainerPort {
        /**
         * Number of port to expose on the pod&#39;s IP address. This must be a
         * valid port number, 0 &lt; x &lt; 65536.
         */
        containerPort?: number;
        /**
         * What host IP to bind the external port to. +optional
         */
        hostIP?: string;
        /**
         * Number of port to expose on the host. If specified, this must be a valid
         * port number, 0 &lt; x &lt; 65536. If HostNetwork is specified, this must
         * match ContainerPort. Most containers do not need this. +optional
         */
        hostPort?: number;
        /**
         * If specified, this must be an IANA_SVC_NAME and unique within the pod.
         * Each named port in a pod must have a unique name. Name for the port that
         * can be referred to by services. +optional
         */
        name?: string;
        /**
         * Protocol for port. Must be UDP or TCP. Defaults to &quot;TCP&quot;.
         * +optional
         */
        protocol?: string;
    }
    /**
     * Resource to hold the state and status of a user&#39;s domain mapping.
     */
    interface Schema$DomainMapping {
        /**
         * The API version for this call such as &quot;v1alpha1&quot;.
         */
        apiVersion?: string;
        /**
         * The kind of resource, in this case &quot;DomainMapping&quot;.
         */
        kind?: string;
        /**
         * Metadata associated with this BuildTemplate.
         */
        metadata?: Schema$ObjectMeta;
        /**
         * The spec for this DomainMapping.
         */
        spec?: Schema$DomainMappingSpec;
        /**
         * The current status of the DomainMapping.
         */
        status?: Schema$DomainMappingStatus;
    }
    /**
     * DomainMappingCondition contains state information for a DomainMapping.
     */
    interface Schema$DomainMappingCondition {
        /**
         * Human readable message indicating details about the current status.
         * +optional
         */
        message?: string;
        /**
         * One-word CamelCase reason for the condition&#39;s current status.
         * +optional
         */
        reason?: string;
        /**
         * Status of the condition, one of True, False, Unknown.
         */
        status?: string;
        /**
         * Type of domain mapping condition.
         */
        type?: string;
    }
    /**
     * The desired state of the Domain Mapping.
     */
    interface Schema$DomainMappingSpec {
        /**
         * The mode of the certificate.
         */
        certificateMode?: string;
        /**
         * If set, the mapping will override any mapping set before this spec was
         * set. It is recommended that the user leaves this empty to receive an
         * error warning about a potential conflict and only set it once the
         * respective UI has given such a warning.
         */
        forceOverride?: boolean;
        /**
         * The name of the Knative Route that this DomainMapping applies to. The
         * route must exist.
         */
        routeName?: string;
    }
    /**
     * The current state of the Domain Mapping.
     */
    interface Schema$DomainMappingStatus {
        /**
         * Array of observed DomainMappingConditions, indicating the current state
         * of the DomainMapping.
         */
        conditions?: Schema$DomainMappingCondition[];
        /**
         * The name of the route that the mapping currently points to.
         */
        mappedRouteName?: string;
        /**
         * ObservedGeneration is the &#39;Generation&#39; of the DomainMapping that
         * was last processed by the controller.  Clients polling for completed
         * reconciliation should poll until observedGeneration = metadata.generation
         * and the Ready condition&#39;s status is True or False.
         */
        observedGeneration?: number;
        /**
         * The resource records required to configure this domain mapping. These
         * records must be added to the domain&#39;s DNS configuration in order to
         * serve the application via this domain mapping.
         */
        resourceRecords?: Schema$ResourceRecord[];
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
     * EnvFromSource represents the source of a set of ConfigMaps
     */
    interface Schema$EnvFromSource {
        /**
         * The ConfigMap to select from +optional
         */
        configMapRef?: Schema$ConfigMapEnvSource;
        /**
         * An optional identifier to prepend to each key in the ConfigMap. Must be a
         * C_IDENTIFIER. +optional
         */
        prefix?: string;
        /**
         * The Secret to select from +optional
         */
        secretRef?: Schema$SecretEnvSource;
    }
    /**
     * EnvVar represents an environment variable present in a Container.
     */
    interface Schema$EnvVar {
        /**
         * Name of the environment variable. Must be a C_IDENTIFIER.
         */
        name?: string;
        /**
         * Variable references $(VAR_NAME) are expanded using the previous defined
         * environment variables in the container and any route environment
         * variables. If a variable cannot be resolved, the reference in the input
         * string will be unchanged. The $(VAR_NAME) syntax can be escaped with a
         * double $$, ie: $$(VAR_NAME). Escaped references will never be expanded,
         * regardless of whether the variable exists or not. Defaults to
         * &quot;&quot;. +optional
         */
        value?: string;
    }
    /**
     * ExecAction describes a &quot;run in container&quot; action.
     */
    interface Schema$ExecAction {
        /**
         * Command is the command line to execute inside the container, the working
         * directory for the command  is root (&#39;/&#39;) in the container&#39;s
         * filesystem. The command is simply exec&#39;d, it is not run inside a
         * shell, so traditional shell instructions (&#39;|&#39;, etc) won&#39;t
         * work. To use a shell, you need to explicitly call out to that shell. Exit
         * status of 0 is treated as live/healthy and non-zero is unhealthy.
         * +optional
         */
        command?: string;
    }
    /**
     * Represents an expression text. Example:      title: &quot;User account
     * presence&quot;     description: &quot;Determines whether the request has a
     * user account&quot;     expression: &quot;size(request.user) &gt; 0&quot;
     */
    interface Schema$Expr {
        /**
         * An optional description of the expression. This is a longer text which
         * describes the expression, e.g. when hovered over it in a UI.
         */
        description?: string;
        /**
         * Textual representation of an expression in Common Expression Language
         * syntax.  The application context of the containing message determines
         * which well-known feature set of CEL is supported.
         */
        expression?: string;
        /**
         * An optional string indicating the location of the expression for error
         * reporting, e.g. a file name and a position in the file.
         */
        location?: string;
        /**
         * An optional title for the expression, i.e. a short string describing its
         * purpose. This can be used e.g. in UIs which allow to enter the
         * expression.
         */
        title?: string;
    }
    /**
     * Handler defines a specific action that should be taken
     */
    interface Schema$Handler {
        /**
         * One and only one of the following should be specified. Exec specifies the
         * action to take. +optional
         */
        exec?: Schema$ExecAction;
        /**
         * HTTPGet specifies the http request to perform. +optional
         */
        httpGet?: Schema$HTTPGetAction;
        /**
         * TCPSocket specifies an action involving a TCP port. TCP hooks not yet
         * supported
         */
        tcpSocket?: Schema$TCPSocketAction;
    }
    /**
     * HTTPGetAction describes an action based on HTTP Get requests.
     */
    interface Schema$HTTPGetAction {
        /**
         * Host name to connect to, defaults to the pod IP. You probably want to set
         * &quot;Host&quot; in httpHeaders instead. +optional
         */
        host?: string;
        /**
         * Custom headers to set in the request. HTTP allows repeated headers.
         * +optional
         */
        httpHeaders?: Schema$HTTPHeader[];
        /**
         * Path to access on the HTTP server. +optional
         */
        path?: string;
        /**
         * Name or number of the port to access on the container. Number must be in
         * the range 1 to 65535. Name must be an IANA_SVC_NAME.
         */
        port?: Schema$IntOrString;
        /**
         * Scheme to use for connecting to the host. Defaults to HTTP. +optional
         */
        scheme?: string;
    }
    /**
     * HTTPHeader describes a custom header to be used in HTTP probes
     */
    interface Schema$HTTPHeader {
        /**
         * The header field name
         */
        name?: string;
        /**
         * The header field value
         */
        value?: string;
    }
    /**
     * Initializer is information about an initializer that has not yet completed.
     */
    interface Schema$Initializer {
        /**
         * name of the process that is responsible for initializing this object.
         */
        name?: string;
    }
    /**
     * Initializers tracks the progress of initialization.
     */
    interface Schema$Initializers {
        /**
         * Pending is a list of initializers that must execute in order before this
         * object is visible. When the last pending initializer is removed, and no
         * failing result is set, the initializers struct will be set to nil and the
         * object is considered as initialized and visible to all clients.
         * +patchMergeKey=name +patchStrategy=merge
         */
        pending?: Schema$Initializer[];
    }
    /**
     * IntOrString is a type that can hold an int32 or a string.  When used in
     * JSON or YAML marshalling and unmarshalling, it produces or consumes the
     * inner type.  This allows you to have, for example, a JSON field that can
     * accept a name or number.
     */
    interface Schema$IntOrString {
        /**
         * The int value.
         */
        intVal?: number;
        /**
         * The string value.
         */
        strVal?: string;
        /**
         * The type of the value.
         */
        type?: string;
    }
    /**
     * Lifecycle describes actions that the management system should take in
     * response to container lifecycle events. For the PostStart and PreStop
     * lifecycle handlers, management of the container blocks until the action is
     * complete, unless the container process fails, in which case the handler is
     * aborted.
     */
    interface Schema$Lifecycle {
        /**
         * PostStart is called immediately after a container is created. If the
         * handler fails, the container is terminated and restarted according to its
         * restart policy. Other management of the container blocks until the hook
         * completes. More info:
         * https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks
         * +optional
         */
        postStart?: Schema$Handler;
        /**
         * PreStop is called immediately before a container is terminated. The
         * container is terminated after the handler completes. The reason for
         * termination is passed to the handler. Regardless of the outcome of the
         * handler, the container is eventually terminated. Other management of the
         * container blocks until the hook completes. More info:
         * https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks
         * +optional
         */
        preStop?: Schema$Handler;
    }
    /**
     * A list of Authorized Domains.
     */
    interface Schema$ListAuthorizedDomainsResponse {
        /**
         * The authorized domains belonging to the user.
         */
        domains?: Schema$AuthorizedDomain[];
        /**
         * Continuation token for fetching the next page of results.
         */
        nextPageToken?: string;
    }
    /**
     * ListConfigurationsResponse is a list of Configuration resources.
     */
    interface Schema$ListConfigurationsResponse {
        /**
         * The API version for this call such as &quot;v1alpha1&quot;.
         */
        apiVersion?: string;
        /**
         * List of Configurations.
         */
        items?: Schema$Configuration[];
        /**
         * The kind of this resource, in this case &quot;ConfigurationList&quot;.
         */
        kind?: string;
        /**
         * Metadata associated with this Configuration list.
         */
        metadata?: Schema$ListMeta;
        /**
         * Locations that could not be reached.
         */
        unreachable?: string[];
    }
    /**
     * ListDomainMappingsResponse is a list of DomainMapping resources.
     */
    interface Schema$ListDomainMappingsResponse {
        /**
         * The API version for this call such as &quot;v1alpha1&quot;.
         */
        apiVersion?: string;
        /**
         * List of DomainMappings.
         */
        items?: Schema$DomainMapping[];
        /**
         * The kind of this resource, in this case &quot;DomainMappingList&quot;.
         */
        kind?: string;
        /**
         * Metadata associated with this DomainMapping list.
         */
        metadata?: Schema$ListMeta;
    }
    /**
     * The response message for Locations.ListLocations.
     */
    interface Schema$ListLocationsResponse {
        /**
         * A list of locations that matches the specified filter in the request.
         */
        locations?: Schema$Location[];
        /**
         * The standard List next-page token.
         */
        nextPageToken?: string;
    }
    /**
     * ListMeta describes metadata that synthetic resources must have, including
     * lists and various status objects. A resource may have only one of
     * {ObjectMeta, ListMeta}.
     */
    interface Schema$ListMeta {
        /**
         * continue may be set if the user set a limit on the number of items
         * returned, and indicates that the server has more data available. The
         * value is opaque and may be used to issue another request to the endpoint
         * that served this list to retrieve the next set of available objects.
         * Continuing a list may not be possible if the server configuration has
         * changed or more than a few minutes have passed. The resourceVersion field
         * returned when using this continue value will be identical to the value in
         * the first response.
         */
        continue?: string;
        /**
         * String that identifies the server&#39;s internal version of this object
         * that can be used by clients to determine when objects have changed. Value
         * must be treated as opaque by clients and passed unmodified back to the
         * server. Populated by the system. Read-only. More info:
         * https://git.k8s.io/community/contributors/devel/api-conventions.md#concurrency-control-and-consistency
         * +optional
         */
        resourceVersion?: string;
        /**
         * SelfLink is a URL representing this object. Populated by the system.
         * Read-only. +optional
         */
        selfLink?: string;
    }
    /**
     * ListRevisionsResponse is a list of Revision resources.
     */
    interface Schema$ListRevisionsResponse {
        /**
         * The API version for this call such as &quot;v1alpha1&quot;.
         */
        apiVersion?: string;
        /**
         * List of Revisions.
         */
        items?: Schema$Revision[];
        /**
         * The kind of this resource, in this case &quot;RevisionList&quot;.
         */
        kind?: string;
        /**
         * Metadata associated with this revision list.
         */
        metadata?: Schema$ListMeta;
        /**
         * Locations that could not be reached.
         */
        unreachable?: string[];
    }
    /**
     * ListRoutesResponse is a list of Route resources.
     */
    interface Schema$ListRoutesResponse {
        /**
         * The API version for this call such as &quot;v1alpha1&quot;.
         */
        apiVersion?: string;
        /**
         * List of Routes.
         */
        items?: Schema$Route[];
        /**
         * The kind of this resource, in this case always &quot;RouteList&quot;.
         */
        kind?: string;
        /**
         * Metadata associated with this Route list.
         */
        metadata?: Schema$ListMeta;
        /**
         * Locations that could not be reached.
         */
        unreachable?: string[];
    }
    /**
     * A list of Service resources.
     */
    interface Schema$ListServicesResponse {
        /**
         * The API version for this call such as &quot;v1alpha1&quot;.
         */
        apiVersion?: string;
        /**
         * List of Services.
         */
        items?: Schema$Service[];
        /**
         * The kind of this resource, in this case &quot;ServiceList&quot;.
         */
        kind?: string;
        /**
         * Metadata associated with this Service list.
         */
        metadata?: Schema$ListMeta;
        /**
         * Locations that could not be reached.
         */
        unreachable?: string[];
    }
    /**
     * LocalObjectReference contains enough information to let you locate the
     * referenced object inside the same namespace.
     */
    interface Schema$LocalObjectReference {
        /**
         * Name of the referent. More info:
         * https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        name?: string;
    }
    /**
     * A resource that represents Google Cloud Platform location.
     */
    interface Schema$Location {
        /**
         * The friendly name for this location, typically a nearby city name. For
         * example, &quot;Tokyo&quot;.
         */
        displayName?: string;
        /**
         * Cross-service attributes for the location. For example
         * {&quot;cloud.googleapis.com/region&quot;: &quot;us-east1&quot;}
         */
        labels?: {
            [key: string]: string;
        };
        /**
         * The canonical id for this location. For example: `&quot;us-east1&quot;`.
         */
        locationId?: string;
        /**
         * Service-specific metadata. For example the available capacity at the
         * given location.
         */
        metadata?: {
            [key: string]: any;
        };
        /**
         * Resource name for the location, which may vary between implementations.
         * For example: `&quot;projects/example-project/locations/us-east1&quot;`
         */
        name?: string;
    }
    /**
     * ObjectMeta is metadata that all persisted resources must have, which
     * includes all objects users must create.
     */
    interface Schema$ObjectMeta {
        /**
         * Annotations is an unstructured key value map stored with a resource that
         * may be set by external tools to store and retrieve arbitrary metadata.
         * They are not queryable and should be preserved when modifying objects.
         * More info: http://kubernetes.io/docs/user-guide/annotations +optional
         */
        annotations?: {
            [key: string]: string;
        };
        /**
         * Not currently supported by Cloud Run.  The name of the cluster which the
         * object belongs to. This is used to distinguish resources with same name
         * and namespace in different clusters. This field is not set anywhere right
         * now and apiserver is going to ignore it if set in create or update
         * request. +optional
         */
        clusterName?: string;
        /**
         * CreationTimestamp is a timestamp representing the server time when this
         * object was created. It is not guaranteed to be set in happens-before
         * order across separate operations. Clients may not set this value. It is
         * represented in RFC3339 form and is in UTC.  Populated by the system.
         * Read-only. Null for lists. More info:
         * https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
         * +optional
         */
        creationTimestamp?: string;
        /**
         * Not currently supported by Cloud Run.  Number of seconds allowed for this
         * object to gracefully terminate before it will be removed from the system.
         * Only set when deletionTimestamp is also set. May only be shortened.
         * Read-only. +optional
         */
        deletionGracePeriodSeconds?: number;
        /**
         * DeletionTimestamp is RFC 3339 date and time at which this resource will
         * be deleted. This field is set by the server when a graceful deletion is
         * requested by the user, and is not directly settable by a client. The
         * resource is expected to be deleted (no longer visible from resource
         * lists, and not reachable by name) after the time in this field, once the
         * finalizers list is empty. As long as the finalizers list contains items,
         * deletion is blocked. Once the deletionTimestamp is set, this value may
         * not be unset or be set further into the future, although it may be
         * shortened or the resource may be deleted prior to this time. For example,
         * a user may request that a pod is deleted in 30 seconds. The Kubelet will
         * react by sending a graceful termination signal to the containers in the
         * pod. After that 30 seconds, the Kubelet will send a hard termination
         * signal (SIGKILL) to the container and after cleanup, remove the pod from
         * the API. In the presence of network partitions, this object may still
         * exist after this timestamp, until an administrator or automated process
         * can determine the resource is fully terminated. If not set, graceful
         * deletion of the object has not been requested.  Populated by the system
         * when a graceful deletion is requested. Read-only. More info:
         * https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
         * +optional
         */
        deletionTimestamp?: string;
        /**
         * Not currently supported by Cloud Run.  Must be empty before the object is
         * deleted from the registry. Each entry is an identifier for the
         * responsible component that will remove the entry from the list. If the
         * deletionTimestamp of the object is non-nil, entries in this list can only
         * be removed. +optional +patchStrategy=merge
         */
        finalizers?: string[];
        /**
         * Not currently supported by Cloud Run.  GenerateName is an optional
         * prefix, used by the server, to generate a unique name ONLY IF the Name
         * field has not been provided. If this field is used, the name returned to
         * the client will be different than the name passed. This value will also
         * be combined with a unique suffix. The provided value has the same
         * validation rules as the Name field, and may be truncated by the length of
         * the suffix required to make the value unique on the server.  If this
         * field is specified and the generated name exists, the server will NOT
         * return a 409 - instead, it will either return 201 Created or 500 with
         * Reason ServerTimeout indicating a unique name could not be found in the
         * time allotted, and the client should retry (optionally after the time
         * indicated in the Retry-After header).  Applied only if Name is not
         * specified. More info:
         * https://git.k8s.io/community/contributors/devel/api-conventions.md#idempotency
         * +optional  string generateName = 2;
         */
        generateName?: string;
        /**
         * A sequence number representing a specific generation of the desired
         * state. Populated by the system. Read-only. +optional
         */
        generation?: number;
        /**
         * Not currently supported by Cloud Run.  An initializer is a controller
         * which enforces some system invariant at object creation time. This field
         * is a list of initializers that have not yet acted on this object. If nil
         * or empty, this object has been completely initialized. Otherwise, the
         * object is considered uninitialized and is hidden (in list/watch and get
         * calls) from clients that haven&#39;t explicitly asked to observe
         * uninitialized objects.  When an object is created, the system will
         * populate this list with the current set of initializers. Only privileged
         * users may set or modify this list. Once it is empty, it may not be
         * modified further by any user.
         */
        initializers?: Schema$Initializers;
        /**
         * Map of string keys and values that can be used to organize and categorize
         * (scope and select) objects. May match selectors of replication
         * controllers and routes. More info:
         * http://kubernetes.io/docs/user-guide/labels +optional
         */
        labels?: {
            [key: string]: string;
        };
        /**
         * Name must be unique within a namespace, within a Cloud Run region. Is
         * required when creating resources, although some resources may allow a
         * client to request the generation of an appropriate name automatically.
         * Name is primarily intended for creation idempotence and configuration
         * definition. Cannot be updated. More info:
         * http://kubernetes.io/docs/user-guide/identifiers#names +optional
         */
        name?: string;
        /**
         * Namespace defines the space within each name must be unique, within a
         * Cloud Run region. In Cloud Run the namespace must be equal to either the
         * project ID or project number.
         */
        namespace?: string;
        /**
         * List of objects that own this object. If ALL objects in the list have
         * been deleted, this object will be garbage collected. +optional
         */
        ownerReferences?: Schema$OwnerReference[];
        /**
         * An opaque value that represents the internal version of this object that
         * can be used by clients to determine when objects have changed. May be
         * used for optimistic concurrency, change detection, and the watch
         * operation on a resource or set of resources. Clients must treat these
         * values as opaque and passed unmodified back to the server. They may only
         * be valid for a particular resource or set of resources.  Populated by the
         * system. Read-only. Value must be treated as opaque by clients and . More
         * info:
         * https://git.k8s.io/community/contributors/devel/api-conventions.md#concurrency-control-and-consistency
         * +optional
         */
        resourceVersion?: string;
        /**
         * SelfLink is a URL representing this object. Populated by the system.
         * Read-only. +optional  string selfLink = 4;
         */
        selfLink?: string;
        /**
         * UID is the unique in time and space value for this object. It is
         * typically generated by the server on successful creation of a resource
         * and is not allowed to change on PUT operations.  Populated by the system.
         * Read-only. More info:
         * http://kubernetes.io/docs/user-guide/identifiers#uids +optional
         */
        uid?: string;
    }
    /**
     * OwnerReference contains enough information to let you identify an owning
     * object. Currently, an owning object must be in the same namespace, so there
     * is no namespace field.
     */
    interface Schema$OwnerReference {
        /**
         * API version of the referent.
         */
        apiVersion?: string;
        /**
         * If true, AND if the owner has the &quot;foregroundDeletion&quot;
         * finalizer, then the owner cannot be deleted from the key-value store
         * until this reference is removed. Defaults to false. To set this field, a
         * user needs &quot;delete&quot; permission of the owner, otherwise 422
         * (Unprocessable Entity) will be returned. +optional
         */
        blockOwnerDeletion?: boolean;
        /**
         * If true, this reference points to the managing controller. +optional
         */
        controller?: boolean;
        /**
         * Kind of the referent. More info:
         * https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
         */
        kind?: string;
        /**
         * Name of the referent. More info:
         * http://kubernetes.io/docs/user-guide/identifiers#names
         */
        name?: string;
        /**
         * UID of the referent. More info:
         * http://kubernetes.io/docs/user-guide/identifiers#uids
         */
        uid?: string;
    }
    /**
     * Defines an Identity and Access Management (IAM) policy. It is used to
     * specify access control policies for Cloud Platform resources.   A `Policy`
     * consists of a list of `bindings`. A `binding` binds a list of `members` to
     * a `role`, where the members can be user accounts, Google groups, Google
     * domains, and service accounts. A `role` is a named list of permissions
     * defined by IAM.  **JSON Example**      {       &quot;bindings&quot;: [ {
     * &quot;role&quot;: &quot;roles/owner&quot;,           &quot;members&quot;: [
     * &quot;user:mike@example.com&quot;, &quot;group:admins@example.com&quot;,
     * &quot;domain:google.com&quot;,
     * &quot;serviceAccount:my-other-app@appspot.gserviceaccount.com&quot; ] }, {
     * &quot;role&quot;: &quot;roles/viewer&quot;,           &quot;members&quot;:
     * [&quot;user:sean@example.com&quot;]         }       ]     }  **YAML
     * Example**      bindings:     - members:       - user:mike@example.com -
     * group:admins@example.com       - domain:google.com       -
     * serviceAccount:my-other-app@appspot.gserviceaccount.com       role:
     * roles/owner     - members:       - user:sean@example.com       role:
     * roles/viewer   For a description of IAM and its features, see the [IAM
     * developer&#39;s guide](https://cloud.google.com/iam/docs).
     */
    interface Schema$Policy {
        /**
         * Specifies cloud audit logging configuration for this policy.
         */
        auditConfigs?: Schema$AuditConfig[];
        /**
         * Associates a list of `members` to a `role`. `bindings` with no members
         * will result in an error.
         */
        bindings?: Schema$Binding[];
        /**
         * `etag` is used for optimistic concurrency control as a way to help
         * prevent simultaneous updates of a policy from overwriting each other. It
         * is strongly suggested that systems make use of the `etag` in the
         * read-modify-write cycle to perform policy updates in order to avoid race
         * conditions: An `etag` is returned in the response to `getIamPolicy`, and
         * systems are expected to put that etag in the request to `setIamPolicy` to
         * ensure that their change will be applied to the same version of the
         * policy.  If no `etag` is provided in the call to `setIamPolicy`, then the
         * existing policy is overwritten blindly.
         */
        etag?: string;
        /**
         * Deprecated.
         */
        version?: number;
    }
    /**
     * Probe describes a health check to be performed against a container to
     * determine whether it is alive or ready to receive traffic.
     */
    interface Schema$Probe {
        /**
         * Minimum consecutive failures for the probe to be considered failed after
         * having succeeded. Defaults to 3. Minimum value is 1. +optional
         */
        failureThreshold?: number;
        /**
         * The action taken to determine the health of a container
         */
        handler?: Schema$Handler;
        /**
         * Number of seconds after the container has started before liveness probes
         * are initiated. More info:
         * https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
         * +optional
         */
        initialDelaySeconds?: number;
        /**
         * How often (in seconds) to perform the probe. Default to 10 seconds.
         * Minimum value is 1. +optional
         */
        periodSeconds?: number;
        /**
         * Minimum consecutive successes for the probe to be considered successful
         * after having failed. Defaults to 1. Must be 1 for liveness. Minimum value
         * is 1. +optional
         */
        successThreshold?: number;
        /**
         * Number of seconds after which the probe times out. Defaults to 1 second.
         * Minimum value is 1. More info:
         * https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
         * +optional
         */
        timeoutSeconds?: number;
    }
    /**
     * The view model of a single quantity, e.g. &quot;800 MiB&quot;. Corresponds
     * to
     * https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/generated.proto
     */
    interface Schema$Quantity {
        /**
         * Stringified version of the quantity, e.g., &quot;800 MiB&quot;.
         */
        string?: string;
    }
    /**
     * A DNS resource record.
     */
    interface Schema$ResourceRecord {
        /**
         * Relative name of the object affected by this record. Only applicable for
         * `CNAME` records. Example: &#39;www&#39;.
         */
        name?: string;
        /**
         * Data for this record. Values vary by record type, as defined in RFC 1035
         * (section 5) and RFC 1034 (section 3.6.1).
         */
        rrdata?: string;
        /**
         * Resource record type. Example: `AAAA`.
         */
        type?: string;
    }
    /**
     * ResourceRequirements describes the compute resource requirements.
     */
    interface Schema$ResourceRequirements {
        /**
         * Limits describes the maximum amount of compute resources allowed. The
         * values of the map is string form of the &#39;quantity&#39; k8s type:
         * https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go
         */
        limits?: {
            [key: string]: string;
        };
        /**
         * Limits describes the maximum amount of compute resources allowed. This is
         * a temporary field created to migrate away from the map&lt;string,
         * Quantity&gt; limits field. This is done to become compliant with k8s
         * style API. This field is deprecated in favor of limits field.
         */
        limitsInMap?: {
            [key: string]: Schema$Quantity;
        };
        /**
         * Requests describes the minimum amount of compute resources required. If
         * Requests is omitted for a container, it defaults to Limits if that is
         * explicitly specified, otherwise to an implementation-defined value. The
         * values of the map is string form of the &#39;quantity&#39; k8s type:
         * https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go
         */
        requests?: {
            [key: string]: string;
        };
        /**
         * Requests describes the minimum amount of compute resources required. If
         * Requests is omitted for a container, it defaults to Limits if that is
         * explicitly specified, otherwise to an implementation-defined value. This
         * is a temporary field created to migrate away from the map&lt;string,
         * Quantity&gt; requests field. This is done to become compliant with k8s
         * style API. This field is deprecated in favor of requests field.
         */
        requestsInMap?: {
            [key: string]: Schema$Quantity;
        };
    }
    /**
     * Revision is an immutable snapshot of code and configuration.  A revision
     * references a container image. Revisions are created by updates to a
     * Configuration.  Cloud Run does not currently support referencing a build
     * that is responsible for materializing the container image from source.  See
     * also:
     * https://github.com/knative/serving/blob/master/docs/spec/overview.md#revision
     */
    interface Schema$Revision {
        /**
         * The API version for this call such as &quot;v1alpha1&quot;.
         */
        apiVersion?: string;
        /**
         * The kind of this resource, in this case &quot;Revision&quot;.
         */
        kind?: string;
        /**
         * Metadata associated with this Revision, including name, namespace,
         * labels, and annotations.
         */
        metadata?: Schema$ObjectMeta;
        /**
         * Spec holds the desired state of the Revision (from the client).
         */
        spec?: Schema$RevisionSpec;
        /**
         * Status communicates the observed state of the Revision (from the
         * controller).
         */
        status?: Schema$RevisionStatus;
    }
    /**
     * RevisionCondition defines a readiness condition for a Revision.
     */
    interface Schema$RevisionCondition {
        /**
         * Last time the condition transitioned from one status to another.
         * +optional
         */
        lastTransitionTime?: string;
        /**
         * Human readable message indicating details about the current status.
         * +optional
         */
        message?: string;
        /**
         * One-word CamelCase reason for the condition&#39;s last transition.
         * +optional
         */
        reason?: string;
        /**
         * Status of the condition, one of True, False, Unknown.
         */
        status?: string;
        /**
         * RevisionConditionType is used to communicate the status of the
         * reconciliation process. See also:
         * https://github.com/knative/serving/blob/master/docs/spec/errors.md#error-conditions-and-reporting
         * Types include:  * &quot;Ready&quot;: True when the Revision is ready. *
         * &quot;ResourcesAvailable&quot;: True when underlying resources have been
         * provisioned. * &quot;ContainerHealthy&quot;: True when the Revision
         * readiness check completes. * &quot;Active&quot;: True when the Revision
         * may receive traffic.
         */
        type?: string;
    }
    /**
     * RevisionSpec holds the desired state of the Revision (from the client).
     */
    interface Schema$RevisionSpec {
        /**
         * ConcurrencyModel specifies the desired concurrency model (Single or
         * Multi) for the Revision. Defaults to Multi. Deprecated in favor of
         * ContainerConcurrency. +optional
         */
        concurrencyModel?: string;
        /**
         * Container defines the unit of execution for this Revision. In the context
         * of a Revision, we disallow a number of the fields of this Container,
         * including: name, ports, and volumeMounts. The runtime contract is
         * documented here:
         * https://github.com/knative/serving/blob/master/docs/runtime-contract.md
         */
        container?: Schema$Container;
        /**
         * ContainerConcurrency specifies the maximum allowed in-flight (concurrent)
         * requests per container of the Revision. Values are: - `0` thread-safe,
         * the system should manage the max concurrency. This is    the default
         * value. - `1` not-thread-safe. Single concurrency - `2-N` thread-safe, max
         * concurrency of N
         */
        containerConcurrency?: number;
        /**
         * Deprecated and not currently populated by Cloud Run. See
         * metadata.generation instead, which is the sequence number containing the
         * latest generation of the desired state.  Read-only.
         */
        generation?: number;
        /**
         * Not currently used by Cloud Run.
         */
        serviceAccountName?: string;
        /**
         * ServingState holds a value describing the state the resources are in for
         * this Revision. Users must not specify this when creating a revision. It
         * is expected that the system will manipulate this based on routability and
         * load.  Populated by the system. Read-only.
         */
        servingState?: string;
        /**
         * TimeoutSeconds holds the max duration the instance is allowed for
         * responding to a request. Not currently used by Cloud Run.
         */
        timeoutSeconds?: number;
    }
    /**
     * RevisionStatus communicates the observed state of the Revision (from the
     * controller).
     */
    interface Schema$RevisionStatus {
        /**
         * Conditions communicates information about ongoing/complete reconciliation
         * processes that bring the &quot;spec&quot; inline with the observed state
         * of the world.  As a Revision is being prepared, it will incrementally
         * update conditions &quot;ResourcesAvailable&quot;,
         * &quot;ContainerHealthy&quot;, and &quot;Active&quot;, which contribute to
         * the overall &quot;Ready&quot; condition.
         */
        conditions?: Schema$RevisionCondition[];
        /**
         * ImageDigest holds the resolved digest for the image specified within
         * .Spec.Container.Image. The digest is resolved during the creation of
         * Revision. This field holds the digest value regardless of whether a tag
         * or digest was originally specified in the Container object.
         */
        imageDigest?: string;
        /**
         * Specifies the generated logging url for this particular revision based on
         * the revision url template specified in the controller&#39;s config.
         * +optional
         */
        logUrl?: string;
        /**
         * ObservedGeneration is the &#39;Generation&#39; of the Revision that was
         * last processed by the controller.  Clients polling for completed
         * reconciliation should poll until observedGeneration =
         * metadata.generation, and the Ready condition&#39;s status is True or
         * False.
         */
        observedGeneration?: number;
        /**
         * Not currently used by Cloud Run.
         */
        serviceName?: string;
    }
    /**
     * RevisionTemplateSpec describes the data a revision should have when created
     * from a template. Based on:
     * https://github.com/kubernetes/api/blob/e771f807/core/v1/types.go#L3179-L3190
     */
    interface Schema$RevisionTemplate {
        /**
         * Optional metadata for this Revision, including labels and annotations.
         * Name will be generated by the Configuration.
         */
        metadata?: Schema$ObjectMeta;
        /**
         * RevisionSpec holds the desired state of the Revision (from the client).
         */
        spec?: Schema$RevisionSpec;
    }
    /**
     * Route is responsible for configuring ingress over a collection of
     * Revisions. Some of the Revisions a Route distributes traffic over may be
     * specified by referencing the Configuration responsible for creating them;
     * in these cases the Route is additionally responsible for monitoring the
     * Configuration for &quot;latest ready&quot; revision changes, and smoothly
     * rolling out latest revisions. See also:
     * https://github.com/knative/serving/blob/master/docs/spec/overview.md#route
     * Cloud Run currently supports referencing a single Configuration to
     * automatically deploy the &quot;latest ready&quot; Revision from that
     * Configuration.
     */
    interface Schema$Route {
        /**
         * The API version for this call such as &quot;v1alpha1&quot;.
         */
        apiVersion?: string;
        /**
         * The kind of this resource, in this case always &quot;Route&quot;.
         */
        kind?: string;
        /**
         * Metadata associated with this Route, including name, namespace, labels,
         * and annotations.
         */
        metadata?: Schema$ObjectMeta;
        /**
         * Spec holds the desired state of the Route (from the client).
         */
        spec?: Schema$RouteSpec;
        /**
         * Status communicates the observed state of the Route (from the
         * controller).
         */
        status?: Schema$RouteStatus;
    }
    /**
     * RouteCondition defines a readiness condition for a Route.
     */
    interface Schema$RouteCondition {
        /**
         * Last time the condition transitioned from one status to another.
         * +optional
         */
        lastTransitionTime?: string;
        /**
         * Human-readable message indicating details about last transition.
         * +optional
         */
        message?: string;
        /**
         * One-word CamelCase reason for the condition&#39;s last transition.
         * +optional
         */
        reason?: string;
        /**
         * Status of the condition, one of &quot;True&quot;, &quot;False&quot;,
         * &quot;Unknown&quot;.
         */
        status?: string;
        /**
         * RouteConditionType is used to communicate the status of the
         * reconciliation process. See also:
         * https://github.com/knative/serving/blob/master/docs/spec/errors.md#error-conditions-and-reporting
         * Types include: &quot;Ready&quot;.
         */
        type?: string;
    }
    /**
     * RouteSpec holds the desired state of the Route (from the client).
     */
    interface Schema$RouteSpec {
        /**
         * Deprecated and not currently populated by Cloud Run. See
         * metadata.generation instead, which is the sequence number containing the
         * latest generation of the desired state.  Read-only.
         */
        generation?: number;
        /**
         * Traffic specifies how to distribute traffic over a collection of Knative
         * Revisions and Configurations. Cloud Run currently supports a single
         * configurationName.
         */
        traffic?: Schema$TrafficTarget[];
    }
    /**
     * RouteStatus communicates the observed state of the Route (from the
     * controller).
     */
    interface Schema$RouteStatus {
        /**
         * Similar to domain, information on where the service is available on HTTP.
         */
        address?: Schema$Addressable;
        /**
         * Conditions communicates information about ongoing/complete reconciliation
         * processes that bring the &quot;spec&quot; inline with the observed state
         * of the world.
         */
        conditions?: Schema$RouteCondition[];
        /**
         * Domain holds the top-level domain that will distribute traffic over the
         * provided targets. It generally has the form
         * https://{route-hash}-{project-hash}-{cluster-level-suffix}.a.run.app
         */
        domain?: string;
        /**
         * For Cloud Run, identifical to domain.
         */
        domainInternal?: string;
        /**
         * ObservedGeneration is the &#39;Generation&#39; of the Route that was last
         * processed by the controller.  Clients polling for completed
         * reconciliation should poll until observedGeneration = metadata.generation
         * and the Ready condition&#39;s status is True or False.  Note that
         * providing a trafficTarget that only has a configurationName will result
         * in a Route that does not increment either its metadata.generation or its
         * observedGeneration, as new &quot;latest ready&quot; revisions from the
         * Configuration are processed without an update to the Route&#39;s spec.
         */
        observedGeneration?: number;
        /**
         * Traffic holds the configured traffic distribution. These entries will
         * always contain RevisionName references. When ConfigurationName appears in
         * the spec, this will hold the LatestReadyRevisionName that we last
         * observed.
         */
        traffic?: Schema$TrafficTarget[];
    }
    /**
     * SecretEnvSource selects a Secret to populate the environment variables
     * with.  The contents of the target Secret&#39;s Data field will represent
     * the key-value pairs as environment variables.
     */
    interface Schema$SecretEnvSource {
        /**
         * The Secret to select from.
         */
        localObjectReference?: Schema$LocalObjectReference;
        /**
         * Specify whether the Secret must be defined +optional
         */
        optional?: boolean;
    }
    /**
     * SecurityContext holds security configuration that will be applied to a
     * container. Some fields are present in both SecurityContext and
     * PodSecurityContext.  When both are set, the values in SecurityContext take
     * precedence.
     */
    interface Schema$SecurityContext {
        /**
         * AllowPrivilegeEscalation controls whether a process can gain more
         * privileges than its parent process. This bool directly controls if the
         * no_new_privs flag will be set on the container process.
         * AllowPrivilegeEscalation is true always when the container is: 1) run as
         * Privileged 2) has CAP_SYS_ADMIN +optional
         */
        allowPrivilegeEscalation?: boolean;
        /**
         * The capabilities to add/drop when running containers. Defaults to the
         * default set of capabilities granted by the container runtime. +optional
         */
        capabilities?: Schema$Capabilities;
        /**
         * Run container in privileged mode. Processes in privileged containers are
         * essentially equivalent to root on the host. Defaults to false. +optional
         */
        privileged?: boolean;
        /**
         * Whether this container has a read-only root filesystem. Default is false.
         * +optional
         */
        readOnlyRootFilesystem?: boolean;
        /**
         * The GID to run the entrypoint of the container process. Uses runtime
         * default if unset. May also be set in PodSecurityContext.  If set in both
         * SecurityContext and PodSecurityContext, the value specified in
         * SecurityContext takes precedence. +optional
         */
        runAsGroup?: string;
        /**
         * Indicates that the container must run as a non-root user. If true, the
         * Kubelet will validate the image at runtime to ensure that it does not run
         * as UID 0 (root) and fail to start the container if it does. If unset or
         * false, no such validation will be performed. May also be set in
         * PodSecurityContext.  If set in both SecurityContext and
         * PodSecurityContext, the value specified in SecurityContext takes
         * precedence. +optional
         */
        runAsNonRoot?: boolean;
        /**
         * The UID to run the entrypoint of the container process. Defaults to user
         * specified in image metadata if unspecified. May also be set in
         * PodSecurityContext.  If set in both SecurityContext and
         * PodSecurityContext, the value specified in SecurityContext takes
         * precedence. +optional
         */
        runAsUser?: string;
        /**
         * The SELinux context to be applied to the container. If unspecified, the
         * container runtime will allocate a random SELinux context for each
         * container.  May also be set in PodSecurityContext.  If set in both
         * SecurityContext and PodSecurityContext, the value specified in
         * SecurityContext takes precedence. +optional
         */
        seLinuxOptions?: Schema$SELinuxOptions;
    }
    /**
     * SELinuxOptions are the labels to be applied to the container
     */
    interface Schema$SELinuxOptions {
        /**
         * Level is SELinux level label that applies to the container. +optional
         */
        level?: string;
        /**
         * Role is a SELinux role label that applies to the container. +optional
         */
        role?: string;
        /**
         * Type is a SELinux type label that applies to the container. +optional
         */
        type?: string;
        /**
         * User is a SELinux user label that applies to the container. +optional
         */
        user?: string;
    }
    /**
     * Service acts as a top-level container that manages a set of Routes and
     * Configurations which implement a network service. Service exists to provide
     * a singular abstraction which can be access controlled, reasoned about, and
     * which encapsulates software lifecycle decisions such as rollout policy and
     * team resource ownership. Service acts only as an orchestrator of the
     * underlying Routes and Configurations (much as a kubernetes Deployment
     * orchestrates ReplicaSets).  The Service&#39;s controller will track the
     * statuses of its owned Configuration and Route, reflecting their statuses
     * and conditions as its own.  See also:
     * https://github.com/knative/serving/blob/master/docs/spec/overview.md#service
     */
    interface Schema$Service {
        /**
         * The API version for this call such as &quot;v1alpha1&quot;.
         */
        apiVersion?: string;
        /**
         * The kind of resource, in this case &quot;Service&quot;.
         */
        kind?: string;
        /**
         * Metadata associated with this Service, including name, namespace, labels,
         * and annotations.
         */
        metadata?: Schema$ObjectMeta;
        /**
         * Spec holds the desired state of the Service (from the client).
         */
        spec?: Schema$ServiceSpec;
        /**
         * Status communicates the observed state of the Service (from the
         * controller).
         */
        status?: Schema$ServiceStatus;
    }
    /**
     * ServiceCondition defines a readiness condition for a Service.
     */
    interface Schema$ServiceCondition {
        /**
         * Last time the condition transitioned from one status to another.
         * +optional
         */
        lastTransitionTime?: string;
        /**
         * Human-readable message indicating details about last transition.
         * +optional
         */
        message?: string;
        /**
         * One-word CamelCase reason for the condition&#39;s last transition.
         * +optional
         */
        reason?: string;
        /**
         * Status of the condition, one of True, False, Unknown.
         */
        status?: string;
        /**
         * ServiceConditionType is used to communicate the status of the
         * reconciliation process. See also:
         * https://github.com/knative/serving/blob/master/docs/spec/errors.md#error-conditions-and-reporting
         * Types include: &quot;Ready&quot;, &quot;ConfigurationsReady&quot;, and
         * &quot;RoutesReady&quot;. &quot;Ready&quot; will be true when the
         * underlying Route and Configuration are ready.
         */
        type?: string;
    }
    /**
     * ServiceSpec holds the desired state of the Route (from the client), which
     * is used to manipulate the underlying Route and Configuration(s).
     */
    interface Schema$ServiceSpec {
        /**
         * Deprecated and not currently populated by Cloud Run. See
         * metadata.generation instead, which is the sequence number containing the
         * latest generation of the desired state.  Read-only.
         */
        generation?: number;
        /**
         * Manual contains the options for configuring a manual service. See
         * ServiceSpec for more details.  Not currently supported by Cloud Run.
         */
        manual?: Schema$ServiceSpecManualType;
        /**
         * Pins this service to a specific revision name. The revision must be owned
         * by the configuration provided.  Deprecated and not supported by Cloud
         * Run. +optional
         */
        pinned?: Schema$ServiceSpecPinnedType;
        /**
         * Release enables gradual promotion of new revisions by allowing traffic to
         * be split between two revisions. This type replaces the deprecated Pinned
         * type.  Not currently supported by Cloud Run.
         */
        release?: Schema$ServiceSpecReleaseType;
        /**
         * RunLatest defines a simple Service. It will automatically configure a
         * route that keeps the latest ready revision from the supplied
         * configuration running. +optional
         */
        runLatest?: Schema$ServiceSpecRunLatest;
    }
    /**
     * ServiceSpecManualType contains the options for configuring a manual
     * service. See ServiceSpec for more details.  Not currently supported by
     * Cloud Run.
     */
    interface Schema$ServiceSpecManualType {
    }
    /**
     * ServiceSpecPinnedType Pins this service to a specific revision name. The
     * revision must be owned by the configuration provided.  Deprecated and not
     * supported by Cloud Run.
     */
    interface Schema$ServiceSpecPinnedType {
        /**
         * The configuration for this service.
         */
        configuration?: Schema$ConfigurationSpec;
        /**
         * The revision name to pin this service to until changed to a different
         * service type.
         */
        revisionName?: string;
    }
    /**
     * ServiceSpecReleaseType contains the options for slowly releasing revisions.
     * See ServiceSpec for more details.  Not currently supported by Cloud Run.
     */
    interface Schema$ServiceSpecReleaseType {
        /**
         * The configuration for this service. All revisions from this service must
         * come from a single configuration.
         */
        configuration?: Schema$ConfigurationSpec;
        /**
         * Revisions is an ordered list of 1 or 2 revisions. The first is the
         * current revision, and the second is the candidate revision. If a single
         * revision is provided, traffic will be pinned at that revision.
         * &quot;@latest&quot; is a shortcut for usage that refers to the latest
         * created revision by the configuration.
         */
        revisions?: string[];
        /**
         * RolloutPercent is the percent of traffic that should be sent to the
         * candidate revision, i.e. the 2nd revision in the revisions list. Valid
         * values are between 0 and 99 inclusive.
         */
        rolloutPercent?: number;
    }
    /**
     * ServiceSpecRunLatest contains the options for always having a route to the
     * latest configuration. See ServiceSpec for more details.
     */
    interface Schema$ServiceSpecRunLatest {
        /**
         * The configuration for this service.
         */
        configuration?: Schema$ConfigurationSpec;
    }
    /**
     * The current state of the Service. Output only.
     */
    interface Schema$ServiceStatus {
        /**
         * From RouteStatus. Similar to domain, information on where the service is
         * available on HTTP.
         */
        address?: Schema$Addressable;
        /**
         * Conditions communicates information about ongoing/complete reconciliation
         * processes that bring the &quot;spec&quot; inline with the observed state
         * of the world.
         */
        conditions?: Schema$ServiceCondition[];
        /**
         * From RouteStatus. Domain holds the top-level domain that will distribute
         * traffic over the provided targets. It generally has the form
         * https://{route-hash}-{project-hash}-{cluster-level-suffix}.a.run.app
         */
        domain?: string;
        /**
         * From ConfigurationStatus. LatestCreatedRevisionName is the last revision
         * that was created from this Service&#39;s Configuration. It might not be
         * ready yet, for that use LatestReadyRevisionName.
         */
        latestCreatedRevisionName?: string;
        /**
         * From ConfigurationStatus. LatestReadyRevisionName holds the name of the
         * latest Revision stamped out from this Service&#39;s Configuration that
         * has had its &quot;Ready&quot; condition become &quot;True&quot;.
         */
        latestReadyRevisionName?: string;
        /**
         * ObservedGeneration is the &#39;Generation&#39; of the Route that was last
         * processed by the controller.  Clients polling for completed
         * reconciliation should poll until observedGeneration = metadata.generation
         * and the Ready condition&#39;s status is True or False.
         */
        observedGeneration?: number;
        /**
         * From RouteStatus. Traffic holds the configured traffic distribution.
         * These entries will always contain RevisionName references. When
         * ConfigurationName appears in the spec, this will hold the
         * LatestReadyRevisionName that we last observed.
         */
        traffic?: Schema$TrafficTarget[];
    }
    /**
     * Request message for `SetIamPolicy` method.
     */
    interface Schema$SetIamPolicyRequest {
        /**
         * REQUIRED: The complete policy to be applied to the `resource`. The size
         * of the policy is limited to a few 10s of KB. An empty policy is a valid
         * policy but certain Cloud Platform services (such as Projects) might
         * reject them.
         */
        policy?: Schema$Policy;
        /**
         * OPTIONAL: A FieldMask specifying which fields of the policy to modify.
         * Only the fields in the mask will be modified. If no mask is provided, the
         * following default mask is used: paths: &quot;bindings, etag&quot; This
         * field is only used by Cloud IAM.
         */
        updateMask?: string;
    }
    /**
     * TCPSocketAction describes an action based on opening a socket
     */
    interface Schema$TCPSocketAction {
        /**
         * Optional: Host name to connect to, defaults to the pod IP. +optional
         */
        host?: string;
        /**
         * Number or name of the port to access on the container. Number must be in
         * the range 1 to 65535. Name must be an IANA_SVC_NAME.
         */
        port?: Schema$IntOrString;
    }
    /**
     * Request message for `TestIamPermissions` method.
     */
    interface Schema$TestIamPermissionsRequest {
        /**
         * The set of permissions to check for the `resource`. Permissions with
         * wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed.
         * For more information see [IAM
         * Overview](https://cloud.google.com/iam/docs/overview#permissions).
         */
        permissions?: string[];
    }
    /**
     * Response message for `TestIamPermissions` method.
     */
    interface Schema$TestIamPermissionsResponse {
        /**
         * A subset of `TestPermissionsRequest.permissions` that the caller is
         * allowed.
         */
        permissions?: string[];
    }
    /**
     * TrafficTarget holds a single entry of the routing table for a Route.
     */
    interface Schema$TrafficTarget {
        /**
         * ConfigurationName of a configuration to whose latest revision we will
         * send this portion of traffic. When the
         * &quot;status.latestReadyRevisionName&quot; of the referenced
         * configuration changes, we will automatically migrate traffic from the
         * prior &quot;latest ready&quot; revision to the new one. This field is
         * never set in Route&#39;s status, only its spec. This is mutually
         * exclusive with RevisionName.  Cloud Run currently supports a single
         * ConfigurationName.
         */
        configurationName?: string;
        /**
         * Name is optionally used to expose a dedicated hostname for referencing
         * this target exclusively.  Not currently supported by Cloud Run. +optional
         */
        name?: string;
        /**
         * Percent specifies percent of the traffic to this Revision or
         * Configuration. This defaults to zero if unspecified.  Cloud Run currently
         * requires 100 percent for a single ConfigurationName TrafficTarget entry.
         */
        percent?: number;
        /**
         * RevisionName of a specific revision to which to send this portion of
         * traffic. This is mutually exclusive with ConfigurationName.  Providing
         * RevisionName in spec is not currently supported by Cloud Run.
         */
        revisionName?: string;
    }
    /**
     * volumeDevice describes a mapping of a raw block device within a container.
     */
    interface Schema$VolumeDevice {
        /**
         * devicePath is the path inside of the container that the device will be
         * mapped to.
         */
        devicePath?: string;
        /**
         * name must match the name of a persistentVolumeClaim in the pod
         */
        name?: string;
    }
    /**
     * VolumeMount describes a mounting of a Volume within a container.
     */
    interface Schema$VolumeMount {
        /**
         * Path within the container at which the volume should be mounted.  Must
         * not contain &#39;:&#39;.
         */
        mountPath?: string;
        /**
         * mountPropagation determines how mounts are propagated from the host to
         * container and the other way around. When not set,
         * MountPropagationHostToContainer is used. This field is beta in 1.10.
         * +optional
         */
        mountPropagation?: string;
        /**
         * This must match the Name of a Volume.
         */
        name?: string;
        /**
         * Mounted read-only if true, read-write otherwise (false or unspecified).
         * Defaults to false. +optional
         */
        readOnly?: boolean;
        /**
         * Path within the volume from which the container&#39;s volume should be
         * mounted. Defaults to &quot;&quot; (volume&#39;s root). +optional
         */
        subPath?: string;
    }
    class Resource$Namespaces {
        context: APIRequestContext;
        authorizeddomains: Resource$Namespaces$Authorizeddomains;
        configurations: Resource$Namespaces$Configurations;
        domainmappings: Resource$Namespaces$Domainmappings;
        revisions: Resource$Namespaces$Revisions;
        routes: Resource$Namespaces$Routes;
        services: Resource$Namespaces$Services;
        constructor(context: APIRequestContext);
    }
    class Resource$Namespaces$Authorizeddomains {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * run.namespaces.authorizeddomains.list
         * @desc RPC to list authorized domains.
         * @alias run.namespaces.authorizeddomains.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.pageSize Maximum results to return per page.
         * @param {string=} params.pageToken Continuation token for fetching the next page of results.
         * @param {string} params.parent Name of the parent Application resource. Example: `apps/myapp`.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Namespaces$Authorizeddomains$List, options?: MethodOptions): GaxiosPromise<Schema$ListAuthorizedDomainsResponse>;
        list(params: Params$Resource$Namespaces$Authorizeddomains$List, options: MethodOptions | BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>, callback: BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>): void;
        list(params: Params$Resource$Namespaces$Authorizeddomains$List, callback: BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>): void;
    }
    interface Params$Resource$Namespaces$Authorizeddomains$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Maximum results to return per page.
         */
        pageSize?: number;
        /**
         * Continuation token for fetching the next page of results.
         */
        pageToken?: string;
        /**
         * Name of the parent Application resource. Example: `apps/myapp`.
         */
        parent?: string;
    }
    class Resource$Namespaces$Configurations {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * run.namespaces.configurations.get
         * @desc Rpc to get information about a configuration.
         * @alias run.namespaces.configurations.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the configuration being retrieved. If needed, replace {namespace_id} with the project ID.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Namespaces$Configurations$Get, options?: MethodOptions): GaxiosPromise<Schema$Configuration>;
        get(params: Params$Resource$Namespaces$Configurations$Get, options: MethodOptions | BodyResponseCallback<Schema$Configuration>, callback: BodyResponseCallback<Schema$Configuration>): void;
        get(params: Params$Resource$Namespaces$Configurations$Get, callback: BodyResponseCallback<Schema$Configuration>): void;
        get(callback: BodyResponseCallback<Schema$Configuration>): void;
        /**
         * run.namespaces.configurations.list
         * @desc Rpc to list configurations.
         * @alias run.namespaces.configurations.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.continue Optional encoded string to continue paging.
         * @param {string=} params.fieldSelector Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
         * @param {boolean=} params.includeUninitialized Not currently used by Cloud Run.
         * @param {string=} params.labelSelector Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
         * @param {integer=} params.limit The maximum number of records that should be returned.
         * @param {string} params.parent The project ID or project number from which the configurations should be listed.
         * @param {string=} params.resourceVersion The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
         * @param {boolean=} params.watch Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Namespaces$Configurations$List, options?: MethodOptions): GaxiosPromise<Schema$ListConfigurationsResponse>;
        list(params: Params$Resource$Namespaces$Configurations$List, options: MethodOptions | BodyResponseCallback<Schema$ListConfigurationsResponse>, callback: BodyResponseCallback<Schema$ListConfigurationsResponse>): void;
        list(params: Params$Resource$Namespaces$Configurations$List, callback: BodyResponseCallback<Schema$ListConfigurationsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListConfigurationsResponse>): void;
    }
    interface Params$Resource$Namespaces$Configurations$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the configuration being retrieved. If needed, replace
         * {namespace_id} with the project ID.
         */
        name?: string;
    }
    interface Params$Resource$Namespaces$Configurations$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Optional encoded string to continue paging.
         */
        continue?: string;
        /**
         * Allows to filter resources based on a specific value for a field name.
         * Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not
         * currently used by Cloud Run.
         */
        fieldSelector?: string;
        /**
         * Not currently used by Cloud Run.
         */
        includeUninitialized?: boolean;
        /**
         * Allows to filter resources based on a label. Supported operations are =,
         * !=, exists, in, and notIn.
         */
        labelSelector?: string;
        /**
         * The maximum number of records that should be returned.
         */
        limit?: number;
        /**
         * The project ID or project number from which the configurations should be
         * listed.
         */
        parent?: string;
        /**
         * The baseline resource version from which the list or watch operation
         * should start. Not currently used by Cloud Run.
         */
        resourceVersion?: string;
        /**
         * Flag that indicates that the client expects to watch this resource as
         * well. Not currently used by Cloud Run.
         */
        watch?: boolean;
    }
    class Resource$Namespaces$Domainmappings {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * run.namespaces.domainmappings.create
         * @desc Creates a new domain mapping.
         * @alias run.namespaces.domainmappings.create
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent The project ID or project number in which this domain mapping should be created.
         * @param {().DomainMapping} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create(params?: Params$Resource$Namespaces$Domainmappings$Create, options?: MethodOptions): GaxiosPromise<Schema$DomainMapping>;
        create(params: Params$Resource$Namespaces$Domainmappings$Create, options: MethodOptions | BodyResponseCallback<Schema$DomainMapping>, callback: BodyResponseCallback<Schema$DomainMapping>): void;
        create(params: Params$Resource$Namespaces$Domainmappings$Create, callback: BodyResponseCallback<Schema$DomainMapping>): void;
        create(callback: BodyResponseCallback<Schema$DomainMapping>): void;
        /**
         * run.namespaces.domainmappings.delete
         * @desc Rpc to delete a domain mapping.
         * @alias run.namespaces.domainmappings.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.apiVersion Cloud Run currently ignores this parameter.
         * @param {string=} params.kind Cloud Run currently ignores this parameter.
         * @param {string} params.name The name of the domain mapping being deleted. If needed, replace {namespace_id} with the project ID.
         * @param {boolean=} params.orphanDependents Deprecated. Specifies the cascade behavior on delete. Cloud Run only supports cascading behavior, so this must be false. This attribute is deprecated, and is now replaced with PropagationPolicy See https://github.com/kubernetes/kubernetes/issues/46659 for more info.
         * @param {string=} params.propagationPolicy Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Namespaces$Domainmappings$Delete, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Namespaces$Domainmappings$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Namespaces$Domainmappings$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * run.namespaces.domainmappings.get
         * @desc Rpc to get information about a domain mapping.
         * @alias run.namespaces.domainmappings.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the domain mapping being retrieved. If needed, replace {namespace_id} with the project ID.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Namespaces$Domainmappings$Get, options?: MethodOptions): GaxiosPromise<Schema$DomainMapping>;
        get(params: Params$Resource$Namespaces$Domainmappings$Get, options: MethodOptions | BodyResponseCallback<Schema$DomainMapping>, callback: BodyResponseCallback<Schema$DomainMapping>): void;
        get(params: Params$Resource$Namespaces$Domainmappings$Get, callback: BodyResponseCallback<Schema$DomainMapping>): void;
        get(callback: BodyResponseCallback<Schema$DomainMapping>): void;
        /**
         * run.namespaces.domainmappings.list
         * @desc Rpc to list domain mappings.
         * @alias run.namespaces.domainmappings.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.continue Optional encoded string to continue paging.
         * @param {string=} params.fieldSelector Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
         * @param {boolean=} params.includeUninitialized Not currently used by Cloud Run.
         * @param {string=} params.labelSelector Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
         * @param {integer=} params.limit The maximum number of records that should be returned.
         * @param {string} params.parent The project ID or project number from which the domain mappings should be listed.
         * @param {string=} params.resourceVersion The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
         * @param {boolean=} params.watch Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Namespaces$Domainmappings$List, options?: MethodOptions): GaxiosPromise<Schema$ListDomainMappingsResponse>;
        list(params: Params$Resource$Namespaces$Domainmappings$List, options: MethodOptions | BodyResponseCallback<Schema$ListDomainMappingsResponse>, callback: BodyResponseCallback<Schema$ListDomainMappingsResponse>): void;
        list(params: Params$Resource$Namespaces$Domainmappings$List, callback: BodyResponseCallback<Schema$ListDomainMappingsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListDomainMappingsResponse>): void;
    }
    interface Params$Resource$Namespaces$Domainmappings$Create extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The project ID or project number in which this domain mapping should be
         * created.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$DomainMapping;
    }
    interface Params$Resource$Namespaces$Domainmappings$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Cloud Run currently ignores this parameter.
         */
        apiVersion?: string;
        /**
         * Cloud Run currently ignores this parameter.
         */
        kind?: string;
        /**
         * The name of the domain mapping being deleted. If needed, replace
         * {namespace_id} with the project ID.
         */
        name?: string;
        /**
         * Deprecated. Specifies the cascade behavior on delete. Cloud Run only
         * supports cascading behavior, so this must be false. This attribute is
         * deprecated, and is now replaced with PropagationPolicy See
         * https://github.com/kubernetes/kubernetes/issues/46659 for more info.
         */
        orphanDependents?: boolean;
        /**
         * Specifies the propagation policy of delete. Cloud Run currently ignores
         * this setting, and deletes in the background. Please see
         * kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for
         * more information.
         */
        propagationPolicy?: string;
    }
    interface Params$Resource$Namespaces$Domainmappings$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the domain mapping being retrieved. If needed, replace
         * {namespace_id} with the project ID.
         */
        name?: string;
    }
    interface Params$Resource$Namespaces$Domainmappings$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Optional encoded string to continue paging.
         */
        continue?: string;
        /**
         * Allows to filter resources based on a specific value for a field name.
         * Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not
         * currently used by Cloud Run.
         */
        fieldSelector?: string;
        /**
         * Not currently used by Cloud Run.
         */
        includeUninitialized?: boolean;
        /**
         * Allows to filter resources based on a label. Supported operations are =,
         * !=, exists, in, and notIn.
         */
        labelSelector?: string;
        /**
         * The maximum number of records that should be returned.
         */
        limit?: number;
        /**
         * The project ID or project number from which the domain mappings should be
         * listed.
         */
        parent?: string;
        /**
         * The baseline resource version from which the list or watch operation
         * should start. Not currently used by Cloud Run.
         */
        resourceVersion?: string;
        /**
         * Flag that indicates that the client expects to watch this resource as
         * well. Not currently used by Cloud Run.
         */
        watch?: boolean;
    }
    class Resource$Namespaces$Revisions {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * run.namespaces.revisions.delete
         * @desc Rpc to delete a revision.
         * @alias run.namespaces.revisions.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.apiVersion Cloud Run currently ignores this parameter.
         * @param {string=} params.kind Cloud Run currently ignores this parameter.
         * @param {string} params.name The name of the revision being deleted. If needed, replace {namespace_id} with the project ID.
         * @param {boolean=} params.orphanDependents Deprecated. Specifies the cascade behavior on delete. Cloud Run only supports cascading behavior, so this must be false. This attribute is deprecated, and is now replaced with PropagationPolicy See https://github.com/kubernetes/kubernetes/issues/46659 for more info.
         * @param {string=} params.propagationPolicy Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Namespaces$Revisions$Delete, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Namespaces$Revisions$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Namespaces$Revisions$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * run.namespaces.revisions.get
         * @desc Rpc to get information about a revision.
         * @alias run.namespaces.revisions.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the revision being retrieved. If needed, replace {namespace_id} with the project ID.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Namespaces$Revisions$Get, options?: MethodOptions): GaxiosPromise<Schema$Revision>;
        get(params: Params$Resource$Namespaces$Revisions$Get, options: MethodOptions | BodyResponseCallback<Schema$Revision>, callback: BodyResponseCallback<Schema$Revision>): void;
        get(params: Params$Resource$Namespaces$Revisions$Get, callback: BodyResponseCallback<Schema$Revision>): void;
        get(callback: BodyResponseCallback<Schema$Revision>): void;
        /**
         * run.namespaces.revisions.list
         * @desc Rpc to list revisions.
         * @alias run.namespaces.revisions.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.continue Optional encoded string to continue paging.
         * @param {string=} params.fieldSelector Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
         * @param {boolean=} params.includeUninitialized Not currently used by Cloud Run.
         * @param {string=} params.labelSelector Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
         * @param {integer=} params.limit The maximum number of records that should be returned.
         * @param {string} params.parent The project ID or project number from which the revisions should be listed.
         * @param {string=} params.resourceVersion The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
         * @param {boolean=} params.watch Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Namespaces$Revisions$List, options?: MethodOptions): GaxiosPromise<Schema$ListRevisionsResponse>;
        list(params: Params$Resource$Namespaces$Revisions$List, options: MethodOptions | BodyResponseCallback<Schema$ListRevisionsResponse>, callback: BodyResponseCallback<Schema$ListRevisionsResponse>): void;
        list(params: Params$Resource$Namespaces$Revisions$List, callback: BodyResponseCallback<Schema$ListRevisionsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListRevisionsResponse>): void;
    }
    interface Params$Resource$Namespaces$Revisions$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Cloud Run currently ignores this parameter.
         */
        apiVersion?: string;
        /**
         * Cloud Run currently ignores this parameter.
         */
        kind?: string;
        /**
         * The name of the revision being deleted. If needed, replace {namespace_id}
         * with the project ID.
         */
        name?: string;
        /**
         * Deprecated. Specifies the cascade behavior on delete. Cloud Run only
         * supports cascading behavior, so this must be false. This attribute is
         * deprecated, and is now replaced with PropagationPolicy See
         * https://github.com/kubernetes/kubernetes/issues/46659 for more info.
         */
        orphanDependents?: boolean;
        /**
         * Specifies the propagation policy of delete. Cloud Run currently ignores
         * this setting, and deletes in the background. Please see
         * kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for
         * more information.
         */
        propagationPolicy?: string;
    }
    interface Params$Resource$Namespaces$Revisions$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the revision being retrieved. If needed, replace
         * {namespace_id} with the project ID.
         */
        name?: string;
    }
    interface Params$Resource$Namespaces$Revisions$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Optional encoded string to continue paging.
         */
        continue?: string;
        /**
         * Allows to filter resources based on a specific value for a field name.
         * Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not
         * currently used by Cloud Run.
         */
        fieldSelector?: string;
        /**
         * Not currently used by Cloud Run.
         */
        includeUninitialized?: boolean;
        /**
         * Allows to filter resources based on a label. Supported operations are =,
         * !=, exists, in, and notIn.
         */
        labelSelector?: string;
        /**
         * The maximum number of records that should be returned.
         */
        limit?: number;
        /**
         * The project ID or project number from which the revisions should be
         * listed.
         */
        parent?: string;
        /**
         * The baseline resource version from which the list or watch operation
         * should start. Not currently used by Cloud Run.
         */
        resourceVersion?: string;
        /**
         * Flag that indicates that the client expects to watch this resource as
         * well. Not currently used by Cloud Run.
         */
        watch?: boolean;
    }
    class Resource$Namespaces$Routes {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * run.namespaces.routes.get
         * @desc Rpc to get information about a route.
         * @alias run.namespaces.routes.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the route being retrieved. If needed, replace {namespace_id} with the project ID.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Namespaces$Routes$Get, options?: MethodOptions): GaxiosPromise<Schema$Route>;
        get(params: Params$Resource$Namespaces$Routes$Get, options: MethodOptions | BodyResponseCallback<Schema$Route>, callback: BodyResponseCallback<Schema$Route>): void;
        get(params: Params$Resource$Namespaces$Routes$Get, callback: BodyResponseCallback<Schema$Route>): void;
        get(callback: BodyResponseCallback<Schema$Route>): void;
        /**
         * run.namespaces.routes.list
         * @desc Rpc to list routes.
         * @alias run.namespaces.routes.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.continue Optional encoded string to continue paging.
         * @param {string=} params.fieldSelector Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
         * @param {boolean=} params.includeUninitialized Not currently used by Cloud Run.
         * @param {string=} params.labelSelector Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
         * @param {integer=} params.limit The maximum number of records that should be returned.
         * @param {string} params.parent The project ID or project number from which the routes should be listed.
         * @param {string=} params.resourceVersion The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
         * @param {boolean=} params.watch Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Namespaces$Routes$List, options?: MethodOptions): GaxiosPromise<Schema$ListRoutesResponse>;
        list(params: Params$Resource$Namespaces$Routes$List, options: MethodOptions | BodyResponseCallback<Schema$ListRoutesResponse>, callback: BodyResponseCallback<Schema$ListRoutesResponse>): void;
        list(params: Params$Resource$Namespaces$Routes$List, callback: BodyResponseCallback<Schema$ListRoutesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListRoutesResponse>): void;
    }
    interface Params$Resource$Namespaces$Routes$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the route being retrieved. If needed, replace {namespace_id}
         * with the project ID.
         */
        name?: string;
    }
    interface Params$Resource$Namespaces$Routes$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Optional encoded string to continue paging.
         */
        continue?: string;
        /**
         * Allows to filter resources based on a specific value for a field name.
         * Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not
         * currently used by Cloud Run.
         */
        fieldSelector?: string;
        /**
         * Not currently used by Cloud Run.
         */
        includeUninitialized?: boolean;
        /**
         * Allows to filter resources based on a label. Supported operations are =,
         * !=, exists, in, and notIn.
         */
        labelSelector?: string;
        /**
         * The maximum number of records that should be returned.
         */
        limit?: number;
        /**
         * The project ID or project number from which the routes should be listed.
         */
        parent?: string;
        /**
         * The baseline resource version from which the list or watch operation
         * should start. Not currently used by Cloud Run.
         */
        resourceVersion?: string;
        /**
         * Flag that indicates that the client expects to watch this resource as
         * well. Not currently used by Cloud Run.
         */
        watch?: boolean;
    }
    class Resource$Namespaces$Services {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * run.namespaces.services.create
         * @desc Rpc to create a service.
         * @alias run.namespaces.services.create
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent The project ID or project number in which this service should be created.
         * @param {().Service} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create(params?: Params$Resource$Namespaces$Services$Create, options?: MethodOptions): GaxiosPromise<Schema$Service>;
        create(params: Params$Resource$Namespaces$Services$Create, options: MethodOptions | BodyResponseCallback<Schema$Service>, callback: BodyResponseCallback<Schema$Service>): void;
        create(params: Params$Resource$Namespaces$Services$Create, callback: BodyResponseCallback<Schema$Service>): void;
        create(callback: BodyResponseCallback<Schema$Service>): void;
        /**
         * run.namespaces.services.delete
         * @desc Rpc to delete a service. This will cause the Service to stop
         * serving traffic and will delete the child entities like Routes,
         * Configurations and Revisions.
         * @alias run.namespaces.services.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.apiVersion Cloud Run currently ignores this parameter.
         * @param {string=} params.kind Cloud Run currently ignores this parameter.
         * @param {string} params.name The name of the service being deleted. If needed, replace {namespace_id} with the project ID.
         * @param {boolean=} params.orphanDependents Deprecated. Specifies the cascade behavior on delete. Cloud Run only supports cascading behavior, so this must be false. This attribute is deprecated, and is now replaced with PropagationPolicy See https://github.com/kubernetes/kubernetes/issues/46659 for more info.
         * @param {string=} params.propagationPolicy Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Namespaces$Services$Delete, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Namespaces$Services$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Namespaces$Services$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * run.namespaces.services.get
         * @desc Rpc to get information about a service.
         * @alias run.namespaces.services.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the service being retrieved. If needed, replace {namespace_id} with the project ID.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Namespaces$Services$Get, options?: MethodOptions): GaxiosPromise<Schema$Service>;
        get(params: Params$Resource$Namespaces$Services$Get, options: MethodOptions | BodyResponseCallback<Schema$Service>, callback: BodyResponseCallback<Schema$Service>): void;
        get(params: Params$Resource$Namespaces$Services$Get, callback: BodyResponseCallback<Schema$Service>): void;
        get(callback: BodyResponseCallback<Schema$Service>): void;
        /**
         * run.namespaces.services.list
         * @desc Rpc to list services.
         * @alias run.namespaces.services.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.continue Optional encoded string to continue paging.
         * @param {string=} params.fieldSelector Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
         * @param {boolean=} params.includeUninitialized Not currently used by Cloud Run.
         * @param {string=} params.labelSelector Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
         * @param {integer=} params.limit The maximum number of records that should be returned.
         * @param {string} params.parent The project ID or project number from which the services should be listed.
         * @param {string=} params.resourceVersion The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
         * @param {boolean=} params.watch Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Namespaces$Services$List, options?: MethodOptions): GaxiosPromise<Schema$ListServicesResponse>;
        list(params: Params$Resource$Namespaces$Services$List, options: MethodOptions | BodyResponseCallback<Schema$ListServicesResponse>, callback: BodyResponseCallback<Schema$ListServicesResponse>): void;
        list(params: Params$Resource$Namespaces$Services$List, callback: BodyResponseCallback<Schema$ListServicesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListServicesResponse>): void;
        /**
         * run.namespaces.services.replaceService
         * @desc Rpc to replace a service.  Only the spec and metadata labels and
         * annotations are modifiable. After the Update request, Cloud Run will work
         * to make the 'status' match the requested 'spec'.  May provide
         * metadata.resourceVersion to enforce update from last read for optimistic
         * concurrency control.
         * @alias run.namespaces.services.replaceService
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the service being replaced. If needed, replace {namespace_id} with the project ID.
         * @param {().Service} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        replaceService(params?: Params$Resource$Namespaces$Services$Replaceservice, options?: MethodOptions): GaxiosPromise<Schema$Service>;
        replaceService(params: Params$Resource$Namespaces$Services$Replaceservice, options: MethodOptions | BodyResponseCallback<Schema$Service>, callback: BodyResponseCallback<Schema$Service>): void;
        replaceService(params: Params$Resource$Namespaces$Services$Replaceservice, callback: BodyResponseCallback<Schema$Service>): void;
        replaceService(callback: BodyResponseCallback<Schema$Service>): void;
    }
    interface Params$Resource$Namespaces$Services$Create extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The project ID or project number in which this service should be created.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Service;
    }
    interface Params$Resource$Namespaces$Services$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Cloud Run currently ignores this parameter.
         */
        apiVersion?: string;
        /**
         * Cloud Run currently ignores this parameter.
         */
        kind?: string;
        /**
         * The name of the service being deleted. If needed, replace {namespace_id}
         * with the project ID.
         */
        name?: string;
        /**
         * Deprecated. Specifies the cascade behavior on delete. Cloud Run only
         * supports cascading behavior, so this must be false. This attribute is
         * deprecated, and is now replaced with PropagationPolicy See
         * https://github.com/kubernetes/kubernetes/issues/46659 for more info.
         */
        orphanDependents?: boolean;
        /**
         * Specifies the propagation policy of delete. Cloud Run currently ignores
         * this setting, and deletes in the background. Please see
         * kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for
         * more information.
         */
        propagationPolicy?: string;
    }
    interface Params$Resource$Namespaces$Services$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the service being retrieved. If needed, replace
         * {namespace_id} with the project ID.
         */
        name?: string;
    }
    interface Params$Resource$Namespaces$Services$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Optional encoded string to continue paging.
         */
        continue?: string;
        /**
         * Allows to filter resources based on a specific value for a field name.
         * Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not
         * currently used by Cloud Run.
         */
        fieldSelector?: string;
        /**
         * Not currently used by Cloud Run.
         */
        includeUninitialized?: boolean;
        /**
         * Allows to filter resources based on a label. Supported operations are =,
         * !=, exists, in, and notIn.
         */
        labelSelector?: string;
        /**
         * The maximum number of records that should be returned.
         */
        limit?: number;
        /**
         * The project ID or project number from which the services should be
         * listed.
         */
        parent?: string;
        /**
         * The baseline resource version from which the list or watch operation
         * should start. Not currently used by Cloud Run.
         */
        resourceVersion?: string;
        /**
         * Flag that indicates that the client expects to watch this resource as
         * well. Not currently used by Cloud Run.
         */
        watch?: boolean;
    }
    interface Params$Resource$Namespaces$Services$Replaceservice extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the service being replaced. If needed, replace {namespace_id}
         * with the project ID.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Service;
    }
    class Resource$Projects {
        context: APIRequestContext;
        locations: Resource$Projects$Locations;
        constructor(context: APIRequestContext);
    }
    class Resource$Projects$Locations {
        context: APIRequestContext;
        authorizeddomains: Resource$Projects$Locations$Authorizeddomains;
        configurations: Resource$Projects$Locations$Configurations;
        domainmappings: Resource$Projects$Locations$Domainmappings;
        revisions: Resource$Projects$Locations$Revisions;
        routes: Resource$Projects$Locations$Routes;
        services: Resource$Projects$Locations$Services;
        constructor(context: APIRequestContext);
        /**
         * run.projects.locations.list
         * @desc Lists information about the supported locations for this service.
         * @alias run.projects.locations.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter The standard list filter.
         * @param {string} params.name The resource that owns the locations collection, if applicable.
         * @param {integer=} params.pageSize The standard list page size.
         * @param {string=} params.pageToken The standard list page token.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Projects$Locations$List, options?: MethodOptions): GaxiosPromise<Schema$ListLocationsResponse>;
        list(params: Params$Resource$Projects$Locations$List, options: MethodOptions | BodyResponseCallback<Schema$ListLocationsResponse>, callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
        list(params: Params$Resource$Projects$Locations$List, callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    }
    interface Params$Resource$Projects$Locations$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The standard list filter.
         */
        filter?: string;
        /**
         * The resource that owns the locations collection, if applicable.
         */
        name?: string;
        /**
         * The standard list page size.
         */
        pageSize?: number;
        /**
         * The standard list page token.
         */
        pageToken?: string;
    }
    class Resource$Projects$Locations$Authorizeddomains {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * run.projects.locations.authorizeddomains.list
         * @desc RPC to list authorized domains.
         * @alias run.projects.locations.authorizeddomains.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.pageSize Maximum results to return per page.
         * @param {string=} params.pageToken Continuation token for fetching the next page of results.
         * @param {string} params.parent Name of the parent Application resource. Example: `apps/myapp`.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Projects$Locations$Authorizeddomains$List, options?: MethodOptions): GaxiosPromise<Schema$ListAuthorizedDomainsResponse>;
        list(params: Params$Resource$Projects$Locations$Authorizeddomains$List, options: MethodOptions | BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>, callback: BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Authorizeddomains$List, callback: BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>): void;
    }
    interface Params$Resource$Projects$Locations$Authorizeddomains$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Maximum results to return per page.
         */
        pageSize?: number;
        /**
         * Continuation token for fetching the next page of results.
         */
        pageToken?: string;
        /**
         * Name of the parent Application resource. Example: `apps/myapp`.
         */
        parent?: string;
    }
    class Resource$Projects$Locations$Configurations {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * run.projects.locations.configurations.get
         * @desc Rpc to get information about a configuration.
         * @alias run.projects.locations.configurations.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the configuration being retrieved. If needed, replace {namespace_id} with the project ID.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Projects$Locations$Configurations$Get, options?: MethodOptions): GaxiosPromise<Schema$Configuration>;
        get(params: Params$Resource$Projects$Locations$Configurations$Get, options: MethodOptions | BodyResponseCallback<Schema$Configuration>, callback: BodyResponseCallback<Schema$Configuration>): void;
        get(params: Params$Resource$Projects$Locations$Configurations$Get, callback: BodyResponseCallback<Schema$Configuration>): void;
        get(callback: BodyResponseCallback<Schema$Configuration>): void;
        /**
         * run.projects.locations.configurations.list
         * @desc Rpc to list configurations.
         * @alias run.projects.locations.configurations.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.continue Optional encoded string to continue paging.
         * @param {string=} params.fieldSelector Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
         * @param {boolean=} params.includeUninitialized Not currently used by Cloud Run.
         * @param {string=} params.labelSelector Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
         * @param {integer=} params.limit The maximum number of records that should be returned.
         * @param {string} params.parent The project ID or project number from which the configurations should be listed.
         * @param {string=} params.resourceVersion The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
         * @param {boolean=} params.watch Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Projects$Locations$Configurations$List, options?: MethodOptions): GaxiosPromise<Schema$ListConfigurationsResponse>;
        list(params: Params$Resource$Projects$Locations$Configurations$List, options: MethodOptions | BodyResponseCallback<Schema$ListConfigurationsResponse>, callback: BodyResponseCallback<Schema$ListConfigurationsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Configurations$List, callback: BodyResponseCallback<Schema$ListConfigurationsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListConfigurationsResponse>): void;
    }
    interface Params$Resource$Projects$Locations$Configurations$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the configuration being retrieved. If needed, replace
         * {namespace_id} with the project ID.
         */
        name?: string;
    }
    interface Params$Resource$Projects$Locations$Configurations$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Optional encoded string to continue paging.
         */
        continue?: string;
        /**
         * Allows to filter resources based on a specific value for a field name.
         * Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not
         * currently used by Cloud Run.
         */
        fieldSelector?: string;
        /**
         * Not currently used by Cloud Run.
         */
        includeUninitialized?: boolean;
        /**
         * Allows to filter resources based on a label. Supported operations are =,
         * !=, exists, in, and notIn.
         */
        labelSelector?: string;
        /**
         * The maximum number of records that should be returned.
         */
        limit?: number;
        /**
         * The project ID or project number from which the configurations should be
         * listed.
         */
        parent?: string;
        /**
         * The baseline resource version from which the list or watch operation
         * should start. Not currently used by Cloud Run.
         */
        resourceVersion?: string;
        /**
         * Flag that indicates that the client expects to watch this resource as
         * well. Not currently used by Cloud Run.
         */
        watch?: boolean;
    }
    class Resource$Projects$Locations$Domainmappings {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * run.projects.locations.domainmappings.create
         * @desc Creates a new domain mapping.
         * @alias run.projects.locations.domainmappings.create
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent The project ID or project number in which this domain mapping should be created.
         * @param {().DomainMapping} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create(params?: Params$Resource$Projects$Locations$Domainmappings$Create, options?: MethodOptions): GaxiosPromise<Schema$DomainMapping>;
        create(params: Params$Resource$Projects$Locations$Domainmappings$Create, options: MethodOptions | BodyResponseCallback<Schema$DomainMapping>, callback: BodyResponseCallback<Schema$DomainMapping>): void;
        create(params: Params$Resource$Projects$Locations$Domainmappings$Create, callback: BodyResponseCallback<Schema$DomainMapping>): void;
        create(callback: BodyResponseCallback<Schema$DomainMapping>): void;
        /**
         * run.projects.locations.domainmappings.delete
         * @desc Rpc to delete a domain mapping.
         * @alias run.projects.locations.domainmappings.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.apiVersion Cloud Run currently ignores this parameter.
         * @param {string=} params.kind Cloud Run currently ignores this parameter.
         * @param {string} params.name The name of the domain mapping being deleted. If needed, replace {namespace_id} with the project ID.
         * @param {boolean=} params.orphanDependents Deprecated. Specifies the cascade behavior on delete. Cloud Run only supports cascading behavior, so this must be false. This attribute is deprecated, and is now replaced with PropagationPolicy See https://github.com/kubernetes/kubernetes/issues/46659 for more info.
         * @param {string=} params.propagationPolicy Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Projects$Locations$Domainmappings$Delete, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Projects$Locations$Domainmappings$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Projects$Locations$Domainmappings$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * run.projects.locations.domainmappings.get
         * @desc Rpc to get information about a domain mapping.
         * @alias run.projects.locations.domainmappings.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the domain mapping being retrieved. If needed, replace {namespace_id} with the project ID.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Projects$Locations$Domainmappings$Get, options?: MethodOptions): GaxiosPromise<Schema$DomainMapping>;
        get(params: Params$Resource$Projects$Locations$Domainmappings$Get, options: MethodOptions | BodyResponseCallback<Schema$DomainMapping>, callback: BodyResponseCallback<Schema$DomainMapping>): void;
        get(params: Params$Resource$Projects$Locations$Domainmappings$Get, callback: BodyResponseCallback<Schema$DomainMapping>): void;
        get(callback: BodyResponseCallback<Schema$DomainMapping>): void;
        /**
         * run.projects.locations.domainmappings.list
         * @desc Rpc to list domain mappings.
         * @alias run.projects.locations.domainmappings.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.continue Optional encoded string to continue paging.
         * @param {string=} params.fieldSelector Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
         * @param {boolean=} params.includeUninitialized Not currently used by Cloud Run.
         * @param {string=} params.labelSelector Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
         * @param {integer=} params.limit The maximum number of records that should be returned.
         * @param {string} params.parent The project ID or project number from which the domain mappings should be listed.
         * @param {string=} params.resourceVersion The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
         * @param {boolean=} params.watch Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Projects$Locations$Domainmappings$List, options?: MethodOptions): GaxiosPromise<Schema$ListDomainMappingsResponse>;
        list(params: Params$Resource$Projects$Locations$Domainmappings$List, options: MethodOptions | BodyResponseCallback<Schema$ListDomainMappingsResponse>, callback: BodyResponseCallback<Schema$ListDomainMappingsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Domainmappings$List, callback: BodyResponseCallback<Schema$ListDomainMappingsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListDomainMappingsResponse>): void;
    }
    interface Params$Resource$Projects$Locations$Domainmappings$Create extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The project ID or project number in which this domain mapping should be
         * created.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$DomainMapping;
    }
    interface Params$Resource$Projects$Locations$Domainmappings$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Cloud Run currently ignores this parameter.
         */
        apiVersion?: string;
        /**
         * Cloud Run currently ignores this parameter.
         */
        kind?: string;
        /**
         * The name of the domain mapping being deleted. If needed, replace
         * {namespace_id} with the project ID.
         */
        name?: string;
        /**
         * Deprecated. Specifies the cascade behavior on delete. Cloud Run only
         * supports cascading behavior, so this must be false. This attribute is
         * deprecated, and is now replaced with PropagationPolicy See
         * https://github.com/kubernetes/kubernetes/issues/46659 for more info.
         */
        orphanDependents?: boolean;
        /**
         * Specifies the propagation policy of delete. Cloud Run currently ignores
         * this setting, and deletes in the background. Please see
         * kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for
         * more information.
         */
        propagationPolicy?: string;
    }
    interface Params$Resource$Projects$Locations$Domainmappings$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the domain mapping being retrieved. If needed, replace
         * {namespace_id} with the project ID.
         */
        name?: string;
    }
    interface Params$Resource$Projects$Locations$Domainmappings$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Optional encoded string to continue paging.
         */
        continue?: string;
        /**
         * Allows to filter resources based on a specific value for a field name.
         * Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not
         * currently used by Cloud Run.
         */
        fieldSelector?: string;
        /**
         * Not currently used by Cloud Run.
         */
        includeUninitialized?: boolean;
        /**
         * Allows to filter resources based on a label. Supported operations are =,
         * !=, exists, in, and notIn.
         */
        labelSelector?: string;
        /**
         * The maximum number of records that should be returned.
         */
        limit?: number;
        /**
         * The project ID or project number from which the domain mappings should be
         * listed.
         */
        parent?: string;
        /**
         * The baseline resource version from which the list or watch operation
         * should start. Not currently used by Cloud Run.
         */
        resourceVersion?: string;
        /**
         * Flag that indicates that the client expects to watch this resource as
         * well. Not currently used by Cloud Run.
         */
        watch?: boolean;
    }
    class Resource$Projects$Locations$Revisions {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * run.projects.locations.revisions.delete
         * @desc Rpc to delete a revision.
         * @alias run.projects.locations.revisions.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.apiVersion Cloud Run currently ignores this parameter.
         * @param {string=} params.kind Cloud Run currently ignores this parameter.
         * @param {string} params.name The name of the revision being deleted. If needed, replace {namespace_id} with the project ID.
         * @param {boolean=} params.orphanDependents Deprecated. Specifies the cascade behavior on delete. Cloud Run only supports cascading behavior, so this must be false. This attribute is deprecated, and is now replaced with PropagationPolicy See https://github.com/kubernetes/kubernetes/issues/46659 for more info.
         * @param {string=} params.propagationPolicy Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Projects$Locations$Revisions$Delete, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Projects$Locations$Revisions$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Projects$Locations$Revisions$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * run.projects.locations.revisions.get
         * @desc Rpc to get information about a revision.
         * @alias run.projects.locations.revisions.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the revision being retrieved. If needed, replace {namespace_id} with the project ID.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Projects$Locations$Revisions$Get, options?: MethodOptions): GaxiosPromise<Schema$Revision>;
        get(params: Params$Resource$Projects$Locations$Revisions$Get, options: MethodOptions | BodyResponseCallback<Schema$Revision>, callback: BodyResponseCallback<Schema$Revision>): void;
        get(params: Params$Resource$Projects$Locations$Revisions$Get, callback: BodyResponseCallback<Schema$Revision>): void;
        get(callback: BodyResponseCallback<Schema$Revision>): void;
        /**
         * run.projects.locations.revisions.list
         * @desc Rpc to list revisions.
         * @alias run.projects.locations.revisions.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.continue Optional encoded string to continue paging.
         * @param {string=} params.fieldSelector Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
         * @param {boolean=} params.includeUninitialized Not currently used by Cloud Run.
         * @param {string=} params.labelSelector Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
         * @param {integer=} params.limit The maximum number of records that should be returned.
         * @param {string} params.parent The project ID or project number from which the revisions should be listed.
         * @param {string=} params.resourceVersion The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
         * @param {boolean=} params.watch Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Projects$Locations$Revisions$List, options?: MethodOptions): GaxiosPromise<Schema$ListRevisionsResponse>;
        list(params: Params$Resource$Projects$Locations$Revisions$List, options: MethodOptions | BodyResponseCallback<Schema$ListRevisionsResponse>, callback: BodyResponseCallback<Schema$ListRevisionsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Revisions$List, callback: BodyResponseCallback<Schema$ListRevisionsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListRevisionsResponse>): void;
    }
    interface Params$Resource$Projects$Locations$Revisions$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Cloud Run currently ignores this parameter.
         */
        apiVersion?: string;
        /**
         * Cloud Run currently ignores this parameter.
         */
        kind?: string;
        /**
         * The name of the revision being deleted. If needed, replace {namespace_id}
         * with the project ID.
         */
        name?: string;
        /**
         * Deprecated. Specifies the cascade behavior on delete. Cloud Run only
         * supports cascading behavior, so this must be false. This attribute is
         * deprecated, and is now replaced with PropagationPolicy See
         * https://github.com/kubernetes/kubernetes/issues/46659 for more info.
         */
        orphanDependents?: boolean;
        /**
         * Specifies the propagation policy of delete. Cloud Run currently ignores
         * this setting, and deletes in the background. Please see
         * kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for
         * more information.
         */
        propagationPolicy?: string;
    }
    interface Params$Resource$Projects$Locations$Revisions$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the revision being retrieved. If needed, replace
         * {namespace_id} with the project ID.
         */
        name?: string;
    }
    interface Params$Resource$Projects$Locations$Revisions$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Optional encoded string to continue paging.
         */
        continue?: string;
        /**
         * Allows to filter resources based on a specific value for a field name.
         * Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not
         * currently used by Cloud Run.
         */
        fieldSelector?: string;
        /**
         * Not currently used by Cloud Run.
         */
        includeUninitialized?: boolean;
        /**
         * Allows to filter resources based on a label. Supported operations are =,
         * !=, exists, in, and notIn.
         */
        labelSelector?: string;
        /**
         * The maximum number of records that should be returned.
         */
        limit?: number;
        /**
         * The project ID or project number from which the revisions should be
         * listed.
         */
        parent?: string;
        /**
         * The baseline resource version from which the list or watch operation
         * should start. Not currently used by Cloud Run.
         */
        resourceVersion?: string;
        /**
         * Flag that indicates that the client expects to watch this resource as
         * well. Not currently used by Cloud Run.
         */
        watch?: boolean;
    }
    class Resource$Projects$Locations$Routes {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * run.projects.locations.routes.get
         * @desc Rpc to get information about a route.
         * @alias run.projects.locations.routes.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the route being retrieved. If needed, replace {namespace_id} with the project ID.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Projects$Locations$Routes$Get, options?: MethodOptions): GaxiosPromise<Schema$Route>;
        get(params: Params$Resource$Projects$Locations$Routes$Get, options: MethodOptions | BodyResponseCallback<Schema$Route>, callback: BodyResponseCallback<Schema$Route>): void;
        get(params: Params$Resource$Projects$Locations$Routes$Get, callback: BodyResponseCallback<Schema$Route>): void;
        get(callback: BodyResponseCallback<Schema$Route>): void;
        /**
         * run.projects.locations.routes.list
         * @desc Rpc to list routes.
         * @alias run.projects.locations.routes.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.continue Optional encoded string to continue paging.
         * @param {string=} params.fieldSelector Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
         * @param {boolean=} params.includeUninitialized Not currently used by Cloud Run.
         * @param {string=} params.labelSelector Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
         * @param {integer=} params.limit The maximum number of records that should be returned.
         * @param {string} params.parent The project ID or project number from which the routes should be listed.
         * @param {string=} params.resourceVersion The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
         * @param {boolean=} params.watch Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Projects$Locations$Routes$List, options?: MethodOptions): GaxiosPromise<Schema$ListRoutesResponse>;
        list(params: Params$Resource$Projects$Locations$Routes$List, options: MethodOptions | BodyResponseCallback<Schema$ListRoutesResponse>, callback: BodyResponseCallback<Schema$ListRoutesResponse>): void;
        list(params: Params$Resource$Projects$Locations$Routes$List, callback: BodyResponseCallback<Schema$ListRoutesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListRoutesResponse>): void;
    }
    interface Params$Resource$Projects$Locations$Routes$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the route being retrieved. If needed, replace {namespace_id}
         * with the project ID.
         */
        name?: string;
    }
    interface Params$Resource$Projects$Locations$Routes$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Optional encoded string to continue paging.
         */
        continue?: string;
        /**
         * Allows to filter resources based on a specific value for a field name.
         * Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not
         * currently used by Cloud Run.
         */
        fieldSelector?: string;
        /**
         * Not currently used by Cloud Run.
         */
        includeUninitialized?: boolean;
        /**
         * Allows to filter resources based on a label. Supported operations are =,
         * !=, exists, in, and notIn.
         */
        labelSelector?: string;
        /**
         * The maximum number of records that should be returned.
         */
        limit?: number;
        /**
         * The project ID or project number from which the routes should be listed.
         */
        parent?: string;
        /**
         * The baseline resource version from which the list or watch operation
         * should start. Not currently used by Cloud Run.
         */
        resourceVersion?: string;
        /**
         * Flag that indicates that the client expects to watch this resource as
         * well. Not currently used by Cloud Run.
         */
        watch?: boolean;
    }
    class Resource$Projects$Locations$Services {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * run.projects.locations.services.create
         * @desc Rpc to create a service.
         * @alias run.projects.locations.services.create
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent The project ID or project number in which this service should be created.
         * @param {().Service} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create(params?: Params$Resource$Projects$Locations$Services$Create, options?: MethodOptions): GaxiosPromise<Schema$Service>;
        create(params: Params$Resource$Projects$Locations$Services$Create, options: MethodOptions | BodyResponseCallback<Schema$Service>, callback: BodyResponseCallback<Schema$Service>): void;
        create(params: Params$Resource$Projects$Locations$Services$Create, callback: BodyResponseCallback<Schema$Service>): void;
        create(callback: BodyResponseCallback<Schema$Service>): void;
        /**
         * run.projects.locations.services.delete
         * @desc Rpc to delete a service. This will cause the Service to stop
         * serving traffic and will delete the child entities like Routes,
         * Configurations and Revisions.
         * @alias run.projects.locations.services.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.apiVersion Cloud Run currently ignores this parameter.
         * @param {string=} params.kind Cloud Run currently ignores this parameter.
         * @param {string} params.name The name of the service being deleted. If needed, replace {namespace_id} with the project ID.
         * @param {boolean=} params.orphanDependents Deprecated. Specifies the cascade behavior on delete. Cloud Run only supports cascading behavior, so this must be false. This attribute is deprecated, and is now replaced with PropagationPolicy See https://github.com/kubernetes/kubernetes/issues/46659 for more info.
         * @param {string=} params.propagationPolicy Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Projects$Locations$Services$Delete, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Projects$Locations$Services$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Projects$Locations$Services$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * run.projects.locations.services.get
         * @desc Rpc to get information about a service.
         * @alias run.projects.locations.services.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the service being retrieved. If needed, replace {namespace_id} with the project ID.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Projects$Locations$Services$Get, options?: MethodOptions): GaxiosPromise<Schema$Service>;
        get(params: Params$Resource$Projects$Locations$Services$Get, options: MethodOptions | BodyResponseCallback<Schema$Service>, callback: BodyResponseCallback<Schema$Service>): void;
        get(params: Params$Resource$Projects$Locations$Services$Get, callback: BodyResponseCallback<Schema$Service>): void;
        get(callback: BodyResponseCallback<Schema$Service>): void;
        /**
         * run.projects.locations.services.getIamPolicy
         * @desc Get the IAM Access Control policy currently in effect for the given
         * Cloud Run service. This result does not include any inherited policies.
         * @alias run.projects.locations.services.getIamPolicy
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getIamPolicy(params?: Params$Resource$Projects$Locations$Services$Getiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        getIamPolicy(params: Params$Resource$Projects$Locations$Services$Getiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(params: Params$Resource$Projects$Locations$Services$Getiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * run.projects.locations.services.list
         * @desc Rpc to list services.
         * @alias run.projects.locations.services.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.continue Optional encoded string to continue paging.
         * @param {string=} params.fieldSelector Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
         * @param {boolean=} params.includeUninitialized Not currently used by Cloud Run.
         * @param {string=} params.labelSelector Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
         * @param {integer=} params.limit The maximum number of records that should be returned.
         * @param {string} params.parent The project ID or project number from which the services should be listed.
         * @param {string=} params.resourceVersion The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
         * @param {boolean=} params.watch Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Projects$Locations$Services$List, options?: MethodOptions): GaxiosPromise<Schema$ListServicesResponse>;
        list(params: Params$Resource$Projects$Locations$Services$List, options: MethodOptions | BodyResponseCallback<Schema$ListServicesResponse>, callback: BodyResponseCallback<Schema$ListServicesResponse>): void;
        list(params: Params$Resource$Projects$Locations$Services$List, callback: BodyResponseCallback<Schema$ListServicesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListServicesResponse>): void;
        /**
         * run.projects.locations.services.replaceService
         * @desc Rpc to replace a service.  Only the spec and metadata labels and
         * annotations are modifiable. After the Update request, Cloud Run will work
         * to make the 'status' match the requested 'spec'.  May provide
         * metadata.resourceVersion to enforce update from last read for optimistic
         * concurrency control.
         * @alias run.projects.locations.services.replaceService
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the service being replaced. If needed, replace {namespace_id} with the project ID.
         * @param {().Service} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        replaceService(params?: Params$Resource$Projects$Locations$Services$Replaceservice, options?: MethodOptions): GaxiosPromise<Schema$Service>;
        replaceService(params: Params$Resource$Projects$Locations$Services$Replaceservice, options: MethodOptions | BodyResponseCallback<Schema$Service>, callback: BodyResponseCallback<Schema$Service>): void;
        replaceService(params: Params$Resource$Projects$Locations$Services$Replaceservice, callback: BodyResponseCallback<Schema$Service>): void;
        replaceService(callback: BodyResponseCallback<Schema$Service>): void;
        /**
         * run.projects.locations.services.setIamPolicy
         * @desc Sets the IAM Access control policy for the specified Service.
         * Overwrites any existing policy.
         * @alias run.projects.locations.services.setIamPolicy
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
         * @param {().SetIamPolicyRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setIamPolicy(params?: Params$Resource$Projects$Locations$Services$Setiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        setIamPolicy(params: Params$Resource$Projects$Locations$Services$Setiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(params: Params$Resource$Projects$Locations$Services$Setiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * run.projects.locations.services.testIamPermissions
         * @desc Returns permissions that a caller has on the specified Project.
         * There are no permissions required for making this API call.
         * @alias run.projects.locations.services.testIamPermissions
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
         * @param {().TestIamPermissionsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        testIamPermissions(params?: Params$Resource$Projects$Locations$Services$Testiampermissions, options?: MethodOptions): GaxiosPromise<Schema$TestIamPermissionsResponse>;
        testIamPermissions(params: Params$Resource$Projects$Locations$Services$Testiampermissions, options: MethodOptions | BodyResponseCallback<Schema$TestIamPermissionsResponse>, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(params: Params$Resource$Projects$Locations$Services$Testiampermissions, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
    }
    interface Params$Resource$Projects$Locations$Services$Create extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The project ID or project number in which this service should be created.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Service;
    }
    interface Params$Resource$Projects$Locations$Services$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Cloud Run currently ignores this parameter.
         */
        apiVersion?: string;
        /**
         * Cloud Run currently ignores this parameter.
         */
        kind?: string;
        /**
         * The name of the service being deleted. If needed, replace {namespace_id}
         * with the project ID.
         */
        name?: string;
        /**
         * Deprecated. Specifies the cascade behavior on delete. Cloud Run only
         * supports cascading behavior, so this must be false. This attribute is
         * deprecated, and is now replaced with PropagationPolicy See
         * https://github.com/kubernetes/kubernetes/issues/46659 for more info.
         */
        orphanDependents?: boolean;
        /**
         * Specifies the propagation policy of delete. Cloud Run currently ignores
         * this setting, and deletes in the background. Please see
         * kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for
         * more information.
         */
        propagationPolicy?: string;
    }
    interface Params$Resource$Projects$Locations$Services$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the service being retrieved. If needed, replace
         * {namespace_id} with the project ID.
         */
        name?: string;
    }
    interface Params$Resource$Projects$Locations$Services$Getiampolicy extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * REQUIRED: The resource for which the policy is being requested. See the
         * operation documentation for the appropriate value for this field.
         */
        resource?: string;
    }
    interface Params$Resource$Projects$Locations$Services$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Optional encoded string to continue paging.
         */
        continue?: string;
        /**
         * Allows to filter resources based on a specific value for a field name.
         * Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not
         * currently used by Cloud Run.
         */
        fieldSelector?: string;
        /**
         * Not currently used by Cloud Run.
         */
        includeUninitialized?: boolean;
        /**
         * Allows to filter resources based on a label. Supported operations are =,
         * !=, exists, in, and notIn.
         */
        labelSelector?: string;
        /**
         * The maximum number of records that should be returned.
         */
        limit?: number;
        /**
         * The project ID or project number from which the services should be
         * listed.
         */
        parent?: string;
        /**
         * The baseline resource version from which the list or watch operation
         * should start. Not currently used by Cloud Run.
         */
        resourceVersion?: string;
        /**
         * Flag that indicates that the client expects to watch this resource as
         * well. Not currently used by Cloud Run.
         */
        watch?: boolean;
    }
    interface Params$Resource$Projects$Locations$Services$Replaceservice extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the service being replaced. If needed, replace {namespace_id}
         * with the project ID.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Service;
    }
    interface Params$Resource$Projects$Locations$Services$Setiampolicy extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * REQUIRED: The resource for which the policy is being specified. See the
         * operation documentation for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SetIamPolicyRequest;
    }
    interface Params$Resource$Projects$Locations$Services$Testiampermissions extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * REQUIRED: The resource for which the policy detail is being requested.
         * See the operation documentation for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$TestIamPermissionsRequest;
    }
}
