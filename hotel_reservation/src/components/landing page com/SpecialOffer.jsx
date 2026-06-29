import {
  Gift,
  Calendar,  ArrowRight,
} from "iconoir-react";
import { ParkingCircleIcon } from "lucide-react";

export default function SpecialOffers() {
  const offers = [
    {
      icon: ParkingCircleIcon,
      title: "Summer Escape",
      badge: "30% OFF",
      description:
        "Book 3 nights and receive complimentary breakfast with late checkout.",
    },
    {
      icon: Gift,
      title: "Honeymoon Package",
      badge: "POPULAR",
      description:
        "Luxury suite, romantic dinner, spa access, and room decoration included.",
    },
    {
      icon: Calendar,
      title: "Weekend Deal",
      badge: "LIMITED",
      description:
        "Special weekend pricing with free pool access and flexible checkout.",
    },
  ];

  return (
    <section className="py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl font-bold">
            Exclusive Special Offers
          </h2>

          <p className="mt-3 text-txt-sm">
            Save more with seasonal discounts and premium hotel packages.
          </p>
        </div>

        {/* Offers */}

        <div className="grid lg:grid-cols-3 gap-6 mt-14">

          {offers.map((offer) => (
            <div
              key={offer.title}
              className="card-col-c items-start text-left gap-5 hover:-translate-y-1 transition-all"
            >
              {/* Top */}

              <div className="flex items-center justify-between w-full">

                <div className="size-14 rounded-2xl bg-bg flex items-center justify-center">
                  <offer.icon className="icon" />
                </div>

                <span className="px-3 py-1 rounded-full bg-acc/20 text-acc-txt text-xs font-semibold">
                  {offer.badge}
                </span>

              </div>

              {/* Content */}

              <div>
                <h3>{offer.title}</h3>

                <p className="mt-2">
                  {offer.description}
                </p>
              </div>

              {/* Footer */}

              <div className="flex items-center justify-between w-full mt-auto pt-2">

                <div className="flex items-center gap-2">
                  <Calendar className="icon-sm" />
                  <p className="text-sm">Limited Time</p>
                </div>

                <button className="btn btn-acc">
                  Claim
                  <ArrowRight className="icon-sm" />
                </button>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom Banner */}

        <div className="mt-14 rounded-3xl bg-inv p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">

          <div>
            <h3 className="text-inv-txt">
              Unlock Member Benefits
            </h3>

            <p className="">
              Join our membership program to enjoy exclusive discounts,
              complimentary room upgrades, priority reservations, and early
              access to future offers.
            </p>
          </div>

          <button className="btn-lg btn-acc">
            Become a Member
            <ArrowRight className="icon-sm" />
          </button>

        </div>

      </div>
    </section>
  );
}