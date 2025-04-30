'use client'; // Assume client component due to G2

import React from 'react';
import G2Chart from '../../../g2-wrapper';
// TODO: Add any necessary imports (e.g., d3, lodash) if used in the original code
// import * as d3 from 'd3';
// import _ from 'lodash';

/*
Original Dumi Example Code from: ../../G2/site/examples/general/interval/demo/bar-range-micro.ts
--------------------------------------------------------------------------------
// import { Chart } from '@antv/g2';

const floatTimestamp = (s) => +new Date(s) + +`0.${s.slice(s.length - 3)}`;

const format = (n) => {
  const x = Math.floor(n);
  const s = n + '';
  const d = new Date(x);
  const Y = d.getFullYear();
  const M = d.getMonth() + 1;
  const D = d.getDate();
  const H = d.getHours();
  const MN = d.getMinutes();
  const S = d.getSeconds();
  const MS = d.getMilliseconds();
  const MCM = s.slice(s.length - 3);
  return `${Y}-${M}-${D} ${H}:${MN}:${S}.${MS}${MCM}`;
};

const chart = new Chart({
  container: 'container',
  autoFit: true,
});

chart
  .interval()
  .data([
    {
      task: 'task0',
      startTime: '2023-06-28 03:30:33.900123', // micro seconds
      endTime: '2023-06-28 03:30:33.900678', // micro seconds
      status: '0',
    },
    {
      task: 'task0',
      startTime: '2023-06-28 03:30:33.901123',
      endTime: '2023-06-28 03:30:33.902678',
      status: '1',
    },
  ])
  .encode('x', 'task')
  // Add float part to distinguish y and y1
  .encode('y', (d) => floatTimestamp(d.startTime))
  .encode('y1', (d) => floatTimestamp(d.endTime))
  .encode('color', 'status')
  .scale('y', {
    type: 'time',
    domain: [
      new Date('2023-06-28 03:30:33.900'),
      new Date('2023-06-28 03:30:33.903'),
    ],
  })
  .coordinate({ transform: [{ type: 'transpose' }] })
  .tooltip({ channel: 'y', valueFormatter: format })
  .tooltip({ channel: 'y1', valueFormatter: format });

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

const GeneralIntervalBarRangeMicroChart: React.FC = () => {
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
        <h2 className="text-xl font-semibold mb-2">Bar range micro</h2>
        <div className="border rounded-lg p-2">
            {/* Pass finalSpec if data is fetched */}
            <G2Chart config={spec} height={400} />
        </div>
     </div>
  );
};

export default GeneralIntervalBarRangeMicroChart;
