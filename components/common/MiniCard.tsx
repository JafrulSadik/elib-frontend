"use client";
import Image from "next/image";

type Props = {
  title: string;
  cover: string;
};

const MiniCard = ({ title, cover }: Props) => {
  return (
    <div className="relative shadow-black/10  shadow-sm group  aspect-[4/6]  min-w-[90px] max-w-[260px] md:min-w-[130px] sm:max-w-[280px] md:max-w-[300px] rounded-md md:rounded-md bg-bgSecondary/50 px-2 pt-5 md:px-3 md:pt-8 group">
      <Image
        src={cover}
        alt={title}
        height={600}
        width={400}
        className="group-hover:scale-105  transiton duration-300 rounded-t-sm md:rounded-t-md object-cover"
      />

      <div className="absolute inset-0 mx-2 mt-5 md:mx-3 md:mt-8 group-hover:scale-105 rounded-t-md   bg-black/40 opacity-0  transition-all duration-300 group-hover:opacity-100 flex flex-col justify-end items-center py-2 md:py-4">
        {/* Button with smooth visibility transition */}
        <button className="text-xxs md:text-xs bg-textPrimary text-gray-200 p-2 rounded-md shadow-sm opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          Read Now
        </button>
      </div>
    </div>
  );
};

export default MiniCard;
