import React from "react";
import {
  HomeAltSlim,
  SearchWindow,
  PostSolid,
  Spades,
  GlassEmpty,
  RssFeedTag,
  ConstrainedSurface,
  WifiOff,
  PageRightSolid,
} from "iconoir-react";
import { ChartBarDecreasing } from "lucide-react";

const features = [
  { icon: HomeAltSlim, text: "Luxury Suites" },
  { icon: ChartBarDecreasing, text: "King Size Beds" },
  { icon: SearchWindow, text: "Ocean View" },
  { icon: PostSolid, text: "Infinity Pool" },
  { icon: Spades, text: "Spa & Wellness" },
  { icon: GlassEmpty, text: "Fitness Center" },
  { icon: RssFeedTag, text: "Fine Dining" },
  { icon: ConstrainedSurface, text: "Complimentary Breakfast" },
  { icon: WifiOff, text: "High-Speed Wi-Fi" },
  { icon: PageRightSolid, text: "Free Parking" }
];

const Line = () => {
  return (
    <section className="max-w-7xl mx-auto mt-10 overflow-hidden mask-x-from-70%">
      <div className=" flex flex-wrap justify-center items-center gap-3 whitespace-nowrap flex items-center ">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <button
              key={index}
              className=" btn-outline rounded-full border-base-300  hover:bg-bg-md  hover:text-txt transition-all duration-300 flex-shrink-0"
            >
              <Icon className="text-lg" />
              <span>{feature.text}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Line;