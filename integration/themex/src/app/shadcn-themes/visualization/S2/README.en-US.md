<img src="https://gw.alipayobjects.com/zos/antfincdn/R8sN%24GNdh6/language.svg" width="18" alt="language" />  [简体中文](./README.md) ｜
English

<h1 align="center">S2</h1>

<div align="center">

A practical visualization library for tabular analysis.

<p>
  <a href="https://www.npmjs.com/package/@antv/s2" title="npm">
    <img src="https://img.shields.io/npm/dm/@antv/s2.svg" alt="npm"/>
  </a>
  <a href="https://www.npmjs.com/package/@antv/s2" target="_blank">
    <img src="https://img.shields.io/npm/v/@antv/s2/latest.svg?logo=npm" alt="latest version">
  </a>
  <a href="https://github.com/antvis/S2/actions/workflows/test-s2.yml" target="_blank">
    <img src="https://github.com/antvis/S2/actions/workflows/test-s2.yml/badge.svg" alt="ci test status"/>
  </a>
  <a href="https://codecov.io/gh/antvis/S2" target="_blank">
    <img src="https://codecov.io/gh/antvis/S2/branch/next/graph/badge.svg" alt="test coverage"/>
  </a>
  <a href="https://github.com/antvis/S2/releases" target="_blank">
    <img src="https://img.shields.io/github/release-date/antvis/S2" alt="release date"/>
  </a>
</p>

<p>
  <a href="https://www.npmjs.com/package/@antv/s2" target="_blank">
    <img src="https://img.badgesize.io/https:/unpkg.com/@antv/s2/dist/s2.min.js?label=gzip%20size&compression=gzip" alt="npm bundle size" />
  </a>
  <a href="https://github.com/antvis/S2/discussions" target="_blank">
    <img src="https://img.shields.io/badge/discussions-on%20github-blue" alt="GitHub discussions"/>
  </a>
  <a href="https://github.com/actions-cool/issues-helper" target="_blank">
    <img src="https://img.shields.io/badge/using-issues--helper-blueviolet" alt="issues helper"/>
  </a>
  <a href="https://github.com/antvis/S2/blob/next/LICENSE" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT@AntV-yellow.svg" alt="License: MIT@AntV" />
  </a>
  <a href="https://github.com/antvis/S2/graphs/contributors" target="_blank">
    <img src="https://img.shields.io/github/contributors/antvis/S2" alt="contributors"/>
  <a/>
  <a href="https://github.com/antvis/S2/issues?q=is%3Aissue+sort%3Aupdated-desc+is%3Aclosed" >
    <img src="https://img.shields.io/github/issues-closed/antvis/S2" alt="issues closed"/>
  <a/>
  <a href="https://github.com/antvis/S2/pulls" target="_blank">
    <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen.svg" alt="pr welcome"/>
  <a/>
</p>
</div>

S2 is a solution in multi-dimensional cross-analysis tables, which provides data-driven analysis table components.
 It supplements multi-dimensional analysis tables in the industry. By providing the core library, essential components,
demo components and expansion capabilities, it allows developers to use it quickly and freely.

<p align="center">
  <a href="https://s2.antv.antgroup.com/zh">Homepage</a> •
  <a href="https://s2.antv.antgroup.com/manual/getting-started">Getting Started</a> •
  <a href="https://s2.antv.antgroup.com/zh/examples">Examples</a> •
  <a href="https://s2.antv.antgroup.com/playground">Live DEMO</a>
</p>

