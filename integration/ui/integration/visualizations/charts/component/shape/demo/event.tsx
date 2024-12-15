/** @jsx jsx */
import { jsx, Canvas } from '@antv/f2';

const context = (document.getElementById('container') as HTMLCanvasElement).getContext('2d');

const Shape = () => {
  return (
    <group>
      <rect
        style={{
          x: 10,
          y: 10,
          width: 40,
          height: 40,
          lineWidth: '2px',
          stroke: '#000',
          fill: 'red',
        }}
        onClick={(e)=>{console.log('click', e)}}
      />
      <circle style={{ cx: 80, cy: 30, r: 20, lineWidth: '2px', stroke: '#000', fill: 'red' }}  onPan={(e)=>{console.log('pan', e)}}/>
      <text
        style={{
          x: 120,
          y: 30,
          text: '文本',
          fontSize: 20,
          fill: '#000',
        }}
        onPress={(e)=>{console.log('press', e)}}
      />
    </group>
  );
};

const { props } = (
  <Canvas context={context} pixelRatio={window.devicePixelRatio}>
    <Shape />
  </Canvas>
);

const chart = new Canvas(props);
chart.render();
