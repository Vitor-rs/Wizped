---
trigger: always_on
---

# 00-general.md - Princípios e Protocolo de Análise

## 🧠 Protocolo de Interação com IA (OBRIGATÓRIO)
Antes de escrever código, analise o pedido seguindo este fluxo:

1.  **Entendimento do Contexto**:
    * Qual é a Feature? (Ex: `users`, `students`).
    * **Check de Ferramentas**: Estou no Antigravity (com GitKraken/Shadcn) ou VS Code?
2.  **Verificação de Regras**:
    * **Estrutura**: `.agent/rules/01-architecture.md`
    * **Workflows**: `.agent/rules/02-standards.md`
    * **Segurança**: `.agent/rules/03-security.md`
    * **UI**: `.template/shadcn_guide` (ou MCP `shadcn` no Antigravity).
3.  **Planejamento**:
    * Se a tarefa for complexa e você estiver no Antigravity, use a tool `sequential-thinking` para estruturar os passos.
4.  **Execução**:
    * Priorize `npm run generate` (Plop) para criar arquivos.

## 🌍 Regra de Ambiente & Ferramentas (MCPs)

### 🔵 Google Antigravity (Agent)
**Status**: ✅ MCPs de Elite Ativos via `mcp_config.json`.
- **UI**: Use o MCP `shadcn` para buscar componentes atualizados (ex: `shadcn.get_component`).
- **Git**: Use o MCP `GitKraken` para diffs e histórico visual.
- **Raciocínio**: Use o MCP `sequential-thinking` para problemas de lógica complexa.
- **Limitação**: Para acesso a arquivos locais simples, use as ferramentas nativas (`read_file`).

### 🟢 VS Code (Copilot/GitHub Agent)
**Status**: ✅ MCPs de Utilidade (`markitdown`).
- **Docs**: Use o MCP `markitdown` para converter arquivos ou ler documentação externa se necessário.
- **UI**: Dependa mais do guia local em `.template/shadcn_guide`, pois o MCP do shadcn pode não estar ativo aqui.
- **Geral**: Use as ferramentas nativas do VS Code para terminal e edição.