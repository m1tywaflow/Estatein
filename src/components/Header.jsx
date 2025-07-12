import React from "react";
import Logo from "./Logo";
import Banner from "./Banner";
const Header = () => {
  return (
    <header className="bg-[#1A1A1A] px-6 py-4">
      <Banner/>
      <div className="flex items-center space-x-2 justify-between pt-6">
        <Logo />
        <div>
          <nav className="hidden md:flex space-x-6">
            <button className="text-white px-3 py-1 rounded-md hover:text-purple-400 focus:outline-none border border-transparent hover:border-purple-500 transition">
              Home
            </button>
            <button className="text-white px-3 py-1 rounded-md hover:text-purple-400 focus:outline-none border border-transparent hover:border-purple-500 transition ">
              About Us
            </button>
            <button className="text-white px-3 py-1 rounded-md hover:text-purple-400 focus:outline-none border border-transparent hover:border-purple-500 transition">
              Properties
            </button>
            <button className="text-white px-3 py-1 rounded-md hover:text-purple-400 focus:outline-none border border-transparent hover:border-purple-500 transition">
              Services
            </button>
          </nav>
        </div>
        <button className="text-white border border-gray-600 px-4 py-1.5 rounded-md hover:border-purple-500 transition">
          Contact Us
        </button>
      </div>
    </header>
  );
};
export default Header;
