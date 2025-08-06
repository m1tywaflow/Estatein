import React from "react";
import CardSwitcher from "./CardSwitcher";
export default function DiscOfficeLoc() {
  return (
    <div className="bg-[#0a0a0a] py-10 px-4">
      <div className="px-20 py-20 text-center">
        <h1 className="text-5xl text-white mb-4">
          Discover Our Office Locations
        </h1>
        <p className="text-sm text-gray-400 max-w-5xl mx-auto pt-4">
          Estatein is here to serve you across multiple locations. Whether
          you're looking to meet our team, discuss real estate opportunities, or
          simply drop by for a chat, we have offices conveniently located to
          serve your needs. Explore the categories below to find the Estatein
          office nearest to you
        </p>
      </div>
      <div>
        <CardSwitcher/>
      </div>
    </div>
  );
}
