# Migration Guide: G2 Site (Dumi) to Next.js (App Router)

This guide outlines the steps to migrate the G2 documentation site from Dumi to a Next.js project using the App Router and TypeScript.

## 1. Project Setup

1.  **Create Next.js App:**
    ```bash
    npx create-next-app@latest g2-nextjs-docs --typescript --eslint --tailwind --src-dir --app --import-alias "@/*"
    cd g2-nextjs-docs
    ```
2.  **Install Dependencies:** Add G2, Ant Design (used by the Dumi theme), and potentially libraries for Markdown/MDX processing.
    ```bash
    npm install @antv/g2 antd @ant-design/icons # Add others as needed (e.g., next-mdx-remote, gray-matter)
    ```
    *   You'll also need the various d3, utility, and other libraries currently injected via `.dumi/global.ts` if you intend to replicate examples that depend on them. Install them explicitly.

## 2. Configuration & Basic Layout

1.  **Root Layout (`src/app/layout.tsx`):**
    *   Set up the basic HTML structure (`<html>`, `<body>`).
    *   Import global CSS (like Tailwind base styles, and potentially migrated styles from Dumi).
    *   Define metadata (title, description) using the `Metadata` export. You can fetch defaults from the old `.dumirc.ts`.
    *   Include shared UI elements like Header and Footer components (you'll need to create these).
2.  **Header/Footer Components:**
    *   Create React components for the site header and footer (e.g., `src/components/Header.tsx`, `src/components/Footer.tsx`).
    *   Migrate navigation links (`navs` in `.dumirc.ts`) and footer content. Ant Design components (`Menu`, `Layout`) can be used here.
3.  **Styling:**
    *   Decide on a styling strategy (Tailwind is included, but you could use CSS Modules, Styled Components, Emotion, etc.).
    *   Migrate global styles from `.dumi/style.css` and potentially `.dumi/theme/**/*.less` (convert LESS to CSS/Tailwind).
    *   Migrate syntax highlighting themes (`.dumi/prism-*.css`) or use a Next.js compatible library (e.g., `rehype-pretty-code`).

## 3. Routing and Content Migration

1.  **App Router Structure:** Replicate the desired site structure using folders within `src/app/`.
    *   `src/app/docs/manual/quick-start/page.tsx` corresponds to `/docs/manual/quick-start`.
    *   `src/app/examples/general/interval/page.tsx` corresponds to `/examples/general/interval`.
    *   Use `layout.tsx` files within folders to create nested layouts (e.g., for documentation sidebars).
2.  **Markdown/MDX:**
    *   Copy Markdown files from the original `docs/` and `examples/` locations (wherever they actually reside based on Dumi's config) into your new `src/app/` structure.
    *   Use a library like `next-mdx-remote` or Next.js's built-in MDX support (`@next/mdx`) to render Markdown/MDX content within your `page.tsx` files. You'll need to configure MDX processing (e.g., `mdx-bundler` or `@next/mdx` in `next.config.js`).
    *   Handle frontmatter (metadata at the top of Markdown files) using libraries like `gray-matter`.
3.  **Documentation Sidebar:**
    *   Create a Sidebar component (`src/components/Sidebar.tsx`).
    *   Fetch the documentation structure (from the migrated `themeConfig.docs` array in `.dumirc.ts`, perhaps stored in a local JSON/TS file) and render the navigation links.
    *   Use the Sidebar in the relevant `layout.tsx` file (e.g., `src/app/docs/layout.tsx`).

## 4. Example Migration

1.  **Rendering Examples:** Dumi executes code in Markdown fences or uses dedicated example files. In Next.js:
    *   **MDX:** Embed React components directly within MDX files to render charts.
    *   **Separate Components:** Create React components for each chart example (e.g., `src/components/charts/BarDodged.tsx`). Import and use these components in your `page.tsx` or MDX files.
    *   **Data Fetching:** Adapt data fetching logic. Dumi examples fetch CSV/JSON directly. In Next.js, you might fetch data in Server Components or use client-side fetching within chart components.
2.  **Global Libraries:** The Dumi `global.ts` injects many libraries (`d3`, `lodash`, etc.) into `window`. Avoid this in Next.js. Import libraries directly into the components/pages where they are needed.

## 5. Theme Builder Migration (Advanced)

Replicating the interactive theme builder (`.dumi/theme/`, `.dumi/pages/theme.*.tsx`) is complex:

1.  **Create Theme Page:** Create a route like `src/app/theme/page.tsx`.
2.  **Layout:** Recreate the layout using React components (likely using Ant Design's `Layout`, `Sider`).
3.  **State Management:** Use React state (`useState`, `useReducer`) or a state management library (Context API, Zustand, Redux) to manage the selected theme (`light`/`dark`), seed tokens, and modified tokens, similar to the state in `.dumi/theme/index.tsx`.
4.  **Config Panel:** Rebuild the `ConfigPanel` component using Ant Design components (`Radio`, `Collapse`, `ColorPicker`, `InputNumber`, `Button`). Hook up inputs to update the theme state.
5.  **Demos View:** Rebuild the `DemosView` component. It needs to:
    *   Iterate over the example chart definitions (migrate `examples` array from `.dumi/theme/examples/index.ts`).
    *   Render each chart example component, passing the current theme and tokens as props.
    *   Use `useEffect` to re-render charts when theme/tokens change. G2's `chart.theme()` and `chart.options()` or `chart.changeData()` might be needed.
    *   Handle resizing using `ResizeObserver`.
6.  **Token Generation:** Migrate the `getG2Tokens`, `getG2SeedTokens` logic from `.dumi/theme/utils/getG2Tokens.ts` and the G2 `create` function (`../../../src/theme/create`) import. Ensure these are callable within your Next.js environment.
7.  **Export/Copy:** Re-implement the "Export" (`exportDataToLocal`) and "Copy" (`copyToClipboard`) functionality using browser APIs or libraries.

## 6. Final Steps

1.  **Testing:** Thoroughly test all pages, examples, and interactions.
2.  **Deployment:** Configure deployment for a Next.js application (Vercel, Netlify, Docker, etc.).

This migration requires significant effort, especially for the custom theme builder page. Start with the basic structure, content, and styling, and then tackle the more complex interactive elements.
