"use client";
import { fetcher } from "@/lib/fetcher";
import { ApiResponse } from "@/types/ApiResponse";
import { Book } from "@/types/Book";
import { PaginationType } from "@/types/Pagination";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";
import useSWR from "swr";
import MiniCardSkeleton from "../skeleton/MiniCardSkeleton";
import MiniCard from "./MiniCard";

const books = [
  {
    id: 1,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    cover:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 2547,
  },
  {
    id: 2,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    cover:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 1893,
  },
  {
    id: 3,
    title: "The Thursday Murder Club",
    author: "Richard Osman",
    cover:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviews: 1245,
  },
  {
    id: 4,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    cover:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 2547,
  },
  {
    id: 5,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    cover:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 1893,
  },
  {
    id: 6,
    title: "The Thursday Murder Club",
    author: "Richard Osman",
    cover:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviews: 1245,
  },
  {
    id: 7,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    cover:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 2547,
  },
  {
    id: 8,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    cover:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 1893,
  },
  {
    id: 9,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    cover:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 2547,
  },
  {
    id: 9,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    cover:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 1893,
  },
  {
    id: 3,
    title: "The Thursday Murder Club",
    author: "Richard Osman",
    cover:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviews: 1245,
  },
  {
    id: 1,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    cover:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 2547,
  },
  {
    id: 2,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    cover:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 1893,
  },
  {
    id: 3,
    title: "The Thursday Murder Club",
    author: "Richard Osman",
    cover:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviews: 1245,
  },
  {
    id: 1,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    cover:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 2547,
  },
  {
    id: 2,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    cover:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 1893,
  },
];

const NewReleases = () => {
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
    <section className="py-6 lg:py-8">
      <div className="container w-[90%] md:w-full space-y-4 md:space-y-8">
        <div className="flex items-center justify-between text-textPrimary">
          <h2 className=" text-textPrimary text-lg  md:text-2xl font-bold">
            New Release <span className="hidden md:contents">Books</span>
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
        <div className="relative my-4 md:my-5 flex justify-center items-center">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-2 md:gap-3">
              {!isLoading
                ? books.map((book, i) => (
                    <MiniCard
                      key={book?._id}
                      title={book?.title}
                      cover={book?.cover}
                    />
                  ))
                : Array(10)
                    .fill(0)
                    .map((_, i) => <MiniCardSkeleton key={i} />)}
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center pt-2 mt-5 md:mt-0">
          <button className="relative flex items-center justify-center px-2 py-2 md:px-6 md:py-3 rounded-md bg-bgSecondary font-semibold text-gray-300 overflow-hidden group">
            {/* Animated Background */}
            <span className="absolute  inset-0 bg-textPrimary transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>

            <span className="relative text-textPrimary z-10 tracking-wide transition-colors duration-500 text-xs md:text-base  group-hover:text-bgPrimary">
              See all new releases
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewReleases;
