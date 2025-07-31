import React from "react";
import ValuationFactorsChart from "/src/components/Valuation/ValuationFactorsChart"; // если хочешь вставить график
import ValuationTrendChart from "/src/components/Valuation/ValuationTrendChart"; // по желанию

const PropertyManagement = () => {
  return (
    <section className="bg-white text-gray-900 px-6 py-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">
          Property Management
        </h2>
        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          At Estatein, we don’t just help you buy premium properties — we help
          you protect and grow their value. Our full-service property management
          ensures your investment performs at its best, with zero stress on your
          part.
        </p>

        {/* Section: Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold mb-4">What We Handle</h3>
            <ul className="space-y-4 text-gray-700 list-disc list-inside">
              <li>
                <strong>Tenant Screening & Leasing:</strong> We find reliable
                tenants and manage contracts end-to-end.
              </li>
              <li>
                <strong>24/7 Maintenance:</strong> Rapid response for repairs,
                upkeep, and emergency issues.
              </li>
              <li>
                <strong>Financial Management:</strong> Transparent reporting,
                rent collection, and tax-ready documentation.
              </li>
              <li>
                <strong>Luxury Care:</strong> Landscaping, pool care, security,
                and concierge-level services for high-end estates.
              </li>
            </ul>
          </div>

          <ValuationFactorsChart/>
        </div>

        {/* Section: Performance Chart */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ValuationTrendChart />
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Performance You Can Track
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our real-time dashboards show occupancy rates, income, and
              expenses — empowering you with data to make smart decisions. With
              predictive analytics, you’ll always be one step ahead of market
              trends and tenant behavior.
            </p>
          </div>
        </div>

        {/* Section: Why Estatein */}
        <div className="mt-20 text-center">
          <h4 className="text-2xl font-bold mb-4">Why Estatein Management?</h4>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Whether you own a single luxury villa or a global real estate
            portfolio, our team ensures everything runs smoothly — profitably
            and professionally.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h5 className="text-lg font-semibold mb-2">Maximized ROI</h5>
              <p className="text-gray-600 text-sm">
                Strategic pricing, minimal vacancy, and proactive maintenance.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h5 className="text-lg font-semibold mb-2">Dedicated Managers</h5>
              <p className="text-gray-600 text-sm">
                Personal property manager assigned to every estate.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h5 className="text-lg font-semibold mb-2">Global Reach</h5>
              <p className="text-gray-600 text-sm">
                Multi-country support for cross-border ownership.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h5 className="text-lg font-semibold mb-2">Peace of Mind</h5>
              <p className="text-gray-600 text-sm">
                You relax. We handle everything.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyManagement;
