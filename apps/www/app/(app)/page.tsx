"use client";

import { useState, useRef, ChangeEvent } from "react";
import { ColorPicker } from "antd";
import { Input } from "@/registry/new-york/ui/input";
import { Button } from "@/registry/new-york/ui/button";
import { Card, CardContent } from "@/registry/new-york/ui/card";
import { Label } from "@/registry/new-york/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/new-york/ui/tabs";
import { argbFromHex, themeFromSourceColor, themeFromImage } from "@/components/colors";

interface ThemeSettings {
  source: string;
  customColors: { name: string; value: number; blend: boolean }[];
}

export default function IndexPage() {
  const [theme, setTheme] = useState<any>(null);
  const [settings, setSettings] = useState<ThemeSettings>({
    source: "#1a73e8",
    customColors: [],
  });
  const [activeTab, setActiveTab] = useState("color");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleColorChange = (color: any) => {
    const hexColor = color.toHex();
    setSettings((prev) => ({ ...prev, source: hexColor }));
  };

  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async () => {
        const img = new Image();
        img.src = reader.result as string;
        await new Promise((resolve) => {
          img.onload = resolve;
        });
        const theme = await themeFromImage(img);
        setTheme(theme);
        setIsLoading(false);
      };
    } catch (error) {
      console.error("Error processing image:", error);
      setIsLoading(false);
    }
  };

  const generateTheme = () => {
    try {
      const sourceColor = argbFromHex(settings.source);
      const newTheme = themeFromSourceColor(sourceColor, settings.customColors);
      setTheme(newTheme);
    } catch (error) {
      console.error("Error generating theme:", error);
    }
  };

  // Helper: ARGB int to hex string
  const intToHex = (colorInt: number): string => {
    const hex = colorInt.toString(16).padStart(8, '0');
    return `#${hex.substring(2)}`;
  };

  // Get the active scheme based on dark mode selection
  const activeScheme = theme?.schemes ? (isDarkMode ? theme.schemes.dark : theme.schemes.light) : null;

  // List of Material color roles to display
  const colorRoles: { name: string, key: keyof typeof activeScheme }[] = [
    { name: "primary", key: "primary" },
    { name: "onPrimary", key: "onPrimary" },
    { name: "primaryContainer", key: "primaryContainer" },
    { name: "onPrimaryContainer", key: "onPrimaryContainer" },
    { name: "secondary", key: "secondary" },
    { name: "onSecondary", key: "onSecondary" },
    { name: "secondaryContainer", key: "secondaryContainer" },
    { name: "onSecondaryContainer", key: "onSecondaryContainer" },
    { name: "tertiary", key: "tertiary" },
    { name: "onTertiary", key: "onTertiary" },
    { name: "tertiaryContainer", key: "tertiaryContainer" },
    { name: "onTertiaryContainer", key: "onTertiaryContainer" },
    { name: "error", key: "error" },
    { name: "onError", key: "onError" },
    { name: "errorContainer", key: "errorContainer" },
    { name: "onErrorContainer", key: "onErrorContainer" },
    { name: "background", key: "background" },
    { name: "onBackground", key: "onBackground" },
    { name: "surface", key: "surface" },
    { name: "onSurface", key: "onSurface" },
    { name: "surfaceVariant", key: "surfaceVariant" },
    { name: "onSurfaceVariant", key: "onSurfaceVariant" },
    { name: "outline", key: "outline" },
    { name: "outlineVariant", key: "outlineVariant" },
    { name: "inverseSurface", key: "inverseSurface" },
    { name: "inverseOnSurface", key: "inverseOnSurface" },
    { name: "inversePrimary", key: "inversePrimary" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Material Theme Generator</h1>
      <Card className="mb-8">
        <CardContent className="pt-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="color">Color Picker</TabsTrigger>
              <TabsTrigger value="image">Image Upload</TabsTrigger>
            </TabsList>
            <TabsContent value="color" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="color-picker">Select Primary Color</Label>
                <div className="flex items-center gap-4">
                  <ColorPicker
                    defaultValue={settings.source}
                    showText
                    onChangeComplete={handleColorChange}
                    allowClear={false}
                  />
                  <Button onClick={generateTheme}>Generate Theme</Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="image" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="image-upload">Upload Image</Label>
                <div className="flex items-center gap-4">
                  <Input
                    ref={fileInputRef}
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={isLoading}
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
          <div className="mt-4 flex items-center gap-2">
            <Button 
              variant={!isDarkMode ? "default" : "outline"} 
              size="sm"
              onClick={() => setIsDarkMode(false)}
            >
              Light
            </Button>
            <Button 
              variant={isDarkMode ? "default" : "outline"} 
              size="sm"
              onClick={() => setIsDarkMode(true)}
            >
              Dark
            </Button>
          </div>
        </CardContent>
      </Card>
      {!theme && (
        <div className="text-center p-8 border rounded-lg">
          Select a color or upload an image to generate a Material theme
        </div>
      )}
      {theme && activeScheme && (
        <div>
          <h2 className="text-xl font-bold mb-4">Material Theme Colors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {colorRoles.map(({ name, key }) => (
              <ColorSwatch
                key={name}
                name={name}
                color={intToHex(activeScheme[key])}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function ColorSwatch({ name, color }: { name: string, color: string }) {
  // Simple luminance check for text color
  function isDark(hex: string) {
    const c = hex.replace('#', '');
    const r = parseInt(c.substring(0,2),16);
    const g = parseInt(c.substring(2,4),16);
    const b = parseInt(c.substring(4,6),16);
    // Perceived luminance
    return (0.299*r + 0.587*g + 0.114*b) < 160;
  }
  const dark = isDark(color);

  return (
    <div
      className="p-6 rounded-md flex flex-col items-center justify-center h-32 border"
      style={{ backgroundColor: color }}
    >
      <div className="px-2 py-1 rounded">
        <p
          className="font-bold text-transparent"
          style={{
            background: 'linear-gradient(to right, #ff0000, #ff8000, #ffff00, #00ff00, #00ffff, #0000ff, #8000ff, #ff00ff)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            filter: dark
              ? 'drop-shadow(0px 0px 1px rgba(255,255,255,0.7))'
              : 'drop-shadow(0px 0px 1px rgba(0,0,0,0.7))'
          }}
        >
          {name}
        </p>
      </div>
      <span
        className={`mt-2 text-xs font-mono`}
        style={{
          background: dark ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.4)",
          borderRadius: 4,
          padding: "0 6px"
        }}
      >
        {color}
      </span>
    </div>
  )
}

