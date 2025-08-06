import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
export default function CardSwitcher() {
  const [activeTab, setActiveTab] = useState("set1");

  const cardsSet1 = [
    {
      id: 1,
      heading: "Main Headquarters",
      address: "123 Estatein Plaza, City Center, Metropolis",
      description:
        "Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
      email: "info@estatein.com",
      phone: "+1 (123) 456-7890",
      location: "Metropolis",
    },
    {
      id: 2,
      heading: "Regional Offices",
      address: "456 Urban Avenue, Downtown District, Metropolis",
      description:
        "Estatein’s presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.",
      email: "info@estatein.com",
      phone: "+1 (123) 628-7890",
      location: "Metropolis",
    },
  ];

  const cardsSet2 = [
    {
      id: 3,
      heading: "Coastal Branch",
      address: "789 Seaside Blvd, Oceanview, Metropolis",
      description:
        "Our coastal branch provides specialized services for waterfront properties. From luxurious beach houses to marina investments, our team helps clients navigate the unique opportunities by the sea.",
      email: "coastal@estatein.com",
      phone: "+1 (123) 555-1234",
      location: "Oceanview",
    },
    {
      id: 4,
      heading: "Uptown Office",
      address: "321 Uptown Street, Financial District, Metropolis",
      description:
        "Located in the heart of the financial district, our uptown office offers premium consultation services tailored for high-value real estate investments and commercial property management.",
      email: "uptown@estatein.com",
      phone: "+1 (123) 555-5678",
      location: "Financial District",
    },
  ];

  const cardsSet3 = [
    {
      id: 5,
      heading: "Suburban Hub",
      address: "654 Maple Lane, Suburbia, Metropolis",
      description:
        "Our suburban hub caters to families and residential buyers, providing expert advice on comfortable living spaces, community developments, and long-term home investments.",
      email: "suburb@estatein.com",
      phone: "+1 (123) 555-8765",
      location: "Suburbia",
    },
    {
      id: 6,
      heading: "Industrial Center",
      address: "987 Industrial Road, Logistics Park, Metropolis",
      description:
        "Strategically located to support the city’s growing logistics sector, our industrial center specializes in warehouses, factories, and large-scale commercial real estate solutions.",
      email: "industrial@estatein.com",
      phone: "+1 (123) 555-4321",
      location: "Logistics Park",
    },
  ];

  const cards =
    activeTab === "set1"
      ? cardsSet1
      : activeTab === "set2"
      ? cardsSet2
      : cardsSet3;

  return (
    <div className="bg-black text-white py-10 px-4">
      {/* Табы */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setActiveTab("set1")}
          className={`px-4 py-2 rounded-full border transition cursor-pointer ${
            activeTab === "set1"
              ? "border-purple-500 text-purple-400"
              : "border-gray-600 text-gray-400 hover:border-gray-400"
          }`}
        >
          Headquarters
        </button>
        <button
          onClick={() => setActiveTab("set2")}
          className={`px-4 py-2 rounded-full border transition cursor-pointer ${
            activeTab === "set2"
              ? "border-purple-500 text-purple-400"
              : "border-gray-600 text-gray-400 hover:border-gray-400"
          }`}
        >
          Branches
        </button>
        <button
          onClick={() => setActiveTab("set3")}
          className={`px-4 py-2 rounded-full border transition cursor-pointer ${
            activeTab === "set3"
              ? "border-purple-500 text-purple-400"
              : "border-gray-600 text-gray-400 hover:border-gray-400"
          }`}
        >
          Specialized
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto items-stretch">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-[#111111] border border-gray-800 rounded-xl p-6 flex flex-col space-y-4 h-full"
          >
            <div>
              <h3 className="text-gray-400 text-sm mb-1">{card.heading}</h3>
              <h2 className="text-2xl font-semibold">{card.address}</h2>
              <p className="text-gray-400 mt-2">{card.description}</p>
            </div>
            <div className="flex flex-wrap gap-3 mt-auto">
              <ContactBadge icon={<Mail size={16} />} text={card.email} />
              <ContactBadge icon={<Phone size={16} />} text={card.phone} />
              <ContactBadge icon={<MapPin size={16} />} text={card.location} />
            </div>
            <Link to="*">
              <button className="bg-[#703BF7] hover:bg-purple-700 transition duration-200 rounded-md py-2 w-full text-center cursor-pointer">
                Get Direction
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// компонент для кнопок с иконками
const ContactBadge = ({ icon, text }) => (
  <div className="flex items-center gap-2 border border-gray-700 rounded-full px-3 py-1 text-sm">
    {icon}
    <span>{text}</span>
  </div>
);
