"use client";
// Removed useState, useEffect, useRef, cn as they are no longer needed here
import ThemeCustomizer from "@/components/theme-customizer"; // Import the component

export default function Home() {
  // All background logic is now handled by layout.tsx and BackgroundProvider/Context.
  // This page component simply renders the ThemeCustomizer.

  return (
    // The outer div with background styling is now in layout.tsx (BackgroundLayer)
    // We might want some padding or main container here if needed.
    <main className="container mx-auto py-8"> {/* Example container */}
      <ThemeCustomizer />
    </main>
  );
}