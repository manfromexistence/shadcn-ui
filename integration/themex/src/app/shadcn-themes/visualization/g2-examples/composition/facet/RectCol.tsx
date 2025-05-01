// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/composition/facet/demo/rect-col.ts
  ================================================================================
  // /**
  //  * A recreation of one of these demos: https://observablehq.com/@observablehq/plot-facets?collection=@observablehq/plot
  //  */
  // import { Chart } from '@antv/g2';
  // import { groupSort, median } from 'd3-array';
  // 
  // fetch('https://assets.antv.antgroup.com/g2/barley.json')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     const chart = new Chart({
  //       container: 'container',
  //       height: 800,
  //       paddingLeft: 140,
  //       paddingRight: 130,
  //       paddingBottom: 60,
  //     });
  // 
  //     const facetRect = chart
  //       .facetRect()
  //       .data(data)
  //       .encode('y', 'site')
  //       .scale('y', {
  //         domain: groupSort(
  //           data,
  //           (g) => -median(g, (d) => d.yield),
  //           (d) => d.site,
  //         ),
  //       });
  // 
  //     facetRect
  //       .point()
  //       .attr('insetLeft', 5)
  //       .attr('insetRight', 5)
  //       .scale('color', { type: 'ordinal' })
  //       .scale('y', {
  //         domain: groupSort(
  //           data,
  //           (g) => -median(g, (d) => d.yield),
  //           (d) => d.variety,
  //         ),
  //       })
  //       .encode('x', 'yield')
  //       .encode('y', 'variety')
  //       .encode('color', 'year')
  //       .encode('shape', 'hollow')
  //       .axis('y', { labelAutoRotate: false });
  // 
  //     chart.render();
  //   });
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "height": 800,
  "type": "point",
  "scale": {
    "color": {
      "type": "ordinal"
    }
  }
};

const CompositionFacetRectColChart: React.FC = () => {
    
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

export default CompositionFacetRectColChart;
