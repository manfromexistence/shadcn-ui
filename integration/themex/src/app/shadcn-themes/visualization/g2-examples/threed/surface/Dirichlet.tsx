'use client';

import React from 'react';
import G2Chart from '../../../g2-wrapper';




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
// Notes:
// - This spec is generated automatically and may require manual adjustments.
// - Review TODO comments for potential issues or missing configurations.
// - Complex logic (custom functions, event handlers) from the original code needs manual integration.
const spec = {
  "type": "corelib",
  "encode": {
    "x": "x",
    "y": "y",
    "z": "z"
  },
  "scale": {
    "x": {
      "nice": true
    },
    "y": {
      "nice": true
    },
    "z": {
      "nice": true
    }
  },
  "axis": {
    "x": {
      "gridLineWidth": 1
    },
    "z": {
      "gridLineWidth": 1
    }
  },
  "coordinate": {
    "type": "cartesian3D"
  }
};

const ThreedSurfaceDirichletChart: React.FC = () => {
    
    // Using statically defined spec
    const finalSpec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">3</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {/* Ensure finalSpec is not null/undefined if data fetching occurs */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default ThreedSurfaceDirichletChart;
