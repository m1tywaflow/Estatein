import React from "react";
import first from "/src/assets/home.svg";
import second from "/src/assets/cam.svg";
import third from "/src/assets/build.svg";
import fourth from "/src/assets/sun.svg";
import { ArrowUpRight } from "lucide-react";
const features = [
  { title: "Find Your Dream Home", icon: first },
  { title: "Unlock Property Value", icon: second },
  { title: "Effortless Property Management", icon: third },
  { title: "Smart Investments. Informed Decisions", icon: fourth },
];
const PaginSec = () => {
  return (
    <div className="bg-[#0a0a0a] py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1600px] mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#111] text-white p-6 rounded-md border border-[#222] relative hover:border-purple-500 transition cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-14 h-14 object-contain"
              />
              <ArrowUpRight className="text-[#4D4D4D]" size={30} />
            </div>
            <p>{feature.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PaginSec;
