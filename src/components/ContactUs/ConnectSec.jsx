import React from "react";
import {YupPreview} from "./YupPreview"
export default function ConnectSec() {
  return (
    <div className="bg-black px-20 py-20">
      <div className="pb-20">
        <h1 className="text-4xl text-white">Let's Connect</h1>
        <p className="text-[#999999] text-sm w-300 pt-4">
          We're excited to connect with you and learn more about your real
          estate goals. Use the form below to get in touch with Estatein.
          Whether you're a prospective client, partner, or simply curious about
          our services, we're here to answer your questions and provide the
          assistance you need.
        </p>
      </div>
      <div className=" border-gray-700 border-2 rounded-2xl p-6 md:p-10 shadow-lg">
        <YupPreview />
      </div>
    </div>
  );
}
