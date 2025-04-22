"use client";

import { useState, useRef, ChangeEvent, useEffect } from "react";
import { ColorPicker } from "antd";
import { Input } from "@/registry/new-york/ui/input";
import { Button } from "@/registry/new-york/ui/button";
import { Card, CardContent } from "@/registry/new-york/ui/card";
import { Label } from "@/registry/new-york/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/new-york/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/registry/new-york/ui/select";
import { 
  argbFromHex, 
  Hct,
  SchemeVibrant,
  SchemeRainbow, 
  SchemeTonalSpot,
  SchemeNeutral,
  SchemeMonochrome,
  SchemeFruitSalad,
  SchemeFidelity,
  SchemeExpressive,
  SchemeContent
} from "@/components/colors";

interface ThemeSettings {
  source: string;
  customColors: { name: string; value: number; blend: boolean }[];
}

// Define scheme types with their display names and classes
const SCHEMES = [
  { id: "tonal_spot", name: "Tonal Spot", class: SchemeTonalSpot },
  { id: "vibrant", name: "Vibrant", class: SchemeVibrant },
  { id: "rainbow", name: "Rainbow", class: SchemeRainbow },
  { id: "expressive", name: "Expressive", class: SchemeExpressive },
  { id: "neutral", name: "Neutral", class: SchemeNeutral },
  { id: "monochrome", name: "Monochrome", class: SchemeMonochrome },
  { id: "fruit_salad", name: "Fruit Salad", class: SchemeFruitSalad },
  { id: "fidelity", name: "Fidelity", class: SchemeFidelity },
  { id: "content", name: "Content", class: SchemeContent },
];

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
  const [schemeType, setSchemeType] = useState("tonal_spot");
  const [scheme, setScheme] = useState<any>(null);

  // Generate scheme immediately when component mounts
  useEffect(() => {
    generateScheme();
  }, []);

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
        
        // Extract the source color from the image
        const { sourceColorFromImage } = await import("@/components/colors/utils/image_utils");
        const sourceColor = await sourceColorFromImage(img);
        
        // Generate scheme with the current settings
        generateSchemeFromSourceColor(sourceColor);
        setIsLoading(false);
      };
    } catch (error) {
      console.error("Error processing image:", error);
      setIsLoading(false);
    }
  };

  // Generate scheme from hex color input with immediate UI update
  const generateTheme = () => {
    setIsLoading(true);
    try {
      const sourceColor = argbFromHex(settings.source);
      generateSchemeFromSourceColor(sourceColor);
    } catch (error) {
      console.error("Error generating theme:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Generate scheme from source color using selected scheme type
  const generateSchemeFromSourceColor = (sourceColor: number) => {
    try {
      const hct = Hct.fromInt(sourceColor);
      const selectedScheme = SCHEMES.find(s => s.id === schemeType);
      
      if (!selectedScheme) {
        console.error(`Scheme type '${schemeType}' not found`);
        return;
      }

      // Create scheme instance with contrast level 0
      let generatedScheme;
      try {
        generatedScheme = new selectedScheme.class(hct, isDarkMode, 0);
        setScheme(generatedScheme);
      } catch (error) {
        console.error(`Error creating ${selectedScheme.name} scheme:`, error);
      }
    } catch (error) {
      console.error("Error generating scheme:", error);
    }
  };

  // Handle scheme type change with immediate regeneration
  const handleSchemeChange = (value: string) => {
    setIsLoading(true);
    setSchemeType(value);
    
    // Use setTimeout to ensure state update has propagated
    setTimeout(() => {
      try {
        const sourceColor = argbFromHex(settings.source);
        generateSchemeFromSourceColor(sourceColor);
      } catch (error) {
        console.error("Error generating theme after scheme change:", error);
      } finally {
        setIsLoading(false);
      }
    }, 0);
  };

  // Handle dark mode change with immediate regeneration
  const handleDarkModeChange = (dark: boolean) => {
    setIsLoading(true);
    setIsDarkMode(dark);
    
    // Use setTimeout to ensure state update has propagated
    setTimeout(() => {
      try {
        const sourceColor = argbFromHex(settings.source);
        generateSchemeFromSourceColor(sourceColor);
      } catch (error) {
        console.error("Error generating theme after dark mode change:", error);
      } finally {
        setIsLoading(false);
      }
    }, 0);
  };

  // Helper function for shorter name
  const generateScheme = () => generateThemeFromHex();
  
  // Generate a theme from the current hex color
  const generateThemeFromHex = () => {
    setIsLoading(true);
    try {
      const sourceColor = argbFromHex(settings.source);
      generateSchemeFromSourceColor(sourceColor);
    } catch (error) {
      console.error("Error generating theme from hex:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Helper: ARGB int to hex string
  const intToHex = (colorInt: number): string => {
    const hex = colorInt.toString(16).padStart(8, '0');
    return `#${hex.substring(2)}`;
  };

  // List of Material color roles to display
  const colorRoles: { name: string, key: keyof typeof scheme }[] = [
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
    <div className="p-8 container border-x border-dashed">
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
          
          <div className="mt-6 space-y-4">
            <div>
              <Label htmlFor="scheme-type">Scheme Type</Label>
              <Select value={schemeType} onValueChange={handleSchemeChange}>
                <SelectTrigger className="w-full mt-1.5" disabled={isLoading}>
                  <SelectValue placeholder="Select Scheme" />
                </SelectTrigger>
                <SelectContent>
                  {SCHEMES.map((scheme) => (
                    <SelectItem key={scheme.id} value={scheme.id}>
                      {scheme.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center gap-2">
              <Button 
                variant={!isDarkMode ? "default" : "outline"} 
                size="sm"
                onClick={() => handleDarkModeChange(false)}
                disabled={isLoading}
              >
                Light
              </Button>
              <Button 
                variant={isDarkMode ? "default" : "outline"} 
                size="sm"
                onClick={() => handleDarkModeChange(true)}
                disabled={isLoading}
              >
                Dark
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {isLoading && (
        <div className="text-center p-8 border rounded-lg">
          Generating theme...
        </div>
      )}
      
      {!isLoading && !scheme && (
        <div className="text-center p-8 border rounded-lg">
          Select a color or upload an image to generate a Material theme
        </div>
      )}
      
      {!isLoading && scheme && (
        <div>
          <h2 className="text-xl font-bold mb-4">
            {SCHEMES.find(s => s.id === schemeType)?.name} Scheme ({isDarkMode ? "Dark" : "Light"})
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {colorRoles.map(({ name, key }) => (
              scheme[key] && (
                <ColorSwatch
                  key={name}
                  name={name}
                  color={intToHex(scheme[key])}
                />
              )
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ColorSwatch component remains unchanged
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
        className={`mt-2 text-xs font-mono ${dark ? "text-white" : "text-black"}`}
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

