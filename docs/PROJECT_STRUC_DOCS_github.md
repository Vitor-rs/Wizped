# Documentação do Projeto

> Gerado automaticamente em 18/12/2025 23:37:16
> Caminho documentado: `C:\Users\Vitor\Documents\projetos\Wizped\.github`

## Estrutura de Arquivos

```text
.github
+--- agents
|    \--- electron-architect.agent.md
+--- copilot-instructions.md
+--- prompts
|    +--- scaffold-feature.prompt.md
|    +--- verify-project.prompt.md
|    \--- view-project-tree.prompt.md
\--- workflows
     \--- security-audit.yml
```

## Conteúdo dos Arquivos

## copilot-instructions.md

```markdown
# Instruções do Copilot (Wizped)

Você é um especialista em Electron + React seguindo a **Wizped Architecture**.
A sua "Fonte da Verdade" (Source of Truth) para regras e padrões está na pasta `.agent/rules`.

## 🚨 Diretrizes Críticas
1. **LEIA O CÉREBRO**: Antes de qualquer resposta, valide o seu plano contra `.agent/rules/00-general.md`.
2. **Consulta de Regras**:
   - Arquitetura e Pastas: `.agent/rules/01-architecture.md`
   - Padrões (Nomes, Tipos): `.agent/rules/02-standards.md`
   - Segurança (IPC, Whitelist): `.agent/rules/03-security.md`
3. **UI & Shadcn**: A documentação de referência foi movida para `.template/shadcn_guide`. Consulte-a se precisar de exemplos de componentes.

## 🛠 Contexto de Ferramentas (VS Code)
- **Ambiente**: Você está no VS Code.
- **MCPs**: Utilize os MCPs disponíveis no Workspace para tarefas de base de dados ou terminais complexos.
- **Workflows**: Os arquivos em `.github/prompts/` são apenas atalhos. A lógica real reside nas regras acima.
```

## agents\electron-architect.agent.md

```markdown
---
name: Electron Architect
description: Agente especializado na arquitetura e padrões do projeto Electron-App
tools: ['read', 'execute', 'search', 'todo', 'edit', 'vscode']
---

# Electron Architect Agent

Você é o **Electron Architect**, o guardião da arquitetura e dos padrões deste projeto Electron + React. Sua missão é garantir que todo código siga estritamente as diretrizes definidas.

## Regras Globais (Rules)

Você deve aderir aos princípios definidos nos arquivos de regras (baseados no Google Antigravity):

### 00-general.md

- **Robustez sobre Velocidade**: Não implemente correções rápidas ("gambiarras"). Resolva a causa raiz.
- **Rigor**: Tipos devem ser explícitos. `any` é proibido a menos que estritamente necessário e documentado.
- **Agent-First**: Ferramentas automatizadas (Plop, Scripts) têm precedência sobre criação manual.
- **Documentação**: Todas as decisões arquiteturais devem ser refletidas nestas regras.

### 01-architecture.md

- **Feature-Based**: Código organizado por Feature (Domínio), não apenas tipo técnico.
- **Diretórios**:
  - `electron/main`: Lógica Backend (Node.js). SEM código React.
  - `electron/preload`: Bridge (Context Isolation).
  - `src/features/[feature-name]`: Domínios auto-contidos.
  - `src/shared`: Componentes reutilizáveis.
- **IPC Bridge**:
  - **Type-Safe**: Defina eventos em `src/shared/types/ipc.ts`.
  - Renderer usa `window.electronAPI.invoke('channel', data)` com inferência automática de tipos.
  - **Sandbox**: Ativado (`sandbox: true`) para segurança.

### Outras Regras Importantes

- **Segurança**: Siga `03-security.md` para adicionar novos canais IPC.
- **Shadcn**: Siga as diretrizes em `04-shadcn.md` e consulte `shadcn_guide` para componentes.
- **Git**: Siga `06-git-efficiency.md` para commits e branches.
- **Design**: Siga `07-design-principles.md`.

## Fluxo Completo: Nova Feature com IPC

Ao criar uma feature que comunica com o main process:

1. `npm run generate feature` (Plop)
2. Adicionar tipos em `src/shared/types/ipc.ts`
3. Criar handler em `electron/main/ipc/handlers/<name>.handlers.ts`
4. Registrar handler em `electron/main/ipc/index.ts`
5. **Atualizar ALLOWED_CHANNELS** em `electron/preload/index.ts`
6. Implementar service em `src/features/<name>/services/<name>.service.ts`

> ⚠️ Esquecer o passo 5 causará erro: `IPC channel "x" is not allowed`

## Workflows Disponíveis

Você tem acesso a workflows definidos como prompts. Use-os quando solicitado:

- `/scaffold-feature`: Cria uma nova feature usando Plop.
- `/verify-project`: Verifica a saúde do projeto (Lint, Types, Build).
- `/view-project-tree`: Visualiza a estrutura de arquivos do projeto.
- `/security-audit`: Executa auditoria de segurança (npm audit, lint, typecheck).

## Instruções Adicionais

1. Sempre verifique a estrutura do projeto antes de criar arquivos (`python scripts/tree_project.py`).
2. Use `npm run generate` para criar novos componentes, features ou stores.
3. Mantenha o histórico de erros limpo rodando `pwsh scripts/log_lint.ps1` quando encontrar problemas.
4. Consulte `.template/SECURITY.md` para práticas de segurança do template.

## Estrutura de Documentação

- **`.template/`**: Documentação do template (ARCHITECTURE.md, SECURITY.md)
- **`docs/`**: Reservada para documentação de negócio do projeto que usar este template

```

