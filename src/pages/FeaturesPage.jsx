import React from "react";

const features = [
  {
    title: "Real Estate Investment Advisory",
    description:
      "Get personalized investment guidance based on your goals and risk profile. Our experts help you build a solid property portfolio.",
    icon: "🏢",
  },
  {
    title: "Property Management Services",
    description:
      "Let us handle the day-to-day operations of your properties — from tenant support to maintenance scheduling.",
    icon: "🛠️",
  },
  {
    title: "Portfolio Analytics Dashboard",
    description:
      "Gain full visibility into your property performance, returns, and metrics through a clean, interactive dashboard.",
    icon: "📊",
  },
  {
    title: "Diversification Opportunities",
    description:
      "Minimize risks by investing across different real estate sectors and geographies — all in one platform.",
    icon: "🌐",
  },
  {
    title: "Secure Document Vault",
    description:
      "Store and manage all your real estate documents in one encrypted, secure location with 24/7 access.",
    icon: "🔐",
  },
  {
    title: "Expert Legal & Tax Assistance",
    description:
      "Get expert advice on legal structure, tax optimization, and compliance when investing in property.",
    icon: "⚖️",
  },
];

const FeaturesPage = () => {
  return (
    <div className="bg-black text-white min-h-screen py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Our Features</h1>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Discover the powerful tools and services Estatein offers to help you
          build, manage, and grow your real estate investments with confidence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#111] p-6 rounded-lg border border-[#222] hover:border-purple-500 transition duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
