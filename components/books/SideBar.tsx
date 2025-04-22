import { Suspense } from "react";
import PopularCategoryWrapper from "./PopularCategroyWrapper";
import RatingFilter from "./RatingFilter";
import TopWritersWrapper from "./TopWritersWrapper";

const SideBar = () => {
  return (
    <div className="bg-bgSecondary/50 rounded-md border border-textPrimary/20  min-h-[820px] p-5">
      {/* Popular Cateogry */}
      <div className="">
        <h1 className="text-center text-sm font-semibold my-2 ">
          Popular Genre
        </h1>
        <hr className="bg-textPrimary/20 border-none text-red-700 h-[0.5px] my-1 " />
        <Suspense fallback={<div className="text-center">Loading...</div>}>
          <PopularCategoryWrapper />
        </Suspense>
      </div>

      {/* Top Writers */}
      <div className="">
        <h1 className="text-center text-sm font-semibold my-2">Best Writers</h1>
        <hr className="bg-textPrimary/20 border-none h-[0.5px] my-1" />
        <Suspense fallback={<div className="text-center">Loading...</div>}>
          <TopWritersWrapper />
        </Suspense>
      </div>

      {/* Ratings */}
      <div>
        <h1 className="text-center text-sm font-semibold my-2">
          Rating Filter
        </h1>
        <hr className="bg-textPrimary/20 border-none h-[0.5px] my-1" />
        <RatingFilter />
      </div>
    </div>
  );
};

export default SideBar;
