import React from "react";
import { NavLink } from "react-router-dom";
import {
  HomeAltSlim,
  Mail,
  Phone,
  MapPin,
  Instagram,
  X,
  Facebook,
  Linkedin,
  ArrowUpRight,
  PostSolid,
} from "iconoir-react";
import Input from '../../components/Ui/Input';

const Footer = () => {
  return (
    <footer className="mt-28 border-t  border-t-2 border-t-bg-sm w-full">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="size-12 rounded-2xl bg-primary text-white flex items-center justify-center">
                <HomeAltSlim className="icon size-8" />
              </div>

              <div>
                <h2 className="text-2xl font-bold">Elegante</h2>
                <p className="text-sm text-txt-muted">
                  Luxury Hotel Reservation
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md leading-7 text-txt-muted">
              Experience luxury, comfort, and unforgettable stays. Discover
              premium rooms, exclusive offers, and seamless booking for your
              next vacation.
            </p>

            <div className="mt-8 flex gap-3">
              {[Instagram, Facebook, X, Linkedin].map((Icon, index) => (
                <button
                  key={index}
                  className="p-3"
                >
                  <Icon />
                </button>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Company</h3>

            <div className="space-y-3 text-txt-sm ">
              <NavLink
                to="/about"
                className="block text-txt-muted transition hover:text-primary"
              >
                About Us
              </NavLink>

              <NavLink
                to="/rooms"
                className="block text-txt-muted transition hover:text-primary"
              >
                Our Rooms
              </NavLink>

              <NavLink
                to="/destinations"
                className="block text-txt-muted transition hover:text-primary"
              >
                Destinations
              </NavLink>

              <NavLink
                to="/blog"
                className="block text-txt-muted transition hover:text-primary"
              >
                Blog
              </NavLink>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Support</h3>

            <div className="space-y-3 text-txt-sm">
              <NavLink
                to="/contact"
                className="block text-txt-muted transition hover:text-primary"
              >
                Contact
              </NavLink>

              <NavLink
                to="/help-center"
                className="block text-txt-muted transition hover:text-primary"
              >
                Help Center
              </NavLink>

              <NavLink
                to="/faq"
                className="block text-txt-muted transition hover:text-primary"
              >
                FAQs
              </NavLink>

              <NavLink
                to="/privacy-policy"
                className="block text-txt-muted transition hover:text-primary"
              >
                Privacy Policy
              </NavLink>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Contact</h3>

            <div className="space-y-5 text-txt-sm ">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1" />
                <span>New York, United States</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone />
                <span>+1 (800) 123-4567</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail />
                <span>support@elegante.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-bg-md  p-8 lg:flex-row">
          <div>
            <h3 className="text-2xl font-bold">
              Stay Updated with Elegante
            </h3>

            <p className="mt-2 text-txt-muted">
              Subscribe to receive exclusive hotel deals, travel inspiration,
              and special offers.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
            <Input
              leftIcon={<PostSolid className="icon"/>}
              type="text"
              placeHolder="Enter your email"
            />

            <button className="btn btn-primary">
              Subscribe
              <ArrowUpRight />
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-base-300 pt-8 text-sm text-txt-muted md:flex-row">
          <p>© 2026 Elegante. All rights reserved.</p>

          <div className="flex gap-6">
            <NavLink
              to="/terms"
              className="transition hover:text-primary"
            >
              Terms
            </NavLink>

            <NavLink
              to="/privacy-policy"
              className="transition hover:text-primary"
            >
              Privacy
            </NavLink>

            <NavLink
              to="/cookies"
              className="transition hover:text-primary"
            >
              Cookies
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;