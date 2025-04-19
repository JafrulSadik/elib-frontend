"use client";

import BookContainer from "./BookContainer";
import Filter from "./Filter";
import SideBar from "./SideBar";

export default function BooksSearchPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="container px-4">
        <Filter sortBy={""} sortType={""} booksCount={5} search={"book"} />
        <div className="flex mt-5 gap-3">
          {/* Sidebar */}
          <div className=" w-full hidden lg:block flex-[0.2]">
            <SideBar />
          </div>
          {/* All Books */}
          <div className="w-full lg:flex-[0.8]">
            <BookContainer loading={false} />

            {/* Pagination */}
            <div className="flex justify-around mt-8">
              {/* <Pagination
              pageCount={totalPage}
              handlePageNumber={handlePageNumber}
              pageRangeDisplayed={2}
            /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
