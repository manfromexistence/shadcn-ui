"use client";
import { useState } from "react";

export default function Home() {
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("File selected:", file.name); // Log file selection
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        console.log("FileReader result (data URL):", result.substring(0, 100) + "..."); // Log the result (truncated)
        setBackgroundImage(result);
      };
      reader.onerror = (error) => {
        console.error("FileReader error:", error); // Log potential errors
      };
      reader.readAsDataURL(file);
    } else {
      console.log("No file selected or selection cancelled.");
    }
  };

  console.log("Current backgroundImage state:", backgroundImage ? backgroundImage.substring(0, 100) + "..." : null); // Log current state on render

  return (
    <div
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh", // Ensure the div takes at least the full viewport height
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px", // Add some padding
      }}
    >
      <input
        className="bg-red-500"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ marginBottom: "20px" }} // Add some spacing
      />
    </div>
  );
}