# AGENTS.md

Este arquivo contém instruções e contexto para agentes de IA trabalharem neste projeto.

## Documentação e Contexto

Para contexto completo do projeto, consulte:

- **Memory Bank** (`memory-bank/`) - Contexto completo, padrões técnicos e progresso do projeto
  - `projectbrief.md` - Visão geral e objetivos
  - `productContext.md` - Por que o projeto existe e como funciona
  - `systemPatterns.md` - Arquitetura e padrões técnicos detalhados
  - `techContext.md` - Stack tecnológica e configurações
  - `activeContext.md` - Estado atual e foco do projeto
  - `progress.md` - O que está funcionando e o que falta
- **README.md** - Documentação geral e guia de início rápido

**Recomendação**: Leia o Memory Bank antes de começar a trabalhar no projeto para entender completamente o contexto e padrões estabelecidos.

## Setup commands

Ver `techContext.md` para lista completa de scripts disponíveis.

Comandos principais:
- Install deps: `pnpm install`
- Start dev server: `pnpm dev` (usa Turbopack por padrão)
- Run tests: `pnpm test`
- Build: `pnpm build`
- Lint: `pnpm lint`
- Typecheck: `pnpm typecheck`
- Format: `pnpm format`

## Stack

Ver `techContext.md` para stack completa e versões detalhadas.

Stack principal:
- Framework: Next.js 16 (App Router, React 19, TypeScript)
- UI: Tailwind CSS 4 + shadcn/ui
- Animação: Framer Motion 12
- Estado: React Query (TanStack Query) para dados remotos; Zustand opcional para estado global local
- Notificações: Sonner (Toaster global)
- Validação: Zod 4
- Formulários: react-hook-form + zod
- Import alias: usar sempre `@/`

## Code style

- TypeScript strict mode (`strict: true`, `noUncheckedIndexedAccess: true`, `exactOptionalPropertyTypes: true`)
- Arquivos: kebab-case. Componentes: PascalCase
- Páginas export default; utilitários/components export nomeado
- Imports explícitos; evitar barrels com `export *`
- CSS só com Tailwind
- Classes condicionais: usar `cn()` de `@/lib/cn` (clsx + tailwind-merge)
- Server Components por padrão
- `"use client"` apenas quando necessário (interação, hooks, Motion)

## Architecture

### Estrutura de pastas

Ver `systemPatterns.md` para estrutura detalhada e explicações completas.

Estrutura resumida:
- `app/(marketing)/*` → rotas públicas
- `app/(app)/*` → rotas autenticadas / aplicação
- `app/api/*` → route handlers (tipados com zod)
- `components/*` → UI compartilhada (sem regra de negócio)
- `components/ui/*` → componentes shadcn/ui gerados via CLI
- `lib/*` → utilitários (`cn.ts`, `motion.ts`, `env.ts`, `api-client.ts`, `config.ts`, `constants.ts`, schemas)
- `hooks/*` → hooks cliente
- `providers/*` → providers cliente (`MotionProvider`, `QueryProvider`, etc.)

### Providers globais

- `MotionProvider` e `QueryProvider` já envolvidos no `app/layout.tsx`
- `ThemeProvider` (next-themes) no layout
- `Toaster` (Sonner) global no layout
- Nunca criar novo provider duplicando esses contextos

### APIs

Ver `systemPatterns.md` seção "Padrões de API" para documentação completa.

Resumo:
- Todas as rotas em `app/api/*` como `route.ts`
- Validar entrada/saída com `zod`
- Não acessar `process.env` direto dentro da rota → usar `lib/env.ts`
- Usar `lib/api-client.ts` para requisições HTTP
- Seguir exemplo em `app/api/example/route.ts`

### Páginas de infra

- `app/(app)/loading.tsx` → fallback global de loading
- `app/(app)/error.tsx` → error boundary global
- `app/not-found.tsx` → 404 global
- Não duplicar fallback em cada página sem motivo

## shadcn/ui

- Já inicializados: `button`, `card`, `dialog`, `dropdown-menu`, `input`, `label`, `popover`, `skeleton`, `sonner`, `form` (e componentes relacionados)
- Preferir SEMPRE shadcn/ui antes de criar UI custom
- Para adicionar componente: `pnpm dlx shadcn@latest add <nome>` (gera em `components/ui/*`)
- Não instalar todos os componentes (~50+) - instalar sob demanda conforme necessidade
- Não misturar outras libs de UI sem decisão explícita
- Regra: não colocar lógica de domínio em `components/ui`

## Motion (Framer Motion)

Ver `systemPatterns.md` seção "Padrões de Animação" para documentação completa.

