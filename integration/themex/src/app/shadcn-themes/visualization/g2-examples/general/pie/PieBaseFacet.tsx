'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/pie/demo/pie-base-facet.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const data = [
  //   { type: '男性', percent: 56.4, color: '#0a9afe' },
  //   { type: '女性', percent: 43.6, color: '#f0657d' },
  // ];
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // const facetRect = chart
  //   .facetRect()
  //   .data(data)
  //   .encode('x', 'type')
  //   .axis(false)
  //   .legend(false)
  //   .view()
  //   .attr('frame', false)
  //   .coordinate({ type: 'theta', innerRadius: 0.5, outerRadius: 0.8 });
  // 
  // facetRect
  //   .interval()
  //   .encode('y', 100)
  //   .scale('y', { zero: true })
  //   .style('fill', '#e8e8e8')
  //   .tooltip(false)
  //   .animate(false);
  // 
  // facetRect
  //   .interval()
  //   .encode('y', 'percent')
  //   .encode('color', 'color')
  //   .scale('color', { type: 'identity' })
  //   .tooltip((data) => ({
  //     name: data.type,
  //     value: data.percent,
  //   }))
  //   .animate('enter', { type: 'waveIn', duration: 1000 });
  // 
  // facetRect
  //   .text()
  //   .encode('text', 'type')
  //   .style('textAlign', 'center')
  //   .style('textBaseline', 'middle')
  //   .style('fontSize', 20)
  //   .style('color', '#8c8c8c')
  //   .style('x', '50%')
  //   .style('y', '50%')
  //   .style('dy', -20);
  // 
  // facetRect
  //   .text()
  //   .encode('text', 'percent')
  //   .style('textAlign', 'center')
  //   .style('textBaseline', 'middle')
  //   .style('fontSize', 30)
  //   .style('fontWeight', 500)
  //   .style('color', '#000')
  //   .style('x', '50%')
  //   .style('y', '50%')
  //   .style('dy', 20);
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
  "type": "facetRect",
  "dataComment": /* TODO: Define chart data (inline or fetched) */,
  "encode": {
    "x": "type",
    "y": "percent",
    "color": "color",
    "text": "percent"
  },
  "scale": {
    "y": {
      "zero": true
    },
    "color": {
      "type": "identity"
    }
  },
  "style": {
    "fill": "#e8e8e8",
    "textAlign": "center",
    "textBaseline": "middle",
    "fontSize": /* TODO: Convert style value/expression: 30 */,
    "color": "#000",
    "x": "50%",
    "y": "50%",
    "dy": /* TODO: Convert style value/expression: 20 */,
    "fontWeight": /* TODO: Convert style value/expression: 500 */
  },
  "coordinate": {
    "type": "theta",
    "innerRadius": 0.5,
    "outerRadius": 0.8
  }
};

const GeneralPiePieBaseFacetChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">P</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart options={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralPiePieBaseFacetChart;
