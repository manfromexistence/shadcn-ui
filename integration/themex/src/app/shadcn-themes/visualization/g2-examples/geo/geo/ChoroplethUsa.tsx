// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
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
const spec: G2Spec = {
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
    
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">G</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeoGeoChoroplethUsaChart;
