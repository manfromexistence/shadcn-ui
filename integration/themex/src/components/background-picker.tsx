"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Image, ImageOff } from "lucide-react";

interface BackgroundPickerProps {
  onImageChange?: (imageSrc: string | null) => void;
}

export function BackgroundPicker({ onImageChange }: BackgroundPickerProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      
      if (onImageChange) {
        onImageChange(imageUrl);
      }
    }
  };
  
  const clearImage = () => {
    if (selectedImage) {
      URL.revokeObjectURL(selectedImage);
    }
    
    setSelectedImage(null);
    
    if (onImageChange) {
      onImageChange(null);
    }
  };
  
  useEffect(() => {
    // Clean up object URLs when component unmounts
    return () => {
      if (selectedImage) {
        URL.revokeObjectURL(selectedImage);
      }
    };
  }, [selectedImage]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-end gap-2">
        <div className="grid w-full gap-1.5">
          <Label htmlFor="background-image" className="text-xs font-medium">
            Background Image
          </Label>
          <Input
            id="background-image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="h-8 text-xs"
          />
        </div>
        {selectedImage && (
          <Button 
            variant="destructive" 
            size="icon" 
            className="h-8 w-8" 
            onClick={clearImage} 
            aria-label="Clear background image"
          >
            <ImageOff className="h-4 w-4" />
          </Button>
        )}
      </div>
      {selectedImage && (
        <div className="relative h-16 w-full overflow-hidden rounded-md border border-border">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: `url(${selectedImage})` }}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-white">
            <Image className="mr-1 h-4 w-4" />
            <span className="text-xs">Background preview</span>
          </div>
        </div>
      )}
    </div>
  );
}