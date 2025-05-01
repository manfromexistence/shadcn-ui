// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
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
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "type": "line",
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
  "style": {
    "shape": "trail"
  },
  "tooltip": [
    null
  ],
  "interaction": {}
};

const GeneralLineLineVarSizeFacetChart: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">L</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full border rounded p-2 bg-muted/40"> {/* Adjust height/width as needed */}
        {/* Render chart only when spec is ready (especially after fetching data) */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralLineLineVarSizeFacetChart;
