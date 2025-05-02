'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../../../g2-wrapper';
// No A11yPlugin detected

/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/threed/scatter/demo/sphere-shape.ts
  ================================================================================
  // import { CameraType } from '@antv/g';
  // import { Renderer as WebGLRenderer } from '@antv/g-webgl';
  // import { Plugin as ThreeDPlugin, DirectionalLight } from '@antv/g-plugin-3d';
  // import { Plugin as ControlPlugin } from '@antv/g-plugin-control';
  // import { Runtime, corelib, extend } from '@antv/g2';
  // import { threedlib } from '@antv/g2-extension-3d';
  // 
  // // Create a WebGL renderer.
  // const renderer = new WebGLRenderer();
  // renderer.registerPlugin(new ThreeDPlugin());
  // renderer.registerPlugin(new ControlPlugin());
  // 
  // // Customize our own Chart with threedlib.
  // const Chart = extend(Runtime, { ...corelib(), ...threedlib() });
  // const chart = new Chart({
  //   container: 'container',
  //   renderer,
  //   depth: 400, // Define the depth of chart.
  // });
  // 
  // chart
  //   .point3D()
  //   .data({
  //     type: 'fetch',
  //     value:
  //       'https://gw.alipayobjects.com/os/bmw-prod/2c813e2d-2276-40b9-a9af-cf0a0fb7e942.csv',
  //   })
  //   .encode('x', 'Horsepower')
  //   .encode('y', 'Miles_per_Gallon')
  //   .encode('z', 'Weight_in_lbs')
  //   .encode('color', 'Origin')
  //   .encode('size', 'Cylinders')
  //   .encode('shape', 'sphere')
  //   .coordinate({ type: 'cartesian3D' })
  //   .scale('x', { nice: true })
  //   .scale('y', { nice: true })
  //   .scale('z', { nice: true })
  //   .legend(false)
  //   .axis('x', { gridLineWidth: 2 })
  //   .axis('y', { gridLineWidth: 2, titleBillboardRotation: -Math.PI / 2 })
  //   .axis('z', { gridLineWidth: 2 });
  // 
  // chart.render().then(() => {
  //   const { canvas } = chart.getContext();
  //   const camera = canvas.getCamera();
  //   camera.setPerspective(0.1, 5000, 45, 640 / 480);
  //   camera.setType(CameraType.ORBITING);
  // 
  //   // Add a directional light into scene.
  //   const light = new DirectionalLight({
  //     style: {
  //       intensity: 3,
  //       fill: 'white',
  //       direction: [-1, 0, 1],
  //     },
  //   });
  //   canvas.appendChild(light);
  // });
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
// Check for '%%FUNCTION...' or '%%HELPER_FUNCTION...' placeholders and replace them manually.
const spec: G2Spec = {
  data: {
    type: 'fetch',
    value:
      'https://gw.alipayobjects.com/os/bmw-prod/2c813e2d-2276-40b9-a9af-cf0a0fb7e942.csv',
  },
  encode: {
    x: 'Horsepower',
    y: 'Miles_per_Gallon',
    z: 'Weight_in_lbs',
    color: 'Origin',
    size: 'Cylinders',
    shape: 'sphere',
  },
  scale: {
    x: {
      nice: true,
    },
    y: {
      nice: true,
    },
    z: {
      nice: true,
    },
  },
  axis: {
    x: {
      gridLineWidth: 2,
    },
    z: {
      gridLineWidth: 2,
    },
  },
  legend: false,
  coordinate: {
    type: 'cartesian3D',
  },
};

const Scatter: React.FC = () => {
  // Use the spec directly (data might be inline or handled elsewhere)
  // Ensure spec is defined before assigning
  const finalSpec: G2Spec = spec || {
    type: 'invalid',
    error: 'Spec generation failed',
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">3D Scatter Chart</h2>
      {/* TODO: Add description if available */}
      {/* Container size and overflow similar to TextSearch.tsx */}
      <div className="h-[600px] w-full overflow-auto border rounded p-2 bg-background">
        {' '}
        {/* Use bg-background or bg-muted/40 */}
        {/* Render chart only when spec is valid and ready */}
        {finalSpec && finalSpec.type !== 'invalid' ? (
          <G2Chart config={finalSpec} />
        ) : (
          <div className="p-4 text-center text-red-600">
            Chart specification is invalid or missing.
          </div>
        )}
      </div>
    </div>
  );
};

export default Scatter;
