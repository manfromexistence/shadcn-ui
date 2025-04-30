'use client'; // Assume client component due to G2

import React from 'react';
import G2Chart from '../../../g2-wrapper';
// TODO: Add any necessary imports (e.g., d3, lodash) if used in the original code
// import * as d3 from 'd3';
// import _ from 'lodash';

/*
Original Dumi Example Code from: ../../G2/site/examples/general/pie/demo/pie-base-facet.ts
--------------------------------------------------------------------------------
// import { Chart } from '@antv/g2';

const data = [
  { type: '男性', percent: 56.4, color: '#0a9afe' },
  { type: '女性', percent: 43.6, color: '#f0657d' },
];

const chart = new Chart({
  container: 'container',
  autoFit: true,
});

const facetRect = chart
  .facetRect()
  .data(data)
  .encode('x', 'type')
  .axis(false)
  .legend(false)
  .view()
  .attr('frame', false)
  .coordinate({ type: 'theta', innerRadius: 0.5, outerRadius: 0.8 });

facetRect
  .interval()
  .encode('y', 100)
  .scale('y', { zero: true })
  .style('fill', '#e8e8e8')
  .tooltip(false)
  .animate(false);

facetRect
  .interval()
  .encode('y', 'percent')
  .encode('color', 'color')
  .scale('color', { type: 'identity' })
  .tooltip((data) => ({
    name: data.type,
    value: data.percent,
  }))
  .animate('enter', { type: 'waveIn', duration: 1000 });

facetRect
  .text()
  .encode('text', 'type')
  .style('textAlign', 'center')
  .style('textBaseline', 'middle')
  .style('fontSize', 20)
  .style('color', '#8c8c8c')
  .style('x', '50%')
  .style('y', '50%')
  .style('dy', -20);

facetRect
  .text()
  .encode('text', 'percent')
  .style('textAlign', 'center')
  .style('textBaseline', 'middle')
  .style('fontSize', 30)
  .style('fontWeight', 500)
  .style('color', '#000')
  .style('x', '50%')
  .style('y', '50%')
  .style('dy', 20);

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

const GeneralPiePieBaseFacetChart: React.FC = () => {
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
        <h2 className="text-xl font-semibold mb-2">Pie base facet</h2>
        <div className="border rounded-lg p-2">
            {/* Pass finalSpec if data is fetched */}
            <G2Chart config={spec} height={400} />
        </div>
     </div>
  );
};

export default GeneralPiePieBaseFacetChart;
