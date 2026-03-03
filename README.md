# Architecture-Aware Coder — Manus Skill

[English](#english) | [中文](#中文)

---

## English

### What is this?

**Architecture-Aware Coder** is a Manus skill that enforces a "Single Source of Truth" (SSoT) approach to project architecture. It ensures the AI understands the **global system** before writing any code — preventing local optimizations like creating redundant services, violating layering rules, or breaking module boundaries.

### Key Features

- 📐 **Pre-coding architecture discovery** — Scans `ARCHITECTURE.md` or `components.yaml` before touching any file
- 🔍 **Duplicate detection** — Checks for existing services/modules before creating new ones
- 🏗️ **Pattern-aware coding** — Respects MVC, Clean Architecture, Hexagonal, Microservices, and N-Tier patterns
- 📄 **Living documentation sync** — Keeps `ARCHITECTURE.md` updated with YAML facts + Mermaid diagrams after every change
- 🐍 **Auto-mapping script** — `scripts/map_architecture.py` generates a token-efficient YAML snapshot of any codebase

### Skill Contents (inside `.skill` ZIP)

```
SKILL.md                          ← skill definition & workflow
scripts/map_architecture.py       ← codebase scanner (Python)
templates/ARCHITECTURE.md.template← "Facts + Views" doc template
references/patterns.md            ← architectural pattern reference
```

### The "Facts + Views" Pattern

| Section | Format | Audience | Benefit |
|:--------|:-------|:---------|:--------|
| **FACTS** | YAML | AI / Tools | Low token cost, high precision, easy to parse |
| **TOPOLOGY** | Mermaid | Human | Visual intuition, zero-dependency rendering |
| **HIERARCHY** | MD List | Human | Instant readability in any Markdown viewer |
| **TRACES** | Trace Log | Both | Explains dynamic scheduling/logic flows |

### Core Workflow

1. **Phase 1 — Global Context Discovery** (before coding): Locate `ARCHITECTURE.md`, parse the `FACTS` YAML, run the mapping script if docs are missing, check for duplicate components.
2. **Phase 2 — Architecturally Consistent Coding**: Respect layering, reuse existing components, minimize coupling.
3. **Phase 3 — Architectural Synchronization** (after coding): Update YAML facts, sync Mermaid diagrams, record sequence traces.

### Install

#### Option A — `npx` (recommended)

```bash
npx @imprint-ai/architecture-aware-coder
```

This downloads `architecture-aware-coder.skill` into the current directory, then prints the import command.

#### Option B — Download directly from GitHub Releases

```bash
curl -LO https://github.com/Imprint-AI/architecture-aware-coder/releases/latest/download/architecture-aware-coder.skill
```

Then import into Manus:

```bash
manus skill import ./architecture-aware-coder.skill
```

### Requirements

- Node.js ≥ 18 (for `npx`)
- Python 3 + `pyyaml` (for `scripts/map_architecture.py`)
- [Manus](https://manus.im) CLI installed

### License

MIT © [Imprint-AI](https://github.com/Imprint-AI)

---

## 中文

### 这是什么？

**Architecture-Aware Coder** 是一个 Manus skill，它强制执行"单一事实来源"（SSoT）架构方法。它让 AI 在编写任何代码之前先理解**全局系统**，防止出现创建重复服务、违反分层规则或破坏模块边界等局部优化问题。

### 核心功能

- 📐 **编码前架构发现** — 在修改任何文件前先扫描 `ARCHITECTURE.md` 或 `components.yaml`
- 🔍 **重复检测** — 创建新服务/模块前先检查是否已存在类似组件
- 🏗️ **模式感知编码** — 遵守 MVC、Clean Architecture、六边形、微服务、N 层等架构模式
- 📄 **活文档同步** — 每次变更后保持 `ARCHITECTURE.md` 的 YAML 事实 + Mermaid 图表更新
- 🐍 **自动映射脚本** — `scripts/map_architecture.py` 生成任意代码库的高效 YAML 快照

### Skill 内容（`.skill` 文件内部结构）

```
SKILL.md                          ← skill 定义与工作流
scripts/map_architecture.py       ← 代码库扫描器（Python）
templates/ARCHITECTURE.md.template← "事实 + 视图"文档模板
references/patterns.md            ← 架构模式参考
```

### 安装方法

#### 方式 A — `npx`（推荐）

```bash
npx @imprint-ai/architecture-aware-coder
```

此命令会将 `architecture-aware-coder.skill` 下载到当前目录，并打印导入命令。

#### 方式 B — 直接从 GitHub Releases 下载

```bash
curl -LO https://github.com/Imprint-AI/architecture-aware-coder/releases/latest/download/architecture-aware-coder.skill
```

然后导入到 Manus：

```bash
manus skill import ./architecture-aware-coder.skill
```

### 环境要求

- Node.js ≥ 18（使用 `npx`）
- Python 3 + `pyyaml`（使用 `scripts/map_architecture.py`）
- [Manus](https://manus.im) CLI 已安装

### 许可证

MIT © [Imprint-AI](https://github.com/Imprint-AI)
