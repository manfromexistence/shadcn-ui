"use client";

import { useState } from "react";
import { motion } from "framer-motion"; // Added
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Clipboard } from "lucide-react";

// Helper to convert hex to rgba
const hexToRgba = (hex: string, alpha: number): string => {
  hex = hex.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha.toFixed(2)})`;
};


export function GlassmorphismGenerator() {
  const [blur, setBlur] = useState<number>(7);
  const [transparency, setTransparency] = useState<number>(0.25);
  const [color, setColor] = useState<string>("#ffffff"); // Default to white

  const generateCss = () => {
    const rgbaBackground = hexToRgba(color, transparency);
    return `background: ${rgbaBackground};
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); /* Default shadow */
backdrop-filter: blur(${blur.toFixed(1)}px);
-webkit-backdrop-filter: blur(${blur.toFixed(1)}px);
border-radius: 10px;
border: 1px solid rgba(255, 255, 255, 0.18); /* Default border */`;
  };

  const cssCode = generateCss();

  const handleCopy = () => {
    navigator.clipboard.writeText(cssCode).then(() => {
      console.log("Glassmorphism CSS copied!");
    }).catch(err => {
      console.error("Failed to copy CSS: ", err);
    });
  };

  const previewStyle = {
    background: hexToRgba(color, transparency),
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    backdropFilter: `blur(${blur}px)`,
    WebkitBackdropFilter: `blur(${blur}px)`,
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.18)',
  };

  return (
    <motion.div // Added motion
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg mb-8"
    >
      <h2 className="text-2xl font-semibold mb-6 text-white">1. Glassmorphism Generator</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side: Preview */}
        <div className="flex flex-col items-center justify-center p-4">
          <h3 className="text-xl font-semibold mb-4 text-white">Preview</h3>
          <div
            className="w-96 h-96 flex items-center justify-center border border-dashed border-gray-400 relative overflow-hidden bg-cover bg-center" // Increased size
            style={{ backgroundImage: 'url(/kenjaku.jpg)' }} // Example background
          >
            <motion.div // Added motion
              style={previewStyle}
              animate={previewStyle} // Animate style changes
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              Glass Effect
            </motion.div>
          </div>
        </div>

        {/* Right Side: Controls & Code */}
        <div className="flex flex-col space-y-6 p-4">
          <h3 className="text-xl font-semibold text-white">Customize</h3>

          {/* Color Picker */}
          <div className="space-y-2">
            <Label htmlFor="color-picker" className="block text-sm font-medium text-white">
              Background Color
            </Label>
            <div className="flex items-center space-x-2">
               <Input
                 id="color-picker"
                 type="color"
                 value={color}
                 onChange={(e) => setColor(e.target.value)}
                 className="w-10 h-10 p-0 border-none cursor-pointer rounded"
               />
               <Input
                 type="text"
                 value={color}
                 onChange={(e) => setColor(e.target.value)}
                 className="flex-grow bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                 placeholder="#ffffff"
               />
             </div>
          </div>


          {/* Transparency Slider */}
          <div className="space-y-2">
            <Label htmlFor="transparency-slider" className="block text-sm font-medium text-white">
              Transparency (Alpha): {transparency.toFixed(2)}
            </Label>
            <Slider
              id="transparency-slider"
              min={0}
              max={1}
              step={0.01}
              value={[transparency]}
              onValueChange={(value) => setTransparency(value[0])}
              className="[&>span:first-child]:h-1 [&>span:first-child]:bg-white/30 [&_[role=slider]]:bg-white [&_[role=slider]]:w-4 [&_[role=slider]]:h-4 [&_[role=slider]]:border-0"
            />
          </div>

          {/* Blur Slider */}
          <div className="space-y-2">
            <Label htmlFor="blur-slider" className="block text-sm font-medium text-white">
              Blur: {blur.toFixed(1)}px
            </Label>
            <Slider
              id="blur-slider"
              min={0}
              max={20}
              step={0.1}
              value={[blur]}
              onValueChange={(value) => setBlur(value[0])}
              className="[&>span:first-child]:h-1 [&>span:first-child]:bg-white/30 [&_[role=slider]]:bg-white [&_[role=slider]]:w-4 [&_[role=slider]]:h-4 [&_[role=slider]]:border-0"
            />
          </div>

          {/* Code Snippet */}
          <div className="space-y-2">
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
    </motion.div> // Added motion
  );
}
