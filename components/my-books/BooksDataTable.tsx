"use client";
import useDebounce from "@/hooks/useDebounce";
import { useState } from "react";
import BookSearch from "./BookSearch";
import Table from "./Table";

type SearchByT = "title" | "bookId" | "genre";

const BooksDataTable = () => {
  const [search, setSearch] = useState("");
  const [searchBy, setSearchBy] = useState<SearchByT>("title");
  const debouncedValue = useDebounce(search);

  const handleSearch = (search: string) => {
    setSearch(search);
  };

  return (
    <div>
      <BookSearch handleSearch={handleSearch} />
      <div className="w-full">
        <Table search={debouncedValue} searchBy={searchBy} />
      </div>
    </div>
  );
};

export default BooksDataTable;
