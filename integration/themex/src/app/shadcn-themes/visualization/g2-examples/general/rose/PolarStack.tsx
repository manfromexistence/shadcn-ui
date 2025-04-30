'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/rose/demo/polar-stack.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const data = [
  //   { year: '2000', '类型 A': 21.0, '类型 B': 16, '类型 C': 8 },
  //   { year: '2001', '类型 A': 25.0, '类型 B': 16, '类型 C': 8 },
  //   { year: '2002', '类型 A': 25.0, '类型 B': 15, '类型 C': 8 },
  //   { year: '2003', '类型 A': 25.0, '类型 B': 14, '类型 C': 7 },
  //   { year: '2004', '类型 A': 25.0, '类型 B': 14, '类型 C': 7 },
  //   { year: '2005', '类型 A': 24.0, '类型 B': 13, '类型 C': 8 },
  //   { year: '2006', '类型 A': 24.0, '类型 B': 14, '类型 C': 7 },
  //   { year: '2007', '类型 A': 26.0, '类型 B': 16, '类型 C': 7 },
  //   { year: '2008', '类型 A': 26.0, '类型 B': 15.2, '类型 C': 8 },
  //   { year: '2009', '类型 A': 27.1, '类型 B': 15.2, '类型 C': 10 },
  //   { year: '2010', '类型 A': 27.5, '类型 B': 15.4, '类型 C': 8 },
  //   { year: '2011', '类型 A': 26.4, '类型 B': 15.2, '类型 C': 9 },
  //   { year: '2012', '类型 A': 28.8, '类型 B': 15.4, '类型 C': 9 },
  //   { year: '2013', '类型 A': 33.3, '类型 B': 16.7, '类型 C': 12 },
  //   { year: '2014', '类型 A': 38.2, '类型 B': 19.5, '类型 C': 18 },
  // ];
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  //   width: 720,
  //   height: 720,
  // });
  // 
  // chart.coordinate({ type: 'polar', innerRadius: 0.1 });
  // 
  // chart
  //   .interval()
  //   .data({
  //     value: data,
  //     transform: [
  //       {
  //         type: 'fold',
  //         fields: ['类型 A', '类型 B', '类型 C'],
  //         key: '难民类型',
  //         value: 'count',
  //       },
  //     ],
  //   })
  // 
  //   .encode('x', 'year')
  //   .encode('y', 'count')
  //   .encode('color', '难民类型')
  //   .scale('x', { padding: 0 })
  //   .style({
  //     lineWidth: 1,
  //     stroke: '#fff',
  //   })
  //   .transform([{ type: 'stackY' }])
  //   .axis('x', {
  //     line: true,
  //     grid: true,
  //     gridLineDash: [0, 0],
  //     gridLineWidth: 1,
  //   })
  //   .axis('y', {
  //     title: false,
  //     line: true,
  //     gridLineWidth: 1,
  //   })
  //   .legend({
  //     color: {
  //       position: 'bottom',
  //       layout: {
  //         justifyContent: 'center',
  //       },
  //     },
  //   })
  //   .state('active', { stroke: 'black', lineWidth: 1, zIndex: 101 })
  //   .state('inactive', { opacity: 0.5, zIndex: 100 });
  // 
  // chart.interaction('tooltip', {
  //   body: false,
  //   crosshairsStroke: 'red',
  //   crosshairsStrokeWidth: 4,
  // });
  // 
  // chart.interaction('elementHighlight', true);
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
  "width": 720,
  "height": 720,
  "type": "interval",
  "dataComment": /* TODO: Define chart data (inline or fetched) */,
  "encode": {
    "x": "year",
    "y": "count",
    "color": "难民类型"
  },
  "scale": {
    "x": {
      "padding": 0
    }
  },
  "axis": {
    "x": /* TODO: Manually convert axis options: {\n    line: true,\n    grid: true,\n    gridLineDash: [0, 0],\n    gridLineWidth: 1,\n  } */,
    "y": /* TODO: Manually convert axis options: {\n    title: false,\n    line: true,\n    gridLineWidth: 1,\n  } */
  },
  "coordinate": {
    "type": "polar",
    "innerRadius": 0.1
  },
  "interaction": {
    "type": "tooltip",
    "optionsComment": /* TODO: Manually convert interaction options: {\n  body: false,\n  crosshairsStroke: 'red',\n  crosshairsStrokeWidth: 4,\n} */
  }
};

const GeneralRosePolarStackChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">R</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart options={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralRosePolarStackChart;
