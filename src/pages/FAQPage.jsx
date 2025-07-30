import React, { useState } from "react";
const faqs = [
  {
    question: "What services does Estatein offer?",
    answer:
      "Estatein provides a range of real estate services, including investment advisory, property management, and portfolio diversification solutions.",
  },
  {
    question: "How can I start investing with Estatein?",
    answer:
      "You can get started by contacting our advisory team or signing up through our platform. We'll help you create a tailored investment strategy.",
  },
  {
    question: "Is there a minimum investment amount?",
    answer:
      "Yes, the minimum investment amount varies depending on the service. Please contact us for more detailed information.",
  },
  {
    question: "Can I manage multiple properties through Estatein?",
    answer:
      "Absolutely. Our platform supports managing multiple properties and gives you full visibility over your real estate portfolio.",
  },
  {
    question: "How secure is Estatein's platform?",
    answer:
      "Our platform uses bank-level encryption and regular security audits to ensure your data and investments are safe.",
  },
  {
    question: "Do I need prior real estate experience?",
    answer:
      "Not at all. Estatein is built for both seasoned investors and newcomers. Our advisors guide you every step of the way.",
  },
  {
    question: "Can I access Estatein services internationally?",
    answer:
      "Yes, Estatein is accessible to international investors. Some services may vary by country due to legal restrictions.",
  },
  {
    question: "What support options are available?",
    answer:
      "We offer 24/7 customer support via chat, email, and phone. Our advisors are also available for scheduled consultations.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black min-h-screen text-white py-20 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-400 mb-12">
          Here are some of the most common questions we get. Can’t find your
          answer? Reach out to our support team.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-800 transition"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-500 ${
                  openIndex === index
                    ? "max-h-40 opacity-100 py-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-400 text-sm">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
