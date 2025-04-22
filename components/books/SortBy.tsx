const SortBy = ({ sortBy }: { sortBy: string }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="border-r border-textPrimary pr-2">Sort by</div>
      <select
        className="bg-bgSecondary/50  text-gray-400 rounded-md outline-none py-1 px-3"
        //   onChange={(event) => handleSortBy(event.target.value)}
        defaultValue={sortBy || ""}
      >
        <option value="" className="p-5 bg-bgSecondary/50">
          default
        </option>
        <option value="updatedAt" className="p-5 bg-bgSecondary/50">
          date
        </option>
        <option value="rating">rating</option>
        <option value="downloads">downloads</option>
      </select>
    </div>
  );
};

export default SortBy;
