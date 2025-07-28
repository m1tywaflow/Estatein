import React from "react";
import { Link } from "react-router-dom";
import first from "/src/assets/tenant.png";
import second from "/src/assets/maintenance.png";
import third from "/src/assets/financial.png";
import fourth from "/src/assets/legal.png";
import cardBanner from "/src/assets/cardBanner.png";

const cards = [
  {
    title: "Tenant Harmony",
    text: "Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.",
    icon: first,
  },
  {
    title: "Maintenance Ease",
    text: "Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.",
    icon: second,
  },
  {
    title: "Financial Peace of Mind",
    text: "Managing property finances can be complex. Our financial experts take care of rent collection",
    icon: third,
  },
  {
    title: "Legal Guardian",
    text: "Stay compliant with property laws and regulations effortlessly.",
    icon: fourth,
  },
];

export default function EffortlessProp() {
  return (
    <div className="bg-[#0a0a0a] py-10 px-4">
      <div className="px-20 py-20 text-center">
        <h1 className="text-5xl text-white mb-4">
          Effortless Property Management
        </h1>
        <p className="text-sm text-gray-400 max-w-5xl mx-auto pt-4">
          Owning a property should be a pleasure, not a hassle. Estatein's
          Property Management Service takes the stress out of property
          ownership, offering comprehensive solutions tailored to your needs.
          Explore the categories below to see how we can make property
          management effortless for you
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8">
        {cards.map((cards, index) => (
          <div
            key={index}
            className="bg-[#111] text-white p-6 rounded-md border border-[#222] relative hover:border-purple-500 transition cursor-pointer"
          >
            <div>
              <img
                src={cards.icon}
                alt={cards.title}
                className="w-14 h-14 object-contain pb-2"
              />
              <p className="text-[#999999]">{cards.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="relative mt-16 max-w-6xl mx-auto rounded-xl overflow-hidden">
        <img
          src={cardBanner}
          alt="Card Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  bg-opacity-60 flex flex-col justify-center items-start px-10 py-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-white">
            Experience Effortless Property Management
          </h2>
          <p className="text-[#999999] mb-6 max-w-lg">
            Ready to experience hassle-free property management? Explore our
            Property Management Service categories and let us handle the
            complexities while you enjoy the benefits of property ownership.
          </p>
          <Link
            to="/properties"
            className="bg-white text-black px-5 py-2 rounded-md font-medium hover:bg-purple-950 transition cursor-pointer"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
