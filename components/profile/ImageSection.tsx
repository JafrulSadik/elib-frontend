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
  const { data: loggedInUser, update } = useSession();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    const filename = nanoid();

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);

      const { data, error } = await supabase.storage
        .from("covers")
        .upload(
          `${filename}.${fileInputRef?.current?.name.split(".").pop()}`,
          file
        );

      if (error) {
        alert("Something went wrong : ");
      } else {
        const { data: uploadImg } = await supabase.storage
          .from("covers")
          .getPublicUrl(data?.path);
        setSelectedImage(uploadImg?.publicUrl);

        await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${loggedInUser?.accessToken}`,
          },
          body: JSON.stringify({
            field: "profileImg",
            value: uploadImg?.publicUrl,
          }),
        });

        update({
          ...loggedInUser,
          user: {
            ...loggedInUser?.user,
            profileImg: uploadImg?.publicUrl,
          },
        });

        alert("File Uploaded Successfully.");
      }
    }
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
