import { ApiErrorResopnse, ApiResponse } from "@/types/ApiResponse";
import { Book, PaginationType } from "@/types/Book";
import { Genre, GenreWithBooks } from "@/types/Genre";
import { PopularAuthorType } from "@/types/User";
import { auth } from "./auth/auth";

export const fetchData = async (endpoint: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoint}`
    );

    if (!res.ok) {
      const errorData = (await res.json()) as ApiErrorResopnse;
      return {
        code: errorData.code,
        message: errorData.message,
      };
    }

    return await res.json(); // Return the JSON response
  } catch (err) {
    const error = err as Error;
    return {
      code: 500,
      message: error.message,
    };
  }
};

export const fetchDataWithAuth = async (endpoint: string) => {
  const session = await auth();
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoint}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.accessToken}`,
        },
      }
    );

    if (!res.ok) {
      const errorData = (await res.json()) as ApiErrorResopnse;
      return {
        code: errorData.code,
        message: errorData.message,
      };
    }

    return await res.json();
  } catch (err) {
    const error = err as Error;
    return {
      code: 500,
      message: error.message,
    };
  }
};

export const getLatestBooks = async (): Promise<
  ApiResponse<Book[], PaginationType>
> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/books/latest?limit=10`
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

export const getGenresWithBook = async (): Promise<
  ApiResponse<GenreWithBooks[]>
> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/genres/genres-with-books`
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

export const getGenres = async (): Promise<ApiResponse<Genre[]>> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/genres`);

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

export const getTopWriters = async (): Promise<
  ApiResponse<PopularAuthorType[]>
> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/authors/popular`
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
