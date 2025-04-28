"use client";

import CompactBookCard from "@/components/common/CompactBookCard";
import { ratingCount } from "@/lib/ratingCount";
import { Book } from "@/types/Book";
import useEmblaCarousel from "embla-carousel-react";

const TopRatedSlider = ({ books }: { books: Book[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    dragFree: true,
    containScroll: "trimSnaps",
  });

  return (
    <div className="relative flex justify-center items-center">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {books.map((book, i) => (
            <CompactBookCard
              key={book._id}
              id={book._id}
              title={book.title}
              cover={book.cover}
              author={book.author.name}
              rating={ratingCount(book?.totalRating, book?.numOfRating)}
              reviews={book?.numOfRating || 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRatedSlider;
