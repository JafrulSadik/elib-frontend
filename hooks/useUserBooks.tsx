"use client";
import { ApiResponse } from "@/types/ApiResponse";
import { PaginationType } from "@/types/Pagination";
import { useSession } from "next-auth/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Book } from "../types/Book";

interface UserUserBooksProps {
  page: number;
  searchBy?: "title" | "bookId" | "genre";
  search?: string;
}

interface UseUserBooksReturn {
  books: Book[];
  loading: boolean;
  totalRecords: number;
  error: string | null;
  onSetBook: Dispatch<SetStateAction<Book[]>>;
}

const useUserBooks = ({
  page,
  searchBy,
  search,
}: UserUserBooksProps): UseUserBooksReturn => {
  const { data: session } = useSession();
  const [books, setData] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalRecords, setTotalRecords] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const ignore = true;
    setLoading(true);
    const fetchData = async () => {
      setError(null);

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${session?.user?.id}/all-books?limit=5&page=${page}&search_by=${searchBy}&search=${search}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${session?.accessToken}`,
            },
          }
        );

        if (!response.ok) {
          return setError(response.statusText);
        }

        const { data } = (await response.json()) as ApiResponse<
          Book[],
          PaginationType
        >;
        setData(data ?? []);
      } catch (err) {
        const error = err as Error;
        setError(error.message);
      }
    };

    fetchData();

    setLoading(false);

    return () => {
      if (!ignore) {
        setLoading(false);
      }
    };
  }, [page, search, searchBy, session]);

  return { books, loading, totalRecords, error, onSetBook: setData };
};

export default useUserBooks;
