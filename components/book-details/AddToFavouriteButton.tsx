"use client";

import { Heart, Loader } from "lucide-react";
import { useState } from "react";

const AddToFavouriteButton = () => {
  const [loading, setLoading] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);

  const handleAddToFavourite = async () => {
    setLoading(true);
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
    setLoading(false);
    setIsFavourite((prev) => !prev);
  };

  return (
    <button
      onClick={handleAddToFavourite}
      className="px-6 py-3 bg-[#2B1810] text-[#C5A572] rounded-lg border border-[#C5A572] hover:bg-[#3D261C] transition duration-300 flex items-center justify-center space-x-2"
    >
      {!loading && !isFavourite && <Heart className="w-5 h-5" />}
      {!loading && isFavourite && (
        <Heart className="w-5 h-5 fill-textPrimary/70 " />
      )}
      {loading && <Loader className="w-5 h-5 animate-spin" />}
    </button>
  );
};

export default AddToFavouriteButton;
