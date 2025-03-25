import ErrorComponent from "@/components/common/ErrorComponent";
import { getLatestBooks } from "@/lib/fetchData";
import PopularBooksSlider from "./PopularBooksSlider";

const PopularBooks = async () => {
  const { data: popularBooks, message, code } = await getLatestBooks();

  return (
    <section className="py-8  md:py-14">
      <div className="container w-[90%] md:w-full">
        <div className="flex justify-between items-center md:pb-8">
          <h2 className="text-textPrimary text-lg  md:text-2xl font-bold">
            Popular Books
          </h2>
          <button className="text-[#C5A572] hover:text-[#D4B684] text-sm">
            Show More
          </button>
        </div>

        {!!popularBooks?.length && code === 200 ? (
          <PopularBooksSlider books={popularBooks} />
        ) : (
          <ErrorComponent
            message="No popular books are available !"
            bgColor="bg-bgSecondary/10"
            textColor="text-textPrimary"
          />
        )}

        {code !== 200 && (
          <ErrorComponent
            message={message}
            bgColor="bg-bgSecondary/10"
            textColor="text-red-500"
          />
        )}
      </div>
    </section>
  );
};

export default PopularBooks;
