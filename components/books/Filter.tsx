type Props = {
  sortBy: string | null;
  sortType: string | null;
  booksCount: number;
  search: string | null;
};

const Filter = (props: Props) => {
  const { sortBy, sortType, booksCount, search } = props;

  return (
    <div className="w-full md:flex items-center justify-between text-textPrimary gap-1">
      <h1 className="flex font-semibold text-sm md:text-base md:justify-between">
        {`Showing ${booksCount} books for  ${search || ""}`}
      </h1>
      <div className="flex flex-col gap-2 text-xs  md:text-sm md:flex-row">
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
      </div>
    </div>
  );
};

export default Filter;
