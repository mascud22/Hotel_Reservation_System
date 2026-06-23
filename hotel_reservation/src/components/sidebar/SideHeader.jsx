import React from "react";
import { Mastodon, SidebarCollapse } from "iconoir-react";
import { useSidebar } from "./SidebarContext";

const SideHeader = ({toggleSidebar, collapsed}) => {
    
  return (
    <div className="w-full h-fit p-2 bg-bg-md/50 border-b-2 border-b-bg-sm flex items-center gap-3 justify-between relative">
      <div className="flex items-center gap-2">
        <button className="btn-lg px-4 scale-80 py-3.5 btn-outline">
          <Mastodon strokeWidth={2} className="text-inv size-8" />
        </button>
        {!collapsed && (
            <h4 className="text-txt font-bold">Hayat Hotel</h4>
        )}
      </div>

      <button className="px-2 border-0 btn-outline absolute -right-5 -top-">
        <SidebarCollapse onClick={toggleSidebar} strokeWidth={1.2 } className="icon-lg" />
      </button>
    </div>
  );
};

export default SideHeader;