"use client";

import { BookOpen } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import ProfileImg from "./ProfileImg";
import SearchInput from "./SearchInput";

const Navbar = () => {
  const { data: loggedInUser, status } = useSession();
  const user = loggedInUser?.user;

  return (
    <div>
      <nav className="bg-[#2B1810] border-b border-[#C5A572]/20 px-6 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-1 md:space-x-2">
            <BookOpen className="size-4 md:size-8 text-[#C5A572]" />
            <span className="text-[#C5A572] text-base md:text-xl font-semibold">
              E-LIB
            </span>
          </Link>

          <SearchInput />

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
                href="/dashboard/profile"
                className="flex gap-2 items-center"
              >
                <ProfileImg image={user?.profileImg} />
                <p className="hidden md:block">{user?.name}</p>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
