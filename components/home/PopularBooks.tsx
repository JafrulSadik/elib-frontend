"use client";
import { fetcher } from "@/lib/fetcher";
import { ApiResponse } from "@/types/ApiResponse";
import { Book, PaginationType } from "@/types/Book";
import useEmblaCarousel from "embla-carousel-react";
import useSWR from "swr";
import PopularBookCardSkeleton from "../skeleton/PopularBookCardSkeleton";
import PopularBookCard from "./PopularBookCard";

const PopularBooks = () => {
  const {
    data: bookResponse,
    error,
    isLoading,
  } = useSWR<ApiResponse<Book[], PaginationType>>(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/books/popular?limit=10`,
    (url: string) => fetcher<Book[], PaginationType>(url) // Passing the type
  );

  const books = bookResponse?.data ?? [];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    dragFree: false,
    containScroll: "trimSnaps",
  });

  return (
    <section className="py-8 md:py-14">
      <div className="container w-[90%] md:w-full">
        <div className="flex justify-between items-center md:pb-8">
          <h2 className="text-textPrimary text-lg  md:text-2xl font-bold">
            Popular Books
          </h2>
          <button className="text-[#C5A572] hover:text-[#D4B684] text-sm">
            Show More
          </button>
        </div>

        <div className="hidden md:grid md:grid-cols-3  lg:grid-cols-5 lg:grid-rows-1 gap-6 lg:gap-7">
          {!isLoading
            ? books?.map((book, i) => (
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
              ))
            : Array(5)
                .fill(0)
                .map((_, i) => <PopularBookCardSkeleton key={i} />)}
        </div>

        <div className="md:hidden relative my-4 md:my-5 flex items-center">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {!isLoading
                ? books?.map((book, i) => (
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
                  ))
                : Array(5)
                    .fill(0)
                    .map((_, i) => <PopularBookCardSkeleton key={i} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularBooks;
