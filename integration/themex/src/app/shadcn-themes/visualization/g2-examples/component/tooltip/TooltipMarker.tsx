'use client'; // Assume client component due to G2

import React from 'react';
import G2Chart from '../../../g2-wrapper';
// TODO: Add any necessary imports (e.g., d3, lodash) if used in the original code
// import * as d3 from 'd3';
// import _ from 'lodash';

/*
Original Dumi Example Code from: ../../G2/site/examples/component/tooltip/demo/tooltip-marker.ts
--------------------------------------------------------------------------------
// import { Chart } from '@antv/g2';

const data = [
  { item: 'Design', type: 'a', score: 70 },
  { item: 'Design', type: 'b', score: 30 },
  { item: 'Development', type: 'a', score: 60 },
  { item: 'Development', type: 'b', score: 70 },
  { item: 'Marketing', type: 'a', score: 50 },
  { item: 'Marketing', type: 'b', score: 60 },
  { item: 'Users', type: 'a', score: 40 },
  { item: 'Users', type: 'b', score: 50 },
  { item: 'Test', type: 'a', score: 60 },
  { item: 'Test', type: 'b', score: 70 },
  { item: 'Language', type: 'a', score: 70 },
  { item: 'Language', type: 'b', score: 50 },
  { item: 'Technology', type: 'a', score: 50 },
  { item: 'Technology', type: 'b', score: 40 },
  { item: 'Support', type: 'a', score: 30 },
  { item: 'Support', type: 'b', score: 40 },
  { item: 'Sales', type: 'a', score: 60 },
  { item: 'Sales', type: 'b', score: 40 },
  { item: 'UX', type: 'a', score: 50 },
  { item: 'UX', type: 'b', score: 60 },
];

const options = {
  type: 'view',
  coordinate: {
    type: 'polar',
  },
  scale: {
    x: { padding: 0.5, align: 0 },
    y: { tickCount: 5, domainMax: 80 },
  },
  autoFit: true,
  data,
  interaction: {
    legendFilter: false,
    elementPointMove: true,
    tooltip: {
      crosshairs: true,
      crosshairsStroke: 'red',
      crosshairsLineDash: [4, 4],
      markerType: 'hollow',
    },
  },
  axis: {
    x: {
      grid: true,
      gridStrokeWidth: 1,
      tick: false,
      gridLineDash: [0, 0],
    },
    y: {
      zIndex: 1,
      title: false,
      gridConnect: 'line',
      gridStrokeWidth: 1,
      gridLineDash: [0, 0],
    },
  },
  children: [
    {
      type: 'area',
      encode: {
        x: 'item',
        y: 'score',
        color: 'type',
        key: 'type',
      },
      style: {
        fillOpacity: 0.5,
      },
    },
    {
      type: 'line',
      encode: {
        x: 'item',
        y: 'score',
        color: 'type',
        key: 'type',
      },
      style: {
        lineWidth: 2,
      },
    },
  ],
};

const chart = new Chart({
  container: 'container',
});

chart.options(options);

chart.render();

--------------------------------------------------------------------------------
*/

// TODO: Convert the imperative Dumi code above into a declarative G2 spec object.
// This often involves:
// 1. Replacing chart.interval().data(...).encode(...) with { type: 'interval', data: ..., encode: ... }
// 2. Handling data loading (inline, fetch, or useEffect)
// 3. Replacing global variables (like d3) with imports
// 4. Adapting any complex logic or interactions.
const spec = {
  // type: 'interval', // Example type
  // data: [...], // Example data
  // encode: { x: '...', y: '...' }, // Example encoding
};

const ComponentTooltipTooltipMarkerChart: React.FC = () => {
  // TODO: If data needs fetching or processing, use useState and useEffect here.
  // const [data, setData] = React.useState(null);
  // React.useEffect(() => {
  //   fetch('...')
  //     .then(res => res.json())
  //     .then(setData);
  // }, []);
  //
  // if (!data) {
  //   return <div>Loading...</div>;
  // }
  //
  // const finalSpec = { ...spec, data }; // Combine spec with fetched data

  return (
     <div>
        {/* TODO: Maybe use a more dynamic title */}
        <h2 className="text-xl font-semibold mb-2">Tooltip marker</h2>
        <div className="border rounded-lg p-2">
            {/* Pass finalSpec if data is fetched */}
            <G2Chart config={spec} height={400} />
        </div>
     </div>
  );
};

export default ComponentTooltipTooltipMarkerChart;
