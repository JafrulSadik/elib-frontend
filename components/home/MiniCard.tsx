"use client";
import Image from "next/image";

interface BookCardProps {
  id: number;
  title: string;
  author: string;
  cover: string;
  price?: string;
  rating?: number;
  reviews?: number;
}

const MiniCard = ({
  id,
  title,
  author,
  cover,
  price,
  rating,
  reviews,
}: BookCardProps) => {
  return (
    <div className="relative w-full aspect-[4/6] min-w-[130px] max-w-[260px] sm:max-w-[280px] md:max-w-[300px] rounded-md bg-bgSecondary/50 px-3 pt-8 group">
      <Image
        src={cover}
        alt={title}
        height={600}
        width={400}
        className="w-full h-full rounded-t-sm object-cover"
      />

      <div className="absolute inset-0 mx-3 mt-8 rounded-t-sm bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end items-center p-4">
        {/* Button with smooth visibility transition */}
        <button className=" text-xs bg-textPrimary text-gray-200 p-2 rounded-md shadow-sm opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          Read Now
        </button>
      </div>
    </div>
  );
};

export default MiniCard;
