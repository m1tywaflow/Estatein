import React, { useEffect, useState } from "react";
import firstPerson from "/src/assets/firstPerson.png";
import secondPerson from "/src/assets/secondPerson.png";
import thirdPerson from "/src/assets/thirdPerson.png";

const comments = [
  {
    rating: "Best",
    main: "Exceptional Service!",
    detailed:
      "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    image: firstPerson,
    name: "Wade Warren",
    country: "USA, California",
  },
  {
    rating: "Amazing",
    main: "Loved every step!",
    detailed:
      "From start to finish, the team was professional and friendly. We found exactly what we wanted. Would definitely recommend.",
    image: secondPerson,
    name: "Jenny Wilson",
    country: "Canada, Toronto",
  },
  {
    rating: "Perfect",
    main: "Incredible Results!",
    detailed:
      "They truly care about your needs. We were guided through everything with patience. Our dream home is now reality!",
    image: thirdPerson,
    name: "Ronald Richards",
    country: "UK, London",
  },
  {
    rating: "Helpful",
    main: "Stress-free Process!",
    detailed:
      "We didn’t expect the process to be this smooth. Kudos to the Estatein team for their transparency and care!They truly care about your needs.",
    image: firstPerson,
    name: "Courtney Henry",
    country: "Australia, Sydney",
  },
];

export default function Comments() {
  const [startIndex, setStartIndex] = useState(0);
  const [fade, setFade] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setStartIndex((prevIndex) => (prevIndex + 3) % comments.length);
        setFade(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const visibleComments = comments
    .slice(startIndex, startIndex + 3)
    .concat(comments.slice(0, Math.max(0, startIndex + 3 - comments.length)));

  return (
    <section className="bg-[#0a0a0a] text-white py-16 px-6 transition-all duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between mb-8 items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">What Our Clients Say</h1>
            <p className="text-gray-400 text-sm max-w-xl">
              Read the success stories and heartfelt testimonials from our
              valued clients. Discover why they chose Estatein for their real
              estate needs.
            </p>
          </div>
        </div>

        {/*  fade */}
        <div
          key={startIndex}
          className={`transition-opacity duration-700 ease-in-out ${
            fade ? "opacity-100" : "opacity-0"
          } grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}
        >
          {visibleComments.map((comment, idx) => (
            <div key={idx} className="relative group">
              {/* like a fire-hover idk) */}
              <div className="absolute -inset-1 rounded-xl bg-[radial-gradient(circle,#ff6a00,transparent)] blur-lg opacity-30 animate-flame z-0 transition-all duration-500 group-hover:opacity-50"></div>

              <div className="relative z-10 bg-[#111] border border-[#222] rounded-xl p-6 shadow hover:shadow-orange-500/20 transition">
                <span className="text-sm text-orange-400 font-medium uppercase">
                  {comment.rating}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-3">
                  {comment.main}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{comment.detailed}</p>
                <div className="flex items-center gap-4 mt-6">
                  <img
                    src={comment.image}
                    alt={comment.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-white">{comment.name}</p>
                    <p className="text-gray-500 text-sm">{comment.country}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
