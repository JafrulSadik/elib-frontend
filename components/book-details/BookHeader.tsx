import { isAddedToFavourite } from "@/app/action/book-action";
import { getBook } from "@/lib/books";
import { ApiResponse } from "@/types/ApiResponse";
import { BookMarked, BookOpen, Download, Share2, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AddToLibrary from "./AddToLibraryButton";

type Props = {
  bookId: string;
};

const BookHeader = async (props: Props) => {
  const { bookId } = props;
  const { data: book, code, message } = await getBook(bookId);

  const {
    data: isFavourite,
    code: isFavouriteCode,
    message: isFavouriteMessage,
  } = (await isAddedToFavourite(bookId)) as ApiResponse<boolean>;

  if (!book) return null;

  const totalRating = book?.totalRating || 0;
  const totalRatingCount = book?.numOfRating || 0;

  let bookRating = 0;

  if (totalRatingCount > 0) {
    bookRating = totalRating / totalRatingCount;
  } else {
    bookRating = 0;
  }

  return (
    <div className="bg-bgSecondary/80 backdrop-blur-lg md:rounded-xl p-6 md:p-12 md:mb-8">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-12">
        {/* Book Cover */}
        <div className="lg:w-1/3">
          <div className="p-4 flex justify-center md:p-0 relative group">
            <div className="h-96 md:h-full">
              <Image
                src={book?.cover}
                height={600}
                width={400}
                alt="Book Cover"
                className="h-full w-full rounded-xl transform transition duration-300"
              />
            </div>
            {/* <div className="absolute inset-0 m-4 md:m-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
              <button className="bg-textPrimary text-bgPrimary px-6 py-3 rounded-lg font-semibold hover:bg-[#D4B684] transition duration-300">
                Preview Book
              </button>
            </div> */}
          </div>
        </div>

        {/* Book Info */}
        <div className="flex-1">
          <div className="flex items-center gap-2 md:gap-4 mb-4">
            <span className="px-3 py-1 bg-textPrimary/20 text-textPrimary rounded-full text-sm">
              {book?.genre?.title}
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl font-bold text-textPrimary mb-2">
            {book?.title}
          </h1>
          <p className="text-xl text-gray-400 mb-4 md:mb-6">
            by {book?.author?.name}
          </p>

          <div className="flex items-center space-x-6 mb-6 md:mb-8">
            <div className="flex items-center">
              <Star className="size-5 md:size-6 text-yellow-400 fill-current" />
              <span className="text-base md:text-2xl text-white ml-2 font-semibold"></span>
              <span className=" text-gray-400 ml-2">
                {bookRating.toFixed(1)}
              </span>
            </div>
            <div className="text-gray-400">
              <BookMarked className="size-5 inline mr-2" />
              {book?.downloads} reads
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-bgPrimary rounded-xl p-6">
              <h3 className="text-textPrimary font-semibold mb-2">
                Book Details
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li>Pages : 384</li>
                <li>Language : English</li>
                <li>Author : {book?.author?.name}</li>
                <li>
                  Publication Date :{" "}
                  {new Date(book?.createdAt).toLocaleDateString()}
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-12 grid-rows-2 md:grid-rows-1 gap-3 md:gap-4 mb-8">
            <Link
              href={`/reader/book/${book?._id}`}
              className="col-span-8  h-12 bg-textPrimary text-bgPrimary rounded-lg hover:bg-textPrimary transition duration-300 flex items-center justify-center space-x-2 md:order-1 md:col-span-4"
            >
              <BookOpen className="w-5 h-5" />
              <span>Read Now</span>
            </Link>

            <div className="col-span-4 h-12 md:order-3 md:col-span-2">
              <AddToLibrary
                bookId={book?._id}
                favourite={isFavourite || false}
              />
            </div>

            <button className="col-span-4 h-12 bg-bgPrimary text-textPrimary rounded-lg border border-textPrimary hover:bg-[#3D261C] transition duration-300 flex items-center justify-center space-x-2 md:order-4 md:col-span-2">
              <Share2 className="size-5" />
            </button>

            <Link
              href={book?.file}
              className="col-span-8 h-12 bg-bgPrimary text-textPrimary rounded-lg border border-textPrimary hover:bg-[#3D261C] transition duration-300 flex items-center justify-center space-x-2 md:order-2 md:col-span-4"
            >
              <Download className="w-5 h-5" />
              <span>Download</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookHeader;
