"use client";

import { BookOpen, LibraryBig } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import ReaderMenu from "./ReaderMenu";

type Props = {
  width: number;
  divWidth: number;
  handleDivWidth: ({ width }: { width: number }) => void;
  previousPage: () => void;
  nextPage: () => void;
  pageNumber: number;
  numPages: number;
  handleColor: ({ selectedColor }: { selectedColor: string }) => void;
};

const Navbar = ({
  width,
  divWidth,
  handleDivWidth,
  previousPage,
  nextPage,
  pageNumber,
  numPages,
  handleColor,
}: Props) => {
  const { data: loggedInUser, status } = useSession();
  const user = loggedInUser?.user;

  return (
    <nav className="w-full bg-[#2B1810] border-b border-[#C5A572]/20 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-1 md:space-x-2">
          <BookOpen className="size-4 md:size-8 text-[#C5A572]" />
          <span className="text-[#C5A572] text-base md:text-xl font-semibold">
            E-LIB
          </span>
        </Link>

        <ReaderMenu
          width={width}
          divWidth={divWidth}
          handleDivWidth={handleDivWidth}
          previousPage={previousPage}
          nextPage={nextPage}
          pageNumber={pageNumber}
          numPages={numPages}
          handleColor={handleColor}
        />

        {!user && status === "unauthenticated" && (
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="text-[#C5A572] hover:text-[#D4B684] px-4 py-2"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-[#C5A572] text-[#2B1810] px-6 py-2 rounded-lg hover:bg-[#D4B684] transition duration-300"
            >
              Register
            </Link>
          </div>
        )}

        {status === "loading" && (
          <div className="flex items-center space-x-4">
            <div className="h-6 w-10 md:h-9 md:w-16 bg-bgSecondary animate-pulse rounded-md" />
            <div className="h-6 w-10 md:h-9 md:w-16 bg-bgSecondary animate-pulse rounded-md" />
          </div>
        )}

        {user && status === "authenticated" && (
          <div className="flex items-center space-x-4">
            <Link
              href="/dashboard/library"
              className="flex items-center gap-2  text-textPrimary bg-bgSecondary/50 hover:bg-bgSecondary/30 rounded-md px-4 py-2"
            >
              <LibraryBig />
              <span>Go to library</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
