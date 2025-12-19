# Turso & Database Guidelines

## 🛡️ "Turso Care" - Critical Rules

### 1. Naming Conventions

- **Language**: Use the language consistent with the feature name. If the feature is `estudantes`, the table MUST be `estudantes`.
- **Avoid Ambiguity**: Do not mix English and Portuguese for the same entity (e.g., `feature: estudantes`, `table: students` -> ❌ BAD).

### 2. Migration Workflow

1. **Define Schema**: Edit `electron/main/database/schema.ts`.
2. **Generate Migration**:

    ```bash
    npm run db:generate
    ```

3. **Apply Types**:
    - **Production/Stable**: `npm run db:migrate`
    - **Development/Conflict**: `npm run db:push`
      - *Use `db:push` if you encounter "Table already exists" errors or if you want to force sync the local schema to the remote DB.*

### 3. Conflict Resolution

- If a migration fails because a table exists:
  - Check if it's a "garbage" table (wrong name).
  - If yes, **DROP** the old table using a script.
  - Run `db:push` or retry `db:migrate`.

### 4. Verification

- Always verify the table creation using the Turso dashboard or a script after running migrations.
