import React from "react";
import bg from "/src/assets/ctaBg.png";
import { Link } from "react-router-dom";

export default function CTAsec() {
  return (
    <div
      className="relative w-full bg-center bg-cover text-white bg-black px-6 sm:px-10 lg:px-20 py-10"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="max-w-3xl">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold pt-2">
            Start Your Real Estate Journey Today
          </h1>
          <p className="pt-4 text-sm sm:text-base text-[#999999] leading-relaxed">
            Your dream property is just a click away. Whether you're looking for
            a new home, a strategic investment, or expert real estate advice,
            Estatein is here to assist you every step of the way. Take the first
            step towards your real estate goals and explore our available
            properties or get in touch with our team for personalized
            assistance.
          </p>
        </div>
        <Link
          to="/properties"
          className="bg-[#703BF7] w-full sm:w-40 h-12 rounded cursor-pointer hover:bg-pink-400 transition duration-200 text-center flex items-center justify-center text-sm sm:text-base"
        >
          Explore Properties
        </Link>
      </div>
    </div>
  );
}
