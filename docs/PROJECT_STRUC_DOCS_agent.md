# Documentação do Projeto

> Gerado automaticamente em 18/12/2025 23:37:13
> Caminho documentado: `C:\Users\Vitor\Documents\projetos\Wizped\.agent`

## Estrutura de Arquivos

```text
.agent
+--- lint_history.txt
+--- rules
|    +--- 00-general.md
|    +--- 01-architecture.md
|    +--- 02-standards.md
|    +--- 03-security.md
|    +--- 04-shadcn.md
|    +--- 05-error-history.md
|    +--- 06-git-efficiency.md
|    +--- 07-design-principles.md
|    \--- 08-ai-interaction.md
\--- workflows
     +--- scaffold_feature.md
     +--- security-audit.md
     +--- verify_project.md
     \--- view_project_tree.md
```

## Conteúdo dos Arquivos

## lint_history.txt

```txt

----------------------------------------
[LINT RUN] 2025-12-13 17:12:47
----------------------------------------


C:\Users\Vitor\Documents\projetos\Templates\Electron-App\electron\preload\index.ts
  27:66  error  Invalid type "never" of template literal expression  @typescript-eslint/restrict-template-expressions
  35:20  error  Unexpected empty arrow function                      @typescript-eslint/no-empty-function

C:\Users\Vitor\Documents\projetos\Templates\Electron-App\src\shared\components\ui\badge.tsx
  37:17  warning  Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components  react-refresh/only-export-components

C:\Users\Vitor\Documents\projetos\Templates\Electron-App\src\shared\components\ui\button.tsx
  60:18  warning  Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components  react-refresh/only-export-components

C:\Users\Vitor\Documents\projetos\Templates\Electron-App\src\shared\components\ui\sidebar.tsx
  705:3  warning  Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components  react-refresh/only-export-components

Ô£û 5 problems (2 errors, 3 warnings)


[PRETTIER CHECK]

Checking formatting...
[warn] .agent/rules/01-architecture.md
[warn] .agent/workflows/security-audit.md
[warn] .github/agents/electron-architect.agent.md
[warn] .github/copilot-instructions.md
[warn] .github/prompts/scaffold-feature.prompt.md
[warn] .github/prompts/verify-project.prompt.md
[warn] .github/prompts/view-project-tree.prompt.md
[warn] .github/workflows/security-audit.yml
[warn] .lintstagedrc.mjs
[warn] .vscode/extensions.json
[warn] .vscode/settings.json
[warn] commitlint.config.mjs
[warn] docs/SECURITY.md
[warn] electron-builder.yml
[warn] electron/main/index.ts
[warn] electron/preload/index.ts
[warn] eslint.config.mjs
[warn] index.html
[warn] package-lock.json
[warn] package.json
[warn] plop-templates/component/component.tsx.hbs
[warn] plop-templates/component/index.ts.hbs
[warn] plop-templates/feature/index.ts.hbs
[error] plop-templates/feature/schema.ts.hbs: SyntaxError: Unclosed element `typeof` (19:55)
[error]   17 |
[error]   18 | export type {{pascalCase name}}FormData = z.infer<typeof create{{pascalCase name}}Schema>
[error] > 19 | export type Update{{pascalCase name}}FormData = z.infer<typeof update{{pascalCase name}}Schema>
[error]      |                                                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
[error]   20 |
[warn] plop-templates/feature/service.ts.hbs
[error] plop-templates/feature/store.ts.hbs: SyntaxError: Cannot use mustaches in an elements tagname (20:50)
[error]   18 | }
[error]   19 |
[error] > 20 | export const use{{pascalCase name}}Store = create<{{pascalCase name}}State & {{pascalCase name}}Actions>()(
[error]      |                                                  ^^^^^^^^^^^^^^^^^^^
[error]   21 |   devtools(
[error]   22 |     (set) => ({
[error]   23 |       ...initialState,
[warn] plop-templates/feature/types.ts.hbs
[error] plop-templates/store/store.ts.hbs: SyntaxError: Cannot use mustaches in an elements tagname (20:50)
[error]   18 | }
[error]   19 |
[error] > 20 | export const use{{pascalCase name}}Store = create<{{pascalCase name}}State & {{pascalCase name}}Actions>()(
[error]      |                                                  ^^^^^^^^^^^^^^^^^^^
[error]   21 |   devtools(
[error]   22 |     (set) => ({
[error]   23 |       ...initialState,
[warn] plopfile.mjs
[warn] postcss.config.mjs
[warn] prettier.config.mjs
[warn] src/app/components/AppSidebar.tsx
[warn] src/app/layouts/RootLayout.tsx
[warn] src/features/home/components/HomePage.tsx
[warn] src/features/users/services/user.service.ts
[warn] src/index.css
[warn] src/shared/components/ui/badge.tsx
[warn] src/shared/components/ui/button.tsx
[warn] src/shared/components/ui/card.tsx
[warn] src/shared/components/ui/input.tsx
[warn] src/shared/components/ui/scroll-area.tsx
[warn] src/shared/components/ui/separator.tsx
[warn] src/shared/components/ui/sheet.tsx
[warn] src/shared/components/ui/sidebar.tsx
[warn] src/shared/components/ui/skeleton.tsx
[warn] src/shared/components/ui/tooltip.tsx
[warn] src/shared/hooks/use-mobile.ts
[warn] src/shared/types/ipc.ts
[warn] tailwind.config.js
[warn] tsconfig.json
[warn] tsconfig.preload.json
Error occurred when checking code style in 3 files.

----------------------------------------
[LINT RUN] 2025-12-18 22:50:55
----------------------------------------


C:\Users\Vitor\Documents\projetos\Wizped\electron\main\database\client.ts
  53:12  error  This assertion is unnecessary since it does not change the type of the expression  @typescript-eslint/no-unnecessary-type-assertion

Ô£û 1 problem (1 error, 0 warnings)
  1 error and 0 warnings potentially fixable with the `--fix` option.


[PRETTIER CHECK]

Checking formatting...
[warn] .agent/rules/01-architecture.md
[warn] .agent/rules/03-security.md
[warn] .agent/rules/08-ai-interaction.md
[warn] .agent/workflows/scaffold_feature.md
[warn] .github/agents/electron-architect.agent.md
[warn] .github/copilot-instructions.md
[warn] .github/prompts/scaffold-feature.prompt.md
[warn] .github/prompts/verify-project.prompt.md
[warn] .github/prompts/view-project-tree.prompt.md
[warn] .github/workflows/security-audit.yml
[warn] .lintstagedrc.mjs
[warn] .vscode/extensions.json
[warn] .vscode/settings.json
[warn] commitlint.config.mjs
[warn] docs/PROJECT_STRUC_DOCS.md
[warn] docs/README.md
[warn] electron-builder.yml
[warn] eslint.config.mjs
[warn] index.html
[warn] plop-templates/component/component.tsx.hbs
[warn] plop-templates/component/index.ts.hbs
[error] plop-templates/feature/handler.ts.hbs: SyntaxError: Unclosed element `string,` (28:25)
[error]   26 |     const result = db
[error]   27 |       .update({{camelCase name}}s)
[error] > 28 |       .set(data as Record<string, unknown>)
[error]      |                         ^^^^^^^^^^^^^^^^^
[error]   29 |       .where(eq({{camelCase name}}s.id, id))
[error]   30 |       .returning()
[error]   31 |       .get()
[warn] plop-templates/feature/index.ts.hbs
[error] plop-templates/feature/schema.ts.hbs: SyntaxError: Unclosed element `typeof` (19:55)
[error]   17 |
[error]   18 | export type {{pascalCase name}}FormData = z.infer<typeof create{{pascalCase name}}Schema>
[error] > 19 | export type Update{{pascalCase name}}FormData = z.infer<typeof update{{pascalCase name}}Schema>
[error]      |                                                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
[error]   20 |
[error] plop-templates/feature/service.ts.hbs: SyntaxError: Cannot use mustaches in an elements tagname (23:37)
[error]   21 |
[error]   22 |   async update(id: string, data: Record<string, unknown>) {
[error] > 23 |     // TODO: Replace with Partial<New{{pascalCase name}}> after defining
[error]      |                                     ^^^^^^^^^^^^^^^^^^^
[error]   24 |     return window.electronAPI.invoke('{{kebabCase name}}:update', id, data)
[error]   25 |   },
[error]   26 |
[error] plop-templates/feature/store.ts.hbs: SyntaxError: Cannot use mustaches in an elements tagname (20:50)
[error]   18 | }
[error]   19 |
[error] > 20 | export const use{{pascalCase name}}Store = create<{{pascalCase name}}State & {{pascalCase name}}Actions>()(
[error]      |                                                  ^^^^^^^^^^^^^^^^^^^
[error]   21 |   devtools(
[error]   22 |     (set) => ({
[error]   23 |       ...initialState,
[warn] plop-templates/feature/types.ts.hbs
[error] plop-templates/store/store.ts.hbs: SyntaxError: Cannot use mustaches in an elements tagname (20:50)
[error]   18 | }
[error]   19 |
[error] > 20 | export const use{{pascalCase name}}Store = create<{{pascalCase name}}State & {{pascalCase name}}Actions>()(
[error]      |                                                  ^^^^^^^^^^^^^^^^^^^
[error]   21 |   devtools(
[error]   22 |     (set) => ({
[error]   23 |       ...initialState,
[warn] plopfile.mjs
[warn] postcss.config.mjs
[warn] prettier.config.mjs
[warn] src/app/components/AppSidebar.tsx
[warn] src/app/layouts/RootLayout.tsx
[warn] src/features/home/components/HomePage.tsx
[warn] src/features/users/services/user.service.ts
[warn] src/features/users/stores/user.store.ts
[warn] src/index.css
[warn] src/shared/components/ui/badge.tsx
[warn] src/shared/components/ui/button.tsx
[warn] src/shared/components/ui/card.tsx
[warn] src/shared/components/ui/input.tsx
[warn] src/shared/components/ui/scroll-area.tsx
[warn] src/shared/components/ui/separator.tsx
[warn] src/shared/components/ui/sheet.tsx
[warn] src/shared/components/ui/sidebar.tsx
[warn] src/shared/components/ui/skeleton.tsx
[warn] src/shared/components/ui/tooltip.tsx
[warn] src/shared/hooks/use-mobile.ts
[warn] src/shared/types/ipc.ts
[warn] tailwind.config.js
[warn] tsconfig.json
[warn] tsconfig.web.json
[warn] Wizped.code-workspace
Error occurred when checking code style in 5 files.

```

