import PopularCategory from "./PopularCategory";
import RatingFilter from "./RatingFilter";
import TopWriters from "./TopWriters";

const SideBar = () => {
  return (
    <div className="bg-bgSecondary/50 rounded-md border border-textPrimary/20  min-h-[840px] p-5">
      {/* Popular Cateogry */}
      <div className="">
        <h1 className="text-center text-sm font-semibold my-2 ">
          Popular Genre
        </h1>
        <hr className="bg-textPrimary/20 border-none text-red-700 h-[0.5px] my-1 " />

        <PopularCategory />
      </div>

      {/* Top Writers */}
      <div className="">
        <h1 className="text-center text-sm font-semibold my-2">Best Writers</h1>
        <hr className="bg-textPrimary/20 border-none h-[0.5px] my-1" />
        <TopWriters />
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
