"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Clipboard } from "lucide-react";

// Reusing hexToRgba helper
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

export function BlurGlowGenerator() {
  // Using box-shadow for glow effect
  const [blurRadius, setBlurRadius] = useState<number>(15);
  const [spreadRadius, setSpreadRadius] = useState<number>(5);
  const [color, setColor] = useState<string>("#0ea5e9"); // Sky blue default
  const [opacity, setOpacity] = useState<number>(0.6);

  const generateCss = () => {
    const glowColorRgba = hexToRgba(color, opacity);
    // Simple glow using a single box-shadow. More complex glows might layer shadows.
    return `box-shadow: 0px 0px ${blurRadius}px ${spreadRadius}px ${glowColorRgba};`;
  };

  const cssCode = generateCss();

  const handleCopy = () => {
    navigator.clipboard.writeText(cssCode).then(() => {
      console.log("Blur Glow CSS copied!");
    }).catch(err => {
      console.error("Failed to copy CSS: ", err);
    });
  };

  const previewStyle = {
    boxShadow: generateCss().replace('box-shadow: ', ''),
    width: '100px',
    height: '100px',
    backgroundColor: '#1f2937', // Dark background helps see the glow
    borderRadius: '8px',
  };

  return (
    <div className="w-full p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg mb-8">
      <h2 className="text-2xl font-semibold mb-6 text-white">5. Blur Glow Generator</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side: Preview */}
        <div className="flex flex-col items-center justify-center p-4">
          <h3 className="text-xl font-semibold mb-4 text-white">Preview</h3>
          <div
            className="w-64 h-64 flex items-center justify-center border border-dashed border-gray-400 relative overflow-hidden bg-gray-900" // Dark background
          >
            <div style={previewStyle}></div>
          </div>
        </div>

        {/* Right Side: Controls & Code */}
        <div className="flex flex-col space-y-4 p-4">
          <h3 className="text-xl font-semibold text-white">Customize</h3>

          {/* Blur Radius */}
          <div className="space-y-2">
            <Label htmlFor="glow-blur" className="block text-sm font-medium text-white">
              Glow Blur: {blurRadius}px
            </Label>
            <Slider id="glow-blur" min={0} max={50} step={1} value={[blurRadius]} onValueChange={(v) => setBlurRadius(v[0])} className="slider-styling" />
          </div>

          {/* Spread Radius */}
          <div className="space-y-2">
            <Label htmlFor="glow-spread" className="block text-sm font-medium text-white">
              Glow Spread: {spreadRadius}px
            </Label>
            <Slider id="glow-spread" min={0} max={30} step={1} value={[spreadRadius]} onValueChange={(v) => setSpreadRadius(v[0])} className="slider-styling" />
          </div>

          {/* Color & Opacity */}
          <div className="flex items-end space-x-4">
            <div className="space-y-2 flex-grow">
              <Label htmlFor="glow-color" className="block text-sm font-medium text-white">Color</Label>
              <div className="flex items-center space-x-2">
                 <Input id="glow-color" type="color" value={color} onChange={(e) => setColor(e.target.value)} className="w-10 h-10 p-0 border-none cursor-pointer rounded" />
                 <Input type="text" value={color} onChange={(e) => setColor(e.target.value)} className="flex-grow bg-white/20 border-white/30 text-white placeholder:text-gray-300" placeholder="#0ea5e9" />
              </div>
            </div>
            <div className="space-y-2 w-1/3">
              <Label htmlFor="glow-opacity" className="block text-sm font-medium text-white">Opacity: {opacity.toFixed(2)}</Label>
              <Slider id="glow-opacity" min={0} max={1} step={0.01} value={[opacity]} onValueChange={(v) => setOpacity(v[0])} className="slider-styling" />
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
