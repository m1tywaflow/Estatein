import React from "react";
import { ResponsiveAreaBump } from "@nivo/bump";

const MyAreaBump = () => {
  const data = [
    {
      id: "Bali",
      data: [
        { x: 2020, y: 350 },
        { x: 2021, y: 420 },
        { x: 2022, y: 480 },
        { x: 2023, y: 530 },
        { x: 2024, y: 600 },
        { x: 2025, y: 670 },
      ],
    },
    {
      id: "Ibiza",
      data: [
        { x: 2020, y: 500 },
        { x: 2021, y: 520 },
        { x: 2022, y: 540 },
        { x: 2023, y: 610 },
        { x: 2024, y: 630 },
        { x: 2025, y: 690 },
      ],
    },
    {
      id: "Dubai",
      data: [
        { x: 2020, y: 450 },
        { x: 2021, y: 490 },
        { x: 2022, y: 580 },
        { x: 2023, y: 670 },
        { x: 2024, y: 710 },
        { x: 2025, y: 760 },
      ],
    },
    {
      id: "Santorini",
      data: [
        { x: 2020, y: 300 },
        { x: 2021, y: 340 },
        { x: 2022, y: 360 },
        { x: 2023, y: 410 },
        { x: 2024, y: 460 },
        { x: 2025, y: 500 },
      ],
    },
    {
      id: "Tuscany",
      data: [
        { x: 2020, y: 400 },
        { x: 2021, y: 420 },
        { x: 2022, y: 430 },
        { x: 2023, y: 470 },
        { x: 2024, y: 490 },
        { x: 2025, y: 510 },
      ],
    },
  ];

  return (
    <div style={{ height: 500 }}>
      <ResponsiveAreaBump
        data={data}
        margin={{ top: 40, right: 100, bottom: 40, left: 100 }}
        spacing={8}
        blendMode="multiply"
        colors={{ scheme: "nivo" }}
        animate={true}
        motionConfig="gentle"
        axisTop={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Year",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Villa Price ($k)",
          legendPosition: "middle",
          legendOffset: -60,
        }}
      />
    </div>
  );
};

export default MyAreaBump;
