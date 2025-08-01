import React from "react";
import { Link } from "react-router-dom";
import first from "/src/assets/home.svg";
import second from "/src/assets/cam.svg";
import third from "/src/assets/build.svg";
import fourth from "/src/assets/sun.svg";
import { ArrowUpRight } from "lucide-react";

const features = [
  { title: "Find Your Dream Home", icon: first, link: "/properties" },
  { title: "Unlock Property Value", icon: second, link: "/valuation-mastery" },
  {
    title: "Effortless Property Management",
    icon: third,
    link: "/property-management",
  },
  {
    title: "Smart Investments. Informed Decisions",
    icon: fourth,
    link: "/features",
  },
];

const PaginSec = () => {
  return (
    <div className="bg-[#0a0a0a] py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8 mx-auto">
        {features.map((feature, index) => (
          <Link to={feature.link} key={index} className="block">
            <div className="bg-[#111] text-white p-6 rounded-md border border-[#222] relative hover:border-purple-500 transition cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-14 h-14 object-contain"
                />
                <ArrowUpRight
                  className="text-[#4D4D4D] hover:text-purple-500 transition"
                  size={30}
                />
              </div>
              <p className="text-[#999999]">{feature.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PaginSec;
