// @ts-nocheck
'use client';

import React from 'react';
import { type G2Spec } from '@antv/g2';
import G2Chart from '../../../g2-wrapper';




/*
  Original G2 Example Code:
  Source: ../../G2/site/examples/threed/line/demo/spiral.ts
  ================================================================================
  // import { CameraType } from '@antv/g';
  // import { Renderer as WebGLRenderer } from '@antv/g-webgl';
  // import { Plugin as ThreeDPlugin } from '@antv/g-plugin-3d';
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
  // /**
  //  * 3D Spiral
  //  * @see https://plotly.com/javascript/3d-line-plots/
  //  */
  // const pointCount = 500;
  // let r;
  // const data = [];
  // 
  // for (let i = 0; i < pointCount; i++) {
  //   r = i * (pointCount - i);
  //   data.push({
  //     x: r * Math.cos(i / 30),
  //     y: r * Math.sin(i / 30),
  //     z: i,
  //   });
  // }
  // 
  // chart
  //   .line3D()
  //   .data(data)
  //   .encode('x', 'x')
  //   .encode('y', 'y')
  //   .encode('z', 'z')
  //   .encode('size', 4)
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
  //   // Use perspective projection mode.
  //   camera.setPerspective(0.1, 5000, 45, 640 / 480);
  //   camera.rotate(30, 30, 0);
  //   camera.dolly(30);
  //   camera.setType(CameraType.ORBITING);
  // });
  // 
  ================================================================================
*/

// --- Auto-Generated G2 Spec (Needs Review) ---
const spec: G2Spec = {
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
      "gridLineWidth": 2
    },
    "z": {
      "gridLineWidth": 2
    }
  },
  "coordinate": {
    "type": "cartesian3D"
  }
};

const ThreedLineSpiralChart: React.FC = () => {
    
    const finalSpec: G2Spec = spec;
  

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">3</h2>
      {/* TODO: Add description if available */}
      {/* <p className="text-sm text-muted-foreground mb-4">Chart description here...</p> */}
      <div className="h-[400px] w-full"> {/* Adjust height/width as needed */}
        {finalSpec && <G2Chart config={finalSpec} />}
      </div>
    </div>
  );
};

export default ThreedLineSpiralChart;
