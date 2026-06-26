import {
  ShieldCheck,
  CreditCard,
  HeadsetHelp,
  Star,
  Globe,
  Clock,
} from "iconoir-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Secure Booking",
      desc: "Your data and payments are fully protected.",
    },
    {
      icon: CreditCard,
      title: "Easy Payments",
      desc: "Multiple payment options for fast checkout.",
    },
    {
      icon: HeadsetHelp,
      title: "24/7 Support",
      desc: "We are always here to help you anytime.",
    },
    {
      icon: Star,
      title: "Top Rated Hotels",
      desc: "Only verified and highly rated hotels.",
    },
    {
      icon: Globe,
      title: "Global Locations",
      desc: "Book hotels anywhere in the world.",
    },
    {
      icon: Clock,
      title: "Instant Confirmation",
      desc: "Get booking confirmation immediately.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto flex items-center justify-center flex-col">
          <h2 className="text-4xl font-bold">Why Choose Us</h2>
          <p className="mt-3 text-txt-sm">
            We make your hotel booking fast, safe, and stress-free
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {features.map((item) => (
            <div
              key={item.title}
              className="card-col-c hover:-translate-y-1 transition-all duration-300"
            >

              <div className="size-14 rounded-2xl bg-bg-md flex items-center justify-center">
                <item.icon className="icon" />
              </div>

              <h3 className="mt-4">{item.title}</h3>

              <p className="text-txt-sm text-center">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}