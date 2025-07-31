import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const valuationFactors = [
  { factor: 'CMA', influence: 85 },
  { factor: 'Location', influence: 95 },
  { factor: 'Build Quality', influence: 70 },
  { factor: 'Revenue Potential', influence: 60 },
];

const ValuationFactorsChart = () => {
  return (
    <div className="w-full h-72 md:h-96 bg-white rounded-2xl shadow-lg p-4">
      <ResponsiveBar
        data={valuationFactors}
        keys={['influence']}
        indexBy="factor"
        margin={{ top: 20, right: 30, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        borderRadius={6}
        axisBottom={{
          tickRotation: 0,
          legend: 'Valuation Factors',
          legendPosition: 'middle',
          legendOffset: 40,
        }}
        axisLeft={{
          legend: 'Influence (%)',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        animate={true}
        motionConfig="wobbly"
        tooltip={({ id, value, indexValue }) => (
          <div className="bg-white p-2 shadow rounded text-sm text-gray-800">
            <strong>{indexValue}</strong>: {value}%
          </div>
        )}
      />
    </div>
  );
};

export default ValuationFactorsChart;
