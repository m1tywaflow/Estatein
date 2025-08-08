import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import Banner from "./Banner";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Properties", path: "/properties" },
    { name: "Services", path: "/services" },
  ];

  return (
    <header className="bg-[#1A1A1A] px-4 sm:px-6 py-4">
      <Banner />
      <div className="flex items-center justify-between pt-6">
        <Logo />
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-white px-3 py-1 rounded-md hover:text-purple-400 focus:outline-none border border-transparent hover:border-purple-500 transition cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact-us"
          className="hidden md:block text-white border border-gray-600 px-4 py-1.5 rounded-md hover:border-purple-500 transition cursor-pointer"
        >
          Contact Us
        </Link>
        <button
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4 bg-[#111] p-4 rounded-lg border border-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="block text-white px-3 py-2 rounded-md hover:text-purple-400 hover:bg-[#222] transition"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact-us"
            onClick={() => setIsMenuOpen(false)}
            className="block text-white border border-gray-600 px-4 py-2 rounded-md hover:border-purple-500 transition"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
