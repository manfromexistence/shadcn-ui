// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/composition/facet/demo/rect.ts
  ================================================================================
  // /**
  //  * A recreation of one of these demos: https://observablehq.com/@observablehq/plot-facets?collection=@observablehq/plot
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   paddingBottom: 60,
  //   paddingLeft: 60,
  //   height: 640,
  // });
  // 
  // const facetRect = chart
  //   .facetRect()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/penguins.json',
  //     transform: [
  //       {
  //         type: 'map',
  //         callback: ({
  //           culmen_depth_mm: depth,
  //           culmen_length_mm: length,
  //           ...d
  //         }) => ({
  //           ...d,
  //           culmen_depth_mm: depth === 'NaN' ? NaN : depth,
  //           culmen_length_mm: length === 'NaN' ? NaN : length,
  //         }),
  //       },
  //     ],
  //   })
  //   .encode('x', 'sex')
  //   .encode('y', 'species');
  // 
  // facetRect
  //   .point()
  //   .attr('facet', false)
  //   .attr('frame', false)
  //   .encode('x', 'culmen_depth_mm')
  //   .encode('y', 'culmen_length_mm')
  //   .style('fill', '#ddd')
  //   .style('lineWidth', 0);
  // 
  // facetRect
  //   .point()
  //   .encode('x', 'culmen_depth_mm')
  //   .encode('y', 'culmen_length_mm')
  //   .encode('color', 'island');
  // 
  // chart.render();
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
  "paddingBottom": 60,
  "paddingLeft": 60,
  "height": 640,
  "type": "facetRect",
  "encode": {
    "x": "culmen_depth_mm",
    "y": "culmen_length_mm",
    "color": "island"
  },
  "style": {
    "fill": "#ddd"
  }
};

const CompositionFacetRectChart: React.FC = () => {
    
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">F</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default CompositionFacetRectChart;
