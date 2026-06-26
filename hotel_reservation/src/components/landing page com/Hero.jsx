import {
  ArrowRight,
  BedReady,
  StarSolid,
  User,
} from "iconoir-react";
import Line from "./Line";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-28 ">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-1 gap-20 items-center">
          {/* LEFT */}
          <div className="flex justify-center items-center flex-col">
            <button className="btn-sm p-1.5 btn-outline border-acc/30 bg-acc/20 text-sm   px-3">
              <BedReady className="icon-sm" />
              Trusted by 10,000+ Happy Travelers
            </button>
            <h1 className="mt-8 text-5xl font-semibold md:text-6xl lg:text-7xl font-bold leading-tight text-center ">
                Luxury Stays Made and <br />  gets its done for 
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-center  line-clamp-3">
              Discover elegant rooms, premium suites, and unforgettable
              experiences. Reserve your perfect stay in minutes with our modern
              hotel reservation platform.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <button className="btn-acc btn-lg animate-bounce group transition-all ease-in-out ">
                Reserve Now
                <ArrowRight className="icon-sm group-hover:ml-3 transition-all ease-in-out group-hover:animate-ping group-hover:size-3" />
              </button>

              <button className="btn-outline btn-lg animate-pulse">
                Explore Rooms
              </button>

            </div>

            {/* Stats */}

            <Line/>
            <div className="grid grid-cols-3 gap-5 mt-16 ">
              <div className="card-col-c">
                <h2>150+</h2>
                <p>Luxury Rooms</p>
              </div>

              <div className="card-col-c">
                <h2>12K+</h2>
                <p>Happy Guests</p>
              </div>

              <div className="card-col-c">
                <h2>4.9★</h2>
                <p>Guest Rating</p>
              </div>
            </div>


          </div>

          {/* RIGHT */}

          <div className="relative  w-full  hidden sm:flex ">

            <img
              src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Luxury Hotel"
              className="aspect-squere md:aspect-video object-cover rounded-2xl  border-2/ border-bg-sm"
            />

            {/* Review Card */}

            <div className="absolute top-8 hidden sm:flex flex-col -left-5  bg-bg-md  border-2 border-bg-sm rounded-2xl p-5 w-94">
              <div className="flex items-center gap-3">

                <div className="size-12 rounded-full bg-bg-sm  flex items-center justify-center">
                  <User className="icon" />
                </div>

                <div>
                  <h5>Emma Wilson</h5>
                  <p>Verified Guest</p>
                </div>

              </div>

              <div className="flex gap-1 mt-4 text-yellow-500">
                <StarSolid />
                <StarSolid />
                <StarSolid />
                <StarSolid />
                <StarSolid />
              </div>

              <p className="mt-4">
                "Beautiful hotel with excellent service. Booking was quick and
                everything exceeded expectations."
              </p>

            </div>

            {/* Price Card */}

            <div className="absolute bottom-8 right-11 bg-bg border-2 border-bg-sm rounded-3xl p-6  w-72">

              <span className="text-yellow-500 font-semibold">
                ★ Premium Suite
              </span>

              <h3 className="mt-3">
                $189
                <span className="text-base font-medium text-txt-sm">
                  {" "}
                  / night
                </span>
              </h3>

              <p className="mt-2">
                Ocean View • King Bed • Breakfast Included
              </p>

              <button className="btn-acc w-full justify-center mt-6">
                Reserve Room
              </button>

            </div>

            {/* Award Badge */}

            <button className="absolute top-10 right-6 ">
              <span> Best Luxury Hotel 2026</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}