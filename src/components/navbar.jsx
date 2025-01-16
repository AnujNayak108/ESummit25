import React, { useState, useMemo } from "react";
import logo from "../assets/esummitlogo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const memoizedNavbar = useMemo(() => {
    return (
      <nav className="fixed top-0 left-0 right-0 bg-black shadow-sm z-50">
        <div className="container mx-auto flex items-center justify-between py-3 px-3 xl:px-2">
          <img
            draggable={false}
            src={logo}
            alt="E-Summit'25 Logo"
            className="h-12 w-auto cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
          <div className="md:hidden">
            {menuOpen ? (
              <ImCross
                onClick={() => setMenuOpen(false)}
                className="transition-transform duration-300 text-primaryText cursor-pointer"
                size={24}
              />
            ) : (
              <GiHamburgerMenu
                onClick={() => setMenuOpen(true)}
                className="transition-transform duration-300 text-primaryText cursor-pointer"
                size={24}
              />
            )}
          </div>
          <div className="hidden md:flex items-center space-x-8 mr-16 ml-auto">
            <button className="text-primaryText hover:text-primaryGreen transition font-medium">About</button>
            <button className="text-primaryText hover:text-primaryGreen transition font-medium">Events</button>
            <button className="text-primaryText hover:text-primaryGreen transition font-medium">Speakers</button>
            <button className="text-primaryText hover:text-primaryGreen transition font-medium">Sponsors</button>
            <button className="text-primaryText hover:text-primaryGreen transition font-medium">Contact</button>
          </div>
          <button className="hidden md:flex bg-primaryGreen text-white font-medium py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">
            Register Now
          </button>
        </div>
        <div
          className={`md:hidden flex flex-col items-center bg-black transition-all duration-500 ease-in-out overflow-hidden ${
            menuOpen ? "max-h-96 py-4 opacity-100" : "max-h-0 py-0 opacity-0"
          } space-y-6 text-lg`}
        >
          <button className="text-primaryText hover:text-primaryGreen transition font-medium">About</button>
          <button className="text-primaryText hover:text-primaryGreen transition font-medium">Events</button>
          <button className="text-primaryText hover:text-primaryGreen transition font-medium">Speakers</button>
          <button className="text-primaryText hover:text-primaryGreen transition font-medium">Sponsors</button>
          <button className="text-primaryText hover:text-primaryGreen transition font-medium">Contact</button>
        </div>
      </nav>
    );
  }, [menuOpen]);

  return memoizedNavbar;
};

export default Navbar;