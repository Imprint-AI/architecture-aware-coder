# Architectural Patterns Reference

When analyzing a project, look for these common patterns to understand the system's design philosophy.

## 1. Layered Architecture (N-Tier)
- **Structure**: Presentation → Application → Domain → Infrastructure.
- **Rule**: Dependencies only point downwards.
- **AI Action**: Place logic in the Service layer; keep Controllers thin.

## 2. Clean Architecture / Hexagonal
- **Structure**: Entities → Use Cases → Interface Adapters → Frameworks & Drivers.
- **Rule**: The core (Entities/Use Cases) must not depend on external frameworks or DBs.
- **AI Action**: Define interfaces (Ports) in the core and implement them in the outer layers (Adapters).

## 3. Model-View-Controller (MVC)
- **Structure**: Model (Data/Logic), View (UI), Controller (Glue).
- **Rule**: View and Model are decoupled via the Controller.
- **AI Action**: Ensure Models handle data integrity, not just DB rows.

## 4. Microservices / Modular Monolith
- **Structure**: Independent services or modules with clear boundaries.
- **Rule**: Communication via APIs or Events. No direct DB sharing between modules.
- **AI Action**: Respect module boundaries; do not import internal classes from other modules.

## How to Detect Patterns
1. **Folder Names**: Look for `services/`, `repositories/`, `controllers/`, `domain/`.
2. **Dependency Graph**: Check `import` statements to see how components interact.
3. **Configuration**: Check `package.json`, `requirements.txt`, or `go.mod` for framework-specific structures.
