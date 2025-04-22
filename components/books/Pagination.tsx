"use client";
import { PaginationType } from "@/types/Pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ReactPaginate from "react-paginate";
import "./style.css";

type Props = {
  pagination: PaginationType;
};

const Pagination = ({ pagination }: Props) => {
  const { page, totalPage, next, prev } = pagination;
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handlePageNumber = ({ selected }: { selected: number }) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(selected + 1));
    router.push(`${pathname}?${params.toString()}`);
    router.refresh();
  };

  return (
    <ReactPaginate
      pageCount={totalPage}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      onPageChange={(event) => handlePageNumber(event)}
      containerClassName="pagination"
      pageClassName="page-number"
      activeClassName="active"
      previousLabel={<ChevronLeft />}
      previousClassName="pervious"
      nextClassName="next"
      nextLabel={<ChevronRight />}
    />
  );
};

export default Pagination;
