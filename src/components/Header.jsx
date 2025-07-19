import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Banner from "./Banner";

const Header = () => {
  return (
    <header className="bg-[#1A1A1A] px-6 py-4">
      <Banner />
      <div className="flex items-center space-x-2 justify-between pt-6">
        <Logo />
        <div>
          <nav className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-white px-3 py-1 rounded-md hover:text-purple-400 focus:outline-none border border-transparent hover:border-purple-500 transition cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white px-3 py-1 rounded-md hover:text-purple-400 focus:outline-none border border-transparent hover:border-purple-500 transition cursor-pointer"
            >
              About Us
            </Link>
            <Link
              to="/properties"
              className="text-white px-3 py-1 rounded-md hover:text-purple-400 focus:outline-none border border-transparent hover:border-purple-500 transition cursor-pointer"
            >
              Properties
            </Link>
            <Link
              to="/services"
              className="text-white px-3 py-1 rounded-md hover:text-purple-400 focus:outline-none border border-transparent hover:border-purple-500 transition cursor-pointer"
            >
              Services
            </Link>
          </nav>
        </div>
        <Link
          to="/contact"
          className="text-white border border-gray-600 px-4 py-1.5 rounded-md hover:border-purple-500 transition cursor-pointer"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
};

export default Header;
