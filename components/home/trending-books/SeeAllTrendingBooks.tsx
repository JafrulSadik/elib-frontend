import Link from "next/link";

const SeeAllTrendings = () => {
  return (
    <Link
      href="/"
      className="relative border-2 border-textPrimary/10 flex items-center justify-center px-2 py-2 md:px-6 md:py-3 rounded-md font-semibold text-gray-300 overflow-hidden group"
    >
      <span className="absolute  inset-0 bg-textPrimary transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
      <span className="relative  text-textPrimary z-10 tracking-wide transition-colors duration-500 text-xs md:text-base  group-hover:text-bgPrimary">
        See all trendings
      </span>
    </Link>
  );
};

export default SeeAllTrendings;
