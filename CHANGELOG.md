# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] — 2026-03-03

### Changed
- **Breaking**: Migrated from Manus skill format to universal AI editor skill format
- `SKILL.md` is now a standalone instruction file compatible with Claude, Cursor, Roo Code, Windsurf, etc.
- Removed `.skill` ZIP packaging and `bin/skill.js` CLI downloader
- Removed Manus CLI dependency
- Updated `references/patterns.md` — replaced "Manus Action" with "AI Action"
- Updated `README.md` with installation guides for Claude, Cursor, Roo Code, and Windsurf
- Updated `package.json` — removed `bin` entry, updated description and keywords

### Removed
- `architecture-aware-coder.skill` (Manus ZIP package)
- `bin/skill.js` (Manus-specific download script)
- Manus CLI detection and import instructions

## [0.1.0] — 2026-03-03

### Added
- Initial release of `architecture-aware-coder` Manus skill
- `SKILL.md`: three-phase workflow (Discovery → Coding → Sync)
- `scripts/map_architecture.py`: YAML-based codebase scanner
- `templates/ARCHITECTURE.md.template`: "Facts + Views" documentation template
- `references/patterns.md`: architectural pattern reference (Layered, Clean, MVC, Microservices)
- `bin/skill.js`: `npx`-compatible CLI to download and install the skill
- GitHub Actions workflow for automated npm publishing on version tags
