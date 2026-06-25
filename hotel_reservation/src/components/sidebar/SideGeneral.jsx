import React from "react";
import { NavLink } from "react-router-dom";
import { DashboardDots, SafeOpen, PeopleTag, PageFlip, CardReader, Walking,Lock} from "iconoir-react";

const navigationItems = [
  {
    title: "Dashboard",
    icon: DashboardDots,
    path: "/",
  },
  {
    title: "Rooms",
    icon: SafeOpen,
    path: "/rooms",
  },
  {
    title: "Customers",
    icon: PeopleTag,
    path: "/customers",
    count: 2
  },
  {
    title: "Reservations",
    icon: PageFlip,
    path: "/reservations",
    count: 6
  },
  {
    title: "Payments",
    icon: CardReader,
    path: "/payments",
  },
];

const toolItems = [
  {
    title: "Log Out",
    icon: Walking,
    path: "/logout",
  },
  {
    title: "Change Password",
    icon: Lock,
    path: "/change-password",
  },

];

const SideGeneral = ({ collapsed }) => {
  return (
    <div className="flex h-fit w-full flex-col gap-2 p-2 mt-4 transition-all ease-in-out">
      {/* Navigation Section */}
      {collapsed ? (
        <div className="flex w-full justify-center">
          <div className="size-1.5 mr-2  rounded-full bg-txt-md/50"></div>
        </div>
      ) : (
        <p className="ml-4 text-sm font-medium">Navigations</p>
      )}

      {/* Navigation Items */}
      <div className={`flex flex-col gap-3.5   ${!collapsed ? 'flex items-start' : 'items-center'}`}>
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink key={item.title} to={item.path} className="block w-full">
              {({ isActive }) => (
                <button
                  className={` bg-red-500/    active:scale-99 btn-outline border-none  hover:scale-101  w-full  ${isActive ? " rounded-[17px]   active:scale-99   font-bold  " : "text-txt-sm "} items-center justify-center flex`}>
                  <Icon className={`icon  ${isActive ? 'text-txt' : 'text-txt-sm'}`} />
                  {!collapsed && (
                    <span className={`${isActive ? 'text-txt font-bold': 'text-txt-sm'}`}>{item.title}</span>
                  )}
                  {!collapsed && (
                    <div className="flex-1"></div>
                  )}
                  <div>
                    {item.count && !collapsed && (
                      <button className="btn-sm  rounded-lg btn-outline"> {item.count} </button>
                    )}
                  </div>
                </button>
              )}
            </NavLink>
          );
        })}
      </div>

      {/* Tools Section */}
      {!collapsed ? (<p className="mt-3 mb-2 ml-4 border-t-2 border-t-bg-sm/40 pt-3 text-sm font-medium">Tools</p>) : (
        <div className="w-full border-b-2 border-b-bg-sm my-2"></div>
      )}

      {/* Tool Items */}
      <div className={`flex flex-col gap-3.5   ${!collapsed ? 'flex items-start' : 'items-center'}`}>
        {toolItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink key={item.title} to={item.path} className="block">
              {({ isActive }) => (
                <button
                  className={`btn-outline group  w-full border-none ${isActive ? "bg-bg-md text-primary" : ""}`} >
                  <Icon className="icon text-txt-sm" />
                  {!collapsed && (
                  <span className={`${isActive ? 'text-txt font-bold': 'text-txt-sm'}`}>{item.title}</span>
                  )}
                </button>
              )}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default SideGeneral;