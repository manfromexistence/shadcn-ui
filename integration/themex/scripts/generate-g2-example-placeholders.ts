
import fs from 'fs/promises';
import path from 'path';

const g2SiteExamplesDir = path.resolve(__dirname, '../../../G2/site/examples');
const targetExamplesDir = path.resolve(__dirname, '../src/app/shadcn-themes/visualization/g2-examples');
const wrapperPath = '../../../g2-wrapper'; // Relative path from generated component to wrapper

interface ExampleInfo {
  id: string; // e.g., general/interval/bar-dodged
  componentName: string; // e.g., GeneralIntervalBarDodgedChart
  filePath: string; // Full path to the new component file
  originalFilePath: string; // Full path to the original Dumi example file
}

// Helper function to convert kebab-case/slash-case to PascalCase
function toPascalCase(str: string): string {
  return str
    .split(/[-/]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

// Function to generate component content
async function generateComponentContent(example: ExampleInfo): Promise<string> {
  let originalCode = '';
  try {
    originalCode = await fs.readFile(example.originalFilePath, 'utf-8');
  } catch (err) {
    console.warn(`Could not read original file: ${example.originalFilePath}`, err);
    originalCode = '// Original file could not be read.';
  }

  // Basic attempt to extract the main function name if possible
  const funcMatch = originalCode.match(/export function (\w+)\(/);
  const originalFuncName = funcMatch ? funcMatch[1] : 'exampleFunction';

  const componentName = example.componentName;
  const title = example.id.split('/').pop()?.replace(/-/g, ' ') || 'Example';


  return `'use client'; // Assume client component due to G2

import React from 'react';
import G2Chart from '${wrapperPath}';
// TODO: Add any necessary imports (e.g., d3, lodash) if used in the original code
// import * as d3 from 'd3';
// import _ from 'lodash';

/*
Original Dumi Example Code from: ${path.relative(path.resolve(__dirname, '..'), example.originalFilePath)}
--------------------------------------------------------------------------------
${originalCode.split('\\n').map(line => `// ${line}`).join('\\n')}
--------------------------------------------------------------------------------
*/

// TODO: Convert the imperative Dumi code above into a declarative G2 spec object.
// This often involves:
// 1. Replacing chart.interval().data(...).encode(...) with { type: 'interval', data: ..., encode: ... }
// 2. Handling data loading (inline, fetch, or useEffect)
// 3. Replacing global variables (like d3) with imports
// 4. Adapting any complex logic or interactions.
const spec = {
  // type: 'interval', // Example type
  // data: [...], // Example data
  // encode: { x: '...', y: '...' }, // Example encoding
};

const ${componentName}: React.FC = () => {
  // TODO: If data needs fetching or processing, use useState and useEffect here.
  // const [data, setData] = React.useState(null);
  // React.useEffect(() => {
  //   fetch('...')
  //     .then(res => res.json())
  //     .then(setData);
  // }, []);
  //
  // if (!data) {
  //   return <div>Loading...</div>;
  // }
  //
  // const finalSpec = { ...spec, data }; // Combine spec with fetched data

  return (
     <div>
        {/* TODO: Maybe use a more dynamic title */}
        <h2 className="text-xl font-semibold mb-2">${title.charAt(0).toUpperCase() + title.slice(1)}</h2>
        <div className="border rounded-lg p-2">
            {/* Pass finalSpec if data is fetched */}
            <G2Chart config={spec} height={400} />
        </div>
     </div>
  );
};

export default ${componentName};
`;
}

async function main() {
  const allExamples: ExampleInfo[] = [];

  console.log(`Scanning ${g2SiteExamplesDir}...`);

  try {
    const categories = await fs.readdir(g2SiteExamplesDir, { withFileTypes: true });

    for (const category of categories) {
      if (category.isDirectory()) {
        const categoryPath = path.join(g2SiteExamplesDir, category.name);
        const types = await fs.readdir(categoryPath, { withFileTypes: true });

        for (const type of types) {
          if (type.isDirectory()) {
            const typePath = path.join(categoryPath, type.name);
            const demosPath = path.join(typePath, 'demo');
            try {
              const demos = await fs.readdir(demosPath, { withFileTypes: true });
              for (const demo of demos) {
                if (demo.isFile() && demo.name.endsWith('.ts')) {
                  const demoName = demo.name.replace('.ts', '');
                  const id = `${category.name}/${type.name}/${demoName}`;
                  const componentName = `${toPascalCase(category.name)}${toPascalCase(type.name)}${toPascalCase(demoName)}Chart`;
                  const targetFilePath = path.join(targetExamplesDir, category.name, type.name, `${toPascalCase(demoName)}.tsx`);
                  const originalFilePath = path.join(demosPath, demo.name);

                  allExamples.push({
                    id,
                    componentName,
                    filePath: targetFilePath,
                    originalFilePath,
                  });
                }
              }
            } catch (err: any) {
              if (err.code !== 'ENOENT') { // Ignore if 'demo' folder doesn't exist
                 console.warn(`Could not read demos in ${demosPath}:`, err);
              }
            }
          }
        }
      }
    }
  } catch (err) {
     console.error(`Error scanning G2 examples directory: ${g2SiteExamplesDir}`, err);
     process.exit(1);
  }


  console.log(`Found ${allExamples.length} examples. Generating placeholder components in ${targetExamplesDir}...`);

  // Ensure target base directory exists
  await fs.mkdir(targetExamplesDir, { recursive: true });

  // Generate component files
  for (const example of allExamples) {
    try {
      const componentDir = path.dirname(example.filePath);
      await fs.mkdir(componentDir, { recursive: true });
      const content = await generateComponentContent(example);
      await fs.writeFile(example.filePath, content);
      console.log(`Generated: ${path.relative(targetExamplesDir, example.filePath)}`);
    } catch (err) {
      console.error(`Failed to generate component for ${example.id}:`, err);
    }
  }

  // Generate index.ts
  const indexContent = allExamples
    .map(ex => {
        const relativePath = `./${path.relative(targetExamplesDir, ex.filePath).replace(/\\/g, '/').replace('.tsx', '')}`;
        return `export { default as ${ex.componentName} } from '${relativePath}';`;
    })
    .join('\\n');

  const indexFilePath = path.join(targetExamplesDir, 'index.ts');
  try {
    await fs.writeFile(indexFilePath, indexContent + '\\n');
    console.log(`Generated: index.ts`);
  } catch (err) {
     console.error(`Failed to generate index.ts:`, err);
  }

  console.log('Script finished.');
  console.log(`\nNext Steps:`);
  console.log(`1. Manually review and convert the G2 spec in each generated file within ${targetExamplesDir}.`);
  console.log(`2. Install any missing dependencies (like d3, lodash) in the 'integration/themex' project: cd integration/themex && npm install d3 lodash @types/d3 @types/lodash ...`);
  console.log(`3. Implement dynamic routing in 'src/app/shadcn-themes/visualization/[...slug]/page.tsx' to load and display the selected example component.`);

}

main().catch(console.error);

