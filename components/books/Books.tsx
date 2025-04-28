import { getBooks } from "@/lib/books";
import { ratingCount } from "@/lib/ratingCount";
import BookCard from "./BookCard";
import Pagination from "./Pagination";
type Props = {
  queryString: string;
};
const Books = async ({ queryString }: Props) => {
  const {
    data: books,
    message,
    code,
    pagination,
  } = await getBooks(queryString);

  if (code !== 200) {
    return (
      <div className=" flex justify-center items-center bg-bgSecondary/50 rounded-md border border-textPrimary/30 lg:min-h-[840px]">
        <p>{message}</p>
      </div>
    );
  }

  if (books?.length === 0) {
    return (
      <div className="flex justify-center items-center bg-bgSecondary/50 rounded-md border border-textPrimary/30 lg:min-h-[840px]">
        <p>No books found!</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="w-full p-6 grid grid-cols-2 md:grid-cols-3 gap-4">
        {books &&
          books.map((book, index) => (
            <BookCard
              key={index}
              bookId={book?._id}
              image={book?.cover}
              title={book?.title}
              author={`Author ${book?.author?.name}`}
              rating={ratingCount(book?.totalRating, book?.numOfRating)}
              downloads={book?.downloads || 0}
              format="PDF"
            />
          ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-around mb-6">
        {pagination && <Pagination pagination={pagination} />}
      </div>
    </div>
  );
};

export default Books;
