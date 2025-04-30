'use client'; // Assume client component due to G2

import React from 'react';
import G2Chart from '../../../g2-wrapper';
// TODO: Add any necessary imports (e.g., d3, lodash) if used in the original code
// import * as d3 from 'd3';
// import _ from 'lodash';

/*
Original Dumi Example Code from: ../../G2/site/examples/annotation/shape/demo/watermark.ts
--------------------------------------------------------------------------------
// import { Chart } from '@antv/g2';

const chart = new Chart({
  container: 'container',
  autoFit: true,
});

chart
  .interval()
  .data([
    { month: 'Jan.', profit: 387264, start: 0, end: 387264 },
    { month: 'Feb.', profit: 772096, start: 387264, end: 1159360 },
    { month: 'Mar.', profit: 638075, start: 1159360, end: 1797435 },
    { month: 'Apr.', profit: -211386, start: 1797435, end: 1586049 },
    { month: 'May', profit: -138135, start: 1586049, end: 1447914 },
    { month: 'Jun', profit: -267238, start: 1447914, end: 1180676 },
    { month: 'Jul.', profit: 431406, start: 1180676, end: 1612082 },
    { month: 'Aug.', profit: 363018, start: 1612082, end: 1975100 },
    { month: 'Sep.', profit: -224638, start: 1975100, end: 1750462 },
    { month: 'Oct.', profit: -299867, start: 1750462, end: 1450595 },
    { month: 'Nov.', profit: 607365, start: 1450595, end: 2057960 },
    { month: 'Dec.', profit: 1106986, start: 2057960, end: 3164946 },
    { month: 'Total', start: 0, end: 3164946 },
  ])
  .encode('x', 'month')
  .encode('y', ['end', 'start'])
  .encode('color', (d) =>
    d.month === 'Total' ? 'Total' : d.profit > 0 ? 'Increase' : 'Decrease',
  )
  .axis('y', { labelFormatter: '~s' })
  .tooltip({ channel: 'y', valueFormatter: '~s' })
  .tooltip({ channel: 'y1', valueFormatter: '~s' });

chart.shape().style('x', '80%').style('y', '70%').style('render', watermark);

chart.render();

function watermark({ x, y }, context) {
  const { document } = context;

  const g = document.createElement('g', {});
  const c1 = document.createElement('circle', {
    style: {
      cx: x,
      cy: y,
      lineWidth: 4,
      r: 65,
      stroke: 'red',
      opacity: 0.3,
    },
  });
  const c2 = document.createElement('circle', {
    style: {
      cx: x,
      cy: y,
      lineWidth: 2,
      r: 50,
      stroke: 'red',
      opacity: 0.3,
    },
  });

  const text = document.createElement('text', {
    style: {
      x,
      y,
      text: '数据保密',
      transformOrigin: 'center',
      transform: 'rotate(30)',
      fontSize: 20,
      fill: 'red',
      textAlign: 'center',
      textBaseline: 'middle',
      fillOpacity: 0.3,
    },
  });

  g.appendChild(c1);
  g.appendChild(c2);
  g.appendChild(text);
  return g;
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

const AnnotationShapeWatermarkChart: React.FC = () => {
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
        <h2 className="text-xl font-semibold mb-2">Watermark</h2>
        <div className="border rounded-lg p-2">
            {/* Pass finalSpec if data is fetched */}
            <G2Chart config={spec} height={400} />
        </div>
     </div>
  );
};

export default AnnotationShapeWatermarkChart;
