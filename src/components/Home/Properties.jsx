import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import firstHouse from "/src/assets/firstVilla.png";
import secondHouse from "/src/assets/haven.png";
import thirdHouse from "/src/assets/cottage.png";
import fourthHouse from "/src/assets/villa.png";

const properties = [
  {
    image: firstHouse,
    title: "Seaside Serenity Villa",
    description:
      "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
    beds: 4,
    baths: 3,
    type: "Villa",
    price: "$650,000",
  },
  {
    image: secondHouse,
    title: "Metropolitan Haven",
    description:
      "A chic and fully-furnished 2-bedroom apartment with panoramic city views.",
    beds: 2,
    baths: 2,
    type: "Villa",
    price: "$550,000",
  },
  {
    image: thirdHouse,
    title: "Rustic Retreat Cottage",
    description:
      "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community.",
    beds: 3,
    baths: 3,
    type: "Villa",
    price: "$620,000",
  },
  {
    image: fourthHouse,
    title: "Seaside Serenity Villa",
    description:
      "A stunning 5-bedroom,  7-bathroom villa. Villa by SAOTA: glass facades, pool overlooking the Persian Gulf.",
    beds: 5,
    baths: 7,
    type: "Villa",
    price: "$760,000",
  },
];

export default function Properties() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[#0a0a0a] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between mb-8 items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Featured Properties</h1>
            <p className="text-gray-400 text-sm max-w-xl">
              Explore our handpicked selection of featured properties. Each
              listing offers a glimpse into exceptional homes and investments
              available through Estatein. Click "View Details" for more
              information.
            </p>
          </div>
          <button className="border border-gray-600 text-sm px-4 py-2 rounded hover:bg-white hover:text-black transition cursor-pointer">
            View All Properties
          </button>
        </div>

        <Slider {...settings}>
          {properties.map((prop, idx) => (
            <div key={idx} className="px-3">
              <div className="bg-[#111] border border-[#222] rounded-lg overflow-hidden shadow hover:shadow-purple-500/20 transition">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{prop.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {prop.description}{" "}
                    <span className="text-purple-500 hover:underline cursor-pointer">
                      Read More
                    </span>
                  </p>

                  <div className="flex gap-2 flex-wrap mt-4">
                    <span className="bg-black border border-gray-600 text-xs px-3 py-1 rounded-full">
                      {prop.beds}-Bedroom
                    </span>
                    <span className="bg-black border border-gray-600 text-xs px-3 py-1 rounded-full">
                      {prop.baths}-Bathroom
                    </span>
                    <span className="bg-black border border-gray-600 text-xs px-3 py-1 rounded-full">
                      {prop.type}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mt-5">
                    <div>
                      <p className="text-gray-400 text-sm">Price</p>
                      <p className="font-semibold text-white">{prop.price}</p>
                    </div>
                    <button className="bg-[#703BF7] hover:bg-purple-700 text-white text-sm px-4 py-2 rounded-xl cursor-pointer">
                      View Property Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
