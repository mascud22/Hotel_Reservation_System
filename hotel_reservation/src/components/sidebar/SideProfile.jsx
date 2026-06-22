import React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const SideProfile = () => {
  return (
    <div className="w-full  h-fit p-3 flex items-center gap-2 justify-between">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center size-11 rounded-full bg-bg-md"></div>

        <div className="flex flex-col">
          <span>Omar Hassan</span>
          <p className="truncate w-30 text-sm">omar123@@gmail.com</p>
        </div>
      </div>

      <div className="flex flex-col">
        <ChevronUp className="icon" />
        <ChevronDown className="icon" />
      </div>
    </div>
  );
};

export default SideProfile;