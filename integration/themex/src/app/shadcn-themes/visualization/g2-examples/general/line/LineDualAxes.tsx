'use client'; // Assume client component due to G2

import React from 'react';
import G2Chart from '../../../g2-wrapper';
// TODO: Add any necessary imports (e.g., d3, lodash) if used in the original code
// import * as d3 from 'd3';
// import _ from 'lodash';

/*
Original Dumi Example Code from: ../../G2/site/examples/general/line/demo/line-dual-axes.ts
--------------------------------------------------------------------------------
// /**
 * A recreation of this demo: https://observablehq.com/@mbostock/mareys-trains
 */
import { Chart } from '@antv/g2';

fetch('https://assets.antv.antgroup.com/g2/train.json')
  .then((res) => res.json())
  .then((data) => {
    const chart = new Chart({
      container: 'container',
      width: 800,
      height: 1000,
      paddingLeft: 60,
      paddingTop: 120,
      paddingBottom: 120,
    });
    const distanceName = new Map(data.map((d) => [d.distance, d.name]));
    const xAxis = {
      tickMethod: () => Array.from(distanceName.keys()),
      labelFormatter: (d) => distanceName.get(d),
      title: null,
    };

    chart
      .line()
      .data(data)
      .encode('x', 'distance')
      .encode('y', (d) => new Date(d.time))
      .encode('color', 'type')
      .encode('series', 'number')
      .scale('color', {
        domain: ['N', 'L', 'B'],
        range: ['rgb(34, 34, 34)', 'rgb(183, 116, 9)', 'rgb(192, 62, 29)'],
      })
      .scale('y', {
        range: [0, 1],
        tickCount: 15,
        utc: true,
      })
      .legend(false)
      .axis('x', [
        { ...xAxis, position: 'top' },
        { ...xAxis, position: 'bottom' },
      ]);

    chart.render();
  });

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

const GeneralLineLineDualAxesChart: React.FC = () => {
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
        <h2 className="text-xl font-semibold mb-2">Line dual axes</h2>
        <div className="border rounded-lg p-2">
            {/* Pass finalSpec if data is fetched */}
            <G2Chart config={spec} height={400} />
        </div>
     </div>
  );
};

export default GeneralLineLineDualAxesChart;
