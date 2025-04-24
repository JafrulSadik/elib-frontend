import { ApiResponse } from "@/types/ApiResponse";
import { Book, PaginationType } from "@/types/Book";
import { auth } from "./auth/auth";
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

export const getBook = async (id: string): Promise<ApiResponse<Book>> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/books/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch books: ${res.statusText}`);
    }

    return await res.json();
  } catch (err) {
    const error = err as Error;
    return {
      code: 500,
      message: error.message,
      data: undefined,
    };
  }
};

export const getBooks = async (
  queryString: string
): Promise<ApiResponse<Book[], PaginationType>> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/books${queryString}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch books: ${res.statusText}`);
    }

    return await res.json();
  } catch (err) {
    const error = err as Error;
    return {
      code: 500,
      message: error.message,
      data: [],
    };
  }
};

export const getFavouriteBooks = async (
  page: number
): Promise<ApiResponse<Book[], PaginationType>> => {
  const session = await auth();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/favourite/books/${session?.user?.id}?page=${page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.accessToken}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch books: ${res.statusText}`);
    }

    return await res.json();
  } catch (err) {
    const error = err as Error;
    return {
      code: 500,
      message: error.message,
      data: [],
    };
  }
};
