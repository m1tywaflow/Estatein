import React, { useEffect, useRef } from "react";
import subContainer from "/src/assets/subContainer.png";

const Counter = ({ target, suffix = "+", prefix = "", duration = 2000 }) => {
  const ref = useRef();

  useEffect(() => {
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

const OurJourney = () => {
  return (
    <div className="bg-[#141414] text-white py-10 px-6 sm:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
              Our Journey
            </h1>
            <p className="pt-6 text-[#999999] text-sm sm:text-base">
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that transcended the ordinary. Over the years, we've
              expanded our reach, forged valuable partnerships, and gained the
              trust of countless clients.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="bg-[#1A1A1A] p-6 rounded-xl text-center">
              <h4 className="text-2xl font-bold">
                <Counter target={350} />
              </h4>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">
                Happy Customers
              </p>
            </div>
            <div className="bg-[#1A1A1A] p-6 rounded-xl text-center">
              <h4 className="text-2xl font-bold">
                <Counter target={30} suffix="k+" />
              </h4>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">
                Properties For Clients
              </p>
            </div>
            <div className="bg-[#1A1A1A] p-6 rounded-xl text-center">
              <h4 className="text-2xl font-bold">
                <Counter target={16} />
              </h4>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">
                Years of Experience
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            className="max-w-full h-auto rounded-xl"
            src={subContainer}
            alt="Our Journey"
          />
        </div>
      </div>
    </div>
  );
};

export default OurJourney;
