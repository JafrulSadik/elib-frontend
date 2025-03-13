import SidebarLinks from "@/components/common/SidebarLinks";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const DashboardLayout = async ({ children }: Props) => {
  return (
    <div className="w-full bg-bgPrimary">
      <div className="flex container w-full">
        {/* Sidebar */}
        <aside className="w-64 border-r border-[#4a372a] min-h-[calc(100vh-4rem)]">
          <div className="p-4">
            <h2 className="text-[#DEB887] font-semibold mb-4">Hi, User</h2>
            <SidebarLinks />
          </div>
        </aside>
        {/* Main content */}
        <div className="flex-1 p-4">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
