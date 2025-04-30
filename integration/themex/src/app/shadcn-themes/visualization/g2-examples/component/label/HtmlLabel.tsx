'use client';

import React from 'react';
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
// Notes:
// - This spec is generated automatically and may require manual adjustments.
// - Review TODO comments for potential issues or missing configurations.
// - Complex logic (custom functions, event handlers) from the original code needs manual integration.
const spec = {
  "type": "interval",
  "dataComment": /* TODO: Define chart data (inline or fetched) */,
  "encode": {
    "x": "repo",
    "y": "star",
    "color": "repo"
  },
  "labels": [
    /* TODO: Manually convert label options: {\n    text: 'star',\n    render: (text, datum) => {\n      return `\n        <div style=\"left:-50%;top:-20px;position:relative;font-size:14px;\">\n          <span>${datum.repo}</span>\n          :\n          <a href=\"https://github.com/antvis/${datum.repo}\" target=\"_blank\">${datum.star}</a>\n        </div>\n      `;\n    },\n  } */
  ]
};

const ComponentLabelHtmlLabelChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">L</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart options={finalSpec} />}
      </div>
    </div>
  );
};

export default ComponentLabelHtmlLabelChart;
