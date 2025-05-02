import fs from 'fs/promises';
import path from 'path';
import { format } from 'prettier';
import { ExampleInfo } from './types';
import { toPascalCase, walk, extractFrontmatterData } from './utils';
import { generateComponentContent } from './component-generator';

async function main() {
  const allExamples: ExampleInfo[] = [];
  // Define paths relative to this script's location
  const scriptDir = __dirname;
  const g2SiteExamplesDir = path.resolve(scriptDir, '../../../G2/site/examples');
  const targetExamplesDir = path.resolve(scriptDir, '../src/app/shadcn-themes/visualization/g2-examples');
  // Define the absolute path to the wrapper component
  const wrapperAbsolutePath = path.resolve(scriptDir, '../src/g2-wrapper.tsx'); // Assuming wrapper is here

  // Collect potential example files first
  const exampleCandidates = new Map<string, { filePath: string; demoDir: string }[]>();
  console.log(`Scanning G2 examples in: ${g2SiteExamplesDir}`);

  // Use the walk generator function to find all .ts files in 'demo' directories
  for await (const originalFilePath of walk(g2SiteExamplesDir)) {
      // Check if the file is a .ts file AND is inside a directory named 'demo'
      if (originalFilePath.endsWith('.ts') && path.basename(path.dirname(originalFilePath)) === 'demo') {
          const originalDemoDir = path.dirname(originalFilePath); // This is the .../demo/ directory
          const exampleRootPath = path.dirname(originalDemoDir); // This is the directory containing demo, e.g., .../algorithm/sort/

          if (!exampleCandidates.has(exampleRootPath)) {
              exampleCandidates.set(exampleRootPath, []);
          }
          // Store all potential .ts files found within the demo directory for this example root
          exampleCandidates.get(exampleRootPath)!.push({ filePath: originalFilePath, demoDir: originalDemoDir });
      }
  }

  // Process the collected candidates to choose the primary file for each example
  console.log(`Processing ${exampleCandidates.size} potential example roots...`);
  for (const [exampleRootPath, candidates] of exampleCandidates.entries()) {
      // Prioritize index.ts or main.ts if multiple .ts files exist in the demo dir
      let chosenCandidate = candidates.find(c => path.basename(c.filePath) === 'index.ts');
      if (!chosenCandidate) {
          chosenCandidate = candidates.find(c => path.basename(c.filePath) === 'main.ts');
      }
      if (!chosenCandidate && candidates.length > 0) {
          // Fallback to the first candidate found if no index/main.ts
          chosenCandidate = candidates[0];
          if (candidates.length > 1) {
              console.warn(`[Warning] Multiple .ts files found in ${candidates[0].demoDir}. Using ${path.basename(chosenCandidate.filePath)}.`);
          }
      }

      // Skip if no suitable candidate was found (shouldn't happen if map entry exists)
      if (!chosenCandidate) continue;

      const { filePath: originalFilePath, demoDir: originalDemoDir } = chosenCandidate;

      // Proceed with generating info for the chosen file
      const relativePath = path.relative(g2SiteExamplesDir, exampleRootPath); // Path relative to examples root, e.g., algorithm/sort
      // Fix regex for replacing backslashes
      const id = relativePath.replace(/\\/g, '/'); // Use the path up to the example name as the ID

      // Skip if id is empty or invalid
      if (!id) {
          console.warn(`Skipping example with empty ID derived from: ${originalFilePath}`);
          continue;
      }

      // Construct target file name based on the last part of the ID
      const baseName = path.basename(id); // e.g., 'sort' from 'algorithm/sort'
      const categoryPath = path.dirname(id); // e.g., 'algorithm' from 'algorithm/sort'
      // Handle cases where categoryPath might be '.' (root level examples)
      const safeCategoryPath = categoryPath === '.' ? '' : categoryPath;
      const targetFileName = `${toPascalCase(baseName)}.tsx`; // e.g., Sort.tsx

      // Target path places the file directly in the category subfolder
      const targetFilePath = path.join(targetExamplesDir, safeCategoryPath, targetFileName); // e.g., .../g2-examples/algorithm/Sort.tsx

      // Create safe component name from the base name
      const safeComponentName = toPascalCase(baseName);

      // Check if component name is valid
      if (!/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(safeComponentName)) {
          console.warn(`Skipping invalid component name generated for ID '${id}' (base: ${baseName}): ${safeComponentName}`);
          continue;
      }

      allExamples.push({
          id, // Keep the full id like 'algorithm/sort' for reference
          componentName: safeComponentName, // Use base name for component, e.g., Sort
          filePath: targetFilePath,
          originalFilePath, // Use the path of the chosen .ts file
          originalDemoDir, // Use the demo dir of the chosen .ts file
      });
  }


  console.log(`Found ${allExamples.length} examples to generate. Target directory: ${targetExamplesDir}`);

  // Clean the target directory before generation
  console.log(`Cleaning target directory: ${targetExamplesDir}`);
  try {
    // fs.rm with recursive and force options effectively removes the directory if it exists.
    await fs.rm(targetExamplesDir, { recursive: true, force: true });
    console.log('Target directory cleaned.');
  } catch (err: any) {
    // Ignore error if directory doesn't exist (ENOENT), log others
    if (err.code !== 'ENOENT') {
      console.error(`Error cleaning target directory: ${err.message}`);
      // Optionally exit if cleaning fails critically
      // process.exit(1);
    } else {
        console.log('Target directory did not exist, no need to clean.');
    }
  }

  // Ensure target base directory exists (recreate after cleaning or if it didn't exist)
  console.log(`Ensuring target directory exists: ${targetExamplesDir}`);
  try {
      await fs.mkdir(targetExamplesDir, { recursive: true });
      console.log('Target directory ensured.');
  } catch (mkdirErr) {
      console.error(`[Fatal] Failed to create target directory ${targetExamplesDir}:`, mkdirErr);
      process.exit(1); // Exit if the base target directory cannot be created
  }


  // Generate component files
  let generatedCount = 0;
  let formatErrorCount = 0;
  let generationErrorCount = 0;
  const generatedList: { name: string; path: string; description: string | null }[] = [];

  for (const example of allExamples) {
    const componentDir = path.dirname(example.filePath);

    // Ensure the specific subdirectory for the component exists *before* trying to generate/write
    // This handles nested structures like g2-examples/category/Component.tsx
    try {
      await fs.mkdir(componentDir, { recursive: true });
    } catch (mkdirErr) {
      console.error(`[Directory Error] Failed to create directory ${componentDir} for ${example.id}:`, mkdirErr);
      generationErrorCount++; // Count this as a generation failure
      continue; // Skip this example if its directory cannot be created
    }

    // Proceed with generation and writing
    let content: string | null = null;
    let formattedContent: string | null = null;

    try {
      // Calculate relative path from the generated component's directory to the wrapper
      const relativeWrapperPath = path.relative(componentDir, wrapperAbsolutePath)
                                      .replace(/\\/g, '/') // Ensure forward slashes
                                      .replace(/\.tsx$/, ''); // Remove extension for import

      // Generate component content using the chosen originalFilePath
      content = await generateComponentContent(example, relativeWrapperPath);

      // Format the generated content using Prettier
      formattedContent = await format(content, {
          parser: 'typescript',
          semi: true,
          singleQuote: true,
          trailingComma: 'es5',
          jsxSingleQuote: false, // Keep consistent
      });

      await fs.writeFile(example.filePath, formattedContent);
      generatedCount++;

      // Add to list for JSON output, including description from the original demo directory's frontmatter
      const relativeComponentPath = path.relative(targetExamplesDir, example.filePath).replace(/\\/g, '/');
      // Extract frontmatter from the original demo directory associated with the chosen file
      const { title, description } = await extractFrontmatterData(example.originalDemoDir);
      const displayName = title || example.id.split('/').pop()?.replace(/-/g, ' ') || example.id;
      generatedList.push({ name: displayName, path: relativeComponentPath, description });

    } catch (err) { // Catch errors from generation, formatting, or writing
        if (content === null) { // Error likely occurred during generation
            console.error(`[Generation Error] Failed for ${example.id} (source: ${path.basename(example.originalFilePath)}):`, err);
            generationErrorCount++;
            // Attempt to write error placeholder file
            try {
                const errorContent = `// Failed to generate component for ${example.id}\n// Source: ${example.originalFilePath}\n// Generation Error: ${err instanceof Error ? err.message : String(err)}\nexport default () => <div>Error generating component ${example.id}</div>;`;
                await fs.writeFile(example.filePath, errorContent);
            } catch (writeErr) {
                console.error(`[Write Error] Failed to write error placeholder for ${example.id}:`, writeErr);
            }
        } else { // Error likely occurred during formatting or writing
            console.error(`[Formatting/Write Error] Failed for ${example.id} (source: ${path.basename(example.originalFilePath)}):`, err);
            formatErrorCount++;
            // Attempt to write unformatted content
            try {
                await fs.writeFile(example.filePath, `// Formatting or Write failed for ${example.id}. Original content below:\n// Source: ${example.originalFilePath}\n// Error: ${err instanceof Error ? err.message : String(err)}\n\n${content}`);
            } catch (writeErr) {
                console.error(`[Write Error] Failed to write unformatted content for ${example.id}:`, writeErr);
            }
        }
    }
  }

   console.log(`\nGeneration Summary:`);
   console.log(`- Successfully generated and formatted: ${generatedCount}`);
   if (generationErrorCount > 0) {
       console.warn(`- Failed during generation (placeholder written): ${generationErrorCount}`);
   }
   if (formatErrorCount > 0) {
       console.warn(`- Failed during formatting/write (unformatted/error content written): ${formatErrorCount}`);
   }

  // Sort the generated list alphabetically by name
  generatedList.sort((a, b) => a.name.localeCompare(b.name));

  // Generate g2-generated-example-list.json
  const listFilePath = path.resolve(scriptDir, '../src/app/shadcn-themes/visualization/g2-generated-example-list.json');
  try {
      await fs.writeFile(listFilePath, JSON.stringify(generatedList, null, 2));
      console.log(`\nGenerated example list: ${path.relative(process.cwd(), listFilePath)}`);
  } catch (err) {
      console.error(`Failed to generate ${path.basename(listFilePath)}:`, err);
  }

  console.log('\nScript finished.');
  // Keep Next Steps guidance
  console.log(`\nNext Steps:`);
  console.log(`1. Review the generated components in '${path.relative(process.cwd(), targetExamplesDir)}'.`);
  console.log(`   - Focus on files with 'TODO:' comments or error placeholders.`);
  console.log(`   - Manually convert/verify functions/expressions in specs (labels, tooltips, scales, etc.), especially those marked with '/* FUNCTION:...' or referencing helper functions.`);
  console.log(`   - Verify data handling (fetching, inline data, variables, CSV parsing if needed).`);
  console.log(`   - For animation/algorithm examples, carefully review the React component logic, data structures, algorithm implementation, and rendering within 'renderCurrentState'.`);
  console.log(`2. Install any detected external dependencies (like d3, lodash, @antv/g2-extension-ava, @antv/g-plugin-a11y) in the 'integration/themex' project if not already present:`);
  console.log(`   cd integration/themex && npm install d3 lodash @antv/g2-extension-ava @antv/g-plugin-a11y @types/d3 @types/lodash`); // Example command
  console.log(`3. Ensure you have a G2Chart wrapper component (e.g., 'g2-wrapper.tsx') at '${path.relative(process.cwd(), wrapperAbsolutePath)}'.`);
  console.log(`4. Update your visualization page ('visualization/page.tsx') to use dynamic imports based on the generated '${path.basename(listFilePath)}'.`);
  console.log(`5. Test the generated components thoroughly.`);
}

main().catch(err => {
    console.error("\nUnhandled error during script execution:", err);
    process.exit(1); // Exit with error code
});