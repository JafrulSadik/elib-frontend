import Link from "next/link";

const SeeAllButton = () => {
  return (
    <Link
      href="/books?sort_by=updatedAt&sort_type=dec"
      className="relative flex items-center justify-center px-2 py-2 md:px-6 md:py-3 rounded-md bg-bgSecondary font-semibold text-gray-300 overflow-hidden group"
    >
      <span className="absolute  inset-0 bg-textPrimary transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>

      <span className="relative text-textPrimary z-10 tracking-wide transition-colors duration-500 text-xs md:text-base  group-hover:text-bgPrimary">
        See all new releases
      </span>
    </Link>
  );
};

export default SeeAllButton;
