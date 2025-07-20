import React from "react";
import { useParams, Link } from "react-router-dom";
import propertiesInfo from "/src/data/PropertiesInfo";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute z-10 left-4 top-1/2 -translate-y-1/2 bg-zinc-800/70 text-white rounded-full p-2 hover:bg-purple-600 transition"
  >
    <FaArrowLeft />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute z-10 right-4 top-1/2 -translate-y-1/2 bg-zinc-800/70 text-white rounded-full p-2 hover:bg-purple-600 transition"
  >
    <FaArrowRight />
  </button>
);

const PropertyDetails = () => {
  const { id } = useParams();
  const property = propertiesInfo.find((p) => p.id === parseInt(id));

  if (!property) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <p className="text-2xl">Property not found</p>
      </div>
    );
  }

  const gallery = property.gallery || [];

  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <Link
          to="/properties"
          className="text-purple-400 hover:underline mb-6 inline-block"
        >
          ← Back to all properties
        </Link>

        <h1 className="text-4xl font-bold mb-2">{property.title}</h1>
        <p className="text-gray-400 text-lg mb-4">{property.description}</p>

        {/* Галерея */}
        <div className="relative rounded-2xl overflow-hidden">
          {gallery.length > 0 ? (
            <Slider {...sliderSettings}>
              {gallery.map((img, idx) => (
                <div key={idx}>
                  <img
                    src={img}
                    alt={`Slide ${idx + 1}`}
                    className="object-cover w-full h-[26rem] sm:h-[32rem]"
                  />
                </div>
              ))}
            </Slider>
          ) : (
            <img
              src={property.image}
              alt={property.title}
              className="rounded-2xl object-cover w-full h-[32rem]"
            />
          )}
        </div>

        {/* Информация */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6 text-sm text-gray-300">
          <div>
            <span className="font-semibold text-white">Price:</span>
            {property.price}
          </div>
          <div>
            <span className="font-semibold text-white">Per night:</span> $
            {property.pricePerNight}
          </div>
          <div>
            <span className="font-semibold text-white">Beds:</span>
            {property.beds}
          </div>
          <div>
            <span className="font-semibold text-white">Baths:</span>
            {property.baths}
          </div>
        </div>

        <p className="mb-8 text-gray-300">{property.fullDescription}</p>
      </div>
    </div>
  );
};

export default PropertyDetails;
