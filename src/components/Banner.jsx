import React from "react";
import banner from "../assets/backgroundBanner.png";

const Banner = () => {
  return (
    <div
      className="relative w-full h-10 bg-center bg-cover flex items-center justify-center text-white text-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="flex gap-4">
        <h2 className="text-lg md:text-xl font-semibold">
          ✨ Discover Your Dream Property with Estatein
        </h2>
        <a href="#" className="underline  text-sm md:text-base text-purple-300 hover:text-purple-400">
          Learn more
        </a>
      </div>
    </div>
  );
};

export default Banner;
