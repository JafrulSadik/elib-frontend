import { Star } from "lucide-react";

type Props = {
  image: string;
  title: string;
  author: string;
  rating: number;
  downloads: number;
  format: string;
};

const SearchResultCard = ({
  image,
  title,
  author,
  rating,
  downloads,
  format,
}: Props) => {
  return (
    <div className="bg-[#2B1810] rounded-xl overflow-hidden border border-[#C5A572]/20 hover:border-[#C5A572]/40 transition-all duration-300">
      <div className="flex p-4 space-x-4">
        <div className="w-24 h-32 flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-[#C5A572] font-semibold mb-1">{title}</h3>
          <p className="text-gray-400 text-sm mb-2">by {author}</p>
          <div className="flex items-center mb-2">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-gray-400 text-sm ml-1">
              {rating.toFixed(1)}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-400 text-sm">
              {downloads.toLocaleString()} downloads
            </span>
            <span className="text-[#C5A572] text-sm font-medium px-2 py-1 bg-[#3D261C] rounded">
              {format}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultCard;
