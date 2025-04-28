"use client";
import { fetchReviewsByBookId } from "@/lib/review";
import { ApiResponse } from "@/types/ApiResponse";
import { useEffect, useState } from "react";
import { PaginationType, Reviews } from "../types/Book";

type Props = {
  bookId: string;
  totalReviews: number;
};

const useGetReviews = (props: Props) => {
  const { bookId, totalReviews } = props;

  const [reviews, setReviews] = useState<Reviews[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async (page: number) => {
      setLoading(true);
      setError(null);
      try {
        const response = (await fetchReviewsByBookId({
          bookId,
          limit: 1 * page,
          page: currentPage,
        })) as ApiResponse<Reviews[], PaginationType>;

        if (response.code === 200 && !!response?.data?.length) {
          const { data, pagination } = response;
          setReviews((prevReviews) => [...prevReviews, ...data]);
          setHasMore(pagination?.next ? true : false);
          setCurrentPage(pagination?.page || 1);
        }
      } catch (error) {
        setError("Failed to fetch reviews. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchReviews(currentPage);
  }, [currentPage, bookId]);

  return { reviews, hasMore, loading };
};

export default useGetReviews;
