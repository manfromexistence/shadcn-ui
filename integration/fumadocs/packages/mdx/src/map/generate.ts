import * as path from 'node:path';
import * as fs from 'node:fs/promises';
import fg from 'fast-glob';
import { getTypeFromPath } from '@/utils/get-type-from-path';
import type { FileInfo } from '@/config/types';
import { type LoadedConfig } from '@/utils/config';
import type { DocCollection, MetaCollection } from '@/config';
import { validate } from '@/utils/schema';
import { fileCache } from '@/map/file-cache';
import matter from 'gray-matter';
import type { AsyncRuntimeFile } from '@/runtime/types';

async function readFileWithCache(file: string): Promise<string> {
  const cached = fileCache.read<string>('read-file', file);
  if (cached) return cached;

  return (await fs.readFile(file)).toString();
}

export async function generateJS(
  configPath: string,
  config: LoadedConfig,
  outputPath: string,
  configHash: string,
): Promise<string> {
  const outDir = path.dirname(outputPath);
  let asyncInit = false;
  const lines: string[] = [
    getImportCode({
      type: 'named',
      names: ['_runtime'],
      specifier: 'fumadocs-mdx',
    }),
    getImportCode({
      type: 'namespace',
      specifier: toImportPath(configPath, outDir),
      name: '_source',
    }),
  ];

  const entries = Array.from(config.collections.entries());

  async function getDocEntries(collectionName: string, files: FileInfo[]) {
    const items = files.map(async (file, i) => {
      const importId = `${collectionName}_${i}`;
      lines.unshift(
        getImportCode({
          type: 'namespace',
          name: importId,
          specifier: `${toImportPath(file.absolutePath, outDir)}?collection=${collectionName}&hash=${configHash}`,
        }),
      );

      return `{ info: ${JSON.stringify(file)}, data: ${importId} }`;
    });

    return Promise.all(items);
  }

  async function getMetaEntries(collection: MetaCollection, files: FileInfo[]) {
    const items = files.map(async (file) => {
      const source = await readFileWithCache(file.absolutePath).catch(() => '');
      let data = source.length === 0 ? {} : JSON.parse(source);

      if (collection?.schema) {
        data = await validate(
          collection.schema,
          data,
          {
            source,
            path: file.absolutePath,
          },
          `invalid data in ${file.absolutePath}`,
        );
      }

      return JSON.stringify({
        info: file,
        data,
      });
    });

    return Promise.all(items);
  }

  async function getAsyncEntries(collection: DocCollection, files: FileInfo[]) {
    if (!asyncInit) {
      lines.unshift(
        getImportCode({
          type: 'named',
          specifier: 'fumadocs-mdx/runtime/async',
          names: ['_runtimeAsync', 'buildConfig'],
        }),
        'const [err, _sourceConfig] = buildConfig(_source)',
        'if (!_sourceConfig) throw new Error(err)',
      );

      asyncInit = true;
    }

    const entries = files.map(async (file) => {
      const parsed = matter(
        await readFileWithCache(file.absolutePath).catch(() => ''),
      );

      if (collection.schema) {
        parsed.data = (await validate(
          collection.schema,
          parsed.data,
          { path: file.absolutePath, source: parsed.content },
          `invalid frontmatter in ${file.absolutePath}`,
        )) as Record<string, unknown>;
      }

      return JSON.stringify({
        info: file,
        data: parsed.data,
        content: parsed.content,
      } satisfies AsyncRuntimeFile);
    });

    return Promise.all(entries);
  }

  const declares = entries.map(async ([k, collection]) => {
    if (collection.type === 'docs') {
      const docs = await getCollectionFiles(collection.docs);
      const metas = await getCollectionFiles(collection.meta);
      const metaEntries = (await getMetaEntries(collection.meta, metas)).join(
        ', ',
      );

      if (collection.docs.async) {
        const docsEntries = (await getAsyncEntries(collection.docs, docs)).join(
          ', ',
        );

        return `export const ${k} = _runtimeAsync.docs<typeof _source.${k}>([${docsEntries}], [${metaEntries}], "${k}", _sourceConfig)`;
      }

      const docsEntries = (await getDocEntries(k, docs)).join(', ');

      return `export const ${k} = _runtime.docs<typeof _source.${k}>([${docsEntries}], [${metaEntries}])`;
    }

    const files = await getCollectionFiles(collection);

    if (collection.type === 'doc' && collection.async) {
      return `export const ${k} = _runtimeAsync.doc<typeof _source.${k}>([${(await getAsyncEntries(collection, files)).join(', ')}], "${k}", _sourceConfig)`;
    }

    return `export const ${k} = _runtime.${collection.type}<typeof _source.${k}>([${(await getDocEntries(k, files)).join(', ')}]);`;
  });

  const resolvedDeclares = await Promise.all(declares);

  return [
    `// @ts-nocheck -- skip type checking`,
    ...lines,
    ...resolvedDeclares,
  ].join('\n');
}

async function getCollectionFiles(
  collection: DocCollection | MetaCollection,
): Promise<FileInfo[]> {
  const files = new Map<string, FileInfo>();
  const dirs = Array.isArray(collection.dir)
    ? collection.dir
    : [collection.dir];

  await Promise.all(
    dirs.map(async (dir) => {
      const result = await fg(collection.files ?? '**/*', {
        cwd: path.resolve(dir),
        absolute: true,
      });

      for (const item of result) {
        if (getTypeFromPath(item) !== collection.type) continue;

        files.set(item, {
          path: path.relative(dir, item),
          absolutePath: item,
        });
      }
    }),
  );

  return Array.from(files.values());
}

type ImportInfo =
  | { name: string; type: 'default'; specifier: string }
  | {
      type: 'named';
      names: ([string, string] | string)[];
      specifier: string;
    }
  | {
      type: 'namespace';
      name: string;
      specifier: string;
    }
  | {
      type: 'side-effect';
      specifier: string;
    };

function getImportCode(info: ImportInfo): string {
  const specifier = JSON.stringify(info.specifier);

  if (info.type === 'default') return `import ${info.name} from ${specifier}`;
  if (info.type === 'namespace')
    return `import * as ${info.name} from ${specifier}`;
  if (info.type === 'named') {
    const names = info.names.map((name) =>
      Array.isArray(name) ? `${name[0]} as ${name[1]}` : name,
    );

    return `import { ${names.join(', ')} } from ${specifier}`;
  }

  return `import ${specifier}`;
}

export function toImportPath(file: string, dir: string): string {
  const ext = path.extname(file);
  let importPath = path.relative(
    dir,
    ext === '.ts' ? file.substring(0, file.length - ext.length) : file,
  );

  if (!path.isAbsolute(importPath) && !importPath.startsWith('.')) {
    importPath = `./${importPath}`;
  }

  return importPath.replaceAll(path.sep, '/');
}
