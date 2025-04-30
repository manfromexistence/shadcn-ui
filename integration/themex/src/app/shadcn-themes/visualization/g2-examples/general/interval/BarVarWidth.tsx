// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/interval/demo/bar-var-width.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   width: 1000,
  // });
  // 
  // chart
  //   .interval()
  //   .data({
  //     type: 'fetch',
  //     value:
  //       'https://gw.alipayobjects.com/os/bmw-prod/90873879-09d7-4842-a493-03fb560267bc.csv',
  //   })
  //   .encode('x', 'country')
  //   .encode('y', 'value')
  //   .encode('color', 'country')
  //   .encode('size', 'gdp')
  //   .scale('size', { range: [10, 60] })
  //   .legend('size', false)
  //   .axis('y', { labelFormatter: '~s' })
  //   .tooltip(['value', 'gdp']);
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "width": 1000,
  "type": "interval",
  "encode": {
    "x": "country",
    "y": "value",
    "color": "country",
    "size": "gdp"
  },
  "scale": {
    "size": {
      "range": [
        10,
        60
      ]
    }
  },
  "axis": {
    "y": {
      "labelFormatter": "~s"
    }
  },
  "legend": {
    "size": false
  }
};

const GeneralIntervalBarVarWidthChart: React.FC = () => {
    
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">I</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralIntervalBarVarWidthChart;
