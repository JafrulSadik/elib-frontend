const CategoriesSkeleton = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container w-[90%] md:w-full">
        <h2 className="text-xl md:text-3xl text-center font-bold text-[#C5A572] mb-10">
          Choose Your Category
        </h2>
        <div className="grid gap-5 md:gap-10 grid-cols-[repeat(auto-fit,minmax(130px,1fr))] md:grid-cols-4 lg:grid-cols-5">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="w-full aspect-square rounded-md animate-pulse bg-bgSecondary/50"
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSkeleton;
