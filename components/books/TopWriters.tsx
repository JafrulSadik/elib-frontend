"use client";
import { PopularAuthorType } from "@/types/User";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

const TopWriters = ({ authors }: { authors: PopularAuthorType[] }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedAuthorIds = useMemo(
    () => searchParams.get("authors")?.split(",") || [],
    [searchParams]
  );

  const handleAuthorSelect = (authorId: string) => {
    const params = new URLSearchParams(searchParams);
    const ids = new Set(selectedAuthorIds);

    if (ids.has(authorId)) {
      ids.delete(authorId);
    } else {
      ids.add(authorId);
    }

    if (ids.size) {
      params.set("authors", Array.from(ids).join(","));
    } else {
      params.delete("authors");
    }

    params.delete("page");
    router.push(`${pathname}?${params.toString()}`);
    router.refresh();
  };

  return (
    <div className="text-sm h-[180px] overflow-y-auto">
      {[...authors]
        .sort((a, b) => {
          const aSelected = selectedAuthorIds.includes(String(a._id));
          const bSelected = selectedAuthorIds.includes(String(b._id));
          return aSelected === bSelected ? 0 : aSelected ? -1 : 1;
        })
        .map((author) => {
          const selected = selectedAuthorIds.includes(author._id);

          return (
            <div key={author._id}>
              <label className="flex items-center px-3 gap-2 py-1 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selected}
                  onChange={() => handleAuthorSelect(author._id)}
                  className="accent-bgSecondary"
                />
                <p className="max-w-40 truncate">{author.name}</p>
              </label>
              <hr className="bg-textPrimary/20 border-none h-[0.5px] my-1" />
            </div>
          );
        })}
    </div>
  );
};

export default TopWriters;
