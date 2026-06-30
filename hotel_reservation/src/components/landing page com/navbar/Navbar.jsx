import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Mastodon, Menu, X } from "iconoir-react";
import { Link, NavLink } from "react-router-dom";
import { MenuIcon, MoonIcon, XIcon } from "lucide-react";

const Navbar = () =>  {
  const [open, setOpen] = useState(false);

const navItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    title: "Rooms",
    path: "#",
  },
  {
    title: "Customers",
    path: "#",
  },
  {
    title: "Reservations",
    path: "#",

  }
]

const [dark, setDark] = useState(false);

useEffect(() => {
  const saved = localStorage.getItem("theme")
  if(saved === "dark"){
    setDark(true)
  }
}, []);

useEffect(() => {
  if(dark){
    document.documentElement.classList.add("dark")
    localStorage.setItem("theme", "dark")
  }
  else {
    document.documentElement.classList.remove("dark")
    localStorage.setItem("theme", "light")
  }
}, [dark]);

  return (
    <header className="sticky bg-bg-md/ w-full  rounded-2xl   top-0 z-50 border-2/ mt-5 border-bg-sm  backdrop-blur-xl ">
      <div className="max-w-7xl mx-auto h-fit  px-6 flex items-center gap-20 justify-between">
        {/* Logo */}
       <div className="flex items-center">
            <button className="btn-lg px-4 scale-80 py-3.5  btn-outline border-none ">
                <Mastodon strokeWidth={2} className="text-txt size-8" />
            </button>
            <h4 className="text-txt brightness-145 font-bold">Monarch Hotel</h4>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
            <nav className=" flex items-center gap-5 "> 
            {navItems.map((item) => (
                <NavLink key={item.path} to={item.path}>
                {({ isActive }) => (
                    <span
                    className={
                        isActive
                        ? "font-semibold  text-txt"
                        : "text-txt-sm font-medium "
                    }
                    >
                    {item.title}
                    </span>
                )}
                </NavLink>
            ))}
            </nav>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link className="block" to={"/login"}>
            <button className="btn-inv">Log In</button>
          </Link>
          <Link className="block" to={"/register"}>
            <button className=""> Register now</button>
          </Link>
         
          <button onClick={() => setDark(!dark)} className="btn-inv px-2 ">   <MoonIcon className="icon text-inv-txt"/></button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden btn-sm py-2.5  px-2.5  rounded-full">
          {open ? (
            <XIcon className="icon-sm" />
          ) : (
            <MenuIcon className="icon-sm " />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-[500px]" : "max-h-0"}`}>
        <div className="border-t-2 border-bg-sm/50 bg-bg p-6 flex flex-col gap-2">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className="px-4 py-3 rounded-2xl text-txt-sm hover:bg-bg-md transition">
                {item.title}
            </NavLink>
            ))}

          <div className="flex flex-col gap-3 mt-4">
            <button className="btn-outline justify-center">
              Login
            </button>

            <button className="btn-acc justify-center">
              Register
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
export default Navbar