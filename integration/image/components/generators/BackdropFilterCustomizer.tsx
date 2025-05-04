"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Clipboard } from "lucide-react";
import { motion } from "framer-motion";

export function BackdropFilterCustomizer() {
  const [blur, setBlur] = useState<number>(5); // Default blur
  const [brightness, setBrightness] = useState<number>(1); // Default 100%
  const [contrast, setContrast] = useState<number>(1); // Default 100%
  const [grayscale, setGrayscale] = useState<number>(0); // Default 0%
  const [hueRotate, setHueRotate] = useState<number>(0); // Default 0deg
  const [invert, setInvert] = useState<number>(0); // Default 0%
  const [opacity, setOpacity] = useState<number>(1); // Default 100%
  const [saturate, setSaturate] = useState<number>(1); // Default 100%
  const [sepia, setSepia] = useState<number>(0); // Default 0%

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

    if (filters.length === 0) {
        return 'backdrop-filter: none;'; // Or return empty string
    }

    return `backdrop-filter: ${filters.join(' ')};\n-webkit-backdrop-filter: ${filters.join(' ')}; /* Safari */`;
  };

  const cssCode = generateCss();

  const handleCopy = () => {
    navigator.clipboard.writeText(cssCode).then(() => {
      console.log("Backdrop Filter CSS copied!");
    }).catch(err => {
      console.error("Failed to copy CSS: ", err);
    });
  };

  const previewStyle = {
    backdropFilter: generateCss().split('\n')[0].replace('backdrop-filter: ', '').replace(';', ''),
    WebkitBackdropFilter: generateCss().split('\n')[1]?.replace('-webkit-backdrop-filter: ', '').replace(';', ''),
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent background for the element itself
    padding: '2rem',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    color: 'white', // Text color for preview
  };

  return (
    <motion.div // Added motion
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }} // Stagger animation
      className="w-full p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg mb-8"
    >
      <h2 className="text-2xl font-semibold mb-6 text-white">6. Backdrop Filter Customizer</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side: Preview */}
        <div className="flex flex-col items-center justify-center p-4">
          <h3 className="text-xl font-semibold mb-4 text-white">Preview</h3>
          <div
            className="w-64 h-64 flex items-center justify-center border border-dashed border-gray-400 relative overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: 'url(/kenjaku.jpg)' }} // Needs background behind the element
          >
            <motion.div // Added motion
                style={previewStyle}
                animate={{ // Animate individual filter properties for smoother transitions if possible
                    backdropFilter: previewStyle.backdropFilter,
                    WebkitBackdropFilter: previewStyle.WebkitBackdropFilter
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                Content Here
            </motion.div>
          </div>
        </div>

        {/* Right Side: Controls & Code */}
        <div className="flex flex-col space-y-3 p-4 max-h-[60vh] overflow-y-auto"> {/* Scrollable controls */}
          <h3 className="text-xl font-semibold text-white">Customize Filters</h3>

          {/* Blur */}
          <div className="space-y-1">
            <Label htmlFor="bf-blur" className="block text-sm font-medium text-white">Blur: {blur.toFixed(1)}px</Label>
            <Slider id="bf-blur" min={0} max={20} step={0.1} value={[blur]} onValueChange={(v) => setBlur(v[0])} className="slider-styling" />
          </div>

          {/* Brightness */}
          <div className="space-y-1">
            <Label htmlFor="bf-brightness" className="block text-sm font-medium text-white">Brightness: {brightness.toFixed(2)}</Label>
            <Slider id="bf-brightness" min={0} max={2} step={0.01} value={[brightness]} onValueChange={(v) => setBrightness(v[0])} className="slider-styling" />
          </div>

          {/* Contrast */}
          <div className="space-y-1">
            <Label htmlFor="bf-contrast" className="block text-sm font-medium text-white">Contrast: {contrast.toFixed(2)}</Label>
            <Slider id="bf-contrast" min={0} max={2} step={0.01} value={[contrast]} onValueChange={(v) => setContrast(v[0])} className="slider-styling" />
          </div>

          {/* Grayscale */}
          <div className="space-y-1">
            <Label htmlFor="bf-grayscale" className="block text-sm font-medium text-white">Grayscale: {grayscale.toFixed(2)}</Label>
            <Slider id="bf-grayscale" min={0} max={1} step={0.01} value={[grayscale]} onValueChange={(v) => setGrayscale(v[0])} className="slider-styling" />
          </div>

          {/* Hue Rotate */}
          <div className="space-y-1">
            <Label htmlFor="bf-hueRotate" className="block text-sm font-medium text-white">Hue Rotate: {hueRotate}deg</Label>
            <Slider id="bf-hueRotate" min={0} max={360} step={1} value={[hueRotate]} onValueChange={(v) => setHueRotate(v[0])} className="slider-styling" />
          </div>

          {/* Invert */}
          <div className="space-y-1">
            <Label htmlFor="bf-invert" className="block text-sm font-medium text-white">Invert: {invert.toFixed(2)}</Label>
            <Slider id="bf-invert" min={0} max={1} step={0.01} value={[invert]} onValueChange={(v) => setInvert(v[0])} className="slider-styling" />
          </div>

          {/* Opacity */}
          <div className="space-y-1">
            <Label htmlFor="bf-opacity" className="block text-sm font-medium text-white">Opacity: {opacity.toFixed(2)}</Label>
            <Slider id="bf-opacity" min={0} max={1} step={0.01} value={[opacity]} onValueChange={(v) => setOpacity(v[0])} className="slider-styling" />
          </div>

          {/* Saturate */}
          <div className="space-y-1">
            <Label htmlFor="bf-saturate" className="block text-sm font-medium text-white">Saturate: {saturate.toFixed(2)}</Label>
            <Slider id="bf-saturate" min={0} max={3} step={0.01} value={[saturate]} onValueChange={(v) => setSaturate(v[0])} className="slider-styling" /> {/* Max 3 for more range */}
          </div>

          {/* Sepia */}
          <div className="space-y-1">
            <Label htmlFor="bf-sepia" className="block text-sm font-medium text-white">Sepia: {sepia.toFixed(2)}</Label>
            <Slider id="bf-sepia" min={0} max={1} step={0.01} value={[sepia]} onValueChange={(v) => setSepia(v[0])} className="slider-styling" />
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
