import React from "react";
import { Link } from "react-router-dom";
const clients = [
  {
    name: "ABC Corporation",
    since: "Since 2019",
    domain: "Commercial Real Estate",
    category: "Luxury Home Development",
    testimonial:
      "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
  },
  {
    name: "GreenTech Enterprises",
    since: "Since 2018",
    domain: "Commercial Real Estate",
    category: "Retail Space",
    testimonial:
      "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
  },
];

const ValuedClients = () => {
  return (
    <section className="bg-black text-white py-30 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold mb-4">Our Valued Clients</h2>
        <p className="text-gray-400 mb-12 max-w-3xl">
          At Estatein, we have had the privilege of working with a diverse range
          of clients across various industries. Here are some of the clients
          we've had the pleasure of serving.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-2xl p-6 bg-gray-950 hover:border-gray-700 transition-all"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-400">{client.since}</span>
                <Link
                  to="/*"
                  className="text-sm text-white bg-gray-800 hover:bg-gray-700 px-4 py-1 rounded"
                >
                  Visit Website
                </Link>
              </div>
              <h3 className="text-xl font-semibold mb-4">{client.name}</h3>
              <div className="flex justify-between text-sm text-gray-400 mb-4">
                <div>
                  <span className="block">🏢 Domain</span>
                  <span className="text-white">{client.domain}</span>
                </div>
                <div>
                  <span className="block">⚡ Category</span>
                  <span className="text-white">{client.category}</span>
                </div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg text-sm">
                <span className="block mb-2">🗣️ What They Said</span>
                <p className="text-white">{client.testimonial}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuedClients;
