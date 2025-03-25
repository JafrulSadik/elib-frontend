import { getLatestBooks } from "@/lib/fetchData";
import SeeAllNewReleases from "./SeeAllNewReleases";
import TrendingBookSlider from "./TrendingBookSlider";
import TrendingBooksError from "./TrendingBooksError";

const TrendingBooks = async () => {
  const { data: trendingBooks, message, code } = await getLatestBooks();

  if (!trendingBooks?.length) {
    return (
      <TrendingBooksError
        message={"No new releases available!"}
        textColor="text-textPrimary"
      />
    );
  }

  if (code !== 200) {
    return (
      <TrendingBooksError message={message} textColor="text-textPrimary" />
    );
  }

  return (
    <section className=" bg-textPrimary/5 py-10">
      <div className="container w-[90%] md:w-full md:space-y-8">
        <TrendingBookSlider books={trendingBooks} />
        <div className="flex justify-center pt-2 mt-5 md:mt-0">
          <SeeAllNewReleases />
        </div>
      </div>
    </section>
  );
};

export default TrendingBooks;
