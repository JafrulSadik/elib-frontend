import { getGenres } from "@/lib/fetchData";
import PopularCategory from "./PopularCategory";

const PopularCategoryWrapper = async () => {
  const { data: genres, message, code } = await getGenres();

  if (code !== 200) {
    return (
      <div className="flex justify-center items-center text-red-500">
        {message}
      </div>
    );
  }

  if (!genres?.length) {
    return (
      <div className="flex justify-center items-center text-red-500">
        No genres found
      </div>
    );
  }

  return <PopularCategory genres={genres} />;
};

export default PopularCategoryWrapper;
