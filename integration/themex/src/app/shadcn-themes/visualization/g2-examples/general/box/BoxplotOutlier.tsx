// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/box/demo/boxplot-outlier.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   inset: 6,
  //   autoFit: true,
  // });
  // 
  // chart
  //   .boxplot()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/morley.json',
  //   })
  //   .encode('x', 'Expt')
  //   .encode('y', 'Speed');
  // 
  // chart.render();
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "data": {
    "type": "fetch",
    "value": "https://assets.antv.antgroup.com/g2/morley.json"
  }
};

const GeneralBoxBoxplotOutlierChart: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">B</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full border rounded p-2 bg-muted/40"> {/* Adjust height/width as needed */}
        {/* Render chart only when spec is ready (especially after fetching data) */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralBoxBoxplotOutlierChart;
