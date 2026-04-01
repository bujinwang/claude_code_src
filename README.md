# Claude Code 2.1.88 - Local Runner

<p align="center">
  <img src="https://img.shields.io/badge/Version-2.1.88-blue.svg" alt="Version">
  <img src="https://img.shields.io/badge/Status-Runnable-green.svg" alt="Status">
  <img src="https://img.shields.io/badge/Language-TypeScript-blue.svg" alt="Language">
  <img src="https://img.shields.io/badge/UI-Ink%20%2F%20React-orange.svg" alt="UI">
</p>

> [!IMPORTANT]
> **本项目的目的是让 Claude Code 2.1.88 能够在本地运行。**
> 通过提取 npm 包中的 source map 还原源码，并构建完整的运行环境，使 Claude Code CLI 可以在本地直接执行。

---

## 🚀 快速开始

### 方式一：Bundled Mode（推荐，无需构建）

```bash
npm install
npm start
```

此方式直接运行 `package/package/cli.js` 中的预编译 CLI，无需额外构建步骤。

### 方式二：Source Mode（开发模式，需要 Bun）

```bash
bun install
bun run run.js
```

此方式直接从 TypeScript 源码运行，通过 `src/bun-bundle.ts` 提供 `bun:bundle` 虚拟模块 shim。

---

## 项目结构

- **`src/`** - 从 source map 还原的 Claude Code 源码
- **`package/`** - 提取的 bundled CLI 及 vendor 二进制文件
- **`run.js`** / **`run-bundled.js`** - 两种运行模式的入口脚本
- **`bunfig.toml`** / **`tsconfig.json`** - 构建配置，支持本地开发

---

## ⚠️ 免责声明

- **非官方项目**：本仓库并非 Anthropic 官方仓库，亦不代表其立场。
- **版权说明**：原始代码的版权、商标及相关权利归原权利方（Anthropic）所有。
- **研究用途**：本项目仅供个人学习与研究使用。
- **法律风险**：如需二次发布或商用，请自行评估相关许可与法律风险。

---

## 致谢

感谢发布时未移除的 **Source Map**，让本地运行 Claude Code 成为可能。
