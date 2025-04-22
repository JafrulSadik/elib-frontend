import BookContainer from "./BookContainer";
import Filter from "./Filter";
import SideBar from "./SideBar";

type Props = {
  queryString: string;
};

export default function BooksSearchPage({ queryString }: Props) {
  return (
    <div className="min-h-screen py-8">
      <div className="container px-4 mb-5">
        <Filter
          queryString={queryString}
          sortBy={""}
          sortType={""}
          booksCount={5}
          search={"book"}
        />
        <div className="flex mt-5 gap-3">
          {/* Sidebar */}
          <div className=" w-full hidden lg:block flex-[0.2]">
            <SideBar />
          </div>
          {/* All Books */}
          <div className="w-full lg:flex-[0.8]">
            <BookContainer queryString={queryString} />
          </div>
        </div>
      </div>
    </div>
  );
}
