// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/analysis/group/demo/bar-multi-measure.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://vega.github.io/vega-lite/examples/bar_grouped_repeated.html
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart.data({
  //   type: 'fetch',
  //   value: 'https://assets.antv.antgroup.com/g2/movies.json',
  // });
  // 
  // chart
  //   .interval()
  //   .transform({ type: 'groupX', y: 'sum' })
  //   .axis('y', { labelFormatter: '~s' })
  //   .axis('x', { labelTransform: 'rotate(90)' })
  //   .encode('x', 'Major Genre')
  //   .encode('y', 'Worldwide Gross')
  //   .encode('series', () => 'Worldwide Gross')
  //   .encode('color', () => 'Worldwide Gross')
  //   .tooltip({ channel: 'y', valueFormatter: '~s' });
  // 
  // chart
  //   .interval()
  //   .transform({ type: 'groupX', y: 'sum' })
  //   .encode('x', 'Major Genre')
  //   .encode('y', 'US Gross')
  //   .encode('color', () => 'US Gross')
  //   .encode('series', () => 'US Gross')
  //   .tooltip({ channel: 'y', valueFormatter: '~s' });
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "type": "interval",
  "encode": {
    "x": "Major Genre",
    "y": "US Gross"
  },
  "transform": [
    {
      "type": "groupX",
      "y": "sum"
    },
    {
      "type": "groupX",
      "y": "sum"
    }
  ],
  "axis": {
    "y": {
      "labelFormatter": "~s"
    },
    "x": {
      "labelTransform": "rotate(90)"
    }
  }
};

const AnalysisGroupBarMultiMeasureChart: React.FC = () => {
    
    const chartData: any[] = [];
    const finalSpec: G2Spec = { ...spec, data: chartData };
  

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

export default AnalysisGroupBarMultiMeasureChart;
