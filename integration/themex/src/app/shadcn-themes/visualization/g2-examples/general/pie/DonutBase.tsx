'use client'; // Assume client component due to G2

import React from 'react';
import G2Chart from '../../../g2-wrapper';
// TODO: Add any necessary imports (e.g., d3, lodash) if used in the original code
// import * as d3 from 'd3';
// import _ from 'lodash';

/*
Original Dumi Example Code from: ../../G2/site/examples/general/pie/demo/donut-base.ts
--------------------------------------------------------------------------------
// import { Chart } from '@antv/g2';

const data = [
  { item: '事例一', count: 40, percent: 0.4 },
  { item: '事例二', count: 21, percent: 0.21 },
  { item: '事例三', count: 17, percent: 0.17 },
  { item: '事例四', count: 13, percent: 0.13 },
  { item: '事例五', count: 9, percent: 0.09 },
];

const chart = new Chart({
  container: 'container',
  autoFit: true,
});

chart.coordinate({ type: 'theta', outerRadius: 0.8, innerRadius: 0.5 });

chart
  .interval()
  .data(data)
  .transform({ type: 'stackY' })
  .encode('y', 'percent')
  .encode('color', 'item')
  .legend('color', { position: 'bottom', layout: { justifyContent: 'center' } })
  .label({
    position: 'outside',
    text: (data) => `${data.item}: ${data.percent * 100}%`,
  })
  .tooltip((data) => ({
    name: data.item,
    value: `${data.percent * 100}%`,
  }));

chart
  .text()
  .style('text', '主机')
  // Relative position
  .style('x', '50%')
  .style('y', '50%')
  .style('dy', -25)
  .style('fontSize', 34)
  .style('fill', '#8c8c8c')
  .style('textAlign', 'center');

chart
  .text()
  .style('text', '200')
  // Relative position
  .style('x', '50%')
  .style('y', '50%')
  .style('dx', -25)
  .style('dy', 25)
  .style('fontSize', 44)
  .style('fill', '#8c8c8c')
  .style('textAlign', 'center');

chart
  .text()
  .style('text', '台')
  // Relative position
  .style('x', '50%')
  .style('y', '50%')
  .style('dx', 35)
  .style('dy', 25)
  .style('fontSize', 34)
  .style('fill', '#8c8c8c')
  .style('textAlign', 'center');

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

const GeneralPieDonutBaseChart: React.FC = () => {
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
        <h2 className="text-xl font-semibold mb-2">Donut base</h2>
        <div className="border rounded-lg p-2">
            {/* Pass finalSpec if data is fetched */}
            <G2Chart config={spec} height={400} />
        </div>
     </div>
  );
};

export default GeneralPieDonutBaseChart;
