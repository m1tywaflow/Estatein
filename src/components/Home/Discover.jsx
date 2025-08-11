import React, { useEffect, useRef } from "react";
import boxes from "/src/assets/boxes.jpg";
import CircleButton from "../CircleButton";
import { Link } from "react-router-dom";
const Counter = ({ target, suffix = "+", prefix = "", duration = 2000 }) => {
  const ref = useRef();

  useEffect(() => {
    let start = 0;
    let startTime = null;
    const el = ref.current;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const current = Math.min(
        Math.floor((progress / duration) * target),
        target
      );
      el.textContent = `${prefix}${current.toLocaleString()}${suffix}`;
      if (current < target) {
        requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver(
      ([entry], observerInstance) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(animate);
          observerInstance.unobserve(el);
        }
      },
      { threshold: 0.6 }
    );

    if (el) observer.observe(el);
  }, [target, duration, suffix, prefix]);

  return <span ref={ref}>0{suffix}</span>;
};
const Discover = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center bg-[#141414] text-white px-6 sm:px-10 lg:pl-30  gap-10">
      <div className="space-x-0 lg:space-x-2 max-w-full">
        <div className="max-w-full">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight pt-6 lg:pt-44">
            Discover Your Dream Property with Estatein
          </h1>
          <p className="pt-6 sm:pt-10 text-sm sm:text-base text-gray-300">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-10 pt-6 sm:pt-10">
          <Link to="/how-it-works" className="w-full sm:w-auto">
            <button className="bg-[#262626] w-full sm:w-30 h-12 rounded-xl cursor-pointer hover:bg-[#703BF7] transition duration-200">
              Learn More
            </button>
          </Link>
          <Link to="/properties" className="w-full sm:w-auto">
            <button className="bg-[#262626] w-full sm:w-40 h-12 rounded-xl cursor-pointer hover:bg-[#703BF7] transition duration-200">
              Browse Properties
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 sm:mt-12">
          <div className="bg-[#1A1A1A] p-6 rounded-xl text-center">
            <h4 className="text-xl sm:text-2xl font-bold">
              <Counter target={350} />
            </h4>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">
              Happy Customers
            </p>
          </div>
          <div className="bg-[#1A1A1A] p-6 rounded-xl text-center">
            <h4 className="text-xl sm:text-2xl font-bold">
              <Counter target={30} suffix="k+" />
            </h4>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">
              Properties For Clients
            </p>
          </div>
          <div className="bg-[#1A1A1A] p-6 rounded-xl text-center">
            <h4 className="text-xl sm:text-2xl font-bold">
              <Counter target={16} />
            </h4>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">
              Years of Experience
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <CircleButton />
      </div>
      <img src={boxes} alt="" />
    </div>
  );
};
export default Discover;
