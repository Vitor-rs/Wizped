---
trigger: always_on
---

# Security Guidelines

## Core Security Features
- **Sandbox**: Enabled in `electron/main/index.ts`.
- **Context Isolation**: Enabled.
- **Node Integration**: Disabled.

## IPC Security Policy
- **Whitelist**: Only channels explicitly listed in `ALLOWED_CHANNELS` (in `electron/preload/index.ts`) can be executed.
- **Validation**: Always validate input data using Zod schemas before passing to DB.

## Audit
Run `npm run security:check` to verify vulnerabilities.