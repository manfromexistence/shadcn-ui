// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/line/demo/line-threshold.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://observablehq.com/@d3/threshold-encoding
  //  */
  // import { Chart } from '@antv/g2';
  // import { median } from 'd3-array';
  // 
  // fetch('https://assets.antv.antgroup.com/g2/temperatures2.json')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     const medianValue = median(data, (d) => d.value);
  // 
  //     const chart = new Chart({
  //       container: 'container',
  //       autoFit: true,
  //     });
  // 
  //     chart
  //       .line()
  //       .data(data)
  //       .scale('y', { nice: true })
  //       .scale('x', { utc: true })
  //       .scale('color', {
  //         type: 'threshold',
  //         domain: [medianValue],
  //         range: ['black', 'red'],
  //       })
  //       .encode('x', (d) => new Date(d.date))
  //       .encode('y', 'value')
  //       .encode('shape', 'hvh')
  //       .encode('color', 'value')
  //       .encode('series', () => undefined)
  //       .style('gradient', 'y')
  //       .style('lineWidth', 1.5)
  //       .style('lineJoin', 'round')
  //       .axis('x', { title: 'date' });
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
    "y": "value",
    "shape": "hvh",
    "color": "value"
  },
  "scale": {
    "y": {
      "nice": true
    },
    "x": {
      "utc": true
    }
  },
  "axis": {
    "x": {
      "title": "date"
    }
  },
  "style": {
    "gradient": "y",
    "lineJoin": "round"
  }
};

const GeneralLineLineThresholdChart: React.FC = () => {
    
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">L</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralLineLineThresholdChart;
