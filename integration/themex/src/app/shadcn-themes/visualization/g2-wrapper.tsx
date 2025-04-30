import React, { useEffect, useRef } from 'react';
import { Chart } from '@antv/g2';
import { G2React } from '@berryv/g2-react';
import { Plugin } from '@antv/g2-plugin-ally';

interface G2ChartProps {
  config: (container: HTMLElement) => void | { [key: string]: any };
  plugins?: any[];
  width?: number;
  height?: number;
}

const G2Chart: React.FC<G2ChartProps> = ({ config, plugins = [], width = 600, height = 400 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Initialize the chart with plugins
      chartRef.current = new Chart({
        container: containerRef.current,
        width,
        height,
        autoFit: true,
        plugins: plugins.length ? plugins : undefined,
      });

      // Execute the config function or apply config object
      if (typeof config === 'function') {
        config(containerRef.current);
      } else {
        chartRef.current.options(config);
      }

      // Render the chart
      chartRef.current.render();

      // Cleanup on unmount
      return () => {
        if (chartRef.current) {
          chartRef.current.destroy();
          chartRef.current = null;
        }
      };
    }
  }, [config, plugins, width, height]);

  return (
    <G2React>
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
    </G2React>
  );
};

export default G2Chart;