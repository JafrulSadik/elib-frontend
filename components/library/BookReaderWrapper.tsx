import { getBook } from "@/lib/books";
import BookReader from "../reader/BookReader";

type Props = {
  bookId: string;
};

const BookReaderWrapper = async ({ bookId }: Props) => {
  const { data: book, code, message } = await getBook(bookId);

  return <BookReader bookUrl={book?.file} />;
};

export default BookReaderWrapper;
