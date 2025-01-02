import React, { useState } from "react";
import logo from "./assets/logo_1.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="navbar pl-10 pr-10 bg-black p-2 flex justify-between items-center fixed top-0 left-0 w-full z-50">
        <div className="logoNew text-center w-60">
          <img src={logo} alt="logo" />
        </div>
        <div className="drop">
          <div
            id="Hamburger"
            className="hamburger inline-block p-4 cursor-pointer md:hidden"
            onClick={toggleMenu}
          >
            <div className="line h-0.5 w-6 my-1 bg-white"></div>
            <div className="line h-0.5 w-6 my-1 bg-white"></div>
            <div className="line h-0.5 w-6 my-1 bg-white"></div>
          </div>
          <div
            id="menuDropdown"
            className={`${
              menuOpen ? "" : "hidden"
            } md:hidden absolute bg-black top-[80px] right-0 rounded-md w-48`}
          >
            <ul className="flex flex-col pt-4 pb-4">
              <li className="p-2 pl-6 text-white hover:text-green-400 cursor-pointer">
                <a href="#">About</a>
              </li>
              <li className="p-2 pl-6 text-white hover:text-green-400 cursor-pointer">
                <a href="#">Events</a>
              </li>
              <li className="p-2 pl-6 text-white hover:text-green-400 cursor-pointer">
                <a href="#">Speakers</a>
              </li>
              <li className="p-2 pl-6 text-white hover:text-green-400 cursor-pointer">
                <a href="#">Sponsors</a>
              </li>
              <li className="p-2 pl-6 text-white hover:text-green-400 cursor-pointer">
                <a href="#">Contacts</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="endItem hidden md:flex">
          <div className="features md:flex md:items-center md:justify-center">
            <ul className="md:flex md:items-center">
              <li className="fitem text-white mx-4 my-6 md:my-0 hover:cursor-pointer hover:text-green-400">
                <a href="#">About</a>
              </li>
              <li className="fitem text-white mx-4 my-6 md:my-0 hover:cursor-pointer hover:text-green-400">
                <a href="#">Events</a>
              </li>
              <li className="fitem text-white mx-4 my-6 md:my-0 hover:cursor-pointer hover:text-green-400">
                <a href="#">Speakers</a>
              </li>
              <li className="fitem text-white mx-4 my-6 md:my-0 hover:cursor-pointer hover:text-green-400">
                <a href="#">Sponsors</a>
              </li>
              <li className="fitem text-white mx-4 my-6 md:my-0 hover:cursor-pointer hover:text-green-400">
                <a href="#">Contacts</a>
              </li>
            </ul>
          </div>
          <div className="btn md:items-center md:justify-center">
            <button className="p-1.5 pl-3 pr-3 bg-[#00B25C] w-[130px] h-[35px] gap-0 rounded-[6px] text-white hidden md:block transform hover:scale-105 transition ease-in duration-200">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
