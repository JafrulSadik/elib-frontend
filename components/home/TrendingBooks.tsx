"use client";
import { fetcher } from "@/lib/fetcher";
import { ApiResponse } from "@/types/ApiResponse";
import { Book, PaginationType } from "@/types/Book";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";
import useSWR from "swr";
import MiniCardSkeleton from "../skeleton/MiniCardSkeleton";
import MiniCard from "./MiniCard";

const TrendingBooks = () => {
  const {
    data: bookResponse,
    error,
    isLoading,
  } = useSWR<ApiResponse<Book[], PaginationType>>(
    "http://localhost:5000/api/v2/books/latest?limit=10",
    (url: string) => fetcher<Book[], PaginationType>(url) // Passing the type
  );

  const books = bookResponse?.data ?? [];

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
    <section className=" bg-textPrimary/5 py-10">
      <div className="container w-[90%] md:w-full md:space-y-8">
        <div className="flex items-center justify-between text-textPrimary mb-5 md:mb-0">
          <h2 className=" text-textPrimary text-lg  md:text-2xl font-bold">
            Trending Books
          </h2>
          <div className="flex gap-1 md:gap-2">
            <button
              onClick={scrollPrev}
              className="flex justify-center items-center size-6 md:size-8 transition-all duration-300  text-textPrimary/40 bg-bgSecondary  rounded-full border-2 border-textPrimary/20 hover:border-textPrimary/40 hover:text-textPrimary/60"
            >
              <ChevronLeft className="size-4 md:size-5" />
            </button>

            <button
              onClick={scrollNext}
              className="flex justify-center items-center size-6 md:size-8 transition-all duration-300  text-textPrimary/40 bg-bgSecondary hover:text-gray-400 rounded-full border-2 border-textPrimary/20 hover:border-textPrimary/40 hover:text-textPrimary/60"
            >
              <ChevronRight className="size-4 md:size-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative  flex items-center justify-center">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {!isLoading
                ? books.map((book, i) => <MiniCard key={i} {...book} />)
                : Array(10)
                    .fill(0)
                    .map((_, i) => <MiniCardSkeleton key={i} />)}
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center pt-2 mt-5 md:mt-0">
          <button className="relative border-2 border-textPrimary/10 flex items-center justify-center px-2 py-2 md:px-6 md:py-3 rounded-md font-semibold text-gray-300 overflow-hidden group">
            {/* Animated Background */}
            <span className="absolute  inset-0 bg-textPrimary transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>

            <span className="relative  text-textPrimary z-10 tracking-wide transition-colors duration-500 text-xs md:text-base  group-hover:text-bgPrimary">
              See all new releases
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingBooks;
