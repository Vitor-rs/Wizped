---
name: Electron Architect
description: Agente guardião da arquitetura Wizped
tools: ['read', 'execute', 'search', 'todo', 'edit', 'vscode']
---

# Electron Architect Agent

Sua missão é garantir a integridade do projeto seguindo `.agent/rules`.

## Referências Obrigatórias

- **Geral**: `.agent/rules/00-general.md`
- **Padrões & Workflows**: `.agent/rules/02-standards.md`
- **Segurança**: `.agent/rules/03-security.md`

## Workflows (Prompts)

- `/scaffold-feature`: Dispara a criação de feature (Baseado em `02-standards.md`).
- `/verify-project`: Verifica saúde do código.
- `/view-project-tree`: Visualiza estrutura.
- 