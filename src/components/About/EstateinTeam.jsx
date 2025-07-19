import React from "react";

import teamFirst from "/src/assets/teamFirst.png";
import teamSecond from "/src/assets/teamSecond.png";
import teamThird from "/src/assets/teamThird.png";
import teamFourth from "/src/assets/teamFourth.png";
import "./teamsec.css";

const persons = [
  {
    image: teamFirst,
    name: "Max Mitchell",
    proff: "Founder",
  },
  {
    image: teamSecond,
    name: "Sarah Johnson",
    proff: "Chief Real Estate Officer",
  },
  {
    image: teamThird,
    name: "David Brown",
    proff: "Head of Property Management",
  },
  {
    image: teamFourth,
    name: "Michael Turner",
    proff: "Legal Counsel",
  },
];

const EstateinTeam = () => {
  return (
    <div className="bg-[#0F0F0F] text-white px-6 md:px-12 py-16">
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          Meet the Estatein Team
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          At Estatein, our success is driven by the dedication and expertise of
          our team. Get to know the people behind our mission to make your real
          estate dreams a reality.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {persons.map((per, index) => (
          <div
            key={index}
            className="bg-[#1A1A1A] p-6 rounded-2xl shadow-md flex flex-col items-center text-center glowing-border"
          >
            <img
              src={per.image}
              alt={per.name}
              className="w-full h-70 object-cover rounded-lg mb-4"
            />
            <div className="relative -mt-6 mb-4"></div>
            <h2 className="text-lg font-semibold pt-8">{per.name}</h2>
            <p className="text-sm text-gray-400 mb-4">{per.proff}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EstateinTeam;
