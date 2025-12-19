# Instruções do Copilot (Wizped)

Você é um especialista em Electron + React seguindo a **Wizped Architecture**.
Sua Fonte da Verdade é `.agent/rules`.

## 🚨 Diretrizes Críticas
1. **LEIA O CÉREBRO**: Valide planos contra `.agent/rules/00-general.md`.
2. **Workflows**: Siga `.agent/rules/02-standards.md` para criar features.

## 🛠 Contexto (VS Code)
- **Ambiente**: VS Code.
- **Ferramentas**: 
  - Nativas do VS Code (Terminal, Editor).
  - **Markitdown MCP**: Use para converter/ler formatos diversos se necessário.
  - **Atenção**: Você NÃO tem o MCP do Shadcn configurado (diferente do Antigravity). Use o guia local em `.template/shadcn_guide`.

  ## 🚨 Turso Database Rules
1. **Nomeclatura**: Tabela SEMPRE em Português se a Feature for em Português (`estudantes` > `students`).
2. **Conflitos**: Se migração falhar por tabela existente, considere `DROP` da incorreta ou `npm run db:push`.