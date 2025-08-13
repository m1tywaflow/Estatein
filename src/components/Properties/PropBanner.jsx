import React from "react";
import banner from "/src/assets/textContainerProp.png";

export default function PropBanner() {
  return (
    <div
      className="relative w-full bg-center bg-cover bg-black text-white"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="px-4 sm:px-8 md:px-16 lg:px-20 py-8 sm:py-12 md:py-16 max-w-5xl">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
          Find Your Dream Property
        </h1>
        <p className="pt-4 sm:pt-6 md:pt-8 text-sm sm:text-base text-[#999999] max-w-lg sm:max-w-2xl">
          Welcome to Estatein, where your dream property awaits in every corner
          of our beautiful world. Explore our curated selection of properties,
          each offering a unique story and a chance to redefine your life. With
          categories to suit every dreamer, your journey.
        </p>
      </div>
    </div>
  );
}
