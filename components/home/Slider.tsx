"use client";

import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DotButton, { useDotButton } from "./DotButtonsSlider";
import "./slide.css";

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
    <section className="relative overflow-hidden mb-8">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div key={index} className="embla__slide relative">
              <Image
                src={slide.image}
                alt={slide.title}
                height={800}
                width={1920}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#2B1810]/80 to-[#2B1810]/50 z-10"></div>

              <div className="absolute inset-0 flex items-center  px-14 z-30">
                <div className="max-w-2xl">
                  <span className="inline-block px-4 py-2 bg-[#C5A572]/20 text-[#C5A572] rounded-full text-sm mb-4">
                    {slide.category}
                  </span>
                  <h1 className="text-5xl font-bold text-textPrimary mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl text-gray-300 mb-6">{slide.subtitle}</p>
                  <div className="flex items-center space-x-6 mb-8">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-white ml-2">{slide.rating}</span>
                      <span className="text-gray-400 ml-2">
                        ({slide.reviews} reviews)
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/search"
                    className="inline-flex items-center px-8 py-3 bg-[#C5A572] text-[#2B1810] rounded-lg hover:bg-[#D4B684] transition duration-300 group"
                  >
                    <span className="font-semibold">Explore Now</span>
                    <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-40">
                {scrollSnaps.map((_, index) => (
                  <DotButton
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
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
    </section>
  );
};

export default Slider;
