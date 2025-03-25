import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  scrollPrev: () => void;
  scrollNext: () => void;
};

const SliderNavigationButton = ({ scrollPrev, scrollNext }: Props) => {
  return (
    <div className="flex gap-1 md:gap-2">
      <button
        onClick={scrollPrev}
        className="flex justify-center items-center size-6 md:size-8 transition-all duration-300  text-textPrimary/40 bg-bgSecondary  rounded-full border-2 border-textPrimary/20 hover:border-textPrimary/40 hover:text-textPrimary/60"
      >
        <ChevronLeft className="size-4 md:size-5" />
      </button>

      <button
        onClick={scrollNext}
        className="flex justify-center items-center size-6 md:size-8 transition-all duration-300  text-textPrimary/40 bg-bgSecondary hover:text-gray-400 rounded-full border-2 border-textPrimary/20 hover:border-textPrimary/40 hover:text-textPrimary/60"
      >
        <ChevronRight className="size-4 md:size-5" />
      </button>
    </div>
  );
};

export default SliderNavigationButton;
