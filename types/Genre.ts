import { Book } from "./Book";

export type Genre = {
  _id: string;
  title: string;
  code: number;
};

type bookTypeInGenre = Pick<Book, "_id" | "title" | "cover">;

export type GenreWithBooks = Genre & {
  book: bookTypeInGenre[];
};
