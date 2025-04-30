'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/geo/geo/demo/choropleth-usa.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://vega.github.io/vega-lite/examples/geo_choropleth.html
  //  */
  // import { Chart, register } from '@antv/g2';
  // import { feature } from 'topojson';
  // 
  // register('data.feature', ({ name }) => {
  //   return (data) => feature(data, data.objects[name]).features;
  // });
  // 
  // fetch('https://assets.antv.antgroup.com/g2/unemployment2.json')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     const chart = new Chart({
  //       container: 'container',
  //       autoFit: true,
  //     });
  // 
  //     chart
  //       .geoPath()
  //       .coordinate({ type: 'albersUsa' })
  //       .data({
  //         type: 'fetch',
  //         value: 'https://assets.antv.antgroup.com/g2/us-10m.json',
  //         transform: [
  //           { type: 'feature', name: 'counties' },
  //           {
  //             type: 'join',
  //             join: data,
  //             on: ['id', 'id'],
  //             select: ['rate'],
  //           },
  //         ],
  //       })
  //       .scale('color', {
  //         palette: 'ylGnBu',
  //         unknown: '#fff',
  //       })
  //       .encode('color', 'rate')
  //       .legend({ color: { layout: { justifyContent: 'center' } } });
  // 
  //     chart.render();
  //   });
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
// Notes:
// - This spec is generated automatically and may require manual adjustments.
// - Review TODO comments for potential issues or missing configurations.
// - Complex logic (custom functions, event handlers) from the original code needs manual integration.
const spec = {
  "type": "json",
  "encode": {
    "color": "rate"
  },
  "scale": {},
  "coordinate": {
    "type": "albersUsa"
  }
};

const GeoGeoChoroplethUsaChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">G</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeoGeoChoroplethUsaChart;
