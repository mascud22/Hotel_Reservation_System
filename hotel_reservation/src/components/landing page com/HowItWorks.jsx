import { Search, Calendar, CheckCircle } from "iconoir-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Search Rooms",
      desc: "Browse available rooms based on your preferences.",
    },
    {
      icon: Calendar,
      title: "Select & Book",
      desc: "Choose dates, room type, and confirm your booking.",
    },
    {
      icon: CheckCircle,
      title: "Enjoy Your Stay",
      desc: "Arrive and enjoy a smooth hotel experience.",
    },
  ];

  return (
    <section className="py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto flex items-center justify-center flex-col">
          <h2 className="text-4xl font-bold">How It Works</h2>
          <p className="mt-3 text-txt-sm">
            Simple 3-step booking process to get your perfect stay
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {steps.map((step, index) => (
            <div key={step.title} className="card-col-c text-center relative">

              {/* Number */}
              <div className="absolute -top-4 size-10 rounded-full bg-acc text-acc-txt flex items-center justify-center font-bold">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="size-14 rounded-2xl bg-bg-md flex items-center justify-center mt-4">
                <step.icon className="icon" />
              </div>

              {/* Content */}
              <h3 className="mt-4">{step.title}</h3>
              <p className="text-txt-sm text-center">{step.desc}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}