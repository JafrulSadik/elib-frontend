"use client";

import { ChevronDown } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const sortBy = [
  {
    name: "Date",
    value: "updatedAt",
  },
  {
    name: "Rating",
    value: "ratings",
  },
  {
    name: "Downloads",
    value: "downloads",
  },
];

const SortBy = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sortByParam = searchParams.get("sort_by") || "default";
  const [showSortByModal, setShowSortByModal] = useState<boolean>(false);

  const handleSortBy = (selectedSortBy: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort_by", selectedSortBy);
    params.delete("page");
    setShowSortByModal(false);
    router.push(`${pathname}?${params.toString()}`);
    router.refresh();
  };

  return (
    <div className="flex items-center gap-2">
      <div className="border-r border-textPrimary pr-2">Sort by</div>

      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-bgSecondary/50 px-3 py-1 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-500 transition-all"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={() => setShowSortByModal((prev) => !prev)}
          >
            {sortByParam}
            <ChevronDown className="-mr-1 h-5 w-5 text-gray-400" />
          </button>
        </div>

        {showSortByModal && (
          <div
            className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-lg bg-bgSecondary shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
          >
            <div className="" role="none">
              {sortBy?.map((item) => (
                <span
                  key={item.value}
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-400 hover:bg-textPrimary/20 transition-all"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-0"
                  onClick={() => handleSortBy(item?.value)}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SortBy;
