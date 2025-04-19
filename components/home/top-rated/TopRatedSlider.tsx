"use client";

import CompactBookCard from "@/components/common/CompactBookCard";
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
              rating={4.7 + i * 0.1}
              reviews={5}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRatedSlider;
