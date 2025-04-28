"use client";

import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DotButton, { useDotButton } from "./DotButtonsSlider";

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

const Slider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
    Fade(),
  ]);

  const { onDotButtonClick, scrollSnaps, selectedIndex } =
    useDotButton(emblaApi);

  return (
    <section className="relative md:py-8">
      <div className="container overflow-hidden">
        <div className="overflow-hidden md:rounded-md" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <div key={index} className="flex-[0_0_100%] relative">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  height={800}
                  width={1920}
                  className="w-full h-40 md:h-[300px] lg:h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#2B1810]/80 to-[#2B1810]/50 z-10" />

                <div className="absolute  inset-0 flex items-center  z-30">
                  <div className="w-full text-center md:text-left max-w-2xl space-y-1 md:space-y-3 lg:space-y-6 md:px-14 ">
                    <span className="hidden md:inline-block text-xs lg:text-sm px-4 py-2 bg-textPrimary/20 text-textPrimary rounded-full ">
                      {slide.category}
                    </span>
                    <h1 className="text-xl md:text-3xl  lg:text-5xl font-bold text-textPrimary leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xs md:text-base lg:text-xl text-gray-300">
                      {slide.subtitle}
                    </p>
                    {/* <div className="flex items-center justify-center md:justify-start space-x-6">
                      <div className="hidden md:flex items-center text-base lg:text-xl">
                        <Star className="size-5 text-yellow-400 fill-current" />
                        <span className="text-white ml-2 ">{slide.rating}</span>
                        <span className="text-gray-400 ml-2">
                          ({slide.reviews} reviews)
                        </span>
                      </div>
                    </div> */}
                    <Link
                      href="/books"
                      className="group inline-flex gap-1 md:gap-2 items-center text-xxs md:text-sm lg:text-base py-1 px-2 md:py-2 md:px-4 lg:px-8 lg:py-3 bg-[#C5A572] text-[#2B1810] shadow-black shadow-xs rounded-[4px] md:rounded-md lg:rounded-lg hover:bg-[#D4B684] transition duration-300"
                    >
                      <span className="font-semibold">Explore Now</span>
                      <ArrowRight className="size-3 lg:size-5 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Pagination Dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-40">
                  {scrollSnaps.map((_, index) => (
                    <DotButton
                      key={index}
                      className={`hidden md:inline-block h-2 w-2 rounded-full transition-all duration-300 ${
                        selectedIndex === index
                          ? "w-8 bg-[#C5A572]"
                          : "bg-white/50 hover:bg-white"
                      }`}
                      onClick={() => onDotButtonClick(index)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
