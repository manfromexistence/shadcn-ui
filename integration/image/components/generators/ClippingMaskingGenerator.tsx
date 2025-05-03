"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; // Added
import { Slider } from "@/components/ui/slider"; // Added
import { Clipboard } from "lucide-react";

// TODO: Add more clip-path shapes (circle, ellipse, polygon) and mask properties

export function ClippingMaskingGenerator() {
  // --- Clip Path State ---
  const [clipPathType, setClipPathType] = useState<string>('inset'); // 'none', 'inset', 'circle', 'ellipse', 'polygon'
  // Inset values (percentages)
  const [insetTop, setInsetTop] = useState<number>(10);
  const [insetRight, setInsetRight] = useState<number>(10);
  const [insetBottom, setInsetBottom] = useState<number>(10);
  const [insetLeft, setInsetLeft] = useState<number>(10);
  const [insetRound, setInsetRound] = useState<number>(0); // Optional border-radius for inset

  // --- Mask State ---
  const [maskImage, setMaskImage] = useState<string>('url("https://mdn.github.io/css-examples/masking/star.svg")'); // Example mask
  const [maskSize, setMaskSize] = useState<string>('50%'); // e.g., 'contain', 'cover', '50%', '100px auto'
  const [maskRepeat, setMaskRepeat] = useState<string>('no-repeat'); // 'repeat', 'no-repeat', 'repeat-x', 'repeat-y', 'space', 'round'
  const [maskPosition, setMaskPosition] = useState<string>('center'); // e.g., 'center', 'top left', '50% 50%'

  const generateCss = () => {
    let clipPathCss = 'clip-path: none;';
    if (clipPathType === 'inset') {
      const roundValue = insetRound > 0 ? ` round ${insetRound}%` : '';
      clipPathCss = `clip-path: inset(${insetTop}% ${insetRight}% ${insetBottom}% ${insetLeft}%${roundValue});`;
    }
    // TODO: Add other clip-path types

    let maskCss = '';
    if (maskImage && maskImage !== 'none' && maskImage.trim() !== '') {
        maskCss = `
mask-image: ${maskImage};
mask-size: ${maskSize};
mask-repeat: ${maskRepeat};
mask-position: ${maskPosition};
/* Add other mask properties as needed */
-webkit-mask-image: ${maskImage}; /* Safari */
-webkit-mask-size: ${maskSize};
-webkit-mask-repeat: ${maskRepeat};
-webkit-mask-position: ${maskPosition};`;
    }


    return `${clipPathCss}
${maskCss}`.trim();
  };

  const cssCode = generateCss();

  const handleCopy = () => {
    navigator.clipboard.writeText(cssCode).then(() => {
      console.log("Clipping/Masking CSS copied!");
    }).catch(err => {
      console.error("Failed to copy CSS: ", err);
    });
  };

  const previewStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    backgroundColor: '#3b82f6', // Example background color
    backgroundImage: 'url(/kenjaku.jpg)', // Example background image to show masking
    backgroundSize: 'cover',
    clipPath: clipPathType === 'inset' ? `inset(${insetTop}% ${insetRight}% ${insetBottom}% ${insetLeft}% round ${insetRound}%)` : 'none',
    // Apply mask properties (need -webkit- prefix for some browsers)
    maskImage: maskImage,
    WebkitMaskImage: maskImage,
    maskSize: maskSize,
    WebkitMaskSize: maskSize,
    maskRepeat: maskRepeat,
    WebkitMaskRepeat: maskRepeat,
    maskPosition: maskPosition,
    WebkitMaskPosition: maskPosition,
  };

  return (
    <div className="w-full p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg mb-8">
      <h2 className="text-2xl font-semibold mb-6 text-white">8. Clipping & Masking Generator</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side: Preview */}
        <div className="flex flex-col items-center justify-center p-4">
          <h3 className="text-xl font-semibold mb-4 text-white">Preview</h3>
          <div
            className="w-64 h-64 flex items-center justify-center border border-dashed border-gray-400 relative overflow-hidden bg-gray-500" // Neutral container background
          >
            <div style={previewStyle}>
                {/* Content inside the clipped/masked element if needed */}
            </div>
          </div>
        </div>

        {/* Right Side: Controls & Code */}
        <div className="flex flex-col space-y-4 p-4 max-h-[60vh] overflow-y-auto">
          <h3 className="text-xl font-semibold text-white">Customize</h3>

          {/* --- Clip Path Controls --- */}
          <div className="space-y-3 p-3 border border-white/20 rounded-md">
             <h4 className="text-lg font-medium text-white mb-2">Clip Path</h4>
             <Label className="text-white">Type</Label>
             <Select value={clipPathType} onValueChange={setClipPathType}>
               <SelectTrigger className="w-full bg-white/20 border-white/30 text-white">
                 <SelectValue placeholder="Select type" />
               </SelectTrigger>
               <SelectContent>
                 <SelectItem value="none">None</SelectItem>
                 <SelectItem value="inset">Inset</SelectItem>
                 {/* TODO: Add options for circle, ellipse, polygon */}
               </SelectContent>
             </Select>

             {clipPathType === 'inset' && (
               <div className="space-y-2 mt-2">
                 <Label className="text-white">Inset (%)</Label>
                 <div className="grid grid-cols-2 gap-2">
                    <div><Label htmlFor="inset-top" className="text-xs">Top: {insetTop}%</Label><Slider id="inset-top" min={0} max={50} step={1} value={[insetTop]} onValueChange={(v)=>setInsetTop(v[0])} /></div>
                    <div><Label htmlFor="inset-right" className="text-xs">Right: {insetRight}%</Label><Slider id="inset-right" min={0} max={50} step={1} value={[insetRight]} onValueChange={(v)=>setInsetRight(v[0])} /></div>
                    <div><Label htmlFor="inset-bottom" className="text-xs">Bottom: {insetBottom}%</Label><Slider id="inset-bottom" min={0} max={50} step={1} value={[insetBottom]} onValueChange={(v)=>setInsetBottom(v[0])} /></div>
                    <div><Label htmlFor="inset-left" className="text-xs">Left: {insetLeft}%</Label><Slider id="inset-left" min={0} max={50} step={1} value={[insetLeft]} onValueChange={(v)=>setInsetLeft(v[0])} /></div>
                 </div>
                 <div>
                    <Label htmlFor="inset-round" className="text-xs">Roundness: {insetRound}%</Label>
                    <Slider id="inset-round" min={0} max={50} step={1} value={[insetRound]} onValueChange={(v)=>setInsetRound(v[0])} />
                 </div>
               </div>
             )}
             {/* TODO: Add controls for other clip-path types */}
          </div>


          {/* --- Mask Controls --- */}
           <div className="space-y-3 p-3 border border-white/20 rounded-md">
             <h4 className="text-lg font-medium text-white mb-2">Mask</h4>
             <div className="space-y-1">
                <Label htmlFor="mask-image" className="text-white">Mask Image (URL or Gradient)</Label>
                <Input id="mask-image" type="text" value={maskImage} onChange={(e) => setMaskImage(e.target.value)} placeholder='url("...") or linear-gradient(...)' className="bg-white/20 border-white/30 text-white" />
             </div>
             <div className="space-y-1">
                <Label htmlFor="mask-size" className="text-white">Mask Size</Label>
                <Input id="mask-size" type="text" value={maskSize} onChange={(e) => setMaskSize(e.target.value)} placeholder='contain, cover, 50%, 100px auto' className="bg-white/20 border-white/30 text-white" />
             </div>
             <div className="space-y-1">
                <Label htmlFor="mask-repeat" className="text-white">Mask Repeat</Label>
                 <Select value={maskRepeat} onValueChange={setMaskRepeat}>
                   <SelectTrigger className="w-full bg-white/20 border-white/30 text-white">
                     <SelectValue placeholder="Select repeat" />
                   </SelectTrigger>
                   <SelectContent>
                     <SelectItem value="no-repeat">no-repeat</SelectItem>
                     <SelectItem value="repeat">repeat</SelectItem>
                     <SelectItem value="repeat-x">repeat-x</SelectItem>
                     <SelectItem value="repeat-y">repeat-y</SelectItem>
                     <SelectItem value="space">space</SelectItem>
                     <SelectItem value="round">round</SelectItem>
                   </SelectContent>
                 </Select>
             </div>
              <div className="space-y-1">
                <Label htmlFor="mask-position" className="text-white">Mask Position</Label>
                <Input id="mask-position" type="text" value={maskPosition} onChange={(e) => setMaskPosition(e.target.value)} placeholder='center, top left, 50% 50%' className="bg-white/20 border-white/30 text-white" />
             </div>
             {/* TODO: Add controls for other mask properties */}
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
    </div>
  );
}
