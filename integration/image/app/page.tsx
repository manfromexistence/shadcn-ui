"use client";

import Image from "next/image";
import { useState, ChangeEvent } from "react";

export default function Home() {
  const [imageUrl, setImageUrl] = useState<string>("/kenjaku.jpg");

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setImageUrl(objectUrl);
    }
  };

  return (
    // Set position to relative to contain the absolute positioned Image
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Image
        alt="Background"
        src={imageUrl}
        quality={100}
        fill
        style={{ 
          position: 'absolute', 
          zIndex: -1,
          objectFit: 'cover' 
        }}
      />
      
      {/* Image upload input */}
      <div style={{ position: 'relative', zIndex: 1, padding: '20px' }}>
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageUpload}
          style={{ 
            color: 'white',
            background: 'rgba(0,0,0,0.5)',
            padding: '10px',
            borderRadius: '4px'
          }} 
        />
      </div>
      
      {/* Add your foreground content here */}
      <h1 style={{ position: 'relative', zIndex: 1, color: 'white', textAlign: 'center', paddingTop: '40vh' }}>
        Content Goes Here
      </h1>
    </div>
  );
}
