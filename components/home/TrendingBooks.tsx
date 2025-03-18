"use client";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";
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

const TrendingBooks = () => {
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
    <section className="my-20 bg-textPrimary/5 py-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mt-6 text-textPrimary">
          <h2 className="hidden text-textPrimary md:contents text-2xl font-bold">
            Trending Books
          </h2>
          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              className="hidden md:flex justify-center items-center size-8  text-textPrimary/40 bg-bgSecondary  rounded-full border-2 border-textPrimary/20 hover:border-textPrimary/40 hover:text-textPrimary/60"
            >
              <ChevronLeft className="size-5" />
            </button>

            <button
              onClick={scrollNext}
              className="hidden md:flex justify-center items-center size-8  text-textPrimary/40 bg-bgSecondary hover:text-gray-400 rounded-full border-2 border-textPrimary/20 hover:border-textPrimary/40 hover:text-textPrimary/60"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative mt-10 flex items-center">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-3">
              {books.map((book) => (
                <MiniCard key={book.id} {...book} />
              ))}
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12 mb-8">
          <button className="relative px-6 py-3 rounded-md bg-bgSecondary font-semibold text-gray-300 overflow-hidden group">
            {/* Animated Background */}
            <span className="absolute inset-0 bg-textPrimary transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>

            {/* Button Text */}
            <span className="relative text-[#C5A572] z-10 tracking-wide transition-colors duration-500  group-hover:text-bgPrimary">
              See all trending books
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingBooks;
