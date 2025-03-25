"use client";
import { Book } from "@/types/Book";
import useEmblaCarousel from "embla-carousel-react";
import PopularBookCard from "./PopularBookCard";

const PopularBooksSlider = ({ books }: { books: Book[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    dragFree: false,
    containScroll: "trimSnaps",
  });
  return (
    <>
      <div className="hidden md:grid md:grid-cols-3  lg:grid-cols-5 lg:grid-rows-1 gap-6 lg:gap-7">
        {books?.map((book, i) => (
          <PopularBookCard
            key={i}
            id={book._id}
            cover={book?.cover}
            title={book?.title}
            author={book?.author?.name}
            price={"500"}
            rating={4.6 + i * 0.1}
            ranking={i < 9 ? "0" + `${i + 1}` : i + 1}
          />
        ))}
      </div>

      <div className="md:hidden relative my-4 md:my-5 flex items-center">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {books?.map((book, i) => (
              <PopularBookCard
                key={i}
                id={book._id}
                cover={book?.cover}
                title={book?.title}
                author={book?.author?.name}
                price={"500"}
                rating={4.6 + i * 0.1}
                ranking={i + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularBooksSlider;
