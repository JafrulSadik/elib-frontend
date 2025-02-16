import { getLatestBooks } from "@/lib/books";
import { ApiResponse } from "@/types/ApiResponse";
import { Book, PaginationType } from "@/types/Book";
import BookCard from "../common/BookCard";

const LatestBooks = async () => {
  const response = (await getLatestBooks()) as ApiResponse<
    Book[],
    PaginationType
  >;

  const books = response.code === 200 ? response.data ?? [] : [];

  return (
    <section className="mb-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-[#C5A572]">Latest Books</h2>
        <button className="text-[#C5A572] hover:text-[#D4B684]">
          Show More
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {books &&
          books?.map((book, i) => (
            <BookCard
              key={i}
              image={book?.cover}
              title={book?.title}
              author={book?.author?.name}
              rating={4.7 + i * 0.1}
            />
          ))}
      </div>

      {books && books?.length === 0 && (
        <div className="flex justify-center items-center min-h-56 text-textPrimary bg-textPrimary/5 rounded-md">
          No books found
        </div>
      )}
    </section>
  );
};

export default LatestBooks;
