import React from "react";
import { Link } from "react-router-dom";
import {
  DashboardDots,
  SafeOpen,
  PeopleTag,
  PageFlip,
  CardReader,
  Walking,
  Lock,
} from "iconoir-react";

const SideGeneral = ({collapsed}) => {
  return (
    <div className="w-full  h-fit flex flex-col gap-2 p-2">
      {collapsed ? (
        <div className=" w-full flex items-center justify-center">
            <div className="size-2 rounded-full bg-txt-md"></div>
        </div>
      ) : <p className="ml-4 font-medium">Navigations</p>
      }
      <div className="flex flex-col gap-1">
        <button className="btn-outline border-none">
          <DashboardDots className="icon text-txt" />
          <span className="font-bold">Dashboard</span>
          <div className="flex-1"></div>
          <button className="btn-sm btn-icon btn-outline">58</button>
        </button>

        <Link className="block" to="/rooms">
          <button className="btn-outline border-none w-full">
            <SafeOpen className="icon text-txt-sm" />
            <span className="text-txt-md">Rooms</span>
            <div className="flex-1"></div>
            <button className="btn-sm btn-icon btn-outline">4</button>
          </button>
        </Link>

        <button className="btn-outline border-none">
          <PeopleTag className="icon text-txt-sm" />
          <span className="text-txt-md">Customers</span>
          <div className="flex-1"></div>
          <button className="btn-sm btn-icon btn-outline">2</button>
        </button>

        <Link className="block" to="/reservations">
          <button className="btn-outline w-full border-none">
            <PageFlip className="icon text-txt-sm" />
            <span className="text-txt-md">Reservation</span>
            <div className="flex-1"></div>
            <button className="btn-sm btn-icon btn-outline">4</button>
          </button>
        </Link>

        <button className="btn-outline border-none">
          <CardReader className="icon text-txt-sm" />
          <span className="text-txt-md">Payments</span>
        </button>
      </div>

      <p className="my-2 ml-4 font-medium border-t-2 border-t-bg-md mt-3 pt-3">
        Tools
      </p>

      <button className="btn-outline border-none">
        <Walking className="icon text-txt-sm" />
        <span className="text-txt-md">Log Out</span>
      </button>

      <button className="btn-outline border-none">
        <Lock className="icon text-txt-sm" />
        <span className="text-txt-md">Change Password</span>
      </button>
    </div>
  );
};

export default SideGeneral;