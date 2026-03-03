# Architecture-Aware Coder

> **Purpose**: This is an AI coding instruction / skill file that enforces a "Single Source of Truth" (SSoT) approach to project architecture. It ensures the AI understands the **global system** before writing any code — preventing local optimizations like creating redundant services, violating layering rules, or breaking module boundaries.
>
> **Compatible with**: Claude (Projects / System Prompt), Cursor (Rules), Roo Code (Custom Instructions / Skills), Windsurf, and any AI coding assistant that supports custom instructions.

---

## Core Workflow

### Phase 1: Global Context Discovery (Pre-coding)

Before modification, you **MUST** establish a global view to avoid local optimizations (e.g., creating redundant services):

1. **Locate the SSoT**: Search for `ARCHITECTURE.md` or `components.yaml` in the project root.
2. **Parse the Facts**: Read the `FACTS` section (YAML). This contains the authoritative list of components, their responsibilities, and relationships.
3. **Map the Gap**: If documentation is missing or outdated, run the mapping script to generate a YAML-based architecture snapshot:
   ```bash
   python3 scripts/map_architecture.py .
   ```
4. **Check for Duplicates**: Before adding a new service/module, search the `FACTS` for existing ones with similar intent.
   - *Example*: "Does an 'EmailService' already exist in the `Infrastructure` layer?"

### Phase 2: Architecturally Consistent Coding

1. **Respect Layering**: Align with the defined patterns (e.g., MVC, Clean Architecture). Refer to `references/patterns.md`.
2. **Reuse Over Create**: Use existing components identified in Phase 1.
3. **Minimize Coupling**: Ensure new dependencies follow the project's direction (e.g., Domain should not depend on Infrastructure).

### Phase 3: Architectural Synchronization (Post-coding)

Keep the "Living Documentation" updated:

1. **Update FACTS (YAML)**: Add/modify components and relations in the YAML block. This is the primary input for future AI tasks.
2. **Update Views (Mermaid)**: Synchronize the Mermaid diagrams to reflect the new topology.
3. **Record Traces**: For complex logic changes, add a `Sequence Trace` (log-style) to explain the new execution flow.
4. **Initialize if Missing**: Use the template at `templates/ARCHITECTURE.md.template` if no architecture doc exists.

---

## The "Facts + Views" Pattern

| Section       | Format    | Target     | Benefit                                        |
| :------------ | :-------- | :--------- | :--------------------------------------------- |
| **FACTS**     | YAML      | AI / Tools | Low token cost, high precision, easy to parse.  |
| **TOPOLOGY**  | Mermaid   | Human      | Visual intuition, zero-dependency rendering.    |
| **HIERARCHY** | MD List   | Human      | Instant readability in any MD viewer.           |
| **TRACES**    | Trace Log | Both       | Explains dynamic scheduling/logic flows.        |

---

## Resource Usage

- **Scripts**: `scripts/map_architecture.py` — Generates a token-efficient YAML snapshot of the codebase.
- **Templates**: `templates/ARCHITECTURE.md.template` — The "Facts + Views" standard for project documentation.
- **References**: `references/patterns.md` — Common architectural patterns and detection rules.

---

## Credits

Inspired by the "Single Source of Truth" philosophy and the [CodeCraft-Architect](https://github.com/xPOURY4/CodeCraft-Architect) methodology.
