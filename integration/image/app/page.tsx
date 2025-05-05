"use client";
import { useState } from "react";
import { cn } from "@/lib/utils"; // Assuming cn is here

export default function Home() {
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackgroundImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className={cn(
        "min-h-screen flex flex-col items-center justify-center bg-cover bg-center p-5"
      )}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
      }}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="p-4 border text-white rounded-md"
      />
    </div>
  );
}