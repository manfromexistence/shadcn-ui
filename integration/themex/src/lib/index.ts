import { defaultPresets } from "./theme-presets";
import fs from "fs";
import path from "path";
// Import the actual font objects - adjust path if necessary (e.g., '../../../../utils/fonts')
import { monoFonts, sansFonts, serifFonts } from "@/utils/fonts";

// Define types for font objects for better type checking based on actual structure
interface FontData { key: string; value: string; href?: string; /* Add other properties if they exist */ }
type FontMap = Record<string, FontData>;

// Default fonts if not specified in the theme
const defaultFontSans = "Inter, sans-serif";
const defaultFontSerif = "Source Serif 4, serif";
const defaultFontMono = "JetBrains Mono, monospace";

// Helper to find the font variable reference from the font string value
// e.g., "Inter, sans-serif" -> "sansFonts.Inter.value"
function findFontVariableReference(fontString: string, type: 'sans' | 'serif' | 'mono'): string {
    const fontMap: FontMap = type === 'sans' ? sansFonts : type === 'serif' ? serifFonts : monoFonts;
    const prefix = type === 'sans' ? 'sansFonts' : type === 'serif' ? 'serifFonts' : 'monoFonts';

    // Trim the input string for comparison
    const trimmedFontString = fontString.trim();

    for (const [key, fontData] of Object.entries(fontMap)) {
        // Compare the trimmed input string directly with the fontData.value (also trimmed)
        // This assumes fontData.value holds the full CSS string like "Inter, sans-serif"
        // Make sure the 'value' property in your imported font objects matches this format.
        if (fontData.value && fontData.value.trim() === trimmedFontString) {
            // Construct the variable reference, handling keys needing brackets
            const keyAccess = /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(key) ? `.${key}` : `['${key}']`;
            // Return the variable reference string itself (e.g., "sansFonts.Inter.value")
            return `${prefix}${keyAccess}.value`;
        }
    }

    // Fallback if no match found: return the original font string *unquoted*.
    // convertTheme will wrap this in the marker, and toTS will handle quoting if the marker is absent.
    console.warn(`Could not find font variable for: "${fontString}". Using string literal in output.`);
    return fontString; // Return the raw string, NOT quoted here
}


// Helper to convert ThemeObject to the new format
function convertTheme(name: string, theme: any) {
  const light = theme.styles?.light || theme.light || {};
  const dark = theme.styles?.dark || theme.dark || {};
  const radius = theme.radius || light.radius || dark.radius || "0.5rem";

  // Determine font values, prioritizing theme-specific fonts if available
  const sansValue = light["font-sans"] || dark["font-sans"] || defaultFontSans;
  const serifValue = light["font-serif"] || dark["font-serif"] || defaultFontSerif;
  const monoValue = light["font-mono"] || dark["font-mono"] || defaultFontMono;

  // Convert font values to variable references OR return original string if not found
  const sansRefOrLiteral = findFontVariableReference(sansValue, 'sans');
  const serifRefOrLiteral = findFontVariableReference(serifValue, 'serif');
  const monoRefOrLiteral = findFontVariableReference(monoValue, 'mono');

  // Create copies and remove original font properties to avoid duplication
  const lightClean = { ...light };
  delete lightClean["font-sans"];
  delete lightClean["font-serif"];
  delete lightClean["font-mono"];

  const darkClean = { ...dark };
  delete darkClean["font-sans"];
  delete darkClean["font-serif"];
  delete darkClean["font-mono"];

  // Check if the result from findFontVariableReference looks like a variable path
  // If not, it's a literal that should NOT get the marker.
  const isSansVar = sansRefOrLiteral.startsWith('sansFonts.');
  const isSerifVar = serifRefOrLiteral.startsWith('serifFonts.');
  const isMonoVar = monoRefOrLiteral.startsWith('monoFonts.');

  return {
    name,
    label: theme.label || name,
    radius,
    fonts: {
      // Use special marker strings ONLY if a variable reference was found
      sans: isSansVar ? `%%FONT_VAR:${sansRefOrLiteral}%%` : sansRefOrLiteral,
      serif: isSerifVar ? `%%FONT_VAR:${serifRefOrLiteral}%%` : serifRefOrLiteral,
      mono: isMonoVar ? `%%FONT_VAR:${monoRefOrLiteral}%%` : monoRefOrLiteral,
    },
    light: {
      ...lightClean,
      radius,
    },
    dark: {
      ...darkClean,
      radius,
    },
  };
}

// Pretty-print object as TypeScript (no quotes for keys unless needed)
function toTS(obj: any, indent = 2): string {
  if (Array.isArray(obj)) {
    return `[${obj.map((v) => toTS(v, indent)).join(", ")}]`;
  }
  if (obj && typeof obj === "object") {
    const pad = " ".repeat(indent);
    const entries = Object.entries(obj)
      .map(([k, v]) => {
        // Use quotes only if key is not a valid identifier or contains hyphens
        const key = /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(k) && !k.includes('-') ? k : `"${k}"`;
        return `${pad}${key}: ${toTS(v, indent + 2)}`;
      })
      .join(",\n");
    return `{\n${entries}\n${" ".repeat(indent - 2)}}`;
  }
  if (typeof obj === "string") {
     // Check for our font variable marker
     if (obj.startsWith('%%FONT_VAR:') && obj.endsWith('%%')) {
       // Extract the variable reference and return it unquoted
       return obj.slice('%%FONT_VAR:'.length, -'%%'.length);
     }
    // Default: quote strings
    return `"${obj}"`;
  }
  return String(obj);
}

// Transform all themes into an object with keys
const transformed: Record<string, any> = {};
for (const [name, theme] of Object.entries(defaultPresets)) {
  transformed[name] = convertTheme(name, theme);
}

// Output to file
const outputPath = path.resolve(__dirname, "./preset.ts");
// The font variable conversion is now handled by convertTheme and toTS
const fileContent =
  "// AUTO-GENERATED FILE\n" +
  'import { monoFonts, sansFonts, serifFonts } from "@/utils/fonts";\n\n' + // Ensure this path is correct
  "export const generatedPresets = " +
  toTS(transformed, 2) +
  ";\n";

fs.writeFileSync(outputPath, fileContent, "utf8");
console.log("Generated theme-presets file at", outputPath);