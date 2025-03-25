const TrendingBooksError = ({
  message,
  textColor = "text-red-500",
  bgColor = "bg-bgSecondary/10",
}: {
  message: string;
  textColor?: string;
  bgColor?: string;
}) => {
  return (
    <section className="py-6 lg:py-8">
      <div className="container w-[90%] md:w-full text-center text-textPrimary">
        <div className="flex justify-start items-center space-x-2 md:space-x-4 mb-6">
          <h2 className="text-textPrimary text-lg  md:text-2xl font-bold">
            Trending Books
          </h2>
        </div>
        <div
          className={`h-32 md:h-64 mt-6 md:mt-0 flex justify-center items-center text-red-500 rounded-lg ${bgColor} ring-1 ring-textPrimary/30`}
        >
          <p className={`text-xs md:text-base font-semibold ${textColor}`}>
            {message}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrendingBooksError;
