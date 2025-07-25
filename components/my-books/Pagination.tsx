"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ReactPaginate from "react-paginate";
import "./style.css";

type Props = {
  handlePageNumber: (event: { selected: number }) => void;
  pageCount: number;
  pageRangeDisplayed: number;
};

const Pagination = (props: Props) => {
  const { handlePageNumber, pageCount, pageRangeDisplayed } = props;

  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={pageRangeDisplayed}
      marginPagesDisplayed={2}
      onPageChange={(event) => handlePageNumber(event)}
      containerClassName="pagination"
      pageClassName="page-number"
      activeClassName="active"
      previousLabel={<ChevronLeft className="text-white" size={20} />}
      previousClassName="pervious"
      nextClassName="next"
      nextLabel={<ChevronRight className="text-white" size={20} />}
    />
  );
};

export default Pagination;
