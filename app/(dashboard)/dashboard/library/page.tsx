import LibraryBookCard from "@/components/library/LibraryBookCard";
import PaginationSection from "@/components/library/PaginationSection";
import { getFavouriteBooks } from "@/lib/books";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const FavouriteBookPage = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | undefined };
}) => {
  const page = searchParams.page;

  const {
    data: books,
    message,
    code,
    pagination,
  } = await getFavouriteBooks(page ? parseInt(page) : 1);

  return (
    <div className="flex flex-col items-center p-8 rounded-md md:min-h-full">
      <div className="flex flex-col w-full mx-2 font-semibold text-left">
        <div className="flex text-sm items-center my-1 md:my-0">
          <Link href="/dashboard" className="text-textPrimary">
            Dashboard
          </Link>
          {<ChevronRight size={15} className="text-textPrimary" />}
          <Link
            href={"/dashboard/library"}
            className="font-normal text-textPrimary"
          >
            Library
          </Link>
        </div>
      </div>

      <hr className="h-[0.5] my-3 border-bgSecondary w-full" />

      <div className="w-full flex flex-col items-center gap-3 my-5">
        {books?.length ? (
          books.map((book) => <LibraryBookCard key={book?._id} book={book} />)
        ) : (
          <div className="min-h-[70vh] flex justify-center items-center  text-textPrimary">
            No books found!
          </div>
        )}
      </div>

      {books?.length ? (
        <div className="flex justify-center">
          <PaginationSection pagination={pagination} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default FavouriteBookPage;
