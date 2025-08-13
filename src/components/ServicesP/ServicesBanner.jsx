import React from "react";
import banner from "/src/assets/textContainerProp.png";

export default function ServicesBanner() {
  return (
    <div className="bg-black">
      <div
        className="relative w-full bg-center bg-cover text-white"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="px-4 sm:px-8 md:px-16 lg:px-20 py-8 sm:py-12 md:py-16 max-w-5xl">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
            Elevate Your Real Estate Experience
          </h1>
          <p className="pt-4 sm:pt-6 md:pt-8 text-sm sm:text-base text-[#999999] max-w-lg sm:max-w-2xl">
            Welcome to Estatein, where your real estate aspirations meet expert
            guidance. Explore our comprehensive range of services, each designed
            to cater to your unique needs and dreams.
          </p>
        </div>
      </div>
    </div>
  );
}