Resumo:
- Projeto é React/Next. Não usar exemplos de Vue/Vanilla
- Configurado via `<MotionProvider/>` em `app/layout.tsx` (respeita `prefers-reduced-motion`)
- Import padrão: `import { Motion, VARIANTS, TRANSITION, staggerChildren } from "@/lib/motion"`
- Uso padrão: `initial="hidden" animate="show" variants={VARIANTS.slideUp}`
- Listas/grids: `variants={staggerChildren(0.06)}` no contêiner
- On-scroll: `useOnceInView` de `@/hooks/use-once-in-view`; só animar quando `inView === true`
- Variantes/transições vivem em `@/lib/motion`. Não criar ad-hoc locais
- Componentes que usam Motion precisam ser Client Components (`"use client"` no topo)
- Alternativa: isolar apenas a parte animada em subcomponente cliente
- Não animar header/navbar críticos no first paint sem necessidade

## Dados (React Query)

- Provider global já incluso no layout
- Usar `useQuery({ queryKey: [...], queryFn: async () => ... })` para buscar dados
- Usar `lib/api-client.ts` como helper para `queryFn`
- Nomear `queryKey` de forma estável (ex.: `["orders", { date }]`)
- Erros propagam para `app/(app)/error.tsx`
- Loading padrão via `app/(app)/loading.tsx`

## Formulários

- react-hook-form + zod
- Validação client e server quando aplicável
- Usar componentes do shadcn de formulário (`Form`, `FormField`, `FormMessage`)
- Usar `@hookform/resolvers` para integração com Zod

## Variáveis de ambiente

Ver `systemPatterns.md` seção "Padrões de Configuração" e `techContext.md` para variáveis suportadas.

Resumo:
- Todas em `.env`; modelo em `.env.example`
- Validar com `@/lib/env.ts` (zod). Falhar rápido se faltarem chaves
- Nunca hardcode de secrets
- Não acessar `process.env` direto → usar `lib/env.ts`

## Configurações e Constantes

Ver `systemPatterns.md` seção "Padrões de Configuração" para documentação completa.

Resumo:
- Configurações da aplicação em `lib/config.ts`
- Constantes reutilizáveis em `lib/constants.ts`
- Não usar valores hardcoded - usar constantes/configurações

## Acessibilidade

- Componentes interativos sempre com atributos `aria-*`
- Foco visível obrigatório; não remover outline sem substituto
- Validar navegação por teclado
- Verificar contraste de cores (WCAG)
- Labels e textos alternativos adequados

## Testing instructions

- Framework: Vitest + React Testing Library
- Script: `pnpm test`
- Começar por testes de utilitários em `lib/*` e hooks em `hooks/*`
- Exemplo em `lib/utils.test.ts`

## Commits

- Convenção: `feat:`, `fix:`, `chore:`, `refactor:`, `docs:`
- Mensagem curta e imperativa

## Do / Don't

**Do**
- Usar shadcn antes de inventar componente
- Centralizar animações em `lib/motion`
- Usar `cn()` para classes condicionais
- Validar env com zod
- Manter Server Components por padrão
- Usar `lib/api-client.ts` para requisições HTTP
- Seguir exemplo de API Route Handler em `app/api/example/route.ts`
- Usar constantes/config ao invés de valores hardcoded

**Don't**
- Copiar exemplos de Motion de Vue/Vanilla
- Criar variantes duplicadas fora de `lib/motion`
- Misturar bibliotecas de UI
- Inserir regra de negócio em `components/ui`
- Hardcode de secrets
- Acessar `process.env` direto
- Criar providers duplicando contextos existentes

## Quality checks

- PR só com `typecheck` e `lint` zerados
- Executar `pnpm build` antes de commit
- Verificar que testes passam: `pnpm test`
- Formatar código: `pnpm format`

## Padrões Críticos de Implementação

### 1. Server Components por Padrão
- **SEMPRE** começar com Server Components
- Adicionar `"use client"` APENAS quando necessário:
  - Interatividade (event handlers)
  - Hooks do React (useState, useEffect, etc.)
  - Framer Motion
  - Context API

### 2. shadcn/ui como Base UI
- **SEMPRE** verificar se shadcn/ui tem o componente antes de criar custom
- Instalar via CLI: `pnpm dlx shadcn@latest add <nome>`
- Componentes shadcn ficam em `components/ui/*` (sem lógica de domínio)
- Componentes de domínio ficam em `components/*` (fora de `ui/`)

### 3. Animações Centralizadas
- **NUNCA** criar variantes de animação locais
- **SEMPRE** usar variantes de `lib/motion.ts`:
  - `VARIANTS.slideUp`, `VARIANTS.fadeIn`, `VARIANTS.scaleIn`
