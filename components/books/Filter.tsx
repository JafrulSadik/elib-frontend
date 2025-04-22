import { getBooks } from "@/lib/books";
import SortBy from "./SortBy";
import SortType from "./SortType";

type Props = {
  sortBy: string | null;
  sortType: string | null;
  booksCount: number;
  search: string | null;
  queryString: string;
};

const Filter = async (props: Props) => {
  const { sortBy, sortType, booksCount, search, queryString } = props;
  const {
    data: books,
    message,
    code,
    pagination,
  } = await getBooks(queryString);

  return (
    <div className="w-full md:flex items-center justify-between text-textPrimary gap-1">
      <h1 className="flex font-semibold text-sm md:text-base md:justify-between">
        {`Showing ${pagination ? pagination?.totalItem : 0} books for  ${
          search || ""
        }`}
      </h1>
      <div className="flex flex-col gap-2 text-xs  md:text-sm md:flex-row">
        <SortBy sortBy={sortBy || ""} />
        <SortType sortType={sortType || ""} />
      </div>
    </div>
  );
};

export default Filter;
