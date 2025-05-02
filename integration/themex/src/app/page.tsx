"use client";

import { useState } from "react";
import { BackgroundPicker } from "@/components/background-picker";

export default function Page() {
  // Initialize with a default Unsplash image
  const [backgroundImage, setBackgroundImage] = useState<string | null>(
    "https://source.unsplash.com/random/1920x1080"
  );

  // Handle background image change from the BackgroundPicker
  const handleBackgroundChange = (imageSrc: string | null) => {
    setBackgroundImage(imageSrc);
  };

  return (
    <>
      {/* Main content div now handles the background image */}
      <div
        className={`min-h-screen w-full flex items-center justify-center ${
          backgroundImage ? "bg-cover bg-center bg-no-repeat" : ""
        }`}
        style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
      >
        {/* Content inside the main div */}
        <div className="z-10 relative p-4 bg-background/80 rounded-lg shadow-lg"> {/* Added a wrapper for content clarity and background contrast */}
          <BackgroundPicker onImageChange={handleBackgroundChange} />
        </div>

        <img src="./opengraph-image.png" alt="Logo" className="absolute top-4 left-4 w-16 h-16" />
      </div>
    </>
  );
}
