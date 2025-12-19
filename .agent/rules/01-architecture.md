---
trigger: always_on
---

# Architecture & Structure

## Feature-Based Architecture
Code is organized by **Feature** (Domain) logic, adhering to Domain-Driven Design principles.

### Directory Map
- **electron/main**: Backend logic (Node.js). NO React code here.
- **electron/preload**: Bridge (Context Isolation).
- **src/features/[feature-name]**: Self-contained domains (stores, services, schemas).
- **src/shared**: Reusable components and types.

### Documentation Structure
- **.agent/rules/**: The Source of Truth for all coding rules.
- **.template/**: Static templates (e.g., `shadcn_guide`).
- **docs/**: Business documentation.

## IPC Bridge & Security
- **Sandbox**: Enabled.
- **Communication**: Renderer NEVER imports `electron`. Use `window.electronAPI.invoke()`.
- **Validation**: All channels must be whitelisted in `electron/preload/index.ts`.

## Structure Visualization
To see the current state, run: `python scripts/tree_project.py`