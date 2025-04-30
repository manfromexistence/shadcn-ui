'use client'; // Assume client component due to G2

import React from 'react';
import G2Chart from '../../../g2-wrapper';
// TODO: Add any necessary imports (e.g., d3, lodash) if used in the original code
// import * as d3 from 'd3';
// import _ from 'lodash';

/*
Original Dumi Example Code from: ../../G2/site/examples/composition/facet/demo/rect-bar.ts
--------------------------------------------------------------------------------
// import { Chart } from '@antv/g2';

const chart = new Chart({
  container: 'container',
  width: 800,
  paddingLeft: 40,
  paddingBottom: 40,
});

const days = ['Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thur.', 'Fri.', 'Sat.'];
const mockData = () => {
  const names = ['Eat', 'Play', 'Sleep'];
  const week = (date) => {
    const currentDate = date.getDate();
    const newDate = new Date(date);
    const firstDay = new Date(newDate.setDate(1)).getDay();
    return Math.ceil((currentDate + firstDay) / 7);
  };
  const day = (date) => date.getDay();
  return Array.from({ length: 30 }, (_, i) => {
    const date = new Date(2022, 5, i + 1);
    return names.map((name) => ({
      activity: name,
      value: Math.random(),
      week: `${week(date)}`,
      day: days[day(date)],
    }));
  }).flat(Infinity);
};

const facetRect = chart
  .facetRect()
  .data(mockData())
  .encode('x', 'day')
  .encode('y', 'week')
  .scale('x', { domain: days })
  .legend('color', { position: 'right' })
  .attr('paddingRight', 100);

facetRect
  .interval()
  .transform({ type: 'stackY' })
  .axis('x', { labelAutoRotate: false })
  .encode('x', 'activity')
  .encode('y', 'value')
  .encode('color', 'activity');

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

const CompositionFacetRectBarChart: React.FC = () => {
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
        <h2 className="text-xl font-semibold mb-2">Rect bar</h2>
        <div className="border rounded-lg p-2">
            {/* Pass finalSpec if data is fetched */}
            <G2Chart config={spec} height={400} />
        </div>
     </div>
  );
};

export default CompositionFacetRectBarChart;