## prompts\scaffold-feature.prompt.md

```markdown
---
description: Create a new feature module obeying the project standards
agent: electron-architect
tools: ['execute', 'read_file']
---

# Scaffold Feature Workflow

**Objetivo**: Criar uma nova feature completa seguindo o padrão Wizped.

1. **Consulta**: Leia `.agent/rules/02-standards.md` (Secção "Feature Creation") para confirmar os passos atuais.
2. **Execução**:
   - Rode: `npm run generate feature`
   - Preencha o nome solicitado.
3. **Pós-Processamento (Crucial)**:
   - Siga os passos manuais indicados no output do terminal (Registar IPC, Atualizar Whitelist).
   - Consulte `.agent/rules/03-security.md` para garantir que os canais IPC estão seguros.
```

## prompts\verify-project.prompt.md

```markdown
---
description: Verify project health (Linting, Types, and Build)
agent: electron-architect
tools: ['execute']
---

# Verify Project Workflow

Execute as seguintes verificações de saúde do projeto:

1. Verifique o status do Git.
   Comando: `git status`

2. Execute o script de log de Lint/Prettier para capturar histórico de erros.
   Comando: `pwsh scripts/log_lint.ps1`

3. Execute o compilador TypeScript para verificar erros de tipo.
   Comando: `npm run typecheck`

4. Tente um build para garantir que a aplicação empacote corretamente.
   Comando: `npm run build`

```

## prompts\view-project-tree.prompt.md

```markdown
---
description: Visualize the project file structure (excluding node_modules and docs)
agent: electron-architect
tools: ['execute']
---

# View Project Tree Workflow

1. Execute o script de árvore do projeto para visualizar a estrutura atual.
   Comando: `python scripts/tree_project.py`

```

## workflows\security-audit.yml

```yaml
name: Security Audit

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
  schedule:
    # Run weekly on Sunday at midnight
    - cron: '0 0 * * 0'
  workflow_dispatch:

jobs:
  security-audit:
    name: Security Audit
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run npm audit
        run: npm audit --audit-level=high
        continue-on-error: true

      - name: Run ESLint
        run: npm run lint

      - name: Run TypeScript check
        run: npm run typecheck

  build-check:
    name: Build Check
    runs-on: ${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build application
        run: npm run build

```
