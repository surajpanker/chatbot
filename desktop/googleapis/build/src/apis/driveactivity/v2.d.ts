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
export declare namespace driveactivity_v2 {
    interface Options extends GlobalOptions {
        version: 'v2';
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
     * Drive Activity API
     *
     * Provides a historical view of activity in Google Drive.
     *
     * @example
     * const {google} = require('googleapis');
     * const driveactivity = google.driveactivity('v2');
     *
     * @namespace driveactivity
     * @type {Function}
     * @version v2
     * @variation v2
     * @param {object=} options Options for Driveactivity
     */
    class Driveactivity {
        context: APIRequestContext;
        activity: Resource$Activity;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * Information about the action.
     */
    interface Schema$Action {
        /**
         * The actor responsible for this action (or empty if all actors are
         * responsible).
         */
        actor?: Schema$Actor;
        /**
         * The type and detailed information about the action.
         */
        detail?: Schema$ActionDetail;
        /**
         * The target this action affects (or empty if affecting all targets). This
         * represents the state of the target immediately after this action
         * occurred.
         */
        target?: Schema$Target;
        /**
         * The action occurred over this time range.
         */
        timeRange?: Schema$TimeRange;
        /**
         * The action occurred at this specific time.
         */
        timestamp?: string;
    }
    /**
     * Data describing the type and additional information of an action.
     */
    interface Schema$ActionDetail {
        /**
         * A change about comments was made.
         */
        comment?: Schema$Comment;
        /**
         * An object was created.
         */
        create?: Schema$Create;
        /**
         * An object was deleted.
         */
        delete?: Schema$Delete;
        /**
         * A change happened in data leak prevention status.
         */
        dlpChange?: Schema$DataLeakPreventionChange;
        /**
         * An object was edited.
         */
        edit?: Schema$Edit;
        /**
         * An object was moved.
         */
        move?: Schema$Move;
        /**
         * The permission on an object was changed.
         */
        permissionChange?: Schema$PermissionChange;
        /**
         * An object was referenced in an application outside of Drive/Docs.
         */
        reference?: Schema$ApplicationReference;
        /**
         * An object was renamed.
         */
        rename?: Schema$Rename;
        /**
         * A deleted object was restored.
         */
        restore?: Schema$Restore;
        /**
         * Settings were changed.
         */
        settingsChange?: Schema$SettingsChange;
    }
    /**
     * The actor of a Drive activity.
     */
    interface Schema$Actor {
        /**
         * An administrator.
         */
        administrator?: Schema$Administrator;
        /**
         * An anonymous user.
         */
        anonymous?: Schema$AnonymousUser;
        /**
         * An account acting on behalf of another.
         */
        impersonation?: Schema$Impersonation;
        /**
         * A non-user actor (i.e. system triggered).
         */
        system?: Schema$SystemEvent;
        /**
         * An end user.
         */
        user?: Schema$User;
    }
    /**
     * Empty message representing an administrator.
     */
    interface Schema$Administrator {
    }
    /**
     * Empty message representing an anonymous user or indicating the
     * authenticated user should be anonymized.
     */
    interface Schema$AnonymousUser {
    }
    /**
     * Represents any user (including a logged out user).
     */
    interface Schema$Anyone {
    }
    /**
     * Activity in applications other than Drive.
     */
    interface Schema$ApplicationReference {
        /**
         * The reference type corresponding to this event.
         */
        type?: string;
    }
    /**
     * A comment with an assignment.
     */
    interface Schema$Assignment {
        /**
         * The sub-type of this event.
         */
        subtype?: string;
    }
    /**
     * A change about comments on an object.
     */
    interface Schema$Comment {
        /**
         * A change on an assignment.
         */
        assignment?: Schema$Assignment;
        /**
         * Users who are mentioned in this comment.
         */
        mentionedUsers?: Schema$User[];
        /**
         * A change on a regular posted comment.
         */
        post?: Schema$Post;
        /**
         * A change on a suggestion.
         */
        suggestion?: Schema$Suggestion;
    }
    /**
     * How the individual activities are consolidated. A set of activities may be
     * consolidated into one combined activity if they are related in some way,
     * such as one actor performing the same action on multiple targets, or
     * multiple actors performing the same action on a single target. The strategy
     * defines the rules for which activities are related.
     */
    interface Schema$ConsolidationStrategy {
        /**
         * The individual activities are consolidated using the legacy strategy.
         */
        legacy?: Schema$Legacy;
        /**
         * The individual activities are not consolidated.
         */
        none?: Schema$NoConsolidation;
    }
    /**
     * An object was created by copying an existing object.
     */
    interface Schema$Copy {
        /**
         * The the original object.
         */
        originalObject?: Schema$TargetReference;
    }
    /**
     * An object was created.
     */
    interface Schema$Create {
        /**
         * If present, indicates the object was created by copying an existing Drive
         * object.
         */
        copy?: Schema$Copy;
        /**
         * If present, indicates the object was newly created (e.g. as a blank
         * document), not derived from a Drive object or external object.
         */
        new?: Schema$New;
        /**
         * If present, indicates the object originated externally and was uploaded
         * to Drive.
         */
        upload?: Schema$Upload;
    }
    /**
     * A change in the object&#39;s data leak prevention status.
     */
    interface Schema$DataLeakPreventionChange {
        /**
         * The type of Data Leak Prevention (DLP) change.
         */
        type?: string;
    }
    /**
     * An object was deleted.
     */
    interface Schema$Delete {
        /**
         * The type of delete action taken.
         */
        type?: string;
    }
    /**
     * A user whose account has since been deleted.
     */
    interface Schema$DeletedUser {
    }
    /**
     * Information about a domain.
     */
    interface Schema$Domain {
        /**
         * An opaque string used to identify this domain.
         */
        legacyId?: string;
        /**
         * The name of the domain, e.g. &quot;google.com&quot;.
         */
        name?: string;
    }
    /**
     * A single Drive activity comprising one or more Actions by one or more
     * Actors on one or more Targets. Some Action groupings occur spontaneously,
     * such as moving an item into a shared folder triggering a permission change.
     * Other groupings of related Actions, such as multiple Actors editing one
     * item or moving multiple files into a new folder, are controlled by the
     * selection of a ConsolidationStrategy in the QueryDriveActivityRequest.
     */
    interface Schema$DriveActivity {
        /**
         * Details on all actions in this activity.
         */
        actions?: Schema$Action[];
        /**
         * All actor(s) responsible for the activity.
         */
        actors?: Schema$Actor[];
        /**
         * Key information about the primary action for this activity. This is
         * either representative, or the most important, of all actions in the
         * activity, according to the ConsolidationStrategy in the request.
         */
        primaryActionDetail?: Schema$ActionDetail;
        /**
         * All Drive objects this activity is about (e.g. file, folder, Team Drive).
         * This represents the state of the target immediately after the actions
         * occurred.
         */
        targets?: Schema$Target[];
        /**
         * The activity occurred over this time range.
         */
        timeRange?: Schema$TimeRange;
        /**
         * The activity occurred at this specific time.
         */
        timestamp?: string;
    }
    /**
     * A Drive item, such as a file or folder.
     */
    interface Schema$DriveItem {
        /**
         * The Drive item is a file.
         */
        file?: Schema$File;
        /**
         * The Drive item is a folder.
         */
        folder?: Schema$Folder;
        /**
         * The MIME type of the Drive item.  See
         * https://developers.google.com/drive/v3/web/mime-types.
         */
        mimeType?: string;
        /**
         * The target Drive item. The format is &quot;items/ITEM_ID&quot;.
         */
        name?: string;
        /**
         * Information about the owner of this Drive item.
         */
        owner?: Schema$Owner;
        /**
         * The title of the Drive item.
         */
        title?: string;
    }
    /**
     * A lightweight reference to a Drive item, such as a file or folder.
     */
    interface Schema$DriveItemReference {
        /**
         * The Drive item is a file.
         */
        file?: Schema$File;
        /**
         * The Drive item is a folder.
         */
        folder?: Schema$Folder;
        /**
         * The target Drive item. The format is &quot;items/ITEM_ID&quot;.
         */
        name?: string;
        /**
         * The title of the Drive item.
         */
        title?: string;
    }
    /**
     * An empty message indicating an object was edited.
     */
    interface Schema$Edit {
    }
    /**
     * A Drive item which is a file.
     */
    interface Schema$File {
    }
    /**
     * A comment on a file.
     */
    interface Schema$FileComment {
        /**
         * The comment in the discussion thread. This identifier is an opaque string
         * compatible with the Drive API; see
         * https://developers.google.com/drive/v3/reference/comments/get
         */
        legacyCommentId?: string;
        /**
         * The discussion thread to which the comment was added. This identifier is
         * an opaque string compatible with the Drive API and references the first
         * comment in a discussion; see
         * https://developers.google.com/drive/v3/reference/comments/get
         */
        legacyDiscussionId?: string;
        /**
         * The link to the discussion thread containing this comment, for example,
         * &quot;https://docs.google.com/DOCUMENT_ID/edit?disco=THREAD_ID&quot;.
         */
        linkToDiscussion?: string;
        /**
         * The Drive item containing this comment.
         */
        parent?: Schema$DriveItem;
    }
    /**
     * A Drive item which is a folder.
     */
    interface Schema$Folder {
        /**
         * The type of Drive folder.
         */
        type?: string;
    }
    /**
     * Information about a group.
     */
    interface Schema$Group {
        /**
         * The email address of the group.
         */
        email?: string;
        /**
         * The title of the group.
         */
        title?: string;
    }
    /**
     * Information about an impersonation, where an admin acts on behalf of an end
     * user. Information about the acting admin is not currently available.
     */
    interface Schema$Impersonation {
        /**
         * The impersonated user.
         */
        impersonatedUser?: Schema$User;
    }
    /**
     * A known user.
     */
    interface Schema$KnownUser {
        /**
         * True if this is the user making the request.
         */
        isCurrentUser?: boolean;
        /**
         * The identifier for this user that can be used with the People API to get
         * more information. The format is &quot;people/ACCOUNT_ID&quot;. See
         * https://developers.google.com/people/.
         */
        personName?: string;
    }
    /**
     * A strategy which consolidates activities using the grouping rules from the
     * legacy V1 Activity API. Similar actions occurring within a window of time
     * can be grouped across multiple targets (such as moving a set of files at
     * once) or multiple actors (such as several users editing the same item).
     * Grouping rules for this strategy are specific to each type of action.
     */
    interface Schema$Legacy {
    }
    /**
     * An object was moved.
     */
    interface Schema$Move {
        /**
         * The added parent object(s).
         */
        addedParents?: Schema$TargetReference[];
        /**
         * The removed parent object(s).
         */
        removedParents?: Schema$TargetReference[];
    }
    /**
     * An object was created from scratch.
     */
    interface Schema$New {
    }
    /**
     * A strategy which does no consolidation of individual activities.
     */
    interface Schema$NoConsolidation {
    }
    /**
     * Information about the owner of a Drive item.
     */
    interface Schema$Owner {
        /**
         * The domain of the Drive item owner.
         */
        domain?: Schema$Domain;
        /**
         * The Team Drive that owns the Drive item.
         */
        teamDrive?: Schema$TeamDriveReference;
        /**
         * The user that owns the Drive item.
         */
        user?: Schema$User;
    }
    /**
     * The permission setting of an object.
     */
    interface Schema$Permission {
        /**
         * If true, the item can be discovered (e.g. in the user&#39;s &quot;Shared
         * with me&quot; collection) without needing a link to the item.
         */
        allowDiscovery?: boolean;
        /**
         * If set, this permission applies to anyone, even logged out users.
         */
        anyone?: Schema$Anyone;
        /**
         * The domain to whom this permission applies.
         */
        domain?: Schema$Domain;
        /**
         * The group to whom this permission applies.
         */
        group?: Schema$Group;
        /**
         * Indicates the &lt;a
         * href=&quot;/drive/web/manage-sharing#roles&quot;&gt;Google Drive
         * permissions role&lt;/a&gt;. The role determines a user&#39;s ability to
         * read, write, and comment on items.
         */
        role?: string;
        /**
         * The user to whom this permission applies.
         */
        user?: Schema$User;
    }
    /**
     * A change of the permission setting on an item.
     */
    interface Schema$PermissionChange {
        /**
         * The set of permissions added by this change.
         */
        addedPermissions?: Schema$Permission[];
        /**
         * The set of permissions removed by this change.
         */
        removedPermissions?: Schema$Permission[];
    }
    /**
     * A regular posted comment.
     */
    interface Schema$Post {
        /**
         * The sub-type of this event.
         */
        subtype?: string;
    }
    /**
     * The request message for querying Drive activity.
     */
    interface Schema$QueryDriveActivityRequest {
        /**
         * Return activities for this Drive folder and all children and descendants.
         * The format is &quot;items/ITEM_ID&quot;.
         */
        ancestorName?: string;
        /**
         * Details on how to consolidate related actions that make up the activity.
         * If not set, then related actions will not be consolidated.
         */
        consolidationStrategy?: Schema$ConsolidationStrategy;
        /**
         * The filtering for items returned from this query request. The format of
         * the filter string is a sequence of expressions, joined by an optional
         * &quot;AND&quot;, where each expression is of the form &quot;field
         * operator value&quot;.  Supported fields:    - &lt;tt&gt;time&lt;/tt&gt;:
         * Uses numerical operators on date values either in     terms of
         * milliseconds since Jan 1, 1970 or in RFC 3339 format.     Examples: -
         * &lt;tt&gt;time &gt; 1452409200000 AND time &lt;= 1492812924310&lt;/tt&gt;
         * - &lt;tt&gt;time &gt;= &quot;2016-01-10T01:02:03-05:00&quot;&lt;/tt&gt;
         * - &lt;tt&gt;detail.action_detail_case&lt;/tt&gt;: Uses the
         * &quot;has&quot; operator (:) and     either a singular value or a list of
         * allowed action types enclosed in     parentheses.     Examples:       -
         * &lt;tt&gt;detail.action_detail_case: RENAME&lt;/tt&gt;       -
         * &lt;tt&gt;detail.action_detail_case:(CREATE UPLOAD)&lt;/tt&gt;       -
         * &lt;tt&gt;-detail.action_detail_case:MOVE&lt;/tt&gt;
         */
        filter?: string;
        /**
         * Return activities for this Drive item. The format is
         * &quot;items/ITEM_ID&quot;.
         */
        itemName?: string;
        /**
         * The requested number of activity to return. If not set, a default value
         * will be used.
         */
        pageSize?: number;
        /**
         * The next_page_token value returned from a previous QueryDriveActivity
         * request, if any.
         */
        pageToken?: string;
    }
    /**
     * Response message for querying Drive activity.
     */
    interface Schema$QueryDriveActivityResponse {
        /**
         * List of activity requested.
         */
        activities?: Schema$DriveActivity[];
        /**
         * Token to retrieve the next page of results, or empty if there are no more
         * results in the list.
         */
        nextPageToken?: string;
    }
    /**
     * An object was renamed.
     */
    interface Schema$Rename {
        /**
         * The new title of the drive object.
         */
        newTitle?: string;
        /**
         * The previous title of the drive object.
         */
        oldTitle?: string;
    }
    /**
     * A deleted object was restored.
     */
    interface Schema$Restore {
        /**
         * The type of restore action taken.
         */
        type?: string;
    }
    /**
     * Information about restriction policy changes to a feature.
     */
    interface Schema$RestrictionChange {
        /**
         * The feature which had a change in restriction policy.
         */
        feature?: string;
        /**
         * The restriction in place after the change.
         */
        newRestriction?: string;
    }
    /**
     * Information about settings changes.
     */
    interface Schema$SettingsChange {
        /**
         * The set of changes made to restrictions.
         */
        restrictionChanges?: Schema$RestrictionChange[];
    }
    /**
     * A suggestion.
     */
    interface Schema$Suggestion {
        /**
         * The sub-type of this event.
         */
        subtype?: string;
    }
    /**
     * Event triggered by system operations instead of end users.
     */
    interface Schema$SystemEvent {
        /**
         * The type of the system event that may triggered activity.
         */
        type?: string;
    }
    /**
     * Information about the target of activity.
     */
    interface Schema$Target {
        /**
         * The target is a Drive item.
         */
        driveItem?: Schema$DriveItem;
        /**
         * The target is a comment on a Drive file.
         */
        fileComment?: Schema$FileComment;
        /**
         * The target is a Team Drive.
         */
        teamDrive?: Schema$TeamDrive;
    }
    /**
     * A lightweight reference to the target of activity.
     */
    interface Schema$TargetReference {
        /**
         * The target is a Drive item.
         */
        driveItem?: Schema$DriveItemReference;
        /**
         * The target is a Team Drive.
         */
        teamDrive?: Schema$TeamDriveReference;
    }
    /**
     * Information about a Team Drive.
     */
    interface Schema$TeamDrive {
        /**
         * The resource name of the Team Drive. The format is
         * &quot;teamDrives/TEAM_DRIVE_ID&quot;.
         */
        name?: string;
        /**
         * The root of this Team Drive.
         */
        root?: Schema$DriveItem;
        /**
         * The title of the Team Drive.
         */
        title?: string;
    }
    /**
     * A lightweight reference to a Team Drive.
     */
    interface Schema$TeamDriveReference {
        /**
         * The resource name of the Team Drive. The format is
         * &quot;teamDrives/TEAM_DRIVE_ID&quot;.
         */
        name?: string;
        /**
         * The title of the Team Drive.
         */
        title?: string;
    }
    /**
     * Information about time ranges.
     */
    interface Schema$TimeRange {
        /**
         * The end of the time range.
         */
        endTime?: string;
        /**
         * The start of the time range.
         */
        startTime?: string;
    }
    /**
     * A user about whom nothing is currently known.
     */
    interface Schema$UnknownUser {
    }
    /**
     * An object was uploaded into Drive.
     */
    interface Schema$Upload {
    }
    /**
     * Information about an end user.
     */
    interface Schema$User {
        /**
         * A user whose account has since been deleted.
         */
        deletedUser?: Schema$DeletedUser;
        /**
         * A known user.
         */
        knownUser?: Schema$KnownUser;
        /**
         * A user about whom nothing is currently known.
         */
        unknownUser?: Schema$UnknownUser;
    }
    class Resource$Activity {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * driveactivity.activity.query
         * @desc Query past activity in Google Drive.
         * @alias driveactivity.activity.query
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {().QueryDriveActivityRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        query(params?: Params$Resource$Activity$Query, options?: MethodOptions): GaxiosPromise<Schema$QueryDriveActivityResponse>;
        query(params: Params$Resource$Activity$Query, options: MethodOptions | BodyResponseCallback<Schema$QueryDriveActivityResponse>, callback: BodyResponseCallback<Schema$QueryDriveActivityResponse>): void;
        query(params: Params$Resource$Activity$Query, callback: BodyResponseCallback<Schema$QueryDriveActivityResponse>): void;
        query(callback: BodyResponseCallback<Schema$QueryDriveActivityResponse>): void;
    }
    interface Params$Resource$Activity$Query extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Request body metadata
         */
        requestBody?: Schema$QueryDriveActivityRequest;
    }
}
