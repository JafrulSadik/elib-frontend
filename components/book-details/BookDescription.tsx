import { getBook } from "@/lib/books";
import { ApiResponse } from "@/types/ApiResponse";
import { Book } from "@/types/Book";

type Props = {
  bookId: string;
};

const BookDescription = async (props: Props) => {
  const { bookId } = props;
  const response = (await getBook(bookId)) as ApiResponse<Book>;

  const book = response.code === 200 ? response.data : null;

  if (!book) return null;

  return (
    <div className="bg-[#3D261C]/80 backdrop-blur-lg rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-[#C5A572] mb-6">
        Book Description
      </h2>
      <div className="prose prose-invert max-w-none">
        <p className="text-gray-400 leading-relaxed">{book?.description}</p>
      </div>
    </div>
  );
};

export default BookDescription;
