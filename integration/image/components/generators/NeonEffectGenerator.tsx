"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Clipboard } from "lucide-react";
import { motion } from "framer-motion";

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

export function NeonEffectGenerator() {
  // Using multiple box-shadows for a neon effect
  const [blurRadius, setBlurRadius] = useState<number>(10);
  const [spreadRadius, setSpreadRadius] = useState<number>(2);
  const [color, setColor] = useState<string>("#00ff00"); // Bright green default

  const generateCss = () => {
    // Basic neon effect: a tight inner shadow and a wider outer glow
    // More complex effects might use more layers or text-shadow for text
    const outerGlowColor = hexToRgba(color, 0.8); // More opaque outer glow
    const innerGlowColor = hexToRgba("#ffffff", 0.9); // Bright inner highlight (optional)

    // Adjust spread/blur for inner vs outer
    const outerBlur = blurRadius;
    const outerSpread = spreadRadius;
    const innerBlur = Math.max(0, blurRadius / 3);
    const innerSpread = Math.max(0, spreadRadius / 3);

    // Combine shadows
    const boxShadows = [
      `0 0 ${outerBlur}px ${outerSpread}px ${outerGlowColor}`,
      // `0 0 ${innerBlur}px ${innerSpread}px ${innerGlowColor} inset` // Optional inner glow
    ];

    return `box-shadow: ${boxShadows.join(', ')};`;
  };

  const cssCode = generateCss();

  const handleCopy = () => {
    navigator.clipboard.writeText(cssCode).then(() => {
      console.log("Neon Effect CSS copied!");
    }).catch(err => {
      console.error("Failed to copy CSS: ", err);
    });
  };

  const previewStyle = {
    boxShadow: generateCss().replace('box-shadow: ', '').replace(';', ''),
    width: '100px',
    height: '100px',
    backgroundColor: '#111827', // Very dark background for neon
    borderRadius: '8px',
    border: `1px solid ${hexToRgba(color, 0.5)}` // Optional matching border
  };

  return (
    <motion.div // Added motion
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }} // Stagger animation
      className="w-full p-6 bg-black/50 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg mb-8" // Darker background for neon
    >
      <h2 className="text-2xl font-semibold mb-6 text-white">5. Neon Effect Generator</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side: Preview */}
        <div className="flex flex-col items-center justify-center p-4">
          <h3 className="text-xl font-semibold mb-4 text-white">Preview</h3>
          <div
            className="w-64 h-64 flex items-center justify-center border border-dashed border-gray-400 relative overflow-hidden bg-black" // Black background
          >
            <motion.div // Added motion
              style={previewStyle}
              animate={previewStyle} // Animate style changes
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              Neon Text
            </motion.div>
          </div>
        </div>

        {/* Right Side: Controls & Code */}
        <div className="flex flex-col space-y-4 p-4">
          <h3 className="text-xl font-semibold text-white">Customize</h3>

          {/* Blur Radius */}
          <div className="space-y-2">
            <Label htmlFor="neon-blur" className="block text-sm font-medium text-white">
              Glow Blur: {blurRadius}px
            </Label>
            <Slider id="neon-blur" min={0} max={50} step={1} value={[blurRadius]} onValueChange={(v) => setBlurRadius(v[0])} className="slider-styling" />
          </div>

          {/* Spread Radius */}
          <div className="space-y-2">
            <Label htmlFor="neon-spread" className="block text-sm font-medium text-white">
              Glow Spread: {spreadRadius}px
            </Label>
            <Slider id="neon-spread" min={0} max={20} step={1} value={[spreadRadius]} onValueChange={(v) => setSpreadRadius(v[0])} className="slider-styling" />
          </div>

          {/* Color Picker */}
          <div className="space-y-2">
            <Label htmlFor="neon-color" className="block text-sm font-medium text-white">Color</Label>
            <div className="flex items-center space-x-2">
               <Input id="neon-color" type="color" value={color} onChange={(e) => setColor(e.target.value)} className="w-10 h-10 p-0 border-none cursor-pointer rounded" />
               <Input type="text" value={color} onChange={(e) => setColor(e.target.value)} className="flex-grow bg-white/20 border-white/30 text-white placeholder:text-gray-300" placeholder="#00ff00" />
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
    </motion.div> // Added motion
  );
}
