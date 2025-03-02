import { auth } from "@/lib/auth/auth";
import { Book, Heart, Plus, User } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const menuItems = [
  { label: "My Profile", path: "/dashboard/profile", icon: User },
  { label: "Favourite", path: "/dashboard/favourites", icon: Heart },
  { label: "My Books", path: "/dashboard/my-books", icon: Book },
  { label: "Add a book", path: "/dashboard/add-book", icon: Plus },
];

const DashboardLayout = async ({ children }: Props) => {
  const session = await auth();
  return (
    <div className="w-full bg-bgPrimary">
      <div className="flex container w-full">
        {/* Sidebar */}
        <aside className="w-64 border-r border-[#4a372a] min-h-[calc(100vh-4rem)]">
          <div className="p-4">
            <h2 className="text-[#DEB887] font-semibold mb-4">Hi, User</h2>
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="flex items-center justify-start rounded-md text-[#C4A484] py-2 px-4 hover:bg-bgSecondary/60 hover:text-textPrimary"
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </aside>
        {/* Main content */}
        <div className="flex-1 p-4">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
