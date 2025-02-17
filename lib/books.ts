import { ApiResponse } from "@/types/ApiResponse";
import { Book, PaginationType } from "@/types/Book";
import { fetchData } from "./fetchData";

export const getLatestBooks = async () => {
  try {
    const response = (await fetchData("/books/latest")) as ApiResponse<
      Book[],
      PaginationType
    >;

    return response;
  } catch (err) {
    const error = err as Error;
    return {
      code: "500",
      message: error.message,
    };
  }
};

export const getPopularBooks = async () => {
  try {
    const response = (await fetchData("/books/popular")) as ApiResponse<
      Book[],
      PaginationType
    >;

    return response;
  } catch (err) {
    const error = err as Error;
    return {
      code: "500",
      message: error.message,
    };
  }
};

export const getBook = async (id: string) => {
  try {
    const response = (await fetchData(`/books/${id}`)) as ApiResponse<Book>;
    return response;
  } catch (err) {
    const error = err as Error;
    return {
      code: "500",
      message: error.message,
    };
  }
};
