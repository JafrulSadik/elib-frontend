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
    <div className="bg-bgSecondary/80 backdrop-blur-lg md:rounded-xl px-6 pb-4 md:p-8">
      <div className="bg-bgPrimary md:bg-transparent p-4 md:p-0 rounded-xl">
        <h2 className="text-lg md:text-2xl font-bold text-[#C5A572] mb-2 md:mb-6">
          Book Description
        </h2>
        <div className="max-w-none text-sm md:text-base">
          <p className="text-gray-400 leading-relaxed">{book?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDescription;
