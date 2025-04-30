'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/line/demo/line-var-size-facet.ts
  ================================================================================
  // /**
  //  * A recreation of this demo: https://vega.github.io/vega-lite/examples/trail_comet.html
  //  */
  // import { Chart } from '@antv/g2';
  // import { rollup } from 'd3-array';
  // 
  // fetch('https://assets.antv.antgroup.com/g2/barley.json')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     const key = (d) => `${d.site},${d.variety}`;
  //     const keyDelta = rollup(
  //       data,
  //       ([a, b]) => {
  //         if (b.year < a.year) [a, b] = [b, a];
  //         return b.yield - a.yield;
  //       },
  //       key,
  //     );
  // 
  //     const chart = new Chart({
  //       container: 'container',
  //       paddingLeft: 150,
  //       paddingBottom: 30,
  //     });
  // 
  //     const facet = chart.facetRect().data(data).encode('x', 'site');
  // 
  //     facet
  //       .line()
  //       .encode('x', (d) => `${d.year}`)
  //       .encode('y', 'variety')
  //       .encode('series', 'variety')
  //       .encode('color', (d) => keyDelta.get(key(d)))
  //       .encode('size', 'yield')
  //       .tooltip({ title: '', items: [{ field: 'year' }, { field: 'yield' }] })
  //       .scale('size', { range: [0, 12] })
  //       .scale('color', { palette: 'rdBu' })
  //       .style('shape', 'trail')
  //       .legend('color', { title: 'yield delta' })
  //       .attr('frame', false)
  //       .interaction('tooltip', { series: false });
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
  "paddingLeft": 150,
  "paddingBottom": 30,
  "type": "json",
  "encode": {
    "y": "variety",
    "series": "variety",
    "size": "yield"
  },
  "scale": {
    "size": {
      "range": [
        0,
        12
      ]
    },
    "color": {
      "palette": "rdBu"
    }
  },
  "legend": {},
  "style": {
    "shape": "trail"
  },
  "interaction": {
    "type": "tooltip"
  }
};

const GeneralLineLineVarSizeFacetChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">L</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralLineLineVarSizeFacetChart;
