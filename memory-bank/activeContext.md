# Active Context

## Estado Atual do Projeto

### Status Geral

O projeto está em estado **estável e funcional** como template base. Todas as funcionalidades core estão implementadas e testadas. O template está pronto para ser usado como base para novos projetos.

## Foco Atual

### Manutenção e Melhorias

- **Documentação**: Manter AGENTS.md e Memory Bank atualizados
- **Padrões**: Garantir consistência conforme o projeto evolui
- **Dependências**: Manter atualizadas e testadas

### Próximos Passos Sugeridos

1. **Monitorar uso**: Coletar feedback de desenvolvedores usando o template
2. **Evolução da stack**: Acompanhar atualizações das dependências principais
3. **Exemplos adicionais**: Adicionar mais exemplos de uso conforme necessário
4. **Melhorias incrementais**: Refinar padrões baseado em uso real

## Mudanças Recentes

### Estrutura Criada

- ✅ Memory Bank completo criado
- ✅ AGENTS.md criado com padrões e instruções completas do projeto
- ✅ Documentação organizada e atualizada

### Componentes Implementados

- ✅ Sistema de providers (Motion, Query, Theme)
- ✅ API client completo com retry e tratamento de erros
- ✅ Sistema de animações centralizado
- ✅ Validação de ambiente com Zod
- ✅ Configurações e constantes centralizadas
- ✅ Páginas de erro, loading e 404
- ✅ Exemplo completo de API Route Handler

### Componentes UI Disponíveis

- ✅ button, card, dialog, dropdown-menu
- ✅ input, label, popover, skeleton, sonner
- ✅ form (e componentes relacionados do shadcn)

## Decisões Ativas

### Arquitetura

- **Server Components por padrão**: Mantido como padrão
- **shadcn/ui como base UI**: Não misturar outras libs de UI
- **Centralização de animações**: Todas as variantes em `lib/motion.ts`
- **Validação centralizada**: Zod para schemas, `lib/env.ts` para ambiente

### Padrões de Código

- **TypeScript strict**: Obrigatório e não negociável
- **kebab-case para arquivos**: Consistência mantida
- **Imports com alias `@/`**: Sempre preferido
- **Exports nomeados**: Para utilitários e componentes (exceto páginas)

## Considerações Importantes

### Para Novos Desenvolvedores

1. Ler `AGENTS.md` antes de começar
2. Entender estrutura de pastas em `systemPatterns.md`
3. Seguir exemplos existentes (ex: `app/api/example/route.ts`)
4. Usar componentes shadcn/ui antes de criar custom

### Para Agentes de IA

1. Sempre ler `AGENTS.md` e Memory Bank
2. Seguir padrões estabelecidos rigorosamente
3. Não criar variantes duplicadas (usar as existentes)
4. Preferir Server Components sempre que possível
5. Validar ambiente via `lib/env.ts`, nunca `process.env` direto

## Áreas de Atenção

### Pontos Críticos

- **Autenticação**: Não implementada - deve ser adicionada conforme necessidade
- **Banco de dados**: Não incluído - template frontend apenas
- **Estado global**: Zustand não incluído por padrão (opcional)

### Melhorias Futuras Potenciais

- Adicionar mais exemplos de uso de React Query
- Exemplos de formulários complexos
- Exemplos de autenticação (quando necessário)
- Mais componentes shadcn/ui conforme demanda

## Contexto de Uso

### Quando Usar Este Template

- ✅ Iniciar novo projeto frontend com Next.js
- ✅ Precisa de base sólida rapidamente
- ✅ Quer consistência entre projetos
- ✅ Trabalha com agentes de IA (Cursor, etc.)

### Quando NÃO Usar

- ❌ Projeto já estabelecido com stack diferente
- ❌ Precisa de configuração muito específica desde o início
- ❌ Não usa Next.js ou React

## Notas de Implementação

### Providers Globais

Todos os providers estão no `app/layout.tsx`:
- `ThemeProvider` (next-themes)
- `MotionProvider` (Framer Motion)
- `QueryProvider` (React Query)
- `Toaster` (Sonner)

**Importante**: Não criar novos providers duplicando esses contextos.

### Sistema de Animações

- Variantes centralizadas em `lib/motion.ts`
- Provider respeita `prefers-reduced-motion`
- Hook `useOnceInView` para animações on-scroll
- Não criar variantes locais - usar as existentes

### API Client

- Configurado em `lib/api-client.ts`
- Suporta retry automático
- Tratamento de erros centralizado
- Helper `queryFn()` para React Query
- Token de autenticação deve ser implementado conforme necessidade

