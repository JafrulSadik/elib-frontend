"use client";

import { fetcher } from "@/lib/fetcher";
import { ApiResponse } from "@/types/ApiResponse";
import { Book, PaginationType } from "@/types/Book";
import useEmblaCarousel from "embla-carousel-react";
import useSWR from "swr";
import CompactBookCardSkeleton from "../skeleton/CompactBookCardSkeleton";
import CompactBookCard from "./CompactBookCard";

const TopRatedBooks = () => {
  const {
    data: bookResponse,
    error,
    isLoading,
  } = useSWR<ApiResponse<Book[], PaginationType>>(
    "http://localhost:5000/api/v2/books/latest?limit=10",
    (url: string) => fetcher<Book[], PaginationType>(url)
  );

  const books = bookResponse?.data ?? [];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    dragFree: false,
    containScroll: "trimSnaps",
  });

  return (
    <section className=" bg-textPrimary/5 py-8 md:py-16">
      <div className="container w-[90%] md:w-full md:space-y-8">
        <div className="flex items-center justify-between text-textPrimary mb-5 md:mb-0">
          <h2 className=" text-textPrimary text-lg  md:text-2xl font-bold">
            Top Rated
          </h2>
          <div className="flex text-textPrimary text-sm gap-1 md:gap-2">
            Show More
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {!isLoading
                ? books.map((book, i) => (
                    <CompactBookCard
                      key={book._id}
                      id={book._id}
                      title={book.title}
                      cover={book.cover}
                      author={book.author.name}
                      rating={4.7 + i * 0.1}
                      reviews={5}
                    />
                  ))
                : Array(8)
                    .fill(0)
                    .map((_, i) => <CompactBookCardSkeleton key={i} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRatedBooks;
