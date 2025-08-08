import React, { useState } from "react";
import { X } from "lucide-react";
import banner from "../assets/backgroundBanner.png";

const Banner = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div
      className={`relative w-full h-10 bg-center bg-cover flex items-center justify-center text-white text-center transition-all duration-500 ease-in-out ${
        visible ? "opacity-100 h-10" : "opacity-0 h-0"
      }`}
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="flex gap-4 items-center">
        <h2 className="text-lg md:text-xl font-semibold">
          ✨ Discover Your Dream Property with Estatein
        </h2>
        <a
          href="*"
          className="underline text-sm md:text-base text-purple-300 hover:text-purple-400"
        >
          Learn more
        </a>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/20 transition"
      >
        <X size={18} />
      </button>
    </div>
  );
};

export default Banner;
