// import React from "react";

// import firstHouse from "/src/assets/firstVilla.png";
// import secondHouse from "/src/assets/haven.png";
// import thirdHouse from "/src/assets/cottage.png";
// import fourthHouse from "/src/assets/villa.png";
// import fifthHouse from "/src/assets/fontespina1.jpg";
// import sixthHouse from "/src/assets/villas/1_View00.png";
// import fVilla1 from "/src/assets/villas/1_View00.png";
// import fVilla2 from "/src/assets/villas/1_View02.jpg.png";
// import fVilla3 from "/src/assets/villas/1_View03.png";
// import fVilla4 from "/src/assets/villas/1_View04.png";
// import fVilla5 from "/src/assets/villas/1_View05.png";
// import fVilla6 from "/src/assets/villas/1_View06.png";
// import fVilla7 from "/src/assets/villas/1_View07.png";
// import fVilla8 from "/src/assets/villas/1_View08.png";
// import fVilla9 from "/src/assets/villas/1_View09.png";
// import fVilla10 from "/src/assets/villas/1_View10.png";
// import fVilla11 from "/src/assets/villas/1_View11.png";

// const propertiesInfo = [
//   {
//     image: firstHouse,
//     title: "Seaside Serenity Villa",
//     description:
//       "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
//     beds: 4,
//     baths: 3,
//     type: "Villa",
//     price: "$650,000",
//   },
//   {
//     image: secondHouse,
//     title: "Metropolitan Haven",
//     description:
//       "A chic and fully-furnished 2-bedroom apartment with panoramic city views.",
//     beds: 2,
//     baths: 2,
//     type: "Villa",
//     price: "$550,000",
//   },
//   {
//     image: thirdHouse,
//     title: "Rustic Retreat Cottage",
//     description:
//       "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community.",
//     beds: 3,
//     baths: 3,
//     type: "Villa",
//     price: "$620,000",
//   },
//   {
//     image: fourthHouse,
//     title: "Seaside Serenity Villa",
//     description:
//       "A stunning 5-bedroom,  7-bathroom villa. Villa by SAOTA: glass facades, pool overlooking the Persian Gulf.",
//     beds: 5,
//     baths: 7,
//     type: "Villa",
//     price: "$760,000",
//   },
//   {
//     image: fifthHouse,
//     title: "FONTESPINA 6",
//     description:
//       "Fontespina,stands on the hill overlooking the Riviera delle Palme of San Benedetto del Tronto.",
//     beds: 3,
//     baths: 3,
//     type: "Villa",
//     price: "$220,000",
//   },
//   {
//     image: sixthHouse,
//     title: "Laguna Apartments",
//     description:
//       "Good location, close to shops and restaurants, good view, 4 minutes to the beach.",
//     beds: 1,
//     baths: 1,
//     type: "Apartments",
//     price: "$210,000",
//   },
// ];
// export default propertiesInfo;
import firstHouse from "/src/assets/firstVilla.png";
import secondHouse from "/src/assets/haven.png";
import thirdHouse from "/src/assets/cottage.png";
import fourthHouse from "/src/assets/villa.png";
import fifthHouse from "/src/assets/fontespina1.jpg";
import sixthHouse from "/src/assets/villas/1_View00.png";

import fifthVilla1 from "/src/assets/villas/1_View00.png";
import fifthVilla2 from "/src/assets/villas/1_View02.jpg.png";
import fifthVilla3 from "/src/assets/villas/1_View03.png";
import fifthVilla6 from "/src/assets/villas/1_View06.png";
import fifthVilla7 from "/src/assets/villas/1_View07.png";
import fifthVilla8 from "/src/assets/villas/1_View08.png";
import fifthVilla9 from "/src/assets/villas/1_View09.png";
import fifthVilla10 from "/src/assets/villas/1_View10.png";
import fifthVilla11 from "/src/assets/villas/1_View11.png";

