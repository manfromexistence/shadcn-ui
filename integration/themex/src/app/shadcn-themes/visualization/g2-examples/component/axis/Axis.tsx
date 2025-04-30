'use client'; // Assume client component due to G2

import React from 'react';
import G2Chart from '../../../g2-wrapper';
// TODO: Add any necessary imports (e.g., d3, lodash) if used in the original code
// import * as d3 from 'd3';
// import _ from 'lodash';

/*
Original Dumi Example Code from: ../../G2/site/examples/component/axis/demo/axis.ts
--------------------------------------------------------------------------------
// import { Chart } from '@antv/g2';

const chart = new Chart({
  container: 'container',
  autoFit: true,
});

chart.data([
  {
    pos: 1,
    no: 1,
    driver: 'Max Verstappen',
    car: 'RED BULL RACING HONDA RBPT',
    laps: 57,
    time: '1:33:56.736',
    pts: 25,
  },
  {
    pos: 2,
    no: 11,
    driver: 'Sergio Perez',
    car: 'RED BULL RACING HONDA RBPT',
    laps: 57,
    time: '+11.987s',
    pts: 18,
  },
  {
    pos: 3,
    no: 14,
    driver: 'Fernando Alonso',
    car: 'ASTON MARTIN ARAMCO MERCEDES',
    laps: 57,
    time: '+38.637s',
    pts: 15,
  },
  {
    pos: 4,
    no: 55,
    driver: 'Carlos Sainz',
    car: 'FERRARI',
    laps: 57,
    time: '+48.052s',
    pts: 12,
  },
  {
    pos: 5,
    no: 44,
    driver: 'Lewis Hamilton',
    car: 'MERCEDES',
    laps: 57,
    time: '+50.977s',
    pts: 10,
  },
]);

function medal(ranking) {
  if (ranking > 2) return `第${ranking + 1}名`;
  const { document } = chart.getContext().canvas!;
  const group = document.createElement('g', {});
  const size = ranking === 0 ? 20 : 15;
  const icon = document.createElement('image', {
    style: {
      src: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*1NiMRKb2sfMAAAAAAAAAAAAADmJ7AQ/original',
      width: size,
      height: size,
      transform: `translate(-${size / 2}, -${size / 2})`,
    },
  });
  const text = ['冠军🏆', '亚军🥈', '季军🥉'][ranking];
  const label = document.createElement('text', {
    style: {
      text,
      fill: 'gray',
      textAlign: 'center',
      transform: `translate(0, 35)`,
    },
  });

  group.appendChild(icon);
  group.appendChild(label);
  return group;
}

chart
  .interval()
  .encode('x', 'pos')
  .encode('y', 'pts')
  .encode('color', 'pts')
  .axis({
    x: {
      title: 'FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2023 - RACE RESULT',
      size: 80,
      labelFormatter: (datum, index) => medal(index),
    },
    y: false,
  })
  .label({
    text: 'driver',
    transform: [{ type: 'contrastReverse' }],
  })
  .label({
    text: 'time',
    transform: [{ type: 'contrastReverse' }],
    dy: 20,
    fontStyle: 'italic',
  })
  .tooltip({ title: 'car' })
  .legend(false);

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

const ComponentAxisAxisChart: React.FC = () => {
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
        <h2 className="text-xl font-semibold mb-2">Axis</h2>
        <div className="border rounded-lg p-2">
            {/* Pass finalSpec if data is fetched */}
            <G2Chart config={spec} height={400} />
        </div>
     </div>
  );
};

export default ComponentAxisAxisChart;
