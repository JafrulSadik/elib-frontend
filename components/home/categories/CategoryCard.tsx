import { GenreWithBooks } from "@/types/Genre";
import Image from "next/image";
import Link from "next/link";

type Props = {
  genre: GenreWithBooks;
};

const CategoryCard = ({ genre }: Props) => {
  return (
    <Link href={`/search/?genre=${genre?.code}`}>
      <div className="relative shadow-md group w-full min-h-[120px] max-w-[260px]  aspect-[1/1] sm:max-w-[280px] md:max-w-[300px] rounded-md bg-bgSecondary/60  px-2 pt-2 group overflow-hidden">
        <h3 className="text-sm md:text-base text-center font-semibold py-3 md:py-6 text-textPrimary">
          {genre.title}
        </h3>
        <div className="flex justify-center w-full ">
          {genre?.book?.[0]?.cover && (
            <Image
              src={genre?.book[0]?.cover}
              alt={genre.title}
              height={600}
              width={400}
              className="group-hover:scale-110 shadow-black shadow-sm  transition duration-300 rounded-t-md object-cover w-3/5"
            />
          )}
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
