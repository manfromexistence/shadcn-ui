'use client';

import React, { useRef, useEffect } from 'react';
import { Chart } from '@antv/g2';
import { Plugin } from '@antv/g-plugin-a11y'; // Import the A11y plugin

// --- React Component ---
const AccessibleTextSearchingTextSearchChart: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  // Helper functions from the original example
  const labelFormatter = (d: number): string => Math.abs(d) + (d < 0 ? 'BC' : d > 0 ? 'AC' : '');
  const left = (d: { start: number; end: number }): boolean => d.end > -1500 && d.start > -3000;

  // Initialize chart
  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize the A11y plugin
    const plugin = new Plugin({ enableExtractingText: true });

    // Create new chart instance
    chartRef.current = new Chart({
      container: containerRef.current,
      // Use autoFit instead of fixed width/height for responsiveness
      autoFit: true,
      // Set height explicitly if needed, or let autoFit manage it
      height: 1000, // Match original example height
      plugins: [plugin], // Register the plugin
    });

    const chart = chartRef.current;

    // Apply chart configurations from the original example
    chart.coordinate({ transform: [{ type: 'transpose' }] });

    chart
      .interval()
      .data({
        type: 'fetch',
        value: 'https://assets.antv.antgroup.com/g2/world-history.json',
      })
      .transform({ type: 'sortX', by: 'y' }) // Sort civilizations on the x-axis based on y-values
      .transform({ type: 'sortColor', by: 'y', reducer: 'min' }) // Sort colors based on the minimum y-value
      .axis('x', false) // Hide the x-axis
      .encode('x', 'civilization') // Map civilization to the x-channel
      .encode('y', ['start', 'end']) // Map start and end dates to the y-channel
      .encode('color', 'region') // Map region to the color channel
      .scale('color', { palette: 'set2' }) // Use the 'set2' color palette
      .label({
        text: 'civilization', // Display civilization name as label text
        position: (d: { start: number; end: number }): 'left' | 'right' => (left(d) ? 'left' : 'right'), // Position label left or right based on 'left' function
        textAlign: (d: { start: number; end: number }): 'end' | 'start' => (left(d) ? 'end' : 'start'), // Align text based on position
        dx: (d: { start: number; end: number }): number => (left(d) ? -5 : 5), // Horizontal offset based on position
        fontSize: 10, // Set font size
      })
      .tooltip([ // Configure tooltips
        { name: 'start', field: 'start', valueFormatter: labelFormatter }, // Tooltip for start date
        { name: 'end', field: 'end', valueFormatter: labelFormatter }, // Tooltip for end date
      ]);

    // Render the chart
    chart.render();

    // Cleanup function
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Accessible Text Searching</h2>
      <p className="text-muted-foreground mb-4">
        A transposed interval chart showing world history timelines, with accessibility features enabled for text searching within the chart.
      </p>
      {/* Container for the chart */}
      <div ref={containerRef} style={{ height: '1000px' }} className="w-full border rounded bg-muted/40">
         {/* Chart is rendered here */}
      </div>
    </div>
  );
};

export default AccessibleTextSearchingTextSearchChart;
