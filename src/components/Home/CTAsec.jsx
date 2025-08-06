import React from "react";
import bg from "/src/assets/ctaBg.png";
import { Link } from "react-router-dom";
export default function CTAsec() {
  return (
    <div
      className="relative w-full h-46 bg-center bg-cover text-white bg-black px-20"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex justify-between px-30 ">
        <di className="max-w-5xl">
          <h1 className="text-4xl pt-8">
            Start Your Real Estate Journey Today
          </h1>
          <p className="pt-4 text-[#999999]">
            Your dream property is just a click away. Whether you're looking for
            a new home, a strategic investment, or expert real estate advice,
            Estatein is here to assist you every step of the way. Take the first
            step towards your real estate goals and explore our available
            properties or get in touch with our team for personalized
            assistance.
          </p>
        </di>
        <Link
          to="/properties"
          className="bg-[#703BF7] w-40 h-12 mt-20 rounded cursor-pointer hover:bg-pink-400 transition duration-200 text-center pt-3"
        >
          Explore Properties
        </Link>
      </div>
    </div>
  );
}
