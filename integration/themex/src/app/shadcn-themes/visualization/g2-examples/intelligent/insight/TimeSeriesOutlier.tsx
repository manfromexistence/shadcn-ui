'use client'; // Assume client component due to G2

import React from 'react';
import G2Chart from '../../../g2-wrapper';
// TODO: Add any necessary imports (e.g., d3, lodash) if used in the original code
// import * as d3 from 'd3';
// import _ from 'lodash';

/*
Original Dumi Example Code from: ../../G2/site/examples/intelligent/insight/demo/time-series-outlier.ts
--------------------------------------------------------------------------------
// /**
 * AVA: https://github.com/antvis/AVA
 * g2-extension-ava: https://github.com/antvis/g2-extensions/tree/master/ava
 */
import { Chart } from '@antv/g2';
import { TimeSeriesOutlier } from '@antv/g2-extension-ava';

const data = [
  {
    date: '2001',
    discount_price: 727.12,
  },
  {
    date: '2002',
    discount_price: 729.59,
  },
  {
    date: '2003',
    discount_price: 730.21,
  },
  {
    date: '2004',
    discount_price: 732.11,
  },
  {
    date: '2005',
    discount_price: 733.22,
  },
  {
    date: '2006',
    discount_price: 741.19,
  },
  {
    date: '2007',
    discount_price: 742.37,
  },
  {
    date: '2008',
    discount_price: 752.34,
  },
  {
    date: '2009',
    discount_price: 761.12,
  },
  {
    date: '2010',
    discount_price: 783.99,
  },
  {
    date: '2011',
    discount_price: 791.23,
  },
  {
    date: '2012',
    discount_price: 781.99,
  },
  {
    date: '2013',
    discount_price: 835.71,
  },
  {
    date: '2014',
    discount_price: 839.24,
  },
  {
    date: '2015',
    discount_price: 883.51,
  },
  {
    date: '2016',
    discount_price: 873.98,
  },
  {
    date: '2017',
    discount_price: 802.78,
  },
  {
    date: '2018',
    discount_price: 807.05,
  },
  {
    date: '2019',
    discount_price: 885.12,
  },
  {
    date: '2020',
    discount_price: 1018.85,
  },
  {
    date: '2021',
    discount_price: 934.49,
  },
  {
    date: '2022',
    discount_price: 908.74,
  },
  {
    date: '2023',
    discount_price: 930.55,
  },
  {
    date: '2024',
    discount_price: 978.53,
  },
  {
    date: '2025',
    discount_price: 931.47,
  },
  {
    date: '2026',
    discount_price: 891,
  },
  {
    date: '2027',
    discount_price: 836.41,
  },
  {
    date: '2028',
    discount_price: 826.11,
  },
  {
    date: '2029',
    discount_price: 820.11,
  },
  {
    date: '2030',
    discount_price: 811.11,
  },
];

const chart = new Chart({
  container: 'container',
  autoFit: true,
});

chart.data(data).encode('x', 'date').encode('y', 'discount_price');

chart.line();

chart.mark(TimeSeriesOutlier);

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

const IntelligentInsightTimeSeriesOutlierChart: React.FC = () => {
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
        <h2 className="text-xl font-semibold mb-2">Time series outlier</h2>
        <div className="border rounded-lg p-2">
            {/* Pass finalSpec if data is fetched */}
            <G2Chart config={spec} height={400} />
        </div>
     </div>
  );
};

export default IntelligentInsightTimeSeriesOutlierChart;
