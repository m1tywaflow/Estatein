import React from "react";
import first from "/src/assets/valuation.png";
import second from "/src/assets/strategic.png";
import third from "/src/assets/negotiation.png";
import fourth from "/src/assets/closing.png";
import cardBanner from "/src/assets/cardBanner.png";
import { Link } from "react-router-dom";

const cards = [
  {
    title: "Valuation Mastery",
    text: "Discover the true worth of your property with our expert valuation services.",
    icon: first,
  },
  {
    title: "Strategic Marketing",
    text: "Selling a property requires more than just a listing; it demands a strategic marketing approach.",
    icon: second,
  },
  {
    title: "Negotiation Wizardry",
    text: "Negotiating the best deal is an art, and our negotiation experts are masters of it.",
    icon: third,
  },
  {
    title: "Closing Success",
    text: "A successful sale is not complete until the closing. We guide you through the intricate closing process.",
    icon: fourth,
  },
];

export default function UnlockPropValue() {
  return (
    <div className="bg-[#0a0a0a] py-10 px-4">
      <div className="px-20 py-20 text-center">
        <h1 className="text-5xl text-white mb-4">Unlock Property Value</h1>
        <p className="text-sm text-gray-400 max-w-5xl mx-auto pt-4">
          Selling your property should be a rewarding experience, and at
          Estatein, we make sure it is. Our Property Selling Service is designed
          to maximize the value of your property, ensuring you get the best deal
          possible. Explore the categories below to see how we can help you at
          every step of your selling journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8">
        {cards.map((cards, index) => (
          <div
            key={index}
            className="bg-[#111] text-white p-6 rounded-md border border-[#222] relative hover:border-purple-500 transition cursor-pointer"
          >
            <div>
              <div className="flex items-center gap-2">
                <img
                  src={cards.icon}
                  alt={cards.title}
                  className="w-14 h-14 object-contain pb-2"
                />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {cards.title}
                </h3>
              </div>
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
            Unlock the Value of Your Property Today
          </h2>
          <p className="text-[#999999] mb-6 max-w-lg">
            Ready to unlock the true value of your property? Explore our
            Property Selling Service categories and let us help you achieve the
            best deal possible for your valuable asset.
          </p>
          <Link
            to="/valuation-mastery"
            className="bg-white text-black px-5 py-2 rounded-md font-medium hover:bg-purple-950 transition cursor-pointer"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
