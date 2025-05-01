// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/composition/facet/demo/rect-frame.ts
  ================================================================================
  // /**
  //  * A recreation of one of these demos: https://observablehq.com/@observablehq/plot-facets?collection=@observablehq/plot
  //  */
  // import { Chart } from '@antv/g2';
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   width: 928,
  //   height: 320,
  //   paddingLeft: 60,
  //   paddingBottom: 60,
  // });
  // 
  // const facetRect = chart
  //   .facetRect()
  //   .data({
  //     type: 'fetch',
  //     value: 'https://assets.antv.antgroup.com/g2/anscombe.json',
  //   })
  //   .encode('x', 'series');
  // 
  // facetRect
  //   .point()
  //   .attr('inset', 10)
  //   .encode('x', 'x')
  //   .encode('y', 'y')
  //   .style('stroke', '#000')
  //   .attr('frame', false) // Hide the default frame.
  //   .viewStyle('plotStroke', 'red') // Customize the plot area to mock a frame.
  //   .viewStyle('plotLineWidth', 2)
  //   .viewStyle('plotOpacity', 0.5);
  // 
  // chart.render();
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "width": 928,
  "height": 320,
  "type": "point",
  "data": {
    "type": "fetch",
    "value": "https://assets.antv.antgroup.com/g2/anscombe.json"
  },
  "style": {
    "stroke": "#000"
  }
};

const CompositionFacetRectFrameChart: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">F</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full border rounded p-2 bg-muted/40"> {/* Adjust height/width as needed */}
        {/* Render chart only when spec is ready (especially after fetching data) */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default CompositionFacetRectFrameChart;
