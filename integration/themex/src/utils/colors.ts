import { basePresetsV4 } from "@/lib/colors";
import Color from "color";
import { parse } from "culori";
import { colorFormatter } from "./color-converter";

// Helper function to ensure a color string is in a standard CSS format
export function ensureCssColorFormat(color: string): string {
  if (!color) return '#000000'; // Handle null/undefined/empty string
  const trimmedColor = color.trim();
  // Check if it looks like raw HSL values (H S% L%)
  if (/^\d+(\.\d+)?\s+\d+(\.\d+)?%\s+\d+(\.\d+)?%$/.test(trimmedColor)) {
    return `hsl(${trimmedColor})`;
  }
  // Assume it's already a valid CSS format (oklch, #hex, rgb, hsl(), etc.) or a fallback
  // We still pass it to isValidColor later for robustness if needed by the caller
  return trimmedColor;
}

export function getOptimalForegroundColor(baseColor: string) {
  // Ensure the color is in a valid CSS format *before* validation
  const cssColor = ensureCssColorFormat(baseColor);

  if (!isValidColor(cssColor)) {
    console.warn(`Invalid color format passed to getOptimalForegroundColor after ensuring format: ${baseColor} -> ${cssColor}. Using fallback #000000.`);
    // Use fallback if still invalid after attempting to format
    const color = Color('#000000');
    return color.isDark()
      ? basePresetsV4.neutral.dark.foreground
      : basePresetsV4.neutral.light.foreground;
  }

  // Now that cssColor is guaranteed to be valid, proceed
  const colorInHex = colorFormatter(cssColor, "hex", "4");
  const color = Color(colorInHex);

  const foregroundColor = color.isDark()
    ? basePresetsV4.neutral.dark.foreground
    : basePresetsV4.neutral.light.foreground;

  return foregroundColor;
}

export function isValidColor(color: string): boolean {
  try {
    // No need to specifically check for raw HSL here, ensureCssColorFormat handles it.
    // Let culori parse the potentially formatted color.
    const parsedColor = parse(color);
    return !!parsedColor; // Check if parsing was successful
  } catch {
    return false;
  }
}
