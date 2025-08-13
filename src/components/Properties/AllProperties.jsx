import React from "react";
import { Link } from "react-router-dom";
import propertiesInfo from "/src/data/PropertiesInfo";

const AllProperties = () => {
  return (
    <div className="min-h-screen bg-zinc-950 py-8 px-4 sm:px-6 lg:px-12 xl:px-20">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold mb-8 sm:mb-10 text-center">
        All Properties
      </h1>

      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        {propertiesInfo.map((property) => (
          <div
            key={property.id}
            className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-700/30 transition-shadow flex flex-col"
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-48 sm:h-56 md:h-64 object-cover"
            />
            <div className="p-4 sm:p-5 flex flex-col flex-grow">
              <h2 className="text-lg sm:text-xl text-white font-semibold mb-2">
                {property.title}
              </h2>
              <p className="text-sm text-gray-400 mb-4 flex-grow">
                {property.description}
              </p>
              <div className="text-gray-300 mb-2 text-sm sm:text-base">
                <span>{property.beds} Beds</span> •{" "}
                <span>{property.baths} Baths</span>
              </div>
              <p className="text-purple-400 font-bold text-lg mb-4">
                {property.price}
              </p>
              <Link
                to={`/property/${property.id}`}
                className="inline-block px-3 py-2 sm:px-4 sm:py-2 bg-[#703BF7] text-white rounded-lg hover:bg-purple-700 transition text-sm sm:text-base text-center"
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
