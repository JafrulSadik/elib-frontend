"use client";

import { supabase } from "@/lib/supabase";
import NoImage from "@/public/assets/no-profile.png";
import { Pencil } from "lucide-react";
import { nanoid } from "nanoid";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRef, useState } from "react";

type Props = {
  image?: string;
};

const ImageSection = ({ image }: Props) => {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(image);
  const { data: session, update } = useSession();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target?.files?.[0];

    if (!file) return;

    const fileExt = file.name.split(".").pop();
    const filename = `${nanoid()}.${fileExt}`;
    const imageUrl = URL.createObjectURL(file);

    // Show temporary preview
    setSelectedImage(imageUrl);

    // Upload to Supabase
    const { data, error } = await supabase.storage
      .from("elib/profile-images")
      .upload(filename, file);

    if (error) {
      console.error("Upload Error:", error.message);
      alert("Image upload failed. Please try again.");
      return;
    }

    // Get Public URL
    const { data: uploadImg } = await supabase.storage
      .from("elib/profile-images")
      .getPublicUrl(data.path);

    const uploadedImageUrl = uploadImg?.publicUrl;
    if (!uploadedImageUrl) {
      alert("Failed to retrieve uploaded image.");
      return;
    }

    setSelectedImage(uploadedImageUrl);

    // Update user profile on backend
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/users`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.accessToken}`,
        },
        body: JSON.stringify({
          field: "profileImg",
          value: uploadedImageUrl,
        }),
      }
    );

    if (!response.ok) {
      alert("Failed to update profile image.");
      return;
    }

    // Update NextAuth session
    update({
      ...session,
      user: {
        ...session?.user,
        profileImg: uploadedImageUrl,
      },
    });

    alert("Profile image updated successfully.");
  };

  return (
    <div className="flex justify-center mb-8">
      <div className="relative">
        <Image
          src={selectedImage || NoImage}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-[#C5A572]"
          height={150}
          width={150}
          onClick={handleImageClick}
        />
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
        <button
          className="absolute top-0 right-3 bg-[#C5A572] p-2 rounded-full"
          onClick={handleImageClick}
        >
          <Pencil className="w-4 h-4 text-[#1b1a18]" />
        </button>
      </div>
    </div>
  );
};

export default ImageSection;
