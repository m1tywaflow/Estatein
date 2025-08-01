import React from "react";

import banner from "/src/assets/textContainerProp.png";

export default function PropBanner() {
  return (
    <div
      className="relative w-full h-50 bg-center bg-cover bg-[#262626] text-white"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="px-20 py-12">
        <h1 className="text-lg md:text-3xl font-semibold">
          Get in Touch with Estatein
        </h1>
        <p className="pt-8 text-[#999999] w-300">
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
