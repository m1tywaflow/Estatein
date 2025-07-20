import React from "react";

import banner from "/src/assets/textContainerProp.png";

export default function PropBanner() {
  return (
    <div
      className="relative w-full h-50 bg-center bg-cover bg-[#262626] text-white"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="px-20 py-12">
        <h1 className="text-lg md:text-3xl font-semibold">
          Find Your Dream Property
        </h1>
        <p className="pt-8 text-[#999999] w-300">
          Welcome to Estatein, where your dream property awaits in every corner
          of our beautiful world. Explore our curated selection of properties,
          each offering a unique story and a chance to redefine your life. With
          categories to suit every dreamer, your journey.
        </p>
      </div>
    </div>
  );
}
