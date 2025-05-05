"use client";
import { useState, useRef, ChangeEvent, useEffect } from "react";
import { ColorPicker } from "antd";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  argbFromHex,
  Hct,
  SchemeShadcn
} from "@/components/colors";
import { useThemeConfig } from "@/hooks/use-theme-config";
import { ThemeObject } from "@/types/theme";
import { useBackground } from "@/app/providers"; // Import the context hook

interface ThemeSettings {
  source: string;
  customColors: { name: string; value: number; blend: boolean }[];
}

// Define the structure for storing generated schemes
interface GeneratedSchemes {
  light: SchemeShadcn;
  dark: SchemeShadcn;
}

export default function ThemeCustomizer() {
  const [settings, setSettings] = useState<ThemeSettings>({
    source: "#1a73e8",
    customColors: [],
  });
  // Removed fileInputRef as input is now handled by context
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  // State to hold the generated light and dark schemes
  const [generatedSchemes, setGeneratedSchemes] = useState<GeneratedSchemes | null>(null);

  const { updateThemeConfig } = useThemeConfig();
  // Consume background context
  const { handleFileChange, sourceColorFromBg, isLoadingBackground } = useBackground();

  // Effect to update source color when background image changes
  useEffect(() => {
    if (sourceColorFromBg) {
      setSettings((prev) => ({ ...prev, source: sourceColorFromBg }));
      // Optionally trigger theme generation automatically, or let user click 'Generate'
      // handleGenerateThemeClick(sourceColorFromBg); // Example: auto-generate
      setGeneratedSchemes(null); // Clear previous generation if source changes
    }
  }, [sourceColorFromBg]);

  const handleColorChange = (color: any) => {
    const hexColor = color.toHex();
    setSettings((prev) => ({ ...prev, source: hexColor }));
    // Clear generated theme when color changes, requiring regeneration
    setGeneratedSchemes(null);
  };

  // Removed handleImageUpload - now handled by context

  // Renamed from generateTheme to avoid conflict
  const handleGenerateThemeClick = (colorToUse?: string) => {
    const sourceHex = colorToUse || settings.source;
    if (!sourceHex) return; // Don't generate if no source color

    setIsLoading(true);
    setGeneratedSchemes(null);
    try {
      const sourceColor = argbFromHex(sourceHex);
      generateSchemeFromSourceColor(sourceColor);
    } catch (error) {
      console.error("Error generating theme:", error);
      setGeneratedSchemes(null); // Ensure reset on error
    } finally {
      setIsLoading(false);
    }
  };

  const generateSchemeFromSourceColor = (sourceColor: number) => {
    try {
      const hct = Hct.fromInt(sourceColor);

      const lightScheme = new SchemeShadcn(hct, false, 0);
      const darkScheme = new SchemeShadcn(hct, true, 0);

      // Store the generated schemes instead of applying them
      setGeneratedSchemes({ light: lightScheme, dark: darkScheme });

    } catch (error) {
      console.error("Error generating scheme:", error);
      // Ensure generatedSchemes is null on error
      setGeneratedSchemes(null);
    }
  };

  // Function to apply the stored generated theme
  const applyGeneratedTheme = () => {
    if (!generatedSchemes) return;

    const generatedThemePart: Partial<ThemeObject> = {
      light: {
        background: intToHsl(generatedSchemes.light.background),
        foreground: intToHsl(generatedSchemes.light.foreground),
        muted: intToHsl(generatedSchemes.light.muted),
        "muted-foreground": intToHsl(generatedSchemes.light.mutedForeground),
        popover: intToHsl(generatedSchemes.light.popover),
        "popover-foreground": intToHsl(generatedSchemes.light.popoverForeground),
        card: intToHsl(generatedSchemes.light.card),
        "card-foreground": intToHsl(generatedSchemes.light.cardForeground),
        border: intToHsl(generatedSchemes.light.border),
        input: intToHsl(generatedSchemes.light.input),
        primary: intToHsl(generatedSchemes.light.primary),
        "primary-foreground": intToHsl(generatedSchemes.light.primaryForeground),
        secondary: intToHsl(generatedSchemes.light.secondary),
        "secondary-foreground": intToHsl(generatedSchemes.light.secondaryForeground),
        accent: intToHsl(generatedSchemes.light.accent),
        "accent-foreground": intToHsl(generatedSchemes.light.accentForeground),
        destructive: intToHsl(generatedSchemes.light.destructive),
        "destructive-foreground": intToHsl(generatedSchemes.light.destructiveForeground),
        ring: intToHsl(generatedSchemes.light.ring),
      },
      dark: {
        background: intToHsl(generatedSchemes.dark.background),
        foreground: intToHsl(generatedSchemes.dark.foreground),
        muted: intToHsl(generatedSchemes.dark.muted),
        "muted-foreground": intToHsl(generatedSchemes.dark.mutedForeground),
        popover: intToHsl(generatedSchemes.dark.popover),
        "popover-foreground": intToHsl(generatedSchemes.dark.popoverForeground),
        card: intToHsl(generatedSchemes.dark.card),
        "card-foreground": intToHsl(generatedSchemes.dark.cardForeground),
        border: intToHsl(generatedSchemes.dark.border),
        input: intToHsl(generatedSchemes.dark.input),
        primary: intToHsl(generatedSchemes.dark.primary),
        "primary-foreground": intToHsl(generatedSchemes.dark.primaryForeground),
        secondary: intToHsl(generatedSchemes.dark.secondary),
        "secondary-foreground": intToHsl(generatedSchemes.dark.secondaryForeground),
        accent: intToHsl(generatedSchemes.dark.accent),
        "accent-foreground": intToHsl(generatedSchemes.dark.accentForeground),
        destructive: intToHsl(generatedSchemes.dark.destructive),
        "destructive-foreground": intToHsl(generatedSchemes.dark.destructiveForeground),
        ring: intToHsl(generatedSchemes.dark.ring),
      },
    };

    updateThemeConfig(generatedThemePart as ThemeObject);
    alert("Generated theme applied!"); // Optional feedback
  };

  const handleDarkModeChange = (dark: boolean) => {
    setIsDarkMode(dark);
    // No need to regenerate scheme here, preview will use the stored one
  };

  const intToHsl = (colorInt: number): string => {
    // Handle potential non-number inputs gracefully
    if (typeof colorInt !== 'number' || isNaN(colorInt)) {
      console.warn("intToHsl received invalid input:", colorInt);
      return '0 0% 0%'; // Return black HSL for invalid input
    }
    return SchemeShadcn.toHslString(colorInt);
  };

  const intToHslDisplay = (colorInt: number): string => {
    // Handle potential non-number inputs gracefully
    if (typeof colorInt !== 'number' || isNaN(colorInt)) {
      console.warn("intToHslDisplay received invalid input:", colorInt);
      return 'hsl(0 0% 0%)'; // Return black HSL display for invalid input
    }
    const hslValue = SchemeShadcn.toHslString(colorInt);
    return `hsl(${hslValue})`;
  };

  const copyShadcnThemeCSS = () => {
    // Use the generatedSchemes state
    if (!generatedSchemes) return;

    const themeName = "theme-custom";
    let css = `.${themeName} {\n`;
    const light = generatedSchemes.light; // Use stored light scheme
    const dark = generatedSchemes.dark;   // Use stored dark scheme

    // Generate Light Theme CSS
    css += `  --background: ${intToHsl(light.background)};\n`;
    css += `  --foreground: ${intToHsl(light.foreground)};\n\n`;
    css += `  --muted: ${intToHsl(light.muted)};\n`;
    css += `  --muted-foreground: ${intToHsl(light.mutedForeground)};\n\n`;
    css += `  --popover: ${intToHsl(light.popover)};\n`;
    css += `  --popover-foreground: ${intToHsl(light.popoverForeground)};\n\n`;
    css += `  --card: ${intToHsl(light.card)};\n`;
    css += `  --card-foreground: ${intToHsl(light.cardForeground)};\n\n`;
    css += `  --border: ${intToHsl(light.border)};\n`;
    css += `  --input: ${intToHsl(light.input)};\n\n`;
    css += `  --primary: ${intToHsl(light.primary)};\n`;
    css += `  --primary-foreground: ${intToHsl(light.primaryForeground)};\n\n`;
    css += `  --secondary: ${intToHsl(light.secondary)};\n`;
    css += `  --secondary-foreground: ${intToHsl(light.secondaryForeground)};\n\n`;
    css += `  --accent: ${intToHsl(light.accent)};\n`;
    css += `  --accent-foreground: ${intToHsl(light.accentForeground)};\n\n`;
    css += `  --destructive: ${intToHsl(light.destructive)};\n`;
    css += `  --destructive-foreground: ${intToHsl(light.destructiveForeground)};\n\n`;
    css += `  --ring: ${intToHsl(light.ring)};\n\n`;
    css += `  --radius: 0.5rem; /* TODO: Make radius configurable */\n`;
    css += `}\n`;

    // Generate Dark Theme CSS
    css += `\n.dark .${themeName} {\n`;
    css += `  --background: ${intToHsl(dark.background)};\n`;
    css += `  --foreground: ${intToHsl(dark.foreground)};\n\n`;
    css += `  --muted: ${intToHsl(dark.muted)};\n`;
    css += `  --muted-foreground: ${intToHsl(dark.mutedForeground)};\n\n`;
    css += `  --popover: ${intToHsl(dark.popover)};\n`;
    css += `  --popover-foreground: ${intToHsl(dark.popoverForeground)};\n\n`;
    css += `  --card: ${intToHsl(dark.card)};\n`;
    css += `  --card-foreground: ${intToHsl(dark.cardForeground)};\n\n`;
    css += `  --border: ${intToHsl(dark.border)};\n`;
    css += `  --input: ${intToHsl(dark.input)};\n\n`;
    css += `  --primary: ${intToHsl(dark.primary)};\n`;
    css += `  --primary-foreground: ${intToHsl(dark.primaryForeground)};\n\n`;
    css += `  --secondary: ${intToHsl(dark.secondary)};\n`;
    css += `  --secondary-foreground: ${intToHsl(dark.secondaryForeground)};\n\n`;
    css += `  --accent: ${intToHsl(dark.accent)};\n`;
    css += `  --accent-foreground: ${intToHsl(dark.accentForeground)};\n\n`;
    css += `  --destructive: ${intToHsl(dark.destructive)};\n`;
    css += `  --destructive-foreground: ${intToHsl(dark.destructiveForeground)};\n\n`;
    css += `  --ring: ${intToHsl(dark.ring)};\n`;
    css += `}\n`;

    navigator.clipboard.writeText(css).then(() => {
      alert("Shadcn theme CSS copied to clipboard!");
    }).catch(err => {
      console.error("Could not copy text: ", err);
    });
  };

  const shadcnColorRoles: { name: string, key: keyof SchemeShadcn }[] = [
    { name: "background", key: "background" },
    { name: "foreground", key: "foreground" },
    { name: "muted", key: "muted" },
    { name: "mutedForeground", key: "mutedForeground" },
    { name: "popover", key: "popover" },
    { name: "popoverForeground", key: "popoverForeground" },
    { name: "card", key: "card" },
    { name: "cardForeground", key: "cardForeground" },
    { name: "border", key: "border" },
    { name: "input", key: "input" },
    { name: "primary", key: "primary" },
    { name: "primaryForeground", key: "primaryForeground" },
    { name: "secondary", key: "secondary" },
    { name: "secondaryForeground", key: "secondaryForeground" },
    { name: "accent", key: "accent" },
    { name: "accentForeground", key: "accentForeground" },
    { name: "destructive", key: "destructive" },
    { name: "destructiveForeground", key: "destructiveForeground" },
    { name: "ring", key: "ring" },
  ];

  // Determine the scheme to display based on dark mode toggle and generated state
  const schemeToDisplay = generatedSchemes
    ? (isDarkMode ? generatedSchemes.dark : generatedSchemes.light)
    : null;

  return (
    // Add padding/margin as needed for layout
    <div className="p-4 md:p-8">
      <h1 className="mb-6 text-3xl font-bold">Theme Generator</h1>
      <Card>
        <CardContent className="space-y-6 pt-6"> {/* Increased spacing */}
          {/* Color Picker Section */}
          <div className="space-y-2">
            <Label htmlFor="color-picker">Select Primary Color</Label>
            <div className="flex flex-wrap items-center gap-4">
              <ColorPicker
                value={settings.source} // Use value for controlled component
                showText
                onChangeComplete={handleColorChange}
                allowClear={false}
              />
              {/* Generate Button uses internal state */}
              <Button onClick={() => handleGenerateThemeClick()} disabled={isLoading || isLoadingBackground}>
                {isLoading ? "Generating..." : "Generate Theme"}
              </Button>
              {/* Apply Button */}
              <Button
                onClick={applyGeneratedTheme}
                disabled={!generatedSchemes || isLoading || isLoadingBackground}
                variant="secondary"
              >
                Apply Generated Theme
              </Button>
            </div>
          </div>

          {/* Background Upload Section */}
          <div className="space-y-2">
            <Label htmlFor="background-upload">Set Background (Image/Video)</Label>
            <div className="flex items-center gap-4">
              <Input
                id="background-upload"
                type="file"
                accept="image/*,video/mp4,video/webm,video/ogg" // Accept video types
                onChange={handleFileChange} // Use context handler
                disabled={isLoadingBackground || isLoading} // Disable while loading bg or theme
                className="max-w-xs"
              />
              {isLoadingBackground && <span className="text-sm text-muted-foreground">Processing background...</span>}
            </div>
            <p className="text-xs text-muted-foreground">
              Select an image to extract its primary color, or a video (max 1 min) for the background.
            </p>
          </div>

          {/* Dark Mode Toggle */}
          <div className="flex items-center gap-2 pt-2">
            <Label>Preview Mode:</Label>
            <Button
              variant={!isDarkMode ? "default" : "outline"}
              size="sm"
              onClick={() => handleDarkModeChange(false)}
              disabled={isLoading || isLoadingBackground}
              className="min-w-16"
            >
              Light
            </Button>
            <Button
              variant={isDarkMode ? "default" : "outline"}
              size="sm"
              onClick={() => handleDarkModeChange(true)}
              disabled={isLoading || isLoadingBackground}
              className="min-w-16"
            >
              Dark
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Combined Loading State */}
      {(isLoading || isLoadingBackground) && !schemeToDisplay && (
        <div className="mt-4 rounded-lg border p-8 text-center">
          {isLoadingBackground ? "Processing background..." : "Generating theme..."}
        </div>
      )}

      {/* Display generated theme preview */}
      {schemeToDisplay && <div className="mt-12">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2"> {/* Added flex-wrap and gap */}
          <h2 className="text-xl font-bold">
            Generated Theme Preview ({isDarkMode ? "Dark" : "Light"})
          </h2>
          <Button onClick={copyShadcnThemeCSS} disabled={!generatedSchemes}>Copy CSS</Button>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {shadcnColorRoles.map(({ name, key }) => {
            const colorValue = schemeToDisplay[key];
            // Ensure colorValue is a number before processing
            if (typeof colorValue === 'number' && !isNaN(colorValue)) {
              const hexColor = intToHex(colorValue); // Store the result
              // Only render if hexColor is a valid string
              if (hexColor) {
                return (
                  <ColorSwatch
                    key={name}
                    name={name}
                    color={hexColor} // Use the non-null hexColor
                    displayValue={intToHslDisplay(colorValue)}
                  />
                );
              }
            }
            return null; // Skip rendering if colorValue is invalid
          })}
        </div>
      </div>}
    </div>
  );
}

