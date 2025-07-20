import React from "react";
import { Link } from "react-router-dom";
import propertiesInfo from "/src/data/PropertiesInfo";

const AllProperties = () => {
  return (
    <div className="min-h-screen px-30 bg-zinc-950  py-12">
      <h1 className="text-4xl text-white font-bold mb-10 text-center">
        All Properties
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {propertiesInfo.map((property) => (
          <div
            key={property.id}
            className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-700/30 transition-shadow"
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl text-white font-semibold mb-2">
                {property.title}
              </h2>
              <p className="text-sm text-gray-400 mb-4">{property.description}</p>
              <div className="text-gray-300 mb-2">
                <span>{property.beds} Beds</span> •{" "}
                <span>{property.baths} Baths</span>
              </div>
              <p className="text-purple-400 font-bold text-lg mb-4">
                {property.price}
              </p>
              <Link
                to={`/property/${property.id}`}
                className="inline-block px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProperties;