## rules\00-general.md

```markdown
---
trigger: always_on
---

# 00-general.md - Princípios e Protocolo de Análise

## 🧠 Protocolo de Interação com IA (OBRIGATÓRIO)
Antes de escrever qualquer linha de código ou executar comandos, analise o pedido seguindo este fluxo:

1.  **Entendimento do Contexto**:
    * Qual é a Feature (Domínio) envolvida? (Ex: `users`, `students`, `settings`).
    * O ambiente atual suporta MCPs? (Verifique a secção "Regra de Ambiente" abaixo).
2.  **Verificação de Regras ("Check the Book")**:
    * Estrutura de Pastas: Consulte `01-architecture.md`.
    * Padrões de Código: Consulte `02-standards.md`.
    * Segurança/IPC: Consulte `03-security.md`.
    * Interface (UI): Consulte `.template/shadcn_guide` antes de criar componentes.
3.  **Planeamento**:
    * Liste mentalmente os ficheiros que serão criados ou modificados.
    * Verifique se já existe um script em `scripts/` ou comando `npm run` para a tarefa.
4.  **Execução**:
    * **Agent-First**: Priorize ferramentas automatizadas (Plop, Scripts) sobre edição manual.
    * **Robustez**: Não faça "gambiarras". Se faltar um tipo, defina-o.

## 🌍 Regra de Ambiente (MCPs vs Nativo)
Adapte a sua abordagem dependendo de onde você está a rodar:

- **VS Code (Copilot/GitHub)**:
  - ✅ **MCPs Ativos**: Você TEM acesso a ferramentas do Workspace e Banco de Dados. Utilize-as para leitura direta e operações complexas.
  
- **Google Antigravity (Agent)**:
  - ❌ **Sem MCPs de Projeto**: Você NÃO tem acesso direto a ferramentas externas configuradas via MCP.
  - **Alternativa**: Utilize ferramentas nativas de ficheiros (`read_file`, `grep`, `tree`) e scripts do projeto (`npm run db:studio` ou scripts Python em `scripts/`) para obter contexto.
```

