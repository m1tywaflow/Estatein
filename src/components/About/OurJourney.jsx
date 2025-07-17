import React, { useEffect, useRef } from "react";
import subContainer from "/src/assets/subContainer.png";

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

const OurJourney = () => {
  return (
    <div>
      <div className="flex bg-[#141414] text-white pt-20 pl-30 gap-60">
        <div className="space-x-2">
          <div className="max-w-140 pt-14">
            <h1 className="text-6xl">Our Journey</h1>
            <p className="pt-10 text-[#999999]">
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that transcended the ordinary. Over the years, we've
              expanded our reach, forged valuable partnerships, and gained the
              trust of countless clients.
            </p>
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
        <img className="" src={subContainer} alt="" />
      </div>
    </div>
  );
};
export default OurJourney;
