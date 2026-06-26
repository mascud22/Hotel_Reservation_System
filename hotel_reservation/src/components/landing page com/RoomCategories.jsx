import { ArrowRight, Bed, User, StarSolid } from "iconoir-react";

export default function RoomCategories() {
  const categories = [
    {
      title: "Single Room",
      desc: "Perfect for solo travelers",
      price: "$59",
      icon: User,
    },
    {
      title: "Double Room",
      desc: "Comfort for couples",
      price: "$89",
      icon: Bed,
    },
    {
      title: "Luxury Suite",
      desc: "Premium ocean view experience",
      price: "$189",
      icon: StarSolid,
    },
  ];

  return (
    <section className="py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center  flex flex-col items-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold">
            Browse Room Categories
          </h2>
          <p className="mt-3 text-txt-sm">
            Choose the perfect stay based on your comfort, budget, and travel style.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {categories.map((item) => (
            <div
              key={item.title}
              className="group relative card-col-c hover:bg-acc/5 hover:scale-[1.02] transition-all duration-300"
            >

              {/* Icon */}
              <div className="size-14 rounded-2xl bg-acc text-acc-txt flex items-center justify-center">
                <item.icon className="icon text-acc-txt" />
              </div>

              {/* Content */}
              <h3 className="mt-4">{item.title}</h3>

              <p className="text-txt-sm text-center">{item.desc}</p>

              {/* Price */}
              <div className="mt-4">
                <span className="text-2xl font-bold text-acc">
                  {item.price}
                </span>
                <span className="text-txt-sm"> / night</span>
              </div>

              {/* Button */}
              <button className="btn-outline mt-6 group-hover:bg-acc group-hover:text-acc-txt transition-all">
                View Rooms
                <ArrowRight className="icon-sm" />
              </button>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-acc/5 opacity-0 group-hover:opacity-100 transition-all blur-xl -z-10"></div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}