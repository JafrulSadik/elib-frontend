import { Heart } from "lucide-react";
import Image from "next/image";

type CompactBookCardProps = {
  id: number;
  title: string;
  author: string;
  cover: string;
  price?: string;
  rating?: number;
  reviews?: number;
};

const CompactBookCard = ({
  id,
  title,
  author,
  cover,
  price,
  rating,
  reviews,
}: CompactBookCardProps) => {
  return (
    <div className="group relative w-48 transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative aspect-[4/6] rounded-md overflow-hidden">
        <Image
          src={cover}
          alt={title}
          height={600}
          width={400}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="font-medium text-sm text-white mb-1 line-clamp-1">
              {title}
            </h3>
            <p className="text-gray-300 text-xs line-clamp-1">{author}</p>
            {rating && (
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center">
                  <span className="text-yellow-400 text-xs">★</span>
                  <span className="ml-1 text-xs text-white">{rating}</span>
                  {reviews && (
                    <span className="text-gray-300 text-xs ml-1">
                      ({reviews})
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <button className="absolute top-2 right-2 text-textPrimary hover:text-textPrimary/70 transition-color duration-600 opacity-0  group-hover:opacity-100">
        <Heart className="size-5" />
      </button>
      {price && (
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#4158D0] to-[#C850C0] text-white text-sm px-4 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {price}
        </div>
      )}
    </div>
  );
};

export default CompactBookCard;
