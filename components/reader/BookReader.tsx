"use client";
import useElementWidth from "@/hooks/useElementWidth";
import Link from "next/link";
import { useEffect, useState } from "react";
import DisplayBook from "./DisplayBook";
import Navbar from "./Navbar";

type Props = {
  bookUrl?: string;
};

const BookReader = ({ bookUrl }: Props) => {
  const [color, setColor] = useState("");
  const [book, setBook] = useState<Blob>();
  const [width, setWidth] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState<number>(0);
  const [divRef, divWidth] = useElementWidth<HTMLDivElement>({
    handleDivWidth,
    width,
  });

  useEffect(() => {
    const downloadFile = async () => {
      try {
        if (!bookUrl) {
          throw new Error("No book URL provided.");
        }

        const response = await fetch(bookUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch PDF.");
        }
        const blob = await response.blob();
        setBook(blob);
      } catch (error) {
        console.error("Error downloading PDF:", error);
      }
    };
    downloadFile();
  }, [bookUrl]);

  function handleDivWidth({ width }: { width: number }) {
    setWidth(width);
  }

  function handleColor({ selectedColor }: { selectedColor: string }) {
    setColor(selectedColor);
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function handleloadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <div className="w-full">
      <Navbar
        width={width}
        divWidth={divWidth}
        handleDivWidth={handleDivWidth}
        previousPage={previousPage}
        nextPage={nextPage}
        pageNumber={pageNumber}
        numPages={numPages}
        handleColor={handleColor}
      />
      <div className="max-w-7xl w-[95%] mx-auto py-10">
        <div
          ref={divRef}
          className="w-full flex flex-col justify-center items-center overflow-hidden"
        >
          {book ? (
            <DisplayBook
              handleloadSuccess={handleloadSuccess}
              width={divWidth}
              pageNumber={pageNumber}
              selectedColor={color}
              book={book}
            />
          ) : (
            <div className="h-[70vh] flex flex-col justify-center items-center text-textPrimary">
              <p className="">Opps! No book found</p>
              <Link
                href="/dashboard/library"
                className="bg-bgSecondary px-4 py-2 my-2 rounded-md"
              >
                Go back!
              </Link>
            </div>
          )}
        </div>
        {book && (
          <div className="flex justify-center md:p-4 rounded-md">
            <div className="bg-bgSecondary/50 p-2 rounded-md">
              <p className="text-center  text-textPrimary text-xs md:text-sm">
                Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookReader;
