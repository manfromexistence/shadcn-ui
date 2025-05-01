import { ComplexLogicDetails, HelperFunction } from './types';

// Function to detect common imports and G2 extensions
export function detectImports(code: string): string[] {
  const imports: string[] = [];
  const detected = new Set<string>();

  if (/\bimport\s+\*\s+as\s+d3\b/.test(code) || /\bd3\./.test(code)) {
    if (!detected.has('d3')) { imports.push("import * as d3 from 'd3';"); detected.add('d3'); }
  }
  if (/\bimport\s+_\s+from\s+'lodash'\b/.test(code) || /\b_\./.test(code)) {
    if (!detected.has('lodash')) { imports.push("import _ from 'lodash';"); detected.add('lodash'); }
  }
  if (/\bimport\s+\{[^}]*Insight[^}]*\}\s+from\s+'@antv\/g2-extension-ava'/.test(code)) {
    if (!detected.has('ava')) { imports.push("import { Insight } from '@antv/g2-extension-ava'; // Or other exports"); detected.add('ava'); }
  }
  if (/\bimport\s+\{[^}]*Auto[^}]*\}\s+from\s+'@antv\/g2-extension-ava'/.test(code)) {
    if (!detected.has('ava')) { imports.push("import { Auto } from '@antv/g2-extension-ava'; // Or other exports"); detected.add('ava'); }
  }
  // Corrected A11yPlugin import detection and addition
  if (/\bimport\s+\{[^}]*Plugin[^}]*\}\s+from\s+'@antv\/g-plugin-a11y'/.test(code) || /new\s+Plugin\(/.test(code)) {
    if (!detected.has('a11y')) { imports.push("import { Plugin as A11yPlugin } from '@antv/g-plugin-a11y';"); detected.add('a11y'); }
  }
  // Detect animation/keyframe related imports
  if (/\btimingKeyframe\b/.test(code) || /\bstaggeredKeyframe\b/.test(code)) {
     if (!detected.has('g2-animations')) { imports.push("// Animation functions like timingKeyframe might need direct G2 import or definition"); detected.add('g2-animations'); }
  }
  // Add more common libraries or G2 extensions if needed
  return imports;
}

// Extract raw data declaration if there is one
export function extractRawDataDeclaration(code: string): string | null {
  // Look for variable declarations that look like data arrays or objects
  // Improved regex to handle different spacings and potential trailing commas
  const dataVarMatch = code.match(/(?:const|let|var)\s+data\s*=\s*(\[[\s\S]*?\]|{[^}]*});?/);
  if (dataVarMatch) {
    return dataVarMatch[0]; // Return the full declaration statement
  }
  return null;
}

// Placeholder for detectComplexLogic - Implement based on actual requirements
export function detectComplexLogic(code: string): { isComplex: boolean; details: ComplexLogicDetails } {
    const hasAnimation = /\.animate\(/.test(code) || /keyframe/.test(code);
    const hasAlgorithm = /function\s*\*/.test(code) || /yield/.test(code) || /requestAnimationFrame/.test(code);
    const isComplex = hasAnimation || hasAlgorithm;
    const rawDataDecl = extractRawDataDeclaration(code); // Extract data declaration here

    return {
        isComplex,
        details: {
            hasAnimation,
            hasAlgorithm,
            algorithmCode: null, // Placeholder - needs specific extraction logic if required
            rawDataDeclaration: rawDataDecl, // Assign extracted data
            keyframeDeclaration: null, // Placeholder - needs specific extraction logic if required
            animationLoop: null, // Placeholder - needs specific extraction logic if required
        },
    };
}

// Extract helper functions defined in the script
export function extractHelperFunctions(code: string): HelperFunction[] {
    const functions: HelperFunction[] = [];
    // Match `function funcName(...) { ... }` or `const funcName = (...) => { ... }` or `const funcName = function(...) { ... }`
    // Improved regex to better capture arrow functions and handle spacing
    const funcRegex = /(?:function\s+([a-zA-Z0-9_$]+)\s*\([^)]*\)\s*\{[\s\S]*?\}|const\s+([a-zA-Z0-9_$]+)\s*=\s*(?:\(?\s*\([^)]*\)\s*\)?\s*=>\s*\{[\s\S]*?\}|\(?function\)?\s*\([^)]*\)\s*\{[\s\S]*?\}));?/g;
    let match;
    while ((match = funcRegex.exec(code)) !== null) {
        const funcCode = match[0];
        const funcName = match[1] || match[2]; // Get name from correct capture group

        // Basic check for balanced braces - very naive
        const openBraces = (funcCode.match(/\{/g) || []).length;
        const closeBraces = (funcCode.match(/\}/g) || []).length;

        if (funcName && openBraces === closeBraces && openBraces > 0) {
            // Avoid extracting the main chart rendering logic if it's wrapped in a function
            if (!funcCode.includes('new Chart') && !funcCode.includes('.render()') && !funcCode.includes('chart\.options')) {
                 functions.push({ name: funcName, code: funcCode });
            }
        } else if (funcName) {
            console.warn(`Helper function extraction produced unbalanced braces (${openBraces} open vs ${closeBraces} close) for ${funcName}. Skipping.`);
        }
    }
    return functions;
}
