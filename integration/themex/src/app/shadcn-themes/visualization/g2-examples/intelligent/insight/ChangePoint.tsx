'use client'; // Assume client component due to G2

import React from 'react';
import G2Chart from '../../../g2-wrapper';
// TODO: Add any necessary imports (e.g., d3, lodash) if used in the original code
// import * as d3 from 'd3';
// import _ from 'lodash';

/*
Original Dumi Example Code from: ../../G2/site/examples/intelligent/insight/demo/change-point.ts
--------------------------------------------------------------------------------
// /**
 * AVA: https://github.com/antvis/AVA
 * g2-extension-ava: https://github.com/antvis/g2-extensions/tree/master/ava
 */
import { Chart } from '@antv/g2';
import { ChangePoint } from '@antv/g2-extension-ava';

const data = [
  {
    date: '2000',
    discount_price: 43.37,
  },
  {
    date: '2001',
    discount_price: 29.34,
  },
  {
    date: '2002',
    discount_price: 49.12,
  },
  {
    date: '2003',
    discount_price: 56.99,
  },
  {
    date: '2004',
    discount_price: 61.23,
  },
  {
    date: '2005',
    discount_price: 781.99,
  },
  {
    date: '2006',
    discount_price: 895.71,
  },
  {
    date: '2007',
    discount_price: 789.24,
  },
  {
    date: '2008',
    discount_price: 793.51,
  },
  {
    date: '2009',
    discount_price: 783.98,
  },
  {
    date: '2010',
    discount_price: 782.78,
  },
  {
    date: '2011',
    discount_price: 797.05,
  },
  {
    date: '2012',
    discount_price: 785.12,
  },
  {
    date: '2013',
    discount_price: 798.85,
  },
  {
    date: '2014',
    discount_price: 734.49,
  },
  {
    date: '2015',
    discount_price: 708.74,
  },
  {
    date: '2016',
    discount_price: 730.55,
  },
];

const chart = new Chart({
  container: 'container',
  autoFit: true,
});

chart.data(data).encode('x', 'date').encode('y', 'discount_price');

chart.line();

chart.mark(ChangePoint);

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

const IntelligentInsightChangePointChart: React.FC = () => {
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
        <h2 className="text-xl font-semibold mb-2">Change point</h2>
        <div className="border rounded-lg p-2">
            {/* Pass finalSpec if data is fetched */}
            <G2Chart config={spec} height={400} />
        </div>
     </div>
  );
};

export default IntelligentInsightChangePointChart;