const propertiesInfo = [
  {
    id: 1,
    image: firstHouse,
    title: "Seaside Serenity Villa",
    description:
      "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
    fullDescription:
      "Seaside Serenity Villa offers the perfect blend of luxury and tranquility. Nestled in a quiet suburban neighborhood just minutes from the coast, this spacious 4-bedroom, 3-bathroom retreat features modern interiors, large sunlit windows, and an open-concept living area. Enjoy relaxing afternoons by the private garden, entertain guests on the patio, or unwind in the spa-inspired bathrooms. Ideal for families or small groups seeking comfort, privacy, and easy access to the beach.",
    beds: 4,
    baths: 3,
    type: "Villa",
    price: "$650,000",
    pricePerNight: 420,
  },
  {
    id: 2,
    image: secondHouse,
    title: "Metropolitan Haven",
    description:
      "A chic and fully-furnished 2-bedroom apartment with panoramic city views.",
    fullDescription:
      "Metropolitan Haven is a sleek and modern 2-bedroom, 2-bathroom apartment located in the heart of the city. With floor-to-ceiling windows offering breathtaking skyline views, this fully-furnished residence features a minimalist design, smart home technology, and high-end finishes throughout. Ideal for professionals or couples, it provides convenient access to business districts, fine dining, shopping, and nightlife — all within walking distance.",
    beds: 2,
    baths: 2,
    type: "Apartment",
    price: "$550,000",
    pricePerNight: 350,
  },
  {
    id: 3,
    image: thirdHouse,
    title: "Rustic Retreat Cottage",
    description:
      "An elegant 3-bedroom, 2.5-bathroom cottage nestled in nature.",
    fullDescription:
      "Rustic Retreat Cottage is a charming 3-bedroom, 2.5-bathroom home that blends countryside warmth with modern comfort. Tucked away in a peaceful gated community, the cottage features exposed wooden beams, a cozy fireplace, and a spacious kitchen perfect for family gatherings. Enjoy mornings on the wraparound porch, evenings in the garden, and weekend escapes surrounded by nature. This home is ideal for those seeking serenity with a touch of rustic elegance.",
    beds: 3,
    baths: 3,
    type: "Cottage",
    price: "$620,000",
    pricePerNight: 300,
  },
  {
    id: 4,
    image: fourthHouse,
    title: "Modern Gulfview Villa",
    description:
      "A stunning 5-bedroom, 7-bathroom villa with pool and glass facade by SAOTA.",
    fullDescription:
      "Experience luxury living in this stunning 5-bedroom, 7-bathroom villa designed by the renowned SAOTA. Boasting a sleek glass facade, this architectural masterpiece offers breathtaking views of the gulf, flooding the interior with natural light. The spacious open-plan layout seamlessly blends indoor and outdoor living, centered around a beautiful private pool perfect for relaxation and entertaining. Each bedroom features en-suite bathrooms with modern fixtures and elegant finishes, ensuring maximum comfort and privacy. High-end amenities, contemporary design, and exceptional craftsmanship make this villa the ultimate retreat for those seeking sophistication and tranquility.",
    beds: 5,
    baths: 7,
    type: "Villa",
    price: "$760,000",
    pricePerNight: 550,
  },
  {
    id: 5,
    image: fifthHouse,
    title: "FONTESPINA 6",
    description:
      "On the hill of San Benedetto del Tronto with panoramic Riviera views.",
    fullDescription:
      "PRIVATE STRUCTURE. Fontespina, a splendid villa surrounded by cypresses and olive trees, stands on the hill overlooking the Riviera delle Palme of San Benedetto del Tronto. Its location, three miles from the sea, allows guests to enjoy a peaceful holiday in the countryside yet with the beach just ten minutes away. The splendid view of the sea is visible from virtually every corner of the house and, especially, from the upper terrace and pool. A peaceful and elegant holiday, with all amenities, awaits you in this classical, top quality setting. NO SMOKERS HOUSE.FONTESPINA HAS BEEN SUBJECTED TO A CHECK-UP BY OUR TECHNICAL MANAGER, TO ENSURE THE CONSISTENCY OF THE DESCRIPTION, THE ACCESSORIES LISTED ON THE WEBSITE AND THEIR PRESENT STATE OF OPERATION/MAINTENANCE",
    beds: 3,
    baths: 3,
    type: "Villa",
    price: "$220,000",
    pricePerNight: 180,
  },
  {
    id: 6,
    image: sixthHouse,
    title: "Laguna Apartments",
    description: "Close to beach, shops, and restaurants with amazing views.",
    fullDescription:
      "Enjoy coastal living at its finest in these charming 1-bedroom, 1-bathroom apartments located just steps away from the beach, shops, and restaurants. Offering amazing views, Laguna Apartments provide a perfect blend of comfort and convenience. Ideal for singles or couples, each unit is designed to maximize space and natural light, creating a warm and inviting atmosphere. Whether you’re relaxing indoors or exploring the vibrant neighborhood, Laguna Apartments deliver an unbeatable lifestyle by the sea.",
    beds: 1,
    baths: 1,
    type: "Apartment",
    price: "$210,000",
    pricePerNight: 120,
    gallery: [
      fifthVilla1,
      fifthVilla2,
      fifthVilla3,
      fifthVilla6,
      fifthVilla7,
      fifthVilla8,
      fifthVilla9,
      fifthVilla10,
      fifthVilla11,
    ],
  },
];

export default propertiesInfo;
