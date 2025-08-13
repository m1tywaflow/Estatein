import React from "react";
import banner from "/src/assets/textContainerProp.png";

export default function PropBanner() {
  return (
    <div
      className="relative w-full bg-center bg-cover bg-black text-white"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="px-4 sm:px-10 lg:px-20 py-8 sm:py-12">
        <h1 className="text-base sm:text-xl md:text-3xl font-semibold">
          Get in Touch with Estatein
        </h1>
        <p className="pt-4 sm:pt-6 text-[#999999] max-w-full sm:max-w-2xl text-sm sm:text-base">
          Welcome to Estatein's Contact Us page. We're here to assist you with
          any inquiries, requests, or feedback you may have. Whether you're
          looking to buy or sell a property, explore investment opportunities,
          or simply want to connect, we're just a message away. Reach out to us,
          and let's start a conversation.
        </p>
      </div>
    </div>
  );
}
