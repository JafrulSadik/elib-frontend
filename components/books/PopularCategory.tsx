"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import "./scrollbar-style.css";

type Genre = {
  _id: string;
  title: string;
  code: number;
};

const PopularCategory = ({ genres }: { genres: Genre[] }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedGenreCodes = useMemo(
    () => searchParams.get("genres")?.split(",") || [],
    [searchParams]
  );

  const handleGenre = (genre: Genre) => {
    const params = new URLSearchParams(searchParams);
    const codes = new Set(selectedGenreCodes);

    if (codes.has(String(genre.code))) {
      codes.delete(String(genre.code));
    } else {
      codes.add(String(genre.code));
    }

    if (codes.size) {
      params.set("genres", Array.from(codes).join(","));
    } else {
      params.delete("genres");
    }

    params.delete("page");
    router.push(`${pathname}?${params.toString()}`);
    router.refresh();
  };

  return (
    <div className="text-sm h-[150px] overflow-y-auto">
      {[...genres]
        .sort((a, b) => {
          const aSelected = selectedGenreCodes.includes(String(a.code));
          const bSelected = selectedGenreCodes.includes(String(b.code));
          return aSelected === bSelected ? 0 : aSelected ? -1 : 1;
        })
        .map((genre) => {
          const isSelected = selectedGenreCodes.includes(String(genre.code));

          return (
            <div key={genre._id}>
              <label className="flex items-center px-3 gap-2 py-1 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => handleGenre(genre)}
                  className="accent-bgSecondary"
                />
                <span>{genre.title}</span>
              </label>
              <hr className="bg-textPrimary/20 border-none h-[0.5px] my-1" />
            </div>
          );
        })}
    </div>
  );
};

export default PopularCategory;
