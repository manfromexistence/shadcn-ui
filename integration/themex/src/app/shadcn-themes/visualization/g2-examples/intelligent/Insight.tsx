// Formatting or Write failed for intelligent/insight. Original content below:
// Source: /workspaces/shadcn-ui/G2/site/examples/intelligent/insight/demo/category-outlier.ts
// Error: Expression expected. (121:3)
[0m [90m 119 |[39m   [90m// chart.render();[39m
 [90m 120 |[39m   [90m// [39m
[31m[1m>[22m[39m[90m 121 |[39m   [33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m===[39m[33m==[39m
 [90m     |[39m   [31m[1m^[22m[39m
 [90m 122 |[39m [33m*[39m[33m/[39m
 [90m 123 |[39m
 [90m 124 |[39m[0m

'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../../../g2-wrapper';
// No A11yPlugin detected



/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/intelligent/insight/demo/category-outlier.ts
  ================================================================================
  // /**
  //  * AVA: https://github.com/antvis/AVA
  //  * g2-extension-ava: https://github.com/antvis/g2-extensions/tree/master/ava
  //  */
  // import { Chart } from '@antv/g2';
  // import { CategoryOutlier } from '@antv/g2-extension-ava';
  // 
  // const data = [
  //   {
  //     date: '2000',
  //     fertility: 743.37,
  //   },
  //   {
  //     date: '2001',
  //     fertility: 729.34,
  //   },
  //   {
  //     date: '2002',
  //     fertility: 709.12,
  //   },
  //   {
  //     date: '2003',
  //     fertility: 786.99,
  //   },
  //   {
  //     date: '2004',
  //     fertility: 711.23,
  //   },
  //   {
  //     date: '2005',
  //     fertility: 781.99,
  //   },
  //   {
  //     date: '2006',
  //     fertility: 795.71,
  //   },
  //   {
  //     date: '2007',
  //     fertility: 789.24,
  //   },
  //   {
  //     date: '2008',
  //     fertility: 93.51,
  //   },
  //   {
  //     date: '2009',
  //     fertility: 783.98,
  //   },
  //   {
  //     date: '2010',
  //     fertility: 702.78,
  //   },
  //   {
  //     date: '2011',
  //     fertility: 797.05,
  //   },
  //   {
  //     date: '2012',
  //     fertility: 785.12,
  //   },
  //   {
  //     date: '2013',
  //     fertility: 798.85,
  //   },
  //   {
  //     date: '2014',
  //     fertility: 34.49,
  //   },
  //   {
  //     date: '2015',
  //     fertility: 758.74,
  //   },
  //   {
  //     date: '2016',
  //     fertility: 730.55,
  //   },
  //   {
  //     date: '2017',
  //     fertility: 778.53,
  //   },
  //   {
  //     date: '2018',
  //     fertility: 31.47,
  //   },
  //   {
  //     date: '2019',
  //     fertility: 791,
  //   },
  //   {
  //     date: '2020',
  //     fertility: 796.41,
  //   },
  // ];
  // 
  // const chart = new Chart({
  //   container: 'container',
  //   autoFit: true,
  // });
  // 
  // chart.data(data).encode('x', 'date').encode('y', 'fertility');
  // 
  // chart.interval();
  // 
  // chart.mark(CategoryOutlier);
  // 
  // chart.render();
  // 
  ================================================================================
*/



// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
// Check for '%%FUNCTION...' or '%%HELPER_FUNCTION...' placeholders and replace them manually.
const spec: G2Spec = {
  type: 'interval',
  data: [
    {
      date: '2000',
      fertility: 743.37,
    },
    {
      date: '2001',
      fertility: 729.34,
    },
    {
      date: '2002',
      fertility: 709.12,
    },
    {
      date: '2003',
      fertility: 786.99,
    },
    {
      date: '2004',
      fertility: 711.23,
    },
    {
      date: '2005',
      fertility: 781.99,
    },
    {
      date: '2006',
      fertility: 795.71,
    },
    {
      date: '2007',
      fertility: 789.24,
    },
    {
      date: '2008',
      fertility: 93.51,
    },
    {
      date: '2009',
      fertility: 783.98,
    },
    {
      date: '2010',
      fertility: 702.78,
    },
    {
      date: '2011',
      fertility: 797.05,
    },
    {
      date: '2012',
      fertility: 785.12,
    },
    {
      date: '2013',
      fertility: 798.85,
    },
    {
      date: '2014',
      fertility: 34.49,
    },
    {
      date: '2015',
      fertility: 758.74,
    },
    {
      date: '2016',
      fertility: 730.55,
    },
    {
      date: '2017',
      fertility: 778.53,
    },
    {
      date: '2018',
      fertility: 31.47,
    },
    {
      date: '2019',
      fertility: 791,
    },
    {
      date: '2020',
      fertility: 796.41,
    },
  ],
  encode: {
    x: 'date',
    y: 'fertility',
  },
};;

const Insight: React.FC = () => {
    
    // Use the spec directly (data might be inline or handled elsewhere)
    // Ensure spec is defined before assigning
    const finalSpec: G2Spec = spec || { type: 'invalid', error: 'Spec generation failed' };
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Insight Marks</h2>
      {/* TODO: Add description if available */}
      {/* Container size and overflow similar to TextSearch.tsx */}
      <div className="h-[600px] w-full overflow-auto border rounded p-2 bg-background"> {/* Use bg-background or bg-muted/40 */}
        {/* Render chart only when spec is valid and ready */}
        {(finalSpec && finalSpec.type !== 'invalid') ? (
            <G2Chart config={finalSpec} />
        ) : (
            <div className="p-4 text-center text-red-600">Chart specification is invalid or missing.</div>
        )}
      </div>
    </div>
  );
};

export default Insight;
