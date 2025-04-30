'use client'; // Assume client component due to G2

import React from 'react';
import G2Chart from '../../../g2-wrapper';
// TODO: Add any necessary imports (e.g., d3, lodash) if used in the original code
// import * as d3 from 'd3';
// import _ from 'lodash';

/*
Original Dumi Example Code from: ../../G2/site/examples/component/tooltip/demo/tooltip-two.ts
--------------------------------------------------------------------------------
// import { Chart } from '@antv/g2';

function css(...styles) {
  return styles
    .map((obj) =>
      Object.entries(obj)
        .map(([k, v]) => k + ':' + v)
        .join(';'),
    )
    .join(';');
}

const chart = new Chart({
  container: 'container',
  autoFit: true,
});

chart.data([
  { time: '16', north: 0, south: 0 },
  { time: '18', north: 7, south: -8 },
  { time: '20', north: 6, south: -7 },
  { time: '22', north: 9, south: -8 },
  { time: '00', north: 5, south: -7 },
  { time: '02', north: 8, south: -5 },
  { time: '04', north: 6, south: -7 },
  { time: '06', north: 7, south: -8 },
  { time: '08', north: 9, south: -9 },
  { time: '10', north: 6, south: -9 },
  { time: '12', north: 5, south: -9 },
]);

chart
  .area()
  .encode('x', (d) => d.time)
  .encode('y', 'north')
  .encode('color', () => 'north')
  .encode('shape', 'smooth');

chart
  .area()
  .encode('x', (d) => d.time)
  .encode('y', 'south')
  .encode('color', () => 'south')
  .encode('shape', 'smooth');

chart.interaction('tooltip', {
  css: {
    '.g2-tooltip': {
      background: 'transparent',
      'box-shadow': 'none',
    },
  },
  render: (event, { title, items }) => {
    const containerStyle = () => ({
      background: '#fff',
      'border-radius': '4px',
      padding: '12px',
      'box-shadow': '0 6px 12px 0 rgba(0, 0, 0, 0.12)',
    });

    const itemStyle = (color) => ({
      display: 'inline-block',
      width: '8px',
      height: '8px',
      background: color,
      'border-radius': '50%',
    });

    return `
       <div>
          <div style="${css(containerStyle(), { 'margin-bottom': '20px' })}">
            <span>${title}</span>
            </br>
            <span style="${css(itemStyle(items[0].color))}"></span>
            <span>${items[0].name}</span>
            <span style="float:right">${items[0].value}</span>
          </div>
          <div style="${css(containerStyle())}">
            <span>${title}</span>
            </br>
            <span style=${css(itemStyle(items[1].color))}></span>
            <span>${items[1].name}</span>
            <span style="float:right">${items[1].value}</span>
          </div>
      </div>
    `;
  },
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

const ComponentTooltipTooltipTwoChart: React.FC = () => {
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
        <h2 className="text-xl font-semibold mb-2">Tooltip two</h2>
        <div className="border rounded-lg p-2">
            {/* Pass finalSpec if data is fetched */}
            <G2Chart config={spec} height={400} />
        </div>
     </div>
  );
};

export default ComponentTooltipTooltipTwoChart;
