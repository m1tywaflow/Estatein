import React from "react";

export default function PricingDetails() {
  return (
    <section className="bg-black text-white py-10 px-6 md:px-16">
      <h2 className="text-3xl font-semibold mb-4">
        Comprehensive Pricing Details
      </h2>
      <p className="text-gray-400 mb-6 max-w-2xl">
        All expenses broken down for full transparency, showcasing costs and
        associated fees with your property investment. Below, we detail the
        pricing for Seaside Serenity Villa in Malibu, California.
      </p>

      <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-700 mb-8">
        <p className="text-sm text-gray-300">
          <strong>Note:</strong> The figures provided above are estimates and
          may vary depending on the property, location, and individual
          circumstances.
        </p>
      </div>

      {/* Listing Price */}
      <div className="mb-10">
        <p className="uppercase text-gray-400 text-sm">Listing Price</p>
        <h3 className="text-3xl font-bold mt-2">$1,250,000</h3>
      </div>

      {/* Additional Fees */}
      <SectionCard title="Additional Fees">
        <FeeRow
          label="Transfer Taxes / Title Fee"
          amount="$25,000"
          note="Estimated title & local gov-related regulations"
        />
        <FeeRow
          label="Legal Fees"
          amount="$3,000"
          note="Documentation and legal preparation, including third review"
        />
        <FeeRow
          label="Inspection Fees"
          amount="$600"
          note="Recommendation for due diligence"
        />
        <FeeRow
          label="Property Insurance"
          amount="$1,800"
          note="Essential cost for complete property insurance"
        />
        <FeeRow
          label="Mortgage Fees"
          amount="Varies"
          note="Negotiated costs with your lender for specific details"
        />
      </SectionCard>

      {/* Monthly Costs */}
      <SectionCard title="Monthly Costs">
        <FeeRow
          label="Property Taxes"
          amount="$1,500"
          note="Estimated taxes per property to be based on the area and rate"
        />
        <FeeRow
          label="Homeowner Association Fee"
          amount="$300"
          note="Monthly fee for common maintenance and security"
        />
      </SectionCard>

      {/* Total Initial Costs */}
      <SectionCard title="Total Initial Costs">
        <FeeRow label="Listing Price" amount="$1,250,000" />
        <FeeRow
          label="Add-Ons/Fees"
          amount="$27,700"
          note="Property transfer, legal fees, inspection, insurance"
        />
        <FeeRow label="Deposit Required" amount="$250,000" note="20%" />
        <FeeRow
          label="Mortgage Amount"
          amount="$1,000,000"
          note="If applicable"
        />
      </SectionCard>

      {/* Monthly Expenses */}
      <SectionCard title="Monthly Expenses">
        <FeeRow label="Property Taxes" amount="$1,500" />
        <FeeRow label="Homeowner Association Fee" amount="$300" />
        <FeeRow
          label="Mortgage Payment"
          amount="Varies based on terms and interest rate"
        />
        <FeeRow
          label="Property Insurance"
          amount="$150"
          note="Estimated monthly insurance fee"
        />
      </SectionCard>
    </section>
  );
}

function SectionCard({ title, children }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-xl font-semibold">{title}</h4>
        <a
          href="*"
          className="text-sm text-violet-400 hover:underline cursor-pointer"
        >
          Learn More
        </a>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}
function FeeRow({ label, amount, note }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-zinc-800 pb-2">
      <div>
        <p className="font-medium">{label}</p>
        {note && <p className="text-sm text-gray-400">{note}</p>}
      </div>
      <div className="text-lg font-semibold mt-2 sm:mt-0">{amount}</div>
    </div>
  );
}
