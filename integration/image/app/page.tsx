"use client";

// Import the new generator components
import { GlassmorphismGenerator } from "@/components/generators/GlassmorphismGenerator";
import { GradientGenerator } from "@/components/generators/GradientGenerator";
import { BoxShadowGenerator } from "@/components/generators/BoxShadowGenerator";
import { DropShadowGenerator } from "@/components/generators/DropShadowGenerator";
import { BlurGlowGenerator } from "@/components/generators/BlurGlowGenerator";
import { NeonEffectGenerator } from "@/components/generators/NeonEffectGenerator";
import { BackdropFilterCustomizer } from "@/components/generators/BackdropFilterCustomizer";
import { ClippingMaskingGenerator } from "@/components/generators/ClippingMaskingGenerator"; // Added
import { FilterGenerator } from "@/components/generators/FilterGenerator"; // Added

export default function Home() {

  // Removed all state and functions previously here

  return (
    <div className="flex min-h-screen flex-col items-center justify-start p-4 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="container mx-auto flex flex-col items-center w-full max-w-4xl">
        {/* Render the generators sequentially */}
        <GlassmorphismGenerator />
        <GradientGenerator />
        <BoxShadowGenerator />
        <DropShadowGenerator />
        <BlurGlowGenerator />
        <NeonEffectGenerator />
        <BackdropFilterCustomizer />
        <ClippingMaskingGenerator /> {/* Added */}
        <FilterGenerator /> {/* Added */}
      </div>
    </div>
  );
}
