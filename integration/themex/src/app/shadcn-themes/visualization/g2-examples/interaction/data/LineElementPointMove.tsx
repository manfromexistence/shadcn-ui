'use client'; // Assume client component due to G2

import React from 'react';
import G2Chart from '../../../g2-wrapper';
// TODO: Add any necessary imports (e.g., d3, lodash) if used in the original code
// import * as d3 from 'd3';
// import _ from 'lodash';

/*
Original Dumi Example Code from: ../../G2/site/examples/interaction/data/demo/line-element-point-move.ts
--------------------------------------------------------------------------------
// import { Chart } from '@antv/g2';

const chart = new Chart({
  container: 'container',
  autoFit: true,
});

chart
  .line()
  .data([
    { year: '1991', value: 3, type: 'type1' },
    { year: '1992', value: 4, type: 'type1' },
    { year: '1993', value: 3.5, type: 'type1' },
    { year: '1994', value: 5, type: 'type1' },
    { year: '1995', value: 4.9, type: 'type1' },
    { year: '1996', value: 2, type: 'type1' },
    { year: '1997', value: 7, type: 'type1' },
    { year: '1998', value: 11, type: 'type1' },
    { year: '1999', value: 13, type: 'type1' },
    { year: '1991', value: 6, type: 'type2' },
    { year: '1992', value: 1, type: 'type2' },
    { year: '1993', value: 4, type: 'type2' },
    { year: '1994', value: 9, type: 'type2' },
    { year: '1995', value: 1.9, type: 'type2' },
    { year: '1996', value: 5, type: 'type2' },
    { year: '1997', value: 4, type: 'type2' },
    { year: '1998', value: 6, type: 'type2' },
    { year: '1999', value: 15, type: 'type2' },
  ])
  .interaction({
    legendFilter: false,
    elementPointMove: {
      pointR: 8,
      pointStrokeWidth: 2,
      pointActiveStroke: '#fff',
      pathLineDash: [2, 4],
      pathStroke: 'red',
      labelFontSize: 14,
      labelY: 24,
    },
  })
  .encode('x', 'year')
  .encode('y', 'value')
  .encode('key', 'type')
  .encode('color', 'type');

chart.render().then(() => {
  chart.on('element-point:select', (v) => {
    const {
      data: { selection },
    } = v;
    console.log(selection, 'selection');
  });

  chart.on('element-point:moved', (v) => {
    const {
      data: { changeData, data },
    } = v;
    console.log(changeData, 'changeData');
    console.log(data, 'data');
  });
});

chart.on('afterrender', () => {
  chart.emit('element-point:select', {
    data: {
      selection: [1, 2],
    },
  });
  // Clear select.
  // chart.emit('element-point:unselect');
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

const InteractionDataLineElementPointMoveChart: React.FC = () => {
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
        <h2 className="text-xl font-semibold mb-2">Line element point move</h2>
        <div className="border rounded-lg p-2">
            {/* Pass finalSpec if data is fetched */}
            <G2Chart config={spec} height={400} />
        </div>
     </div>
  );
};

export default InteractionDataLineElementPointMoveChart;
