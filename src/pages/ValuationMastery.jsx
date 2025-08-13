import React from "react";
import MyAreaBump from "../components/Valuation/MyAreaBump";
import ValuationFactorsChart from "../components/Valuation/ValuationFactorsChart";
import ValuationTrendChart from "../components/Valuation/ValuationTrendChart";
const ValuationMastery = () => {
  return (
    <section className="bg-gray-900  px-6 py-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-yellow-600">
          Valuation Mastery
        </h2>
        <p className="text-lg text-gray-300 mb-10 leading-relaxed">
          At Estatein, property valuation is not guesswork — it’s a refined
          process based on data, experience, and insight. Our valuation strategy
          empowers buyers, sellers, and investors with clarity and confidence in
          every transaction.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-yellow-600">
              How We Value Property
            </h3>
            <ul className="space-y-4 text-gray-300 list-disc list-inside">
              <li>
                <strong>Comparative Market Analysis (CMA):</strong> We assess
                similar properties in the same area to understand the current
                market landscape.
              </li>
              <li>
                <strong>Location & Lifestyle Index:</strong> Proximity to key
                landmarks, schools, beaches, or business hubs impacts value
                significantly.
              </li>
              <li>
                <strong>Architectural & Build Quality:</strong> We evaluate
                materials, design, and condition to gauge long-term value.
              </li>
              <li>
                <strong>Revenue Potential:</strong> For investment properties,
                we assess rental income and ROI projections.
              </li>
            </ul>
          </div>

          <ValuationFactorsChart />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ValuationTrendChart />
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-yellow-600">
              Data-Driven. Human-Verified.
            </h3>
            <p className="text-gray-300 leading-relaxed">
              We combine AI-powered analytics with on-site expert reviews to
              ensure each valuation reflects true market dynamics. Our
              proprietary tools allow clients to visualize value trends, assess
              risk, and make strategic decisions with ease.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h4 className="text-2xl font-bold mb-4 text-yellow-600">
            Empower Your Real Estate Journey
          </h4>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Whether you’re buying, selling, or just exploring — our valuation
            expertise ensures you know the real worth of every property.
          </p>
        </div>
      </div>
      <MyAreaBump />
    </section>
  );
};

export default ValuationMastery;
