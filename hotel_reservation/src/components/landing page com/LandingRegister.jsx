import { NavLink } from "react-router-dom";
import {
  Building,
  ShieldCheck,
  Calendar,
  ArrowRight,
  Eye,
  EyeClosed,
} from "iconoir-react";
import { useState } from "react";
import Input from "../Ui/Input";

export default function LandingRegister() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const features = [
    {
      icon: Building,
      title: "15,000+ Hotels",
      desc: "Discover luxury hotels and resorts across the world.",
    },
    {
      icon: Calendar,
      title: "Instant Booking",
      desc: "Reserve your perfect room in just a few clicks.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Payments",
      desc: "Protected bookings with trusted payment security.",
    },
  ];

  return (

<div className="bg-bg p-8 lg:p-14 flex items-center justify-center w-full h-screen ">
  <div className="w-full max-w-md mx-auto">

    <div className="mb-8 flex flex-col items-center justify-center">
      <span className="inline-flex px-3 py-1 rounded-full bg-bg-md text-txt-sm font-medium">
        Create your account
      </span>

      <h1 className="mt-4">
        Join Our Hotel Platform
      </h1>

      <p className="mt-3 text-center">
        Create an account to book rooms, manage reservations, and receive
        exclusive member offers.
      </p>
    </div>

    <form className="space-y-5">

      <div>
        <span>Full Name</span>

        <input
          type="text"
          placeholder="John Doe"
          className="w-full mt-2 input-lg"
        />
      </div>

      <div>
        <span>Email Address</span>

        <input
          type="email"
          placeholder="john@email.com"
          className="w-full mt-2 input-lg"
        />
      </div>

      <div className="relative">
        <span>Password</span>

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Create a password"
          className="w-full mt-2 pr-12 input-lg"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-[42px] bg-transparent border-none p-0 hover:scale-100"
        >
          {showPassword ? (
            <EyeClosed className="icon" />
          ) : (
            <Eye className="icon" />
          )}
        </button>
      </div>


      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          className="mt-1 size-4 accent-[var(--color-acc)]"
        />

        <p className="text-sm leading-6">
          I agree to the{" "}
          <span className="font-semibold text-acc cursor-pointer">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="font-semibold text-acc cursor-pointer">
            Privacy Policy
          </span>.
        </p>
      </label>

      <button
        type="submit"
        className="btn-lg btn-acc w-full justify-center mt-2"
      >
        Create Account

        <ArrowRight className="icon-sm" />
      </button>

    </form>

    <p className="text-center mt-8">
      Already have an account?{" "}
      <NavLink
        to="/login"
        className="font-semibold text-acc hover:underline"
      >
        Sign In
      </NavLink>
    </p>

  </div>
</div>
  );
}