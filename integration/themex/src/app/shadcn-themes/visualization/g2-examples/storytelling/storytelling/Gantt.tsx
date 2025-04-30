'use client'; // Assume client component due to G2

import React from 'react';
import G2Chart from '../../../g2-wrapper';
// TODO: Add any necessary imports (e.g., d3, lodash) if used in the original code
// import * as d3 from 'd3';
// import _ from 'lodash';

/*
Original Dumi Example Code from: ../../G2/site/examples/storytelling/storytelling/demo/gantt.ts
--------------------------------------------------------------------------------
// /**
 * A recreation of this demo: https://canisjs.github.io/canis-editor/index.html?exmp=gantt_1
 */
import { Chart } from '@antv/g2';

const events = [
  { name: 'event planning', startTime: 1, endTime: 4 },
  { name: 'layout logistics', startTime: 3, endTime: 13 },
  { name: 'select vendors', startTime: 5, endTime: 8 },
  { name: 'hire venue', startTime: 9, endTime: 13 },
  { name: 'hire caterer', startTime: 10, endTime: 14 },
  { name: 'hire event decorators', startTime: 12, endTime: 17 },
  { name: 'rehearsal', startTime: 14, endTime: 16 },
  { name: 'event celebration', startTime: 17, endTime: 18 },
];

const chart = new Chart({
  container: 'container',
  autoFit: true,
});

chart.coordinate({ transform: [{ type: 'transpose' }] });

chart
  .interval()
  .data(events)
  .encode('x', 'name')
  .encode('y', ['endTime', 'startTime'])
  .encode('color', 'name')
  .encode('enterDuration', (d) => d.endTime - d.startTime)
  .encode('enterDelay', 'startTime')
  .scale('enterDuration', {
    zero: true,
    range: [0, 3000],
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

const StorytellingStorytellingGanttChart: React.FC = () => {
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
        <h2 className="text-xl font-semibold mb-2">Gantt</h2>
        <div className="border rounded-lg p-2">
            {/* Pass finalSpec if data is fetched */}
            <G2Chart config={spec} height={400} />
        </div>
     </div>
  );
};

export default StorytellingStorytellingGanttChart;
