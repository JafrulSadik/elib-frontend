"use client";

import { BookOpen, Search } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import LoginModal from "../auth/LoginModal";
import RegistrationModal from "../auth/RegistrationModal";
import ProfileImg from "./ProfileImg";
import SearchModal from "./SearchModal";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [showRegister, setShowRegister] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const { data: loggedInUser, status } = useSession();
  const user = loggedInUser?.user;

  return (
    <div>
      <nav className="bg-[#2B1810] border-b border-[#C5A572]/20 px-6 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-1 md:space-x-2">
            <BookOpen className="size-4 md:size-8 text-[#C5A572]" />
            <span className="text-[#C5A572] text-sm md:text-xl font-semibold">
              E-LIB
            </span>
          </Link>
          <div className="hidden md:flex flex-1 max-w-xl mx-12">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for books..."
                className="w-full px-4 py-2 bg-[#3D261C] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A572]/50 placeholder-gray-400"
                onClick={() => setShowSearch(true)}
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {!user && status === "unauthenticated" && (
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowLogin(true)}
                className="text-[#C5A572] hover:text-[#D4B684] px-4 py-2"
              >
                Login
              </button>
              <button
                onClick={() => setShowRegister(true)}
                className="bg-[#C5A572] text-[#2B1810] px-6 py-2 rounded-lg hover:bg-[#D4B684] transition duration-300"
              >
                Register
              </button>
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

      {showSearch && <SearchModal onShowSearch={setShowSearch} />}

      {showLogin && (
        <LoginModal
          onShowLogin={setShowLogin}
          onShowRegister={setShowRegister}
        />
      )}

      {showRegister && (
        <RegistrationModal
          onShowLogin={setShowLogin}
          onShowRegister={setShowRegister}
        />
      )}
    </div>
  );
};

export default Navbar;
