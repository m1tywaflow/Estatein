import React from "react";
import logo from "../assets/Symbol.png";
const Logo = () => {
  return (
    <>
    <div className="flex items-center space-x-2">
      <img src={logo} alt="Estatein Logo" className="w-10 h-10 bg-black" />
      <span className="text-white font-semibold text-lg">Estatein</span>
    </div>
    </>
  );
};

export default Logo;
