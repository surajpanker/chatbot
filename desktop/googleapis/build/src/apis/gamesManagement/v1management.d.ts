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
export declare namespace gamesManagement_v1management {
    interface Options extends GlobalOptions {
        version: 'v1management';
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
     * Google Play Game Services Management API
     *
     * The Management API for Google Play Game Services.
     *
     * @example
     * const {google} = require('googleapis');
     * const gamesManagement = google.gamesManagement('v1management');
     *
     * @namespace gamesManagement
     * @type {Function}
     * @version v1management
     * @variation v1management
     * @param {object=} options Options for Gamesmanagement
     */
    class Gamesmanagement {
        context: APIRequestContext;
        achievements: Resource$Achievements;
        applications: Resource$Applications;
        events: Resource$Events;
        players: Resource$Players;
        quests: Resource$Quests;
        rooms: Resource$Rooms;
        scores: Resource$Scores;
        turnBasedMatches: Resource$Turnbasedmatches;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * This is a JSON template for achievement reset all response.
     */
    interface Schema$AchievementResetAllResponse {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string gamesManagement#achievementResetAllResponse.
         */
        kind?: string;
        /**
         * The achievement reset results.
         */
        results?: Schema$AchievementResetResponse[];
    }
    /**
     * This is a JSON template for multiple achievements reset all request.
     */
    interface Schema$AchievementResetMultipleForAllRequest {
        /**
         * The IDs of achievements to reset.
         */
        achievement_ids?: string[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string gamesManagement#achievementResetMultipleForAllRequest.
         */
        kind?: string;
    }
    /**
     * This is a JSON template for an achievement reset response.
     */
    interface Schema$AchievementResetResponse {
        /**
         * The current state of the achievement. This is the same as the initial
         * state of the achievement. Possible values are:   - &quot;HIDDEN&quot;-
         * Achievement is hidden.  - &quot;REVEALED&quot; - Achievement is revealed.
         * - &quot;UNLOCKED&quot; - Achievement is unlocked.
         */
        currentState?: string;
        /**
         * The ID of an achievement for which player state has been updated.
         */
        definitionId?: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string gamesManagement#achievementResetResponse.
         */
        kind?: string;
        /**
         * Flag to indicate if the requested update actually occurred.
         */
        updateOccurred?: boolean;
    }
    /**
     * This is a JSON template for multiple events reset all request.
     */
    interface Schema$EventsResetMultipleForAllRequest {
        /**
         * The IDs of events to reset.
         */
        event_ids?: string[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string gamesManagement#eventsResetMultipleForAllRequest.
         */
        kind?: string;
    }
    /**
     * This is a JSON template for metadata about a player playing a game with the
     * currently authenticated user.
     */
    interface Schema$GamesPlayedResource {
        /**
         * True if the player was auto-matched with the currently authenticated
         * user.
         */
        autoMatched?: boolean;
        /**
         * The last time the player played the game in milliseconds since the epoch
         * in UTC.
         */
        timeMillis?: string;
    }
    /**
     * This is a JSON template for 1P/3P metadata about the player&#39;s
     * experience.
     */
    interface Schema$GamesPlayerExperienceInfoResource {
        /**
         * The current number of experience points for the player.
         */
        currentExperiencePoints?: string;
        /**
         * The current level of the player.
         */
        currentLevel?: Schema$GamesPlayerLevelResource;
        /**
         * The timestamp when the player was leveled up, in millis since Unix epoch
         * UTC.
         */
        lastLevelUpTimestampMillis?: string;
        /**
         * The next level of the player. If the current level is the maximum level,
         * this should be same as the current level.
         */
        nextLevel?: Schema$GamesPlayerLevelResource;
    }
    /**
     * This is a JSON template for 1P/3P metadata about a user&#39;s level.
     */
    interface Schema$GamesPlayerLevelResource {
        /**
         * The level for the user.
         */
        level?: number;
        /**
         * The maximum experience points for this level.
         */
        maxExperiencePoints?: string;
        /**
         * The minimum experience points for this level.
         */
        minExperiencePoints?: string;
    }
    /**
     * This is a JSON template for the HiddenPlayer resource.
     */
    interface Schema$HiddenPlayer {
        /**
         * The time this player was hidden.
         */
        hiddenTimeMillis?: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string gamesManagement#hiddenPlayer.
         */
        kind?: string;
        /**
         * The player information.
         */
        player?: Schema$Player;
    }
    /**
     * This is a JSON template for a list of hidden players.
     */
    interface Schema$HiddenPlayerList {
        /**
         * The players.
         */
        items?: Schema$HiddenPlayer[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string gamesManagement#hiddenPlayerList.
         */
        kind?: string;
        /**
         * The pagination token for the next page of results.
         */
        nextPageToken?: string;
    }
    /**
     * This is a JSON template for a Player resource.
     */
    interface Schema$Player {
        /**
         * The base URL for the image that represents the player.
         */
        avatarImageUrl?: string;
        /**
         * The url to the landscape mode player banner image.
         */
        bannerUrlLandscape?: string;
        /**
         * The url to the portrait mode player banner image.
         */
        bannerUrlPortrait?: string;
        /**
         * The name to display for the player.
         */
        displayName?: string;
        /**
         * An object to represent Play Game experience information for the player.
         */
        experienceInfo?: Schema$GamesPlayerExperienceInfoResource;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string gamesManagement#player.
         */
        kind?: string;
        /**
         * Details about the last time this player played a multiplayer game with
         * the currently authenticated player. Populated for PLAYED_WITH player
         * collection members.
         */
        lastPlayedWith?: Schema$GamesPlayedResource;
        /**
         * An object representation of the individual components of the player&#39;s
         * name. For some players, these fields may not be present.
         */
        name?: {
            familyName?: string;
            givenName?: string;
        };
        /**
         * The player ID that was used for this player the first time they signed
         * into the game in question. This is only populated for calls to player.get
         * for the requesting player, only if the player ID has subsequently
         * changed, and only to clients that support remapping player IDs.
         */
        originalPlayerId?: string;
        /**
         * The ID of the player.
         */
        playerId?: string;
        /**
         * The player&#39;s profile settings. Controls whether or not the
         * player&#39;s profile is visible to other players.
         */
        profileSettings?: Schema$ProfileSettings;
        /**
         * The player&#39;s title rewarded for their game activities.
         */
        title?: string;
    }
    /**
     * This is a JSON template for a list of leaderboard reset resources.
     */
    interface Schema$PlayerScoreResetAllResponse {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string gamesManagement#playerScoreResetResponse.
         */
        kind?: string;
        /**
         * The leaderboard reset results.
         */
        results?: Schema$PlayerScoreResetResponse[];
    }
    /**
     * This is a JSON template for a list of reset leaderboard entry resources.
     */
    interface Schema$PlayerScoreResetResponse {
        /**
         * The ID of an leaderboard for which player state has been updated.
         */
        definitionId?: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string gamesManagement#playerScoreResetResponse.
         */
        kind?: string;
        /**
         * The time spans of the updated score. Possible values are:   -
         * &quot;ALL_TIME&quot; - The score is an all-time score.  -
         * &quot;WEEKLY&quot; - The score is a weekly score.  - &quot;DAILY&quot; -
         * The score is a daily score.
         */
        resetScoreTimeSpans?: string[];
    }
    /**
     * This is a JSON template for profile settings
     */
    interface Schema$ProfileSettings {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string gamesManagement#profileSettings.
         */
        kind?: string;
        /**
         * The player&#39;s current profile visibility. This field is visible to
         * both 1P and 3P APIs.
         */
        profileVisible?: boolean;
    }
    /**
     * This is a JSON template for multiple quests reset all request.
     */
    interface Schema$QuestsResetMultipleForAllRequest {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string gamesManagement#questsResetMultipleForAllRequest.
         */
        kind?: string;
        /**
         * The IDs of quests to reset.
         */
        quest_ids?: string[];
    }
    /**
     * This is a JSON template for multiple scores reset all request.
     */
    interface Schema$ScoresResetMultipleForAllRequest {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string gamesManagement#scoresResetMultipleForAllRequest.
         */
        kind?: string;
        /**
         * The IDs of leaderboards to reset.
         */
        leaderboard_ids?: string[];
    }
    class Resource$Achievements {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * gamesManagement.achievements.reset
         * @desc Resets the achievement with the given ID for the currently
         * authenticated player. This method is only accessible to whitelisted
         * tester accounts for your application.
         * @alias gamesManagement.achievements.reset
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.achievementId The ID of the achievement used by this method.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        reset(params?: Params$Resource$Achievements$Reset, options?: MethodOptions): GaxiosPromise<Schema$AchievementResetResponse>;
        reset(params: Params$Resource$Achievements$Reset, options: MethodOptions | BodyResponseCallback<Schema$AchievementResetResponse>, callback: BodyResponseCallback<Schema$AchievementResetResponse>): void;
        reset(params: Params$Resource$Achievements$Reset, callback: BodyResponseCallback<Schema$AchievementResetResponse>): void;
        reset(callback: BodyResponseCallback<Schema$AchievementResetResponse>): void;
        /**
         * gamesManagement.achievements.resetAll
         * @desc Resets all achievements for the currently authenticated player for
         * your application. This method is only accessible to whitelisted tester
         * accounts for your application.
         * @alias gamesManagement.achievements.resetAll
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resetAll(params?: Params$Resource$Achievements$Resetall, options?: MethodOptions): GaxiosPromise<Schema$AchievementResetAllResponse>;
        resetAll(params: Params$Resource$Achievements$Resetall, options: MethodOptions | BodyResponseCallback<Schema$AchievementResetAllResponse>, callback: BodyResponseCallback<Schema$AchievementResetAllResponse>): void;
        resetAll(params: Params$Resource$Achievements$Resetall, callback: BodyResponseCallback<Schema$AchievementResetAllResponse>): void;
        resetAll(callback: BodyResponseCallback<Schema$AchievementResetAllResponse>): void;
        /**
         * gamesManagement.achievements.resetAllForAllPlayers
         * @desc Resets all draft achievements for all players. This method is only
         * available to user accounts for your developer console.
         * @alias gamesManagement.achievements.resetAllForAllPlayers
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resetAllForAllPlayers(params?: Params$Resource$Achievements$Resetallforallplayers, options?: MethodOptions): GaxiosPromise<void>;
        resetAllForAllPlayers(params: Params$Resource$Achievements$Resetallforallplayers, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        resetAllForAllPlayers(params: Params$Resource$Achievements$Resetallforallplayers, callback: BodyResponseCallback<void>): void;
        resetAllForAllPlayers(callback: BodyResponseCallback<void>): void;
        /**
         * gamesManagement.achievements.resetForAllPlayers
         * @desc Resets the achievement with the given ID for all players. This
         * method is only available to user accounts for your developer console.
         * Only draft achievements can be reset.
         * @alias gamesManagement.achievements.resetForAllPlayers
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.achievementId The ID of the achievement used by this method.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resetForAllPlayers(params?: Params$Resource$Achievements$Resetforallplayers, options?: MethodOptions): GaxiosPromise<void>;
        resetForAllPlayers(params: Params$Resource$Achievements$Resetforallplayers, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        resetForAllPlayers(params: Params$Resource$Achievements$Resetforallplayers, callback: BodyResponseCallback<void>): void;
        resetForAllPlayers(callback: BodyResponseCallback<void>): void;
        /**
         * gamesManagement.achievements.resetMultipleForAllPlayers
         * @desc Resets achievements with the given IDs for all players. This method
         * is only available to user accounts for your developer console. Only draft
         * achievements may be reset.
         * @alias gamesManagement.achievements.resetMultipleForAllPlayers
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {().AchievementResetMultipleForAllRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resetMultipleForAllPlayers(params?: Params$Resource$Achievements$Resetmultipleforallplayers, options?: MethodOptions): GaxiosPromise<void>;
        resetMultipleForAllPlayers(params: Params$Resource$Achievements$Resetmultipleforallplayers, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        resetMultipleForAllPlayers(params: Params$Resource$Achievements$Resetmultipleforallplayers, callback: BodyResponseCallback<void>): void;
        resetMultipleForAllPlayers(callback: BodyResponseCallback<void>): void;
    }
    interface Params$Resource$Achievements$Reset extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the achievement used by this method.
         */
        achievementId?: string;
    }
    interface Params$Resource$Achievements$Resetall extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
    }
    interface Params$Resource$Achievements$Resetallforallplayers extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
    }
    interface Params$Resource$Achievements$Resetforallplayers extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the achievement used by this method.
         */
        achievementId?: string;
    }
    interface Params$Resource$Achievements$Resetmultipleforallplayers extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Request body metadata
         */
        requestBody?: Schema$AchievementResetMultipleForAllRequest;
    }
    class Resource$Applications {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * gamesManagement.applications.listHidden
         * @desc Get the list of players hidden from the given application. This
         * method is only available to user accounts for your developer console.
         * @alias gamesManagement.applications.listHidden
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.applicationId The application ID from the Google Play developer console.
         * @param {integer=} params.maxResults The maximum number of player resources to return in the response, used for paging. For any response, the actual number of player resources returned may be less than the specified maxResults.
         * @param {string=} params.pageToken The token returned by the previous request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        listHidden(params?: Params$Resource$Applications$Listhidden, options?: MethodOptions): GaxiosPromise<Schema$HiddenPlayerList>;
        listHidden(params: Params$Resource$Applications$Listhidden, options: MethodOptions | BodyResponseCallback<Schema$HiddenPlayerList>, callback: BodyResponseCallback<Schema$HiddenPlayerList>): void;
        listHidden(params: Params$Resource$Applications$Listhidden, callback: BodyResponseCallback<Schema$HiddenPlayerList>): void;
        listHidden(callback: BodyResponseCallback<Schema$HiddenPlayerList>): void;
    }
    interface Params$Resource$Applications$Listhidden extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The application ID from the Google Play developer console.
         */
        applicationId?: string;
        /**
         * The maximum number of player resources to return in the response, used
         * for paging. For any response, the actual number of player resources
         * returned may be less than the specified maxResults.
         */
        maxResults?: number;
        /**
         * The token returned by the previous request.
         */
        pageToken?: string;
    }
    class Resource$Events {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * gamesManagement.events.reset
         * @desc Resets all player progress on the event with the given ID for the
         * currently authenticated player. This method is only accessible to
         * whitelisted tester accounts for your application. All quests for this
         * player that use the event will also be reset.
         * @alias gamesManagement.events.reset
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.eventId The ID of the event.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        reset(params?: Params$Resource$Events$Reset, options?: MethodOptions): GaxiosPromise<void>;
        reset(params: Params$Resource$Events$Reset, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        reset(params: Params$Resource$Events$Reset, callback: BodyResponseCallback<void>): void;
        reset(callback: BodyResponseCallback<void>): void;
        /**
         * gamesManagement.events.resetAll
         * @desc Resets all player progress on all events for the currently
         * authenticated player. This method is only accessible to whitelisted
         * tester accounts for your application. All quests for this player will
         * also be reset.
         * @alias gamesManagement.events.resetAll
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resetAll(params?: Params$Resource$Events$Resetall, options?: MethodOptions): GaxiosPromise<void>;
        resetAll(params: Params$Resource$Events$Resetall, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        resetAll(params: Params$Resource$Events$Resetall, callback: BodyResponseCallback<void>): void;
        resetAll(callback: BodyResponseCallback<void>): void;
        /**
         * gamesManagement.events.resetAllForAllPlayers
         * @desc Resets all draft events for all players. This method is only
         * available to user accounts for your developer console. All quests that
         * use any of these events will also be reset.
         * @alias gamesManagement.events.resetAllForAllPlayers
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resetAllForAllPlayers(params?: Params$Resource$Events$Resetallforallplayers, options?: MethodOptions): GaxiosPromise<void>;
        resetAllForAllPlayers(params: Params$Resource$Events$Resetallforallplayers, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        resetAllForAllPlayers(params: Params$Resource$Events$Resetallforallplayers, callback: BodyResponseCallback<void>): void;
        resetAllForAllPlayers(callback: BodyResponseCallback<void>): void;
        /**
         * gamesManagement.events.resetForAllPlayers
         * @desc Resets the event with the given ID for all players. This method is
         * only available to user accounts for your developer console. Only draft
         * events can be reset. All quests that use the event will also be reset.
         * @alias gamesManagement.events.resetForAllPlayers
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.eventId The ID of the event.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resetForAllPlayers(params?: Params$Resource$Events$Resetforallplayers, options?: MethodOptions): GaxiosPromise<void>;
        resetForAllPlayers(params: Params$Resource$Events$Resetforallplayers, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        resetForAllPlayers(params: Params$Resource$Events$Resetforallplayers, callback: BodyResponseCallback<void>): void;
        resetForAllPlayers(callback: BodyResponseCallback<void>): void;
        /**
         * gamesManagement.events.resetMultipleForAllPlayers
         * @desc Resets events with the given IDs for all players. This method is
         * only available to user accounts for your developer console. Only draft
         * events may be reset. All quests that use any of the events will also be
         * reset.
         * @alias gamesManagement.events.resetMultipleForAllPlayers
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {().EventsResetMultipleForAllRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resetMultipleForAllPlayers(params?: Params$Resource$Events$Resetmultipleforallplayers, options?: MethodOptions): GaxiosPromise<void>;
        resetMultipleForAllPlayers(params: Params$Resource$Events$Resetmultipleforallplayers, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        resetMultipleForAllPlayers(params: Params$Resource$Events$Resetmultipleforallplayers, callback: BodyResponseCallback<void>): void;
        resetMultipleForAllPlayers(callback: BodyResponseCallback<void>): void;
    }
    interface Params$Resource$Events$Reset extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the event.
         */
        eventId?: string;
    }
    interface Params$Resource$Events$Resetall extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
    }
    interface Params$Resource$Events$Resetallforallplayers extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
    }
    interface Params$Resource$Events$Resetforallplayers extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the event.
         */
        eventId?: string;
    }
    interface Params$Resource$Events$Resetmultipleforallplayers extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Request body metadata
         */
        requestBody?: Schema$EventsResetMultipleForAllRequest;
    }
    class Resource$Players {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * gamesManagement.players.hide
         * @desc Hide the given player's leaderboard scores from the given
         * application. This method is only available to user accounts for your
         * developer console.
         * @alias gamesManagement.players.hide
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.applicationId The application ID from the Google Play developer console.
         * @param {string} params.playerId A player ID. A value of me may be used in place of the authenticated player's ID.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        hide(params?: Params$Resource$Players$Hide, options?: MethodOptions): GaxiosPromise<void>;
        hide(params: Params$Resource$Players$Hide, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        hide(params: Params$Resource$Players$Hide, callback: BodyResponseCallback<void>): void;
        hide(callback: BodyResponseCallback<void>): void;
        /**
         * gamesManagement.players.unhide
         * @desc Unhide the given player's leaderboard scores from the given
         * application. This method is only available to user accounts for your
         * developer console.
         * @alias gamesManagement.players.unhide
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.applicationId The application ID from the Google Play developer console.
         * @param {string} params.playerId A player ID. A value of me may be used in place of the authenticated player's ID.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        unhide(params?: Params$Resource$Players$Unhide, options?: MethodOptions): GaxiosPromise<void>;
        unhide(params: Params$Resource$Players$Unhide, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        unhide(params: Params$Resource$Players$Unhide, callback: BodyResponseCallback<void>): void;
        unhide(callback: BodyResponseCallback<void>): void;
    }
    interface Params$Resource$Players$Hide extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The application ID from the Google Play developer console.
         */
        applicationId?: string;
        /**
         * A player ID. A value of me may be used in place of the authenticated
         * player's ID.
         */
        playerId?: string;
    }
    interface Params$Resource$Players$Unhide extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The application ID from the Google Play developer console.
         */
        applicationId?: string;
        /**
         * A player ID. A value of me may be used in place of the authenticated
         * player's ID.
         */
        playerId?: string;
    }
    class Resource$Quests {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * gamesManagement.quests.reset
         * @desc Resets all player progress on the quest with the given ID for the
         * currently authenticated player. This method is only accessible to
         * whitelisted tester accounts for your application.
         * @alias gamesManagement.quests.reset
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.questId The ID of the quest.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        reset(params?: Params$Resource$Quests$Reset, options?: MethodOptions): GaxiosPromise<void>;
        reset(params: Params$Resource$Quests$Reset, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        reset(params: Params$Resource$Quests$Reset, callback: BodyResponseCallback<void>): void;
        reset(callback: BodyResponseCallback<void>): void;
        /**
         * gamesManagement.quests.resetAll
         * @desc Resets all player progress on all quests for the currently
         * authenticated player. This method is only accessible to whitelisted
         * tester accounts for your application.
         * @alias gamesManagement.quests.resetAll
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resetAll(params?: Params$Resource$Quests$Resetall, options?: MethodOptions): GaxiosPromise<void>;
        resetAll(params: Params$Resource$Quests$Resetall, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        resetAll(params: Params$Resource$Quests$Resetall, callback: BodyResponseCallback<void>): void;
        resetAll(callback: BodyResponseCallback<void>): void;
        /**
         * gamesManagement.quests.resetAllForAllPlayers
         * @desc Resets all draft quests for all players. This method is only
         * available to user accounts for your developer console.
         * @alias gamesManagement.quests.resetAllForAllPlayers
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resetAllForAllPlayers(params?: Params$Resource$Quests$Resetallforallplayers, options?: MethodOptions): GaxiosPromise<void>;
        resetAllForAllPlayers(params: Params$Resource$Quests$Resetallforallplayers, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        resetAllForAllPlayers(params: Params$Resource$Quests$Resetallforallplayers, callback: BodyResponseCallback<void>): void;
        resetAllForAllPlayers(callback: BodyResponseCallback<void>): void;
        /**
         * gamesManagement.quests.resetForAllPlayers
         * @desc Resets all player progress on the quest with the given ID for all
         * players. This method is only available to user accounts for your
         * developer console. Only draft quests can be reset.
         * @alias gamesManagement.quests.resetForAllPlayers
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.questId The ID of the quest.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resetForAllPlayers(params?: Params$Resource$Quests$Resetforallplayers, options?: MethodOptions): GaxiosPromise<void>;
        resetForAllPlayers(params: Params$Resource$Quests$Resetforallplayers, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        resetForAllPlayers(params: Params$Resource$Quests$Resetforallplayers, callback: BodyResponseCallback<void>): void;
        resetForAllPlayers(callback: BodyResponseCallback<void>): void;
        /**
         * gamesManagement.quests.resetMultipleForAllPlayers
         * @desc Resets quests with the given IDs for all players. This method is
         * only available to user accounts for your developer console. Only draft
         * quests may be reset.
         * @alias gamesManagement.quests.resetMultipleForAllPlayers
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {().QuestsResetMultipleForAllRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resetMultipleForAllPlayers(params?: Params$Resource$Quests$Resetmultipleforallplayers, options?: MethodOptions): GaxiosPromise<void>;
        resetMultipleForAllPlayers(params: Params$Resource$Quests$Resetmultipleforallplayers, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        resetMultipleForAllPlayers(params: Params$Resource$Quests$Resetmultipleforallplayers, callback: BodyResponseCallback<void>): void;
        resetMultipleForAllPlayers(callback: BodyResponseCallback<void>): void;
    }
    interface Params$Resource$Quests$Reset extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the quest.
         */
        questId?: string;
    }
    interface Params$Resource$Quests$Resetall extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
    }
    interface Params$Resource$Quests$Resetallforallplayers extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
    }
    interface Params$Resource$Quests$Resetforallplayers extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the quest.
         */
        questId?: string;
    }
    interface Params$Resource$Quests$Resetmultipleforallplayers extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Request body metadata
         */
        requestBody?: Schema$QuestsResetMultipleForAllRequest;
    }
    class Resource$Rooms {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * gamesManagement.rooms.reset
         * @desc Reset all rooms for the currently authenticated player for your
         * application. This method is only accessible to whitelisted tester
         * accounts for your application.
         * @alias gamesManagement.rooms.reset
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        reset(params?: Params$Resource$Rooms$Reset, options?: MethodOptions): GaxiosPromise<void>;
        reset(params: Params$Resource$Rooms$Reset, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        reset(params: Params$Resource$Rooms$Reset, callback: BodyResponseCallback<void>): void;
        reset(callback: BodyResponseCallback<void>): void;
        /**
         * gamesManagement.rooms.resetForAllPlayers
         * @desc Deletes rooms where the only room participants are from whitelisted
         * tester accounts for your application. This method is only available to
         * user accounts for your developer console.
         * @alias gamesManagement.rooms.resetForAllPlayers
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resetForAllPlayers(params?: Params$Resource$Rooms$Resetforallplayers, options?: MethodOptions): GaxiosPromise<void>;
        resetForAllPlayers(params: Params$Resource$Rooms$Resetforallplayers, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        resetForAllPlayers(params: Params$Resource$Rooms$Resetforallplayers, callback: BodyResponseCallback<void>): void;
        resetForAllPlayers(callback: BodyResponseCallback<void>): void;
    }
    interface Params$Resource$Rooms$Reset extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
    }
    interface Params$Resource$Rooms$Resetforallplayers extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
    }
    class Resource$Scores {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * gamesManagement.scores.reset
         * @desc Resets scores for the leaderboard with the given ID for the
         * currently authenticated player. This method is only accessible to
         * whitelisted tester accounts for your application.
         * @alias gamesManagement.scores.reset
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.leaderboardId The ID of the leaderboard.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        reset(params?: Params$Resource$Scores$Reset, options?: MethodOptions): GaxiosPromise<Schema$PlayerScoreResetResponse>;
        reset(params: Params$Resource$Scores$Reset, options: MethodOptions | BodyResponseCallback<Schema$PlayerScoreResetResponse>, callback: BodyResponseCallback<Schema$PlayerScoreResetResponse>): void;
        reset(params: Params$Resource$Scores$Reset, callback: BodyResponseCallback<Schema$PlayerScoreResetResponse>): void;
        reset(callback: BodyResponseCallback<Schema$PlayerScoreResetResponse>): void;
        /**
         * gamesManagement.scores.resetAll
         * @desc Resets all scores for all leaderboards for the currently
         * authenticated players. This method is only accessible to whitelisted
         * tester accounts for your application.
         * @alias gamesManagement.scores.resetAll
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resetAll(params?: Params$Resource$Scores$Resetall, options?: MethodOptions): GaxiosPromise<Schema$PlayerScoreResetAllResponse>;
        resetAll(params: Params$Resource$Scores$Resetall, options: MethodOptions | BodyResponseCallback<Schema$PlayerScoreResetAllResponse>, callback: BodyResponseCallback<Schema$PlayerScoreResetAllResponse>): void;
        resetAll(params: Params$Resource$Scores$Resetall, callback: BodyResponseCallback<Schema$PlayerScoreResetAllResponse>): void;
        resetAll(callback: BodyResponseCallback<Schema$PlayerScoreResetAllResponse>): void;
        /**
         * gamesManagement.scores.resetAllForAllPlayers
         * @desc Resets scores for all draft leaderboards for all players. This
         * method is only available to user accounts for your developer console.
         * @alias gamesManagement.scores.resetAllForAllPlayers
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resetAllForAllPlayers(params?: Params$Resource$Scores$Resetallforallplayers, options?: MethodOptions): GaxiosPromise<void>;
        resetAllForAllPlayers(params: Params$Resource$Scores$Resetallforallplayers, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        resetAllForAllPlayers(params: Params$Resource$Scores$Resetallforallplayers, callback: BodyResponseCallback<void>): void;
        resetAllForAllPlayers(callback: BodyResponseCallback<void>): void;
        /**
         * gamesManagement.scores.resetForAllPlayers
         * @desc Resets scores for the leaderboard with the given ID for all
         * players. This method is only available to user accounts for your
         * developer console. Only draft leaderboards can be reset.
         * @alias gamesManagement.scores.resetForAllPlayers
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.leaderboardId The ID of the leaderboard.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resetForAllPlayers(params?: Params$Resource$Scores$Resetforallplayers, options?: MethodOptions): GaxiosPromise<void>;
        resetForAllPlayers(params: Params$Resource$Scores$Resetforallplayers, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        resetForAllPlayers(params: Params$Resource$Scores$Resetforallplayers, callback: BodyResponseCallback<void>): void;
        resetForAllPlayers(callback: BodyResponseCallback<void>): void;
        /**
         * gamesManagement.scores.resetMultipleForAllPlayers
         * @desc Resets scores for the leaderboards with the given IDs for all
         * players. This method is only available to user accounts for your
         * developer console. Only draft leaderboards may be reset.
         * @alias gamesManagement.scores.resetMultipleForAllPlayers
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {().ScoresResetMultipleForAllRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resetMultipleForAllPlayers(params?: Params$Resource$Scores$Resetmultipleforallplayers, options?: MethodOptions): GaxiosPromise<void>;
        resetMultipleForAllPlayers(params: Params$Resource$Scores$Resetmultipleforallplayers, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        resetMultipleForAllPlayers(params: Params$Resource$Scores$Resetmultipleforallplayers, callback: BodyResponseCallback<void>): void;
        resetMultipleForAllPlayers(callback: BodyResponseCallback<void>): void;
    }
    interface Params$Resource$Scores$Reset extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the leaderboard.
         */
        leaderboardId?: string;
    }
    interface Params$Resource$Scores$Resetall extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
    }
    interface Params$Resource$Scores$Resetallforallplayers extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
    }
    interface Params$Resource$Scores$Resetforallplayers extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the leaderboard.
         */
        leaderboardId?: string;
    }
    interface Params$Resource$Scores$Resetmultipleforallplayers extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ScoresResetMultipleForAllRequest;
    }
    class Resource$Turnbasedmatches {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * gamesManagement.turnBasedMatches.reset
         * @desc Reset all turn-based match data for a user. This method is only
         * accessible to whitelisted tester accounts for your application.
         * @alias gamesManagement.turnBasedMatches.reset
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        reset(params?: Params$Resource$Turnbasedmatches$Reset, options?: MethodOptions): GaxiosPromise<void>;
        reset(params: Params$Resource$Turnbasedmatches$Reset, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        reset(params: Params$Resource$Turnbasedmatches$Reset, callback: BodyResponseCallback<void>): void;
        reset(callback: BodyResponseCallback<void>): void;
        /**
         * gamesManagement.turnBasedMatches.resetForAllPlayers
         * @desc Deletes turn-based matches where the only match participants are
         * from whitelisted tester accounts for your application. This method is
         * only available to user accounts for your developer console.
         * @alias gamesManagement.turnBasedMatches.resetForAllPlayers
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resetForAllPlayers(params?: Params$Resource$Turnbasedmatches$Resetforallplayers, options?: MethodOptions): GaxiosPromise<void>;
        resetForAllPlayers(params: Params$Resource$Turnbasedmatches$Resetforallplayers, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        resetForAllPlayers(params: Params$Resource$Turnbasedmatches$Resetforallplayers, callback: BodyResponseCallback<void>): void;
        resetForAllPlayers(callback: BodyResponseCallback<void>): void;
    }
    interface Params$Resource$Turnbasedmatches$Reset extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
    }
    interface Params$Resource$Turnbasedmatches$Resetforallplayers extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
    }
}
