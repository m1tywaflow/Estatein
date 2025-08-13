import React from "react";
import { YupPreview } from "./YupPreview";

export default function ConnectSec() {
  return (
    <div className="relative bg-black overflow-hidden px-4 sm:px-6 md:px-20 py-12 md:py-20">
      {/* pisma */}
      <div className="absolute inset-0 pointer-events-none">
        {/* left side */}
        <EnvelopeIcon className="absolute top-4 left-2 sm:left-4 w-10 sm:w-16 h-10 sm:h-16 text-white rotate-0" />
        <EnvelopeIcon className="absolute top-20 sm:top-28 left-6 sm:left-12 w-14 sm:w-24 h-14 sm:h-24 text-white rotate-12" />
        <EnvelopeIcon className="hidden sm:block absolute top-44 sm:top-56 left-1 sm:left-2 w-12 sm:w-20 h-12 sm:h-20 text-white -rotate-6" />

        {/* right side */}
        <EnvelopeIcon className="absolute top-6 sm:top-8 right-2 sm:right-4 w-12 sm:w-20 h-12 sm:h-20 text-white rotate-12" />
        <EnvelopeIcon className="hidden sm:block absolute top-40 sm:top-48 right-6 sm:right-16 w-10 sm:w-16 h-10 sm:h-16 text-white rotate-8" />

        {/* center+right */}
        <EnvelopeIcon className="hidden sm:block absolute bottom-48 sm:bottom-[200px] right-8 sm:right-24 w-12 sm:w-20 h-12 sm:h-20 text-white rotate-6" />
      </div>

      <div className="px-4 sm:px-6 md:px-20 py-12 md:py-20 text-center relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4">
          Let's Connect
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-5xl mx-auto pt-4">
          We're excited to connect with you and learn more about your real
          estate goals. Use the form below to get in touch with Estatein.
          Whether you're a prospective client, partner, or simply curious about
          our services, we're here to answer your questions and provide the
          assistance you need.
        </p>
      </div>

      {/* glow border gradik */}
      <div className="relative group">
        {/* obvodka gradik */}
        <div
          className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 
                     blur-md opacity-80 transition-all duration-500 group-hover:blur-lg group-hover:opacity-100"
        ></div>

        {/* main container */}
        <div className="relative rounded-2xl p-4 sm:p-6 md:p-10 bg-black border border-gray-800 z-10">
          <YupPreview />
        </div>
      </div>
    </div>
  );
}

// svg icon pisma
const EnvelopeIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
    <polyline points="2,4 12,13 22,4" />
  </svg>
);
