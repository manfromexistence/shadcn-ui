// Copyright 2023-2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import Foundation

/// A playful theme - the source color's hue does not appear in the theme.
public class SchemeRainbow: DynamicScheme {
  public convenience init(sourceColorHct: Hct, isDark: Bool, contrastLevel: Double) {
    let palettes = CorePalettesRainbow(sourceColorHct: sourceColorHct)
    self.init(
      sourceColorHct: sourceColorHct,
      palettes: palettes,
      isDark: isDark,
      contrastLevel: contrastLevel)
  }

  fileprivate init(
    sourceColorHct: Hct, palettes: CorePalettes, isDark: Bool, contrastLevel: Double
  ) {
    super.init(
      sourceColorHct: sourceColorHct,
      variant: .rainbow,
      isDark: isDark,
      contrastLevel: contrastLevel,
      primaryPalette: palettes.primary,
      secondaryPalette: palettes.secondary,
      tertiaryPalette: palettes.tertiary,
      neutralPalette: palettes.neutral,
      neutralVariantPalette: palettes.neutralVariant
    )
  }
}

/// Use [SchemeRainbowProvider] when you need to create multiple [SchemeRainbow] from the same
/// source color.
///
/// This provider reduces overlapped computation by reusing tonal palettes.
public struct SchemeRainbowProvider: DynamicSchemeProvider {
  private let sourceColorHct: Hct
  private let palettes: CorePalettes

  public init(sourceColorHct: Hct) {
    self.sourceColorHct = sourceColorHct
    self.palettes = CorePalettesRainbow(sourceColorHct: sourceColorHct)
  }

  public func scheme(isDark: Bool, contrastLevel: Double) -> DynamicScheme {
    SchemeRainbow(
      sourceColorHct: sourceColorHct,
      palettes: palettes,
      isDark: isDark,
      contrastLevel: contrastLevel)
  }
}

/// Core palettes of [SchemeRainbow].
private struct CorePalettesRainbow: CorePalettes {
  let primary: TonalPalette
  let secondary: TonalPalette
  let tertiary: TonalPalette
  let neutral: TonalPalette
  let neutralVariant: TonalPalette

  init(sourceColorHct: Hct) {
    self.primary = TonalPalette.of(sourceColorHct.hue, 48.0)
    self.secondary = TonalPalette.of(sourceColorHct.hue, 16.0)
    self.tertiary = TonalPalette.of(
      MathUtils.sanitizeDegreesDouble(sourceColorHct.hue + 60.0), 24.0)
    self.neutral = TonalPalette.of(sourceColorHct.hue, 0.0)
    self.neutralVariant = TonalPalette.of(sourceColorHct.hue, 0.0)
  }
}