- **SEMPRE** usar `TRANSITION.base`, `TRANSITION.spring`, etc.
- Para listas/grids: usar `staggerChildren()` do `lib/motion.ts`

### 4. Validação e Ambiente
- **NUNCA** acessar `process.env` diretamente
- **SEMPRE** usar `import { env } from '@/lib/env'`
- **SEMPRE** validar schemas com Zod antes de usar dados

### 5. Configurações e Constantes
- **NUNCA** usar valores hardcoded
- **SEMPRE** usar `lib/config.ts` para configurações
- **SEMPRE** usar `lib/constants.ts` para constantes fixas

### 6. API Routes
- **SEMPRE** validar entrada com Zod
- **SEMPRE** validar saída com Zod (quando possível)
- **SEMPRE** seguir padrão de `app/api/example/route.ts`
- **SEMPRE** usar `lib/env.ts` para variáveis de ambiente

### 7. React Query
- **SEMPRE** usar `lib/api-client.ts` como helper
- **SEMPRE** usar `queryFn()` helper para queries
- **SEMPRE** nomear `queryKey` de forma estável e descritiva

## Caminhos de Implementação Críticos

### Criar Novo Componente UI
1. Verificar se shadcn/ui tem o componente
2. Se sim: `pnpm dlx shadcn@latest add <nome>`
3. Se não: Criar em `components/ui/` seguindo padrão shadcn
4. **NUNCA** colocar lógica de domínio em `components/ui/`

### Criar Nova Página
1. Criar em `app/(app)/*` ou `app/(marketing)/*`
2. Exportar como `export default function PageName()`
3. Usar Server Component por padrão
4. Adicionar `"use client"` apenas se necessário

### Criar Nova API Route
1. Criar `app/api/<nome>/route.ts`
2. Exportar funções nomeadas: `GET`, `POST`, `PUT`, `DELETE`
3. Validar entrada com Zod
4. Usar `lib/env.ts` para variáveis de ambiente
5. Seguir padrão de `app/api/example/route.ts`

### Adicionar Animação
1. Verificar se variante existe em `lib/motion.ts`
2. Se não existe e é reutilizável: Adicionar em `lib/motion.ts`
3. Se é específico: Criar localmente (raro)
4. Usar `Motion` de `@/lib/motion`
5. Para on-scroll: usar `useOnceInView` hook

### Criar Formulário
1. Usar `react-hook-form` + `zod`
2. Usar componentes shadcn Form (`Form`, `FormField`, `FormMessage`)
3. Usar `@hookform/resolvers` para integração
4. Validar no cliente e no servidor

## Inteligência Aprendida

### Por Que Server Components por Padrão?
- Melhor performance (menos JavaScript no cliente)
- Melhor SEO (conteúdo renderizado no servidor)
- Menor bundle size
- Padrão do Next.js 16

### Por Que Centralizar Animações?
- Consistência visual entre componentes
- Manutenção mais fácil
- Reutilização de variantes
- Respeito a `prefers-reduced-motion` centralizado

### Por Que shadcn/ui?
- Componentes acessíveis (Radix UI)
- Customizáveis (código no projeto)
- Bem mantidos e atualizados
- Padrão da comunidade Next.js

### Por Que Validar Ambiente com Zod?
- Falha rápida se variáveis faltarem
- TypeScript types gerados automaticamente
- Documentação clara de variáveis necessárias
- Prevenção de erros em runtime

## Referências Rápidas

### Documentação Principal
- **Memory Bank** (`memory-bank/`): Contexto completo do projeto
  - `techContext.md`: Stack completa e versões detalhadas
  - `systemPatterns.md`: Arquitetura e padrões técnicos detalhados
  - `projectbrief.md`: Visão geral e objetivos
  - `productContext.md`: Por que o projeto existe
  - `activeContext.md`: Estado atual e foco
  - `progress.md`: O que está funcionando e o que falta

### Arquivos de Código Importantes
- **app/api/example/route.ts**: Exemplo completo de API Route Handler
- **lib/motion.ts**: Variantes de animação disponíveis
- **lib/api-client.ts**: Cliente HTTP configurado
- **lib/env.ts**: Validação de ambiente
- **lib/config.ts**: Configurações da aplicação
- **lib/constants.ts**: Constantes reutilizáveis

## Notas Finais

Este projeto prioriza **consistência**, **manutenibilidade** e **produtividade**. Sempre que houver dúvida, seguir os padrões estabelecidos e consultar a documentação existente antes de criar algo novo.

