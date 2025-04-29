import { defaultPresets } from "./theme-presets";
import fs from "fs";
import path from "path";

// These are the fonts you want to inject into every preset
const fontSans = "Inter, sans-serif";
const fontSerif = "Source Serif 4, serif";
const fontMono = "JetBrains Mono, monospace";

// Helper to convert ThemeObject to the new format
function convertTheme(name: string, theme: any) {
  const light = theme.styles?.light || theme.light || {};
  const dark = theme.styles?.dark || theme.dark || {};
  const radius = theme.radius || light.radius || dark.radius || "0.5rem";

  return {
    name,
    label: theme.label || name,
    radius,
    fonts: {
      sans: fontSans,
      serif: fontSerif,
      mono: fontMono,
    },
    light: {
      ...light,
      radius,
    },
    dark: {
      ...dark,
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
        // Use quotes only if key is not a valid identifier
        const key =
          /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(k) ? k : `"${k}"`;
        return `${pad}${key}: ${toTS(v, indent + 2)}`;
      })
      .join(",\n");
    return `{\n${entries}\n${" ".repeat(indent - 2)}}`;
  }
  if (typeof obj === "string") {
    // Keep font variables as is
    if (
      obj.startsWith("sansFonts.") ||
      obj.startsWith("serifFonts[") ||
      obj.startsWith("monoFonts[")
    ) {
      return obj;
    }
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
const fileContent =
  "// AUTO-GENERATED FILE\n" +
  'import { monoFonts, sansFonts, serifFonts } from "@/utils/fonts";\n\n' +
  "export const generatedPresets = " +
  toTS(transformed, 2)
    .replace(/"Inter, sans-serif"/g, "sansFonts.Inter.value")
    .replace(/"Source Serif 4, serif"/g, "serifFonts['Source Serif 4'].value")
    .replace(/"JetBrains Mono, monospace"/g, "monoFonts['JetBrains Mono'].value") +
  ";\n";

fs.writeFileSync(outputPath, fileContent, "utf8");
console.log("Generated theme-presets file at", outputPath);