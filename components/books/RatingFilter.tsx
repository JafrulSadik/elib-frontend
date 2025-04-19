import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Ratings from "./Rating";

const RatingFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedRatings = searchParams.get("ratings")?.split(",");
  const ratings = ["5", "4", "3", "2", "1"];

  const handleRating = (rating: string) => {
    const params = new URLSearchParams(searchParams);

    const paramRatings = params.get("ratings");

    let updatedRatings = "";

    if (paramRatings) {
      const prevRatings = paramRatings.split(",");
      if (prevRatings.includes(rating)) {
        const filteredRatings = prevRatings.filter((item) => item !== rating);
        updatedRatings = filteredRatings.join(",");
      } else {
        const updatedGRatingsArray = [...prevRatings, rating];
        updatedRatings = updatedGRatingsArray.join(",");
      }
    } else {
      updatedRatings = rating;
    }

    if (updatedRatings) {
      params.set("ratings", updatedRatings);
    } else {
      params.delete("ratings");
    }

    const url = `${pathname}?${params.toString()}`;

    router.push(url);
    router.refresh();
  };

  return (
    <div className="text-sm">
      {ratings.map((rating, index) => {
        const selected = selectedRatings?.includes(rating);
        return (
          <div key={index}>
            <div className="flex items-center px-3 gap-2 py-1">
              <input
                onChange={() => handleRating(rating)}
                checked={selected || false}
                type="checkbox"
                className="accent-bgSecondary"
              />
              <div className="flex">
                <Ratings
                  totalRating={parseInt(rating)}
                  numOfRating={1}
                  size={"size-[15px]"}
                  gap={"gap-0"}
                  color={"text-crusta-400"}
                />
              </div>
            </div>
            <hr className="bg-textPrimary/20 border-none h-[0.5px] my-1" />
          </div>
        );
      })}
    </div>
  );
};

export default RatingFilter;
