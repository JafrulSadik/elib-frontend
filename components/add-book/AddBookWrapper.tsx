import { getGenres } from "@/lib/fetchData";

const AddBookWrapper = async () => {
  const genres = await getGenres();
  return <div>AddBookWrapper</div>;
};

export default AddBookWrapper;
