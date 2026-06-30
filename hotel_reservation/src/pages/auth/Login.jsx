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
import Input from "../../components/Ui/Input";
import { IndentIcon } from "lucide-react";

export default function Login() {
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
        Welcome Back
      </span>

      <h1 className="mt-4 text-center">
        Continue Your Stay
      </h1>

      <p className="mt-3 text-center">
        Sign in to manage your reservations, book your next stay, and access exclusive hotel member offers.
      </p>
  </div>

    <form className="space-y-5">

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

      <button
        type="submit"
        className="btn-lg btn-acc w-full justify-center mt-2"
      >
        Log in

        <ArrowRight className="icon-sm" />
      </button>

    </form>

    <p className="text-center mt-8">
      Don't have an account?{" "}
      <NavLink
        to="/register"
        className="font-semibold text-acc hover:underline"
      >
        Sign Up
      </NavLink>
    </p>

  </div>
</div>
  );
}