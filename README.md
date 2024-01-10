<p align="center">
  <img src="docsify.svg" alt="Docsify Logo" height="128">
</p>
<h1 align="center">Docsify Tools</h1>
<h3 align="center">Serve Docsify</h3>
<p align="center">by <a href="https://github.com/simochee">simochee</a></p>

[![npm version](https://badge.fury.io/js/docsify-serve.svg)](https://badge.fury.io/js/docsify-serve)
[![License](https://img.shields.io/npm/l/docsify-serve)](https://github.com/simochee/docsify-serve/blob/main/LICENSE)
[![Release](https://github.com/simochee/docsify-serve/actions/workflows/release.yaml/badge.svg)](https://github.com/simochee/docsify-serve/actions/workflows/release.yaml)

Enhanced development server for Docsify.

# 🧩 Features

- History router mode support
- Full support for [docsify-cli](https://www.npmjs.com/package/docsify-cli) options
- Partial support for [live-server](https://www.npmjs.com/package/live-server) options

# 🧑‍💻 Usage

```shell
npx docsify-serve [options] [path]

# npx docsify-serve --open --entry-file 404.html docs
```

### Options

All options are optional. Run `npx docsify-serve --help` to see all options.

## 💻 Development

1. Clone this repository
1. Enable Corepack using `corepack enable`
1. Install dependencies using `pnpm install`
1. Run develop mode using `pnpm run dev`

## 🛡️ License

MIT
