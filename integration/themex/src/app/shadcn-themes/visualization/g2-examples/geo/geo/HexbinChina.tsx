'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/geo/geo/demo/hexbin-china.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // import DataSet from '@antv/data-set';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart
  //   .polygon()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/hexbin-china.json',
  //     transform: [
  //       {
  //         type: 'custom',
  //         callback: (data) => {
  //           const dv = new DataSet.View().source(data).transform({
  //             type: 'bin.hexagon',
  //             fields: ['longitude', 'latitude'],
  //             binWidth: [2, 3],
  //             as: ['longitude', 'latitude', 'count'],
  //           });
  //           return dv.rows;
  //         },
  //       },
  //     ],
  //   })
  //   .encode('x', 'longitude')
  //   .encode('y', 'latitude')
  //   .encode('color', 'count')
  //   .scale('color', {
  //     range: '#BAE7FF-#1890FF-#0050B3',
  //   })
  //   .style('lineWidth', 5)
  //   .style('stroke', '#fff')
  //   .axis(false)
  //   .legend(false)
  //   .tooltip({
  //     field: 'count',
  //   })
  //   .state('active', { fill: 'orange' })
  //   .state('inactive', { opacity: 0.8 })
  //   .interaction('elementHighlight', true);
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
// Notes:
// - This spec is generated automatically and may require manual adjustments.
// - Review TODO comments for potential issues or missing configurations.
// - Complex logic (custom functions, event handlers) from the original code needs manual integration.
const spec = {
  "type": "polygon",
  "encode": {
    "x": "longitude",
    "y": "latitude",
    "color": "count"
  },
  "transform": [
    null
  ],
  "scale": {},
  "style": {
    "stroke": "#fff"
  },
  "interaction": {
    "type": "elementHighlight"
  }
};

const GeoGeoHexbinChinaChart: React.FC = () => {
    
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

export default GeoGeoHexbinChinaChart;
