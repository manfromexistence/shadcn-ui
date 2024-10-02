"use client"
import React, { useRef, useEffect } from 'react';

export default function FluidSimulation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas:any = canvasRef.current;
    const gl:any = canvas.getContext('webgl2');
    function render() {
      requestAnimationFrame(render);
    }
    render();
  }, []);

  return (
    <canvas ref={canvasRef} width={500} height={300} />
  );
}