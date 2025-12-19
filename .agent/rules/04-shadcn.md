---
trigger: always_on
---

# Shadcn/UI Guidelines

## Usage Policy

### 🔵 Antigravity Users (MCP Enabled)
You have the **Shadcn MCP Server** configured.
1. **Prefer the MCP**: Use the `shadcn` tool to fetch component code and dependencies directly from the registry.
2. **Fallback**: If the MCP fails, consult the local guide in `.template/shadcn_guide`.

### 🟢 VS Code Users
1. **Primary Source**: Consult the local copy in `.template/shadcn_guide`.
2. **Execution**: Use `npx shadcn@latest add <component>` in the terminal.

## How to Find Components (Manual)
Run `python scripts/tree_shadcn.py` to see the local structure.