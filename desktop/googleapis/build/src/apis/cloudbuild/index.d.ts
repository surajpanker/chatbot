/*! THIS FILE IS AUTO-GENERATED */
import { AuthPlus } from 'googleapis-common';
import { cloudbuild_v1 } from './v1';
import { cloudbuild_v1alpha1 } from './v1alpha1';
export declare const VERSIONS: {
    'v1': typeof cloudbuild_v1.Cloudbuild;
    'v1alpha1': typeof cloudbuild_v1alpha1.Cloudbuild;
};
export declare function cloudbuild(version: 'v1'): cloudbuild_v1.Cloudbuild;
export declare function cloudbuild(options: cloudbuild_v1.Options): cloudbuild_v1.Cloudbuild;
export declare function cloudbuild(version: 'v1alpha1'): cloudbuild_v1alpha1.Cloudbuild;
export declare function cloudbuild(options: cloudbuild_v1alpha1.Options): cloudbuild_v1alpha1.Cloudbuild;
declare const auth: AuthPlus;
export { auth };
