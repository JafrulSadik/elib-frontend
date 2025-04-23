"use client";

import { addToMyLibrary } from "@/app/action/book-action";
import { errorToast, successToast } from "@/lib/notify";
import { BookCheck, BookMarked, Loader } from "lucide-react";
import { useState } from "react";

type Props = {
  bookId: string;
  favourite: boolean;
};

const AddToLibrary = ({ bookId, favourite }: Props) => {
  const [loading, setLoading] = useState(false);
  const [isFavourite, setIsFavourite] = useState(favourite);

  const handleAddToLibrary = async () => {
    setLoading(true);
    const response = await addToMyLibrary(bookId);

    if (response.code !== 200) {
      errorToast(response.message);
      setLoading(false);
      return;
    }

    if (!favourite) {
      successToast("Book added to the library!");
    } else {
      successToast("Book removed from the library!");
    }
    setLoading(false);
    setIsFavourite((prev) => !prev);
  };

  return (
    <button
      onClick={handleAddToLibrary}
      className={`w-full py-3 bg-[#2B1810] text-[#C5A572] rounded-lg border border-[#C5A572]  transition duration-300 flex items-center justify-center space-x-2 ${
        isFavourite && "bg-textPrimary/90 text-bgPrimary/90 font-thin"
      }`}
    >
      {!loading && !isFavourite && <BookMarked className="size-5" />}
      {!loading && isFavourite && (
        <BookCheck className="size-5 fill-textPrimary/90" />
      )}
      {loading && <Loader className="size-5 animate-spin" />}
    </button>
  );
};

export default AddToLibrary;
