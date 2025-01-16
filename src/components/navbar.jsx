/*import { useRef } from "react";
import React, { useState } from "react";
import logo from "../assets/esummitlogo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

  };
 
  return (
    <>
      <div className="navbar pl-2 pr-2 md:pl-4 md:pr-4 md:pt-1 bg-black flex justify-between items-center fixed top-0 left-0 w-full z-50">
        <div className="logoNew text-center w-60">
          <img src={logo} alt="logo" />
        </div>
        <div className="drop">
          <div
            id="Hamburger"
            className="hamburger inline-block mr-4 cursor-pointer md:hidden"
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
            <ul className="flex flex-col pt-2 pb-2">
              <li className="p-2 pl-6 text-white hover:text-green-400 cursor-pointer">
                <a href={AboutUs}>About</a>
              </li>
              <li className="p-2 pl-6 text-white hover:text-green-400 cursor-pointer">
                <a href={events}>Events</a>
              </li>
              <li className="p-2 pl-6 text-white hover:text-green-400 cursor-pointer">
                <a href={speakers}>Speakers</a>
              </li>
              <li className="p-2 pl-6 text-white hover:text-green-400 cursor-pointer">
                <a href={sponsors}>Sponsors</a>
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
            <button className="p-1.5 pl-3 pr-3 ml-6 mr-6 bg-[#00B25C] hover:bg-[#009E52] w-[130px] h-[35px] gap-0 rounded-[6px] text-white hidden md:block transform hover:scale-105 transition ease-in duration-200">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;*/

  /*import { Link } from "react-router-dom";
  import React, { useState } from "react";
  import logo from "../assets/esummitlogo.png";

  function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    return (
      <div className="navbar pl-2 pr-2 md:pl-4 md:pr-4 md:pt-1 bg-black flex justify-between items-center fixed top-0 left-0 w-full z-50">
        <div className="logoNew text-center w-60">
          <img src={logo} alt="logo" />
        </div>
        <div className="drop">
          <div
            id="Hamburger"
            className="hamburger inline-block mr-4 cursor-pointer md:hidden"
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
            <ul className="flex flex-col pt-2 pb-2">
              <li className="p-2 pl-6 text-white hover:text-green-400 cursor-pointer">
                <Link to="/about">About</Link>
              </li>
              <li className="p-2 pl-6 text-white hover:text-green-400 cursor-pointer">
                <Link to="/events">Events</Link>
              </li>
              <li className="p-2 pl-6 text-white hover:text-green-400 cursor-pointer">
                <Link to="/speakers">Speakers</Link>
              </li>
              <li className="p-2 pl-6 text-white hover:text-green-400 cursor-pointer">
                <Link to="/sponsors">Sponsors</Link>
              </li>
              <li className="p-2 pl-6 text-white hover:text-green-400 cursor-pointer">
                <Link to="/contacts">Contacts</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="endItem hidden md:flex">
          <ul className="md:flex md:items-center">
            <li className="fitem text-white mx-4 my-6 md:my-0 hover:cursor-pointer hover:text-green-400">
              <Link to="/about">About</Link>
            </li>
            <li className="fitem text-white mx-4 my-6 md:my-0 hover:cursor-pointer hover:text-green-400">
              <Link to="/events">Events</Link>
            </li>
            <li className="fitem text-white mx-4 my-6 md:my-0 hover:cursor-pointer hover:text-green-400">
              <Link to="/speakers">Speakers</Link>
            </li>
            <li className="fitem text-white mx-4 my-6 md:my-0 hover:cursor-pointer hover:text-green-400">
              <Link to="/sponsors">Sponsors</Link>
            </li>
            <li className="fitem text-white mx-4 my-6 md:my-0 hover:cursor-pointer hover:text-green-400">
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
          <button className="p-1.5 pl-3 pr-3 ml-6 mr-6 bg-[#00B25C] hover:bg-[#009E52] w-[130px] h-[35px] gap-0 rounded-[6px] text-white hidden md:block transform hover:scale-105 transition ease-in duration-200">
            Register Now
          </button>
        </div>
      </div>
    );
  }

  export default Navbar;*/

import React, { useState } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import logo from "../assets/esummitlogo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar pl-2 pr-2 md:pl-4 md:pr-4 md:pt-1 bg-black flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <div className="logoNew cursor-pointer text-center w-60">
      <Link to="about" smooth={true} duration={500} offset={-70}>
      <img src={logo} alt="logo" />
              </Link>
      </div>
      <div className="drop">
        <div
          id="Hamburger"
          className="hamburger inline-block mr-4 cursor-pointer md:hidden"
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
          <ul className="flex flex-col pt-2 pb-2">
            <li className="p-2 pl-6 text-white hover:text-green-400 cursor-pointer">
              <Link to="about" smooth={true} duration={500} offset={-70}>
                About
              </Link>
            </li>
            <li className="p-2 pl-6 text-white hover:text-green-400 cursor-pointer">
              <Link to="events" smooth={true} duration={500} offset={-70}>
                Events
              </Link>
            </li>
            <li className="p-2 pl-6 text-white hover:text-green-400 cursor-pointer">
              <Link to="speakers" smooth={true} duration={500} offset={-70}>
                Speakers
              </Link>
            </li>
            <li className="p-2 pl-6 text-white hover:text-green-400 cursor-pointer">
              <Link to="sponsors" smooth={true} duration={500} offset={-70}>
                Sponsors
              </Link>
            </li>
            <li className="p-2 pl-6 text-white hover:text-green-400 cursor-pointer">
              <Link to="contacts" smooth={true} duration={500} offset={-70}>
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="endItem hidden md:flex">
        <ul className="md:flex md:items-center">
          <li className="fitem text-white mx-4 my-6 md:my-0 hover:cursor-pointer hover:text-green-400">
            <Link to="about" smooth={true} duration={500} offset={-70}>
              About
            </Link>
          </li>
          <li className="fitem text-white mx-4 my-6 md:my-0 hover:cursor-pointer hover:text-green-400">
            <Link to="events" smooth={true} duration={500} offset={-70}>
              Events
            </Link>
          </li>
          <li className="fitem text-white mx-4 my-6 md:my-0 hover:cursor-pointer hover:text-green-400">
            <Link to="speakers" smooth={true} duration={500} offset={-70}>
              Speakers
            </Link>
          </li>
          <li className="fitem text-white mx-4 my-6 md:my-0 hover:cursor-pointer hover:text-green-400">
            <Link to="sponsors" smooth={true} duration={500} offset={-70}>
              Sponsors
            </Link>
          </li>
          <li className="fitem text-white mx-4 my-6 md:my-0 hover:cursor-pointer hover:text-green-400">
            <Link to="contacts" smooth={true} duration={500} offset={-70}>
              Contacts
            </Link>
          </li>
        </ul>
        <button className="p-1.5 pl-3 pr-3 ml-6 mr-6 bg-[#00B25C] hover:bg-[#009E52] w-[130px] h-[35px] gap-0 rounded-[6px] text-white hidden md:block transform hover:scale-105 transition ease-in duration-200">
          Register Now
        </button>
      </div>
    </div>
  );
}

export default Navbar;

