import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { Send } from "lucide-react";
import { MailPlus } from "lucide-react";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";
import { Youtube } from "lucide-react";

const Footer = () => {
  return (
    <div className="mx-auto w-full bg-[#141414] px-20 py-12 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-8">
        <div className="col-span-1 md:col-span-3 lg:col-span-2 space-y-4">
          <Logo />

          <div className="flex items-center w-80 bg-black text-white rounded border border-[#262626] px-3 py-2">
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
        <div>
          <h1 className="font-semibold mb-2 text-[#999999]">Home</h1>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>
              <Link
                to="/features"
                className="cursor-pointer hover:text-pink-300 duration-200 transition"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="/properties"
                className="cursor-pointer hover:text-pink-300 duration-200 transition"
              >
                Properties
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="cursor-pointer hover:text-pink-300 duration-200 transition"
              >
                FAQ's
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="cursor-pointer hover:text-pink-300 duration-200 transition"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold mb-2 text-[#999999]">About Us</h1>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>
              <Link
                to="/our-story"
                className="cursor-pointer hover:text-pink-300 duration-200 transition"
              >
                Our Story
              </Link>
            </li>
            <li>
              <Link
                to="/how-it-works"
                className="cursor-pointer hover:text-pink-300 duration-200 transition"
              >
                How It Works
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold mb-2 text-[#999999]">Properties</h1>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>
              <Link
                to="*"
                className="cursor-pointer hover:text-pink-300 duration-200 transition"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="*"
                className="cursor-pointer hover:text-pink-300 duration-200 transition"
              >
                Categories
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold mb-2 text-[#999999]">Services</h1>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>
              <Link
                to="/valuation-mastery"
                className="cursor-pointer hover:text-pink-300 duration-200 transition"
              >
                Valuation Mastery
              </Link>
            </li>
            <li>
              <Link
                to="/property-management"
                className="cursor-pointer hover:text-pink-300 duration-200 transition"
                c
              >
                Property Management
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold mb-2 text-[#999999]">Contact Us</h1>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>
              <Link
                to="*"
                className="cursor-pointer hover:text-pink-300 duration-200 transition"
              >
                Contact Form
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between pt-13">
        <div className="flex gap-4">
          <h1>@2025 Estatein. All Rights Reserved.</h1>
          <h1>Terms & Conditions</h1>
        </div>
        <div>
          <button className="text-white w-8 h-8 hover:text-pink-400 ">
            <Facebook />
          </button>
          <button className="text-white w-8 h-8 hover:text-pink-400 ">
            <Linkedin />
          </button>
          <button className="text-white w-8 h-8 hover:text-pink-400 ">
            <Twitter />
          </button>
          <button className="text-white w-8 h-8 hover:text-pink-400 ">
            <Youtube />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
