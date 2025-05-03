"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Clipboard } from "lucide-react";

// Reusing hexToRgba helper (consider moving to a shared utils file)
const hexToRgba = (hex: string, alpha: number = 1): string => {
  hex = hex.replace('#', '');
  if (hex.length === 3) {
    hex = hex.split('').map(char => char + char).join('');
  }
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const validAlpha = Math.max(0, Math.min(1, alpha));
  return `rgba(${r}, ${g}, ${b}, ${validAlpha.toFixed(2)})`;
};

export function DropShadowGenerator() {
  const [offsetX, setOffsetX] = useState<number>(0);
  const [offsetY, setOffsetY] = useState<number>(4);
  const [blurRadius, setBlurRadius] = useState<number>(8);
  const [color, setColor] = useState<string>("#000000"); // Default shadow color
  const [opacity, setOpacity] = useState<number>(0.5);

  const generateCss = () => {
    const shadowColorRgba = hexToRgba(color, opacity);
    // Note: drop-shadow doesn't use spread or inset
    return `filter: drop-shadow(${offsetX}px ${offsetY}px ${blurRadius}px ${shadowColorRgba});`;
  };

  const cssCode = generateCss();

  const handleCopy = () => {
    navigator.clipboard.writeText(cssCode).then(() => {
      console.log("Drop Shadow CSS copied!");
    }).catch(err => {
      console.error("Failed to copy CSS: ", err);
    });
  };

  const previewStyle = {
    filter: generateCss().replace('filter: ', ''),
    // Apply to an element with content, like text or an SVG
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#3b82f6', // Example text color
  };

  return (
    <div className="w-full p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg mb-8">
      <h2 className="text-2xl font-semibold mb-6 text-white">4. Drop Shadow Generator</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side: Preview */}
        <div className="flex flex-col items-center justify-center p-4">
          <h3 className="text-xl font-semibold mb-4 text-white">Preview</h3>
          <div
            className="w-64 h-64 flex items-center justify-center border border-dashed border-gray-400 relative overflow-hidden bg-gray-200" // Neutral background
          >
            {/* Drop shadow applies to the content inside */}
            <span style={previewStyle}>Drop Shadow</span>
          </div>
        </div>

        {/* Right Side: Controls & Code */}
        <div className="flex flex-col space-y-4 p-4">
          <h3 className="text-xl font-semibold text-white">Customize</h3>

          {/* Offset X */}
          <div className="space-y-2">
            <Label htmlFor="ds-offset-x" className="block text-sm font-medium text-white">
              Offset X: {offsetX}px
            </Label>
            <Slider id="ds-offset-x" min={-50} max={50} step={1} value={[offsetX]} onValueChange={(v) => setOffsetX(v[0])} className="slider-styling" />
          </div>

          {/* Offset Y */}
          <div className="space-y-2">
            <Label htmlFor="ds-offset-y" className="block text-sm font-medium text-white">
              Offset Y: {offsetY}px
            </Label>
            <Slider id="ds-offset-y" min={-50} max={50} step={1} value={[offsetY]} onValueChange={(v) => setOffsetY(v[0])} className="slider-styling" />
          </div>

          {/* Blur Radius */}
          <div className="space-y-2">
            <Label htmlFor="ds-blur-radius" className="block text-sm font-medium text-white">
              Blur Radius: {blurRadius}px
            </Label>
            <Slider id="ds-blur-radius" min={0} max={100} step={1} value={[blurRadius]} onValueChange={(v) => setBlurRadius(v[0])} className="slider-styling" />
          </div>

          {/* Color & Opacity */}
          <div className="flex items-end space-x-4">
            <div className="space-y-2 flex-grow">
              <Label htmlFor="ds-shadow-color" className="block text-sm font-medium text-white">Color</Label>
              <div className="flex items-center space-x-2">
                 <Input id="ds-shadow-color" type="color" value={color} onChange={(e) => setColor(e.target.value)} className="w-10 h-10 p-0 border-none cursor-pointer rounded" />
                 <Input type="text" value={color} onChange={(e) => setColor(e.target.value)} className="flex-grow bg-white/20 border-white/30 text-white placeholder:text-gray-300" placeholder="#000000" />
              </div>
            </div>
            <div className="space-y-2 w-1/3">
              <Label htmlFor="ds-shadow-opacity" className="block text-sm font-medium text-white">Opacity: {opacity.toFixed(2)}</Label>
              <Slider id="ds-shadow-opacity" min={0} max={1} step={0.01} value={[opacity]} onValueChange={(v) => setOpacity(v[0])} className="slider-styling" />
            </div>
          </div>

          {/* Code Snippet */}
          <div className="space-y-2 pt-4">
            <h3 className="text-lg font-medium text-white">CSS Code</h3>
            <div className="relative rounded-md bg-gray-800 p-4">
              <pre className="text-sm text-gray-300 whitespace-pre-wrap break-words">
                <code>{cssCode}</code>
              </pre>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 text-gray-400 hover:text-white hover:bg-gray-700"
                onClick={handleCopy}
                aria-label="Copy CSS code"
              >
                <Clipboard className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Add shared slider styling if needed */}
      <style jsx>{`
        .slider-styling {
          /* className="[&>span:first-child]:h-1 [&>span:first-child]:bg-white/30 [&_[role=slider]]:bg-white [&_[role=slider]]:w-4 [&_[role=slider]]:h-4 [&_[role=slider]]:border-0" */
        }
      `}</style>
    </div>
  );
}
