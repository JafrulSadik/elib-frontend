import CompactBookCardSkeleton from "@/components/skeleton/CompactBookCardSkeleton";

const TopRatedSkeleton = () => {
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
        <div className="overflow-hidden">
          <div className="flex gap-4">
            {Array(10)
              .fill(0)
              .map((_, i) => (
                <CompactBookCardSkeleton key={i} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRatedSkeleton;
