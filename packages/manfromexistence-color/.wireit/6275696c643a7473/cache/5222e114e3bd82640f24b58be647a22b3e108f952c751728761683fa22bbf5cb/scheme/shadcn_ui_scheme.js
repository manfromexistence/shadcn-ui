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
// This file is automatically generated. Do not modify it.
import { CorePalette } from '../palettes/core_palette';
/**
 * DEPRECATED. The `Scheme` class is deprecated in favor of `DynamicScheme`.
 * Please see
 * https://github.com/material-foundation/material-color-utilities/blob/main/make_schemes.md
 * for migration guidance.
 *
 * Represents a Material color scheme, a mapping of color roles to colors.
 */
export class Scheme {
    get primary() {
        return this.props.primary;
    }
    get primaryForeground() {
        return this.props.primaryForeground;
    }
    get card() {
        return this.props.card;
    }
    get cardForeground() {
        return this.props.cardForeground;
    }
    get secondary() {
        return this.props.secondary;
    }
    get secondaryForeground() {
        return this.props.secondaryForeground;
    }
    get popover() {
        return this.props.popover;
    }
    get popoverForeground() {
        return this.props.popoverForeground;
    }
    get accent() {
        return this.props.accent;
    }
    get accentForeground() {
        return this.props.accentForeground;
    }
    get sidebarPrimary() {
        return this.props.sidebarPrimary;
    }
    get sidebarPrimaryForeground() {
        return this.props.sidebarPrimaryForeground;
    }
    get destructive() {
        return this.props.destructive;
    }
    get destructiveForeground() {
        return this.props.destructiveForeground;
    }
    get chart1() {
        return this.props.chart1;
    }
    get chart2() {
        return this.props.chart2;
    }
    get chart3() {
        return this.props.chart3;
    }
    get chart4() {
        return this.props.chart4;
    }
    get chart5() {
        return this.props.chart5;
    }
    get background() {
        return this.props.background;
    }
    get foreground() {
        return this.props.foreground;
    }
    get sidebarAccent() {
        return this.props.sidebarAccent;
    }
    get sidebarAccentForeground() {
        return this.props.sidebarAccentForeground;
    }
    get sidebarBackground() {
        return this.props.sidebarBackground;
    }
    get sidebarForeground() {
        return this.props.sidebarForeground;
    }
    get border() {
        return this.props.border;
    }
    get input() {
        return this.props.input;
    }
    get sidebarBorder() {
        return this.props.sidebarBorder;
    }
    get ring() {
        return this.props.ring;
    }
    get muted() {
        return this.props.muted;
    }
    get mutedForeground() {
        return this.props.mutedForeground;
    }
    get sidebarRing() {
        return this.props.sidebarRing;
    }
    /**
     * @param argb ARGB representation of a color.
     * @return Light Material color scheme, based on the color's hue.
     */
    static light(argb) {
        return Scheme.lightFromCorePalette(CorePalette.of(argb));
    }
    /**
     * @param argb ARGB representation of a color.
     * @return Dark Material color scheme, based on the color's hue.
     */
    static dark(argb) {
        return Scheme.darkFromCorePalette(CorePalette.of(argb));
    }
    /**
     * @param argb ARGB representation of a color.
     * @return Light Material content color scheme, based on the color's hue.
     */
    static lightContent(argb) {
        return Scheme.lightFromCorePalette(CorePalette.contentOf(argb));
    }
    /**
     * @param argb ARGB representation of a color.
     * @return Dark Material content color scheme, based on the color's hue.
     */
    static darkContent(argb) {
        return Scheme.darkFromCorePalette(CorePalette.contentOf(argb));
    }
    /**
     * Light scheme from core palette
     */
    static lightFromCorePalette(core) {
        return new Scheme({
            background: core.n1.tone(99),
            foreground: core.n1.tone(10),
            card: core.a1.tone(90),
            cardForeground: core.a1.tone(10),
            popover: core.a2.tone(90),
            popoverForeground: core.a2.tone(10),
            primary: core.a1.tone(40),
            primaryForeground: core.a1.tone(100),
            secondary: core.a2.tone(40),
            secondaryForeground: core.a2.tone(100),
            muted: core.n1.tone(20),
            mutedForeground: core.n1.tone(95),
            accent: core.a3.tone(40),
            accentForeground: core.a3.tone(100),
            destructive: core.error.tone(40),
            destructiveForeground: core.error.tone(100),
            border: core.n2.tone(50),
            input: core.n2.tone(80),
            ring: core.n1.tone(0),
            chart1: core.a1.tone(50),
            chart2: core.a2.tone(50),
            chart3: core.a3.tone(50),
            chart4: core.n1.tone(50),
            chart5: core.n2.tone(50),
            sidebarBackground: core.n2.tone(90),
            sidebarForeground: core.n2.tone(30),
            sidebarPrimary: core.a3.tone(90),
            sidebarPrimaryForeground: core.a3.tone(10),
            sidebarAccent: core.n1.tone(99),
            sidebarAccentForeground: core.n1.tone(10),
            sidebarBorder: core.n1.tone(0),
            sidebarRing: core.a1.tone(80)
        });
    }
    /**
     * Dark scheme from core palette
     */
    static darkFromCorePalette(core) {
        return new Scheme({
            background: core.n1.tone(10),
            foreground: core.n1.tone(90),
            card: core.a1.tone(30),
            cardForeground: core.a1.tone(90),
            popover: core.a2.tone(30),
            popoverForeground: core.a2.tone(90),
            primary: core.a1.tone(80),
            primaryForeground: core.a1.tone(20),
            secondary: core.a2.tone(80),
            secondaryForeground: core.a2.tone(20),
            muted: core.n1.tone(90),
            mutedForeground: core.a1.tone(99),
            accent: core.a3.tone(80),
            accentForeground: core.a3.tone(20),
            destructive: core.error.tone(80),
            destructiveForeground: core.error.tone(20),
            border: core.n2.tone(60),
            input: core.n2.tone(30),
            ring: core.n1.tone(0),
            chart1: core.a1.tone(70),
            chart2: core.a2.tone(70),
            chart3: core.a3.tone(70),
            chart4: core.n1.tone(70),
            chart5: core.n2.tone(70),
            sidebarPrimary: core.a3.tone(30),
            sidebarPrimaryForeground: core.a3.tone(90),
            sidebarBackground: core.n2.tone(30),
            sidebarForeground: core.n2.tone(80),
            sidebarAccent: core.n1.tone(10),
            sidebarAccentForeground: core.n1.tone(90),
            sidebarBorder: core.n1.tone(0),
            sidebarRing: core.n2.tone(99)
        });
    }
    constructor(props) {
        this.props = props;
    }
    toJSON() {
        return {
            ...this.props
        };
    }
}
//# sourceMappingURL=shadcn_ui_scheme.js.map