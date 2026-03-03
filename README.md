# Architecture-Aware Coder — AI Editor Skill

[English](#english) | [中文](#中文)

---

## English

### What is this?

**Architecture-Aware Coder** is a skill / custom instruction set for AI coding assistants (Claude, Cursor, Roo Code, Windsurf, etc.) that enforces a "Single Source of Truth" (SSoT) approach to project architecture. It ensures the AI understands the **global system** before writing any code — preventing local optimizations like creating redundant services, violating layering rules, or breaking module boundaries.

### Key Features

- 📐 **Pre-coding architecture discovery** — Scans `ARCHITECTURE.md` or `components.yaml` before touching any file
- 🔍 **Duplicate detection** — Checks for existing services/modules before creating new ones
- 🏗️ **Pattern-aware coding** — Respects MVC, Clean Architecture, Hexagonal, Microservices, and N-Tier patterns
- 📄 **Living documentation sync** — Keeps `ARCHITECTURE.md` updated with YAML facts + Mermaid diagrams after every change
- 🐍 **Auto-mapping script** — `scripts/map_architecture.py` generates a token-efficient YAML snapshot of any codebase

### Repository Structure

```
SKILL.md                          ← Skill definition & workflow (the core instruction file)
scripts/map_architecture.py       ← Codebase scanner (Python)
templates/ARCHITECTURE.md.template← "Facts + Views" doc template
references/patterns.md            ← Architectural pattern reference
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

### Install / Usage

#### Cursor

1. Copy the contents of [`SKILL.md`](SKILL.md) into your project's `.cursor/rules/` directory (e.g., `.cursor/rules/architecture-aware-coder.md`).
2. Cursor will automatically pick it up as a project-level rule.

#### Roo Code (VS Code)

1. Copy [`SKILL.md`](SKILL.md) into your project's `.roo/rules/` directory, or add it as a custom skill via the Roo Code settings.
2. Alternatively, paste the content into `Custom Instructions` in Roo Code settings.

#### Claude (Projects)

1. Create a new Project in [claude.ai](https://claude.ai).
2. Paste the contents of [`SKILL.md`](SKILL.md) into the **Project Instructions** (Custom Instructions) field.

#### Windsurf / Other AI Editors

1. Copy the contents of [`SKILL.md`](SKILL.md) into the editor's custom rules / system prompt configuration.

#### Using the Mapping Script

Copy the `scripts/` directory into your project and run:

```bash
python3 scripts/map_architecture.py .
```

This generates a YAML snapshot of your codebase's architecture. You can also copy `templates/ARCHITECTURE.md.template` to your project as a starting point for `ARCHITECTURE.md`.

### Requirements

- Python 3 + `pyyaml` (for `scripts/map_architecture.py`)

### License

MIT © [Imprint-AI](https://github.com/Imprint-AI)

---

## 中文

### 这是什么？

**Architecture-Aware Coder** 是一个面向 AI 编码助手（Claude、Cursor、Roo Code、Windsurf 等）的 skill / 自定义指令集，它强制执行"单一事实来源"（SSoT）架构方法。它让 AI 在编写任何代码之前先理解**全局系统**，防止出现创建重复服务、违反分层规则或破坏模块边界等局部优化问题。

### 核心功能

- 📐 **编码前架构发现** — 在修改任何文件前先扫描 `ARCHITECTURE.md` 或 `components.yaml`
- 🔍 **重复检测** — 创建新服务/模块前先检查是否已存在类似组件
- 🏗️ **模式感知编码** — 遵守 MVC、Clean Architecture、六边形、微服务、N 层等架构模式
- 📄 **活文档同步** — 每次变更后保持 `ARCHITECTURE.md` 的 YAML 事实 + Mermaid 图表更新
- 🐍 **自动映射脚本** — `scripts/map_architecture.py` 生成任意代码库的高效 YAML 快照

### 仓库结构

```
SKILL.md                          ← Skill 定义与工作流（核心指令文件）
scripts/map_architecture.py       ← 代码库扫描器（Python）
templates/ARCHITECTURE.md.template← "事实 + 视图"文档模板
references/patterns.md            ← 架构模式参考
```

### 安装 / 使用方法

#### Cursor

1. 将 [`SKILL.md`](SKILL.md) 的内容复制到项目的 `.cursor/rules/` 目录下（例如 `.cursor/rules/architecture-aware-coder.md`）。
2. Cursor 会自动将其作为项目级规则加载。

#### Roo Code (VS Code)

1. 将 [`SKILL.md`](SKILL.md) 复制到项目的 `.roo/rules/` 目录，或通过 Roo Code 设置添加为自定义 skill。
2. 也可以将内容粘贴到 Roo Code 设置中的 `Custom Instructions`。

#### Claude（Projects）

1. 在 [claude.ai](https://claude.ai) 创建一个新的 Project。
2. 将 [`SKILL.md`](SKILL.md) 的内容粘贴到 **Project Instructions**（自定义指令）字段中。

#### Windsurf / 其他 AI 编辑器

1. 将 [`SKILL.md`](SKILL.md) 的内容复制到编辑器的自定义规则 / 系统提示配置中。

#### 使用映射脚本

将 `scripts/` 目录复制到你的项目中并运行：

```bash
python3 scripts/map_architecture.py .
```

这会生成代码库架构的 YAML 快照。你也可以将 `templates/ARCHITECTURE.md.template` 复制到项目中作为 `ARCHITECTURE.md` 的起点。

### 环境要求

- Python 3 + `pyyaml`（使用 `scripts/map_architecture.py`）

### 许可证

MIT © [Imprint-AI](https://github.com/Imprint-AI)
