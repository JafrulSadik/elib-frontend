"use client";

import { useDebounceCallback } from "@/hooks/useDebounceCallback";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const searchParams = useSearchParams();
  const router = useRouter();

  useDebounceCallback(searchTerm, 500, (debouncedValue) => {
    const params = new URLSearchParams(searchParams.toString());
    if (debouncedValue) {
      params.set("search", debouncedValue);
      params.delete("page");
      router.push(`/books?${params.toString()}`);
    } else {
      if (searchParams.has("search")) {
        params.delete("search");
        router.push(`/books?${params.toString()}`);
      }
    }
  });

  return (
    <div className="hidden md:flex flex-1 max-w-xl mx-12">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search for books..."
          className="w-full px-4 py-2 bg-[#3D261C] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A572]/50 placeholder-gray-400"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
};

export default SearchInput;
