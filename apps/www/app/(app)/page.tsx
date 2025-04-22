"use client";

import { useState, useRef, ChangeEvent } from "react";
import { ColorPicker } from "antd";
import { Input } from "@/registry/new-york/ui/input";
import { Button } from "@/registry/new-york/ui/button";
import { Card, CardContent } from "@/registry/new-york/ui/card";
import { Label } from "@/registry/new-york/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/new-york/ui/tabs";
import { argbFromHex, themeFromSourceColor, themeFromImage, applyTheme } from "@/components/colors";

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

  const handleColorChange = (color: any) => {
    const hexColor = color.toHex();
    setSettings((prev) => ({ ...prev, source: hexColor }));
  };

  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    try {
      // Create a data URL from the file
      const reader = new FileReader();
      reader.readAsDataURL(file);
      
      reader.onload = async () => {
        // Create an image element to get the image data
        const img = new Image();
        img.src = reader.result as string;
        
        await new Promise((resolve) => {
          img.onload = resolve;
        });

        // Create a canvas to extract image data
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0);
        
        // Get image data
        const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height);
        
        if (imageData) {
          // Generate theme from image (using material-color-utilities)
          const theme = await themeFromImage(img);
          setTheme(theme);
          applyThemeToCssVariables(theme);
        }
        
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
      applyThemeToCssVariables(newTheme);
    } catch (error) {
      console.error("Error generating theme:", error);
    }
  };

  const applyThemeToCssVariables = (theme: any) => {
    // This is a simplified version - in a real app you would map the material theme
    // colors to your CSS variables more comprehensively
    const root = document.documentElement;
    
    // Apply some basic mappings as an example
    if (theme.schemes?.light) {
      root.style.setProperty('--background', hexToHsl(theme.schemes.light.background));
      root.style.setProperty('--foreground', hexToHsl(theme.schemes.light.onBackground));
      root.style.setProperty('--primary', hexToHsl(theme.schemes.light.primary));
      root.style.setProperty('--primary-foreground', hexToHsl(theme.schemes.light.onPrimary));
      root.style.setProperty('--secondary', hexToHsl(theme.schemes.light.secondary));
      root.style.setProperty('--secondary-foreground', hexToHsl(theme.schemes.light.onSecondary));
      // Add more mappings as needed
    }
  };

  // Helper function to convert hex to HSL format for CSS variables
  const hexToHsl = (hex: number): string => {
    // Convert ARGB int to RGB components
    const r = ((hex >> 16) & 255) / 255;
    const g = ((hex >> 8) & 255) / 255;
    const b = (hex & 255) / 255;
    
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      
      h *= 60;
    }
    
    return `${Math.round(h)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
  };

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
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ColorSwatch name="background" />
        <ColorSwatch name="foreground" />
        <ColorSwatch name="card" />
        <ColorSwatch name="card-foreground" />
        <ColorSwatch name="popover" />
        <ColorSwatch name="popover-foreground" />
        <ColorSwatch name="primary" />
        <ColorSwatch name="primary-foreground" />
        <ColorSwatch name="secondary" />
        <ColorSwatch name="secondary-foreground" />
        <ColorSwatch name="muted" />
        <ColorSwatch name="muted-foreground" />
        <ColorSwatch name="accent" />
        <ColorSwatch name="accent-foreground" />
        <ColorSwatch name="destructive" />
        <ColorSwatch name="destructive-foreground" />
        <ColorSwatch name="border" />
        <ColorSwatch name="input" />
        <ColorSwatch name="ring" />
        <ColorSwatch name="radius" label="Not a color" />
        <ColorSwatch name="chart-1" />
        <ColorSwatch name="chart-2" />
        <ColorSwatch name="chart-3" />
        <ColorSwatch name="chart-4" />
        <ColorSwatch name="chart-5" />
        <ColorSwatch name="sidebar-background" />
        <ColorSwatch name="sidebar-foreground" />
        <ColorSwatch name="sidebar-primary" />
        <ColorSwatch name="sidebar-primary-foreground" />
        <ColorSwatch name="sidebar-accent" />
        <ColorSwatch name="sidebar-accent-foreground" />
        <ColorSwatch name="sidebar-border" />
        <ColorSwatch name="sidebar-ring" />
      </div>
    </div>
  )
}

function ColorSwatch({ name, label }: { name: string, label?: string }) {
  // Determine if this is likely a dark background for text contrast
  const isDarkColor = name.includes("foreground") ||
    name === "primary" ||
    name === "destructive" ||
    name === "chart-3";

  return (
    <div
      className="p-6 rounded-md flex items-center justify-center h-32 border"
      style={{ backgroundColor: name === "radius" ? "#f0f0f0" : `hsl(var(--${name}))` }}
    >
      <div className={`px-2 py-1 rounded`}>
        <p
          className="font-bold text-transparent"
          style={{
            background: 'linear-gradient(to right, #ff0000, #ff8000, #ffff00, #00ff00, #00ffff, #0000ff, #8000ff, #ff00ff)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            filter: isDarkColor ? 'drop-shadow(0px 0px 1px rgba(255,255,255,0.7))' : 'drop-shadow(0px 0px 1px rgba(0,0,0,0.7))'
          }}
        >
          {label || `bg-${name}`}
        </p>
      </div>
    </div>
  )
}

