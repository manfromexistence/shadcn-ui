import React from 'react';
import G2Chart from './g2-wrapper'; // Assuming g2-wrapper.tsx is in the same directory

// Example 1: Basic Interval Chart (from G2 Quick Start)
const basicIntervalSpec = {
  type: 'interval',
  data: [
    { genre: 'Sports', sold: 275 },
    { genre: 'Strategy', sold: 115 },
    { genre: 'Action', sold: 120 },
    { genre: 'Shooter', sold: 350 },
    { genre: 'Other', sold: 150 },
  ],
  encode: {
    x: 'genre',
    y: 'sold',
    color: 'genre', // Added color encoding for consistency
  },
};

// Example 2: Bullet Chart (derived from G2/site/examples/general/bullet/demo/bullets.ts)
const bulletData = [
  { title: '5🌟', ranges: 100, measures: 40, target: 85 },
  { title: '4🌟', ranges: 100, measures: 80, target: 40 },
  { title: '3🌟', ranges: 100, measures: 20, target: 22 },
  { title: '0-2🌟', ranges: 100, measures: 30, target: 10 },
];

const bulletSpec = {
  type: 'view',
  coordinate: { transform: [{ type: 'transpose' }] },
  data: bulletData,
  children: [
    {
      type: 'interval',
      encode: {
        x: 'title',
        y: 'ranges',
        color: () => '#f0efff', // Use a function for constant color
      },
      style: {
        maxWidth: 30,
      },
      axis: {
        y: { grid: true, gridLineWidth: 2 },
        x: { title: false },
      },
    },
    {
      type: 'interval',
      encode: {
        x: 'title',
        y: 'measures',
        color: () => '#5B8FF9', // Use a function for constant color
      },
      style: {
        maxWidth: 20,
      },
      tooltip: { channel: 'y', valueFormatter: '.0f' } // Add tooltip for measures
    },
    {
      type: 'point',
      encode: {
        x: 'title',
        y: 'target',
        shape: 'line', // Use 'line' shape for the target marker
        size: 15,      // Adjust size as needed
        color: () => '#000000', // Use a function for constant color
      },
      style: {
        lineWidth: 2,
      },
       tooltip: { channel: 'y', valueFormatter: '.0f' } // Add tooltip for target
    },
  ],
};


export default function VisualizationPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">G2 Chart Examples</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Basic Interval Chart</h2>
          <div className="border rounded-lg p-2">
            <G2Chart config={basicIntervalSpec} height={300} />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Bullet Chart</h2>
          <div className="border rounded-lg p-2">
            <G2Chart config={bulletSpec} height={300} />
          </div>
        </div>

        {/* Add more G2Chart components here for other examples */}

      </div>
    </div>
  );
}