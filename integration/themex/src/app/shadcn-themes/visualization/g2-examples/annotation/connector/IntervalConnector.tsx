'use client'; // Assume client component due to G2

import React from 'react';
import G2Chart from '../../../g2-wrapper';
// TODO: Add any necessary imports (e.g., d3, lodash) if used in the original code
// import * as d3 from 'd3';
// import _ from 'lodash';

/*
Original Dumi Example Code from: ../../G2/site/examples/annotation/connector/demo/interval-connector.ts
--------------------------------------------------------------------------------
// /**
 * A recreation of this demo: https://www.anychart.com/products/anychart/gallery/Waterfall_Charts/Waterfall_Arrows.php
 */
import { Chart } from '@antv/g2';

const chart = new Chart({
  container: 'container',
  autoFit: true,
  insetTop: 30,
});

chart
  .data([
    { x: 'Net Sales', value: 5085000, start: 0, end: 5085000 },
    { x: 'Cost of Sales', value: -1250450, start: 5085000, end: 3834550 },
    { x: 'Operating Expenses', value: -2350050, start: 3834550, end: 1484500 },
    { x: 'Other Income', value: 750000, start: 1484500, end: 2234500 },
    { x: 'Extraordinary Gain', value: -230050, start: 2234500, end: 2004450 },
    { x: 'Interest Expense', value: -500000, start: 2004450, end: 1504450 },
    { x: 'Taxes', value: 490000, start: 1504450, end: 1994450 },
    { x: 'Net Income', isTotal: true, value: 1994450, start: 0, end: 1994450 },
  ])
  .axis('x', { title: false, labelTransform: 'rotate(-90)' })
  .axis('y', { labelFormatter: '~s' })
  .legend(null);

chart
  .link()
  .data({ transform: [{ type: 'custom', callback: linkData }] })
  .encode('x', ['x1', 'x2'])
  .encode('y', 'value')
  .style('stroke', '#697474')
  .style('lineDash', [4, 2])
  .tooltip(false);

chart
  .connector()
  .data({ transform: [{ type: 'custom', callback: connectorData }] })
  .encode('x', ['x1', 'x2'])
  .encode('y', ['y1', 'y2'])
  .label({
    text: (d) => `${d.y2 - d.y1}`,
    formatter: '~s',
    fontSize: 10,
    dy: 2,
  })
  .style({ stroke: '#697474', offset: 16 })
  .tooltip(false);

chart
  .interval()
  .encode('x', 'x')
  .encode('y', ['start', 'end'])
  .encode('color', (d, idx) =>
    idx === 0 || d.isTotal ? 'D' : d.value > 0 ? 'P' : 'N',
  )
  .scale('color', {
    domain: ['P', 'N', 'D'],
    range: ['#64b5f6', '#ef6c00', '#96a6a6'],
  })
  .encode('size', 24)
  .style('stroke', '#697474')
  .label({
    text: 'value',
    formatter: '~s',
    position: (d) => (d.value > 0 ? 'top' : 'bottom'),
    textBaseline: (d) => (d.value > 0 ? 'bottom' : 'top'),
    fontSize: 10,
    dy: (d) => (d.value > 0 ? -4 : 4),
  })
  .tooltip({ channel: 'y', valueFormatter: '~s' })
  .tooltip({ channel: 'y1', valueFormatter: '~s' });

chart.render();

// Process data.
function linkData(data) {
  return data.reduce((r, d, idx) => {
    if (idx > 0) {
      return r.concat({
        x1: data[idx - 1].x,
        x2: d.x,
        value: d.isTotal ? d.end : d.start,
      });
    }
    return r;
  }, []);
}

function connectorData(data) {
  return [
    {
      x1: data[0].x,
      y1: data[0].end,
      x2: data[data.length - 1].x,
      y2: data[data.length - 1].end,
    },
  ];
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

const AnnotationConnectorIntervalConnectorChart: React.FC = () => {
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
        <h2 className="text-xl font-semibold mb-2">Interval connector</h2>
        <div className="border rounded-lg p-2">
            {/* Pass finalSpec if data is fetched */}
            <G2Chart config={spec} height={400} />
        </div>
     </div>
  );
};

export default AnnotationConnectorIntervalConnectorChart;
