'use client'; // Assume client component due to G2

import React from 'react';
import G2Chart from '../../../g2-wrapper';
// TODO: Add any necessary imports (e.g., d3, lodash) if used in the original code
// import * as d3 from 'd3';
// import _ from 'lodash';

/*
Original Dumi Example Code from: ../../G2/site/examples/annotation/line/demo/quadrant-scatter.ts
--------------------------------------------------------------------------------
// import { Chart } from '@antv/g2';

const chart = new Chart({
  container: 'container',
});

chart.data({
  type: 'fetch',
  value:
    'https://gw.alipayobjects.com/os/bmw-prod/0b37279d-1674-42b4-b285-29683747ad9a.json',
  transform: [
    { type: 'filter', callback: (d) => d['change in male rate'] !== 'NA' },
  ],
});

chart.lineX().data([0]);
chart.lineY().data([0]);

chart
  .range()
  .data([
    { x: [-25, 0], y: [-30, 0], region: '1' },
    { x: [-25, 0], y: [0, 20], region: '2' },
    { x: [0, 5], y: [-30, 0], region: '2' },
    { x: [0, 5], y: [0, 20], region: '1' },
  ])
  .encode('x', 'x')
  .encode('y', 'y')
  .style('fill', (d) => (d.region === '1' ? '#d8d0c0' : '#a3dda1'))
  .style('fillOpacity', 0.2)
  .animate('enter', { type: 'fadeIn' });

chart
  .point()
  .encode('x', 'change in female rate')
  .encode('y', 'change in male rate')
  .encode('size', 'pop')
  .encode('color', 'continent')
  .encode('shape', 'point')
  .scale('color', {
    range: ['#ffd500', '#82cab2', '#193442', '#d18768', '#7e827a'],
  })
  .scale('size', { range: [4, 30] })
  .style('stroke', '#bbb')
  .style('fillOpacity', 0.8)
  .axis('x', { title: 'Female' })
  .axis('y', { title: 'Male' })
  .legend('size', false)
  .slider('x', { labelFormatter: (d) => d.toFixed(1) })
  .slider('y', { labelFormatter: (d) => d.toFixed(1) })
  .tooltip([
    { channel: 'x', valueFormatter: '.1f' },
    { channel: 'y', valueFormatter: '.1f' },
  ]);

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

const AnnotationLineQuadrantScatterChart: React.FC = () => {
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
        <h2 className="text-xl font-semibold mb-2">Quadrant scatter</h2>
        <div className="border rounded-lg p-2">
            {/* Pass finalSpec if data is fetched */}
            <G2Chart config={spec} height={400} />
        </div>
     </div>
  );
};

export default AnnotationLineQuadrantScatterChart;
