'use client'; // Assume client component due to G2

import React from 'react';
import G2Chart from '../../../g2-wrapper';
// TODO: Add any necessary imports (e.g., d3, lodash) if used in the original code
// import * as d3 from 'd3';
// import _ from 'lodash';

/*
Original Dumi Example Code from: ../../G2/site/examples/component/legend/demo/symbol.ts
--------------------------------------------------------------------------------
// import { Chart, register, type SymbolFactor } from '@antv/g2';

const customSquare = Object.assign<SymbolFactor, Partial<SymbolFactor>>(
  (x, y, r) => {
    const radius = r / 2;

    return [
      ['M', x + radius, y - r],
      ['L', x - radius, y - r],
      ['A', radius, radius, 0, 0, 0, x - r, y - radius],
      ['L', x - r, y + radius],
      ['A', radius, radius, 0, 0, 0, x - radius, y + r],
      ['L', x + radius, y + r],
      ['A', radius, radius, 0, 0, 0, x + r, y + radius],
      ['L', x + r, y - radius],
      ['A', radius, radius, 0, 0, 0, x + radius, y - r],
      ['Z'],
    ];
  },
  {
    // 空心请设置为 ['stroke', 'lineWidth']
    style: ['fill']
  },
);

register('symbol.customSquare', customSquare);

const chart = new Chart({
  container: 'container',
});

const data = [
  { genre: 'Sports', sold: 275 },
  { genre: 'Strategy', sold: 115 },
  { genre: 'Action', sold: 120 },
  { genre: 'Shooter', sold: 350 },
  { genre: 'Other', sold: 150 },
];

const colorField = 'genre';

chart
  .interval()
  .data(data)
  .encode('x', 'genre')
  .encode('y', 'sold')
  .encode('color', colorField)
  .legend({
    color: {
      itemMarker: 'customSquare',
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

const ComponentLegendSymbolChart: React.FC = () => {
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
        <h2 className="text-xl font-semibold mb-2">Symbol</h2>
        <div className="border rounded-lg p-2">
            {/* Pass finalSpec if data is fetched */}
            <G2Chart config={spec} height={400} />
        </div>
     </div>
  );
};

export default ComponentLegendSymbolChart;
