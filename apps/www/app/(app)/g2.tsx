import { Chart } from '@antv/g2';
import { useEffect, useRef } from 'react';

interface ChartProps {
  data: { genre: string; sold: number }[];
}

const MyChart: React.FC<ChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chart = new Chart({
      container: chartRef.current!,
      autoFit: true,
    });

    chart
      .interval()
      .data(data)
      .encode('x', 'genre')
      .encode('y', 'sold')
      .encode('color', 'genre');

    chart.render();

    return () => {
      chart.destroy();
    };
  }, [data]);

  return <div ref={chartRef} style={{ width: 500, height: 300 }} />;
};

export default MyChart;