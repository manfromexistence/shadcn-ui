'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../../../g2-wrapper';
// No A11yPlugin detected

/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/threed/surface/demo/dirichlet.ts
  ================================================================================
  // import { CameraType } from '@antv/g';
  // import { Renderer as WebGLRenderer } from '@antv/g-webgl';
  // import { Plugin as ThreeDPlugin } from '@antv/g-plugin-3d';
  // import { Plugin as ControlPlugin } from '@antv/g-plugin-control';
  // import { Runtime, corelib, extend } from '@antv/g2';
  // import { threedlib } from '@antv/g2-extension-3d';
  // import diric from 'dirichlet';
  // 
  // // We set the width/height to 100;
  // const size = 100;
  // const points: { x: number; y: number; z: number }[] = [];
  // for (let i = 0; i < size + 1; i++) {
  //   for (let j = 0; j < size + 1; j++) {
  //     points.push({
  //       x: i,
  //       y: j,
  //       z:
  //         0.1 *
  //         size *
  //         diric(5, (5.0 * (i - size / 2)) / size) *
  //         diric(5, (5.0 * (j - size / 2)) / size),
  //     });
  //   }
  // }
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
  //   width: 600,
  //   height: 600,
  //   depth: 300, // Define the depth of chart.
  // });
  // 
  // chart
  //   .surface3D()
  //   .data(points)
  //   .encode('x', 'x')
  //   .encode('y', 'y')
  //   .encode('z', 'z')
  //   .coordinate({ type: 'cartesian3D' })
  //   .scale('x', { nice: true })
  //   .scale('y', { nice: true })
  //   .scale('z', { nice: true })
  //   .legend(false)
  //   .axis('x', { gridLineWidth: 1 })
  //   .axis('y', { gridLineWidth: 1, titleBillboardRotation: -Math.PI / 2 })
  //   .axis('z', { gridLineWidth: 1 });
  // 
  // chart.render().then(() => {
  //   const { canvas } = chart.getContext();
  //   const camera = canvas.getCamera();
  //   // Use perspective projection mode.
  //   camera.setPerspective(0.1, 3000, 45, 600 / 600);
  //   camera.rotate(30, 30, 0);
  //   camera.dolly(60);
  //   camera.setType(CameraType.ORBITING);
  // });
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
// Note: Functions, complex expressions, and some options might require manual conversion.
// Check for '%%FUNCTION...' or '%%HELPER_FUNCTION...' placeholders and replace them manually.
const spec: G2Spec = {
  width: 600,
  height: 600,
  encode: {
    x: 'x',
    y: 'y',
    z: 'z',
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
      gridLineWidth: 1,
    },
    z: {
      gridLineWidth: 1,
    },
  },
  legend: false,
  coordinate: {
    type: 'cartesian3D',
  },
};

const Surface: React.FC = () => {
  // Use the spec directly (data might be inline or handled elsewhere)
  // Ensure spec is defined before assigning
  const finalSpec: G2Spec = spec || {
    type: 'invalid',
    error: 'Spec generation failed',
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">3D Surface Chart</h2>
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

export default Surface;
