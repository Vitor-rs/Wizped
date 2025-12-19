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
    * **Estrutura**: Consulte `.agent/rules/01-architecture.md`.
    * **Padrões & Workflows**: Consulte `.agent/rules/02-standards.md` (Crucial para criar features).
    * **Segurança**: Consulte `.agent/rules/03-security.md`.
    * **UI**: Consulte `.template/shadcn_guide` antes de criar componentes.
3.  **Planejamento**:
    * Liste mentalmente os ficheiros que serão criados ou modificados.
    * Verifique se já existe um script em `scripts/` ou comando `npm run` para a tarefa.
4.  **Execução**:
    * **Agent-First**: Priorize ferramentas automatizadas (`npm run generate`, `npm run db:migrate`) sobre edição manual.
    * **Robustez**: Não faça "gambiarras". Se faltar um tipo, defina-o corretamente.

## 🌍 Regra de Ambiente (MCPs vs Nativo)
Adapte a sua abordagem dependendo de onde você está a rodar:

- **VS Code (Copilot/GitHub)**:
  - ✅ **MCPs Ativos**: Você TEM acesso a ferramentas do Workspace e Banco de Dados. Utilize-as para leitura direta e operações complexas.
  
- **Google Antigravity (Agent)**:
  - ❌ **Sem MCPs de Projeto**: Você NÃO tem acesso direto a ferramentas externas configuradas via MCP.
  - **Alternativa**: Utilize ferramentas nativas de ficheiros (`read_file`, `grep`, `tree`) e scripts do projeto (`npm run db:studio` ou scripts Python em `scripts/`) para obter contexto.