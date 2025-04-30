'use client';

import React from 'react';
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
// Notes:
// - This spec is generated automatically and may require manual adjustments.
// - Review TODO comments for potential issues or missing configurations.
// - Complex logic (custom functions, event handlers) from the original code needs manual integration.
const spec = {
  "height": 800,
  "paddingLeft": 140,
  "paddingRight": 130,
  "paddingBottom": 60,
  "type": "json",
  "dataComment": /* TODO: Define chart data (inline or fetched) */,
  "encode": {
    "y": "variety",
    "x": "yield",
    "color": "year",
    "shape": "hollow"
  },
  "scale": {
    "y": /* TODO: Manually convert scale options: {\n        domain: groupSort(\n          data,\n          (g) => -median(g, (d) => d.yield),\n          (d) => d.variety,\n        ),\n      } */,
    "color": {
      "type": "ordinal"
    }
  },
  "axis": {
    "y": {
      "labelAutoRotate": false
    }
  }
};

const CompositionFacetRectColChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">F</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart options={finalSpec} />}
      </div>
    </div>
  );
};

export default CompositionFacetRectColChart;
