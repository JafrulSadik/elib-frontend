"use client";
import MiniCard from "@/components/common/MiniCard";
import { Book } from "@/types/Book";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import SliderNavigationButton from "./SliderNavigationButton";

const NewReleaseSlider = ({ books }: { books: Book[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    dragFree: false,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <>
      <div className="flex items-center justify-between text-textPrimary">
        <h2 className=" text-textPrimary text-lg  md:text-2xl font-bold">
          New Release <span className="hidden md:contents">Books</span>
        </h2>
        <SliderNavigationButton
          scrollPrev={scrollPrev}
          scrollNext={scrollNext}
        />
      </div>
      <div className="relative my-4 md:my-5 flex justify-center items-center">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-2 md:gap-3">
            {books.map((book, i) => (
              <MiniCard
                key={book?._id}
                title={book?.title}
                cover={book?.cover}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewReleaseSlider;
