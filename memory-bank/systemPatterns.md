# System Patterns

> **Referências**: Para stack tecnológica completa, ver `techContext.md`. Para instruções de uso, ver `AGENTS.md`.

## Arquitetura Geral

### Estrutura de Pastas

```
app/
├── (app)/          # Rotas autenticadas/aplicação
│   ├── demo/       # Página de demonstração
│   ├── error.tsx   # Error boundary global
│   └── loading.tsx # Loading state global
├── (marketing)/    # Rotas públicas (estrutura preparada)
├── api/            # API Route Handlers
│   └── example/    # Exemplo completo de rota
├── layout.tsx      # Layout raiz com providers
├── page.tsx        # Página inicial
└── not-found.tsx   # 404 global

components/
└── ui/             # Componentes shadcn/ui (sem lógica de domínio)

lib/                 # Utilitários e configurações
├── api-client.ts   # Cliente HTTP configurado
├── cn.ts           # Utilitário para classes CSS
├── config.ts       # Configurações da aplicação
├── constants.ts    # Constantes reutilizáveis
├── env.ts          # Validação de variáveis de ambiente
├── motion.ts       # Variantes e utilitários de animação
└── utils.ts        # Funções utilitárias gerais

hooks/              # Hooks customizados (client-side)
providers/          # Providers React (client-side)
```

## Padrões de Componentes

### Server Components por Padrão

- **Regra**: Todos os componentes são Server Components por padrão
- **Exceção**: Adicionar `"use client"` apenas quando necessário:
  - Interatividade (onClick, onChange, etc.)
  - Hooks do React (useState, useEffect, etc.)
  - Framer Motion (componentes animados)
  - Context API (providers)

### Componentes UI

- **Localização**: `components/ui/*` (shadcn/ui)
- **Regra**: Sem lógica de domínio, apenas UI pura
- **Adição**: Via CLI `pnpm dlx shadcn@latest add <nome>`
- **Preferência**: Sempre usar shadcn/ui antes de criar custom

### Componentes de Domínio

- **Localização**: `components/*` (fora de `ui/`)
- **Permitido**: Lógica de negócio e composição de componentes UI

## Padrões de Estado

### Estado Remoto (Server State)

- **Ferramenta**: React Query (TanStack Query)
- **Provider**: `QueryProvider` no layout raiz
- **Uso**: `useQuery`, `useMutation` para dados do servidor
- **Query Keys**: Estruturados e estáveis (ex: `["users", { date }]`)

### Estado Local (Client State)

- **Padrão**: `useState`, `useReducer` para estado local
- **Opcional**: Zustand para estado global complexo (não incluído por padrão)

## Padrões de API

### Route Handlers

- **Localização**: `app/api/*/route.ts`
- **Validação**: Zod para entrada e saída
- **Variáveis de ambiente**: Via `lib/env.ts`, nunca `process.env` direto
- **Exemplo**: `app/api/example/route.ts` como referência

### API Client

- **Localização**: `lib/api-client.ts`
- **Features**: 
  - Interceptors para autenticação
  - Retry automático
  - Tratamento de erros centralizado
  - Timeout configurável
- **Uso com React Query**: Helper `queryFn()` disponível

## Padrões de Animação

### Sistema Centralizado

- **Localização**: `lib/motion.ts`
- **Provider**: `MotionProvider` no layout (respeita `prefers-reduced-motion`)
- **Variantes**: `VARIANTS.slideUp`, `VARIANTS.fadeIn`, `VARIANTS.scaleIn`
- **Transições**: `TRANSITION.base`, `TRANSITION.spring`, etc.
- **Stagger**: `staggerChildren()` para listas/grids

### Regras de Uso

- **Não criar variantes locais**: Usar as de `lib/motion.ts`
- **On-scroll**: Usar `useOnceInView` hook
- **Client Components**: Componentes com Motion precisam ser Client Components
- **Isolamento**: Isolar parte animada em subcomponente se necessário

## Padrões de Formulários

### Stack

- **Formulários**: react-hook-form
- **Validação**: Zod 4
- **Integração**: `@hookform/resolvers`
- **Componentes**: shadcn/ui Form (`Form`, `FormField`, `FormMessage`)

### Validação

- **Client-side**: Zod schema com react-hook-form
- **Server-side**: Revalidar com Zod nas API routes

## Padrões de Estilização

### Tailwind CSS 4

- **Único método**: Apenas Tailwind, sem CSS custom
- **Classes condicionais**: `cn()` de `lib/cn` (clsx + tailwind-merge)
- **Responsivo**: Mobile-first por padrão

### Temas

- **Provider**: `ThemeProvider` (next-themes) no layout
- **Atributo**: `class` (suporta dark mode)
- **Padrão**: `system` (detecta preferência do sistema)

## Padrões de Tratamento de Erros

### Estrutura Hierárquica

1. **Global**: `app/(app)/error.tsx` - Error boundary para rotas autenticadas
2. **404**: `app/not-found.tsx` - Página não encontrada
3. **Loading**: `app/(app)/loading.tsx` - Loading state global

### Regras

- Não duplicar fallbacks sem necessidade
- Erros de React Query propagam para error boundary
- Loading states via Suspense e loading.tsx

## Padrões de Configuração

### Variáveis de Ambiente

- **Validação**: Zod schema em `lib/env.ts`
- **Acesso**: Via `import { env } from '@/lib/env'`
- **Nunca**: Acessar `process.env` diretamente no código

### Configurações

- **App Config**: `lib/config.ts` (valores que variam por ambiente)
- **Constantes**: `lib/constants.ts` (valores fixos)
- **Regra**: Não usar valores hardcoded

## Padrões de Testes

### Framework

- **Testes**: Vitest + React Testing Library
- **Setup**: `vitest.setup.ts` configurado
- **Foco inicial**: Utilitários (`lib/*`) e hooks (`hooks/*`)
- **Exemplo**: `lib/utils.test.ts`

## Padrões de Código

### TypeScript

- **Strict mode**: Obrigatório
- **Flags importantes**: 
  - `strict: true`
  - `noUncheckedIndexedAccess: true`
  - `exactOptionalPropertyTypes: true`

### Nomenclatura

- **Arquivos**: kebab-case (`use-once-in-view.ts`)
- **Componentes**: PascalCase (`MotionProvider.tsx`)
- **Exports**: 
  - Páginas: `export default`
  - Utilitários/Components: `export nomeado`
- **Imports**: Explícitos, evitar `export *`

### Imports

- **Alias**: Sempre usar `@/` ao invés de `../../`
- **Ordem**: 
  1. Bibliotecas externas
  2. Imports internos (`@/`)
  3. Imports relativos (evitar quando possível)

