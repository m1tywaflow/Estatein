import React from 'react';
import firsVilla from "/src/assets/firstVilla.png"
import secondVilla from "/src/assets/villa.png"
const OurStory = () => {
  return (
    <section className="bg-black text-yellow-600 px-6 py-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-yellow-600">Our Story</h2>
        <p className="text-lg text-purple-400 mb-10 leading-relaxed">
          Estatein was born from a vision: to redefine the way people discover, experience, and purchase luxury real estate.
          With a deep passion for architecture and an unwavering commitment to trust and transparency, we've spent years curating
          an exclusive collection of the most desirable villas and homes in the world’s most sought-after locations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-yellow-600">Built on Trust & Passion</h3>
            <p className="text-purple-400 leading-relaxed">
              We believe real estate is more than just property — it’s about lifestyle, legacy, and the feeling of belonging.
              Our team of dedicated professionals, with decades of industry experience, ensures every transaction is smooth,
              secure, and tailored to your needs.
            </p>
          </div>

          <img
            src={firsVilla}
            alt="Luxury Villa"
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
            src={secondVilla}
            alt="Our Vision"
            className="w-full h-auto rounded-2xl shadow-lg"
          />
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-yellow-600">A Vision for the Future</h3>
            <p className="text-purple-400 leading-relaxed">
              As technology evolves, so do we. Estatein combines digital innovation with personalized service, allowing clients to
              explore properties from anywhere in the world — without compromising on quality or experience. We're not just selling
              homes — we're shaping the future of luxury real estate.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h4 className="text-2xl font-bold mb-4">Welcome to Estatein</h4>
          <p className="text-lg text-purple-400 max-w-2xl mx-auto">
            Whether you're buying your first villa or expanding your portfolio, we’re here to guide you with clarity,
            confidence, and care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
