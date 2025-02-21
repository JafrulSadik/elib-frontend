import { auth } from "@/lib/auth/auth";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const menuItems = [
  { label: "My Profile", path: "/profile" },
  { label: "Favourite", path: "/favourites" },
  { label: "My Books", path: "/my-books" },
  { label: "Add a book", path: "/add-book" },
];

const DashboardLayout = async ({ children }: Props) => {
  const session = await auth();
  return (
    <div className="py-6 bg-bgPrimary">
      <div className="container mx-auto  text-textPrimary rounded-xl">
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-64 bg-bgSecondary rounded-lg p-4 text-textPrimary h-fit">
            <div className="mb-6 text-center">
              <h2 className="text-lg font-semibold">
                Hi, {session?.user?.name}
              </h2>
            </div>
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`block px-4 py-2 rounded-lg ${
                    "/profile" === item.path
                      ? "bg-bgPrimary/60 text-gray-400"
                      : "text-gray-600 hover:text-gray-400 hover:bg-bgPrimary/30"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-bgSecondary rounded-lg">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
