import Image from "next/image";
import Link from "next/link";

type CompactBookCardProps = {
  id: string;
  title: string;
  author: string;
  cover: string;
  price?: string;
  rating: number;
  reviews: number;
};

const CompactBookCard = ({
  id,
  title,
  author,
  cover,
  rating,
  reviews,
}: CompactBookCardProps) => {
  return (
    <Link href={`/books/${id}`}>
      <div className="group relative min-w-32 md:min-w-48 transition-all">
        <div className="relative aspect-[4/6] rounded-md overflow-hidden">
          <Image
            src={cover}
            alt={title}
            height={600}
            width={400}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="font-medium text-xs md:text-sm text-white mb-1 line-clamp-1">
                {title}
              </h3>
              <p className="text-gray-300 text-xxs line-clamp-1">{author}</p>

              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center">
                  <span
                    className={`${
                      rating > 0 ? "text-yellow-400" : "text-gray-400"
                    }  text-xs`}
                  >
                    ★
                  </span>
                  <span className="ml-1 text-xs text-white">
                    {rating?.toFixed(1)}
                  </span>
                  <span className="text-gray-300 text-xs ml-1">
                    ({reviews})
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CompactBookCard;
