const NewReleaseError = ({
  message,
  textColor = "text-red-500",
}: {
  message: string;
  textColor: string;
}) => {
  return (
    <section className="py-6 lg:py-8">
      <div className="container w-[90%] md:w-full text-center text-textPrimary">
        <div className="flex justify-start items-center space-x-2 md:space-x-4 mb-6">
          <h2 className="text-textPrimary text-lg  md:text-2xl font-bold">
            New Release <span className="hidden md:contents">Books</span>
          </h2>
        </div>
        <div className="h-32 md:h-64 flex justify-center items-center bg-bgSecondary/10 text-red-500 rounded-lg">
          <p className={`text-xs md:text-base font-semibold ${textColor}`}>
            {message}
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewReleaseError;
