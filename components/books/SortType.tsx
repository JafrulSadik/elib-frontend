"use client";

const SortType = ({ sortType }: { sortType: string }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="border-r border-textPrimary pr-2">Sort Type</div>
      <select
        className="bg-bgSecondary/50 text-gray-400 rounded-md outline-none py-1 px-3"
        //   onChange={(event) => handleSortType(event.target.value)}
        defaultValue={sortType || ""}
      >
        <option value="" className="p-5">
          default
        </option>
        <option value="asc" className="p-5">
          asc
        </option>
        <option value="dec">dec</option>
      </select>
    </div>
  );
};

export default SortType;
