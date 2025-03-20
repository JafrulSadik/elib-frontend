"use client";

import { ArrowRight, BookOpenCheck, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FeaturedWriterBooks from "./FeaturedWriterBooks";

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
  ],
};

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1920&h=600&q=80",
    title: "Discover Your Next Great Read",
    subtitle: "Explore thousands of books from top authors",
    category: "Featured",
    rating: 4.8,
    reviews: 1250,
  },
  {
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1920&h=600&q=80",
    title: "Best Sellers of the Month",
    subtitle: "Hand-picked selections from our editors",
    category: "Popular",
    rating: 4.9,
    reviews: 980,
  },
  {
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1920&h=600&q=80",
    title: "New Arrivals in Fiction",
    subtitle: "Fresh stories waiting to be discovered",
    category: "New",
    rating: 4.7,
    reviews: 756,
  },
];

const FeaturedWriter = () => {
  return (
    <section className="md:py-12">
      <div className="container w-[90%] md:w-full md:py-5">
        <div className="rounded-md md:rounded-lg md:py-6 md:pb-12 bg-textPrimary/5 px-4 md:px-16">
          <div className="text-center py-8 md:py-6">
            <h2 className="text-xl md:text-3xl text-center  font-bold text-textPrimary">
              Featured Writer of the Week
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Writer Info */}
            <div className="space-y-5 px-3">
              <div className="flex items-start  space-x-3 md:space-x-6">
                <Image
                  src={featuredWriter.image}
                  alt={featuredWriter.name}
                  className="size-14 md:size-28 rounded-xl object-cover"
                  width={100}
                  height={100}
                />
                <div className="space-y-1 md:space-y-2">
                  <h3 className="text-base md:text-2xl font-bold text-[#C5A572]">
                    {featuredWriter.name}
                  </h3>
                  <div className="flex space-x-2 md:space-x-6 mb-4 text-xs md:text-sm">
                    <div className="flex items-center text-gray-400">
                      <BookOpenCheck className="size-3 md:size-5 mr-1 md:mr-2 text-[#C5A572]" />
                      <span>{featuredWriter.stats.books} Books</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Users className="size-3 md:size-5 mr-1 md:mr-2 text-[#C5A572]" />
                      <span>{featuredWriter.stats.readers} Readers</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xs text-justify md:text-base text-gray-300 leading-relaxed">
                {featuredWriter.bio}
              </p>

              <Link
                href="#"
                className="inline-flex gap-1 md:gap-2 items-center px-2 py-1 md:px-4 md:py-3 text-sm bg-[#C5A572] text-[#2B1810] rounded-[5px] md:rounded-lg hover:bg-[#D4B684] transition duration-300 group"
              >
                <span className="font-semibold text-xxs md:text-sm">
                  View Full Profile
                </span>
                <ArrowRight className="size-3 md:size-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Writer's Books Slider */}
            <FeaturedWriterBooks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWriter;