![homepage](https://gw.alipayobjects.com/zos/antfincdn/6R5Koawk9L/huaban%2525202.png)

## ✨ Features

1. Multi-dimensional cross-analysis: Say goodbye to a single analysis dimension and fully embrace the free combination analysis of any dimension.
2. High performance: It can support rendering in less than 8s under the total amount of millions of data and achieve second-level rendering through partial drilling.
3. High scalability: Support any custom extensions (including but not limited to layout, style, interaction, data hook flow, etc.).
4. Out of the box: Provide out-of-the-box `React` and `Vue3` table components and supporting analysis components in different analysis scenarios. You only need a simple configuration to realize the table rendering
 of complex scenes quickly.
5. High interaction: support rich interaction forms (single selection, circle selection, row selection, column selection, freeze line header, width and height dragging, custom interaction, etc.)

## 🔨 Getting Started

可以通过 NPM、Yarn 或者 pnpm 等包管理器来安装。

`S2` is usually installed via a package manager such as npm, Yarn, or pnpm.

```bash
npm install @antv/s2 --save
```

```bash
yarn add @antv/s2
```

```bash
pnpm add @antv/s2
```

After

After successful installation, prepare a DOM container for rendering and import the corresponding S2 API object through import.

```html
<div id="container"></div>
```

```ts
import { PivotSheet } from '@antv/s2';

async function bootstrap() {
  const container = document.getElementById('container');

  const s2DataConfig = await fetch('https://gw.alipayobjects.com/os/bmw-prod/2a5dbbc8-d0a7-4d02-b7c9-34f6ca63cff6.json')
    .then(r => r.json())

  const s2 = new PivotSheet(container, s2DataConfig, {
    width: 600,
    height: 300,
  });

  await s2.render();
}

bootstrap()
```

![result](https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*fod3RoX8iRwAAAAAAAAAAAAAemJ7AQ/fmt.avif)

## 📦 Packages

| Package  | Latest  | Size   | Download     |
| -------- | ------ | ----------  | ------ |
| [@antv/s2](https://github.com/antvis/S2/tree/next/packages/s2-core)        | ![latest](https://img.shields.io/npm/v/@antv/s2/latest.svg?logo=npm)  | ![size](https://img.badgesize.io/https:/unpkg.com/@antv/s2@latest/dist/s2.min.js?label=gzip%20size&compression=gzip)       | ![download](https://img.shields.io/npm/dm/@antv/s2.svg?logo=npm)       |
| [@antv/s2-react](https://github.com/antvis/S2/tree/next/packages/s2-react) | ![latest](https://img.shields.io/npm/v/@antv/s2-react/latest.svg?logo=npm) | ![size](https://img.badgesize.io/https:/unpkg.com/@antv/s2-react@latest/dist/s2-react.min.js?label=gzip%20size&compression=gzip) | ![download](https://img.shields.io/npm/dm/@antv/s2-react.svg?logo=npm) |
| [@antv/s2-react-components](https://github.com/antvis/S2/tree/next/packages/s2-react-components) | ![latest](https://img.shields.io/npm/v/@antv/s2-react-components/latest.svg?logo=npm) | ![size](https://img.badgesize.io/https:/unpkg.com/@antv/s2-react-components@latest/dist/s2-react-components.min.js?label=gzip%20size&compression=gzip) | ![download](https://img.shields.io/npm/dm/@antv/s2-react-components.svg?logo=npm) |
| [@antv/s2-vue](https://github.com/antvis/S2/tree/next/packages/s2-vue)     | ![latest](https://img.shields.io/npm/v/@antv/s2-vue/latest.svg?logo=npm) | ![size](https://img.badgesize.io/https:/unpkg.com/@antv/s2-vue@latest/dist/s2-vue.min.js?label=gzip%20size&compression=gzip)   | ![download](https://img.shields.io/npm/dm/@antv/s2-vue.svg?logo=npm)   |

## 🖥️ Browser Compatibility

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari |
| --- |  --- | --- | --- |
| Edge | last 2 versions | last 2 versions | last 2 versions |

`@antv/s2-react` and `@antv/s2-vue` see [React JavaScript environment requirements](https://zh-hans.reactjs.org/docs/javascript-environment-requirements.html) 和 [Vite browser compatibility](https://cn.vitejs.dev/guide/build.html#browser-compatibility)

## 👤 Author

[**@AntV**](https://github.com/orgs/antvis/people)

## 🤝 Contributing

Contributions, issues and feature requests are welcome.
Feel free to check [issues](https://github.com/antvis/S2/issues) page if you want to contribute.

> S2 use pnpm as package manager

```bash
git clone git@github.com:antvis/S2.git

cd S2

pnpm install # or pnpm bootstrap

# build all
pnpm build

# debug s2-core
pnpm core:start

# debug s2-react
pnpm react:playground

# debug s2-vue
pnpm vue:playground

# unit test
pnpm test

# check the code style and the type definition
pnpm lint

# start the website
pnpm site:start
```

## 👁️ Insight

![Alt](https://repobeats.axiom.co/api/embed/ebb7eecb994dc0e3980044aefe43eb81302e3632.svg "Repobeats analytics image")

## 👬 Contributors

![https://github.com/antvis/s2/graphs/contributors](https://contrib.rocks/image?repo=antvis/s2)

## 📄 License

MIT@[AntV](https://github.com/antvis).
