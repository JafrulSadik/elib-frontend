"use client";

import { ChevronDown } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const sortType = [
  {
    name: "High to Low",
    value: "dec",
  },
  {
    name: "Low to High",
    value: "asc",
  },
];

const SortType = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sortTypeParam = searchParams.get("sort_type") || "default";
  const [showSortTypeModal, setShowSortTypeModal] = useState<boolean>(false);

  const handleSortType = (sortType: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort_type", sortType);
    params.delete("page");
    setShowSortTypeModal(false);
    router.push(`${pathname}?${params.toString()}`);
    router.refresh();
  };

  return (
    <div className="flex items-center gap-2 relative">
      <div className="border-r border-textPrimary pr-2">Sort type</div>

      <div className="relative inline-block text-left">
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-bgSecondary/50 px-3 py-1 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-500 transition-all"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setShowSortTypeModal((prev) => !prev)}
        >
          {sortTypeParam || "default"}
          <ChevronDown className="-mr-1 h-5 w-5 text-gray-400" />
        </button>

        {showSortTypeModal && (
          <div
            className="absolute right-0 z-10 mt-2 w-56 rounded-lg bg-bgSecondary shadow-lg ring-1 ring-black ring-opacity-5 max-h-60 overflow-auto focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
          >
            {sortType.map((item) => (
              <span
                key={item.value}
                className="cursor-pointer block px-4 py-2 text-sm text-gray-400 hover:bg-textPrimary/20 transition-all"
                role="menuitem"
                onClick={() => handleSortType(item.value)}
              >
                {item.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SortType;
