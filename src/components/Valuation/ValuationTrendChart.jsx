import React from 'react';
import { ResponsiveLine } from '@nivo/line';

const valuationTrendData = [
  {
    id: 'Global Villa Index',
    data: [
      { x: '2020', y: 350 },
      { x: '2021', y: 420 },
      { x: '2022', y: 510 },
      { x: '2023', y: 590 },
      { x: '2024', y: 630 },
      { x: '2025', y: 700 },
    ],
  },
];

const ValuationTrendChart = () => {
  return (
    <div className="w-full h-72 md:h-96 bg-white rounded-2xl shadow-lg p-4">
      <ResponsiveLine
        data={valuationTrendData}
        margin={{ top: 20, right: 40, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: false,
          reverse: false,
        }}
        axisBottom={{
          legend: 'Year',
          legendOffset: 36,
          legendPosition: 'middle',
        }}
        axisLeft={{
          legend: 'Price Index ($k)',
          legendOffset: -50,
          legendPosition: 'middle',
        }}
        curve="monotoneX"
        colors={{ scheme: 'category10' }}
        pointSize={8}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        useMesh={true}
        enableGridX={false}
        enableGridY={true}
        tooltip={({ point }) => (
          <div className="bg-white p-2 rounded shadow text-sm text-gray-800">
            <strong>{point.data.xFormatted}</strong>: ${point.data.yFormatted}k
          </div>
        )}
      />
    </div>
  );
};

export default ValuationTrendChart;
