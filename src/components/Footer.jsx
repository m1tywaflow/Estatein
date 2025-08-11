import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { Send, MailPlus, Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <div className="mx-auto w-full bg-[#141414] px-6 sm:px-10 lg:px-20 py-8 sm:py-12 text-white">
      {/* Верхняя сетка */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8">
        {/* Логотип + подписка */}
        <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2 space-y-4">
          <Logo />
          <div className="flex items-center w-full sm:w-80 bg-black text-white rounded border border-[#262626] px-3 py-2">
            <MailPlus className="text-gray-400 mr-2" size={20} />
            <input
              className="flex-grow bg-transparent text-white focus:outline-none placeholder:text-gray-500"
              type="text"
              placeholder="Enter your email"
            />
            <Send
              className="text-white cursor-pointer ml-2 hover:text-pink-400 transition duration-150"
              size={20}
            />
          </div>
        </div>

        {/* Колонки меню */}
        <div>
          <h1 className="font-semibold mb-2 text-[#999999]">Home</h1>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><Link to="/features" className="hover:text-pink-300">Features</Link></li>
            <li><Link to="/properties" className="hover:text-pink-300">Properties</Link></li>
            <li><Link to="/faq" className="hover:text-pink-300">FAQ's</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-pink-300">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h1 className="font-semibold mb-2 text-[#999999]">About Us</h1>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><Link to="/our-story" className="hover:text-pink-300">Our Story</Link></li>
            <li><Link to="/how-it-works" className="hover:text-pink-300">How It Works</Link></li>
          </ul>
        </div>

        <div>
          <h1 className="font-semibold mb-2 text-[#999999]">Properties</h1>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><Link to="*" className="hover:text-pink-300">Portfolio</Link></li>
            <li><Link to="*" className="hover:text-pink-300">Categories</Link></li>
          </ul>
        </div>

        <div>
          <h1 className="font-semibold mb-2 text-[#999999]">Services</h1>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><Link to="/valuation-mastery" className="hover:text-pink-300">Valuation Mastery</Link></li>
            <li><Link to="/property-management" className="hover:text-pink-300">Property Management</Link></li>
          </ul>
        </div>

        <div>
          <h1 className="font-semibold mb-2 text-[#999999]">Contact Us</h1>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><Link to="/contact-us" className="hover:text-pink-300">Contact Form</Link></li>
          </ul>
        </div>
      </div>

      {/* Нижняя панель */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 pt-8 border-t border-[#262626] mt-8">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-gray-400 text-center sm:text-left">
          <span>@2025 Estatein. All Rights Reserved.</span>
          <span className="cursor-pointer hover:text-pink-300">Terms & Conditions</span>
        </div>

        <div className="flex gap-4">
          <button className="text-white hover:text-pink-400"><Facebook size={20} /></button>
          <button className="text-white hover:text-pink-400"><Linkedin size={20} /></button>
          <button className="text-white hover:text-pink-400"><Twitter size={20} /></button>
          <button className="text-white hover:text-pink-400"><Youtube size={20} /></button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
