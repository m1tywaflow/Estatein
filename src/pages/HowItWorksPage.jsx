import React from "react";

const steps = [
  {
    title: "1. Sign Up & Set Goals",
    description:
      "Create your Estatein account and tell us about your investment objectives, risk tolerance, and preferred property types.",
    icon: "📝",
  },
  {
    title: "2. Get Personalized Strategy",
    description:
      "Our experts craft a tailored real estate investment plan, helping you choose the best opportunities based on your goals.",
    icon: "📈",
  },
  {
    title: "3. Make Your Investment",
    description:
      "Review recommended properties, perform due diligence, and invest directly through our secure platform in just a few clicks.",
    icon: "🏠",
  },
  {
    title: "4. Monitor & Grow",
    description:
      "Track performance, receive regular updates, and reinvest returns or expand your portfolio using our intelligent dashboard.",
    icon: "📊",
  },
];

const HowItWorksPage = () => {
  return (
    <div className="bg-black text-white min-h-screen py-20 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">How It Works</h1>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Estatein simplifies real estate investment with expert guidance and smart technology. Here’s how you can start building your future in just a few steps.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-left">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#111] p-6 rounded-lg border border-[#222] hover:border-purple-500 transition"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
