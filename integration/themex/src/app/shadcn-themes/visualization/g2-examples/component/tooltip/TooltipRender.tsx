'use client'; // Assume client component due to G2

import React from 'react';
import G2Chart from '../../../g2-wrapper';
// TODO: Add any necessary imports (e.g., d3, lodash) if used in the original code
// import * as d3 from 'd3';
// import _ from 'lodash';

/*
Original Dumi Example Code from: ../../G2/site/examples/component/tooltip/demo/tooltip-render.ts
--------------------------------------------------------------------------------
// import { Chart } from '@antv/g2';

const chart = new Chart({
  container: 'container',
});

chart
  .interval()
  .data({
    type: 'fetch',
    value:
      'https://gw.alipayobjects.com/os/bmw-prod/fb9db6b7-23a5-4c23-bbef-c54a55fee580.csv',
  })
  .transform([{ type: 'sortX', by: 'y', reverse: true }])
  .encode('x', 'letter')
  .encode('y', 'frequency');

chart.interaction('tooltip', {
  render: (event, { title, items }) => `
  <div
    style="
      width: 300px;
      background: #f2f2f2;
      border-radius: 10px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px;
      margin: -12px;
    "
  >
    <h2
      style="
        margin-bottom: 9px; 
        font-size: 18px; 
        line-height: 30px; 
        font-weight: 500px"
    >
      Letter: ${title}
    </h2>
    ${items
      .map(
        (item) =>
          `<div style="font-size: 16px; color: #666">name: ${item.name}
          <br/>
          value: 
          <div style="width:${
            item.value * 1000
          }px;height:10px;display:inline-block;background:${item.color}"></div>
          ${item.value}
        </div>`,
      )
      .join('')}
  </div>
  `,
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

const ComponentTooltipTooltipRenderChart: React.FC = () => {
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
        <h2 className="text-xl font-semibold mb-2">Tooltip render</h2>
        <div className="border rounded-lg p-2">
            {/* Pass finalSpec if data is fetched */}
            <G2Chart config={spec} height={400} />
        </div>
     </div>
  );
};

export default ComponentTooltipTooltipRenderChart;
