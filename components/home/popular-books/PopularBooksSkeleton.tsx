import PopularBookCardSkeleton from "@/components/skeleton/PopularBookCardSkeleton";

const PopularBooksSkeleton = () => {
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

        <div className="hidden md:grid md:grid-cols-3  lg:grid-cols-5 lg:grid-rows-1 gap-6 lg:gap-7">
          {Array(10)
            .fill(0)
            .map((book, i) => (
              <PopularBookCardSkeleton key={i} />
            ))}
        </div>

        <div className="md:hidden relative my-4 md:my-5 flex items-center">
          <div className="overflow-hidden">
            <div className="flex gap-4">
              {Array(10)
                .fill(0)
                .map((book, i) => (
                  <PopularBookCardSkeleton key={i} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularBooksSkeleton;
