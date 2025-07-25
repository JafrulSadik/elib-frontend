"use client";
import { useColor } from "color-thief-react";
import { CloudDownload, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  image: string;
  title: string;
  author: string;
  rating: number;
  bookId: string;
};

const generateHexColor = (r: number, g: number, b: number) => {
  const hexR = r.toString(16).padStart(2, "0");
  const hexG = g.toString(16).padStart(2, "0");
  const hexB = b.toString(16).padStart(2, "0");

  return `bg-[#${hexR}${hexG}${hexB}]`;
};

const BookCard = ({ bookId, image, title, author, rating }: Props) => {
  const { data: color } = useColor(image, "rgbArray", {
    crossOrigin: "anonymous",
  });

  const [hexDominantColor, sethexDominantColor] = useState("#3C2418");
  const [dominantColor, setDominantColor] = useState("rgb(60, 36, 24)");
  const [brightness, setBrightness] = useState(0);

  useEffect(() => {
    if (color) {
      setDominantColor(`rgb(${color[0]}, ${color[1]}, ${color[2]})`);
      setBrightness(0.299 * color[0] + 0.587 * color[1] + 0.114 * color[2]);
    }

    if (color && dominantColor) {
      const hexColor = generateHexColor(color[0], color[1], color[2]);
      sethexDominantColor(hexColor);
    }
  }, [color, dominantColor]);

  const isDark = brightness < 128;

  return (
    <Link
      href={`/books/${bookId}`}
      className="group relative bg-transparent rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
    >
      <div
        className="absolute inset-0  rounded-xl"
        style={{
          background: `linear-gradient(to bottom, transparent, ${dominantColor})`,
        }}
      />
      <Image
        src={image}
        alt={title}
        height={800}
        width={600}
        className="w-full h-[350px] rounded-xl object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute top-4 right-4">
        <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#D4B598]/20 backdrop-blur-md">
          <Star className="h-4 w-4 fill-[#FFD700] text-[#FFD700]" />
          <span className="text-sm font-medium text-white">
            {rating.toFixed(1)}
          </span>
        </div>
      </div>
      <div
        className={`absolute bottom-0 left-0 right-0 group-hover:text-[rgb(247,204,165)]`}
      >
        {hexDominantColor && (
          <div
            className={`absolute inset-x-0 bottom-0 h-0  rounded-b-md transition-all duration-500 backdrop-blur-xl group-hover:h-full ${
              isDark
                ? "bg-black opacity-50 text-textPrimary"
                : "bg-white opacity-30"
            }`}
          />
        )}
        <div
          className={`relative px-6 py-4  ${
            !isDark ? "text-bgPrimary" : "text-textPrimary"
          }`}
        >
          <div className="relative z-10 ">
            <h3 className="text-xl truncate font-bold transition-colors">
              {title}
            </h3>
            <p className="text-sm ">by {author}</p>
          </div>
          <div className="flex items-center gap-1 text-sm my-1 relative z-10">
            <CloudDownload className="w-4 h-4" />
            <p>Downloads 1000</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
