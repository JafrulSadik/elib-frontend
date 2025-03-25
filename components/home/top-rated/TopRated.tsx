import ErrorComponent from "@/components/common/ErrorComponent";
import { getLatestBooks } from "@/lib/fetchData";
import TopRatedSlider from "./TopRatedSlider";

const TopRatedBooks = async () => {
  const { data: topRatedBooks, message, code } = await getLatestBooks();

  return (
    <section className=" bg-textPrimary/5 py-8 md:py-16">
      <div className="container w-[90%] md:w-full md:space-y-8">
        <div className="flex items-center justify-between text-textPrimary mb-5 md:mb-0">
          <h2 className=" text-textPrimary text-lg  md:text-2xl font-bold">
            Top Rated Books
          </h2>
          <div className="flex text-textPrimary text-sm gap-1 md:gap-2">
            Show More
          </div>
        </div>
        {!!topRatedBooks?.length && code === 200 ? (
          <TopRatedSlider books={topRatedBooks} />
        ) : (
          <ErrorComponent
            message="No top rated books available !"
            bgColor="bg-bgPrimary"
            textColor="text-textPrimary"
          />
        )}

        {code !== 200 && (
          <ErrorComponent message={message} bgColor="bg-bgPrimary" />
        )}
      </div>
    </section>
  );
};

export default TopRatedBooks;
