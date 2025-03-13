"use client";

import { Book, Heart, Plus, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { label: "My Profile", path: "profile", icon: User },
  { label: "Favourite", path: "favourites", icon: Heart },
  { label: "My Books", path: "my-books", icon: Book },
  { label: "Add a book", path: "add-book", icon: Plus },
];

const SidebarLinks = () => {
  const pathname = usePathname();

  return (
    <nav className="space-y-2">
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
    </nav>
  );
};

export default SidebarLinks;
