import React from "react";

const OurAchiev = () => {
  return (
    <div className="py-12 px-26 text-center ">
      <div>
        <h1 className="text-white text-4xl ">Our Achievements</h1>
        <p className="text-[#999999]">
          Our story is one of continuous growth and evolution. We started as a
          small team with big dreams, determined to create a real estate
          platform that transcended the ordinary.
        </p>
      </div>
      <div className="flex gap-40 pt-20  ">
        <div className="rounded-xl border border-gray-700 w-120 h-50">
          <h1 className="text-white pt-12 text-2xl">3+ Years of Excellence</h1>
          <p className="text-[#999999] pt-4">
            With over 3 years in the industry, we've amassed a wealth of
            knowledge and experience, becoming a go-to resource for all things
            real estate.
          </p>
        </div>
        <div className="rounded-xl border border-gray-700 w-120 h-50">
          <h1 className="text-white pt-12 text-2xl">Happy Clients</h1>
          <p className="text-[#999999] pt-4">
            Our greatest achievement is the satisfaction of our clients. Their
            success stories fuel our passion for what we do.
          </p>
        </div>
        <div className="rounded-xl border border-gray-700 w-120 h-50">
          <h1 className="text-white pt-12 text-2xl">Industry Recognition</h1>
          <p className="text-[#999999] pt-4 w-120">
            We've earned the respect of our peers and industry leaders, with
            accolades and awards that reflect our commitment to excellence.
          </p>
        </div>
      </div>
    </div>
  );
};
export default OurAchiev;
