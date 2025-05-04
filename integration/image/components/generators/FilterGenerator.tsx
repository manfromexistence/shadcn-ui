"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Added for drop-shadow color
import { Label } from "@/components/ui/label";
import { Clipboard } from "lucide-react";
import { motion } from "framer-motion";

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


export function FilterGenerator() {
  const [blur, setBlur] = useState<number>(0);
  const [brightness, setBrightness] = useState<number>(1);
  const [contrast, setContrast] = useState<number>(1);
  const [grayscale, setGrayscale] = useState<number>(0);
  const [hueRotate, setHueRotate] = useState<number>(0);
  const [invert, setInvert] = useState<number>(0);
  const [opacity, setOpacity] = useState<number>(1);
  const [saturate, setSaturate] = useState<number>(1);
  const [sepia, setSepia] = useState<number>(0);
  // Drop Shadow specific state
  const [dsOffsetX, setDsOffsetX] = useState<number>(0);
  const [dsOffsetY, setDsOffsetY] = useState<number>(0);
  const [dsBlurRadius, setDsBlurRadius] = useState<number>(0);
  const [dsColor, setDsColor] = useState<string>("#000000");
  const [dsOpacity, setDsOpacity] = useState<number>(0.5);


  const generateCss = () => {
    const filters = [];
    if (blur > 0) filters.push(`blur(${blur.toFixed(1)}px)`);
    if (brightness !== 1) filters.push(`brightness(${brightness.toFixed(2)})`);
    if (contrast !== 1) filters.push(`contrast(${contrast.toFixed(2)})`);
    if (grayscale > 0) filters.push(`grayscale(${grayscale.toFixed(2)})`);
    if (hueRotate !== 0) filters.push(`hue-rotate(${hueRotate}deg)`);
    if (invert > 0) filters.push(`invert(${invert.toFixed(2)})`);
    if (opacity < 1) filters.push(`opacity(${opacity.toFixed(2)})`);
    if (saturate !== 1) filters.push(`saturate(${saturate.toFixed(2)})`);
    if (sepia > 0) filters.push(`sepia(${sepia.toFixed(2)})`);

    // Add drop-shadow if any of its values are non-default
     if (dsOffsetX !== 0 || dsOffsetY !== 0 || dsBlurRadius !== 0) {
        const shadowColorRgba = hexToRgba(dsColor, dsOpacity);
        filters.push(`drop-shadow(${dsOffsetX}px ${dsOffsetY}px ${dsBlurRadius}px ${shadowColorRgba})`);
     }


    if (filters.length === 0) {
        return 'filter: none;';
    }

    return `filter: ${filters.join(' ')};`;
  };

  const cssCode = generateCss();

  const handleCopy = () => {
    navigator.clipboard.writeText(cssCode).then(() => {
      console.log("Filter CSS copied!");
    }).catch(err => {
      console.error("Failed to copy CSS: ", err);
    });
  };

  const previewStyle = {
    filter: generateCss().replace('filter: ', '').replace(';', ''),
    width: '100px',
    height: '100px',
    backgroundColor: '#3b82f6', // Example element color
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
  };

  return (
    <motion.div // Added motion
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }} // Stagger animation
      className="w-full p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg mb-8"
    >
      <h2 className="text-2xl font-semibold mb-6 text-white">8. Filter Generator</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side: Preview */}
        <div className="flex flex-col items-center justify-center p-4">
          <h3 className="text-xl font-semibold mb-4 text-white">Preview</h3>
          <div
            className="w-64 h-64 flex items-center justify-center border border-dashed border-gray-400 relative overflow-hidden bg-gray-200" // Neutral background
          >
            <motion.div // Added motion
                style={previewStyle}
                animate={{ filter: previewStyle.filter }} // Animate filter change
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                Filtered
            </motion.div>
          </div>
        </div>

        {/* Right Side: Controls & Code */}
        <div className="flex flex-col space-y-3 p-4 max-h-[60vh] overflow-y-auto">
          <h3 className="text-xl font-semibold text-white">Customize Filters</h3>

          {/* Standard Filters (like BackdropFilterCustomizer) */}
          <div className="space-y-1">
            <Label htmlFor="f-blur" className="block text-sm font-medium text-white">Blur: {blur.toFixed(1)}px</Label>
            <Slider id="f-blur" min={0} max={20} step={0.1} value={[blur]} onValueChange={(v) => setBlur(v[0])} className="slider-styling" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="f-brightness" className="block text-sm font-medium text-white">Brightness: {brightness.toFixed(2)}</Label>
            <Slider id="f-brightness" min={0} max={2} step={0.01} value={[brightness]} onValueChange={(v) => setBrightness(v[0])} className="slider-styling" />
          </div>
           <div className="space-y-1">
            <Label htmlFor="f-contrast" className="block text-sm font-medium text-white">Contrast: {contrast.toFixed(2)}</Label>
            <Slider id="f-contrast" min={0} max={2} step={0.01} value={[contrast]} onValueChange={(v) => setContrast(v[0])} className="slider-styling" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="f-grayscale" className="block text-sm font-medium text-white">Grayscale: {grayscale.toFixed(2)}</Label>
            <Slider id="f-grayscale" min={0} max={1} step={0.01} value={[grayscale]} onValueChange={(v) => setGrayscale(v[0])} className="slider-styling" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="f-hueRotate" className="block text-sm font-medium text-white">Hue Rotate: {hueRotate}deg</Label>
            <Slider id="f-hueRotate" min={0} max={360} step={1} value={[hueRotate]} onValueChange={(v) => setHueRotate(v[0])} className="slider-styling" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="f-invert" className="block text-sm font-medium text-white">Invert: {invert.toFixed(2)}</Label>
            <Slider id="f-invert" min={0} max={1} step={0.01} value={[invert]} onValueChange={(v) => setInvert(v[0])} className="slider-styling" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="f-opacity" className="block text-sm font-medium text-white">Opacity: {opacity.toFixed(2)}</Label>
            <Slider id="f-opacity" min={0} max={1} step={0.01} value={[opacity]} onValueChange={(v) => setOpacity(v[0])} className="slider-styling" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="f-saturate" className="block text-sm font-medium text-white">Saturate: {saturate.toFixed(2)}</Label>
            <Slider id="f-saturate" min={0} max={3} step={0.01} value={[saturate]} onValueChange={(v) => setSaturate(v[0])} className="slider-styling" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="f-sepia" className="block text-sm font-medium text-white">Sepia: {sepia.toFixed(2)}</Label>
            <Slider id="f-sepia" min={0} max={1} step={0.01} value={[sepia]} onValueChange={(v) => setSepia(v[0])} className="slider-styling" />
          </div>

          {/* Drop Shadow Controls */}
           <div className="space-y-3 p-3 border border-white/20 rounded-md mt-4">
             <h4 className="text-lg font-medium text-white mb-2">Drop Shadow</h4>
              <div className="space-y-1">
                <Label htmlFor="f-ds-offset-x" className="block text-sm font-medium text-white">Offset X: {dsOffsetX}px</Label>
                <Slider id="f-ds-offset-x" min={-50} max={50} step={1} value={[dsOffsetX]} onValueChange={(v) => setDsOffsetX(v[0])} className="slider-styling" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="f-ds-offset-y" className="block text-sm font-medium text-white">Offset Y: {dsOffsetY}px</Label>
                <Slider id="f-ds-offset-y" min={-50} max={50} step={1} value={[dsOffsetY]} onValueChange={(v) => setDsOffsetY(v[0])} className="slider-styling" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="f-ds-blur-radius" className="block text-sm font-medium text-white">Blur Radius: {dsBlurRadius}px</Label>
                <Slider id="f-ds-blur-radius" min={0} max={100} step={1} value={[dsBlurRadius]} onValueChange={(v) => setDsBlurRadius(v[0])} className="slider-styling" />
              </div>
              <div className="flex items-end space-x-4">
                <div className="space-y-1 flex-grow">
                  <Label htmlFor="f-ds-color" className="block text-sm font-medium text-white">Color</Label>
                  <div className="flex items-center space-x-2">
                     <Input id="f-ds-color" type="color" value={dsColor} onChange={(e) => setDsColor(e.target.value)} className="w-10 h-10 p-0 border-none cursor-pointer rounded" />
                     <Input type="text" value={dsColor} onChange={(e) => setDsColor(e.target.value)} className="flex-grow bg-white/20 border-white/30 text-white placeholder:text-gray-300" placeholder="#000000" />
                  </div>
                </div>
                <div className="space-y-1 w-1/3">
                  <Label htmlFor="f-ds-opacity" className="block text-sm font-medium text-white">Opacity: {dsOpacity.toFixed(2)}</Label>
                  <Slider id="f-ds-opacity" min={0} max={1} step={0.01} value={[dsOpacity]} onValueChange={(v) => setDsOpacity(v[0])} className="slider-styling" />
                </div>
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
         /* Minimal styling for sliders within this component */
        [role="slider"] { background-color: white; border: none; width: 1rem; height: 1rem; }
        [role="slider"] ~ span { background-color: rgba(255,255,255,0.3); height: 0.25rem; }
      `}</style>
    </motion.div> // Added motion
  );
}
