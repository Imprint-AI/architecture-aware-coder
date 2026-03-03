# Contributing to Architecture-Aware Coder

Thank you for your interest in contributing! 🎉

## How to contribute

1. **Fork** the repository: [github.com/Imprint-AI/architecture-aware-coder](https://github.com/Imprint-AI/architecture-aware-coder)
2. **Create a branch**: `git checkout -b feat/your-feature`
3. **Make your changes** — follow the code style and keep PRs focused
4. **Test locally**:
   ```bash
   node bin/skill.js --help
   # or unzip and inspect the .skill
   unzip -l architecture-aware-coder.skill
   ```
5. **Submit a pull request** with a clear description of what changed and why

## Guidelines

- Keep `SKILL.md` and the templates in sync if you change the workflow
- Document new architectural patterns in `references/patterns.md`
- Update `CHANGELOG.md` under `[Unreleased]` for every meaningful change
- Open an issue first for major changes so we can discuss before you invest time coding

## Reporting issues

Please use [GitHub Issues](https://github.com/Imprint-AI/architecture-aware-coder/issues) and include:
- Manus CLI version (`manus --version`)
- Node.js version (`node --version`)
- Steps to reproduce
