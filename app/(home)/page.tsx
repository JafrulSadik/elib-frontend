import AllBooks from "@/components/home/AllBooks";
import Categories from "@/components/home/Categories";
import FeaturedWriter from "@/components/home/FeaturedWriter";
import LatestBooks from "@/components/home/LatestBooks";
import PopularBooks from "@/components/home/PopularBooks";
import Slider from "@/components/home/Slider";
import TopWriters from "@/components/home/TopWriters";

export default async function Home() {
  return (
    <div className="min-h-screen bg-[#2B1810]">
      <div className="container mx-auto px-6 py-8">
        <Slider />
        <AllBooks />
        <LatestBooks />
        <Categories />
        <PopularBooks />
        <FeaturedWriter />
        <TopWriters />
      </div>
    </div>
  );
}
