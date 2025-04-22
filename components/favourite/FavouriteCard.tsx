"use client";

import { addToFavourite } from "@/app/action/book-action";
import { errorToast, successToast } from "@/lib/notify";
import { Book } from "@/types/Book";
import Image from "next/image";
import Link from "next/link";
import Ratings from "../books/Rating";

type Props = {
  book: Book;
};

const FavouriteCard = (props: Props) => {
  const { book } = props;

  const handleAddToFavourite = async () => {
    const res = await addToFavourite(book?._id);
    if (res.code === 200) {
      successToast("Book removed from favourite!");
    } else {
      // Handle error
      errorToast("Failed to remove book from favourite!");
    }
  };

  return (
    <div className="w-full max-w-2xl flex gap-3 md:gap-5 items-center p-3 md:px-6 md:py-3 rounded-md shadow-sm bg-textPrimary/10 backdrop-blur-lg hover:bg-bgSecondary/90 transition duration-300">
      <div className="flex items-center gap-5 md:gap-5 min-w-16 h-full">
        <Image
          src={book?.cover}
          alt="Book Image"
          height="200"
          width="160"
          quality={100}
          className="rounded-sm w-20"
        />
      </div>

      <div className="flex flex-wrap justify-between gap-2 w-full">
        <div className="flex flex-col  gap-1 ">
          <p className="font-semibold text-sm md:text-base">{book?.title}</p>
          <Link
            href={`/books/${book._id}`}
            className="font-light md:font-normal text-xs md:text-sm text-crusta-400"
          >
            {book?.genre?.title}
          </Link>
          <Ratings
            totalRating={book?.totalRating || 0}
            numOfRating={book?.numOfRating || 0}
          />
        </div>

        <div className="flex items-center gap-1 md:gap-2">
          <Link
            href={`/reader/${book._id}`}
            className="w-14 py-1 lg:py-2 md:w-24 text-center  rounded-md text-bgPrimary  text-xs md:text-sm shadow-md bg-gradient-to-b from-textPrimary/80 to-textPrimary/100 hover:bg-crusta-900"
          >
            Read
          </Link>
          <button
            onClick={handleAddToFavourite}
            className="w-14 py-1 lg:py-2 md:w-24 text-center  rounded-md text-bgPrimary  text-xs md:text-sm shadow-md bg-gradient-to-b  from-red-500 to-red-600 hover:bg-crusta-900"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavouriteCard;