## rules\01-architecture.md

```markdown
---
activation: always_on
---

# Architecture & Structure

## Feature-Based

Code is organized by **Feature** (Domain) logic, not just technical type.

### Directory Map

- electron/main: Backend logic (Node.js). NO React code.
- electron/preload: Bridge (Context Isolation).
- src/features/[feature-name]: Self-contained domains.
- src/shared: Reusable components.

### Documentation Structure

- **.template/**: Template documentation (ARCHITECTURE.md, SECURITY.md)
- **docs/**: Reserved for business documentation of projects using this template

## IPC Bridge & Security

- **Sandbox**: Enabled in electron/main/index.ts for enhanced security.
- **Type-Safe IPC**: Define events in src/shared/types/ipc.ts.
- **Channel Whitelist**: All IPC channels must be in ALLOWED_CHANNELS in electron/preload/index.ts.

## Adding New IPC Channels

1. Add types in src/shared/types/ipc.ts
2. Create handler in electron/main/ipc/handlers/
3. Register handler in electron/main/ipc/index.ts
4. **Update ALLOWED_CHANNELS** in electron/preload/index.ts
5. Create service in src/features/

See .template/SECURITY.md for full security documentation.

## Structure Visualization

Run: python scripts/tree_project.py

```

## rules\02-standards.md

