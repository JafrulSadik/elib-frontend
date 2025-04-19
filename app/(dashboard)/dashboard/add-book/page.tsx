import AddBookForm from "@/components/add-book/AddBookForm";
import { getGenres } from "@/lib/fetchData";

const AddBookPage = async () => {
  const { data: genres, message, code } = await getGenres();

  return (
    <div className="my-12 w-full">
      <h1 className="text-3xl font-bold text-[#C5A572] mb-2 text-center">
        Add a book
      </h1>

      <div className="max-w-2xl mx-auto rounded-lg p-6">
        <AddBookForm genres={genres || []} />
      </div>
    </div>
  );
};

export default AddBookPage;
