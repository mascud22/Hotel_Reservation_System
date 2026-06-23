import React, { useState } from "react";
import SideHeader from "./SideHeader";
import SideGeneral from "./SideGeneral";
import SideProfile from "./SideProfile";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={`border-r-3 border-r-bg-md h-212 flex flex-col bg-bg-md/40 transition-all duration-300
      ${collapsed ? "w-25 " : "w-76"}`}
    >
      <SideHeader collapsed={collapsed} toggleSidebar={toggleSidebar} />
      <SideGeneral collapsed={collapsed} />
      <div className="h-full"></div>
      <SideProfile collapsed={collapsed} />
    </div>
  );
};

export default Sidebar;