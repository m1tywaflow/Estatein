// import React from "react";
// import { Link } from "react-router-dom";
// import first from "/src/assets/tenant.png";
// import second from "/src/assets/maintenance.png";
// import third from "/src/assets/financial.png";
// import fourth from "/src/assets/legal.png";
// import cardBanner from "/src/assets/cardBanner.png";
// import marketIcon from "/src/assets/market.png";
// import roiIcon from "/src/assets/roi.png";
// import lightIcon from "/src/assets/light.png";
// import sunIcon from "/src/assets/legal.png";

// const cards = [
//   {
//     title: "Tenant Harmony",
//     text: "Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.",
//     icon: first,
//   },
//   {
//     title: "Maintenance Ease",
//     text: "Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.",
//     icon: second,
//   },
//   {
//     title: "Financial Peace of Mind",
//     text: "Managing property finances can be complex. Our financial experts take care of rent collection",
//     icon: third,
//   },
//   {
//     title: "Legal Guardian",
//     text: "Stay compliant with property laws and regulations effortlessly.",
//     icon: fourth,
//   },
// ];

// const effoCards = [
//   {
//     title: "Market Insight",
//     text: "Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions",
//     icon: marketIcon,
//   },
//   {
//     title: "ROI Assessment",
//     text: "Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments",
//     icon: roiIcon,
//   },
//   {
//     title: "Customized Strategies",
//     text: "Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs",
//     icon: lightIcon,
//   },
//   {
//     title: "Diversification Mastery",
//     text: "Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations",
//     icon: sunIcon,
//   },
// ];

