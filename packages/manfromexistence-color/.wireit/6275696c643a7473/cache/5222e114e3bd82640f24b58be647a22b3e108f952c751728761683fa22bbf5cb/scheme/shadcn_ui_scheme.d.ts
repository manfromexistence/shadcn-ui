/**
 * @license
 * Copyright 2021 Google LLC
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
import { CorePalette } from '../palettes/core_palette';
/**
 * DEPRECATED. The `Scheme` class is deprecated in favor of `DynamicScheme`.
 * Please see
 * https://github.com/material-foundation/material-color-utilities/blob/main/make_schemes.md
 * for migration guidance.
 *
 * Represents a Material color scheme, a mapping of color roles to colors.
 */
export declare class Scheme {
    private readonly props;
    get primary(): number;
    get primaryForeground(): number;
    get card(): number;
    get cardForeground(): number;
    get secondary(): number;
    get secondaryForeground(): number;
    get popover(): number;
    get popoverForeground(): number;
    get accent(): number;
    get accentForeground(): number;
    get sidebarPrimary(): number;
    get sidebarPrimaryForeground(): number;
    get destructive(): number;
    get destructiveForeground(): number;
    get chart1(): number;
    get chart2(): number;
    get chart3(): number;
    get chart4(): number;
    get chart5(): number;
    get background(): number;
    get foreground(): number;
    get sidebarAccent(): number;
    get sidebarAccentForeground(): number;
    get sidebarBackground(): number;
    get sidebarForeground(): number;
    get border(): number;
    get input(): number;
    get sidebarBorder(): number;
    get ring(): number;
    get muted(): number;
    get mutedForeground(): number;
    get sidebarRing(): number;
    /**
     * @param argb ARGB representation of a color.
     * @return Light Material color scheme, based on the color's hue.
     */
    static light(argb: number): Scheme;
    /**
     * @param argb ARGB representation of a color.
     * @return Dark Material color scheme, based on the color's hue.
     */
    static dark(argb: number): Scheme;
    /**
     * @param argb ARGB representation of a color.
     * @return Light Material content color scheme, based on the color's hue.
     */
    static lightContent(argb: number): Scheme;
    /**
     * @param argb ARGB representation of a color.
     * @return Dark Material content color scheme, based on the color's hue.
     */
    static darkContent(argb: number): Scheme;
    /**
     * Light scheme from core palette
     */
    static lightFromCorePalette(core: CorePalette): Scheme;
    /**
     * Dark scheme from core palette
     */
    static darkFromCorePalette(core: CorePalette): Scheme;
    private constructor();
    toJSON(): {
        background: number;
        foreground: number;
        card: number;
        cardForeground: number;
        popover: number;
        popoverForeground: number;
        primary: number;
        primaryForeground: number;
        secondary: number;
        secondaryForeground: number;
        muted: number;
        mutedForeground: number;
        accent: number;
        accentForeground: number;
        destructive: number;
        destructiveForeground: number;
        border: number;
        input: number;
        ring: number;
        chart1: number;
        chart2: number;
        chart3: number;
        chart4: number;
        chart5: number;
        sidebarBackground: number;
        sidebarForeground: number;
        sidebarPrimary: number;
        sidebarPrimaryForeground: number;
        sidebarAccent: number;
        sidebarAccentForeground: number;
        sidebarBorder: number;
        sidebarRing: number;
    };
}
