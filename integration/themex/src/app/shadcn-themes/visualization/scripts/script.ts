import fs from 'fs';
import path from 'path';

// Define the root directory for the generated G2 examples within the themex project
const examplesRoot = path.resolve(__dirname, '../g2-examples');
// Define the output file path relative to the script location
const outputFile = path.resolve(__dirname, '../g2-generated-example-list.json'); // Changed output filename

interface ExampleInfo {
  name: string; // e.g., "Accessible / Text Searching / TextSearch"
  path: string; // Path relative to examplesRoot, e.g., "accessible/text-searching/TextSearch.tsx"
}

function findExampleFiles(dir: string, baseDir: string = dir): ExampleInfo[] {
  let examples: ExampleInfo[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // Recursively search subdirectories
      examples = examples.concat(findExampleFiles(fullPath, baseDir));
    } else if (entry.isFile() && entry.name.endsWith('.tsx')) { // Look for .tsx files, removed demo folder check
      const relativePath = path.relative(baseDir, fullPath);
      // Create a user-friendly name from the path parts
      const nameParts = relativePath
        .replace(/\\/g, '/') // Normalize path separators
        // .replace('/demo/', '/') // No longer needed
        .replace('.tsx', '') // Remove .tsx file extension
        .split('/')
        .map(part => part.charAt(0).toUpperCase() + part.slice(1)); // Capitalize each part

      const name = nameParts.join(' / ');

      examples.push({ name, path: relativePath });
    }
  }
  return examples;
}

try {
  console.log(`Scanning for generated G2 examples in: ${examplesRoot}`);
  const allExamples = findExampleFiles(examplesRoot);

  // Sort examples alphabetically by name
  allExamples.sort((a, b) => a.name.localeCompare(b.name));

  console.log(`Found ${allExamples.length} examples. Writing to ${outputFile}...`);
  fs.writeFileSync(outputFile, JSON.stringify(allExamples, null, 2), 'utf-8');
  console.log(`Successfully generated ${path.basename(outputFile)}`);

} catch (error) {
  console.error('Error generating G2 example list:', error);
  process.exit(1); // Exit with error code
}
