'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';
// TODO: If accessibility features (text extraction) are needed,
// the A11yPlugin needs to be integrated. This might require
// modifying the G2Chart wrapper or initializing the chart differently.
// import { Plugin as A11yPlugin } from '@antv/g-plugin-a11y';

// Helper functions from the original example
const labelFormatter = (d: number) => Math.abs(d) + (d < 0 ? 'BC' : d > 0 ? 'AC' : '');
const left = (d: { start: number; end: number }) => d.end > -1500 && d.start > -3000;

// --- Reconstructed G2 Spec based on original example ---
const spec: G2Spec = {
  type: 'interval',
  width: 900, // Keep original dimensions for consistency, layout handled by parent
  height: 1000,
  coordinate: { transform: [{ type: 'transpose' }] },
  data: {
    type: 'fetch',
    value: 'https://assets.antv.antgroup.com/g2/world-history.json',
  },
  transform: [
    { type: 'sortX', by: 'y' },
    { type: 'sortColor', by: 'y', reducer: 'min' },
  ],
  axis: {
    x: false, // Hide x-axis (which becomes the vertical axis after transpose)
    // y axis (horizontal after transpose) will show by default
  },
  encode: {
    x: 'civilization',
    y: ['start', 'end'],
    color: 'region',
  },
  scale: {
    color: { palette: 'set2' },
    // y scale formatting could be added here if needed, but tooltip handles it
  },
  labels: [ // Use labels instead of label for G2 v5+ spec
    {
      text: 'civilization',
      position: (d: { start: number; end: number }) => (left(d) ? 'left' : 'right'),
      textAlign: (d: { start: number; end: number }) => (left(d) ? 'end' : 'start'),
      dx: (d: { start: number; end: number }) => (left(d) ? -5 : 5),
      fontSize: 10,
    },
  ],
  tooltip: [ // Use tooltip array format
    { name: 'start', field: 'start', valueFormatter: labelFormatter },
    { name: 'end', field: 'end', valueFormatter: labelFormatter },
    { name: 'civilization', field: 'civilization' }, // Add civilization to tooltip
    { name: 'region', field: 'region' }, // Add region to tooltip
  ],
  // TODO: Integrate A11yPlugin if needed
  // plugins: [new A11yPlugin({ enableExtractingText: true })],
};

const AccessibleTextSearchingTextSearchChart: React.FC = () => {
  // No need to redefine finalSpec, just use spec directly
  // const finalSpec: G2Spec = spec;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">World History Timeline by Civilization</h2>
      {/* TODO: Add description if available */}
      <p className="text-sm text-muted-foreground mb-4">Interval chart showing the lifespan of various world civilizations, transposed for vertical display.</p>
      {/* Container size is controlled here, G2Chart will adapt */}
      <div className="h-[600px] w-full overflow-auto border rounded p-2"> {/* Increased height and added overflow */}
        {spec && <G2Chart config={spec} />}
      </div>
    </div>
  );
};

export default AccessibleTextSearchingTextSearchChart;
