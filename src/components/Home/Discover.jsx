import React, { useEffect, useRef } from "react";
import boxes from "/PROG/estatein/estatein-build/src/assets/boxes.jpg";
import CircleButton from "../CircleButton";
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
    <div className="flex justify-between bg-[#141414] text-white pl-30">
      <div className="space-x-2">
        <div className="max-w-100">
          <h1 className="text-6xl pt-44">
            Discover Your Dream Property with Estatein
          </h1>
          <p className="pt-10">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </p>
        </div>
        <div className=" flex gap-10 pt-10">
          <button className="bg-[#262626] w-30 h-12 rounded-xl cursor-pointer hover:bg-[#703BF7] transition duration-200">
            Lear More
          </button>
          <button className="bg-[#262626] w-40 h-12 rounded-xl cursor-pointer hover:bg-[#703BF7] transition duration-200">
            Browse Properties
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          <div className="bg-[#1A1A1A] p-6 rounded-xl text-center">
            <h4 className="text-2xl font-bold">
              <Counter target={350} />
            </h4>
            <p className="text-gray-400 mt-2">Happy Customers</p>
          </div>
          <div className="bg-[#1A1A1A] p-6 rounded-xl text-center">
            <h4 className="text-2xl font-bold">
              <Counter target={30} suffix="k+" />
            </h4>
            <p className="text-gray-400 mt-2">Properties For Clients</p>
          </div>
          <div className="bg-[#1A1A1A] p-6 rounded-xl text-center">
            <h4 className="text-2xl font-bold">
              <Counter target={16} />
            </h4>
            <p className="text-gray-400 mt-2">Years of Experience</p>
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
