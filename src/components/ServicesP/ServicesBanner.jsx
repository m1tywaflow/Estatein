import React from "react";
import banner from "/src/assets/textContainerProp.png";

export default function ServicesBanner() {
  return (
    <div>
      <div
        className="relative w-full h-50 bg-center bg-cover bg-[#262626] text-white"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="px-20 py-12">
          <h1 className="text-lg md:text-3xl font-semibold">
            Elevate Your Real Estate Experience
          </h1>
          <p className="pt-8 text-[#999999] w-300">
            Welcome to Estatein, where your real estate aspirations meet expert
            guidance. Explore our comprehensive range of services, each designed
            to cater to your unique needs and dreams.
          </p>
        </div>
      </div>
    </div>
  );
}
