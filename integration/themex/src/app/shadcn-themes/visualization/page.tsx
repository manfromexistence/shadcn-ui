"use client";

import React, { useState, lazy, Suspense } from 'react';
import g2GeneratedExampleList from './g2-generated-example-list.json'; // Import the generated list

// Helper function to dynamically import components
const loadExampleComponent = (relativePath: string) => {
  // Construct the import path relative to the current file
  // Ensure the path includes the file extension if necessary for Webpack's analysis
  // The path in the JSON is relative to 'g2-examples', e.g., "accessible/text-searching/TextSearch.tsx"
  // We need to remove the .tsx extension for dynamic import if it's present,
  // or ensure the build tool handles it. Let's assume it handles it or the JSON doesn't have it.
  // Adjust the path based on the actual structure and build tool requirements.
  // Assuming the JSON path is like "accessible/text-searching/TextSearch" (no extension)
  // Or if it has .tsx, we might need to remove it depending on the bundler.
  // Let's assume the JSON path is correct as is for now.
  const cleanPath = relativePath.replace(/\.tsx?$/, ''); // Remove extension if present
  return lazy(() => import(`./g2-examples/${cleanPath}`));
};

export default function VisualizationPage() {
  // State to hold the path of the currently selected example
  const [selectedExamplePath, setSelectedExamplePath] = useState<string | null>(
    g2GeneratedExampleList.length > 0 ? g2GeneratedExampleList[0].path : null
  );
  const [selectedExampleName, setSelectedExampleName] = useState<string>(
     g2GeneratedExampleList.length > 0 ? g2GeneratedExampleList[0].name : 'Select an Example'
  );

  // Get the component for the selected path
  const SelectedExampleComponent = selectedExamplePath
    ? loadExampleComponent(selectedExamplePath)
    : null;

  return (
    <div className="container mx-auto p-4 flex h-screen">
      {/* Sidebar */}
      <aside className="w-1/4 border-r pr-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4 sticky top-0 bg-background py-2">Examples</h2>
        <ul>
          {g2GeneratedExampleList.map((example) => (
            <li key={example.path} className="mb-1">
              <button
                onClick={() => {
                  setSelectedExamplePath(example.path);
                  setSelectedExampleName(example.name);
                }}
                className={`w-full text-left p-2 rounded text-sm ${selectedExamplePath === example.path ? 'bg-muted text-foreground font-semibold' : 'hover:bg-accent'}`}
              >
                {example.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content Area */}
      <main className="w-3/4 pl-4 flex flex-col">
        <h1 className="text-2xl font-bold mb-4 sticky top-0 bg-background py-2">{selectedExampleName}</h1>
        <div className="flex-grow border rounded-lg p-2 overflow-auto"> {/* Changed overflow-hidden to overflow-auto */}
          <Suspense fallback={<div className="flex justify-center items-center h-full">Loading example...</div>}>
            {SelectedExampleComponent ? (
              <SelectedExampleComponent />
            ) : (
              <p>Select an example from the sidebar.</p>
            )}
          </Suspense>
        </div>
      </main>
    </div>
  );
}