// export default function EffortlessProp() {
//   return (
//     <div className="bg-[#0a0a0a] py-10 px-4">
//       <div className="px-20 py-20 text-center">
//         <h1 className="text-5xl text-white mb-4">
//           Effortless Property Management
//         </h1>
//         <p className="text-sm text-gray-400 max-w-5xl mx-auto pt-4">
//           Owning a property should be a pleasure, not a hassle. Estatein's
//           Property Management Service takes the stress out of property
//           ownership, offering comprehensive solutions tailored to your needs.
//           Explore the categories below to see how we can make property
//           management effortless for you
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8">
//         {cards.map((cards, index) => (
//           <div
//             key={index}
//             className="bg-[#111] text-white p-6 rounded-md border border-[#222] relative hover:border-purple-500 transition cursor-pointer"
//           >
//             <div>
//               <div className="flex items-center gap-2">
//                 <img
//                   src={cards.icon}
//                   alt={cards.title}
//                   className="w-14 h-14 object-contain pb-2"
//                 />
//                 <h3 className="text-lg font-semibold text-white mb-2">
//                   {cards.title}
//                 </h3>
//               </div>
//               <p className="text-[#999999]">{cards.text}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="relative mt-16 max-w-6xl mx-auto rounded-xl overflow-hidden">
//         <img
//           src={cardBanner}
//           alt="Card Banner"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0  bg-opacity-60 flex flex-col justify-center items-start px-10 py-12">
//           <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-white">
//             Experience Effortless Property Management
//           </h2>
//           <p className="text-[#999999] mb-6 max-w-lg">
//             Ready to experience hassle-free property management? Explore our
//             Property Management Service categories and let us handle the
//             complexities while you enjoy the benefits of property ownership.
//           </p>
//           <Link
//             to="/property-management"
//             className="bg-white text-black px-5 py-2 rounded-md font-medium hover:bg-purple-950 transition cursor-pointer"
//           >
//             Learn More
//           </Link>
//         </div>
//       </div>
//       <div className=" text-white px-6 lg:px-20 py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-8 items-stretch">
//           <div className="flex flex-col h-full rounded-md overflow-hidden shadow-lg border border-[#222]">
//             <div className="bg-gray-100 px-6 py-8 text-black flex-grow">
//               <h2 className="text-3xl font-bold leading-snug">
//                 Smart Investments,
//                 <br />
//                 Informed Decisions
//               </h2>
//               <p className="text-sm text-gray-500 mt-4">
//                 Building a real estate portfolio requires a strategic approach.
//                 Estatein's Investment Advisory Service empowers you to make
//                 smart investments and informed decisions.
//               </p>
//             </div>
//             <div
//               className="relative px-6 py-8"
//               style={{
//                 backgroundImage: `url(${cardBanner})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="relative z-10">
//                 <h3 className="text-xl font-semibold mb-2">
//                   Unlock Your Investment Potential
//                 </h3>
//                 <p className="text-sm text-gray-300 mb-6">
//                   Explore our Property Management Service categories and let us
//                   handle the complexities while you enjoy the benefits of
//                   property ownership.
//                 </p>
//                 <Link to="/valuation-mastery">
//                   <button className="w-full bg-transparent border border-purple-950 text-white py-2 rounded hover:bg-purple-950 transition cursor-pointer">
//                     Learn More
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {effoCards.map((card, index) => (
//               <div
//                 key={index}
//                 className="bg-[#111] p-6 rounded-md border border-[#222] hover:border-purple-500 transition cursor-pointer h-full flex flex-col justify-between"
//               >
//                 <div className="flex items-start gap-8 ">
//                   <img
//                     src={card.icon}
//                     alt={card.title}
//                     className="w-20 h-20 object-contain"
//                   />
//                   <h3 className="text-xl font-semibold mt-5">{card.title}</h3>
//                 </div>
//                 <p className="text-[#999999] text-sm">{card.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import { Link } from "react-router-dom";
import first from "/src/assets/tenant.png";
import second from "/src/assets/maintenance.png";
import third from "/src/assets/financial.png";
import fourth from "/src/assets/legal.png";
import cardBanner from "/src/assets/cardBanner.png";
import marketIcon from "/src/assets/market.png";
import roiIcon from "/src/assets/roi.png";
import lightIcon from "/src/assets/light.png";
import sunIcon from "/src/assets/legal.png";

const cards = [
  { title: "Tenant Harmony", text: "Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.", icon: first },
  { title: "Maintenance Ease", text: "Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.", icon: second },
  { title: "Financial Peace of Mind", text: "Managing property finances can be complex. Our financial experts take care of rent collection", icon: third },
  { title: "Legal Guardian", text: "Stay compliant with property laws and regulations effortlessly.", icon: fourth },
];

const effoCards = [
  { title: "Market Insight", text: "Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions", icon: marketIcon },
  { title: "ROI Assessment", text: "Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments", icon: roiIcon },
  { title: "Customized Strategies", text: "Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs", icon: lightIcon },
  { title: "Diversification Mastery", text: "Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations", icon: sunIcon },
];

export default function EffortlessProp() {
  return (
    <div className="bg-[#0a0a0a] py-10 px-4 sm:px-6 lg:px-8">
      {/* Заголовок */}
      <div className="px-4 sm:px-8 lg:px-20 py-10 sm:py-16 lg:py-20 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
          Effortless Property Management
        </h1>
        <p className="text-sm sm:text-base text-gray-400 max-w-5xl mx-auto pt-4">
          Owning a property should be a pleasure, not a hassle. Estatein's
          Property Management Service takes the stress out of property
          ownership, offering comprehensive solutions tailored to your needs.
          Explore the categories below to see how we can make property
          management effortless for you
        </p>
      </div>

      {/* Карточки */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-2 sm:px-6 lg:px-8">
        {cards.map((cards, index) => (
          <div
            key={index}
            className="bg-[#111] text-white p-6 rounded-md border border-[#222] relative hover:border-purple-500 transition cursor-pointer"
          >
            <div>
              <div className="flex items-center gap-2">
                <img
                  src={cards.icon}
                  alt={cards.title}
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain pb-2"
                />
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                  {cards.title}
                </h3>
              </div>
              <p className="text-[#999999] text-sm sm:text-base">{cards.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Баннер */}
      <div className="relative mt-12 sm:mt-16 max-w-6xl mx-auto rounded-xl overflow-hidden">
        <img
          src={cardBanner}
          alt="Card Banner"
          className="w-full h-56 sm:h-72 md:h-96 object-cover"
        />
        <div className="absolute inset-0  flex flex-col justify-center items-start px-6 sm:px-10 py-8 sm:py-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-white">
            Experience Effortless Property Management
          </h2>
          <p className="text-[#999999] mb-6 max-w-lg text-sm sm:text-base">
            Ready to experience hassle-free property management? Explore our
            Property Management Service categories and let us handle the
            complexities while you enjoy the benefits of property ownership.
          </p>
          <Link
            to="/property-management"
            className="bg-white text-black px-4 py-2 sm:px-5 sm:py-2 rounded-md font-medium hover:bg-purple-950 transition cursor-pointer"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Блок Smart Investments */}
      <div className=" text-white px-4 sm:px-8 lg:px-20 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-6 sm:gap-8 items-stretch">
          <div className="flex flex-col h-full rounded-md overflow-hidden shadow-lg border border-[#222]">
            <div className="bg-gray-100 px-6 py-8 text-black flex-grow">
              <h2 className="text-2xl sm:text-3xl font-bold leading-snug">
                Smart Investments,
                <br />
                Informed Decisions
              </h2>
              <p className="text-sm sm:text-base text-gray-500 mt-4">
                Building a real estate portfolio requires a strategic approach.
                Estatein's Investment Advisory Service empowers you to make
                smart investments and informed decisions.
              </p>
            </div>
            <div
              className="relative px-6 py-8"
              style={{
                backgroundImage: `url(${cardBanner})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Unlock Your Investment Potential
                </h3>
                <p className="text-sm text-gray-300 mb-6">
                  Explore our Property Management Service categories and let us
                  handle the complexities while you enjoy the benefits of
                  property ownership.
                </p>
                <Link to="/valuation-mastery">
                  <button className="w-full bg-transparent border border-purple-950 text-white py-2 rounded hover:bg-purple-950 transition cursor-pointer">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Карточки справа */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {effoCards.map((card, index) => (
              <div
                key={index}
                className="bg-[#111] p-6 rounded-md border border-[#222] hover:border-purple-500 transition cursor-pointer h-full flex flex-col justify-between"
              >
                <div className="flex items-start gap-6 sm:gap-8">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                  />
                  <h3 className="text-lg sm:text-xl font-semibold mt-2 sm:mt-5">
                    {card.title}
                  </h3>
                </div>
                <p className="text-[#999999] text-sm sm:text-base mt-4">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
