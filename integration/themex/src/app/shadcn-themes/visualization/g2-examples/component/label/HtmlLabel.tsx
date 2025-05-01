// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/component/label/demo/htmlLabel.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // const data = [
  //   { repo: 'G', star: 918 },
  //   { repo: 'G2', star: 11688 },
  //   { repo: 'G6', star: 10045 },
  //   { repo: 'L7', star: 3125 },
  //   { repo: 'F2', star: 7820 },
  //   { repo: 'S2', star: 1231 },
  //   { repo: 'X6', star: 4755 },
  // ];
  // 
  // chart
  //   .interval()
  //   .data(data)
  //   .encode('x', 'repo')
  //   .encode('y', 'star')
  //   .encode('color', 'repo')
  //   .label({
  //     text: 'star',
  //     render: (text, datum) => {
  //       return `
  //         <div style="left:-50%;top:-20px;position:relative;font-size:14px;">
  //           <span>${datum.repo}</span>
  //           :
  //           <a href="https://github.com/antvis/${datum.repo}" target="_blank">${datum.star}</a>
  //         </div>
  //       `;
  //     },
  //   })
  //   .legend(false);
  // 
  // chart.render();
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "type": "interval",
  "legend": false,
  "labels": [
    null
  ]
};

const ComponentLabelHtmlLabelChart: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">L</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full border rounded p-2 bg-muted/40"> {/* Adjust height/width as needed */}
        {/* Render chart only when spec is ready (especially after fetching data) */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default ComponentLabelHtmlLabelChart;
