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
  const wrapperPath = '../../../g2-wrapper'; // Relative path from generated component to wrapper

  console.log(`Scanning ${g2SiteExamplesDir}...`);

  // Use the walk generator function
  for await (const originalFilePath of walk(g2SiteExamplesDir)) {
      if (path.basename(originalFilePath) === 'demo.ts') {
          const relativePath = path.relative(g2SiteExamplesDir, originalFilePath);
          // Fix regex for replacing backslashes and the demo.ts suffix
          const id = relativePath.replace(/\\/g, '/').replace(/\/demo\.ts$/, '');
          const originalDemoDir = path.dirname(originalFilePath);

          // Skip if id is empty or invalid
          if (!id) continue;

          // Construct target path
          const targetFileName = `${toPascalCase(id)}.tsx`;
          // Target path is now relative to targetExamplesDir/id
          const targetFilePath = path.join(targetExamplesDir, id, targetFileName);

          // Create safe component name
          const safeComponentName = toPascalCase(id);

          // Check if component name is valid
          if (!/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(safeComponentName)) {
              console.warn(`Skipping invalid component name generated for ID '${id}': ${safeComponentName}`);
              continue;
          }

          allExamples.push({
              id,
              componentName: safeComponentName,
              filePath: targetFilePath,
              originalFilePath,
              originalDemoDir,
          });
      }
  }

  console.log(`Found ${allExamples.length} examples. Generating components in ${targetExamplesDir}...`);

  // Ensure target base directory exists
  await fs.mkdir(targetExamplesDir, { recursive: true });

  // Generate component files
  let generatedCount = 0;
  let errorCount = 0;
  const generatedList: { name: string; path: string; description: string | null }[] = [];

  for (const example of allExamples) {
    try {
      const componentDir = path.dirname(example.filePath);
      await fs.mkdir(componentDir, { recursive: true });
      // Pass wrapperPath to generateComponentContent
      const content = await generateComponentContent(example, wrapperPath);
      // Format the generated content using Prettier
      const formattedContent = await format(content, {
          parser: 'typescript',
          semi: true,
          singleQuote: true,
          trailingComma: 'es5',
          jsxSingleQuote: false,
      });
      await fs.writeFile(example.filePath, formattedContent);
      generatedCount++;

      // Add to list for JSON output, including description
      // Calculate relative path from targetExamplesDir base
      const relativeComponentPath = path.relative(targetExamplesDir, example.filePath).replace(/\\/g, '/');
      const { title, description } = await extractFrontmatterData(example.originalDemoDir);
      const displayName = title || example.id.split('/').pop()?.replace(/-/g, ' ') || example.id;
      generatedList.push({ name: displayName, path: relativeComponentPath, description });

    } catch (err) {
      console.error(`Failed to generate or format component for ${example.id}:`, err);
      // Write error placeholder if generation/formatting failed
      try {
          const errorContent = `// Failed to generate component for ${example.id}\n// Error: ${err instanceof Error ? err.message : String(err)}\nexport default () => <div>Error generating component ${example.id}</div>;`;
          await fs.writeFile(example.filePath, errorContent);
      } catch (writeErr) {
          console.error(`Failed to write error placeholder for ${example.id}:`, writeErr);
      }
      errorCount++;
    }
  }
   console.log(`Generated and formatted ${generatedCount} component files.`);
   if (errorCount > 0) {
       console.warn(`${errorCount} components failed to generate/format or encountered errors.`);
   }

  // Sort the generated list alphabetically by name
  generatedList.sort((a, b) => a.name.localeCompare(b.name));

  // Generate g2-generated-example-list.json
  const listFilePath = path.resolve(scriptDir, '../src/app/shadcn-themes/visualization/g2-generated-example-list.json');
  try {
      await fs.writeFile(listFilePath, JSON.stringify(generatedList, null, 2));
      console.log(`Generated example list: ${path.basename(listFilePath)}`);
  } catch (err) {
      console.error(`Failed to generate ${path.basename(listFilePath)}:`, err);
  }

  console.log('\nScript finished.');
  console.log(`\nNext Steps:`);
  console.log(`1. Review the generated components in '${path.relative(process.cwd(), targetExamplesDir)}'.`);
  console.log(`   - Focus on files with 'TODO:' comments.`);
  console.log(`   - Manually convert/verify functions/expressions in specs (labels, tooltips, scales, etc.), especially those marked with '/* FUNCTION:...' or referencing helper functions.`);
  console.log(`   - Verify data handling (fetching, inline data, variables, CSV parsing if needed).`);
  console.log(`   - For animation/algorithm examples, carefully review the React component logic, data structures, algorithm implementation, and rendering within 'renderCurrentState'.`);
  console.log(`2. Install any detected external dependencies (like d3, lodash, @antv/g2-extension-ava, @antv/g-plugin-a11y) in the 'integration/themex' project if not already present:`);
  console.log(`   cd integration/themex && npm install d3 lodash @antv/g2-extension-ava @antv/g-plugin-a11y @types/d3 @types/lodash`);
  console.log(`3. Ensure you have a G2Chart wrapper component ('${path.basename(wrapperPath)}.tsx') at '${wrapperPath}' relative to generated files for standard examples.`);
  console.log(`4. Update your visualization page ('visualization/page.tsx') to use dynamic imports based on the generated '${path.basename(listFilePath)}'.`);
  console.log(`5. Test the generated components thoroughly.`);

}

main().catch(console.error);

