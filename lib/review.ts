"use server";

import { ApiResponse } from "@/types/ApiResponse";
import { PaginationType, Reviews } from "@/types/Book";

type PropsType = {
  page: number;
  bookId: string;
  limit: number;
};

export const fetchReviewsByBookId = async ({
  page,
  bookId,
  limit,
}: PropsType): Promise<ApiResponse<Reviews[], PaginationType>> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/books/${bookId}/reviews?page=${page}&limit=${limit}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch reviews: ${res.statusText}`);
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
