import { ChevronLeft, ChevronRight, PaintBucket } from "lucide-react";
import { useState } from "react";
import SwitchFullScreen from "./SwitchFullScreen";

type Props = {
  previousPage: () => void;
  nextPage: () => void;
  pageNumber: number;
  numPages: number;
  divWidth: number;
  handleDivWidth: ({ width }: { width: number }) => void;
  width: number;
  handleColor: ({ selectedColor }: { selectedColor: string }) => void;
};

const ReaderMenu = (props: Props) => {
  const { previousPage, nextPage, pageNumber, numPages, handleColor } = props;
  const [colorOption, setColorOption] = useState(false);

  const handleSetColor = ({ selectedColor }: { selectedColor: string }) => {
    handleColor({ selectedColor });
    setColorOption(false);
  };

  return (
    <div className="max-w-3xl flex gap-2 md:gap-3 bg-crusta-50 rounded-lg">
      <button
        disabled={pageNumber <= 1}
        onClick={() => previousPage()}
        className="p-1 md:p-3 bg-bgSecondary/80 text-textPrimary rounded-full hover:bg-bgSecondary/50"
      >
        <ChevronLeft className="text-textPrimary size-5" />
      </button>

      <div className="relative">
        <div
          onClick={() => setColorOption((prev) => !prev)}
          className="p-1 md:p-3  bg-bgSecondary/80 text-textPrimary rounded-full hover:bg-bgSecondary/50"
        >
          <PaintBucket className="text-textPrimary size-5" />
        </div>

        {/* Color sceme */}
        <div
          className={`absolute flex justify-center left-1/2 right-1/2 -translate-x-1/2 mt-2 bottom w-48 p-2 md:p-3 bg-bgSecondary rounded-md gap-2 md:gap-3 z-50 ${
            colorOption ? "" : "hidden"
          }`}
        >
          <div
            onClick={() => handleSetColor({ selectedColor: "#fff" })}
            className="size-4 md:size-6 bg-[#fff] rounded-full border hover:border-gray-300"
          ></div>
          <div
            onClick={() => handleSetColor({ selectedColor: "#74727e" })}
            className="size-4 md:size-6 bg-[#74727e] rounded-full"
          ></div>
          <div
            onClick={() => handleSetColor({ selectedColor: "#98745b" })}
            className="size-4 md:size-6 bg-[#98745b] rounded-full"
          ></div>
          <div
            onClick={() => handleSetColor({ selectedColor: "#F9ECFD" })}
            className="size-4 md:size-6 bg-[#F9ECFD] rounded-full"
          ></div>
          <div
            onClick={() => handleSetColor({ selectedColor: "#979697" })}
            className="size-4 md:size-6 bg-[#979697] rounded-full"
          ></div>
        </div>
      </div>

      <SwitchFullScreen />

      <button
        onClick={() => nextPage()}
        disabled={pageNumber >= numPages}
        className="p-1 md:p-3  bg-bgSecondary/80 text-textPrimary rounded-full hover:bg-bgSecondary/50"
      >
        <ChevronRight className="text-textPrimary size-5" />
      </button>
    </div>
  );
};

export default ReaderMenu;
