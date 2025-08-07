import React from "react";
import firstImg from "/src/assets/contactImg/first.png";
import secondImg from "/src/assets/contactImg/second.png";
import thirdImg from "/src/assets/contactImg/third.png";
import fourthImg from "/src/assets/contactImg/fourth.png";
import fifthImg from "/src/assets/contactImg/fifth.png";
import sixthImg from "/src/assets/contactImg/sixth.png";
import bgImg from "/src/assets/contactImg/background.png";

export default function GallerySection() {
  return (
    <div
      className="relative w-full bg-cover bg-center text-white py-16 px-4 md:px-20"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          <img
            src={firstImg}
            alt="Office"
            className="rounded-lg object-cover h-full"
          />
          <img
            src={thirdImg}
            alt="Meeting"
            className="rounded-lg object-cover h-full"
          />
          <div className="pt-26">
            <div>
              <h2 className="text-2xl md:text-5xl font-semibold mb-4">
                Explore Estatein's World
              </h2>
              <p className="text-sm md:text-base text-gray-400 max-w-md">
                Step inside the world of Estatein, where professionalism meets
                warmth, and expertise meets passion. Our gallery offers a
                glimpse into our team and workspaces, inviting you to get to
                know us better.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <img
            src={secondImg}
            alt="Team"
            className="rounded-lg object-cover h-full"
          />
          <div className="grid grid-cols-2 gap-4">
            <img
              src={fourthImg}
              alt="Teamwork"
              className="rounded-lg object-cover w-full h-full"
            />
            <img
              src={fifthImg}
              alt="Business People"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <img
            src={sixthImg}
            alt="Handshake"
            className="rounded-lg object-cover mb-4 h-[60%]"
          />
        </div>
      </div>
    </div>
  );
}
