import { errorToast, successToast } from "@/lib/notify";
import { Book } from "@/types/Book";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  bookId: string;
  books: Book[];
  onSetBook: Dispatch<SetStateAction<Book[]>>;
};

const Delete = (props: Props) => {
  const router = useRouter();

  const { bookId, onSetBook, books } = props;
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/books/${bookId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete book");
      }

      onSetBook((prev: Book[]) => prev.filter((book) => book._id !== bookId));
      successToast("Book deleted successfully.");
      router.refresh();
    } catch (err) {
      const error = err as Error;
      errorToast(error.message);
    }
    setLoading(false);
  };

  return (
    <button
      className="flex items-center gap-1 px-3 py-1  bg-gradient-to-t from-red-500 to-red-600  text-white rounded-md hover:bg-gradient-to-b"
      onClick={handleDelete}
      disabled={loading}
    >
      {loading && <Loader className="size-3 animate-spin" />}
      <span>Delete</span>
    </button>
  );
};

export default Delete;
