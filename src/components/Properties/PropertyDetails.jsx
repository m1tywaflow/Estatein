import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import propertiesInfo from "/src/data/PropertiesInfo";
import { FaArrowRight, FaArrowLeft, FaBath } from "react-icons/fa";
import { LiaBedSolid } from "react-icons/lia";
import { MdOutlinePriceCheck } from "react-icons/md";
import Modal from "react-modal";
import AmenitiesList from "./AmenitiesList";
import InquiryForm from "./InquiryForm";
import PricingDetails from "./PricingDetails";
import AskedSec from "../Home/AskedSec";
import CTAsec from "../Home/CTAsec";

Modal.setAppElement("#root");

const PropertyDetails = () => {
  const { id } = useParams();
  const property = propertiesInfo.find((p) => p.id === parseInt(id));

  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomImage, setZoomImage] = useState("");

  if (!property) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <p className="text-2xl">Property not found</p>
      </div>
    );
  }

  const gallery = property.gallery || [];

  const openZoom = (img) => {
    setZoomImage(img);
    setIsModalOpen(true);
  };

  const closeZoom = () => {
    setIsModalOpen(false);
    setZoomImage("");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <Link
          to="/properties"
          className="text-purple-400 hover:underline mb-6 inline-block"
        >
          ← Back to all properties
        </Link>

        <h1 className="text-4xl font-bold mb-2">{property.title}</h1>
        <p className="text-gray-400 text-lg mb-4">{property.description}</p>
        <div className="mb-10">
          <div className="flex gap-2 mb-4 overflow-x-auto">
            {gallery.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx}`}
                onClick={() => setActiveIndex(idx)}
                className={`w-20 h-14 object-cover rounded-md cursor-pointer border ${
                  idx === activeIndex ? "border-purple-500" : "border-zinc-700"
                }`}
              />
            ))}
          </div>
          <div className="relative overflow-hidden rounded-2xl h-80 sm:h-[26rem] mb-6">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-0.5"
              style={{ transform: `translateX(-${activeIndex * 50}%)` }}
            >
              {gallery.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Slide ${idx}`}
                  onClick={() => openZoom(img)}
                  className="w-1/2 h-80 sm:h-[26rem] object-cover cursor-zoom-in"
                />
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center mt-4 gap-6">
            <button
              onClick={() =>
                setActiveIndex((prev) =>
                  prev > 0 ? prev - 1 : gallery.length - 2
                )
              }
              className="hover:scale-110 transition"
            >
              <FaArrowLeft />
            </button>
            <div className="flex gap-2">
              {gallery.slice(0, gallery.length - 1).map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i === activeIndex ? "bg-white" : "bg-zinc-600"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() =>
                setActiveIndex((prev) =>
                  prev < gallery.length - 2 ? prev + 1 : 0
                )
              }
              className="hover:scale-110 transition"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="flex gap-20 pt-20 h-114 ">
          <div className="bg-black  border-1 text-white rounded-xl p-6 max-w-xl shadow-lg">
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <p className="mb-8 text-gray-300">{property.fullDescription}</p>
            <div className="border-t border-zinc-700 pt-4 flex text-sm text-zinc-400">
              {/* Bedrooms */}
              <div className="flex-1 flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <LiaBedSolid className="text-lg" />
                  <span>Bedrooms</span>
                </div>
                <div className="text-xl">{property.beds}</div>
              </div>
              <div className="flex-1 flex flex-col items-center gap-1 border-l border-zinc-700">
                <div className="flex items-center gap-2">
                  <FaBath className="text-lg" />
                  <span>Bathrooms</span>
                </div>
                <div className="text-xl">{property.baths}</div>
              </div>
              <div className="flex-1 flex flex-col items-center gap-1 border-l border-zinc-700">
                <div className="flex items-center gap-2">
                  <MdOutlinePriceCheck className="text-lg" />
                  <span>Price</span>
                </div>
                <div className="text-green-500 text-xl font-semibold">
                  {property.price}
                </div>
              </div>
            </div>
          </div>
          <div>
            <AmenitiesList />
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeZoom}
        className="fixed inset-0 flex items-center justify-center bg-black/80 z-50"
        overlayClassName="overlay"
      >
        <div className="relative max-w-5xl w-full px-4">
          <button
            onClick={closeZoom}
            className="absolute top-4 right-4 text-white bg-zinc-700 rounded-full p-2 hover:bg-red-600 transition"
          >
            ✕
          </button>
          <img
            src={zoomImage}
            alt="Zoomed"
            className="w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      </Modal>
      <InquiryForm />
      <PricingDetails />
      <AskedSec />
      <CTAsec />
    </div>
  );
};

export default PropertyDetails;
