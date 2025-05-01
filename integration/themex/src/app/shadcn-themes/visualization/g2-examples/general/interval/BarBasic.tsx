// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/general/interval/demo/bar-basic.ts
  ================================================================================
  // import { Chart } from '@antv/g2';
  // 
  // const data = [
  //   { letter: 'A', frequency: 0.08167 },
  //   { letter: 'B', frequency: 0.01492 },
  //   { letter: 'C', frequency: 0.02782 },
  //   { letter: 'D', frequency: 0.04253 },
  //   { letter: 'E', frequency: 0.12702 },
  //   { letter: 'F', frequency: 0.02288 },
  //   { letter: 'G', frequency: 0.02015 },
  //   { letter: 'H', frequency: 0.06094 },
  //   { letter: 'I', frequency: 0.06966 },
  //   { letter: 'J', frequency: 0.00153 },
  //   { letter: 'K', frequency: 0.00772 },
  //   { letter: 'L', frequency: 0.04025 },
  //   { letter: 'M', frequency: 0.02406 },
  //   { letter: 'N', frequency: 0.06749 },
  //   { letter: 'O', frequency: 0.07507 },
  //   { letter: 'P', frequency: 0.01929 },
  //   { letter: 'Q', frequency: 0.00095 },
  //   { letter: 'R', frequency: 0.05987 },
  //   { letter: 'S', frequency: 0.06327 },
  //   { letter: 'T', frequency: 0.09056 },
  //   { letter: 'U', frequency: 0.02758 },
  //   { letter: 'V', frequency: 0.00978 },
  //   { letter: 'W', frequency: 0.0236 },
  //   { letter: 'X', frequency: 0.0015 },
  //   { letter: 'Y', frequency: 0.01974 },
  //   { letter: 'Z', frequency: 0.00074 },
  // ];
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart.interval().data(data).encode('x', 'letter').encode('y', 'frequency');
  // 
  // chart.render();
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
const spec: G2Spec = {
  "type": "interval"
};

const GeneralIntervalBarBasicChart: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">I</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full border rounded p-2 bg-muted/40"> {/* Adjust height/width as needed */}
        {/* Render chart only when spec is ready (especially after fetching data) */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default GeneralIntervalBarBasicChart;
