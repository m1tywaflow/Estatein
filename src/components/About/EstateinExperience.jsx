// import React from "react";

// const steps = [
//   {
//     step: "Step 01",
//     title: "Discover a World of Possibilities",
//     description:
//       "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.",
//   },
//   {
//     step: "Step 02",
//     title: "Narrowing Down Your Choices",
//     description:
//       "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
//   },
//   {
//     step: "Step 03",
//     title: "Personalized Guidance",
//     description:
//       "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
//   },
//   {
//     step: "Step 04",
//     title: "See It for Yourself",
//     description:
//       "Arrange viewings of the properties you’re interested in. We’ll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
//   },
//   {
//     step: "Step 05",
//     title: "Making Informed Decisions",
//     description:
//       "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.",
//   },
//   {
//     step: "Step 06",
//     title: "Getting the Best Deal",
//     description:
//       "We’ll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
//   },
// ];

// const EstateinExperience = () => {
//   return (
//     <section className=" text-white px-6 py-16 md:px-20 lg:px-32">
//       <div className="mb-12 max-w-3xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4">
//           Navigating the Estatein Experience
//         </h2>
//         <p className="text-gray-400 text-sm md:text-base">
//           At Estatein, we've designed a straightforward process to help you find
//           and purchase your dream property with ease. Here's a step-by-step
//           guide to how it all works.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {steps.map((item, index) => (
//           <div
//             key={index}
//             className="relative border border-white/5 rounded-xl p-6 bg-[#0e0e0e] overflow-hidden"
//           >
//             <div className="absolute top-0 left-0 h-[2px] w-1/4 bg-gradient-to-r from-purple-500/80 to-transparent" />

//             <p className="text-xs text-gray-400 mb-3">{item.step}</p>
//             <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
//             <p className="text-sm text-gray-400">{item.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default EstateinExperience;
import React from "react";
import "./estatein.css"; // подключаем кастомные стили

const steps = [
  {
    step: "Step 01",
    title: "Discover a World of Possibilities",
    description:
      "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.",
  },
  {
    step: "Step 02",
    title: "Narrowing Down Your Choices",
    description:
      "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
  },
  {
    step: "Step 03",
    title: "Personalized Guidance",
    description:
      "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
  },
  {
    step: "Step 04",
    title: "See It for Yourself",
    description:
      "Arrange viewings of the properties you’re interested in. We’ll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
  },
  {
    step: "Step 05",
    title: "Making Informed Decisions",
    description:
      "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.",
  },
  {
    step: "Step 06",
    title: "Getting the Best Deal",
    description:
      "We’ll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
  },
];

const EstateinExperience = () => {
  return (
    <section className="bg-black text-white px-6 py-16 md:px-20 lg:px-32">
      <div className="mb-12 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Navigating the Estatein Experience
        </h2>
        <p className="text-gray-400 text-sm md:text-base">
          At Estatein, we've designed a straightforward process to help you find
          and purchase your dream property with ease. Here's a step-by-step
          guide to how it all works.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((item, index) => (
          <div key={index} className="card-wrapper">
            <div className="card-content">
              <div className="absolute top-0 left-0 h-[2px] w-1/4 bg-gradient-to-r from-purple-500/80 to-transparent" />
              <p className="text-xs text-gray-400 mb-3">{item.step}</p>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EstateinExperience;
