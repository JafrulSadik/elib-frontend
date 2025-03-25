import Categories from "@/components/home/categories/Categories";
import CategoriesSkeleton from "@/components/home/categories/CategoriesSkeleton";
import FeaturedWriter from "@/components/home/featured-writer/FeaturedWriter";
import NewReleases from "@/components/home/new-releases/NewReleases";
import NewReleasesSkeleton from "@/components/home/new-releases/NewReleseSkeleton";
import PopularBooks from "@/components/home/popular-books/PopularBooks";
import PopularBooksSkeleton from "@/components/home/popular-books/PopularBooksSkeleton";
import Slider from "@/components/home/slider/Slider";
import TopRatedBooks from "@/components/home/top-rated/TopRated";
import TopRatedSkeleton from "@/components/home/top-rated/TopRatedSkeleton";
import TrendingBooks from "@/components/home/trending-books/TrendingBooks";
import TrendingBooksSkeleton from "@/components/home/trending-books/TrendingBooksSkeleton";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="min-h-screen bg-[#2B1810]">
      <Slider />
      <Suspense fallback={<NewReleasesSkeleton />}>
        <NewReleases />
      </Suspense>
      <Suspense fallback={<TopRatedSkeleton />}>
        <TopRatedBooks />
      </Suspense>
      <Suspense fallback={<PopularBooksSkeleton />}>
        <PopularBooks />
      </Suspense>
      <Suspense fallback={<TrendingBooksSkeleton />}>
        <TrendingBooks />
      </Suspense>
      <Suspense fallback={<CategoriesSkeleton />}>
        <Categories />
      </Suspense>
      <FeaturedWriter />
    </div>
  );
}
