import MiniCardSkeleton from "@/components/skeleton/MiniCardSkeleton";

const NewReleasesSkeleton = () => {
  return (
    <section className="py-6 lg:py-8">
      <div className="container w-[90%] md:w-full space-y-4 md:space-y-8">
        <div className="flex items-center justify-between text-textPrimary">
          <h2 className=" text-textPrimary text-lg  md:text-2xl font-bold">
            New Release <span className="hidden md:contents">Books</span>
          </h2>
        </div>
        <div className="relative my-4 md:my-5 flex justify-center items-center">
          <div className="overflow-hidden">
            <div className="flex gap-2 md:gap-3">
              {[...Array(10)].map((_, i) => (
                <MiniCardSkeleton key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewReleasesSkeleton;
