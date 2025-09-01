# Arquitetura e Convenções

## Estrutura de pastas
- `app/(marketing)/*` → rotas públicas
- `app/(app)/*` → rotas autenticadas / aplicação
- `app/api/*` → rotas de API (route handlers tipados com zod)
- `components/*` → UI compartilhada (sem regra de negócio)
- `components/ui/*` → componentes shadcn/ui gerados via CLI
- `lib/*` → utilitários (ex.: `cn.ts`, `motion.ts`, `env.ts`, clients, schemas)
- `hooks/*` → hooks cliente
- `providers/*` → providers cliente (`MotionProvider`, `QueryProvider`, etc.)

## Providers globais
- `MotionProvider` e `QueryProvider` já envolvidos no `app/layout.tsx`.
- `Toaster` (Sonner) global já incluso no layout.
- Nunca criar novo provider duplicando esses contextos.

## APIs
- Todas as rotas em `app/api/*` como `route.ts`.
- Validar entrada/saída com `zod`.
- Não acessar `process.env` direto dentro da rota → usar `lib/env.ts`.

## Acessibilidade
- Todo componente interativo com atributos `aria-*`.
- Foco visível obrigatório; não remover outline sem substituto.

## Páginas de infra
- `app/(app)/loading.tsx` → fallback global de loading.
- `app/(app)/error.tsx` → error boundary global.
- `app/not-found.tsx` → 404 global.
- Não duplicar fallback em cada página sem motivo.

## Testes
- Script reservado: `pnpm test` (configuração futura).
- Começar por testes de utilitários em `lib/*` e hooks em `hooks/*`.

## Commits
- Convenção: `feat:`, `fix:`, `chore:`, `refactor:`, `docs:`.
- Mensagem curta e imperativa.

## Motion
- Componentes que usam Motion precisam ser Client Components (`"use client"` no topo).
- Alternativa: isolar apenas a parte animada em subcomponente cliente.
- Variantes e transições sempre centralizadas em `lib/motion.ts`.

## Dados
- Buscar dados remotos sempre via React Query (`useQuery`).
- Definir `queryKey` estável; invalidar por chave.
- Erros caem em `error.tsx`; estados de carregamento caem em `loading.tsx`.

## Variáveis de ambiente
- `.env` local com valores reais; `.env.example` como modelo.
- Validar sempre via `lib/env.ts` com zod.
- Falhar rápido se variáveis obrigatórias estiverem ausentes.
