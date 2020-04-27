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
export declare namespace docs_v1 {
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
     * Google Docs API
     *
     * Reads and writes Google Docs documents.
     *
     * @example
     * const {google} = require('googleapis');
     * const docs = google.docs('v1');
     *
     * @namespace docs
     * @type {Function}
     * @version v1
     * @variation v1
     * @param {object=} options Options for Docs
     */
    class Docs {
        context: APIRequestContext;
        documents: Resource$Documents;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * A ParagraphElement representing a spot in the text that is dynamically
     * replaced with content that can change over time, like a page number.
     */
    interface Schema$AutoText {
        /**
         * The suggested deletion IDs. If empty, then there are no suggested
         * deletions of this content.
         */
        suggestedDeletionIds?: string[];
        /**
         * The suggested insertion IDs. An AutoText may have multiple insertion IDs
         * if it is a nested suggested change. If empty, then this is not a
         * suggested insertion.
         */
        suggestedInsertionIds?: string[];
        /**
         * The suggested text style changes to this AutoText, keyed by suggestion
         * ID.
         */
        suggestedTextStyleChanges?: {
            [key: string]: Schema$SuggestedTextStyle;
        };
        /**
         * The text style of this AutoText.
         */
        textStyle?: Schema$TextStyle;
        /**
         * The type of this auto text.
         */
        type?: string;
    }
    /**
     * Represents the background of a document.
     */
    interface Schema$Background {
        /**
         * The background color.
         */
        color?: Schema$OptionalColor;
    }
    /**
     * A mask that indicates which of the fields on the base Background have been
     * changed in this suggestion. For any field set to true, the Backgound has a
     * new suggested value.
     */
    interface Schema$BackgroundSuggestionState {
        /**
         * Indicates whether the current background color has been modified in this
         * suggestion.
         */
        backgroundColorSuggested?: boolean;
    }
    /**
     * Request message for BatchUpdateDocument.
     */
    interface Schema$BatchUpdateDocumentRequest {
        /**
         * A list of updates to apply to the document.
         */
        requests?: Schema$Request[];
        /**
         * Provides control over how write requests are executed.
         */
        writeControl?: Schema$WriteControl;
    }
    /**
     * Response message from a BatchUpdateDocument request.
     */
    interface Schema$BatchUpdateDocumentResponse {
        /**
         * The ID of the document to which the updates were applied to.
         */
        documentId?: string;
        /**
         * The reply of the updates. This maps 1:1 with the updates, although
         * replies to some requests may be empty.
         */
        replies?: Schema$Response[];
        /**
         * The updated write control after applying the request.
         */
        writeControl?: Schema$WriteControl;
    }
    /**
     * The document body.  The body typically contains the full document contents
     * except for headers, footers and footnotes.
     */
    interface Schema$Body {
        /**
         * The contents of the body.  The indexes for the body&#39;s content begin
         * at zero.
         */
        content?: Schema$StructuralElement[];
    }
    /**
     * Describes the bullet of a paragraph.
     */
    interface Schema$Bullet {
        /**
         * The ID of the list this paragraph belongs to.
         */
        listId?: string;
        /**
         * The nesting level of this paragraph in the list.
         */
        nestingLevel?: number;
        /**
         * The paragraph specific text style applied to this bullet.
         */
        textStyle?: Schema$TextStyle;
    }
    /**
     * A mask that indicates which of the fields on the base Bullet have been
     * changed in this suggestion. For any field set to true, there is a new
     * suggested value.
     */
    interface Schema$BulletSuggestionState {
        /**
         * Indicates if there was a suggested change to the list_id.
         */
        listIdSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to the nesting_level.
         */
        nestingLevelSuggested?: boolean;
        /**
         * A mask that indicates which of the fields in text style have been changed
         * in this suggestion.
         */
        textStyleSuggestionState?: Schema$TextStyleSuggestionState;
    }
    /**
     * A solid color.
     */
    interface Schema$Color {
        /**
         * The RGB color value.
         */
        rgbColor?: Schema$RgbColor;
    }
    /**
     * A ParagraphElement representing a column break. A column break makes the
     * subsequent text start at the top of the next column.
     */
    interface Schema$ColumnBreak {
        /**
         * The suggested deletion IDs. If empty, then there are no suggested
         * deletions of this content.
         */
        suggestedDeletionIds?: string[];
        /**
         * The suggested insertion IDs. A ColumnBreak may have multiple insertion
         * IDs if it is a nested suggested change. If empty, then this is not a
         * suggested insertion.
         */
        suggestedInsertionIds?: string[];
        /**
         * The suggested text style changes to this ColumnBreak, keyed by suggestion
         * ID.
         */
        suggestedTextStyleChanges?: {
            [key: string]: Schema$SuggestedTextStyle;
        };
        /**
         * The text style of this ColumnBreak.  Similar to text content, like text
         * runs and footnote references, the text style of a column break can affect
         * content layout as well as the styling of text inserted adjacent to it.
         */
        textStyle?: Schema$TextStyle;
    }
    /**
     * Creates a NamedRange referencing the given range.
     */
    interface Schema$CreateNamedRangeRequest {
        /**
         * The name of the NamedRange. Names do not need to be unique.  Names must
         * be at least 1 character and no more than 256 characters, measured in
         * UTF-16 code units.
         */
        name?: string;
        /**
         * The range to apply the name to.
         */
        range?: Schema$Range;
    }
    /**
     * The result of creating a named range.
     */
    interface Schema$CreateNamedRangeResponse {
        /**
         * The ID of the created named range.
         */
        namedRangeId?: string;
    }
    /**
     * Creates bullets for all of the paragraphs that overlap with the given
     * range.  The nesting level of each paragraph will be determined by counting
     * leading tabs in front of each paragraph. To avoid excess space between the
     * bullet and the corresponding paragraph, these leading tabs are removed by
     * this request. This may change the indices of parts of the text.  If the
     * paragraph immediately before paragraphs being updated is in a list with a
     * matching preset, the paragraphs being updated are added to that preceding
     * list.
     */
    interface Schema$CreateParagraphBulletsRequest {
        /**
         * The kinds of bullet glyphs to be used.
         */
        bulletPreset?: string;
        /**
         * The range to apply the bullet preset to.
         */
        range?: Schema$Range;
    }
    /**
     * The crop properties of an image.  The crop rectangle is represented using
     * fractional offsets from the original content&#39;s four edges.  - If the
     * offset is in the interval (0, 1), the corresponding edge of crop rectangle
     * is positioned inside of the image&#39;s original bounding rectangle. - If
     * the offset is negative or greater than 1, the corresponding edge of crop
     * rectangle is positioned outside of the image&#39;s original bounding
     * rectangle. - If all offsets and rotation angle are 0, the image is not
     * cropped.
     */
    interface Schema$CropProperties {
        /**
         * The clockwise rotation angle of the crop rectangle around its center, in
         * radians. Rotation is applied after the offsets.
         */
        angle?: number;
        /**
         * The offset specifies how far inwards the bottom edge of the crop
         * rectangle is from the bottom edge of the original content as a fraction
         * of the original content&#39;s height.
         */
        offsetBottom?: number;
        /**
         * The offset specifies how far inwards the left edge of the crop rectangle
         * is from the left edge of the original content as a fraction of the
         * original content&#39;s width.
         */
        offsetLeft?: number;
        /**
         * The offset specifies how far inwards the right edge of the crop rectangle
         * is from the right edge of the original content as a fraction of the
         * original content&#39;s width.
         */
        offsetRight?: number;
        /**
         * The offset specifies how far inwards the top edge of the crop rectangle
         * is from the top edge of the original content as a fraction of the
         * original content&#39;s height.
         */
        offsetTop?: number;
    }
    /**
     * A mask that indicates which of the fields on the base CropProperties have
     * been changed in this suggestion. For any field set to true, there is a new
     * suggested value.
     */
    interface Schema$CropPropertiesSuggestionState {
        /**
         * Indicates if there was a suggested change to angle.
         */
        angleSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to offset_bottom.
         */
        offsetBottomSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to offset_left.
         */
        offsetLeftSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to offset_right.
         */
        offsetRightSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to offset_top.
         */
        offsetTopSuggested?: boolean;
    }
    /**
     * Deletes content from the document.
     */
    interface Schema$DeleteContentRangeRequest {
        /**
         * The range of content to delete.  Deleting text that crosses a paragraph
         * boundary may result in changes to paragraph styles, lists, positioned
         * objects and bookmarks as the two paragraphs are merged.  Attempting to
         * delete certain ranges can result in an invalid document structure in
         * which case a 400 bad request error is returned.  Some examples of invalid
         * delete requests include:  * Deleting one code unit of a surrogate pair. *
         * Deleting the last newline character of a Body, Header,   Footer,
         * Footnote, TableCell or TableOfContents. * Deleting the start or end of a
         * Table,   TableOfContents or Equation without deleting the entire element.
         * * Deleting the newline character before a   Table,   TableOfContents or
         * SectionBreak without deleting the   element. * Deleting individual rows
         * or cells of a table. Deleting the content within   a table cell is
         * allowed.
         */
        range?: Schema$Range;
    }
    /**
     * Deletes a NamedRange.
     */
    interface Schema$DeleteNamedRangeRequest {
        /**
         * The name of the range(s) to delete. All named ranges with the given name
         * will be deleted.
         */
        name?: string;
        /**
         * The ID of the named range to delete.
         */
        namedRangeId?: string;
    }
    /**
     * Deletes bullets from all of the paragraphs that overlap with the given
     * range.  The nesting level of each paragraph will be visually preserved by
     * adding indent to the start of the corresponding paragraph.
     */
    interface Schema$DeleteParagraphBulletsRequest {
        /**
         * The range to delete bullets from.
         */
        range?: Schema$Range;
    }
    /**
     * Deletes a PositionedObject from the document.
     */
    interface Schema$DeletePositionedObjectRequest {
        /**
         * The ID of the positioned object to delete.
         */
        objectId?: string;
    }
    /**
     * Deletes a column from a table.
     */
    interface Schema$DeleteTableColumnRequest {
        /**
         * The reference table cell location from which the column will be deleted.
         * The column this cell spans will be deleted. If this is a merged cell that
         * spans multiple columns, all columns that the cell spans will be deleted.
         * If no columns remain in the table after this deletion, the whole table is
         * deleted.
         */
        tableCellLocation?: Schema$TableCellLocation;
    }
    /**
     * Deletes a row from a table.
     */
    interface Schema$DeleteTableRowRequest {
        /**
         * The reference table cell location from which the row will be deleted. The
         * row this cell spans will be deleted. If this is a merged cell that spans
         * multiple rows, all rows that the cell spans will be deleted. If no rows
         * remain in the table after this deletion, the whole table is deleted.
         */
        tableCellLocation?: Schema$TableCellLocation;
    }
    /**
     * A magnitude in a single direction in the specified units.
     */
    interface Schema$Dimension {
        /**
         * The magnitude.
         */
        magnitude?: number;
        /**
         * The units for magnitude.
         */
        unit?: string;
    }
    /**
     * A Google Docs document.
     */
    interface Schema$Document {
        /**
         * The main body of the document.
         */
        body?: Schema$Body;
        /**
         * The ID of the document.
         */
        documentId?: string;
        /**
         * The style of the document.
         */
        documentStyle?: Schema$DocumentStyle;
        /**
         * The footers in the document, keyed by footer ID.
         */
        footers?: {
            [key: string]: Schema$Footer;
        };
        /**
         * The footnotes in the document, keyed by footnote ID.
         */
        footnotes?: {
            [key: string]: Schema$Footnote;
        };
        /**
         * The headers in the document, keyed by header ID.
         */
        headers?: {
            [key: string]: Schema$Header;
        };
        /**
         * The inline objects in the document, keyed by object ID.
         */
        inlineObjects?: {
            [key: string]: Schema$InlineObject;
        };
        /**
         * The lists in the document, keyed by list ID.
         */
        lists?: {
            [key: string]: Schema$List;
        };
        /**
         * The named ranges in the document, keyed by name.
         */
        namedRanges?: {
            [key: string]: Schema$NamedRanges;
        };
        /**
         * The named styles of the document.
         */
        namedStyles?: Schema$NamedStyles;
        /**
         * The positioned objects in the document, keyed by object ID.
         */
        positionedObjects?: {
            [key: string]: Schema$PositionedObject;
        };
        /**
         * The revision ID of the document. Can be used in update requests to
         * specify which revision of a document to apply updates to and how the
         * request should behave if the document has been edited since that
         * revision. Only populated if the user has edit access to the document. The
         * format of the revision ID may change over time, so it should be treated
         * opaquely. A returned revision ID is only guaranteed to be valid for 24
         * hours after it has been returned and cannot be shared across users. If
         * the revision ID is unchanged between calls, then the document has not
         * changed. Conversely, a changed ID (for the same document and user)
         * usually means the document has been updated; however, a changed ID can
         * also be due to internal factors such as ID format changes.
         */
        revisionId?: string;
        /**
         * The suggested changes to the style of the document, keyed by suggestion
         * ID.
         */
        suggestedDocumentStyleChanges?: {
            [key: string]: Schema$SuggestedDocumentStyle;
        };
        /**
         * The suggested changes to the named styles of the document, keyed by
         * suggestion ID.
         */
        suggestedNamedStylesChanges?: {
            [key: string]: Schema$SuggestedNamedStyles;
        };
        /**
         * The suggestions view mode applied to the document.  Note: When editing a
         * document, changes must be based on a document with SUGGESTIONS_INLINE.
         */
        suggestionsViewMode?: string;
        /**
         * The title of the document.
         */
        title?: string;
    }
    /**
     * The style of the document.
     */
    interface Schema$DocumentStyle {
        /**
         * The background of the document.
         */
        background?: Schema$Background;
        /**
         * The ID of the default footer. If not set, there is no default footer.
         */
        defaultFooterId?: string;
        /**
         * The ID of the default header. If not set, there is no default header.
         */
        defaultHeaderId?: string;
        /**
         * The ID of the footer used only for even pages. The value of
         * use_even_page_header_footer determines whether to use the
         * default_footer_id or this value for the footer on even pages. If not set,
         * there is no even page footer.
         */
        evenPageFooterId?: string;
        /**
         * The ID of the header used only for even pages. The value of
         * use_even_page_header_footer determines whether to use the
         * default_header_id or this value for the header on even pages. If not set,
         * there is no even page header.
         */
        evenPageHeaderId?: string;
        /**
         * The ID of the footer used only for the first page. If not set then a
         * unique footer for the first page does not exist. The value of
         * use_first_page_header_footer determines whether to use the
         * default_footer_id or this value for the footer on the first page. If not
         * set, there is no first page footer.
         */
        firstPageFooterId?: string;
        /**
         * The ID of the header used only for the first page. If not set then a
         * unique header for the first page does not exist. The value of
         * use_first_page_header_footer determines whether to use the
         * default_header_id or this value for the header on the first page. If not
         * set, there is no first page header.
         */
        firstPageHeaderId?: string;
        /**
         * The bottom page margin.
         */
        marginBottom?: Schema$Dimension;
        /**
         * The left page margin.
         */
        marginLeft?: Schema$Dimension;
        /**
         * The right page margin.
         */
        marginRight?: Schema$Dimension;
        /**
         * The top page margin.
         */
        marginTop?: Schema$Dimension;
        /**
         * The page number from which to start counting the number of pages.
         */
        pageNumberStart?: number;
        /**
         * The size of a page in the document.
         */
        pageSize?: Schema$Size;
        /**
         * Indicates whether to use the even page header / footer IDs for the even
         * pages.
         */
        useEvenPageHeaderFooter?: boolean;
        /**
         * Indicates whether to use the first page header / footer IDs for the first
         * page.
         */
        useFirstPageHeaderFooter?: boolean;
    }
    /**
     * A mask that indicates which of the fields on the base DocumentStyle have
     * been changed in this suggestion. For any field set to true, there is a new
     * suggested value.
     */
    interface Schema$DocumentStyleSuggestionState {
        /**
         * A mask that indicates which of the fields in background have been changed
         * in this suggestion.
         */
        backgroundSuggestionState?: Schema$BackgroundSuggestionState;
        /**
         * Indicates if there was a suggested change to default_footer_id.
         */
        defaultFooterIdSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to default_header_id.
         */
        defaultHeaderIdSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to even_page_footer_id.
         */
        evenPageFooterIdSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to even_page_header_id.
         */
        evenPageHeaderIdSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to first_page_footer_id.
         */
        firstPageFooterIdSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to first_page_header_id.
         */
        firstPageHeaderIdSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to margin_bottom.
         */
        marginBottomSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to margin_left.
         */
        marginLeftSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to margin_right.
         */
        marginRightSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to margin_top.
         */
        marginTopSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to page_number_start.
         */
        pageNumberStartSuggested?: boolean;
        /**
         * A mask that indicates which of the fields in size have been changed in
         * this suggestion.
         */
        pageSizeSuggestionState?: Schema$SizeSuggestionState;
        /**
         * Indicates if there was a suggested change to use_even_page_header_footer.
         */
        useEvenPageHeaderFooterSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to
         * use_first_page_header_footer.
         */
        useFirstPageHeaderFooterSuggested?: boolean;
    }
    /**
     * The properties of an embedded drawing.
     */
    interface Schema$EmbeddedDrawingProperties {
    }
    /**
     * A mask that indicates which of the fields on the base
     * EmbeddedDrawingProperties have been changed in this suggestion. For any
     * field set to true, there is a new suggested value.
     */
    interface Schema$EmbeddedDrawingPropertiesSuggestionState {
    }
    /**
     * An embedded object in the document.
     */
    interface Schema$EmbeddedObject {
        /**
         * The description of the embedded object. The `title` and `description` are
         * both combined to display alt text.
         */
        description?: string;
        /**
         * The properties of an embedded drawing.
         */
        embeddedDrawingProperties?: Schema$EmbeddedDrawingProperties;
        /**
         * The border of the embedded object.
         */
        embeddedObjectBorder?: Schema$EmbeddedObjectBorder;
        /**
         * The properties of an image.
         */
        imageProperties?: Schema$ImageProperties;
        /**
         * A reference to the external linked source content. For example, it
         * contains a reference to the source Sheets chart when the embedded object
         * is a linked chart.  If unset, then the embedded object is not linked.
         */
        linkedContentReference?: Schema$LinkedContentReference;
        /**
         * The bottom margin of the embedded object.
         */
        marginBottom?: Schema$Dimension;
        /**
         * The left margin of the embedded object.
         */
        marginLeft?: Schema$Dimension;
        /**
         * The right margin of the embedded object.
         */
        marginRight?: Schema$Dimension;
        /**
         * The top margin of the embedded object.
         */
        marginTop?: Schema$Dimension;
        /**
         * The size of the embedded object.
         */
        size?: Schema$Size;
        /**
         * The title of the embedded object. The `title` and `description` are both
         * combined to display alt text.
         */
        title?: string;
    }
    /**
     * A border around an EmbeddedObject.
     */
    interface Schema$EmbeddedObjectBorder {
        /**
         * The color of the border.
         */
        color?: Schema$OptionalColor;
        /**
         * The dash style of the border.
         */
        dashStyle?: string;
        /**
         * The property state of the border property.
         */
        propertyState?: string;
        /**
         * The width of the border.
         */
        width?: Schema$Dimension;
    }
    /**
     * A mask that indicates which of the fields on the base EmbeddedObjectBorder
     * have been changed in this suggestion. For any field set to true, there is a
     * new suggested value.
     */
    interface Schema$EmbeddedObjectBorderSuggestionState {
        /**
         * Indicates if there was a suggested change to color.
         */
        colorSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to dash_style.
         */
        dashStyleSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to property_state.
         */
        propertyStateSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to width.
         */
        widthSuggested?: boolean;
    }
    /**
     * A mask that indicates which of the fields on the base EmbeddedObject have
     * been changed in this suggestion. For any field set to true, there is a new
     * suggested value.
     */
    interface Schema$EmbeddedObjectSuggestionState {
        /**
         * Indicates if there was a suggested change to description.
         */
        descriptionSuggested?: boolean;
        /**
         * A mask that indicates which of the fields in embedded_drawing_properties
         * have been changed in this suggestion.
         */
        embeddedDrawingPropertiesSuggestionState?: Schema$EmbeddedDrawingPropertiesSuggestionState;
        /**
         * A mask that indicates which of the fields in embedded_object_border have
         * been changed in this suggestion.
         */
        embeddedObjectBorderSuggestionState?: Schema$EmbeddedObjectBorderSuggestionState;
        /**
         * A mask that indicates which of the fields in image_properties have been
         * changed in this suggestion.
         */
        imagePropertiesSuggestionState?: Schema$ImagePropertiesSuggestionState;
        /**
         * A mask that indicates which of the fields in linked_content_reference
         * have been changed in this suggestion.
         */
        linkedContentReferenceSuggestionState?: Schema$LinkedContentReferenceSuggestionState;
        /**
         * Indicates if there was a suggested change to margin_bottom.
         */
        marginBottomSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to margin_left.
         */
        marginLeftSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to margin_right.
         */
        marginRightSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to margin_top.
         */
        marginTopSuggested?: boolean;
        /**
         * A mask that indicates which of the fields in size have been changed in
         * this suggestion.
         */
        sizeSuggestionState?: Schema$SizeSuggestionState;
        /**
         * Indicates if there was a suggested change to title.
         */
        titleSuggested?: boolean;
    }
    /**
     * Location at the end of a body, header, footer or footnote. The location is
     * immediately before the last newline in the document segment.
     */
    interface Schema$EndOfSegmentLocation {
        /**
         * The ID of the header, footer or footnote the location is in. An empty
         * segment ID signifies the document&#39;s body.
         */
        segmentId?: string;
    }
    /**
     * A ParagraphElement representing an equation.
     */
    interface Schema$Equation {
        /**
         * The suggested deletion IDs. If empty, then there are no suggested
         * deletions of this content.
         */
        suggestedDeletionIds?: string[];
        /**
         * The suggested insertion IDs. A Equation may have multiple insertion IDs
         * if it is a nested suggested change. If empty, then this is not a
         * suggested insertion.
         */
        suggestedInsertionIds?: string[];
    }
    /**
     * A document footer.
     */
    interface Schema$Footer {
        /**
         * The contents of the footer.  The indexes for a footer&#39;s content begin
         * at zero.
         */
        content?: Schema$StructuralElement[];
        /**
         * The ID of the footer.
         */
        footerId?: string;
    }
    /**
     * A document footnote.
     */
    interface Schema$Footnote {
        /**
         * The contents of the footnote.  The indexes for a footnote&#39;s content
         * begin at zero.
         */
        content?: Schema$StructuralElement[];
        /**
         * The ID of the footnote.
         */
        footnoteId?: string;
    }
    /**
     * A ParagraphElement representing a footnote reference. A footnote reference
     * is the inline content rendered with a number and is used to identify the
     * footnote.
     */
    interface Schema$FootnoteReference {
        /**
         * The ID of the footnote that contains the content of this footnote
         * reference.
         */
        footnoteId?: string;
        /**
         * The rendered number of this footnote.
         */
        footnoteNumber?: string;
        /**
         * The suggested deletion IDs. If empty, then there are no suggested
         * deletions of this content.
         */
        suggestedDeletionIds?: string[];
        /**
         * The suggested insertion IDs. A FootnoteReference may have multiple
         * insertion IDs if it is a nested suggested change. If empty, then this is
         * not a suggested insertion.
         */
        suggestedInsertionIds?: string[];
        /**
         * The suggested text style changes to this FootnoteReference, keyed by
         * suggestion ID.
         */
        suggestedTextStyleChanges?: {
            [key: string]: Schema$SuggestedTextStyle;
        };
        /**
         * The text style of this FootnoteReference.
         */
        textStyle?: Schema$TextStyle;
    }
    /**
     * A document header.
     */
    interface Schema$Header {
        /**
         * The contents of the header.  The indexes for a header&#39;s content begin
         * at zero.
         */
        content?: Schema$StructuralElement[];
        /**
         * The ID of the header.
         */
        headerId?: string;
    }
    /**
     * A ParagraphElement representing a horizontal line.
     */
    interface Schema$HorizontalRule {
        /**
         * The suggested deletion IDs. If empty, then there are no suggested
         * deletions of this content.
         */
        suggestedDeletionIds?: string[];
        /**
         * The suggested insertion IDs. A HorizontalRule may have multiple insertion
         * IDs if it is a nested suggested change. If empty, then this is not a
         * suggested insertion.
         */
        suggestedInsertionIds?: string[];
        /**
         * The suggested text style changes to this HorizontalRule, keyed by
         * suggestion ID.
         */
        suggestedTextStyleChanges?: {
            [key: string]: Schema$SuggestedTextStyle;
        };
        /**
         * The text style of this HorizontalRule.  Similar to text content, like
         * text runs and footnote references, the text style of a horizontal rule
         * can affect content layout as well as the styling of text inserted
         * adjacent to it.
         */
        textStyle?: Schema$TextStyle;
    }
    /**
     * The properties of an image.
     */
    interface Schema$ImageProperties {
        /**
         * The clockwise rotation angle of the image, in radians.
         */
        angle?: number;
        /**
         * The brightness effect of the image. The value should be in the interval
         * [-1.0, 1.0], where 0 means no effect.
         */
        brightness?: number;
        /**
         * A URI to the image with a default lifetime of 30 minutes. This URI is
         * tagged with the account of the requester. Anyone with the URI effectively
         * accesses the image as the original requester. Access to the image may be
         * lost if the document&#39;s sharing settings change.
         */
        contentUri?: string;
        /**
         * The contrast effect of the image. The value should be in the interval
         * [-1.0, 1.0], where 0 means no effect.
         */
        contrast?: number;
        /**
         * The crop properties of the image.  After cropping, the image will be
         * stretched to fit in its container.
         */
        cropProperties?: Schema$CropProperties;
        /**
         * The source URI is the URI used to insert the image. The source URI can be
         * empty.
         */
        sourceUri?: string;
        /**
         * The transparency effect of the image. The value should be in the interval
         * [0.0, 1.0], where 0 means no effect and 1 means completely transparent.
         */
        transparency?: number;
    }
    /**
     * A mask that indicates which of the fields on the base ImageProperties have
     * been changed in this suggestion. For any field set to true, there is a new
     * suggested value.
     */
    interface Schema$ImagePropertiesSuggestionState {
        /**
         * Indicates if there was a suggested change to angle.
         */
        angleSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to brightness.
         */
        brightnessSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to content_uri.
         */
        contentUriSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to contrast.
         */
        contrastSuggested?: boolean;
        /**
         * A mask that indicates which of the fields in crop_properties have been
         * changed in this suggestion.
         */
        cropPropertiesSuggestionState?: Schema$CropPropertiesSuggestionState;
        /**
         * Indicates if there was a suggested change to source_uri.
         */
        sourceUriSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to transparency.
         */
        transparencySuggested?: boolean;
    }
    /**
     * An object that appears inline with text. An InlineObject contains an
     * EmbeddedObject such as an image.
     */
    interface Schema$InlineObject {
        /**
         * The properties of this inline object.
         */
        inlineObjectProperties?: Schema$InlineObjectProperties;
        /**
         * The ID of this inline object.
         */
        objectId?: string;
        /**
         * The suggested deletion IDs. If empty, then there are no suggested
         * deletions of this content.
         */
        suggestedDeletionIds?: string[];
        /**
         * The suggested changes to the inline object properties, keyed by
         * suggestion ID.
         */
        suggestedInlineObjectPropertiesChanges?: {
            [key: string]: Schema$SuggestedInlineObjectProperties;
        };
        /**
         * The suggested insertion ID. If empty, then this is not a suggested
         * insertion.
         */
        suggestedInsertionId?: string;
    }
    /**
     * A ParagraphElement that contains an InlineObject.
     */
    interface Schema$InlineObjectElement {
        /**
         * The ID of the InlineObject this element contains.
         */
        inlineObjectId?: string;
        /**
         * The suggested deletion IDs. If empty, then there are no suggested
         * deletions of this content.
         */
        suggestedDeletionIds?: string[];
        /**
         * The suggested insertion IDs. An InlineObjectElement may have multiple
         * insertion IDs if it is a nested suggested change. If empty, then this is
         * not a suggested insertion.
         */
        suggestedInsertionIds?: string[];
        /**
         * The suggested text style changes to this InlineObject, keyed by
         * suggestion ID.
         */
        suggestedTextStyleChanges?: {
            [key: string]: Schema$SuggestedTextStyle;
        };
        /**
         * The text style of this InlineObjectElement.  Similar to text content,
         * like text runs and footnote references, the text style of an inline
         * object element can affect content layout as well as the styling of text
         * inserted adjacent to it.
         */
        textStyle?: Schema$TextStyle;
    }
    /**
     * Properties of an InlineObject.
     */
    interface Schema$InlineObjectProperties {
        /**
         * The embedded object of this inline object.
         */
        embeddedObject?: Schema$EmbeddedObject;
    }
    /**
     * A mask that indicates which of the fields on the base
     * InlineObjectProperties have been changed in this suggestion. For any field
     * set to true, there is a new suggested value.
     */
    interface Schema$InlineObjectPropertiesSuggestionState {
        /**
         * A mask that indicates which of the fields in embedded_object have been
         * changed in this suggestion.
         */
        embeddedObjectSuggestionState?: Schema$EmbeddedObjectSuggestionState;
    }
    /**
     * Inserts an InlineObject containing an image at the given location.
     */
    interface Schema$InsertInlineImageRequest {
        /**
         * Inserts the text at the end of a header, footer or the document body.
         * Inline images cannot be inserted inside a footnote.
         */
        endOfSegmentLocation?: Schema$EndOfSegmentLocation;
        /**
         * Inserts the image at a specific index in the document.  The image must be
         * inserted inside the bounds of an existing Paragraph. For instance, it
         * cannot be inserted at a table&#39;s start index (i.e. between the table
         * and its preceding paragraph).  Inline images cannot be inserted inside a
         * footnote or equation.
         */
        location?: Schema$Location;
        /**
         * The size that the image should appear as in the document. This property
         * is optional and the final size of the image in the document is determined
         * by the following rules:  * If neither width nor height is specified, then
         * a default size of the  image is calculated based on its resolution.  * If
         * one dimension is specified then the other dimension is calculated to
         * preserve the aspect ratio of the image.  * If both width and height are
         * specified, the image is scaled to fit  within the provided dimensions
         * while maintaining its aspect ratio.
         */
        objectSize?: Schema$Size;
        /**
         * The image URI.  The image is fetched once at insertion time and a copy is
         * stored for display inside the document. Images must be less than 50MB in
         * size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or
         * GIF format.  The provided URI can be at most 2 kB in length. The URI
         * itself is saved with the image, and exposed via the
         * ImageProperties.content_uri field.
         */
        uri?: string;
    }
    /**
     * The result of inserting an inline image.
     */
    interface Schema$InsertInlineImageResponse {
        /**
         * The ID of the created InlineObject.
         */
        objectId?: string;
    }
    /**
     * The result of inserting an embedded Google Sheets chart.
     */
    interface Schema$InsertInlineSheetsChartResponse {
        /**
         * The object ID of the inserted chart.
         */
        objectId?: string;
    }
    /**
     * Inserts a page break followed by a newline at the specified location.
     */
    interface Schema$InsertPageBreakRequest {
        /**
         * Inserts the page break at the end of the document body.  Page breaks
         * cannot be inserted inside a footnote, header or footer. Since page breaks
         * can only be inserted inside the body, the segment ID field must be empty.
         */
        endOfSegmentLocation?: Schema$EndOfSegmentLocation;
        /**
         * Inserts the page break at a specific index in the document.  The page
         * break must be inserted inside the bounds of an existing Paragraph. For
         * instance, it cannot be inserted at a table&#39;s start index (i.e.
         * between the table and its preceding paragraph).  Page breaks cannot be
         * inserted inside a table, equation, footnote, header or footer. Since page
         * breaks can only be inserted inside the body, the segment ID field must be
         * empty.
         */
        location?: Schema$Location;
    }
    /**
     * Inserts a table at the specified location.  A newline character will be
     * inserted before the inserted table.
     */
    interface Schema$InsertTableRequest {
        /**
         * The number of columns in the table.
         */
        columns?: number;
        /**
         * Inserts the table at the end of the given header, footer or document
         * body. A newline character will be inserted before the inserted table.
         * Tables cannot be inserted inside a footnote.
         */
        endOfSegmentLocation?: Schema$EndOfSegmentLocation;
        /**
         * Inserts the table at a specific model index.  A newline character will be
         * inserted before the inserted table, therefore the table start index will
         * be at the specified location index + 1.  The table must be inserted
         * inside the bounds of an existing Paragraph. For instance, it cannot be
         * inserted at a table&#39;s start index (i.e. between an existing table and
         * its preceding paragraph).  Tables cannot be inserted inside a footnote or
         * equation.
         */
        location?: Schema$Location;
        /**
         * The number of rows in the table.
         */
        rows?: number;
    }
    /**
     * Inserts an empty row into a table.
     */
    interface Schema$InsertTableRowRequest {
        /**
         * Whether to insert new row below the reference cell location.  - `True`:
         * insert below the cell. - `False`: insert above the cell.
         */
        insertBelow?: boolean;
        /**
         * The reference table cell location from which rows will be inserted.  A
         * new row will be inserted above (or below) the row where the reference
         * cell is. If the reference cell is a merged cell, a new row will be
         * inserted above (or below) the merged cell.
         */
        tableCellLocation?: Schema$TableCellLocation;
    }
    /**
     * Inserts text at the specified location.
     */
    interface Schema$InsertTextRequest {
        /**
         * Inserts the text at the end of a header, footer, footnote or the document
         * body.
         */
        endOfSegmentLocation?: Schema$EndOfSegmentLocation;
        /**
         * Inserts the text at a specific index in the document.  Text must be
         * inserted inside the bounds of an existing Paragraph. For instance, text
         * cannot be inserted at a table&#39;s start index (i.e. between the table
         * and its preceding paragraph). The text must be inserted in the preceding
         * paragraph.
         */
        location?: Schema$Location;
        /**
         * The text to be inserted.  Inserting a newline character will implicitly
         * create a new Paragraph at that index. The paragraph style of the new
         * paragraph will be copied from the paragraph at the current insertion
         * index, including lists and bullets.  Text styles for inserted text will
         * be determined automatically, generally preserving the styling of
         * neighboring text. In most cases, the text style for the inserted text
         * will match the text immediately before the insertion index.  Some control
         * characters (U+0000-U+0008, U+000C-U+001F) and characters from the Unicode
         * Basic Multilingual Plane Private Use Area (U+E000-U+F8FF) will be
         * stripped out of the inserted text.
         */
        text?: string;
    }
    /**
     * A reference to another portion of a document or an external URL resource.
     */
    interface Schema$Link {
        /**
         * The ID of a bookmark in this document.
         */
        bookmarkId?: string;
        /**
         * The ID of a heading in this document.
         */
        headingId?: string;
        /**
         * An external URL.
         */
        url?: string;
    }
    /**
     * A reference to the external linked source content.
     */
    interface Schema$LinkedContentReference {
        /**
         * A reference to the linked chart.
         */
        sheetsChartReference?: Schema$SheetsChartReference;
    }
    /**
     * A mask that indicates which of the fields on the base
     * LinkedContentReference have been changed in this suggestion. For any field
     * set to true, there is a new suggested value.
     */
    interface Schema$LinkedContentReferenceSuggestionState {
        /**
         * A mask that indicates which of the fields in sheets_chart_reference have
         * been changed in this suggestion.
         */
        sheetsChartReferenceSuggestionState?: Schema$SheetsChartReferenceSuggestionState;
    }
    /**
     * A List represents the list attributes for a group of paragraphs that all
     * belong to the same list. A paragraph that is part of a list has a reference
     * to the list&#39;s ID in its bullet.
     */
    interface Schema$List {
        /**
         * The properties of the list.
         */
        listProperties?: Schema$ListProperties;
        /**
         * The suggested deletion IDs. If empty, then there are no suggested
         * deletions of this list.
         */
        suggestedDeletionIds?: string[];
        /**
         * The suggested insertion ID. If empty, then this is not a suggested
         * insertion.
         */
        suggestedInsertionId?: string;
        /**
         * The suggested changes to the list properties, keyed by suggestion ID.
         */
        suggestedListPropertiesChanges?: {
            [key: string]: Schema$SuggestedListProperties;
        };
    }
    /**
     * The properties of a list which describe the look and feel of bullets
     * belonging to paragraphs associated with a list.
     */
    interface Schema$ListProperties {
        /**
         * Describes the properties of the bullets at the associated level.  A list
         * has at most nine levels of nesting with nesting level 0 corresponding to
         * the top-most level and nesting level 8 corresponding to the most nested
         * level. The nesting levels are returned in ascending order with the least
         * nested returned first.
         */
        nestingLevels?: Schema$NestingLevel[];
    }
    /**
     * A mask that indicates which of the fields on the base ListProperties have
     * been changed in this suggestion. For any field set to true, there is a new
     * suggested value.
     */
    interface Schema$ListPropertiesSuggestionState {
        /**
         * A mask that indicates which of the fields on the corresponding
         * NestingLevel in nesting_levels have been changed in this suggestion.  The
         * nesting level suggestion states are returned in ascending order of the
         * nesting level with the least nested returned first.
         */
        nestingLevelsSuggestionStates?: Schema$NestingLevelSuggestionState[];
    }
    /**
     * A particular location in the document.
     */
    interface Schema$Location {
        /**
         * The zero-based index, in UTF-16 code units.  The index is relative to the
         * beginning of the segment specified by segment_id.
         */
        index?: number;
        /**
         * The ID of the header, footer or footnote the location is in. An empty
         * segment ID signifies the document&#39;s body.
         */
        segmentId?: string;
    }
    /**
     * A collection of Ranges with the same named range ID.  Named ranges allow
     * developers to associate parts of a document with an arbitrary user-defined
     * label so their contents can be programmatically read or edited at a later
     * time. A document can contain multiple named ranges with the same name, but
     * every named range has a unique ID.  A named range is created with a single
     * Range, and content inserted inside a named range generally expands that
     * range. However, certain document changes can cause the range to be split
     * into multiple ranges.  Named ranges are not private. All applications and
     * collaborators that have access to the document can see its named ranges.
     */
    interface Schema$NamedRange {
        /**
         * The name of the named range.
         */
        name?: string;
        /**
         * The ID of the named range.
         */
        namedRangeId?: string;
        /**
         * The ranges that belong to this named range.
         */
        ranges?: Schema$Range[];
    }
    /**
     * A collection of all the NamedRanges in the document that share a given
     * name.
     */
    interface Schema$NamedRanges {
        /**
         * The name that all the named ranges share.
         */
        name?: string;
        /**
         * The NamedRanges that share the same name.
         */
        namedRanges?: Schema$NamedRange[];
    }
    /**
     * A named style. Paragraphs in the document can inherit their TextStyle and
     * ParagraphStyle from this named style when they have the same named style
     * type.
     */
    interface Schema$NamedStyle {
        /**
         * The type of this named style.
         */
        namedStyleType?: string;
        /**
         * The paragraph style of this named style.
         */
        paragraphStyle?: Schema$ParagraphStyle;
        /**
         * The text style of this named style.
         */
        textStyle?: Schema$TextStyle;
    }
    /**
     * The named styles. Paragraphs in the document can inherit their TextStyle
     * and ParagraphStyle from these named styles.
     */
    interface Schema$NamedStyles {
        /**
         * The named styles.  There is an entry for each of the possible named style
         * types.
         */
        styles?: Schema$NamedStyle[];
    }
    /**
     * The suggestion state of a NamedStyles message.
     */
    interface Schema$NamedStylesSuggestionState {
        /**
         * A mask that indicates which of the fields on the corresponding NamedStyle
         * in styles have been changed in this suggestion.  The order of these named
         * style suggestion states match the order of the corresponding named style
         * within the named styles suggestion.
         */
        stylesSuggestionStates?: Schema$NamedStyleSuggestionState[];
    }
    /**
     * A suggestion state of a NamedStyle message.
     */
    interface Schema$NamedStyleSuggestionState {
        /**
         * The named style type that this suggestion state corresponds to.  This
         * field is provided as a convenience for matching the
         * NamedStyleSuggestionState with its corresponding NamedStyle.
         */
        namedStyleType?: string;
        /**
         * A mask that indicates which of the fields in paragraph style have been
         * changed in this suggestion.
         */
        paragraphStyleSuggestionState?: Schema$ParagraphStyleSuggestionState;
        /**
         * A mask that indicates which of the fields in text style have been changed
         * in this suggestion.
         */
        textStyleSuggestionState?: Schema$TextStyleSuggestionState;
    }
    /**
     * Contains properties describing the look and feel of a list bullet at a
     * given level of nesting.
     */
    interface Schema$NestingLevel {
        /**
         * The alignment of the bullet within the space allotted for rendering the
         * bullet.
         */
        bulletAlignment?: string;
        /**
         * The format string used by bullets at this level of nesting.  The glyph
         * format contains one or more placeholders, and these placeholder are
         * replaced with the appropriate values depending on the glyph_type or
         * glyph_symbol. The placeholders follow the pattern `%[nesting_level]`.
         * Furthermore, placeholders can have prefixes and suffixes. Thus, the glyph
         * format follows the pattern
         * `&lt;prefix&gt;%[nesting_level]&lt;suffix&gt;`. Note that the prefix and
         * suffix are optional and can be arbitrary strings.  For example, the glyph
         * format `%0.` indicates that the rendered glyph will replace the
         * placeholder with the corresponding glyph for nesting level 0 followed by
         * a period as the suffix. So a list with a glyph type of UPPER_ALPHA and
         * glyph format `%0.` at nesting level 0 will result in a list with rendered
         * glyphs &lt;p&gt;`A.` &lt;p&gt;`B.` &lt;p&gt;`C.`  The glyph format can
         * contain placeholders for the current nesting level as well as
         * placeholders for parent nesting levels. For example, a list can have a
         * glyph format of `%0.` at nesting level 0 and a glyph format of `%0.%1.`
         * at nesting level 1. Assuming both nesting levels have DECIMAL glyph
         * types, this would result in a list with rendered glyphs &lt;p&gt;`1.`
         * &lt;p&gt;`2.` &lt;p&gt;`  2.1.` &lt;p&gt;`  2.2.` &lt;p&gt;`3.`  For
         * nesting levels that are ordered, the string that replaces a placeholder
         * in the glyph format for a particular paragraph depends on the
         * paragraph&#39;s order within the list.
         */
        glyphFormat?: string;
        /**
         * A custom glyph symbol used by bullets when paragraphs at this level of
         * nesting are unordered.  The glyph symbol replaces placeholders within the
         * glyph_format. For example, if the glyph_symbol is the solid circle
         * corresponding to Unicode U+25cf code point and the glyph_format is `%0`,
         * the rendered glyph would be the solid circle.
         */
        glyphSymbol?: string;
        /**
         * The type of glyph used by bullets when paragraphs at this level of
         * nesting are ordered.  The glyph type determines the type of glyph used to
         * replace placeholders within the glyph_format when paragraphs at this
         * level of nesting are ordered. For example, if the nesting level is 0, the
         * glyph_format is `%0.` and the glyph type is DECIMAL, then the rendered
         * glyph would replace the placeholder `%0` in the glyph format with a
         * number corresponding to list item&#39;s order within the list.
         */
        glyphType?: string;
        /**
         * The amount of indentation for the first line of paragraphs at this level
         * of nesting.
         */
        indentFirstLine?: Schema$Dimension;
        /**
         * The amount of indentation for paragraphs at this level of nesting.
         * Applied to the side that corresponds to the start of the text, based on
         * the paragraph&#39;s content direction.
         */
        indentStart?: Schema$Dimension;
        /**
         * The number of the first list item at this nesting level.  A value of 0 is
         * treated as a value of 1 for lettered lists and roman numeraled lists,
         * i.e. for values of both 0 and 1, lettered and roman numeraled lists will
         * begin at `a` and `i` respectively.  This value is ignored for nesting
         * levels with unordered glyphs.
         */
        startNumber?: number;
        /**
         * The text style of bullets at this level of nesting.
         */
        textStyle?: Schema$TextStyle;
    }
    /**
     * A mask that indicates which of the fields on the base NestingLevel have
     * been changed in this suggestion. For any field set to true, there is a new
     * suggested value.
     */
    interface Schema$NestingLevelSuggestionState {
        /**
         * Indicates if there was a suggested change to bullet_alignment.
         */
        bulletAlignmentSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to glyph_format.
         */
        glyphFormatSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to glyph_symbol.
         */
        glyphSymbolSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to glyph_type.
         */
        glyphTypeSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to indent_first_line.
         */
        indentFirstLineSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to indent_start.
         */
        indentStartSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to start_number.
         */
        startNumberSuggested?: boolean;
        /**
         * A mask that indicates which of the fields in text style have been changed
         * in this suggestion.
         */
        textStyleSuggestionState?: Schema$TextStyleSuggestionState;
    }
    /**
     * A collection of object IDs.
     */
    interface Schema$ObjectReferences {
        /**
         * The object IDs.
         */
        objectIds?: string[];
    }
    /**
     * A color that can either be fully opaque or fully transparent.
     */
    interface Schema$OptionalColor {
        /**
         * If set, this will be used as an opaque color. If unset, this represents a
         * transparent color.
         */
        color?: Schema$Color;
    }
    /**
     * A ParagraphElement representing a page break. A page break makes the
     * subsequent text start at the top of the next page.
     */
    interface Schema$PageBreak {
        /**
         * The suggested deletion IDs. If empty, then there are no suggested
         * deletions of this content.
         */
        suggestedDeletionIds?: string[];
        /**
         * The suggested insertion IDs. A PageBreak may have multiple insertion IDs
         * if it is a nested suggested change. If empty, then this is not a
         * suggested insertion.
         */
        suggestedInsertionIds?: string[];
        /**
         * The suggested text style changes to this PageBreak, keyed by suggestion
         * ID.
         */
        suggestedTextStyleChanges?: {
            [key: string]: Schema$SuggestedTextStyle;
        };
        /**
         * The text style of this PageBreak.  Similar to text content, like text
         * runs and footnote references, the text style of a page break can affect
         * content layout as well as the styling of text inserted adjacent to it.
         */
        textStyle?: Schema$TextStyle;
    }
    /**
     * A StructuralElement representing a paragraph. A paragraph is a range of
     * content that is terminated with a newline character.
     */
    interface Schema$Paragraph {
        /**
         * The bullet for this paragraph. If not present, the paragraph does not
         * belong to a list.
         */
        bullet?: Schema$Bullet;
        /**
         * The content of the paragraph broken down into its component parts.
         */
        elements?: Schema$ParagraphElement[];
        /**
         * The style of this paragraph.
         */
        paragraphStyle?: Schema$ParagraphStyle;
        /**
         * The IDs of the positioned objects tethered to this paragraph.
         */
        positionedObjectIds?: string[];
        /**
         * The suggested changes to this paragraph&#39;s bullet.
         */
        suggestedBulletChanges?: {
            [key: string]: Schema$SuggestedBullet;
        };
        /**
         * The suggested paragraph style changes to this paragraph, keyed by
         * suggestion ID.
         */
        suggestedParagraphStyleChanges?: {
            [key: string]: Schema$SuggestedParagraphStyle;
        };
        /**
         * The IDs of the positioned objects that are suggested to be attached to
         * this paragraph, keyed by suggestion ID.
         */
        suggestedPositionedObjectIds?: {
            [key: string]: Schema$ObjectReferences;
        };
    }
    /**
     * A border around a paragraph.
     */
    interface Schema$ParagraphBorder {
        /**
         * The color of the border.
         */
        color?: Schema$OptionalColor;
        /**
         * The dash style of the border.
         */
        dashStyle?: string;
        /**
         * The padding of the border.
         */
        padding?: Schema$Dimension;
        /**
         * The width of the border.
         */
        width?: Schema$Dimension;
    }
    /**
     * A ParagraphElement describes content within a Paragraph.
     */
    interface Schema$ParagraphElement {
        /**
         * An auto text paragraph element.
         */
        autoText?: Schema$AutoText;
        /**
         * A column break paragraph element.
         */
        columnBreak?: Schema$ColumnBreak;
        /**
         * The zero-base end index of this paragraph element, exclusive, in UTF-16
         * code units.
         */
        endIndex?: number;
        /**
         * An equation paragraph element.
         */
        equation?: Schema$Equation;
        /**
         * A footnote reference paragraph element.
         */
        footnoteReference?: Schema$FootnoteReference;
        /**
         * A horizontal rule paragraph element.
         */
        horizontalRule?: Schema$HorizontalRule;
        /**
         * An inline object paragraph element.
         */
        inlineObjectElement?: Schema$InlineObjectElement;
        /**
         * A page break paragraph element.
         */
        pageBreak?: Schema$PageBreak;
        /**
         * The zero-based start index of this paragraph element, in UTF-16 code
         * units.
         */
        startIndex?: number;
        /**
         * A text run paragraph element.
         */
        textRun?: Schema$TextRun;
    }
    /**
     * Styles that apply to a whole paragraph.  Inherited paragraph styles are
     * represented as unset fields in this message. A paragraph style&#39;s parent
     * depends on where the paragraph style is defined:    * The ParagraphStyle on
     * a Paragraph     inherits from the paragraph&#39;s corresponding named style
     * type.   * The ParagraphStyle on a named style     inherits from the normal
     * text named style.   * The ParagraphStyle of the normal text named style
     * inherits     from the default paragraph style in the Docs editor.   * The
     * ParagraphStyle on a Paragraph     element that is contained in a table may
     * inherit its paragraph style from     the table style.  If the paragraph
     * style does not inherit from a parent, unsetting fields will revert the
     * style to a value matching the defaults in the Docs editor.
     */
    interface Schema$ParagraphStyle {
        /**
         * The text alignment for this paragraph.
         */
        alignment?: string;
        /**
         * Whether to avoid widows and orphans for the paragraph. If unset, the
         * value is inherited from the parent.
         */
        avoidWidowAndOrphan?: boolean;
        /**
         * The border between this paragraph and the next and previous paragraphs.
         * If unset, the value is inherited from the parent.  The between border is
         * rendered when the adjacent paragraph has the same border and indent
         * properties.  Paragraph borders cannot be partially updated. When making
         * changes to a paragraph border the new border must be specified in its
         * entirety.
         */
        borderBetween?: Schema$ParagraphBorder;
        /**
         * The border at the bottom of this paragraph. If unset, the value is
         * inherited from the parent.  The bottom border is rendered when the
         * paragraph below has different border and indent properties.  Paragraph
         * borders cannot be partially updated. When making changes to a paragraph
         * border the new border must be specified in its entirety.
         */
        borderBottom?: Schema$ParagraphBorder;
        /**
         * The border to the left of this paragraph. If unset, the value is
         * inherited from the parent.  Paragraph borders cannot be partially
         * updated. When making changes to a paragraph border the new border must be
         * specified in its entirety.
         */
        borderLeft?: Schema$ParagraphBorder;
        /**
         * The border to the right of this paragraph. If unset, the value is
         * inherited from the parent.  Paragraph borders cannot be partially
         * updated. When making changes to a paragraph border the new border must be
         * specified in its entirety.
         */
        borderRight?: Schema$ParagraphBorder;
        /**
         * The border at the top of this paragraph. If unset, the value is inherited
         * from the parent.  The top border is rendered when the paragraph above has
         * different border and indent properties.  Paragraph borders cannot be
         * partially updated. When making changes to a paragraph border the new
         * border must be specified in its entirety.
         */
        borderTop?: Schema$ParagraphBorder;
        /**
         * The text direction of this paragraph. If unset, the value defaults to
         * LEFT_TO_RIGHT since paragraph direction is not inherited.
         */
        direction?: string;
        /**
         * The heading ID of the paragraph. If empty, then this paragraph is not a
         * heading. This property is read-only.
         */
        headingId?: string;
        /**
         * The amount of indentation for the paragraph on the side that corresponds
         * to the end of the text, based on the current paragraph direction. If
         * unset, the value is inherited from the parent.
         */
        indentEnd?: Schema$Dimension;
        /**
         * The amount of indentation for the first line of the paragraph. If unset,
         * the value is inherited from the parent.
         */
        indentFirstLine?: Schema$Dimension;
        /**
         * The amount of indentation for the paragraph on the side that corresponds
         * to the start of the text, based on the current paragraph direction. If
         * unset, the value is inherited from the parent.
         */
        indentStart?: Schema$Dimension;
        /**
         * Whether all lines of the paragraph should be laid out on the same page or
         * column if possible. If unset, the value is inherited from the parent.
         */
        keepLinesTogether?: boolean;
        /**
         * Whether at least a part of this paragraph should be laid out on the same
         * page or column as the next paragraph if possible. If unset, the value is
         * inherited from the parent.
         */
        keepWithNext?: boolean;
        /**
         * The amount of space between lines, as a percentage of normal, where
         * normal is represented as 100.0. If unset, the value is inherited from the
         * parent.
         */
        lineSpacing?: number;
        /**
         * The named style type of the paragraph.  Since updating the named style
         * type affects other properties within ParagraphStyle, the named style type
         * is applied before the other properties are updated.
         */
        namedStyleType?: string;
        /**
         * The shading of the paragraph. If unset, the value is inherited from the
         * parent.
         */
        shading?: Schema$Shading;
        /**
         * The amount of extra space above the paragraph. If unset, the value is
         * inherited from the parent.
         */
        spaceAbove?: Schema$Dimension;
        /**
         * The amount of extra space below the paragraph. If unset, the value is
         * inherited from the parent.
         */
        spaceBelow?: Schema$Dimension;
        /**
         * The spacing mode for the paragraph.
         */
        spacingMode?: string;
        /**
         * A list of the tab stops for this paragraph. The list of tab stops is not
         * inherited. This property is read-only.
         */
        tabStops?: Schema$TabStop[];
    }
    /**
     * A mask that indicates which of the fields on the base ParagraphStyle have
     * been changed in this suggestion. For any field set to true, there is a new
     * suggested value.
     */
    interface Schema$ParagraphStyleSuggestionState {
        /**
         * Indicates if there was a suggested change to alignment.
         */
        alignmentSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to avoid_widow_and_orphan.
         */
        avoidWidowAndOrphanSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to border_between.
         */
        borderBetweenSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to border_bottom.
         */
        borderBottomSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to border_left.
         */
        borderLeftSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to border_right.
         */
        borderRightSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to border_top.
         */
        borderTopSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to direction.
         */
        directionSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to heading_id.
         */
        headingIdSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to indent_end.
         */
        indentEndSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to indent_first_line.
         */
        indentFirstLineSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to indent_start.
         */
        indentStartSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to keep_lines_together.
         */
        keepLinesTogetherSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to keep_with_next.
         */
        keepWithNextSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to line_spacing.
         */
        lineSpacingSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to named_style_type.
         */
        namedStyleTypeSuggested?: boolean;
        /**
         * A mask that indicates which of the fields in shading have been changed in
         * this suggestion.
         */
        shadingSuggestionState?: Schema$ShadingSuggestionState;
        /**
         * Indicates if there was a suggested change to space_above.
         */
        spaceAboveSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to space_below.
         */
        spaceBelowSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to spacing_mode.
         */
        spacingModeSuggested?: boolean;
    }
    /**
     * An object that is tethered to a Paragraph and positioned relative to the
     * beginning of the paragraph. A PositionedObject contains an EmbeddedObject
     * such as an image.
     */
    interface Schema$PositionedObject {
        /**
         * The ID of this positioned object.
         */
        objectId?: string;
        /**
         * The properties of this positioned object.
         */
        positionedObjectProperties?: Schema$PositionedObjectProperties;
        /**
         * The suggested deletion IDs. If empty, then there are no suggested
         * deletions of this content.
         */
        suggestedDeletionIds?: string[];
        /**
         * The suggested insertion ID. If empty, then this is not a suggested
         * insertion.
         */
        suggestedInsertionId?: string;
        /**
         * The suggested changes to the positioned object properties, keyed by
         * suggestion ID.
         */
        suggestedPositionedObjectPropertiesChanges?: {
            [key: string]: Schema$SuggestedPositionedObjectProperties;
        };
    }
    /**
     * The positioning of a PositionedObject. The positioned object is positioned
     * relative to the beginning of the Paragraph it is tethered to.
     */
    interface Schema$PositionedObjectPositioning {
        /**
         * The layout of this positioned object.
         */
        layout?: string;
        /**
         * The offset of the left edge of the positioned object relative to the
         * beginning of the Paragraph it is tethered to. The exact positioning of
         * the object can depend on other content in the document and the
         * document&#39;s styling.
         */
        leftOffset?: Schema$Dimension;
        /**
         * The offset of the top edge of the positioned object relative to the
         * beginning of the Paragraph it is tethered to. The exact positioning of
         * the object can depend on other content in the document and the
         * document&#39;s styling.
         */
        topOffset?: Schema$Dimension;
    }
    /**
     * A mask that indicates which of the fields on the base
     * PositionedObjectPositioning have been changed in this suggestion. For any
     * field set to true, there is a new suggested value.
     */
    interface Schema$PositionedObjectPositioningSuggestionState {
        /**
         * Indicates if there was a suggested change to layout.
         */
        layoutSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to left_offset.
         */
        leftOffsetSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to top_offset.
         */
        topOffsetSuggested?: boolean;
    }
    /**
     * Properties of a PositionedObject.
     */
    interface Schema$PositionedObjectProperties {
        /**
         * The embedded object of this positioned object.
         */
        embeddedObject?: Schema$EmbeddedObject;
        /**
         * The positioning of this positioned object relative to the newline of the
         * Paragraph that references this positioned object.
         */
        positioning?: Schema$PositionedObjectPositioning;
    }
    /**
     * A mask that indicates which of the fields on the base
     * PositionedObjectProperties have been changed in this suggestion. For any
     * field set to true, there is a new suggested value.
     */
    interface Schema$PositionedObjectPropertiesSuggestionState {
        /**
         * A mask that indicates which of the fields in embedded_object have been
         * changed in this suggestion.
         */
        embeddedObjectSuggestionState?: Schema$EmbeddedObjectSuggestionState;
        /**
         * A mask that indicates which of the fields in positioning have been
         * changed in this suggestion.
         */
        positioningSuggestionState?: Schema$PositionedObjectPositioningSuggestionState;
    }
    /**
     * Specifies a contiguous range of text.
     */
    interface Schema$Range {
        /**
         * The zero-based end index of this range, exclusive, in UTF-16 code units.
         * In all current uses, an end index must be provided. This field is an
         * Int32Value in order to accommodate future use cases with open-ended
         * ranges.
         */
        endIndex?: number;
        /**
         * The ID of the header, footer or footnote that this range is contained in.
         * An empty segment ID signifies the document&#39;s body.
         */
        segmentId?: string;
        /**
         * The zero-based start index of this range, in UTF-16 code units.  In all
         * current uses, a start index must be provided. This field is an Int32Value
         * in order to accommodate future use cases with open-ended ranges.
         */
        startIndex?: number;
    }
    /**
     * Replaces all instances of text matching a criteria with replace text.
     */
    interface Schema$ReplaceAllTextRequest {
        /**
         * Finds text in the document matching this substring.
         */
        containsText?: Schema$SubstringMatchCriteria;
        /**
         * The text that will replace the matched text.
         */
        replaceText?: string;
    }
    /**
     * The result of replacing text.
     */
    interface Schema$ReplaceAllTextResponse {
        /**
         * The number of occurrences changed by replacing all text.
         */
        occurrencesChanged?: number;
    }
    /**
     * A single update to apply to a document.
     */
    interface Schema$Request {
        /**
         * Creates a named range.
         */
        createNamedRange?: Schema$CreateNamedRangeRequest;
        /**
         * Creates bullets for paragraphs.
         */
        createParagraphBullets?: Schema$CreateParagraphBulletsRequest;
        /**
         * Deletes content from the document.
         */
        deleteContentRange?: Schema$DeleteContentRangeRequest;
        /**
         * Deletes a named range.
         */
        deleteNamedRange?: Schema$DeleteNamedRangeRequest;
        /**
         * Deletes bullets from paragraphs.
         */
        deleteParagraphBullets?: Schema$DeleteParagraphBulletsRequest;
        /**
         * Deletes a positioned object from the document.
         */
        deletePositionedObject?: Schema$DeletePositionedObjectRequest;
        /**
         * Deletes a column from a table.
         */
        deleteTableColumn?: Schema$DeleteTableColumnRequest;
        /**
         * Deletes a row from a table.
         */
        deleteTableRow?: Schema$DeleteTableRowRequest;
        /**
         * Inserts an inline image at the specified location.
         */
        insertInlineImage?: Schema$InsertInlineImageRequest;
        /**
         * Inserts a page break at the specified location.
         */
        insertPageBreak?: Schema$InsertPageBreakRequest;
        /**
         * Inserts a table at the specified location.
         */
        insertTable?: Schema$InsertTableRequest;
        /**
         * Inserts an empty row into a table.
         */
        insertTableRow?: Schema$InsertTableRowRequest;
        /**
         * Inserts text at the specified location.
         */
        insertText?: Schema$InsertTextRequest;
        /**
         * Replaces all instances of the specified text.
         */
        replaceAllText?: Schema$ReplaceAllTextRequest;
        /**
         * Updates the paragraph style at the specified range.
         */
        updateParagraphStyle?: Schema$UpdateParagraphStyleRequest;
        /**
         * Updates the text style at the specified range.
         */
        updateTextStyle?: Schema$UpdateTextStyleRequest;
    }
    /**
     * A single response from an update.
     */
    interface Schema$Response {
        /**
         * The result of creating a named range.
         */
        createNamedRange?: Schema$CreateNamedRangeResponse;
        /**
         * The result of inserting an inline image.
         */
        insertInlineImage?: Schema$InsertInlineImageResponse;
        /**
         * The result of inserting an inline Google Sheets chart.
         */
        insertInlineSheetsChart?: Schema$InsertInlineSheetsChartResponse;
        /**
         * The result of replacing text.
         */
        replaceAllText?: Schema$ReplaceAllTextResponse;
    }
    /**
     * An RGB color.
     */
    interface Schema$RgbColor {
        /**
         * The blue component of the color, from 0.0 to 1.0.
         */
        blue?: number;
        /**
         * The green component of the color, from 0.0 to 1.0.
         */
        green?: number;
        /**
         * The red component of the color, from 0.0 to 1.0.
         */
        red?: number;
    }
    /**
     * A StructuralElement representing a section break. A section is a range of
     * content which has the same SectionStyle. A section break represents the
     * start of a new section, and the section style applies to the section after
     * the section break.  The document body always begins with a section break.
     */
    interface Schema$SectionBreak {
        /**
         * The style of the section after this section break.
         */
        sectionStyle?: Schema$SectionStyle;
        /**
         * The suggested deletion IDs. If empty, then there are no suggested
         * deletions of this content.
         */
        suggestedDeletionIds?: string[];
        /**
         * The suggested insertion IDs. A SectionBreak may have multiple insertion
         * IDs if it is a nested suggested change. If empty, then this is not a
         * suggested insertion.
         */
        suggestedInsertionIds?: string[];
    }
    /**
     * Properties that apply to a section&#39;s column.
     */
    interface Schema$SectionColumnProperties {
        /**
         * The padding at the end of the column.
         */
        paddingEnd?: Schema$Dimension;
        /**
         * The width of the column.
         */
        width?: Schema$Dimension;
    }
    /**
     * The styling that applies to a section.
     */
    interface Schema$SectionStyle {
        /**
         * The section&#39;s columns properties.  If empty, the section contains one
         * column with the default properties in the Docs editor.
         */
        columnProperties?: Schema$SectionColumnProperties[];
        /**
         * The style of column separators.  This style can be set even when there is
         * one column in the section.
         */
        columnSeparatorStyle?: string;
        /**
         * The content direction of this section. If unset, the value defaults to
         * LEFT_TO_RIGHT.
         */
        contentDirection?: string;
    }
    /**
     * The shading of a paragraph.
     */
    interface Schema$Shading {
        /**
         * The background color of this paragraph shading.
         */
        backgroundColor?: Schema$OptionalColor;
    }
    /**
     * A mask that indicates which of the fields on the base Shading have been
     * changed in this suggested change. For any field set to true, there is a new
     * suggested value.
     */
    interface Schema$ShadingSuggestionState {
        /**
         * Indicates if there was a suggested change to the Shading.
         */
        backgroundColorSuggested?: boolean;
    }
    /**
     * A reference to a linked chart embedded from Google Sheets.
     */
    interface Schema$SheetsChartReference {
        /**
         * The ID of the specific chart in the Google Sheets spreadsheet that is
         * embedded.
         */
        chartId?: number;
        /**
         * The ID of the Google Sheets spreadsheet that contains the source chart.
         */
        spreadsheetId?: string;
    }
    /**
     * A mask that indicates which of the fields on the base SheetsChartReference
     * have been changed in this suggestion. For any field set to true, there is a
     * new suggested value.
     */
    interface Schema$SheetsChartReferenceSuggestionState {
        /**
         * Indicates if there was a suggested change to chart_id.
         */
        chartIdSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to spreadsheet_id.
         */
        spreadsheetIdSuggested?: boolean;
    }
    /**
     * A width and height.
     */
    interface Schema$Size {
        /**
         * The height of the object.
         */
        height?: Schema$Dimension;
        /**
         * The width of the object.
         */
        width?: Schema$Dimension;
    }
    /**
     * A mask that indicates which of the fields on the base Size have been
     * changed in this suggestion. For any field set to true, the Size has a new
     * suggested value.
     */
    interface Schema$SizeSuggestionState {
        /**
         * Indicates if there was a suggested change to height.
         */
        heightSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to width.
         */
        widthSuggested?: boolean;
    }
    /**
     * A StructuralElement describes content that provides structure to the
     * document.
     */
    interface Schema$StructuralElement {
        /**
         * The zero-based end index of this structural element, exclusive, in UTF-16
         * code units.
         */
        endIndex?: number;
        /**
         * A paragraph type of structural element.
         */
        paragraph?: Schema$Paragraph;
        /**
         * A section break type of structural element.
         */
        sectionBreak?: Schema$SectionBreak;
        /**
         * The zero-based start index of this structural element, in UTF-16 code
         * units.
         */
        startIndex?: number;
        /**
         * A table type of structural element.
         */
        table?: Schema$Table;
        /**
         * A table of contents type of structural element.
         */
        tableOfContents?: Schema$TableOfContents;
    }
    /**
     * A criteria that matches a specific string of text in the document.
     */
    interface Schema$SubstringMatchCriteria {
        /**
         * Indicates whether the search should respect case:  - `True`: the search
         * is case sensitive. - `False`: the search is case insensitive.
         */
        matchCase?: boolean;
        /**
         * The text to search for in the document.
         */
        text?: string;
    }
    /**
     * A suggested change to a Bullet.
     */
    interface Schema$SuggestedBullet {
        /**
         * A Bullet that only includes the changes made in this suggestion. This can
         * be used along with the bullet_suggestion_state to see which fields have
         * changed and their new values.
         */
        bullet?: Schema$Bullet;
        /**
         * A mask that indicates which of the fields on the base Bullet have been
         * changed in this suggestion.
         */
        bulletSuggestionState?: Schema$BulletSuggestionState;
    }
    /**
     * A suggested change to the DocumentStyle.
     */
    interface Schema$SuggestedDocumentStyle {
        /**
         * A DocumentStyle that only includes the changes made in this suggestion.
         * This can be used along with the document_style_suggestion_state to see
         * which fields have changed and their new values.
         */
        documentStyle?: Schema$DocumentStyle;
        /**
         * A mask that indicates which of the fields on the base DocumentStyle have
         * been changed in this suggestion.
         */
        documentStyleSuggestionState?: Schema$DocumentStyleSuggestionState;
    }
    /**
     * A suggested change to InlineObjectProperties.
     */
    interface Schema$SuggestedInlineObjectProperties {
        /**
         * An InlineObjectProperties that only includes the changes made in this
         * suggestion. This can be used along with the
         * inline_object_properties_suggestion_state to see which fields have
         * changed and their new values.
         */
        inlineObjectProperties?: Schema$InlineObjectProperties;
        /**
         * A mask that indicates which of the fields on the base
         * InlineObjectProperties have been changed in this suggestion.
         */
        inlineObjectPropertiesSuggestionState?: Schema$InlineObjectPropertiesSuggestionState;
    }
    /**
     * A suggested change to ListProperties.
     */
    interface Schema$SuggestedListProperties {
        /**
         * A ListProperties that only includes the changes made in this suggestion.
         * This can be used along with the list_properties_suggestion_state to see
         * which fields have changed and their new values.
         */
        listProperties?: Schema$ListProperties;
        /**
         * A mask that indicates which of the fields on the base ListProperties have
         * been changed in this suggestion.
         */
        listPropertiesSuggestionState?: Schema$ListPropertiesSuggestionState;
    }
    /**
     * A suggested change to the NamedStyles.
     */
    interface Schema$SuggestedNamedStyles {
        /**
         * A NamedStyles that only includes the changes made in this suggestion.
         * This can be used along with the named_styles_suggestion_state to see
         * which fields have changed and their new values.
         */
        namedStyles?: Schema$NamedStyles;
        /**
         * A mask that indicates which of the fields on the base NamedStyles have
         * been changed in this suggestion.
         */
        namedStylesSuggestionState?: Schema$NamedStylesSuggestionState;
    }
    /**
     * A suggested change to a ParagraphStyle.
     */
    interface Schema$SuggestedParagraphStyle {
        /**
         * A ParagraphStyle that only includes the changes made in this suggestion.
         * This can be used along with the paragraph_suggestion_state to see which
         * fields have changed and their new values.
         */
        paragraphStyle?: Schema$ParagraphStyle;
        /**
         * A mask that indicates which of the fields on the base ParagraphStyle have
         * been changed in this suggestion.
         */
        paragraphStyleSuggestionState?: Schema$ParagraphStyleSuggestionState;
    }
    /**
     * A suggested change to PositionedObjectProperties.
     */
    interface Schema$SuggestedPositionedObjectProperties {
        /**
         * A PositionedObjectProperties that only includes the changes made in this
         * suggestion. This can be used along with the
         * positioned_object_properties_suggestion_state to see which fields have
         * changed and their new values.
         */
        positionedObjectProperties?: Schema$PositionedObjectProperties;
        /**
         * A mask that indicates which of the fields on the base
         * PositionedObjectProperties have been changed in this suggestion.
         */
        positionedObjectPropertiesSuggestionState?: Schema$PositionedObjectPropertiesSuggestionState;
    }
    /**
     * A suggested change to a TableCellStyle.
     */
    interface Schema$SuggestedTableCellStyle {
        /**
         * A TableCellStyle that only includes the changes made in this suggestion.
         * This can be used along with the table_cell_style_suggestion_state to see
         * which fields have changed and their new values.
         */
        tableCellStyle?: Schema$TableCellStyle;
        /**
         * A mask that indicates which of the fields on the base TableCellStyle have
         * been changed in this suggestion.
         */
        tableCellStyleSuggestionState?: Schema$TableCellStyleSuggestionState;
    }
    /**
     * A suggested change to a TableRowStyle.
     */
    interface Schema$SuggestedTableRowStyle {
        /**
         * A TableRowStyle that only includes the changes made in this suggestion.
         * This can be used along with the table_row_style_suggestion_state to see
         * which fields have changed and their new values.
         */
        tableRowStyle?: Schema$TableRowStyle;
        /**
         * A mask that indicates which of the fields on the base TableRowStyle have
         * been changed in this suggestion.
         */
        tableRowStyleSuggestionState?: Schema$TableRowStyleSuggestionState;
    }
    /**
     * A suggested change to a TextStyle.
     */
    interface Schema$SuggestedTextStyle {
        /**
         * A TextStyle that only includes the changes made in this suggestion. This
         * can be used along with the text_style_suggestion_state to see which
         * fields have changed and their new values.
         */
        textStyle?: Schema$TextStyle;
        /**
         * A mask that indicates which of the fields on the base TextStyle have been
         * changed in this suggestion.
         */
        textStyleSuggestionState?: Schema$TextStyleSuggestionState;
    }
    /**
     * A StructuralElement representing a table.
     */
    interface Schema$Table {
        /**
         * Number of columns in the table.  It is possible for a table to be
         * non-rectangular, so some rows may have a different number of cells.
         */
        columns?: number;
        /**
         * Number of rows in the table.
         */
        rows?: number;
        /**
         * The suggested deletion IDs. If empty, then there are no suggested
         * deletions of this content.
         */
        suggestedDeletionIds?: string[];
        /**
         * The suggested insertion IDs. A Table may have multiple insertion IDs if
         * it is a nested suggested change. If empty, then this is not a suggested
         * insertion.
         */
        suggestedInsertionIds?: string[];
        /**
         * The contents and style of each row.
         */
        tableRows?: Schema$TableRow[];
        /**
         * The style of the table.
         */
        tableStyle?: Schema$TableStyle;
    }
    /**
     * The contents and style of a cell in a Table.
     */
    interface Schema$TableCell {
        /**
         * The content of the cell.
         */
        content?: Schema$StructuralElement[];
        /**
         * The zero-based end index of this cell, exclusive, in UTF-16 code units.
         */
        endIndex?: number;
        /**
         * The zero-based start index of this cell, in UTF-16 code units.
         */
        startIndex?: number;
        /**
         * The suggested deletion IDs. If empty, then there are no suggested
         * deletions of this content.
         */
        suggestedDeletionIds?: string[];
        /**
         * The suggested insertion IDs. A TableCell may have multiple insertion IDs
         * if it is a nested suggested change. If empty, then this is not a
         * suggested insertion.
         */
        suggestedInsertionIds?: string[];
        /**
         * The suggested changes to the table cell style, keyed by suggestion ID.
         */
        suggestedTableCellStyleChanges?: {
            [key: string]: Schema$SuggestedTableCellStyle;
        };
        /**
         * The style of the cell.
         */
        tableCellStyle?: Schema$TableCellStyle;
    }
    /**
     * A border around a table cell.
     */
    interface Schema$TableCellBorder {
        /**
         * The color of the border.
         */
        color?: Schema$OptionalColor;
        /**
         * The dash style of the border.
         */
        dashStyle?: string;
        /**
         * The width of the border.
         */
        width?: Schema$Dimension;
    }
    /**
     * Location of a single cell within a table.
     */
    interface Schema$TableCellLocation {
        /**
         * The zero-based column index. For example, the second column in the table
         * has a column index of 1.
         */
        columnIndex?: number;
        /**
         * The zero-based row index. For example, the second row in the table has a
         * row index of 1.
         */
        rowIndex?: number;
        /**
         * The location where the table starts in the document.
         */
        tableStartLocation?: Schema$Location;
    }
    /**
     * The style of a TableCell.  Inherited table cell styles are represented as
     * unset fields in this message. A table cell style can inherit from the
     * table&#39;s style.
     */
    interface Schema$TableCellStyle {
        /**
         * The background color of the cell.
         */
        backgroundColor?: Schema$OptionalColor;
        /**
         * The bottom border of the cell.
         */
        borderBottom?: Schema$TableCellBorder;
        /**
         * The left border of the cell.
         */
        borderLeft?: Schema$TableCellBorder;
        /**
         * The right border of the cell.
         */
        borderRight?: Schema$TableCellBorder;
        /**
         * The top border of the cell.
         */
        borderTop?: Schema$TableCellBorder;
        /**
         * The column span of the cell. This property is read-only.
         */
        columnSpan?: number;
        /**
         * The alignment of the content in the table cell. The default alignment
         * matches the alignment for newly created table cells in the Docs editor.
         */
        contentAlignment?: string;
        /**
         * The bottom padding of the cell.
         */
        paddingBottom?: Schema$Dimension;
        /**
         * The left padding of the cell.
         */
        paddingLeft?: Schema$Dimension;
        /**
         * The right padding of the cell.
         */
        paddingRight?: Schema$Dimension;
        /**
         * The top padding of the cell.
         */
        paddingTop?: Schema$Dimension;
        /**
         * The row span of the cell. This property is read-only.
         */
        rowSpan?: number;
    }
    /**
     * A mask that indicates which of the fields on the base TableCellStyle have
     * been changed in this suggestion. For any field set to true, there is a new
     * suggested value.
     */
    interface Schema$TableCellStyleSuggestionState {
        /**
         * Indicates if there was a suggested change to background_color.
         */
        backgroundColorSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to border_bottom.
         */
        borderBottomSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to border_left.
         */
        borderLeftSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to border_right.
         */
        borderRightSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to border_top.
         */
        borderTopSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to column_span.
         */
        columnSpanSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to content_alignment.
         */
        contentAlignmentSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to padding_bottom.
         */
        paddingBottomSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to padding_left.
         */
        paddingLeftSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to padding_right.
         */
        paddingRightSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to padding_top.
         */
        paddingTopSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to row_span.
         */
        rowSpanSuggested?: boolean;
    }
    /**
     * The properties of a column in a table.
     */
    interface Schema$TableColumnProperties {
        /**
         * The width of the column. Set when the column&#39;s `width_type` is
         * FIXED_WIDTH.
         */
        width?: Schema$Dimension;
        /**
         * The width type of the column.
         */
        widthType?: string;
    }
    /**
     * A StructuralElement representing a table of contents.
     */
    interface Schema$TableOfContents {
        /**
         * The content of the table of contents.
         */
        content?: Schema$StructuralElement[];
        /**
         * The suggested deletion IDs. If empty, then there are no suggested
         * deletions of this content.
         */
        suggestedDeletionIds?: string[];
        /**
         * The suggested insertion IDs. A TableOfContents may have multiple
         * insertion IDs if it is a nested suggested change. If empty, then this is
         * not a suggested insertion.
         */
        suggestedInsertionIds?: string[];
    }
    /**
     * The contents and style of a row in a Table.
     */
    interface Schema$TableRow {
        /**
         * The zero-based end index of this row, exclusive, in UTF-16 code units.
         */
        endIndex?: number;
        /**
         * The zero-based start index of this row, in UTF-16 code units.
         */
        startIndex?: number;
        /**
         * The suggested deletion IDs. If empty, then there are no suggested
         * deletions of this content.
         */
        suggestedDeletionIds?: string[];
        /**
         * The suggested insertion IDs. A TableRow may have multiple insertion IDs
         * if it is a nested suggested change. If empty, then this is not a
         * suggested insertion.
         */
        suggestedInsertionIds?: string[];
        /**
         * The suggested style changes to this row, keyed by suggestion ID.
         */
        suggestedTableRowStyleChanges?: {
            [key: string]: Schema$SuggestedTableRowStyle;
        };
        /**
         * The contents and style of each cell in this row.  It is possible for a
         * table to be non-rectangular, so some rows may have a different number of
         * cells than other rows in the same table.
         */
        tableCells?: Schema$TableCell[];
        /**
         * The style of the table row.
         */
        tableRowStyle?: Schema$TableRowStyle;
    }
    /**
     * Styles that apply to a table row.
     */
    interface Schema$TableRowStyle {
        /**
         * The minimum height of the row. The row will be rendered in the Docs
         * editor at a height equal to or greater than this value in order to show
         * all the content in the row&#39;s cells.
         */
        minRowHeight?: Schema$Dimension;
    }
    /**
     * A mask that indicates which of the fields on the base TableRowStyle have
     * been changed in this suggestion. For any field set to true, there is a new
     * suggested value.
     */
    interface Schema$TableRowStyleSuggestionState {
        /**
         * Indicates if there was a suggested change to min_row_height.
         */
        minRowHeightSuggested?: boolean;
    }
    /**
     * Styles that apply to a table.
     */
    interface Schema$TableStyle {
        /**
         * The properties of each column.  Note that in Docs, tables contain rows
         * and rows contain cells, similar to HTML. So the properties for a row can
         * be found on the row&#39;s table_row_style.
         */
        tableColumnProperties?: Schema$TableColumnProperties[];
    }
    /**
     * A tab stop within a paragraph.
     */
    interface Schema$TabStop {
        /**
         * The alignment of this tab stop. If unset, the value defaults to START.
         */
        alignment?: string;
        /**
         * The offset between this tab stop and the start margin.
         */
        offset?: Schema$Dimension;
    }
    /**
     * A ParagraphElement that represents a run of text that all has the same
     * styling.
     */
    interface Schema$TextRun {
        /**
         * The text of this run.  Any non-text elements in the run are replaced with
         * the Unicode character U+E907.
         */
        content?: string;
        /**
         * The suggested deletion IDs. If empty, then there are no suggested
         * deletions of this content.
         */
        suggestedDeletionIds?: string[];
        /**
         * The suggested insertion IDs. A TextRun may have multiple insertion IDs if
         * it is a nested suggested change. If empty, then this is not a suggested
         * insertion.
         */
        suggestedInsertionIds?: string[];
        /**
         * The suggested text style changes to this run, keyed by suggestion ID.
         */
        suggestedTextStyleChanges?: {
            [key: string]: Schema$SuggestedTextStyle;
        };
        /**
         * The text style of this run.
         */
        textStyle?: Schema$TextStyle;
    }
    /**
     * Represents the styling that can be applied to text.  Inherited text styles
     * are represented as unset fields in this message. A text style&#39;s parent
     * depends on where the text style is defined:    * The TextStyle of text in a
     * Paragraph     inherits from the paragraph&#39;s corresponding named style
     * type.   * The TextStyle on a named style     inherits from the normal text
     * named style.   * The TextStyle of the normal text named style inherits from
     * the default text style in the Docs editor.   * The TextStyle on a Paragraph
     * element     that is contained in a table may inherit its text style from
     * the table     style.  If the text style does not inherit from a parent,
     * unsetting fields will revert the style to a value matching the defaults in
     * the Docs editor.
     */
    interface Schema$TextStyle {
        /**
         * The background color of the text. If set, the color is either an RGB
         * color or transparent, depending on the `color` field.
         */
        backgroundColor?: Schema$OptionalColor;
        /**
         * The text&#39;s vertical offset from its normal position.  Text with
         * `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is automatically rendered
         * in a smaller font size, computed based on the `font_size` field. The
         * `font_size` itself is not affected by changes in this field.
         */
        baselineOffset?: string;
        /**
         * Whether or not the text is rendered as bold.
         */
        bold?: boolean;
        /**
         * The size of the text&#39;s font.
         */
        fontSize?: Schema$Dimension;
        /**
         * The foreground color of the text. If set, the color is either an RGB
         * color or transparent, depending on the `color` field.
         */
        foregroundColor?: Schema$OptionalColor;
        /**
         * Whether or not the text is italicized.
         */
        italic?: boolean;
        /**
         * The hyperlink destination of the text. If unset, there is no link. Links
         * are not inherited from parent text.  Changing the link in an update
         * request causes some other changes to the text style of the range:  * When
         * setting a link, the text foreground color will be updated to the default
         * link color and the text will be underlined. If these fields are modified
         * in the same request, those values will be used instead of the   link
         * defaults. * Setting a link on a text range that overlaps with an existing
         * link will   also update the existing link to point to the new URL. *
         * Links are not settable on newline characters. As a result, setting a link
         * on a text range that crosses a paragraph boundary, such as
         * `&quot;ABCx/123&quot;`,   will separate the newline character(s) into
         * their own text runs. The   link will be applied separately to the runs
         * before and after the newline. * Removing a link will update the text
         * style of the range to match the   style of the preceding text (or the
         * default text styles if the preceding   text is another link) unless
         * different styles are being set in the same   request.
         */
        link?: Schema$Link;
        /**
         * Whether or not the text is in small capital letters.
         */
        smallCaps?: boolean;
        /**
         * Whether or not the text is struck through.
         */
        strikethrough?: boolean;
        /**
         * Whether or not the text is underlined.
         */
        underline?: boolean;
        /**
         * The font family and rendered weight of the text.  If an update request
         * specifies values for both `weighted_font_family` and `bold`, the
         * `weighted_font_family` is applied first, then `bold`.  If
         * `weighted_font_family#weight` is not set, it defaults to `400`.  If
         * `weighted_font_family` is set, then `weighted_font_family#font_family`
         * must also be set with a non-empty value. Otherwise, a 400 bad request
         * error is returned.
         */
        weightedFontFamily?: Schema$WeightedFontFamily;
    }
    /**
     * A mask that indicates which of the fields on the base TextStyle have been
     * changed in this suggestion. For any field set to true, there is a new
     * suggested value.
     */
    interface Schema$TextStyleSuggestionState {
        /**
         * Indicates if there was a suggested change to background_color.
         */
        backgroundColorSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to baseline_offset.
         */
        baselineOffsetSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to bold.
         */
        boldSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to font_size.
         */
        fontSizeSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to foreground_color.
         */
        foregroundColorSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to italic.
         */
        italicSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to link.
         */
        linkSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to small_caps.
         */
        smallCapsSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to strikethrough.
         */
        strikethroughSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to underline.
         */
        underlineSuggested?: boolean;
        /**
         * Indicates if there was a suggested change to weighted_font_family.
         */
        weightedFontFamilySuggested?: boolean;
    }
    /**
     * Update the styling of all paragraphs that overlap with the given range.
     */
    interface Schema$UpdateParagraphStyleRequest {
        /**
         * The fields that should be updated.  At least one field must be specified.
         * The root `paragraph_style` is implied and should not be specified.  For
         * example, to update the paragraph style&#39;s alignment property, set
         * `fields` to `&quot;alignment&quot;`.  To reset a property to its default
         * value, include its field name in the field mask but leave the field
         * itself unset.
         */
        fields?: string;
        /**
         * The styles to set on the paragraphs.  Certain paragraph style changes may
         * cause other changes in order to mirror the behavior of the Docs editor.
         * See the documentation of ParagraphStyle for more information.
         */
        paragraphStyle?: Schema$ParagraphStyle;
        /**
         * The range overlapping the paragraphs to style.
         */
        range?: Schema$Range;
    }
    /**
     * Update the styling of text.
     */
    interface Schema$UpdateTextStyleRequest {
        /**
         * The fields that should be updated.  At least one field must be specified.
         * The root `text_style` is implied and should not be specified. A single
         * `&quot;*&quot;` can be used as short-hand for listing every field.  For
         * example, to update the text style to bold, set `fields` to
         * `&quot;bold&quot;`.  To reset a property to its default value, include
         * its field name in the field mask but leave the field itself unset.
         */
        fields?: string;
        /**
         * The range of text to style.  The range may be extended to include
         * adjacent newlines.  If the range fully contains a paragraph belonging to
         * a list, the paragraph&#39;s bullet is also updated with the matching text
         * style.
         */
        range?: Schema$Range;
        /**
         * The styles to set on the text.  If the value for a particular style
         * matches that of the parent, that style will be set to inherit.  Certain
         * text style changes may cause other changes in order to to mirror the
         * behavior of the Docs editor. See the documentation of TextStyle for more
         * information.
         */
        textStyle?: Schema$TextStyle;
    }
    /**
     * Represents a font family and weight of text.
     */
    interface Schema$WeightedFontFamily {
        /**
         * The font family of the text.  The font family can be any font from the
         * Font menu in Docs or from [Google Fonts] (https://fonts.google.com/). If
         * the font name is unrecognized, the text is rendered in `Arial`.
         */
        fontFamily?: string;
        /**
         * The weight of the font. This field can have any value that is a multiple
         * of `100` between `100` and `900`, inclusive. This range corresponds to
         * the numerical values described in the CSS 2.1 Specification,
         * [section 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness),
         * with non-numerical values disallowed.  The default value is `400`
         * (&quot;normal&quot;).  The font weight makes up just one component of the
         * rendered font weight. The rendered weight is determined by a combination
         * of the `weight` and the text style&#39;s resolved `bold` value, after
         * accounting for inheritance:  * If the text is bold and the weight is less
         * than `400`, the rendered   weight is 400. * If the text is bold and the
         * weight is greater than or equal to `400` but   is less than `700`, the
         * rendered weight is `700`. * If the weight is greater than or equal to
         * `700`, the rendered weight is   equal to the weight. * If the text is not
         * bold, the rendered weight is equal to the weight.
         */
        weight?: number;
    }
    /**
     * Provides control over how write requests are executed.
     */
    interface Schema$WriteControl {
        /**
         * The revision ID of the document that the write request will be applied
         * to. If this is not the latest revision of the document, the request will
         * not be processed and will return a 400 bad request error.  When a
         * required revision ID is returned in a response, it indicates the revision
         * ID of the document after the request was applied.
         */
        requiredRevisionId?: string;
        /**
         * The target revision ID of the document that the write request will be
         * applied to.  If collaborator changes have occurred after the document was
         * read using the API, the changes produced by this write request will be
         * transformed against the collaborator changes. This results in a new
         * revision of the document which incorporates both the changes in the
         * request and the collaborator changes, and the Docs server will resolve
         * conflicting changes. When using `target_revision_id`, the API client can
         * be thought of as another collaborator of the document.  The target
         * revision ID may only be used to write to recent versions of a document.
         * If the target revision is too far behind the latest revision, the request
         * will not be processed and will return a 400 bad request error and the
         * request should be retried after reading the latest version of the
         * document. In most cases a `revision_id` will remain valid for use as a
         * target revision for several minutes after it is read, but for
         * frequently-edited documents this window may be shorter.
         */
        targetRevisionId?: string;
    }
    class Resource$Documents {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * docs.documents.batchUpdate
         * @desc Applies one or more updates to the document.  Each request is
         * validated before being applied. If any request is not valid, then the
         * entire request will fail and nothing will be applied.  Some requests have
         * replies to give you some information about how they are applied. Other
         * requests do not need to return information; these each return an empty
         * reply. The order of replies matches that of the requests.  For example,
         * suppose you call batchUpdate with four updates, and only the third one
         * returns information. The response would have two empty replies, the reply
         * to the third request, and another empty reply, in that order.  Because
         * other users may be editing the document, the document might not exactly
         * reflect your changes: your changes may be altered with respect to
         * collaborator changes. If there are no collaborators, the document should
         * reflect your changes. In any case, the updates in your request are
         * guaranteed to be applied together atomically.
         * @alias docs.documents.batchUpdate
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.documentId The ID of the document to update.
         * @param {().BatchUpdateDocumentRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        batchUpdate(params?: Params$Resource$Documents$Batchupdate, options?: MethodOptions): GaxiosPromise<Schema$BatchUpdateDocumentResponse>;
        batchUpdate(params: Params$Resource$Documents$Batchupdate, options: MethodOptions | BodyResponseCallback<Schema$BatchUpdateDocumentResponse>, callback: BodyResponseCallback<Schema$BatchUpdateDocumentResponse>): void;
        batchUpdate(params: Params$Resource$Documents$Batchupdate, callback: BodyResponseCallback<Schema$BatchUpdateDocumentResponse>): void;
        batchUpdate(callback: BodyResponseCallback<Schema$BatchUpdateDocumentResponse>): void;
        /**
         * docs.documents.create
         * @desc Creates a blank document using the title given in the request.
         * Other fields in the request, including any provided content, are ignored.
         * Returns the created document.
         * @alias docs.documents.create
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {().Document} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create(params?: Params$Resource$Documents$Create, options?: MethodOptions): GaxiosPromise<Schema$Document>;
        create(params: Params$Resource$Documents$Create, options: MethodOptions | BodyResponseCallback<Schema$Document>, callback: BodyResponseCallback<Schema$Document>): void;
        create(params: Params$Resource$Documents$Create, callback: BodyResponseCallback<Schema$Document>): void;
        create(callback: BodyResponseCallback<Schema$Document>): void;
        /**
         * docs.documents.get
         * @desc Gets the latest version of the specified document.
         * @alias docs.documents.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.documentId The ID of the document to retrieve.
         * @param {string=} params.suggestionsViewMode The suggestions view mode to apply to the document. This allows viewing the document with all suggestions inline, accepted or rejected. If one is not specified, DEFAULT_FOR_CURRENT_ACCESS is used.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Documents$Get, options?: MethodOptions): GaxiosPromise<Schema$Document>;
        get(params: Params$Resource$Documents$Get, options: MethodOptions | BodyResponseCallback<Schema$Document>, callback: BodyResponseCallback<Schema$Document>): void;
        get(params: Params$Resource$Documents$Get, callback: BodyResponseCallback<Schema$Document>): void;
        get(callback: BodyResponseCallback<Schema$Document>): void;
    }
    interface Params$Resource$Documents$Batchupdate extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the document to update.
         */
        documentId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$BatchUpdateDocumentRequest;
    }
    interface Params$Resource$Documents$Create extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Document;
    }
    interface Params$Resource$Documents$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the document to retrieve.
         */
        documentId?: string;
        /**
         * The suggestions view mode to apply to the document. This allows viewing
         * the document with all suggestions inline, accepted or rejected. If one is
         * not specified, DEFAULT_FOR_CURRENT_ACCESS is used.
         */
        suggestionsViewMode?: string;
    }
}
