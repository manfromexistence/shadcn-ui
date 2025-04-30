import React from 'react';
import { Chart } from '@berryv/g2-react';

interface G2ChartProps {
  config: { [key: string]: any };
  plugins?: any[];
  width?: number;
  height?: number;
}

const G2Chart: React.FC<G2ChartProps> = ({ config, plugins = [], width = 600, height = 400 }) => {
  return (
    <Chart
      style={{ width, height }}
      options={{
        ...config,
        plugins: plugins.length ? plugins : undefined,
        autoFit: true,
      }}
    />
  );
};

export default G2Chart;