```markdown
---
activation: always_on
---

# Coding Standards

## Naming

- **Files**: `kebab-case` (e.g., `user-profile.store.ts`).
- **Components**: PascalCase (e.g., `UserProfile.tsx`).
- **Hooks**: camelCase (e.g., `useAuth.ts`).

## TypeScript

- **Strict**: `noImplicitAny` is ON.
- **Interfaces**: Explicit types.

## React

- Functional Components.
- Custom Hooks for logic.

```

## rules\03-security.md

```markdown
---
activation: always_on
---

# Security Guidelines

## Overview

This project implements multiple security layers following Electron official best practices.
Full documentation is available in .template/SECURITY.md.

## Core Security Features

### Main Process (electron/main/index.ts)

- sandbox: true - Renderer isolation
- contextIsolation: true - Preload script separation
- nodeIntegration: false - No Node.js in renderer
- webviewTag: false - Webview disabled
- Permission Handler - Whitelist-based permissions
- Navigation Blocking - External URLs blocked

### Preload Script (electron/preload/index.ts)

- **ALLOWED_CHANNELS**: Only whitelisted IPC channels can be invoked
- When adding new IPC channels, you MUST update ALLOWED_CHANNELS

## Workflow: Adding New IPC Channels

1. Add types in src/shared/types/ipc.ts
2. Create handler in electron/main/ipc/handlers/name.handlers.ts
3. Register handler in electron/main/ipc/index.ts
4. Update ALLOWED_CHANNELS in electron/preload/index.ts
5. Create service in src/features/name/services/name.service.ts

## Security Audit

Run npm run security:check or use workflow /security_audit to verify.

```

## rules\04-shadcn.md

```markdown
---
trigger: always_on
---

# Shadcn/UI Guidelines

## Usage Policy

We have a local copy of the Shadcn documentation and components in `.templat\shadcn_guide`.
**YOU MUST PREFER THIS LOCAL GUIDE OVER INTERNET SEARCH.**e

## How to Explore the Guide

To view the full structure of the available documentation, run the following command:
`python scripts/tree_shadcn.py`
This will output the file tree of `.agent/shadcn_guide`.

## How to Find Components

1. **Explore**: Run the tree script above to locate the component you need.
2. **Read**: Look in `.agent/shadcn_guide/components_db/[Component].md` or `registry` for implementation details.
3. **Registry Fallback (MCP)**:
   - If the local guide is ambiguous or missing a specific registry item, use the **Shadcn MCP** tools.
   - Use `shadcn` tools to query the live registry for the latest component definitions (e.g., `@acme` components).

## LLM Helper

Refer to `.agent/shadcn_guide/llms.txt` for official documentation links if local context is insufficient.
```

## rules\05-error-history.md

```markdown
---
activation: always_on
---

# Lint Error History & Prevention

## Historical Context

We maintain a persistent log of linting and formatting errors in `.agent/lint_history.txt`.
**Purpose**: To allow Agents to learn from past mistakes and avoid recurring issues (e.g., repeating the same invalid import or type error).

## Workflow

1. **Detection**: Run `/verify_project` (or `pwsh scripts/log_lint.ps1`) to verify code and append errors to the log.
2. **Analysis**: Before fixing, check the end of `.agent/lint_history.txt` to see the exact errors.
3. **Prevention**: If you see the same error appearing multiple times in the history, STOP and rethink the approach. Do not apply the same failed fix.

```

## rules\06-git-efficiency.md

```markdown
---
activation: always_on
---

# Git Efficiency & Context

## purpose

This rule mandates the use of the **Git MCP Server** to maintain context and ensure safety.

## Guidelines

1. **Context Awareness**
   - Before starting a complex task, check the current state:
     - Use `git_status` to see modified files.
     - Use `git_log` to understand recent changes in the `feature` you are working on.

2. **Safety Checks**
   - Before applying a fix:
     - Use `git_diff` to verify what you are about to change.
   - After applying a fix:
     - Use `git_diff` again to verify the _actual_ change matches your _intent_ before considering the task done.

3. **Verification**
   - If a test fails, use `git_diff` to see if recent changes caused it.

```

