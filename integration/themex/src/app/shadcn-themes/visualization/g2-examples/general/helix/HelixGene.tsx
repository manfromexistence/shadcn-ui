'use client'; // Assume client component due to G2

import React from 'react';
import G2Chart from '../../../g2-wrapper';
// TODO: Add any necessary imports (e.g., d3, lodash) if used in the original code
// import * as d3 from 'd3';
// import _ from 'lodash';

/*
Original Dumi Example Code from: ../../G2/site/examples/general/helix/demo/helix-gene.ts
--------------------------------------------------------------------------------
// import { Chart } from '@antv/g2';

// 模拟数据
const data = [];
const groups = ['WT', 'KO'];
const hours = 72;
const baseValues = {
  WT: 2.0,
  KO: 2.3,
};

for (let i = 0; i < hours; i++) {
  const time = `${i}h`;
  groups.forEach((group) => {
    const fluctuation = Math.random() * 0.4 - 0.2;
    data.push({
      time,
      group,
      logFPKM: baseValues[group] + Math.sin(i / 10) * 0.3 + fluctuation, // 模拟趋势变化
    });
  });
}

const chart = new Chart({
  container: 'container',
  autoFit: true,
  height: 600,
  padding: [50, 50, 50, 50],
});

chart.data(data);

chart.coordinate({
  type: 'helix',
  startAngle: 0.2 * Math.PI,
  endAngle: 6.5 * Math.PI,
  innerRadius: 0.1,
});

chart
  .interval()
  .encode('x', 'time')
  .encode('y', 'group')
  .encode('color', 'logFPKM')
  .scale('color', {
    type: 'linear',
    range: ['#fff', '#ec4839'],
  })
  .tooltip({
    title: 'time',
    items: [
      { field: 'group', name: '组别' },
      {
        field: 'logFPKM',
        name: 'log(FPKM)',
        valueFormatter: (value) => value.toFixed(2),
      },
    ],
  })
  .animate('enter', {
    type: 'fadeIn',
    duration: 1000,
  });

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

const GeneralHelixHelixGeneChart: React.FC = () => {
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
        <h2 className="text-xl font-semibold mb-2">Helix gene</h2>
        <div className="border rounded-lg p-2">
            {/* Pass finalSpec if data is fetched */}
            <G2Chart config={spec} height={400} />
        </div>
     </div>
  );
};

export default GeneralHelixHelixGeneChart;
