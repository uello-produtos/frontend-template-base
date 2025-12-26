# Tech Context

> **Referências**: Para padrões de uso da stack, ver `systemPatterns.md` e `AGENTS.md`. Para contexto do projeto, ver `projectbrief.md` e `productContext.md`.

## Stack Principal

### Framework e Runtime

- **Next.js**: 16.1.1 (App Router, React Server Components)
- **React**: 19.2.3 (Server Components por padrão)
- **TypeScript**: 5.9.3 (strict mode)
- **Node.js**: 18+ (requisito)

### UI e Estilização

- **Tailwind CSS**: 4.1.18 (PostCSS via `@tailwindcss/postcss`)
- **shadcn/ui**: Componentes baseados em Radix UI
- **Radix UI**: Primitivos acessíveis (@radix-ui/react-*)
- **Lucide React**: 0.562.0 (ícones)
- **next-themes**: 0.4.6 (sistema de temas)

### Animações

- **Framer Motion**: 12.23.26
- **tw-animate-css**: 1.4.0 (animações CSS adicionais)

### Estado e Dados

- **TanStack Query**: 5.90.12 (React Query - estado remoto)
- **Zustand**: Opcional (não incluído por padrão, pode ser adicionado se necessário)

### Formulários e Validação

- **react-hook-form**: 7.69.0
- **Zod**: 4.2.1 (validação de schemas)
- **@hookform/resolvers**: 5.2.2 (integração react-hook-form + Zod)

### Notificações

- **Sonner**: 2.0.7 (sistema de toasts)

### Utilitários

- **clsx**: 2.1.1 (classes condicionais)
- **tailwind-merge**: 3.4.0 (merge de classes Tailwind)
- **class-variance-authority**: 0.7.1 (variantes de componentes)

## Ferramentas de Desenvolvimento

### Package Manager

- **pnpm**: Recomendado (mais rápido e eficiente)
- **npm/yarn**: Alternativas suportadas

### Linting e Formatação

- **ESLint**: 9.39.2 (com `eslint-config-next`)
- **Prettier**: 3.7.4 (formatação automática)

### Testes

- **Vitest**: 2.1.8 (framework de testes)
- **@testing-library/react**: 16.1.0
- **@testing-library/jest-dom**: 6.6.3
- **@vitejs/plugin-react**: 4.3.4
- **jsdom**: 25.0.1 (ambiente DOM para testes)

### Build e Dev Tools

- **Turbopack**: Usado por padrão (`next dev --turbo`)
- **TypeScript**: Compilação e type checking

## Configurações Importantes

### TypeScript (`tsconfig.json`)

- **Strict mode**: Habilitado
- **Path alias**: `@/*` → `./*`
- **Target**: ES2020+
- **Module**: ESNext
- **JSX**: React-jsx

### Next.js (`next.config.ts`)

- **App Router**: Habilitado
- **Turbopack**: Suportado
- Configurações padrão do Next.js 16

### Tailwind (`postcss.config.mjs`)

- **Tailwind CSS 4**: Via PostCSS plugin
- **Configuração**: Via `globals.css` com `@tailwind` directives

### ESLint (`eslint.config.mjs`)

- **Next.js config**: `eslint-config-next`
- **TypeScript**: Suportado
- **React**: Suportado

## Variáveis de Ambiente

### Suportadas (via `lib/env.ts`)

- `NEXT_PUBLIC_API_BASE`: URL base da API (opcional)
- `NEXT_PUBLIC_API_TIMEOUT`: Timeout de requisições em ms (opcional)

### Validação

- Schema Zod em `lib/env.ts`
- Validação em runtime
- Falha rápida se variáveis obrigatórias faltarem

## Scripts Disponíveis

```json
{
  "dev": "next dev --turbo",        // Dev server com Turbopack
  "build": "next build",             // Build de produção
  "start": "next start",             // Servidor de produção
  "lint": "next lint",               // Executar ESLint
  "format": "prettier --write .",    // Formatar código
  "typecheck": "tsc --noEmit",       // Verificar tipos
  "test": "vitest"                    // Executar testes
}
```

## Dependências de Produção

### Core
- next, react, react-dom
- typescript (peer dependency)

### UI
- @radix-ui/* (dialog, dropdown-menu, label, popover, slot)
- tailwindcss, class-variance-authority, clsx, tailwind-merge
- lucide-react, next-themes

### Funcionalidades
- framer-motion, @tanstack/react-query
- zod, react-hook-form, @hookform/resolvers
- sonner

## Dependências de Desenvolvimento

### Build e Type Checking
- typescript, @types/node, @types/react, @types/react-dom

### Linting e Formatação
- eslint, eslint-config-next, prettier

### Testes
- vitest, @testing-library/react, @testing-library/jest-dom
- @vitejs/plugin-react, jsdom

### Styling
- tailwindcss, @tailwindcss/postcss, tw-animate-css

## Restrições e Limitações

### Não Incluído por Padrão

- Autenticação (deve ser implementada conforme necessidade)
- Banco de dados (template frontend apenas)
- Estado global complexo (Zustand opcional)
- Todos os componentes shadcn/ui (~50+ componentes - instalar sob demanda)

### Requisitos de Sistema

- Node.js 18 ou superior
- pnpm recomendado (mas npm/yarn funcionam)
- Ambiente que suporte ES2020+

## Compatibilidade

### Navegadores

- Suporta navegadores modernos (ES2020+)
- Next.js 16 suporta automaticamente polyfills quando necessário

### Ambientes

- Desenvolvimento: Local com Node.js
- Produção: Qualquer plataforma que suporte Next.js (Vercel, Netlify, etc.)

