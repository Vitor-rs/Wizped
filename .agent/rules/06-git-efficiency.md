---
trigger: always_on
---

# Git Efficiency & Context

## Tooling Strategy

- **Antigravity**: Use the **GitKraken MCP** (`gk.exe`) for deep context.
  - Use it to visualize blame, commit history, and graph before touching critical files.
- **VS Code**: Use the built-in Source Control tab or `git` CLI commands.

## Guidelines

1. **Context Awareness**
   - Before starting: `git status`.
   - Before committing: `git diff` (Verify your work matches intent).
2. **Safety**
   - Never commit broken builds. Always run `npm run typecheck` first.
