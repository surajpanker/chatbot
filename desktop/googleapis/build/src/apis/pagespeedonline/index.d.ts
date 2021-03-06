/*! THIS FILE IS AUTO-GENERATED */
import { AuthPlus } from 'googleapis-common';
import { pagespeedonline_v1 } from './v1';
import { pagespeedonline_v2 } from './v2';
import { pagespeedonline_v4 } from './v4';
import { pagespeedonline_v5 } from './v5';
export declare const VERSIONS: {
    'v1': typeof pagespeedonline_v1.Pagespeedonline;
    'v2': typeof pagespeedonline_v2.Pagespeedonline;
    'v4': typeof pagespeedonline_v4.Pagespeedonline;
    'v5': typeof pagespeedonline_v5.Pagespeedonline;
};
export declare function pagespeedonline(version: 'v1'): pagespeedonline_v1.Pagespeedonline;
export declare function pagespeedonline(options: pagespeedonline_v1.Options): pagespeedonline_v1.Pagespeedonline;
export declare function pagespeedonline(version: 'v2'): pagespeedonline_v2.Pagespeedonline;
export declare function pagespeedonline(options: pagespeedonline_v2.Options): pagespeedonline_v2.Pagespeedonline;
export declare function pagespeedonline(version: 'v4'): pagespeedonline_v4.Pagespeedonline;
export declare function pagespeedonline(options: pagespeedonline_v4.Options): pagespeedonline_v4.Pagespeedonline;
export declare function pagespeedonline(version: 'v5'): pagespeedonline_v5.Pagespeedonline;
export declare function pagespeedonline(options: pagespeedonline_v5.Options): pagespeedonline_v5.Pagespeedonline;
declare const auth: AuthPlus;
export { auth };
