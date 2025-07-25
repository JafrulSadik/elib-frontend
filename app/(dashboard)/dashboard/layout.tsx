import Navbar from "@/components/common/Navbar";
import SidebarLinks from "@/components/common/SidebarLinks";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const DashboardLayout = async ({ children }: Props) => {
  return (
    <div className=" bg-bgPrimary">
      <Navbar />
      <div className="flex">
        <aside className="w-64 border-r border-[#4a372a] min-h-[calc(100vh-4rem)]">
          <div className="p-4">
            <h2 className="text-[#DEB887] font-semibold mb-4">Hi, User</h2>
            <SidebarLinks />
          </div>
        </aside>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
