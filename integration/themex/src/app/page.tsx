"use client";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils"; // Re-add cn import

export default function Home() {
  const [backgroundUrl, setBackgroundUrl] = useState<string | null>(null);
  const [fileType, setFileType] = useState<"image" | "video" | null>(null);
  const currentObjectUrl = useRef<string | null>(null); // To manage object URL lifecycle

  // Clean up object URL on unmount or when a new file is selected
  useEffect(() => {
    return () => {
      if (currentObjectUrl.current) {
        URL.revokeObjectURL(currentObjectUrl.current);
        console.log("Revoked object URL on cleanup:", currentObjectUrl.current.substring(0, 50) + "...");
        currentObjectUrl.current = null;
      }
    };
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      // Reset if no file is chosen
      if (currentObjectUrl.current) {
        URL.revokeObjectURL(currentObjectUrl.current);
        console.log("Revoked object URL on file clear:", currentObjectUrl.current.substring(0, 50) + "...");
        currentObjectUrl.current = null;
      }
      setBackgroundUrl(null);
      setFileType(null);
      console.log("File selection cleared.");
      return;
    }

    // Revoke previous object URL if it exists
    if (currentObjectUrl.current) {
      URL.revokeObjectURL(currentObjectUrl.current);
      console.log("Revoked previous object URL:", currentObjectUrl.current.substring(0, 50) + "...");
      currentObjectUrl.current = null;
    }

    // console.log(`File selected: ${file.name}, Type: ${file.type}`);

    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setBackgroundUrl(result);
        setFileType("image");
        console.log("Image loaded (Data URL):", result.substring(0, 100) + "...");
      };
      reader.onerror = (error) => {
        console.error("FileReader error:", error);
        alert("Failed to read image file.");
      };
      reader.readAsDataURL(file);
    } else if (file.type.startsWith("video/")) {
      // Create a temporary video element to check duration
      const videoElement = document.createElement("video");
      const url = URL.createObjectURL(file);
      currentObjectUrl.current = url; // Store potential URL *before* async check
      videoElement.src = url;
      console.log("Created object URL for video:", url.substring(0, 50) + "...");

      videoElement.onloadedmetadata = () => {
        console.log(`Video metadata loaded. Duration: ${videoElement.duration}s`);
        if (videoElement.duration <= 60) {
          setBackgroundUrl(url); // Keep the object URL
          setFileType("video");
          console.log("Video duration OK. Setting background.");
          // Do not revoke here, it's needed for the video element
        } else {
          alert("Video duration exceeds 1 minute. Please select a shorter video.");
          URL.revokeObjectURL(url); // Revoke the URL as it's not valid
          console.log("Video too long. Revoked object URL:", url.substring(0, 50) + "...");
          currentObjectUrl.current = null;
          setBackgroundUrl(null);
          setFileType(null);
          if (event.target) event.target.value = "";
        }
      };

      videoElement.onerror = (error) => {
        console.error("Video loading error:", error, videoElement.error); // Log the specific video error
        alert("Failed to load video metadata. Check console for details.");
        URL.revokeObjectURL(url); // Clean up on error
        console.log("Video error. Revoked object URL:", url.substring(0, 50) + "...");
        currentObjectUrl.current = null;
        setBackgroundUrl(null);
        setFileType(null);
        if (event.target) event.target.value = "";
      };
    } else {
      alert("Unsupported file type. Please select an image or video (MP4, WebM, Ogg).");
      console.warn(`Unsupported file type: ${file.type}`);
      if (event.target) event.target.value = "";
    }
  };

  // console.log(`Rendering - FileType: ${fileType}, BackgroundURL: ${backgroundUrl ? backgroundUrl.substring(0, 100) + '...' : 'null'}`);

  return (
    <div
      className={cn(
        "relative min-h-screen flex flex-col items-center justify-center p-5 overflow-hidden",
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
          className="absolute top-0 left-0 w-full h-full object-cover -z-10" // Use Tailwind classes for video styling
          onError={(e) => console.error('Video playback error:', e)} // Add playback error logging
        />
      )}

      {/* Input element - ensure it's above the video */}
      <input
        type="file"
        accept="image/*,video/mp4,video/webm,video/ogg"
        onChange={handleFileChange}
        className="z-10 bg-background border rounded-md px-4 py-2" // Use Tailwind classes
      />
    </div>
  );
}