## rules\07-design-principles.md

```markdown
---
activation: always_on
---

# Design System & React Principles (TkDodo Style)

## Core Philosophy

**"Help Teams Ship"** - The design system is a gateway to speed.

## Rules

1.  **Props Over Booleans**: Avoid `isBlue`, `isBig`. Use `variant="blue"`, `size="lg"`.
    - _Bad_: `<Button isPrimary isLarge />`
    - _Good_: `<Button variant="primary" size="lg" />`
2.  **Strict Type-Safety**:
    - Avoid `any`.
    - Use Zod for runtime validation equivalent to build-time types.
    - Export component Prop interfaces.
3.  **Composition > Configuration**:
    - Don't build a `TooltipButton` component. Build a `Button` that can be wrapped in a `Tooltip`.
    - "Tooltip Components Should Not Exist" -> The _concept_ exists, but avoid mega-components.
4.  **Colocation**: Types, Styles, and Logic should live close to where they are used.
5.  **State**: State syncing is evil. Prefer derived state.
    - Use `useMemo` for expensive derivations.
6.  **Accessibility (a11y)**: Built-in, not bolt-on. Use `aria-*` attributes correctly.

```

## rules\08-ai-interaction.md

```markdown
---
trigger: always_on
---

# 08-ai-interaction.md - Comportamento e Autonomia

## Modo de Operação
- **Autonomia**: Analise a árvore de diretórios (`python scripts/tree_project.py`) para se situar. Não espere o utilizador "dar a mão".
- **Sem MCPs? Sem Problema**: 
  - Se o utilizador pedir algo que exigiria um MCP (ex: "consulte o banco de dados produção"), explique a limitação do ambiente Antigravity.
  - Proponha alternativas locais, como criar um script de verificação ou consultar o schema em `electron/main/database/schema.ts`.

## Mapeamento de Recursos
- **Regras de Ouro**: `.agent/rules/`
- **UI Reference**: `.template/shadcn_guide/`
- **Automação**: Use sempre `npm run generate` (via terminal) para criar Features, Components ou Stores. Não crie ficheiros manualmente se o Plop puder fazê-lo.
```

## workflows\scaffold_feature.md

```markdown
---
description: Create a new feature module using standardized templates
activation: manual
---

// turbo-all

1. Execute the Plop generator for a feature.
   Command: npm run generate feature

2. Verify that the new feature folder was created in src/features/.

3. Add IPC types in src/shared/types/ipc.ts:
   - Add channel definitions for: getAll, getById, create, update, delete

4. Register the handler in electron/main/ipc/index.ts:
   - Import registerFeatureNameHandlers
   - Call it inside registerIpcHandlers()

5. **IMPORTANT**: Update ALLOWED_CHANNELS in electron/preload/index.ts:
   - Add all new channel names to the Set

6. (Optional) Register routes in src/app/router/index.tsx if feature has pages.

7. Run lint to ensure compliance:
   Command: npm run lint

```

## workflows\security-audit.md

```markdown
---
description: Run security audit on the project
---

# Security Audit Workflow

Run this workflow to check for security vulnerabilities and code quality issues.

## Steps

// turbo-all

1. Run npm audit to check for vulnerable dependencies:
   Command: `npm audit --audit-level=high`

2. Run ESLint to check for code quality issues:
   Command: `npm run lint`

3. Run TypeScript check to verify type safety:
   Command: `npm run typecheck`

4. (Optional) Run full security check:
   Command: `npm run security:check`

```

## workflows\verify_project.md

```markdown
---
description: Verify project health (Linting, Types, and Build)
activation: manual
---

// turbo-all

1. Check Git Status (MCP)
   Command: `git status`

2. Run Lint/Prettier Logging Script to capture error history.
   Command: `pwsh scripts/log_lint.ps1`

3. Run TypeScript compiler to check for type errors.
   Command: `npm run typecheck`

4. Attempt a build to ensure the application bundles correctly.
   Command: `npm run build`

```

## workflows\view_project_tree.md

```markdown
---
description: Visualize the project file structure (excluding node_modules and docs)
activation: manual
---

1. Execute the project tree script.
   Command: `python scripts/tree_project.py`

```
