---
trigger: always_on
---

# Coding Standards & Workflows

## Naming Conventions
- **Files**: `kebab-case` (e.g., `user-profile.store.ts`).
- **Components**: PascalCase (e.g., `UserProfile.tsx`).
- **Hooks**: camelCase (e.g., `useAuth.ts`).
- **IPC Channels**: `feature:action` (e.g., `users:create`).

## Tech Stack Standards
- **TypeScript**: Strict mode. No `any`. Define interfaces in `src/shared/types` or feature types.
- **State**: Zustand for global state.
- **Styling**: TailwindCSS + Shadcn/ui.

## 🚀 Standard Workflows

### Feature Creation Workflow
When asked to "Create a Feature" or "Scaffold", follow these exact steps:

1.  **Generate**: Run `npm run generate feature` via terminal.
2.  **Define Types**: Add the new IPC types in `src/shared/types/ipc.ts`.
    ```typescript
    'feature:action': { request: [...], response: ... }
    ```
3.  **Backend Handler**:
    - Verify `electron/main/ipc/handlers/<feature>.handlers.ts` created by Plop.
    - Implement the DB logic using Drizzle.
4.  **Registration**:
    - Import and call the handler in `electron/main/ipc/index.ts`.
5.  **Security (CRITICAL)**:
    - Add the new channels to `ALLOWED_CHANNELS` in `electron/preload/index.ts`.
6.  **Frontend Service**:
    - Verify `src/features/<feature>/services/<feature>.service.ts` calls `window.electronAPI.invoke`.

### DB Migration Workflow
1.  Edit `electron/main/database/schema.ts`.
2.  Run `npm run db:generate`.
3.  Run `npm run db:migrate`.

## 🛡️ Turso & Database Guidelines (CRITICAL)

### Naming Conventions
- **Language Consistency**: Feature name = Table name.
  - Ex: Feature `estudantes` -> Table `estudantes`.
  - ❌ Feature `estudantes` -> Table `students` (PROIBIDO).

### Migration Workflow
1. **Schema**: Edit `electron/main/database/schema.ts`.
2. **Generate**: `npm run db:generate`.
3. **Apply**:
   - `npm run db:migrate` (Production/Standard).
   - `npm run db:push` (Development/Conflict Resolution).

### Conflict Handling
- If a table exists with the wrong name (e.g., english vs portuguese conflict):
  - **DROP** the wrong table immediately.
  - Run `db:push` to sync correct schema.