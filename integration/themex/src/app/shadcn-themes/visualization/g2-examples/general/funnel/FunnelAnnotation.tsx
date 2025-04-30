'use client'; // Assume client component due to G2

import React from 'react';
import G2Chart from '../../../g2-wrapper';
// TODO: Add any necessary imports (e.g., d3, lodash) if used in the original code
// import * as d3 from 'd3';
// import _ from 'lodash';

/*
Original Dumi Example Code from: ../../G2/site/examples/general/funnel/demo/funnel-annotation.ts
--------------------------------------------------------------------------------
// import { Chart } from '@antv/g2';

const r = (start, end) => `${(((start - end) / start) * 100).toFixed(2)} %`;

const data = [
  { text: 'A', value: 12000 },
  { text: 'B', value: 9800 },
  { text: 'C', value: 6789 },
  { text: 'D', value: 4569 },
];
const encodeX = 'text';
const encodeY = 'value';

const chart = new Chart({
  container: 'container',
  autoFit: true,
  paddingRight: 60,
});

chart.coordinate({
  transform: [{ type: 'transpose' }],
});

chart
  .interval()
  .data(data)
  .transform({ type: 'symmetryY' })
  .axis(false)
  .legend(false)
  .encode('x', encodeX)
  .encode('y', encodeY)
  .encode('color', encodeX)
  .encode('shape', 'funnel')
  .scale('x', { paddingOuter: 0, paddingInner: 0 })
  .label({
    text: (d) => `${d[encodeX]} ${d[encodeY]}`,
    position: 'inside',
    fontSize: 20,
  })
  .label({
    text: '',
    // Use div to mock a line.
    render: (d, data, i) =>
      i !== 0
        ? `<div style="height:1px;width:30px;background:#aaa;margin:0 20px;"></div>`
        : '',
    position: 'top-right',
  })
  .label({
    text: (d, i) => (i !== 0 ? '转换率' : ''),
    position: 'top-right',
    textAlign: 'left',
    textBaseline: 'middle',
    fill: '#aaa',
    dx: 60,
  })
  .label({
    text: (d, i, data) =>
      i !== 0 ? r(data[i - 1][encodeY], data[i][encodeY]) : '',
    position: 'top-right',
    textAlign: 'left',
    textBaseline: 'middle',
    dx: 60,
    dy: 15,
  });

chart
  .connector()
  .data([
    {
      startX: data[0][encodeX],
      startY: data[data.length - 1][encodeX],
      endX: 0,
      endY: (data[0][encodeY] - data[data.length - 1][encodeY]) / 2,
    },
  ])
  .encode('x', 'startX')
  .encode('x1', 'startY')
  .encode('y', 'endX')
  .encode('y1', 'endY')
  .label({
    text: '转换率',
    position: 'left',
    textAlign: 'start',
    textBaseline: 'middle',
    fill: '#aaa',
    dx: 10,
  })
  .label({
    text: r(data[0][encodeY], data[data.length - 1][encodeY]),
    position: 'left',
    textAlign: 'start',
    dy: 15,
    dx: 10,
    fill: '#000',
  })
  .style('stroke', '#aaa')
  .style('markerEnd', false)
  .style('connectLength1', -12)
  .style('offset2', -20);

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

const GeneralFunnelFunnelAnnotationChart: React.FC = () => {
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
        <h2 className="text-xl font-semibold mb-2">Funnel annotation</h2>
        <div className="border rounded-lg p-2">
            {/* Pass finalSpec if data is fetched */}
            <G2Chart config={spec} height={400} />
        </div>
     </div>
  );
};

export default GeneralFunnelFunnelAnnotationChart;
