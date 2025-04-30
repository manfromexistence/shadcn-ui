'use client'; // Assume client component due to G2

import React from 'react';
import G2Chart from '../../../g2-wrapper';
// TODO: Add any necessary imports (e.g., d3, lodash) if used in the original code
// import * as d3 from 'd3';
// import _ from 'lodash';

/*
Original Dumi Example Code from: ../../G2/site/examples/general/radial/demo/radial-bar-with-background.ts
--------------------------------------------------------------------------------
// import { Chart } from '@antv/g2';

const data = [
  { type: '1-3秒', value: 0.16 },
  { type: '4-10秒', value: 0.125 },
  { type: '11-30秒', value: 0.2 },
  { type: '1-3分', value: 0.2 },
  { type: '3-10分', value: 0.05 },
  { type: '10-30分', value: 0.01 },
  { type: '30+分', value: 0.015 },
];

const chart = new Chart({
  container: 'container',
  autoFit: true,
  theme: 'dark',
});

chart.data(data).coordinate({ type: 'radial', innerRadius: 0.35 });

chart
  .interval()
  .encode('x', 'type')
  .encode('y', 0.2)
  .style('fill', '#202020')
  .state({
    active: { strokeWidth: 0 },
  })
  .tooltip(false);

chart
  .interval()
  .encode('x', 'type')
  .encode('y', 'value')
  .encode('color', [
    (val) => (val.type === '10-30分' || val.type === '30+分' ? 'high' : 'low'),
  ])
  .scale('color', { range: ['#5B8FF9', '#ff4d4f'] })
  .style('radius', 20)
  .tooltip([
    (item) => ({
      name: item.type,
      value: item.value,
    }),
  ])
  .axis(false)
  .legend(false)
  .state({
    active: { stroke: '#fff', strokeWidth: 1 },
  })
  .interaction('elementHighlight');

chart
  .image()
  .style('x', '50%')
  .style('y', '50%')
  .style('width', 100)
  .style('height', 80)
  .encode(
    'src',
    'https://gw.alipayobjects.com/mdn/rms_ef85c6/afts/img/A*0DYiQKP08cQAAAAAAAAAAAAAARQnAQ',
  )
  .tooltip(false);

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

const GeneralRadialRadialBarWithBackgroundChart: React.FC = () => {
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
        <h2 className="text-xl font-semibold mb-2">Radial bar with background</h2>
        <div className="border rounded-lg p-2">
            {/* Pass finalSpec if data is fetched */}
            <G2Chart config={spec} height={400} />
        </div>
     </div>
  );
};

export default GeneralRadialRadialBarWithBackgroundChart;
