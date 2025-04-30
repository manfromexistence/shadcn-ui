'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/interval/demo/bar-flex.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://www.highcharts.com.cn/demo/highcharts/variwide
  //  */
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
  //   .transform({ type: 'flexX', field: 'gdp' })
  //   .encode('x', 'country')
  //   .encode('y', 'value')
  //   .encode('color', 'country')
  //   .axis('y', { labelFormatter: '~s' })
  //   .tooltip(['value', 'gdp']);
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
  "width": 1000,
  "type": "interval",
  "encode": {
    "x": "country",
    "y": "value",
    "color": "country"
  },
  "transform": [
    {
      "type": "flexX",
      "field": "gdp"
    }
  ],
  "axis": {
    "y": {
      "labelFormatter": "~s"
    }
  }
};

const GeneralIntervalBarFlexChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">I</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralIntervalBarFlexChart;
