import fs from 'fs/promises';
import path from 'path';

// Helper function to convert kebab-case/slash-case to PascalCase
export function toPascalCase(str: string): string {
  return str
    .split(/[-/]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

// Function to extract title and description from frontmatter and body
export async function extractFrontmatterData(dirPath: string): Promise<{ title: string | null; description: string | null }> {
    const mdFilePath = path.join(dirPath, '../index.en.md'); // Assuming English markdown for title/desc
    let title: string | null = null;
    let description: string | null = null;
    try {
        const mdContent = await fs.readFile(mdFilePath, 'utf-8');
        // Extract frontmatter
        const frontmatterMatch = mdContent.match(/^---\s*([\s\S]*?)\s*---/);
        if (frontmatterMatch) {
            const frontmatter = frontmatterMatch[1];
            const titleMatch = frontmatter.match(/title:\s*(?:['"]?)(.+?)(?:['"]?)\s*(?:\n|$)/);
            if (titleMatch) {
                title = titleMatch[1].trim();
            }
            // Extract description from the body (content after frontmatter)
            const bodyContent = mdContent.substring(frontmatterMatch[0].length).trim();
            // Use the first paragraph as description, or a snippet
            const firstParagraphMatch = bodyContent.match(/^(.+?)(\n\n|$)/);
            if (firstParagraphMatch) {
                description = firstParagraphMatch[1].trim().replace(/`/g, ''); // Remove backticks if any
            } else if (bodyContent) {
                description = bodyContent.substring(0, 150).trim() + (bodyContent.length > 150 ? '...' : ''); // Fallback to snippet
            }
        } else {
            // console.warn(`No frontmatter found in: ${mdFilePath}`);
        }
    } catch (err) {
        // console.warn(`Could not read or parse markdown file: ${mdFilePath}`);
    }
    return { title, description };
}

// Helper function to walk directory recursively
export async function* walk(dir: string): AsyncGenerator<string> {
    for await (const d of await fs.opendir(dir)) {
        const entryPath = path.join(dir, d.name);
        if (d.isDirectory()) {
            yield* walk(entryPath);
        } else if (d.isFile()) {
            yield entryPath;
        }
    }
}

// Function to attempt parsing a string as JSON or return a placeholder
export function tryParseJson(jsonString: string, context: string): any {
    try {
        // Handle potential trailing commas before parsing
        const cleanedString = jsonString.replace(/,\s*([\]}])/g, '$1');
        return JSON.parse(cleanedString);
    } catch (e) {
        // If parsing fails, return a placeholder object indicating manual conversion is needed
        return { comment: `/* TODO: Manually convert ${context} options (JSON parse failed): ${jsonString} */` };
    }
}

// Function to convert simple JS object/array string to JSON-like string
export function jsToJsonLike(jsString: string): string {
    // Add quotes around keys, handle single quotes, remove trailing commas
    return jsString
        .replace(/'/g, '"') // Replace single quotes with double quotes
        .replace(/([a-zA-Z0-9_$]+)\s*:/g, '"$1":') // Add quotes around keys
        .replace(/,\s*([\]}])/g, '$1'); // Remove trailing commas
}

// Function to represent functions/variables found in spec options
export function handleFunctionOrVariable(valueStr: string, helperFunctionNames: Set<string>): string {
    valueStr = valueStr.trim();
    // Check if it's a known helper function name
    if (helperFunctionNames.has(valueStr)) {
        return `%%HELPER_FUNCTION:${valueStr}%%`; // Placeholder for helper function
    }
    // Check if it looks like an inline function (arrow or traditional)
    if ((valueStr.startsWith('(') && valueStr.includes('=>')) || valueStr.startsWith('function')) {
        return `%%FUNCTION:${valueStr}%%`; // Placeholder for inline function
    }
    // Assume it's a variable or constant - keep as is for now, might need manual check
    return valueStr;
}

