"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { createContext, useState, useContext, ReactNode, ChangeEvent, useRef, useEffect } from "react";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { hexFromArgb } from "@/components/colors/utils/string_utils"; // Correct import based on previous check

// 1. Define Background Context
interface BackgroundContextProps {
  backgroundUrl: string | null;
  fileType: "image" | "video" | null;
  sourceColorFromBg: string | null; // Store extracted hex color
  handleFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isLoadingBackground: boolean;
}

const BackgroundContext = createContext<BackgroundContextProps | undefined>(undefined);

export function useBackground() {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error("useBackground must be used within a BackgroundProvider");
  }
  return context;
}

// 2. Create Background Provider Component
export function BackgroundProvider({ children }: { children: ReactNode }) {
  const [backgroundUrl, setBackgroundUrl] = useState<string | null>(null);
  const [fileType, setFileType] = useState<"image" | "video" | null>(null);
  const [sourceColorFromBg, setSourceColorFromBg] = useState<string | null>(null);
  const [isLoadingBackground, setIsLoadingBackground] = useState(false);
  const currentObjectUrl = useRef<string | null>(null);

  // Clean up object URL on unmount
  useEffect(() => {
    return () => {
      if (currentObjectUrl.current) {
        URL.revokeObjectURL(currentObjectUrl.current);
        currentObjectUrl.current = null;
      }
    };
  }, []);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log("File selected:", file?.name, file?.type);

    // Reset previous state and revoke URL
    if (currentObjectUrl.current) {
      URL.revokeObjectURL(currentObjectUrl.current);
      currentObjectUrl.current = null;
    }
    setBackgroundUrl(null);
    setFileType(null);
    setSourceColorFromBg(null); // Reset source color
    setIsLoadingBackground(false); // Reset loading state

    if (!file) {
      if (event.target) event.target.value = ""; // Clear input visually
      return;
    }

    setIsLoadingBackground(true); // Start loading
    console.log("Background loading started");

    try {
      if (file.type.startsWith("image/")) {
        // Use FileReader for persistent Data URL
        const reader = new FileReader();
        reader.onloadend = async () => {
          const result = reader.result as string;
          console.log("Image loaded, setting background URL (Data URL)");
          setBackgroundUrl(result);
          setFileType("image");

          // Extract color from image
          try {
            const img = new Image();
            img.src = result;
            await new Promise((resolve, reject) => {
              img.onload = resolve;
              img.onerror = reject;
            });
            const { sourceColorFromImage } = await import("@/components/colors/utils/image_utils");
            const sourceColorInt = await sourceColorFromImage(img);
            const hexColor = hexFromArgb(sourceColorInt); // Use correct function
            console.log("Extracted source color:", hexColor);
            setSourceColorFromBg(hexColor); // Store hex color
          } catch (colorError) {
            console.error("Error extracting color from image:", colorError);
            setSourceColorFromBg(null); // Reset color on error
            // Optionally alert the user about color extraction failure
          } finally {
            console.log("Background loading finished (image)");
            setIsLoadingBackground(false); // Stop loading after color extraction attempt
          }
        };
        reader.onerror = (error) => {
          console.error("FileReader error:", error);
          alert("Failed to read image file.");
          setIsLoadingBackground(false);
          if (event.target) event.target.value = "";
        };
        reader.readAsDataURL(file);

      } else if (file.type.startsWith("video/")) {
        // Use Object URL for video, check duration
        const url = URL.createObjectURL(file);
        currentObjectUrl.current = url; // Store potential URL
        console.log("Video Object URL created:", url);

        const videoElement = document.createElement("video");
        videoElement.src = url;

        videoElement.onloadedmetadata = () => {
          console.log("Video metadata loaded, duration:", videoElement.duration);
          if (videoElement.duration <= 60) { // Example: 60 seconds limit
            console.log("Video duration OK, setting background URL (Object URL)");
            setBackgroundUrl(url); // Keep the object URL
            setFileType("video");
            setSourceColorFromBg(null); // Videos don't have a single source color
            setIsLoadingBackground(false); // Stop loading
            console.log("Background loading finished (video)");
          } else {
            alert("Video duration exceeds limit (e.g., 1 minute). Please select a shorter video.");
            URL.revokeObjectURL(url);
            currentObjectUrl.current = null;
            if (event.target) event.target.value = "";
            setIsLoadingBackground(false); // Stop loading
          }
        };
        videoElement.onerror = (error) => {
          console.error("Video loading error:", error, videoElement.error);
          alert("Failed to load video metadata.");
          URL.revokeObjectURL(url);
          currentObjectUrl.current = null;
          if (event.target) event.target.value = "";
          setIsLoadingBackground(false); // Stop loading
        };
      } else {
        alert("Unsupported file type. Please select an image or video.");
        if (event.target) event.target.value = "";
        setIsLoadingBackground(false); // Stop loading
      }
    } catch (error) {
      console.error("Error handling file change:", error);
      alert("An unexpected error occurred while processing the file.");
      setIsLoadingBackground(false); // Ensure loading stops on unexpected error
      if (event.target) event.target.value = "";
    }
  };


  const value = {
    backgroundUrl,
    fileType,
    sourceColorFromBg,
    handleFileChange,
    isLoadingBackground,
  };

  return (
    <BackgroundContext.Provider value={value}>
      {children}
    </BackgroundContext.Provider>
  );
}


// Original Providers component wrapping NextThemesProvider etc.
export function Providers({ children, ...props }: any) {
  return (
    <NextThemesProvider {...props}>
      <AntdRegistry>
        {/* Wrap with BackgroundProvider */}
        <NuqsAdapter>
          <BackgroundProvider>
            {children}
          </BackgroundProvider>
        </NuqsAdapter>
      </AntdRegistry>
    </NextThemesProvider>
  );
}