// ColorSwatch component remains the same
function ColorSwatch({ name, color, displayValue }: { name: string, color: string, displayValue?: string }) {
  function isDark(hex: string) {
    // Basic check, might need refinement for edge cases
    if (!hex || hex.length < 7) return false;
    const c = hex.replace('#', '');
    const r = parseInt(c.substring(0, 2), 16);
    const g = parseInt(c.substring(2, 4), 16);
    const b = parseInt(c.substring(4, 6), 16);
    // Check for NaN values
    if (isNaN(r) || isNaN(g) || isNaN(b)) return false;
    return (0.299 * r + 0.587 * g + 0.114 * b) < 160;
  }
  const dark = isDark(color);

  return (
    <div
      className="flex h-32 flex-col items-center justify-center rounded-md border p-6 text-center" // Added text-center
      style={{ backgroundColor: color }}
    >
      {/* Simplified text styling */}
      <p
        className={`font-bold ${dark ? "text-white/90" : "text-black/90"}`}
        style={{ textShadow: dark ? '0 0 2px rgba(0,0,0,0.7)' : '0 0 2px rgba(255,255,255,0.7)' }} // Simplified shadow
      >
        {name}
      </p>
      <span
        className={`mt-2 block max-w-full truncate rounded px-1.5 py-0.5 font-mono text-xs ${dark ? "bg-black/30 text-white/80" : "bg-white/50 text-black/80"}`} // Adjusted styling
      >
        {displayValue || color}
      </span>
    </div>
  )
}

function intToHex(sourceColorInt: number): string | null {
  if (typeof sourceColorInt !== "number" || isNaN(sourceColorInt)) return null;
  // Clamp to 24 bits and convert to hex
  const hex = "#" + (sourceColorInt & 0xffffff).toString(16).padStart(6, "0");
  return hex;
}
