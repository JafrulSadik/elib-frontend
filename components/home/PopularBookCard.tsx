import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  id: number;
  title: string;
  author: string;
  cover: string;
  price?: string;
  rating?: number;
  reviews?: number;
};

const PopularBookCard = ({
  id,
  title,
  author,
  cover,
  price,
  rating,
  reviews,
}: Props) => {
  return (
    <Link href="#" key={id}>
      <div className="bg-bgSecondary/50 hover:bg-bgSecondary/70 hover:scale-105 transition-transform duration-300 rounded-md border-none h-full hover:shadow-md ">
        <div className="px-4 py-6">
          <div className="flex flex-col h-full">
            <div className="mb-4 relative  w-full">
              <div className="flex aspect-[4/5] justify-center  pt-8">
                <Image
                  src={cover || "/placeholder.svg"}
                  alt={title}
                  height={200}
                  width={150}
                  className="object-cover rounded-sm"
                />
              </div>
            </div>

            <div className="flex items-start gap-3 mb-2">
              <div className=" font-extralight text-2xl tracking-wider">
                <span className="text-gray-300">
                  {id.toString().padStart(2, "0")}
                </span>
                <hr className="h-1 rounded-xl bg-slate-400 w-3/5" />
              </div>
              <div className="flex-1">
                <h3 className="text-textPrimary font-semibold text-md leading-tight text-pretty">
                  {title}
                </h3>
                <p className="text-gray-400 text-sm mt-1">By: {author}</p>
                <div className="">
                  {rating && (
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center">
                        <span className="text-yellow-400 text-xs">
                          <Star className="size-6 fill-current" />
                        </span>
                        <span className="ml-1 text-lg text-white font-bold">
                          {rating.toFixed(1)}
                        </span>
                        {reviews && (
                          <span className="text-gray-300 text-xs ml-1">
                            ({reviews}) ({"1000 Downloads"})
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
