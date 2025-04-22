import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  bookId: string;
  image: string;
  title: string;
  author: string;
  rating: number;
  downloads: number;
  format: string;
};

const BookCard = ({
  bookId,
  image,
  title,
  author,
  rating,
  downloads,
  format,
}: Props) => {
  return (
    <Link
      href={`/books/${bookId}`}
      className="w-full bg-bgPrimary rounded-xl overflow-hidden border border-bgSecondary/20 hover:border-textPrimary/40 transition-all duration-300"
    >
      <div className="flex p-4 space-x-4">
        <div className="w-24 h-32 flex-shrink-0">
          <Image
            src={image}
            alt={title}
            height={200}
            width={150}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-[#C5A572] font-semibold mb-1">{title}</h3>
          <p className="text-gray-400 text-sm mb-2">by {author}</p>
          <div className="flex items-center mb-2">
            <Star
              className={`w-4 h-4 fill-current ${
                rating > 0 ? "text-yellow-400" : "text-gray-400"
              }`}
            />
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
    </Link>
  );
};

export default BookCard;
