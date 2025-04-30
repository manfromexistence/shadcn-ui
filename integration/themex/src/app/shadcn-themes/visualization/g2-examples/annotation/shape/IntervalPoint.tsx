'use client'; // Assume client component due to G2

import React from 'react';
import G2Chart from '../../../g2-wrapper';
// TODO: Add any necessary imports (e.g., d3, lodash) if used in the original code
// import * as d3 from 'd3';
// import _ from 'lodash';

/*
Original Dumi Example Code from: ../../G2/site/examples/annotation/shape/demo/interval-point.ts
--------------------------------------------------------------------------------
// import { Chart } from '@antv/g2';

const chart = new Chart({
  container: 'container',
  autoFit: true,
  paddingRight: 30,
});

chart.coordinate({ transform: [{ type: 'transpose' }] });

chart.data([
  { x: 'Jan', tick: 9.3, value: 11.5 },
  { x: 'Feb', tick: 10.5, value: 12 },
  { x: 'Mar', tick: 11.2, value: 11.7 },
  { x: 'Apr', tick: 11.2, value: 12.4 },
  { x: 'May', tick: 12.7, value: 13.5 },
  { x: 'Jun', tick: 13.1, value: 11.9 },
  { x: 'Jul', tick: 12.2, value: 14.6 },
  { x: 'Aug', tick: 12.2, value: 17.2 },
  { x: 'Sep', tick: 10.1, value: 16.9 },
  { x: 'Oct', tick: 14.5, value: 15.4 },
  { x: 'Nov', tick: 14.5, value: 16.9 },
  { x: 'Dec', tick: 15.5, value: 17.2 },
]);

chart
  .interval()
  .encode('x', 'x')
  .encode('y', 'value')
  .encode('size', 20)
  .axis('x', { title: false })
  .style('fillOpacity', 0.65)
  .style('lineWidth', 1)
  .label({
    text: 'value',
    position: 'right',
    formatter: (v) => `${v}min`,
    dx: 4,
    textAlign: 'start',
  });

chart
  .point()
  .encode('x', 'x')
  .encode('y', 'tick')
  .encode('shape', 'line')
  .encode('size', 15)
  .style('stroke', 'red')
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

const AnnotationShapeIntervalPointChart: React.FC = () => {
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
        <h2 className="text-xl font-semibold mb-2">Interval point</h2>
        <div className="border rounded-lg p-2">
            {/* Pass finalSpec if data is fetched */}
            <G2Chart config={spec} height={400} />
        </div>
     </div>
  );
};

export default AnnotationShapeIntervalPointChart;
