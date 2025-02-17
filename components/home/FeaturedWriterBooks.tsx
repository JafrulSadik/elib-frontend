"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { CloudDownload, Star } from "lucide-react";
import Image from "next/image";
import { useDotButton } from "./DotButtonsSlider";
import "./feature-slide.css";

const featuredWriter = {
  name: "Sarah J. Anderson",
  image:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&h=500&q=80",
  bio: "Sarah J. Anderson is a bestselling author known for her compelling narratives and deep character development. With over 15 years of writing experience, she has captivated readers worldwide with her unique storytelling style.",
  stats: {
    books: 12,
    readers: "2.5M+",
    awards: 8,
  },
  books: [
    {
      title: "The Lost Garden",
      cover:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=300",
      description:
        "A tale of mystery and self-discovery set in an abandoned Victorian garden.",
      genre: "Mystery",
      rating: 4.8,
      reviews: 2340,
    },
    {
      title: "Midnight Chronicles",
      cover:
        "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=300",
      description:
        "A gripping supernatural thriller that will keep you on the edge of your seat.",
      genre: "Thriller",
      rating: 4.9,
      reviews: 1890,
    },
    {
      title: "Echoes of Tomorrow",
      cover:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=300",
      description:
        "A science fiction masterpiece exploring the boundaries of time and space.",
      genre: "Sci-Fi",
      rating: 4.7,
      reviews: 1567,
    },
    {
      title: "Midnight Chronicles",
      cover:
        "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=300",
      description:
        "A gripping supernatural thriller that will keep you on the edge of your seat.",
      genre: "Thriller",
      rating: 4.9,
      reviews: 1890,
    },
  ],
};

type Props = {
  currentBookSlide: number;
  onCurrentBookSlide: (index: number) => void;
};

const FeaturedWriterBooks = ({
  currentBookSlide,
  onCurrentBookSlide,
}: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      axis: "y",
      dragFree: false,
      containScroll: "trimSnaps",
      slidesToScroll: 2,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className="featured-embala relative py-4 rounded-xl">
      <div className="featured-embla__viewport p-2" ref={emblaRef}>
        <div className="featured-embla__container flex flex-col max-h-[310px] gap-6">
          {featuredWriter.books.map((book, index) => (
            <div
              className="featured-embla__slide bg-bgSecondary rounded-xl"
              key={index}
            >
              <div className="flex space-x-4 border hover:border-[#C5A572]/30 hover:bg-[#2B1810]/30 transition duration-300 border-transparent p-4 rounded-xl">
                <Image
                  src={book.cover}
                  alt={book.title}
                  height={112}
                  width={80}
                  className="w-20 h-28 object-cover rounded-md"
                />
                <div>
                  <h3 className="text-[#C5A572] hover:text-[#c5a572]/70 font-semibold mb-1">
                    {book.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">by {book.genre}</p>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-gray-400 text-sm ml-1">
                      {book.rating}
                    </span>
                  </div>
                  <div className="flex items-center my-1">
                    <CloudDownload className="w-4 h-4" />
                    <span className="text-gray-400 text-sm ml-1">1000</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedWriterBooks;
