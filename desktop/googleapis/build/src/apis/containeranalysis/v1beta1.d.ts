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
export declare namespace containeranalysis_v1beta1 {
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
     * Container Analysis API
     *
     * An implementation of the Grafeas API, which stores, and enables querying
     * and retrieval of critical metadata about all of your software artifacts.
     *
     * @example
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1beta1');
     *
     * @namespace containeranalysis
     * @type {Function}
     * @version v1beta1
     * @variation v1beta1
     * @param {object=} options Options for Containeranalysis
     */
    class Containeranalysis {
        context: APIRequestContext;
        projects: Resource$Projects;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * An alias to a repo revision.
     */
    interface Schema$AliasContext {
        /**
         * The alias kind.
         */
        kind?: string;
        /**
         * The alias name.
         */
        name?: string;
    }
    /**
     * Artifact describes a build product.
     */
    interface Schema$Artifact {
        /**
         * Hash or checksum value of a binary, or Docker Registry 2.0 digest of a
         * container.
         */
        checksum?: string;
        /**
         * Artifact ID, if any; for container images, this will be a URL by digest
         * like `gcr.io/projectID/imagename@sha256:123456`.
         */
        id?: string;
        /**
         * Related artifact names. This may be the path to a binary or jar file, or
         * in the case of a container build, the name used to push the container
         * image to Google Container Registry, as presented to `docker push`. Note
         * that a single Artifact ID can have multiple names, for example if two
         * tags are applied to one image.
         */
        names?: string[];
    }
    /**
     * Occurrence that represents a single &quot;attestation&quot;. The
     * authenticity of an attestation can be verified using the attached
     * signature. If the verifier trusts the public key of the signer, then
     * verifying the signature is sufficient to establish trust. In this
     * circumstance, the authority to which this attestation is attached is
     * primarily useful for look-up (how to find this attestation if you already
     * know the authority and artifact to be verified) and intent (which authority
     * was this attestation intended to sign for).
     */
    interface Schema$Attestation {
        genericSignedAttestation?: Schema$GenericSignedAttestation;
        /**
         * A PGP signed attestation.
         */
        pgpSignedAttestation?: Schema$PgpSignedAttestation;
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
     * Note kind that represents a logical attestation &quot;role&quot; or
     * &quot;authority&quot;. For example, an organization might have one
     * `Authority` for &quot;QA&quot; and one for &quot;build&quot;. This note is
     * intended to act strictly as a grouping mechanism for the attached
     * occurrences (Attestations). This grouping mechanism also provides a
     * security boundary, since IAM ACLs gate the ability for a principle to
     * attach an occurrence to a given note. It also provides a single point of
     * lookup to find all attached attestation occurrences, even if they don&#39;t
     * all live in the same project.
     */
    interface Schema$Authority {
        /**
         * Hint hints at the purpose of the attestation authority.
         */
        hint?: Schema$Hint;
    }
    /**
     * Basis describes the base image portion (Note) of the DockerImage
     * relationship. Linked occurrences are derived from this or an equivalent
     * image via:   FROM &lt;Basis.resource_url&gt; Or an equivalent reference,
     * e.g. a tag of the resource_url.
     */
    interface Schema$Basis {
        /**
         * Required. Immutable. The fingerprint of the base image.
         */
        fingerprint?: Schema$Fingerprint;
        /**
         * Required. Immutable. The resource_url for the resource representing the
         * basis of associated occurrence images.
         */
        resourceUrl?: string;
    }
    /**
     * Request to create notes in batch.
     */
    interface Schema$BatchCreateNotesRequest {
        /**
         * The notes to create. Max allowed length is 1000.
         */
        notes?: {
            [key: string]: Schema$Note;
        };
    }
    /**
     * Response for creating notes in batch.
     */
    interface Schema$BatchCreateNotesResponse {
        /**
         * The notes that were created.
         */
        notes?: Schema$Note[];
    }
    /**
     * Request to create occurrences in batch.
     */
    interface Schema$BatchCreateOccurrencesRequest {
        /**
         * The occurrences to create. Max allowed length is 1000.
         */
        occurrences?: Schema$Occurrence[];
    }
    /**
     * Response for creating occurrences in batch.
     */
    interface Schema$BatchCreateOccurrencesResponse {
        /**
         * The occurrences that were created.
         */
        occurrences?: Schema$Occurrence[];
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
     * Note holding the version of the provider&#39;s builder and the signature of
     * the provenance message in the build details occurrence.
     */
    interface Schema$Build {
        /**
         * Required. Immutable. Version of the builder which produced this build.
         */
        builderVersion?: string;
        /**
         * Signature of the build in occurrences pointing to this build note
         * containing build details.
         */
        signature?: Schema$BuildSignature;
    }
    /**
     * Provenance of a build. Contains all information needed to verify the full
     * details about the build from source to completion.
     */
    interface Schema$BuildProvenance {
        /**
         * Version string of the builder at the time this build was executed.
         */
        builderVersion?: string;
        /**
         * Special options applied to this build. This is a catch-all field where
         * build providers can enter any desired additional details.
         */
        buildOptions?: {
            [key: string]: string;
        };
        /**
         * Output of the build.
         */
        builtArtifacts?: Schema$Artifact[];
        /**
         * Commands requested by the build.
         */
        commands?: Schema$Command[];
        /**
         * Time at which the build was created.
         */
        createTime?: string;
        /**
         * E-mail address of the user who initiated this build. Note that this was
         * the user&#39;s e-mail address at the time the build was initiated; this
         * address may not represent the same end-user for all time.
         */
        creator?: string;
        /**
         * Time at which execution of the build was finished.
         */
        endTime?: string;
        /**
         * Required. Unique identifier of the build.
         */
        id?: string;
        /**
         * URI where any logs for this provenance were written.
         */
        logsUri?: string;
        /**
         * ID of the project.
         */
        projectId?: string;
        /**
         * Details of the Source input to the build.
         */
        sourceProvenance?: Schema$Source;
        /**
         * Time at which execution of the build was started.
         */
        startTime?: string;
        /**
         * Trigger identifier if the build was triggered automatically; empty if
         * not.
         */
        triggerId?: string;
    }
    /**
     * Message encapsulating the signature of the verified build.
     */
    interface Schema$BuildSignature {
        /**
         * An ID for the key used to sign. This could be either an ID for the key
         * stored in `public_key` (such as the ID or fingerprint for a PGP key, or
         * the CN for a cert), or a reference to an external key (such as a
         * reference to a key in Cloud Key Management Service).
         */
        keyId?: string;
        /**
         * The type of the key, either stored in `public_key` or referenced in
         * `key_id`.
         */
        keyType?: string;
        /**
         * Public key of the builder which can be used to verify that the related
         * findings are valid and unchanged. If `key_type` is empty, this defaults
         * to PEM encoded public keys.  This field may be empty if `key_id`
         * references an external key.  For Cloud Build based signatures, this is a
         * PEM encoded public key. To verify the Cloud Build signature, place the
         * contents of this field into a file (public.pem). The signature field is
         * base64-decoded into its binary representation in signature.bin, and the
         * provenance bytes from `BuildDetails` are base64-decoded into a binary
         * representation in signed.bin. OpenSSL can then verify the signature:
         * `openssl sha256 -verify public.pem -signature signature.bin signed.bin`
         */
        publicKey?: string;
        /**
         * Required. Signature of the related `BuildProvenance`. In JSON, this is
         * base-64 encoded.
         */
        signature?: string;
    }
    /**
     * A CloudRepoSourceContext denotes a particular revision in a Google Cloud
     * Source Repo.
     */
    interface Schema$CloudRepoSourceContext {
        /**
         * An alias, which may be a branch or tag.
         */
        aliasContext?: Schema$AliasContext;
        /**
         * The ID of the repo.
         */
        repoId?: Schema$RepoId;
        /**
         * A revision ID.
         */
        revisionId?: string;
    }
    /**
     * Command describes a step performed as part of the build pipeline.
     */
    interface Schema$Command {
        /**
         * Command-line arguments used when executing this command.
         */
        args?: string[];
        /**
         * Working directory (relative to project source root) used when running
         * this command.
         */
        dir?: string;
        /**
         * Environment variables set before running this command.
         */
        env?: string[];
        /**
         * Optional unique identifier for this command, used in wait_for to
         * reference this command as a dependency.
         */
        id?: string;
        /**
         * Required. Name of the command, as presented on the command line, or if
         * the command is packaged as a Docker container, as presented to `docker
         * pull`.
         */
        name?: string;
        /**
         * The ID(s) of the command(s) that this command depends on.
         */
        waitFor?: string[];
    }
    /**
     * An artifact that can be deployed in some runtime.
     */
    interface Schema$Deployable {
        /**
         * Required. Resource URI for the artifact being deployed.
         */
        resourceUri?: string[];
    }
    /**
     * The period during which some deployable was active in a runtime.
     */
    interface Schema$Deployment {
        /**
         * Address of the runtime element hosting this deployment.
         */
        address?: string;
        /**
         * Configuration used to create this deployment.
         */
        config?: string;
        /**
         * Required. Beginning of the lifetime of this deployment.
         */
        deployTime?: string;
        /**
         * Platform hosting this deployment.
         */
        platform?: string;
        /**
         * Output only. Resource URI for the artifact being deployed taken from the
         * deployable field with the same name.
         */
        resourceUri?: string[];
        /**
         * End of the lifetime of this deployment.
         */
        undeployTime?: string;
        /**
         * Identity of the user that triggered this deployment.
         */
        userEmail?: string;
    }
    /**
     * Derived describes the derived image portion (Occurrence) of the DockerImage
     * relationship. This image would be produced from a Dockerfile with FROM
     * &lt;DockerImage.Basis in attached Note&gt;.
     */
    interface Schema$Derived {
        /**
         * Output only. This contains the base image URL for the derived image
         * occurrence.
         */
        baseResourceUrl?: string;
        /**
         * Output only. The number of layers by which this image differs from the
         * associated image basis.
         */
        distance?: number;
        /**
         * Required. The fingerprint of the derived image.
         */
        fingerprint?: Schema$Fingerprint;
        /**
         * This contains layer-specific metadata, if populated it has length
         * &quot;distance&quot; and is ordered with [distance] being the layer
         * immediately following the base image and [1] being the final layer.
         */
        layerInfo?: Schema$Layer[];
    }
    /**
     * Identifies all appearances of this vulnerability in the package for a
     * specific distro/location. For example: glibc in
     * cpe:/o:debian:debian_linux:8 for versions 2.1 - 2.2
     */
    interface Schema$Detail {
        /**
         * Required. The CPE URI in [cpe
         * format](https://cpe.mitre.org/specification/) in which the vulnerability
         * manifests. Examples include distro or storage location for vulnerable
         * jar.
         */
        cpeUri?: string;
        /**
         * A vendor-specific description of this note.
         */
        description?: string;
        /**
         * The fix for this specific package version.
         */
        fixedLocation?: Schema$VulnerabilityLocation;
        /**
         * Whether this detail is obsolete. Occurrences are expected not to point to
         * obsolete details.
         */
        isObsolete?: boolean;
        /**
         * The max version of the package in which the vulnerability exists.
         */
        maxAffectedVersion?: Schema$Version;
        /**
         * The min version of the package in which the vulnerability exists.
         */
        minAffectedVersion?: Schema$Version;
        /**
         * Required. The name of the package where the vulnerability was found.
         */
        package?: string;
        /**
         * The type of package; whether native or non native(ruby gems, node.js
         * packages etc).
         */
        packageType?: string;
        /**
         * The severity (eg: distro assigned severity) for this vulnerability.
         */
        severityName?: string;
    }
    /**
     * Details of an attestation occurrence.
     */
    interface Schema$Details {
        /**
         * Required. Attestation for the resource.
         */
        attestation?: Schema$Attestation;
    }
    /**
     * Provides information about the analysis status of a discovered resource.
     */
    interface Schema$Discovered {
        /**
         * The status of discovery for the resource.
         */
        analysisStatus?: string;
        /**
         * When an error is encountered this will contain a LocalizedMessage under
         * details to show to the user. The LocalizedMessage is output only and
         * populated by the API.
         */
        analysisStatusError?: Schema$Status;
        /**
         * Whether the resource is continuously analyzed.
         */
        continuousAnalysis?: string;
        /**
         * The last time continuous analysis was done for this resource. Deprecated,
         * do not use.
         */
        lastAnalysisTime?: string;
    }
    /**
     * A note that indicates a type of analysis a provider would perform. This
     * note exists in a provider&#39;s project. A `Discovery` occurrence is
     * created in a consumer&#39;s project at the start of analysis.
     */
    interface Schema$Discovery {
        /**
         * Required. Immutable. The kind of analysis that is handled by this
         * discovery.
         */
        analysisKind?: string;
    }
    /**
     * This represents a particular channel of distribution for a given package.
     * E.g., Debian&#39;s jessie-backports dpkg mirror.
     */
    interface Schema$Distribution {
        /**
         * The CPU architecture for which packages in this distribution channel were
         * built.
         */
        architecture?: string;
        /**
         * Required. The cpe_uri in [CPE
         * format](https://cpe.mitre.org/specification/) denoting the package
         * manager version distributing a package.
         */
        cpeUri?: string;
        /**
         * The distribution channel-specific description of this package.
         */
        description?: string;
        /**
         * The latest available version of this package in this distribution
         * channel.
         */
        latestVersion?: Schema$Version;
        /**
         * A freeform string denoting the maintainer of this package.
         */
        maintainer?: string;
        /**
         * The distribution channel-specific homepage for this package.
         */
        url?: string;
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
     * Container message for hashes of byte content of files, used in source
     * messages to verify integrity of source input to the build.
     */
    interface Schema$FileHashes {
        /**
         * Required. Collection of file hashes.
         */
        fileHash?: Schema$Hash[];
    }
    /**
     * A set of properties that uniquely identify a given Docker image.
     */
    interface Schema$Fingerprint {
        /**
         * Required. The layer ID of the final layer in the Docker image&#39;s v1
         * representation.
         */
        v1Name?: string;
        /**
         * Required. The ordered list of v2 blobs that represent a given image.
         */
        v2Blob?: string[];
        /**
         * Output only. The name of the image&#39;s v2 blobs computed via: [bottom]
         * := v2_blobbottom := sha256(v2_blob[N] + &quot; &quot; + v2_name[N+1])
         * Only the name of the final blob is kept.
         */
        v2Name?: string;
    }
    /**
     * Per resource and severity counts of fixable and total vulnerabilities.
     */
    interface Schema$FixableTotalByDigest {
        /**
         * The number of fixable vulnerabilities associated with this resource.
         */
        fixableCount?: string;
        /**
         * The affected resource.
         */
        resource?: Schema$Resource;
        /**
         * The severity for this count. SEVERITY_UNSPECIFIED indicates total across
         * all severities.
         */
        severity?: string;
        /**
         * The total number of vulnerabilities associated with this resource.
         */
        totalCount?: string;
    }
    /**
     * An attestation wrapper that uses the Grafeas `Signature` message. This
     * attestation must define the `serialized_payload` that the `signatures`
     * verify and any metadata necessary to interpret that plaintext.  The
     * signatures should always be over the `serialized_payload` bytestring.
     */
    interface Schema$GenericSignedAttestation {
        /**
         * Type (for example schema) of the attestation payload that was signed. The
         * verifier must ensure that the provided type is one that the verifier
         * supports, and that the attestation payload is a valid instantiation of
         * that type (for example by validating a JSON schema).
         */
        contentType?: string;
        /**
         * The serialized payload that is verified by one or more `signatures`. The
         * encoding and semantic meaning of this payload must match what is set in
         * `content_type`.
         */
        serializedPayload?: string;
        /**
         * One or more signatures over `serialized_payload`.  Verifier
         * implementations should consider this attestation message verified if at
         * least one `signature` verifies `serialized_payload`.  See `Signature` in
         * common.proto for more details on signature structure and verification.
         */
        signatures?: Schema$Signature[];
    }
    /**
     * A SourceContext referring to a Gerrit project.
     */
    interface Schema$GerritSourceContext {
        /**
         * An alias, which may be a branch or tag.
         */
        aliasContext?: Schema$AliasContext;
        /**
         * The full project name within the host. Projects may be nested, so
         * &quot;project/subproject&quot; is a valid project name. The &quot;repo
         * name&quot; is the hostURI/project.
         */
        gerritProject?: string;
        /**
         * The URI of a running Gerrit instance.
         */
        hostUri?: string;
        /**
         * A revision (commit) ID.
         */
        revisionId?: string;
    }
    /**
     * Request message for `GetIamPolicy` method.
     */
    interface Schema$GetIamPolicyRequest {
    }
    /**
     * A GitSourceContext denotes a particular revision in a third party Git
     * repository (e.g., GitHub).
     */
    interface Schema$GitSourceContext {
        /**
         * Git commit hash.
         */
        revisionId?: string;
        /**
         * Git repository URL.
         */
        url?: string;
    }
    /**
     * Metadata for all operations used and required for all operations that
     * created by Container Analysis Providers
     */
    interface Schema$GoogleDevtoolsContaineranalysisV1alpha1OperationMetadata {
        /**
         * Output only. The time this operation was created.
         */
        createTime?: string;
        /**
         * Output only. The time that this operation was marked completed or failed.
         */
        endTime?: string;
    }
    /**
     * Details of a build occurrence.
     */
    interface Schema$GrafeasV1beta1BuildDetails {
        /**
         * Required. The actual provenance for the build.
         */
        provenance?: Schema$BuildProvenance;
        /**
         * Serialized JSON representation of the provenance, used in generating the
         * build signature in the corresponding build note. After verifying the
         * signature, `provenance_bytes` can be unmarshalled and compared to the
         * provenance to confirm that it is unchanged. A base64-encoded string
         * representation of the provenance bytes is used for the signature in order
         * to interoperate with openssl which expects this format for signature
         * verification.  The serialized form is captured both to avoid ambiguity in
         * how the provenance is marshalled to json as well to prevent
         * incompatibilities with future changes.
         */
        provenanceBytes?: string;
    }
    /**
     * Details of a deployment occurrence.
     */
    interface Schema$GrafeasV1beta1DeploymentDetails {
        /**
         * Required. Deployment history for the resource.
         */
        deployment?: Schema$Deployment;
    }
    /**
     * Details of a discovery occurrence.
     */
    interface Schema$GrafeasV1beta1DiscoveryDetails {
        /**
         * Required. Analysis status for the discovered resource.
         */
        discovered?: Schema$Discovered;
    }
    /**
     * Details of an image occurrence.
     */
    interface Schema$GrafeasV1beta1ImageDetails {
        /**
         * Required. Immutable. The child image derived from the base image.
         */
        derivedImage?: Schema$Derived;
    }
    /**
     * Details of a package occurrence.
     */
    interface Schema$GrafeasV1beta1PackageDetails {
        /**
         * Required. Where the package was installed.
         */
        installation?: Schema$Installation;
    }
    /**
     * Details of a vulnerability Occurrence.
     */
    interface Schema$GrafeasV1beta1VulnerabilityDetails {
        /**
         * Output only. The CVSS score of this vulnerability. CVSS score is on a
         * scale of 0-10 where 0 indicates low severity and 10 indicates high
         * severity.
         */
        cvssScore?: number;
        /**
         * The distro assigned severity for this vulnerability when it is available,
         * and note provider assigned severity when distro has not yet assigned a
         * severity for this vulnerability.
         */
        effectiveSeverity?: string;
        /**
         * Output only. A detailed description of this vulnerability.
         */
        longDescription?: string;
        /**
         * Required. The set of affected locations and their fixes (if available)
         * within the associated resource.
         */
        packageIssue?: Schema$PackageIssue[];
        /**
         * Output only. URLs related to this vulnerability.
         */
        relatedUrls?: Schema$RelatedUrl[];
        /**
         * Output only. The note provider assigned Severity of the vulnerability.
         */
        severity?: string;
        /**
         * Output only. A one sentence description of this vulnerability.
         */
        shortDescription?: string;
        /**
         * The type of package; whether native or non native(ruby gems, node.js
         * packages etc)
         */
        type?: string;
    }
    /**
     * Container message for hash values.
     */
    interface Schema$Hash {
        /**
         * Required. The type of hash that was performed.
         */
        type?: string;
        /**
         * Required. The hash value.
         */
        value?: string;
    }
    /**
     * This submessage provides human-readable hints about the purpose of the
     * authority. Because the name of a note acts as its resource reference, it is
     * important to disambiguate the canonical name of the Note (which might be a
     * UUID for security purposes) from &quot;readable&quot; names more suitable
     * for debug output. Note that these hints should not be used to look up
     * authorities in security sensitive contexts, such as when looking up
     * attestations to verify.
     */
    interface Schema$Hint {
        /**
         * Required. The human readable name of this attestation authority, for
         * example &quot;qa&quot;.
         */
        humanReadableName?: string;
    }
    /**
     * This represents how a particular software package may be installed on a
     * system.
     */
    interface Schema$Installation {
        /**
         * Required. All of the places within the filesystem versions of this
         * package have been found.
         */
        location?: Schema$Location[];
        /**
         * Output only. The name of the installed package.
         */
        name?: string;
    }
    interface Schema$KnowledgeBase {
        /**
         * The KB name (generally of the form KB[0-9]+ i.e. KB123456).
         */
        name?: string;
        /**
         * A link to the KB in the Windows update catalog -
         * https://www.catalog.update.microsoft.com/
         */
        url?: string;
    }
    /**
     * Layer holds metadata specific to a layer of a Docker image.
     */
    interface Schema$Layer {
        /**
         * The recovered arguments to the Dockerfile directive.
         */
        arguments?: string;
        /**
         * Required. The recovered Dockerfile directive used to construct this
         * layer.
         */
        directive?: string;
    }
    /**
     * Response for listing occurrences for a note.
     */
    interface Schema$ListNoteOccurrencesResponse {
        /**
         * Token to provide to skip to a particular spot in the list.
         */
        nextPageToken?: string;
        /**
         * The occurrences attached to the specified note.
         */
        occurrences?: Schema$Occurrence[];
    }
    /**
     * Response for listing notes.
     */
    interface Schema$ListNotesResponse {
        /**
         * The next pagination token in the list response. It should be used as
         * `page_token` for the following request. An empty value means no more
         * results.
         */
        nextPageToken?: string;
        /**
         * The notes requested.
         */
        notes?: Schema$Note[];
    }
    /**
     * Response for listing occurrences.
     */
    interface Schema$ListOccurrencesResponse {
        /**
         * The next pagination token in the list response. It should be used as
         * `page_token` for the following request. An empty value means no more
         * results.
         */
        nextPageToken?: string;
        /**
         * The occurrences requested.
         */
        occurrences?: Schema$Occurrence[];
    }
    /**
     * Response for listing scan configurations.
     */
    interface Schema$ListScanConfigsResponse {
        /**
         * The next pagination token in the list response. It should be used as
         * `page_token` for the following request. An empty value means no more
         * results.
         */
        nextPageToken?: string;
        /**
         * The scan configurations requested.
         */
        scanConfigs?: Schema$ScanConfig[];
    }
    /**
     * An occurrence of a particular package installation found within a
     * system&#39;s filesystem. E.g., glibc was found in `/var/lib/dpkg/status`.
     */
    interface Schema$Location {
        /**
         * Required. The CPE URI in [CPE
         * format](https://cpe.mitre.org/specification/) denoting the package
         * manager version distributing a package.
         */
        cpeUri?: string;
        /**
         * The path from which we gathered that this package/version is installed.
         */
        path?: string;
        /**
         * The version installed at this location.
         */
        version?: Schema$Version;
    }
    /**
     * A type of analysis that can be done for a resource.
     */
    interface Schema$Note {
        /**
         * A note describing an attestation role.
         */
        attestationAuthority?: Schema$Authority;
        /**
         * A note describing a base image.
         */
        baseImage?: Schema$Basis;
        /**
         * A note describing build provenance for a verifiable build.
         */
        build?: Schema$Build;
        /**
         * Output only. The time this note was created. This field can be used as a
         * filter in list requests.
         */
        createTime?: string;
        /**
         * A note describing something that can be deployed.
         */
        deployable?: Schema$Deployable;
        /**
         * A note describing the initial analysis of a resource.
         */
        discovery?: Schema$Discovery;
        /**
         * Time of expiration for this note. Empty if note does not expire.
         */
        expirationTime?: string;
        /**
         * Output only. The type of analysis. This field can be used as a filter in
         * list requests.
         */
        kind?: string;
        /**
         * A detailed description of this note.
         */
        longDescription?: string;
        /**
         * Output only. The name of the note in the form of
         * `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
         */
        name?: string;
        /**
         * A note describing a package hosted by various package managers.
         */
        package?: Schema$Package;
        /**
         * Other notes related to this note.
         */
        relatedNoteNames?: string[];
        /**
         * URLs associated with this note.
         */
        relatedUrl?: Schema$RelatedUrl[];
        /**
         * A one sentence description of this note.
         */
        shortDescription?: string;
        /**
         * Output only. The time this note was last updated. This field can be used
         * as a filter in list requests.
         */
        updateTime?: string;
        /**
         * A note describing a package vulnerability.
         */
        vulnerability?: Schema$Vulnerability;
    }
    /**
     * An instance of an analysis type that has been found on a resource.
     */
    interface Schema$Occurrence {
        /**
         * Describes an attestation of an artifact.
         */
        attestation?: Schema$Details;
        /**
         * Describes a verifiable build.
         */
        build?: Schema$GrafeasV1beta1BuildDetails;
        /**
         * Output only. The time this occurrence was created.
         */
        createTime?: string;
        /**
         * Describes the deployment of an artifact on a runtime.
         */
        deployment?: Schema$GrafeasV1beta1DeploymentDetails;
        /**
         * Describes how this resource derives from the basis in the associated
         * note.
         */
        derivedImage?: Schema$GrafeasV1beta1ImageDetails;
        /**
         * Describes when a resource was discovered.
         */
        discovered?: Schema$GrafeasV1beta1DiscoveryDetails;
        /**
         * Describes the installation of a package on the linked resource.
         */
        installation?: Schema$GrafeasV1beta1PackageDetails;
        /**
         * Output only. This explicitly denotes which of the occurrence details are
         * specified. This field can be used as a filter in list requests.
         */
        kind?: string;
        /**
         * Output only. The name of the occurrence in the form of
         * `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
         */
        name?: string;
        /**
         * Required. Immutable. The analysis note associated with this occurrence,
         * in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. This field can
         * be used as a filter in list requests.
         */
        noteName?: string;
        /**
         * A description of actions that can be taken to remedy the note.
         */
        remediation?: string;
        /**
         * Required. Immutable. The resource for which the occurrence applies.
         */
        resource?: Schema$Resource;
        /**
         * Output only. The time this occurrence was last updated.
         */
        updateTime?: string;
        /**
         * Describes a security vulnerability.
         */
        vulnerability?: Schema$GrafeasV1beta1VulnerabilityDetails;
    }
    /**
     * This represents a particular package that is distributed over various
     * channels. E.g., glibc (aka libc6) is distributed by many, at various
     * versions.
     */
    interface Schema$Package {
        /**
         * The various channels by which a package is distributed.
         */
        distribution?: Schema$Distribution[];
        /**
         * Required. Immutable. The name of the package.
         */
        name?: string;
    }
    /**
     * This message wraps a location affected by a vulnerability and its
     * associated fix (if one is available).
     */
    interface Schema$PackageIssue {
        /**
         * Required. The location of the vulnerability.
         */
        affectedLocation?: Schema$VulnerabilityLocation;
        /**
         * The location of the available fix for vulnerability.
         */
        fixedLocation?: Schema$VulnerabilityLocation;
        /**
         * Deprecated, use Details.effective_severity instead The severity (e.g.,
         * distro assigned severity) for this vulnerability.
         */
        severityName?: string;
    }
    /**
     * An attestation wrapper with a PGP-compatible signature. This message only
     * supports `ATTACHED` signatures, where the payload that is signed is
     * included alongside the signature itself in the same file.
     */
    interface Schema$PgpSignedAttestation {
        /**
         * Type (for example schema) of the attestation payload that was signed. The
         * verifier must ensure that the provided type is one that the verifier
         * supports, and that the attestation payload is a valid instantiation of
         * that type (for example by validating a JSON schema).
         */
        contentType?: string;
        /**
         * The cryptographic fingerprint of the key used to generate the signature,
         * as output by, e.g. `gpg --list-keys`. This should be the version 4, full
         * 160-bit fingerprint, expressed as a 40 character hexidecimal string. See
         * https://tools.ietf.org/html/rfc4880#section-12.2 for details.
         * Implementations may choose to acknowledge &quot;LONG&quot;,
         * &quot;SHORT&quot;, or other abbreviated key IDs, but only the full
         * fingerprint is guaranteed to work. In gpg, the full fingerprint can be
         * retrieved from the `fpr` field returned when calling --list-keys with
         * --with-colons.  For example: ``` gpg --with-colons --with-fingerprint
         * --force-v4-certs \     --list-keys attester@example.com
         * tru::1:1513631572:0:3:1:5 pub:...&lt;SNIP&gt;...
         * fpr:::::::::24FF6481B76AC91E66A00AC657A93A81EF3AE6FB: ``` Above, the
         * fingerprint is `24FF6481B76AC91E66A00AC657A93A81EF3AE6FB`.
         */
        pgpKeyId?: string;
        /**
         * Required. The raw content of the signature, as output by GNU Privacy
         * Guard (GPG) or equivalent. Since this message only supports attached
         * signatures, the payload that was signed must be attached. While the
         * signature format supported is dependent on the verification
         * implementation, currently only ASCII-armored (`--armor` to gpg),
         * non-clearsigned (`--sign` rather than `--clearsign` to gpg) are
         * supported. Concretely, `gpg --sign --armor --output=signature.gpg
         * payload.json` will create the signature content expected in this field in
         * `signature.gpg` for the `payload.json` attestation payload.
         */
        signature?: string;
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
     * Selects a repo using a Google Cloud Platform project ID (e.g.,
     * winged-cargo-31) and a repo name within that project.
     */
    interface Schema$ProjectRepoId {
        /**
         * The ID of the project.
         */
        projectId?: string;
        /**
         * The name of the repo. Leave empty for the default repo.
         */
        repoName?: string;
    }
    /**
     * Metadata for any related URL information.
     */
    interface Schema$RelatedUrl {
        /**
         * Label to describe usage of the URL.
         */
        label?: string;
        /**
         * Specific URL associated with the resource.
         */
        url?: string;
    }
    /**
     * A unique identifier for a Cloud Repo.
     */
    interface Schema$RepoId {
        /**
         * A combination of a project ID and a repo name.
         */
        projectRepoId?: Schema$ProjectRepoId;
        /**
         * A server-assigned, globally unique identifier.
         */
        uid?: string;
    }
    /**
     * An entity that can have metadata. For example, a Docker image.
     */
    interface Schema$Resource {
        /**
         * The hash of the resource content. For example, the Docker digest.
         */
        contentHash?: Schema$Hash;
        /**
         * The name of the resource. For example, the name of a Docker image -
         * &quot;Debian&quot;.
         */
        name?: string;
        /**
         * Required. The unique URI of the resource. For example,
         * `https://gcr.io/project/image@sha256:foo` for a Docker image.
         */
        uri?: string;
    }
    /**
     * A scan configuration specifies whether Cloud components in a project have a
     * particular type of analysis being run. For example, it can configure
     * whether vulnerability scanning is being done on Docker images or not.
     */
    interface Schema$ScanConfig {
        /**
         * Output only. The time this scan config was created.
         */
        createTime?: string;
        /**
         * Output only. A human-readable description of what the scan configuration
         * does.
         */
        description?: string;
        /**
         * Whether the scan is enabled.
         */
        enabled?: boolean;
        /**
         * Output only. The name of the scan configuration in the form of
         * `projects/[PROJECT_ID]/scanConfigs/[SCAN_CONFIG_ID]`.
         */
        name?: string;
        /**
         * Output only. The time this scan config was last updated.
         */
        updateTime?: string;
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
     * Verifiers (e.g. Kritis implementations) MUST verify signatures with respect
     * to the trust anchors defined in policy (e.g. a Kritis policy). Typically
     * this means that the verifier has been configured with a map from
     * `public_key_id` to public key material (and any required parameters, e.g.
     * signing algorithm).  In particular, verification implementations MUST NOT
     * treat the signature `public_key_id` as anything more than a key lookup
     * hint. The `public_key_id` DOES NOT validate or authenticate a public key;
     * it only provides a mechanism for quickly selecting a public key ALREADY
     * CONFIGURED on the verifier through a trusted channel. Verification
     * implementations MUST reject signatures in any of the following
     * circumstances:   * The `public_key_id` is not recognized by the verifier.
     * * The public key that `public_key_id` refers to does not verify the
     * signature with respect to the payload.  The `signature` contents SHOULD NOT
     * be &quot;attached&quot; (where the payload is included with the serialized
     * `signature` bytes). Verifiers MUST ignore any &quot;attached&quot; payload
     * and only verify signatures with respect to explicitly provided payload
     * (e.g. a `payload` field on the proto message that holds this Signature, or
     * the canonical serialization of the proto message that holds this
     * signature).
     */
    interface Schema$Signature {
        /**
         * The identifier for the public key that verifies this signature.   * The
         * `public_key_id` is required.   * The `public_key_id` MUST be an RFC3986
         * conformant URI.   * When possible, the `public_key_id` SHOULD be an
         * immutable reference,     such as a cryptographic digest.  Examples of
         * valid `public_key_id`s:  OpenPGP V4 public key fingerprint:   *
         * &quot;openpgp4fpr:74FAF3B861BDA0870C7B6DEF607E48D2A663AEEA&quot; See
         * https://www.iana.org/assignments/uri-schemes/prov/openpgp4fpr for more
         * details on this scheme.  RFC6920 digest-named SubjectPublicKeyInfo
         * (digest of the DER serialization):   *
         * &quot;ni:///sha-256;cD9o9Cq6LG3jD0iKXqEi_vdjJGecm_iXkbqVoScViaU&quot;   *
         * &quot;nih:///sha-256;703f68f42aba2c6de30f488a5ea122fef76324679c9bf89791ba95a1271589a5&quot;
         */
        publicKeyId?: string;
        /**
         * The content of the signature, an opaque bytestring. The payload that this
         * signature verifies MUST be unambiguously provided with the Signature
         * during verification. A wrapper message might provide the payload
         * explicitly. Alternatively, a message might have a canonical serialization
         * that can always be unambiguously computed to derive the payload.
         */
        signature?: string;
    }
    /**
     * Source describes the location of the source used for the build.
     */
    interface Schema$Source {
        /**
         * If provided, some of the source code used for the build may be found in
         * these locations, in the case where the source repository had multiple
         * remotes or submodules. This list will not include the context specified
         * in the context field.
         */
        additionalContexts?: Schema$SourceContext[];
        /**
         * If provided, the input binary artifacts for the build came from this
         * location.
         */
        artifactStorageSourceUri?: string;
        /**
         * If provided, the source code used for the build came from this location.
         */
        context?: Schema$SourceContext;
        /**
         * Hash(es) of the build source, which can be used to verify that the
         * original source integrity was maintained in the build.  The keys to this
         * map are file paths used as build source and the values contain the hash
         * values for those files.  If the build source came in a single package
         * such as a gzipped tarfile (.tar.gz), the FileHash will be for the single
         * path to that file.
         */
        fileHashes?: {
            [key: string]: Schema$FileHashes;
        };
    }
    /**
     * A SourceContext is a reference to a tree of files. A SourceContext together
     * with a path point to a unique revision of a single file or directory.
     */
    interface Schema$SourceContext {
        /**
         * A SourceContext referring to a revision in a Google Cloud Source Repo.
         */
        cloudRepo?: Schema$CloudRepoSourceContext;
        /**
         * A SourceContext referring to a Gerrit project.
         */
        gerrit?: Schema$GerritSourceContext;
        /**
         * A SourceContext referring to any third party Git repo (e.g., GitHub).
         */
        git?: Schema$GitSourceContext;
        /**
         * Labels with user defined metadata.
         */
        labels?: {
            [key: string]: string;
        };
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
     * Version contains structured information about the version of a package.
     */
    interface Schema$Version {
        /**
         * Used to correct mistakes in the version numbering scheme.
         */
        epoch?: number;
        /**
         * Required. Distinguishes between sentinel MIN/MAX versions and normal
         * versions.
         */
        kind?: string;
        /**
         * Required only when version kind is NORMAL. The main part of the version
         * name.
         */
        name?: string;
        /**
         * The iteration of the package build from the above version.
         */
        revision?: string;
    }
    /**
     * Vulnerability provides metadata about a security vulnerability in a Note.
     */
    interface Schema$Vulnerability {
        /**
         * The CVSS score for this vulnerability.
         */
        cvssScore?: number;
        /**
         * All information about the package to specifically identify this
         * vulnerability. One entry per (version range and cpe_uri) the package
         * vulnerability has manifested in.
         */
        details?: Schema$Detail[];
        /**
         * Note provider assigned impact of the vulnerability.
         */
        severity?: string;
        /**
         * Windows details get their own format because the information format and
         * model don&#39;t match a normal detail. Specifically Windows updates are
         * done as patches, thus Windows vulnerabilities really are a missing
         * package, rather than a package being at an incorrect version.
         */
        windowsDetails?: Schema$WindowsDetail[];
    }
    /**
     * The location of the vulnerability.
     */
    interface Schema$VulnerabilityLocation {
        /**
         * Required. The CPE URI in [cpe
         * format](https://cpe.mitre.org/specification/) format. Examples include
         * distro or storage location for vulnerable jar.
         */
        cpeUri?: string;
        /**
         * Required. The package being described.
         */
        package?: string;
        /**
         * Required. The version of the package being described.
         */
        version?: Schema$Version;
    }
    /**
     * A summary of how many vulnerability occurrences there are per resource and
     * severity type.
     */
    interface Schema$VulnerabilityOccurrencesSummary {
        /**
         * A listing by resource of the number of fixable and total vulnerabilities.
         */
        counts?: Schema$FixableTotalByDigest[];
    }
    interface Schema$WindowsDetail {
        /**
         * Required. The CPE URI in [cpe
         * format](https://cpe.mitre.org/specification/) in which the vulnerability
         * manifests. Examples include distro or storage location for vulnerable
         * jar.
         */
        cpeUri?: string;
        /**
         * The description of the vulnerability.
         */
        description?: string;
        /**
         * Required. The names of the KBs which have hotfixes to mitigate this
         * vulnerability. Note that there may be multiple hotfixes (and thus
         * multiple KBs) that mitigate a given vulnerability. Currently any listed
         * kb&#39;s presence is considered a fix.
         */
        fixingKbs?: Schema$KnowledgeBase[];
        /**
         * Required. The name of the vulnerability.
         */
        name?: string;
    }
    class Resource$Projects {
        context: APIRequestContext;
        notes: Resource$Projects$Notes;
        occurrences: Resource$Projects$Occurrences;
        scanConfigs: Resource$Projects$Scanconfigs;
        constructor(context: APIRequestContext);
    }
    class Resource$Projects$Notes {
        context: APIRequestContext;
        occurrences: Resource$Projects$Notes$Occurrences;
        constructor(context: APIRequestContext);
        /**
         * containeranalysis.projects.notes.batchCreate
         * @desc Creates new notes in batch.
         * @alias containeranalysis.projects.notes.batchCreate
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent The name of the project in the form of `projects/[PROJECT_ID]`, under which the notes are to be created.
         * @param {().BatchCreateNotesRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        batchCreate(params?: Params$Resource$Projects$Notes$Batchcreate, options?: MethodOptions): GaxiosPromise<Schema$BatchCreateNotesResponse>;
        batchCreate(params: Params$Resource$Projects$Notes$Batchcreate, options: MethodOptions | BodyResponseCallback<Schema$BatchCreateNotesResponse>, callback: BodyResponseCallback<Schema$BatchCreateNotesResponse>): void;
        batchCreate(params: Params$Resource$Projects$Notes$Batchcreate, callback: BodyResponseCallback<Schema$BatchCreateNotesResponse>): void;
        batchCreate(callback: BodyResponseCallback<Schema$BatchCreateNotesResponse>): void;
        /**
         * containeranalysis.projects.notes.create
         * @desc Creates a new note.
         * @alias containeranalysis.projects.notes.create
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.noteId The ID to use for this note.
         * @param {string} params.parent The name of the project in the form of `projects/[PROJECT_ID]`, under which the note is to be created.
         * @param {().Note} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create(params?: Params$Resource$Projects$Notes$Create, options?: MethodOptions): GaxiosPromise<Schema$Note>;
        create(params: Params$Resource$Projects$Notes$Create, options: MethodOptions | BodyResponseCallback<Schema$Note>, callback: BodyResponseCallback<Schema$Note>): void;
        create(params: Params$Resource$Projects$Notes$Create, callback: BodyResponseCallback<Schema$Note>): void;
        create(callback: BodyResponseCallback<Schema$Note>): void;
        /**
         * containeranalysis.projects.notes.delete
         * @desc Deletes the specified note.
         * @alias containeranalysis.projects.notes.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Projects$Notes$Delete, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Projects$Notes$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Projects$Notes$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * containeranalysis.projects.notes.get
         * @desc Gets the specified note.
         * @alias containeranalysis.projects.notes.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Projects$Notes$Get, options?: MethodOptions): GaxiosPromise<Schema$Note>;
        get(params: Params$Resource$Projects$Notes$Get, options: MethodOptions | BodyResponseCallback<Schema$Note>, callback: BodyResponseCallback<Schema$Note>): void;
        get(params: Params$Resource$Projects$Notes$Get, callback: BodyResponseCallback<Schema$Note>): void;
        get(callback: BodyResponseCallback<Schema$Note>): void;
        /**
         * containeranalysis.projects.notes.getIamPolicy
         * @desc Gets the access control policy for a note or an occurrence
         * resource. Requires `containeranalysis.notes.setIamPolicy` or
         * `containeranalysis.occurrences.setIamPolicy` permission if the resource
         * is a note or occurrence, respectively.  The resource takes the format
         * `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and
         * `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
         * @alias containeranalysis.projects.notes.getIamPolicy
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
         * @param {().GetIamPolicyRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getIamPolicy(params?: Params$Resource$Projects$Notes$Getiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        getIamPolicy(params: Params$Resource$Projects$Notes$Getiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(params: Params$Resource$Projects$Notes$Getiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * containeranalysis.projects.notes.list
         * @desc Lists notes for the specified project.
         * @alias containeranalysis.projects.notes.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter The filter expression.
         * @param {integer=} params.pageSize Number of notes to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20.
         * @param {string=} params.pageToken Token to provide to skip to a particular spot in the list.
         * @param {string} params.parent The name of the project to list notes for in the form of `projects/[PROJECT_ID]`.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Projects$Notes$List, options?: MethodOptions): GaxiosPromise<Schema$ListNotesResponse>;
        list(params: Params$Resource$Projects$Notes$List, options: MethodOptions | BodyResponseCallback<Schema$ListNotesResponse>, callback: BodyResponseCallback<Schema$ListNotesResponse>): void;
        list(params: Params$Resource$Projects$Notes$List, callback: BodyResponseCallback<Schema$ListNotesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListNotesResponse>): void;
        /**
         * containeranalysis.projects.notes.patch
         * @desc Updates the specified note.
         * @alias containeranalysis.projects.notes.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
         * @param {string=} params.updateMask The fields to update.
         * @param {().Note} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Projects$Notes$Patch, options?: MethodOptions): GaxiosPromise<Schema$Note>;
        patch(params: Params$Resource$Projects$Notes$Patch, options: MethodOptions | BodyResponseCallback<Schema$Note>, callback: BodyResponseCallback<Schema$Note>): void;
        patch(params: Params$Resource$Projects$Notes$Patch, callback: BodyResponseCallback<Schema$Note>): void;
        patch(callback: BodyResponseCallback<Schema$Note>): void;
        /**
         * containeranalysis.projects.notes.setIamPolicy
         * @desc Sets the access control policy on the specified note or occurrence.
         * Requires `containeranalysis.notes.setIamPolicy` or
         * `containeranalysis.occurrences.setIamPolicy` permission if the resource
         * is a note or an occurrence, respectively.  The resource takes the format
         * `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and
         * `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
         * @alias containeranalysis.projects.notes.setIamPolicy
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
         * @param {().SetIamPolicyRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setIamPolicy(params?: Params$Resource$Projects$Notes$Setiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        setIamPolicy(params: Params$Resource$Projects$Notes$Setiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(params: Params$Resource$Projects$Notes$Setiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * containeranalysis.projects.notes.testIamPermissions
         * @desc Returns the permissions that a caller has on the specified note or
         * occurrence. Requires list permission on the project (for example,
         * `containeranalysis.notes.list`).  The resource takes the format
         * `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and
         * `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
         * @alias containeranalysis.projects.notes.testIamPermissions
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
         * @param {().TestIamPermissionsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        testIamPermissions(params?: Params$Resource$Projects$Notes$Testiampermissions, options?: MethodOptions): GaxiosPromise<Schema$TestIamPermissionsResponse>;
        testIamPermissions(params: Params$Resource$Projects$Notes$Testiampermissions, options: MethodOptions | BodyResponseCallback<Schema$TestIamPermissionsResponse>, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(params: Params$Resource$Projects$Notes$Testiampermissions, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
    }
    interface Params$Resource$Projects$Notes$Batchcreate extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the project in the form of `projects/[PROJECT_ID]`, under
         * which the notes are to be created.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$BatchCreateNotesRequest;
    }
    interface Params$Resource$Projects$Notes$Create extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID to use for this note.
         */
        noteId?: string;
        /**
         * The name of the project in the form of `projects/[PROJECT_ID]`, under
         * which the note is to be created.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Note;
    }
    interface Params$Resource$Projects$Notes$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the note in the form of
         * `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
         */
        name?: string;
    }
    interface Params$Resource$Projects$Notes$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the note in the form of
         * `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
         */
        name?: string;
    }
    interface Params$Resource$Projects$Notes$Getiampolicy extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * REQUIRED: The resource for which the policy is being requested. See the
         * operation documentation for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GetIamPolicyRequest;
    }
    interface Params$Resource$Projects$Notes$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The filter expression.
         */
        filter?: string;
        /**
         * Number of notes to return in the list. Must be positive. Max allowed page
         * size is 1000. If not specified, page size defaults to 20.
         */
        pageSize?: number;
        /**
         * Token to provide to skip to a particular spot in the list.
         */
        pageToken?: string;
        /**
         * The name of the project to list notes for in the form of
         * `projects/[PROJECT_ID]`.
         */
        parent?: string;
    }
    interface Params$Resource$Projects$Notes$Patch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the note in the form of
         * `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
         */
        name?: string;
        /**
         * The fields to update.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Note;
    }
    interface Params$Resource$Projects$Notes$Setiampolicy extends StandardParameters {
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
    interface Params$Resource$Projects$Notes$Testiampermissions extends StandardParameters {
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
    class Resource$Projects$Notes$Occurrences {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * containeranalysis.projects.notes.occurrences.list
         * @desc Lists occurrences referencing the specified note. Provider projects
         * can use this method to get all occurrences across consumer projects
         * referencing the specified note.
         * @alias containeranalysis.projects.notes.occurrences.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter The filter expression.
         * @param {string} params.name The name of the note to list occurrences for in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
         * @param {integer=} params.pageSize Number of occurrences to return in the list.
         * @param {string=} params.pageToken Token to provide to skip to a particular spot in the list.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Projects$Notes$Occurrences$List, options?: MethodOptions): GaxiosPromise<Schema$ListNoteOccurrencesResponse>;
        list(params: Params$Resource$Projects$Notes$Occurrences$List, options: MethodOptions | BodyResponseCallback<Schema$ListNoteOccurrencesResponse>, callback: BodyResponseCallback<Schema$ListNoteOccurrencesResponse>): void;
        list(params: Params$Resource$Projects$Notes$Occurrences$List, callback: BodyResponseCallback<Schema$ListNoteOccurrencesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListNoteOccurrencesResponse>): void;
    }
    interface Params$Resource$Projects$Notes$Occurrences$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The filter expression.
         */
        filter?: string;
        /**
         * The name of the note to list occurrences for in the form of
         * `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
         */
        name?: string;
        /**
         * Number of occurrences to return in the list.
         */
        pageSize?: number;
        /**
         * Token to provide to skip to a particular spot in the list.
         */
        pageToken?: string;
    }
    class Resource$Projects$Occurrences {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * containeranalysis.projects.occurrences.batchCreate
         * @desc Creates new occurrences in batch.
         * @alias containeranalysis.projects.occurrences.batchCreate
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrences are to be created.
         * @param {().BatchCreateOccurrencesRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        batchCreate(params?: Params$Resource$Projects$Occurrences$Batchcreate, options?: MethodOptions): GaxiosPromise<Schema$BatchCreateOccurrencesResponse>;
        batchCreate(params: Params$Resource$Projects$Occurrences$Batchcreate, options: MethodOptions | BodyResponseCallback<Schema$BatchCreateOccurrencesResponse>, callback: BodyResponseCallback<Schema$BatchCreateOccurrencesResponse>): void;
        batchCreate(params: Params$Resource$Projects$Occurrences$Batchcreate, callback: BodyResponseCallback<Schema$BatchCreateOccurrencesResponse>): void;
        batchCreate(callback: BodyResponseCallback<Schema$BatchCreateOccurrencesResponse>): void;
        /**
         * containeranalysis.projects.occurrences.create
         * @desc Creates a new occurrence.
         * @alias containeranalysis.projects.occurrences.create
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrence is to be created.
         * @param {().Occurrence} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create(params?: Params$Resource$Projects$Occurrences$Create, options?: MethodOptions): GaxiosPromise<Schema$Occurrence>;
        create(params: Params$Resource$Projects$Occurrences$Create, options: MethodOptions | BodyResponseCallback<Schema$Occurrence>, callback: BodyResponseCallback<Schema$Occurrence>): void;
        create(params: Params$Resource$Projects$Occurrences$Create, callback: BodyResponseCallback<Schema$Occurrence>): void;
        create(callback: BodyResponseCallback<Schema$Occurrence>): void;
        /**
         * containeranalysis.projects.occurrences.delete
         * @desc Deletes the specified occurrence. For example, use this method to
         * delete an occurrence when the occurrence is no longer applicable for the
         * given resource.
         * @alias containeranalysis.projects.occurrences.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Projects$Occurrences$Delete, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Projects$Occurrences$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Projects$Occurrences$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * containeranalysis.projects.occurrences.get
         * @desc Gets the specified occurrence.
         * @alias containeranalysis.projects.occurrences.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Projects$Occurrences$Get, options?: MethodOptions): GaxiosPromise<Schema$Occurrence>;
        get(params: Params$Resource$Projects$Occurrences$Get, options: MethodOptions | BodyResponseCallback<Schema$Occurrence>, callback: BodyResponseCallback<Schema$Occurrence>): void;
        get(params: Params$Resource$Projects$Occurrences$Get, callback: BodyResponseCallback<Schema$Occurrence>): void;
        get(callback: BodyResponseCallback<Schema$Occurrence>): void;
        /**
         * containeranalysis.projects.occurrences.getIamPolicy
         * @desc Gets the access control policy for a note or an occurrence
         * resource. Requires `containeranalysis.notes.setIamPolicy` or
         * `containeranalysis.occurrences.setIamPolicy` permission if the resource
         * is a note or occurrence, respectively.  The resource takes the format
         * `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and
         * `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
         * @alias containeranalysis.projects.occurrences.getIamPolicy
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
         * @param {().GetIamPolicyRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getIamPolicy(params?: Params$Resource$Projects$Occurrences$Getiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        getIamPolicy(params: Params$Resource$Projects$Occurrences$Getiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(params: Params$Resource$Projects$Occurrences$Getiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * containeranalysis.projects.occurrences.getNotes
         * @desc Gets the note attached to the specified occurrence. Consumer
         * projects can use this method to get a note that belongs to a provider
         * project.
         * @alias containeranalysis.projects.occurrences.getNotes
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getNotes(params?: Params$Resource$Projects$Occurrences$Getnotes, options?: MethodOptions): GaxiosPromise<Schema$Note>;
        getNotes(params: Params$Resource$Projects$Occurrences$Getnotes, options: MethodOptions | BodyResponseCallback<Schema$Note>, callback: BodyResponseCallback<Schema$Note>): void;
        getNotes(params: Params$Resource$Projects$Occurrences$Getnotes, callback: BodyResponseCallback<Schema$Note>): void;
        getNotes(callback: BodyResponseCallback<Schema$Note>): void;
        /**
         * containeranalysis.projects.occurrences.getVulnerabilitySummary
         * @desc Gets a summary of the number and severity of occurrences.
         * @alias containeranalysis.projects.occurrences.getVulnerabilitySummary
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter The filter expression.
         * @param {string} params.parent The name of the project to get a vulnerability summary for in the form of `projects/[PROJECT_ID]`.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getVulnerabilitySummary(params?: Params$Resource$Projects$Occurrences$Getvulnerabilitysummary, options?: MethodOptions): GaxiosPromise<Schema$VulnerabilityOccurrencesSummary>;
        getVulnerabilitySummary(params: Params$Resource$Projects$Occurrences$Getvulnerabilitysummary, options: MethodOptions | BodyResponseCallback<Schema$VulnerabilityOccurrencesSummary>, callback: BodyResponseCallback<Schema$VulnerabilityOccurrencesSummary>): void;
        getVulnerabilitySummary(params: Params$Resource$Projects$Occurrences$Getvulnerabilitysummary, callback: BodyResponseCallback<Schema$VulnerabilityOccurrencesSummary>): void;
        getVulnerabilitySummary(callback: BodyResponseCallback<Schema$VulnerabilityOccurrencesSummary>): void;
        /**
         * containeranalysis.projects.occurrences.list
         * @desc Lists occurrences for the specified project.
         * @alias containeranalysis.projects.occurrences.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter The filter expression.
         * @param {integer=} params.pageSize Number of occurrences to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20.
         * @param {string=} params.pageToken Token to provide to skip to a particular spot in the list.
         * @param {string} params.parent The name of the project to list occurrences for in the form of `projects/[PROJECT_ID]`.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Projects$Occurrences$List, options?: MethodOptions): GaxiosPromise<Schema$ListOccurrencesResponse>;
        list(params: Params$Resource$Projects$Occurrences$List, options: MethodOptions | BodyResponseCallback<Schema$ListOccurrencesResponse>, callback: BodyResponseCallback<Schema$ListOccurrencesResponse>): void;
        list(params: Params$Resource$Projects$Occurrences$List, callback: BodyResponseCallback<Schema$ListOccurrencesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListOccurrencesResponse>): void;
        /**
         * containeranalysis.projects.occurrences.patch
         * @desc Updates the specified occurrence.
         * @alias containeranalysis.projects.occurrences.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
         * @param {string=} params.updateMask The fields to update.
         * @param {().Occurrence} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Projects$Occurrences$Patch, options?: MethodOptions): GaxiosPromise<Schema$Occurrence>;
        patch(params: Params$Resource$Projects$Occurrences$Patch, options: MethodOptions | BodyResponseCallback<Schema$Occurrence>, callback: BodyResponseCallback<Schema$Occurrence>): void;
        patch(params: Params$Resource$Projects$Occurrences$Patch, callback: BodyResponseCallback<Schema$Occurrence>): void;
        patch(callback: BodyResponseCallback<Schema$Occurrence>): void;
        /**
         * containeranalysis.projects.occurrences.setIamPolicy
         * @desc Sets the access control policy on the specified note or occurrence.
         * Requires `containeranalysis.notes.setIamPolicy` or
         * `containeranalysis.occurrences.setIamPolicy` permission if the resource
         * is a note or an occurrence, respectively.  The resource takes the format
         * `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and
         * `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
         * @alias containeranalysis.projects.occurrences.setIamPolicy
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
         * @param {().SetIamPolicyRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setIamPolicy(params?: Params$Resource$Projects$Occurrences$Setiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        setIamPolicy(params: Params$Resource$Projects$Occurrences$Setiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(params: Params$Resource$Projects$Occurrences$Setiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * containeranalysis.projects.occurrences.testIamPermissions
         * @desc Returns the permissions that a caller has on the specified note or
         * occurrence. Requires list permission on the project (for example,
         * `containeranalysis.notes.list`).  The resource takes the format
         * `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and
         * `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
         * @alias containeranalysis.projects.occurrences.testIamPermissions
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
         * @param {().TestIamPermissionsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        testIamPermissions(params?: Params$Resource$Projects$Occurrences$Testiampermissions, options?: MethodOptions): GaxiosPromise<Schema$TestIamPermissionsResponse>;
        testIamPermissions(params: Params$Resource$Projects$Occurrences$Testiampermissions, options: MethodOptions | BodyResponseCallback<Schema$TestIamPermissionsResponse>, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(params: Params$Resource$Projects$Occurrences$Testiampermissions, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
    }
    interface Params$Resource$Projects$Occurrences$Batchcreate extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the project in the form of `projects/[PROJECT_ID]`, under
         * which the occurrences are to be created.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$BatchCreateOccurrencesRequest;
    }
    interface Params$Resource$Projects$Occurrences$Create extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the project in the form of `projects/[PROJECT_ID]`, under
         * which the occurrence is to be created.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Occurrence;
    }
    interface Params$Resource$Projects$Occurrences$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the occurrence in the form of
         * `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
         */
        name?: string;
    }
    interface Params$Resource$Projects$Occurrences$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the occurrence in the form of
         * `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
         */
        name?: string;
    }
    interface Params$Resource$Projects$Occurrences$Getiampolicy extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * REQUIRED: The resource for which the policy is being requested. See the
         * operation documentation for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GetIamPolicyRequest;
    }
    interface Params$Resource$Projects$Occurrences$Getnotes extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the occurrence in the form of
         * `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
         */
        name?: string;
    }
    interface Params$Resource$Projects$Occurrences$Getvulnerabilitysummary extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The filter expression.
         */
        filter?: string;
        /**
         * The name of the project to get a vulnerability summary for in the form of
         * `projects/[PROJECT_ID]`.
         */
        parent?: string;
    }
    interface Params$Resource$Projects$Occurrences$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The filter expression.
         */
        filter?: string;
        /**
         * Number of occurrences to return in the list. Must be positive. Max
         * allowed page size is 1000. If not specified, page size defaults to 20.
         */
        pageSize?: number;
        /**
         * Token to provide to skip to a particular spot in the list.
         */
        pageToken?: string;
        /**
         * The name of the project to list occurrences for in the form of
         * `projects/[PROJECT_ID]`.
         */
        parent?: string;
    }
    interface Params$Resource$Projects$Occurrences$Patch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the occurrence in the form of
         * `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
         */
        name?: string;
        /**
         * The fields to update.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Occurrence;
    }
    interface Params$Resource$Projects$Occurrences$Setiampolicy extends StandardParameters {
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
    interface Params$Resource$Projects$Occurrences$Testiampermissions extends StandardParameters {
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
    class Resource$Projects$Scanconfigs {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * containeranalysis.projects.scanConfigs.get
         * @desc Gets the specified scan configuration.
         * @alias containeranalysis.projects.scanConfigs.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the scan configuration in the form of `projects/[PROJECT_ID]/scanConfigs/[SCAN_CONFIG_ID]`.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Projects$Scanconfigs$Get, options?: MethodOptions): GaxiosPromise<Schema$ScanConfig>;
        get(params: Params$Resource$Projects$Scanconfigs$Get, options: MethodOptions | BodyResponseCallback<Schema$ScanConfig>, callback: BodyResponseCallback<Schema$ScanConfig>): void;
        get(params: Params$Resource$Projects$Scanconfigs$Get, callback: BodyResponseCallback<Schema$ScanConfig>): void;
        get(callback: BodyResponseCallback<Schema$ScanConfig>): void;
        /**
         * containeranalysis.projects.scanConfigs.list
         * @desc Lists scan configurations for the specified project.
         * @alias containeranalysis.projects.scanConfigs.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter The filter expression.
         * @param {integer=} params.pageSize The number of scan configs to return in the list.
         * @param {string=} params.pageToken Token to provide to skip to a particular spot in the list.
         * @param {string} params.parent The name of the project to list scan configurations for in the form of `projects/[PROJECT_ID]`.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Projects$Scanconfigs$List, options?: MethodOptions): GaxiosPromise<Schema$ListScanConfigsResponse>;
        list(params: Params$Resource$Projects$Scanconfigs$List, options: MethodOptions | BodyResponseCallback<Schema$ListScanConfigsResponse>, callback: BodyResponseCallback<Schema$ListScanConfigsResponse>): void;
        list(params: Params$Resource$Projects$Scanconfigs$List, callback: BodyResponseCallback<Schema$ListScanConfigsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListScanConfigsResponse>): void;
        /**
         * containeranalysis.projects.scanConfigs.update
         * @desc Updates the specified scan configuration.
         * @alias containeranalysis.projects.scanConfigs.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the scan configuration in the form of `projects/[PROJECT_ID]/scanConfigs/[SCAN_CONFIG_ID]`.
         * @param {().ScanConfig} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Projects$Scanconfigs$Update, options?: MethodOptions): GaxiosPromise<Schema$ScanConfig>;
        update(params: Params$Resource$Projects$Scanconfigs$Update, options: MethodOptions | BodyResponseCallback<Schema$ScanConfig>, callback: BodyResponseCallback<Schema$ScanConfig>): void;
        update(params: Params$Resource$Projects$Scanconfigs$Update, callback: BodyResponseCallback<Schema$ScanConfig>): void;
        update(callback: BodyResponseCallback<Schema$ScanConfig>): void;
    }
    interface Params$Resource$Projects$Scanconfigs$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the scan configuration in the form of
         * `projects/[PROJECT_ID]/scanConfigs/[SCAN_CONFIG_ID]`.
         */
        name?: string;
    }
    interface Params$Resource$Projects$Scanconfigs$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The filter expression.
         */
        filter?: string;
        /**
         * The number of scan configs to return in the list.
         */
        pageSize?: number;
        /**
         * Token to provide to skip to a particular spot in the list.
         */
        pageToken?: string;
        /**
         * The name of the project to list scan configurations for in the form of
         * `projects/[PROJECT_ID]`.
         */
        parent?: string;
    }
    interface Params$Resource$Projects$Scanconfigs$Update extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the scan configuration in the form of
         * `projects/[PROJECT_ID]/scanConfigs/[SCAN_CONFIG_ID]`.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ScanConfig;
    }
}
