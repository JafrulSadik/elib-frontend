import AllBooks from "@/components/home/AllBooks";
import Categories from "@/components/home/Categories";
import LatestBooks from "@/components/home/LatestBooks";
import PopularBooks from "@/components/home/PopularBooks";
import TopWriters from "@/components/home/TopWriters";
import { auth } from "@/lib/auth/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div className="min-h-screen bg-[#2B1810]">
      <div className="container mx-auto px-6 py-8">
        <AllBooks />
        <LatestBooks />
        <Categories />
        <PopularBooks />
        <TopWriters />
      </div>
    </div>
  );
}
