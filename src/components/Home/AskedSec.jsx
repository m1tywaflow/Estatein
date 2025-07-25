import React from "react";

const questions = [
  {
    questi: "How do I search for properties on Estatein?",
    ans: "Learn how to use our user-friendly search tools to find properties that match your criteria.",
  },
  {
    questi: "What documents do I need to sell my property through Estatein?",
    ans: "Find out about the necessary documentation for listing your property with us.",
  },
  {
    questi: "How can I contact an Estatein agent?",
    ans: "Discover the different ways you can get in touch with our experienced agents.",
  },
];

export default function AskedSec() {
  return (
    <div>
      <section className="bg-[#0a0a0a] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between mb-8 items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Frequently Asked Questions
              </h1>
              <p className="text-gray-400 text-sm max-w-xl">
                Find answers to common questions about Estatein's services,
                property listings, and the real estate process. We're here to
                provide clarity and assist you every step of the way.
              </p>
            </div>
          </div>
          <div className="space-y-4 flex gap-6">
            {questions.map((q, index) => (
              <div
                key={index}
                className="relative z-10 bg-[#111] border border-[#222] rounded-xl p-6 shadow hover:shadow-pink-300/40 transition max-h-40"
              >
                <h3 className="text-xl font-semibold mt-2 mb-3">{q.questi}</h3>
                <p className="text-gray-400 text-sm mb-4">{q.ans}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
