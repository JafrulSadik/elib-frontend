"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import Ratings from "./Rating";

const RatingFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedRatings = useMemo(
    () => searchParams.get("ratings")?.split(",") || [],
    [searchParams]
  );

  const handleRating = (rating: string) => {
    const params = new URLSearchParams(searchParams);
    const ratingSet = new Set(selectedRatings);

    if (ratingSet.has(rating)) {
      ratingSet.delete(rating);
    } else {
      ratingSet.add(rating);
    }

    if (ratingSet.size) {
      params.set("ratings", Array.from(ratingSet).join(","));
    } else {
      params.delete("ratings");
    }

    params.delete("page");
    router.push(`${pathname}?${params.toString()}`);
    router.refresh();
  };

  return (
    <div className="text-sm">
      {["5", "4", "3", "2", "1"].map((rating) => (
        <div key={rating}>
          <label className="flex items-center px-3 gap-2 py-1 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedRatings.includes(rating)}
              onChange={() => handleRating(rating)}
              className="accent-bgSecondary"
            />
            <div className="flex">
              <Ratings
                totalRating={parseInt(rating)}
                numOfRating={1}
                size="size-[15px]"
                gap="gap-0"
                color="text-crusta-400"
              />
            </div>
          </label>
          <hr className="bg-textPrimary/20 border-none h-[0.5px] my-1" />
        </div>
      ))}
    </div>
  );
};

export default RatingFilter;
