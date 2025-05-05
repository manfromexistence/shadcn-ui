"use client";

import { cn } from "@/lib/utils";
import { useBackground } from "@/app/providers";
import React from "react";

export function BackgroundLayer({ children }: { children: React.ReactNode }) {
  const { backgroundUrl, fileType } = useBackground();

  console.log("[BackgroundLayer] Received context:", { backgroundUrl, fileType });

  const containerStyle: React.CSSProperties = {};
  if (fileType === 'image' && backgroundUrl) {
    containerStyle.backgroundImage = `url(${backgroundUrl})`;
    console.log("[BackgroundLayer] Applying image background style:", containerStyle.backgroundImage);
  } else {
    containerStyle.backgroundImage = 'none';
    console.log("[BackgroundLayer] Applying no image background style.");
  }

  return (
    <div
      className={cn(
        "relative min-h-screen w-full",
        fileType === 'image' ? "bg-cover bg-center" : ""
      )}
      style={containerStyle}
    >
      {fileType === 'video' && backgroundUrl && (
        <video
          key={backgroundUrl}
          src={backgroundUrl}
          autoPlay
          loop
          muted
          playsInline
          // Increased z-index slightly, but still negative to be behind content
          className="absolute inset-0 w-full h-full object-cover -z-5" 
          onError={(e) => console.error('[BackgroundLayer] Video playback error:', e)}
          onLoadedData={() => console.log('[BackgroundLayer] Video data loaded, src:', backgroundUrl)}
        />
      )}
      {/* Increased content z-index to ensure it's above the background */}
      <div className="relative z-10"> 
        {children}
      </div>
    </div>
  );
}
