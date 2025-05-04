// Create file: /workspaces/shadcn-ui/integration/image/components/generators/MeshGenerator.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Clipboard } from "lucide-react";

// Simple Mesh Gradient using multiple radial gradients
// More complex mesh gradients often require SVG or Canvas

export function MeshGenerator() {
  const [color1, setColor1] = useState<string>("#ffadad"); // Top-left
  const [color2, setColor2] = useState<string>("#ffd6a5"); // Top-right
  const [color3, setColor3] = useState<string>("#fdffb6"); // Bottom-left
  const [color4, setColor4] = useState<string>("#caffbf"); // Bottom-right
  const [background, setBackground] = useState<string>("#9bf6ff"); // Background blend color

  const generateCss = () => {
    // Using multiple radial gradients to simulate a mesh effect
    return `background-color: ${background};
background-image:
  radial-gradient(at 0% 0%, ${color1} 0px, transparent 50%),
  radial-gradient(at 98% 1%, ${color2} 0px, transparent 50%),
  radial-gradient(at 0% 97%, ${color3} 0px, transparent 50%),
  radial-gradient(at 98% 99%, ${color4} 0px, transparent 50%);
background-size: 100% 100%; /* Ensure gradients cover the area */
background-repeat: no-repeat;`;
  };

  const cssCode = generateCss();

  const handleCopy = () => {
    navigator.clipboard.writeText(cssCode).then(() => {
      console.log("Mesh Gradient CSS copied!");
    }).catch(err => {
      console.error("Failed to copy CSS: ", err);
    });
  };

  const previewStyle = {
    backgroundColor: background,
    backgroundImage: `
      radial-gradient(at 0% 0%, ${color1} 0px, transparent 50%),
      radial-gradient(at 98% 1%, ${color2} 0px, transparent 50%),
      radial-gradient(at 0% 97%, ${color3} 0px, transparent 50%),
      radial-gradient(at 98% 99%, ${color4} 0px, transparent 50%)
    `,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
    borderRadius: '8px',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.9 }} // Adjust delay as needed
      className="w-full p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg mb-8"
    >
      <h2 className="text-2xl font-semibold mb-6 text-white">9. Mesh Gradient Generator</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side: Preview */}
        <div className="flex flex-col items-center justify-center p-4">
          <h3 className="text-xl font-semibold mb-4 text-white">Preview</h3>
          <div
            className="w-64 h-64 flex items-center justify-center border border-dashed border-gray-400 relative overflow-hidden"
          >
            <motion.div
              className="w-full h-full"
              style={previewStyle}
              animate={previewStyle} // Animate style changes
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </div>
        </div>

        {/* Right Side: Controls & Code */}
        <div className="flex flex-col space-y-4 p-4">
          <h3 className="text-xl font-semibold text-white">Customize Colors</h3>

          {/* Color Pickers */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="mesh-color1" className="block text-sm font-medium text-white">Top-Left</Label>
              <Input id="mesh-color1" type="color" value={color1} onChange={(e) => setColor1(e.target.value)} className="w-full h-10 p-0 border-none cursor-pointer rounded" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mesh-color2" className="block text-sm font-medium text-white">Top-Right</Label>
              <Input id="mesh-color2" type="color" value={color2} onChange={(e) => setColor2(e.target.value)} className="w-full h-10 p-0 border-none cursor-pointer rounded" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mesh-color3" className="block text-sm font-medium text-white">Bottom-Left</Label>
              <Input id="mesh-color3" type="color" value={color3} onChange={(e) => setColor3(e.target.value)} className="w-full h-10 p-0 border-none cursor-pointer rounded" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mesh-color4" className="block text-sm font-medium text-white">Bottom-Right</Label>
              <Input id="mesh-color4" type="color" value={color4} onChange={(e) => setColor4(e.target.value)} className="w-full h-10 p-0 border-none cursor-pointer rounded" />
            </div>
          </div>

           {/* Background Color Picker */}
           <div className="space-y-2 pt-2">
             <Label htmlFor="mesh-background" className="block text-sm font-medium text-white">
               Background Color
             </Label>
             <div className="flex items-center space-x-2">
               <Input
                 id="mesh-background"
                 type="color"
                 value={background}
                 onChange={(e) => setBackground(e.target.value)}
                 className="w-10 h-10 p-0 border-none cursor-pointer rounded"
               />
               <Input
                 type="text"
                 value={background}
                 onChange={(e) => setBackground(e.target.value)}
                 className="flex-grow bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                 placeholder="#9bf6ff"
               />
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
    </motion.div>
  );
}
