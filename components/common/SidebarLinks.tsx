"use client";

import { successToast } from "@/lib/notify";
import { Book, Library, Loader, Plus, User } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const menuItems = [
  { label: "My Profile", path: "profile", icon: User },
  { label: "My Library", path: "library", icon: Library },
  { label: "My Books", path: "my-books", icon: Book },
  { label: "Add a book", path: "add-book", icon: Plus },
];

const SidebarLinks = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    setLoading(true);
    await signOut();
    setLoading(false);
    successToast("Logged out successfully.");
    router.push("/login");
  };

  return (
    <nav className="space-y-4">
      <div className="space-y-2">
        {menuItems.map(({ label, path, icon: Icon }) => {
          const isActive = pathname?.startsWith(`/dashboard/${path}`);
          return (
            <Link
              key={path}
              href={`/dashboard/${path}`}
              className={`flex items-center rounded-md py-2 px-4 transition duration-300
              ${
                isActive
                  ? "bg-bgSecondary text-textPrimary"
                  : "text-[#C4A484] hover:bg-bgSecondary/60 hover:text-textPrimary"
              }`}
            >
              <Icon className="mr-2 h-4 w-4" />
              {label}
            </Link>
          );
        })}
      </div>

      <button
        onClick={handleLogout}
        className="w-full flex items-center justify-center rounded-md py-2 px-4 transition duration-300 bg-gradient-to-t from-textPrimary/50 to-textPrimary/60 hover:bg-gradient-to-b text-whitehover:text-textPrimary"
      >
        {loading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
        <span>Logout</span>
      </button>
    </nav>
  );
};

export default SidebarLinks;
