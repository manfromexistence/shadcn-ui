import Slugger from 'github-slugger';
import { Operation } from '@/render/operation';
import type { RenderContext } from '@/types';
import { createMethod } from '@/server/create-method';
import { createRenders, type Renderer } from '@/render/renderer';
import type { OpenAPIV3_1 } from 'openapi-types';
import {
  type DocumentInput,
  processDocument,
  type ProcessedDocument,
} from '@/utils/process-document';
import { getUrl } from '@/utils/server-url';

type ApiPageContextProps = Pick<
  Partial<RenderContext>,
  | 'shikiOptions'
  | 'generateTypeScriptSchema'
  | 'generateCodeSamples'
  | 'proxyUrl'
  | 'showResponseSchema'
  | 'disablePlayground'
>;

export interface ApiPageProps extends ApiPageContextProps {
  document: DocumentInput;
  hasHead: boolean;

  renderer?: Partial<Renderer>;

  /**
   * An array of operations
   */
  operations?: OperationItem[];

  webhooks?: WebhookItem[];

  /**
   * By default, it is disabled on dev mode
   */
  disableCache?: boolean;
}

export interface WebhookItem {
  name: string;
  method: OpenAPIV3_1.HttpMethods;
}

export interface OperationItem {
  path: string;
  method: OpenAPIV3_1.HttpMethods;
}

export async function APIPage(props: ApiPageProps) {
  const {
    operations,
    hasHead = true,
    webhooks,
    disableCache = process.env.NODE_ENV === 'development',
  } = props;

  const processed = await processDocument(props.document, disableCache);
  const ctx = await getContext(processed, props);
  const { document } = processed;

  return (
    <ctx.renderer.Root baseUrl={ctx.baseUrl} servers={ctx.servers}>
      {operations?.map((item) => {
        const pathItem = document.paths?.[item.path];
        if (!pathItem) return null;

        const operation = pathItem[item.method];
        if (!operation) return null;

        const method = createMethod(item.method, pathItem, operation);

        return (
          <Operation
            key={`${item.path}:${item.method}`}
            method={method}
            path={item.path}
            ctx={ctx}
            hasHead={hasHead}
          />
        );
      })}
      {webhooks?.map((item) => {
        const webhook = document.webhooks?.[item.name];
        if (!webhook) return;

        const hook = webhook[item.method];
        if (!hook) return;

        const method = createMethod(item.method, webhook, hook);

        return (
          <Operation
            type="webhook"
            key={`${item.name}:${item.method}`}
            method={method}
            ctx={{
              ...ctx,
              baseUrl: 'http://localhost:8080',
            }}
            path={`/${item.name}`}
            hasHead={hasHead}
          />
        );
      })}
    </ctx.renderer.Root>
  );
}

export async function getContext(
  schema: ProcessedDocument,
  options: ApiPageContextProps & {
    renderer?: Partial<Renderer>;
  } = {},
): Promise<RenderContext> {
  const document = schema.document;
  const servers =
    document.servers && document.servers.length > 0
      ? document.servers
      : [{ url: 'https://example.com' }];
  const server = servers[0];

  return {
    schema,
    proxyUrl: options.proxyUrl,
    disablePlayground: options.disablePlayground,
    showResponseSchema: options.showResponseSchema,
    renderer: {
      ...createRenders(options.shikiOptions),
      ...options.renderer,
    },
    shikiOptions: options.shikiOptions,
    generateTypeScriptSchema: options.generateTypeScriptSchema,
    generateCodeSamples: options.generateCodeSamples,
    baseUrl: getUrl(
      server.url,
      server.variables
        ? Object.fromEntries(
            Object.entries(server.variables).map(([k, v]) => [k, v.default]),
          )
        : {},
    ),
    servers,
    slugger: new Slugger(),
  };
}
