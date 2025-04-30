'use client'; // Assume client component due to G2

import React from 'react';
import G2Chart from '../../../g2-wrapper';
// TODO: Add any necessary imports (e.g., d3, lodash) if used in the original code
// import * as d3 from 'd3';
// import _ from 'lodash';

/*
Original Dumi Example Code from: ../../G2/site/examples/annotation/range/demo/point-range.ts
--------------------------------------------------------------------------------
// /**
 * A recreation of this demo: https://www.anychart.com/zh/products/anychart/gallery/Quadrant_Charts/Top_30_Countries_by_Quality_of_Life.php
 */
import { Chart } from '@antv/g2';

const chart = new Chart({
  container: 'container',
});

chart
  .data({
    type: 'fetch',
    value:
      'https://assets.antv.antgroup.com/g2/top-30-countries-by-quality-of-life.json',
  })
  .axis('x', false)
  .axis('y', false)
  .style('mainStroke', '#5B8FF9')
  .style('mainLineWidth', 2);

chart
  .range()
  .data([
    { x: [0, 0.5], y: [0, 0.5] },
    { x: [0.5, 1], y: [0.5, 1] },
  ])
  .encode('x', 'x')
  .encode('y', 'y')
  .scale('x', { independent: true, domain: [0, 1] })
  .scale('y', { independent: true, domain: [0, 1] })
  .style('stroke', '#5B8FF9')
  .style('lineWidth', 1)
  .style('fillOpacity', 0.15)
  .animate(false)
  .tooltip(false);

chart
  .point()
  .encode('x', 'x')
  .encode('y', 'y')
  .encode('shape', 'point')
  .scale('x', { domain: [137.5, 212] })
  .scale('y', { domain: [0, 80] })
  .label({ text: 'name', fontSize: 10, dy: 6 });

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

const AnnotationRangePointRangeChart: React.FC = () => {
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
        <h2 className="text-xl font-semibold mb-2">Point range</h2>
        <div className="border rounded-lg p-2">
            {/* Pass finalSpec if data is fetched */}
            <G2Chart config={spec} height={400} />
        </div>
     </div>
  );
};

export default AnnotationRangePointRangeChart;
