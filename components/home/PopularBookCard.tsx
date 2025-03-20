import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  id: string;
  title: string;
  author: string;
  cover: string;
  price?: string;
  rating?: number;
  reviews?: number;
  downloads?: number; // Added downloads as a prop
  ranking?: number | string; // Added ranking as a prop
};

const PopularBookCard = ({
  id,
  title,
  author,
  cover,
  price = "Free", // Default value
  rating = 0, // Default value
  reviews = 0, // Default value
  downloads = 1000, // Default downloads (for now)
  ranking,
}: Props) => {
  return (
    <Link href="#">
      <div className="min-w-40 md:w-auto bg-bgSecondary/50 py-4 md:py-10 hover:bg-bgSecondary/70 hover:scale-105 transition-transform duration-300 rounded-md border-none h-full hover:shadow-md">
        <div className="px-4 md:px-4">
          <div className="flex flex-col h-full space-y-4">
            <div className="relative w-full">
              <div className="flex justify-center">
                <Image
                  src={cover || "/placeholder.svg"}
                  alt={title}
                  height={200}
                  width={150}
                  className="object-cover rounded-sm aspect-[4/5] lg:aspect-[4/6]"
                />
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="font-extralight text-2xl tracking-wider">
                <span className="hidden md:contents md:text-3xl text-gray-300">
                  {ranking}
                </span>
                <hr className="h-1 rounded-xl bg-slate-400 w-3/5" />
              </div>

              <div className="truncate">
                <h3 className=" text-textPrimary font-semibold text-xs md:text-base truncate">
                  {title}
                </h3>
                <p className="text-gray-400 text-xxs md:text-sm mt-1">
                  By: {author}
                </p>

                {/* Rating & Reviews */}
                <div>
                  {rating !== undefined && (
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center">
                        <Star className="size-3 md:size-6 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm md:text-lg text-white font-bold">
                          {rating.toFixed(1)}
                        </span>
                        {reviews > 0 && (
                          <span className="text-gray-300 hidden md:text-xs ml-1">
                            ({reviews}) ({downloads} Downloads)
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PopularBookCard;
