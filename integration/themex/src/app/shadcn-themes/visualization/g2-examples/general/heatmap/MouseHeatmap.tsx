'use client'; // Assume client component due to G2

import React from 'react';
import G2Chart from '../../../g2-wrapper';
// TODO: Add any necessary imports (e.g., d3, lodash) if used in the original code
// import * as d3 from 'd3';
// import _ from 'lodash';

/*
Original Dumi Example Code from: ../../G2/site/examples/general/heatmap/demo/mouse-heatmap.ts
--------------------------------------------------------------------------------
// import { Chart } from '@antv/g2';
import { throttle } from 'lodash';

const data = {};

const chart = new Chart({
  container: 'container',
  width: 640,
  height: 480,
  padding: 0,
});

chart.style({
  viewFill: '#4e79a7',
});

chart.data([]);
chart.axis(false);

chart
  .heatmap()
  .encode('x', 'x')
  .encode('y', 'y')
  .encode('color', 'v')
  .scale('x', { domain: [0, 640] })
  .scale('y', { domain: [0, 480], range: [0, 1] })
  .style('opacity', 0)
  .tooltip(false)
  .animate(false);

chart.render();

chart.on(
  'plot:pointermove',
  throttle((e) => {
    const { x, y } = e;

    const kx = Math.floor(x - (x % 8));
    const ky = Math.floor(y - (y % 8));

    if (!data[kx]) data[kx] = {};
    if (!data[kx][ky]) data[kx][ky] = 0;

    data[kx][ky] += 1;

    const d = transform(data);

    chart.changeData(d);
  }),
);

function transform(dataMap) {
  const arr = [];
  Object.keys(dataMap).forEach((x) => {
    Object.keys(dataMap[x]).forEach((y) => {
      arr.push({ x, y, v: dataMap[x][y] });
    });
  });
  return arr;
}

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

const GeneralHeatmapMouseHeatmapChart: React.FC = () => {
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
        <h2 className="text-xl font-semibold mb-2">Mouse heatmap</h2>
        <div className="border rounded-lg p-2">
            {/* Pass finalSpec if data is fetched */}
            <G2Chart config={spec} height={400} />
        </div>
     </div>
  );
};

export default GeneralHeatmapMouseHeatmapChart;
