'use client'; // Assume client component due to G2

import React from 'react';
import G2Chart from '../../../g2-wrapper';
// TODO: Add any necessary imports (e.g., d3, lodash) if used in the original code
// import * as d3 from 'd3';
// import _ from 'lodash';

/*
Original Dumi Example Code from: ../../G2/site/examples/general/radial/demo/apple-activity.ts
--------------------------------------------------------------------------------
// import { Chart } from '@antv/g2';

const chart = new Chart({
  container: 'container',
  width: 244,
  height: 244,
});

chart
  .data([
    {
      name: 'activity1',
      percent: 0.6,
      color: '#1ad5de',
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/ck11Y6aRrz/shangjiantou.png',
    },
    {
      name: 'activity2',
      percent: 0.2,
      color: '#a0ff03',
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/zY2JB7hhrO/shuangjiantou.png',
    },
    {
      name: 'activity3',
      percent: 0.3,
      color: '#e90b3a',
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/%24qBxSxdK05/jiantou.png',
    },
  ])
  .coordinate({ type: 'radial', innerRadius: 0.2 });

chart
  .interval()
  .encode('x', 'name')
  .encode('y', 1)
  .encode('size', 52)
  .encode('color', 'color')
  .scale('color', { type: 'identity' })
  .style('fillOpacity', 0.25)
  .animate(false);

chart
  .interval()
  .encode('x', 'name')
  .encode('y', 'percent')
  .encode('color', 'color')
  .encode('size', 52)
  .style('radius', 26)
  .style('shadowColor', 'rgba(0,0,0,0.45)')
  .style('shadowBlur', 20)
  .style('shadowOffsetX', -2)
  .style('shadowOffsetY', -5)
  .axis(false)
  .animate('enter', {
    type: 'waveIn',
    easing: 'easing-out-bounce',
    duration: 1000,
  });

chart
  .image()
  .encode('x', 'name')
  .encode('y', 0)
  .encode('src', (d) => d.icon)
  .encode('size', 12)
  .style('transform', 'translateX(10)');

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

const GeneralRadialAppleActivityChart: React.FC = () => {
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
        <h2 className="text-xl font-semibold mb-2">Apple activity</h2>
        <div className="border rounded-lg p-2">
            {/* Pass finalSpec if data is fetched */}
            <G2Chart config={spec} height={400} />
        </div>
     </div>
  );
};

export default GeneralRadialAppleActivityChart;
