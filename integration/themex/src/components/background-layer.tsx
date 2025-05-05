"use client";

import { cn } from "@/lib/utils";
import { useBackground } from "@/app/providers";
import React from "react";

export function BackgroundLayer({ children }: { children: React.ReactNode }) {
  const { backgroundUrl, fileType } = useBackground();

  return (
    <div
      className={cn(
        "relative min-h-screen w-full", // Ensure it covers the screen
        // Apply background image classes only if it's an image
        fileType === 'image' ? "bg-cover bg-center" : ""
      )}
      style={{
        // Apply background image style only if it's an image
        backgroundImage: fileType === 'image' && backgroundUrl ? `url(${backgroundUrl})` : 'none',
      }}
    >
      {/* Render video element if fileType is video and URL exists */}
      {fileType === 'video' && backgroundUrl && (
        <video
          key={backgroundUrl} // Force re-render if URL changes
          src={backgroundUrl}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10" // Cover entire container, place behind content
          onError={(e) => console.error('Video playback error:', e)}
        />
      )}
      {/* Content goes here, ensure it's above the background */}
      <div className="relative z-0"> {/* Ensure content is above video */}
        {children}
      </div>
    </div>
  );
}
