"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Clipboard, Plus, Trash2 } from "lucide-react";

type GradientType = "linear" | "radial";

export function GradientGenerator() {
  const [gradientType, setGradientType] = useState<GradientType>("linear");
  const [colors, setColors] = useState<string[]>(["#ff0000", "#0000ff"]);
  const [angle, setAngle] = useState<number>(90); // Angle for linear gradient

  const handleColorChange = (index: number, newColor: string) => {
    const newColors = [...colors];
    newColors[index] = newColor;
    setColors(newColors);
  };

  const addColor = () => {
    setColors([...colors, colors[colors.length - 1] || "#ffffff"]);
  };

  const removeColor = (index: number) => {
    if (colors.length <= 2) return; // Need at least two colors
    const newColors = colors.filter((_, i) => i !== index);
    setColors(newColors);
  };

  const generateCss = () => {
    const colorStops = colors.join(", ");
    if (gradientType === "linear") {
      return `background: linear-gradient(${angle}deg, ${colorStops});`;
    } else { // radial
      return `background: radial-gradient(circle, ${colorStops});`;
    }
  };

  const cssCode = generateCss();

  const handleCopy = () => {
    navigator.clipboard.writeText(cssCode).then(() => {
      console.log("Gradient CSS copied!");
    }).catch(err => {
      console.error("Failed to copy CSS: ", err);
    });
  };

  const previewStyle = {
    background: generateCss().replace('background: ', ''), // Reuse generated CSS for preview
    width: '100%',
    height: '100%',
  };

  return (
    <div className="w-full p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg mb-8">
       <h2 className="text-2xl font-semibold mb-6 text-white">2. Gradient Generator</h2>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         {/* Left Side: Preview */}
         <div className="flex flex-col items-center justify-center p-4">
           <h3 className="text-xl font-semibold mb-4 text-white">Preview</h3>
           <div
             className="w-64 h-64 flex items-center justify-center border border-dashed border-gray-400 relative overflow-hidden"
           >
             <div style={previewStyle}></div> {/* Simple div showing the gradient */}
           </div>
         </div>

         {/* Right Side: Controls & Code */}
         <div className="flex flex-col space-y-6 p-4">
           <h3 className="text-xl font-semibold text-white">Customize</h3>

           {/* Gradient Type */}
           <div className="space-y-2">
             <Label className="text-white">Gradient Type</Label>
             <RadioGroup
               defaultValue="linear"
               value={gradientType}
               onValueChange={(value: GradientType) => setGradientType(value)}
               className="flex space-x-4"
             >
               <div className="flex items-center space-x-2">
                 <RadioGroupItem value="linear" id="g-r1" className="text-white border-white/50" />
                 <Label htmlFor="g-r1" className="text-white">Linear</Label>
               </div>
               <div className="flex items-center space-x-2">
                 <RadioGroupItem value="radial" id="g-r2" className="text-white border-white/50" />
                 <Label htmlFor="g-r2" className="text-white">Radial</Label>
               </div>
             </RadioGroup>
           </div>

           {/* Color Stops */}
           <div className="space-y-3">
             <Label className="text-white">Colors</Label>
             {colors.map((color, index) => (
               <div key={index} className="flex items-center space-x-2">
                 <Input
                   type="color"
                   value={color}
                   onChange={(e) => handleColorChange(index, e.target.value)}
                   className="w-10 h-10 p-0 border-none cursor-pointer rounded"
                 />
                 <Input
                   type="text"
                   value={color}
                   onChange={(e) => handleColorChange(index, e.target.value)}
                   className="flex-grow bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                   placeholder="#rrggbb"
                 />
                 <Button
                   variant="ghost"
                   size="icon"
                   onClick={() => removeColor(index)}
                   disabled={colors.length <= 2}
                   className="text-red-400 hover:text-red-500 disabled:text-gray-500 disabled:cursor-not-allowed"
                   aria-label="Remove color"
                 >
                   <Trash2 className="h-4 w-4" />
                 </Button>
               </div>
             ))}
             <Button onClick={addColor} variant="outline" size="sm" className="text-white border-white/50 hover:bg-white/10">
               <Plus className="h-4 w-4 mr-2" /> Add Color
             </Button>
           </div>

           {/* Angle Input (Only for Linear) */}
           {gradientType === 'linear' && (
             <div className="space-y-2">
               <Label htmlFor="angle-input" className="block text-sm font-medium text-white">
                 Angle: {angle}°
               </Label>
               <Input
                 id="angle-input"
                 type="number"
                 min={0}
                 max={360}
                 value={angle}
                 onChange={(e) => setAngle(parseInt(e.target.value, 10) || 0)}
                 className="w-full bg-white/20 border-white/30 text-white"
               />
             </div>
           )}

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
     </div>
  );
}

