import React from "react";
import { FaBolt } from "react-icons/fa";

const features = [
  "Expansive oceanfront terrace for outdoor entertaining",
  "Gourmet kitchen with top-of-the-line appliances",
  "Private beach access for morning strolls and sunset views",
  "Master suite with a spa-inspired bathroom and ocean-facing balcony",
  "Private garage and ample storage space",
];

const AmenitiesList = () => {
  return (
    <div className="bg-zinc-950 text-white p-6 rounded-xl border-1 h-94">
      <h2 className="text-xl font-semibold mb-6">
        Key Features and Amenities
      </h2>
      <ul className="space-y-4">
        {features.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-4 border-l-2 border-[#703BF7] pl-4 py-2"
          >
            <FaBolt className="text-white mt-1 text-sm" />
            <span className="text-gray-300">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AmenitiesList;
