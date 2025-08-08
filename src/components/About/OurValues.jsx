// import React from "react";
// import star from "/src/assets/star.png";
// import excellence from "/src/assets/excellence.png";
// import client from "/src/assets/clientCentric.png";
// import teamFirst from "/src/assets/teamFirst.png";
// import teamSecond from "/src/assets/teamSecond.png";
// import teamThird from "/src/assets/teamThird.png";
// import teamFourth from "/src/assets/teamFourth.png";

// const OurValues = () => {
//   const values = [
//     {
//       title: "Trust",
//       description:
//         "Trust is the cornerstone of every successful real estate transaction.",
//       icon: star,
//     },
//     {
//       title: "Excellence",
//       description:
//         "We set the bar high for ourselves. From the properties we list to the services we provide.",
//       icon: excellence,
//     },
//     {
//       title: "Client-Centric",
//       description:
//         "Your dreams and needs are at the center of our universe. We listen, understand.",
//       icon: client,
//     },
//     {
//       title: "Our Commitment",
//       description:
//         "We are dedicated to providing you with the highest level of service, professionalism, and support.",
//       icon: star,
//     },
//   ];

//   return (
//     <div className=" text-white px-6 py-20 md:px-20 lg:px-32 flex gap-14">
//       <div className="mb-12 max-w-2xl py-20">
//         <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h1>
//         <p className="text-sm md:text-base text-[#999999] w-120">
//           Our story is one of continuous growth and evolution. We started as a
//           small team with big dreams, determined to create a real estate
//           platform that transcended the ordinary.
//         </p>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#141414] p-6 rounded-xl border border-gray-800">
//         {values.map((val, index) => (
//           <div
//             key={index}
//             className="flex items-start space-x-4 border-b border-gray-800 pb-4 last:border-b-0"
//           >
//             <img src={val.icon} alt={val.title} className="w-14 h-14 mt-1" />
//             <div>
//               <h3 className="text-lg font-semibold">{val.title}</h3>
//               <p className="text-sm text-gray-400">{val.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OurValues;
import React from "react";
import star from "/src/assets/star.png";
import excellence from "/src/assets/excellence.png";
import client from "/src/assets/clientCentric.png";

const OurValues = () => {
  const values = [
    {
      title: "Trust",
      description:
        "Trust is the cornerstone of every successful real estate transaction.",
      icon: star,
    },
    {
      title: "Excellence",
      description:
        "We set the bar high for ourselves. From the properties we list to the services we provide.",
      icon: excellence,
    },
    {
      title: "Client-Centric",
      description:
        "Your dreams and needs are at the center of our universe. We listen, understand.",
      icon: client,
    },
    {
      title: "Our Commitment",
      description:
        "We are dedicated to providing you with the highest level of service, professionalism, and support.",
      icon: star,
    },
  ];

  return (
    <div className="text-white px-4 sm:px-6 lg:px-20 py-16 flex flex-col lg:flex-row gap-10 lg:gap-14">
      {/* Левая часть */}
      <div className="max-w-xl flex-shrink-0">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Our Values</h1>
        <p className="text-sm sm:text-base text-[#999999]">
          Our story is one of continuous growth and evolution. We started as a
          small team with big dreams, determined to create a real estate
          platform that transcended the ordinary.
        </p>
      </div>

      {/* Правая часть */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#141414] p-6 rounded-xl border border-gray-800 w-full">
        {values.map((val, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 border-b border-gray-800 pb-4 last:border-b-0 sm:last:border-b border-gray-800"
          >
            <img src={val.icon} alt={val.title} className="w-12 h-12 mt-1" />
            <div>
              <h3 className="text-lg font-semibold">{val.title}</h3>
              <p className="text-sm text-gray-400">{val.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurValues;
