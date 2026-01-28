# AGENTS.md

Este arquivo contém instruções e contexto completo para agentes de IA trabalharem neste projeto.

## Contexto do Projeto

### Visão Geral

O **Frontend Template Base** é um template de inicialização moderno e completo para projetos frontend com Next.js. Foi criado para resolver o problema de inconsistência e retrabalho ao iniciar novos projetos, especialmente quando se trabalha com editores de código assistidos por IA como o Cursor.

### Objetivo Principal

Fornecer uma fundação confiável, padronizada e pronta para uso que acelere o início de qualquer aplicação frontend moderna, eliminando a necessidade de configurar do zero a cada novo projeto.

### Por Que Este Projeto Existe

**Problema Identificado:**
- Recriar configurações básicas a cada projeto
- Inconsistência entre projetos da mesma equipe
- Perda de tempo com setup ao invés de features
- Decisões técnicas tomadas de forma isolada e despadronizada
- Falta de documentação clara para agentes de IA

**Solução Proposta:**
- **Padroniza** a stack e arquitetura desde o início
- **Acelera** o início de novos projetos
- **Documenta** decisões e padrões para referência futura
- **Facilita** o trabalho de agentes de IA com instruções claras
- **Garante** qualidade e boas práticas desde o início

### Princípios de Design

1. **Produtividade**: Minimizar tempo de configuração inicial
2. **Consistência**: Padrões claros e documentados
3. **Manutenibilidade**: Código limpo e bem estruturado
4. **Escalabilidade**: Arquitetura que suporta crescimento
5. **Foco**: Energia direcionada para features, não setup

## Setup e Scripts

### Comandos Principais

```bash
# Instalação
pnpm install

# Desenvolvimento (usa Turbopack por padrão)
pnpm dev

# Build de produção
pnpm build

# Servidor de produção
pnpm start

# Testes
pnpm test

# Linting
pnpm lint

# Type checking
pnpm typecheck

# Formatação
pnpm format
```

### Requisitos

- Node.js 18 ou superior
- pnpm recomendado (npm/yarn também funcionam)

## Stack Tecnológica

### Versões Específicas

**Framework e Runtime:**
- Next.js: 16.1.1 (App Router, React Server Components)
- React: 19.2.3 (Server Components por padrão)
- TypeScript: 5.9.3 (strict mode)
- Node.js: 18+ (requisito)

**UI e Estilização:**
- Tailwind CSS: 4.1.18 (PostCSS via `@tailwindcss/postcss`)
- shadcn/ui: Componentes baseados em Radix UI
- Radix UI: Primitivos acessíveis (@radix-ui/react-*)
- Lucide React: 0.562.0 (ícones)
- next-themes: 0.4.6 (sistema de temas)

**Animações:**
- Framer Motion: 12.23.26
- tw-animate-css: 1.4.0 (animações CSS adicionais)

**Estado e Dados:**
- TanStack Query: 5.90.12 (React Query - estado remoto)
- Zustand: Opcional (não incluído por padrão, pode ser adicionado se necessário)

**Formulários e Validação:**
- react-hook-form: 7.69.0
- Zod: 4.2.1 (validação de schemas)
- @hookform/resolvers: 5.2.2 (integração react-hook-form + Zod)

**Notificações:**
- Sonner: 2.0.7 (sistema de toasts)

**Utilitários:**
- clsx: 2.1.1 (classes condicionais)
- tailwind-merge: 3.4.0 (merge de classes Tailwind)
- class-variance-authority: 0.7.1 (variantes de componentes)

**Ferramentas de Desenvolvimento:**
- ESLint: 9.39.2 (com `eslint-config-next`)
- Prettier: 3.7.4 (formatação automática)
- Vitest: 2.1.8 (framework de testes)
- @testing-library/react: 16.1.0
- @testing-library/jest-dom: 6.6.3
- jsdom: 25.0.1 (ambiente DOM para testes)

> **Nota importante**: Vitest usa Vite internamente apenas para executar testes. O projeto **não** usa Vite como bundler principal. O bundler de desenvolvimento é **Turbopack** (via Next.js 16).

### Build e Dev Tools

- **Turbopack**: Bundler principal usado por padrão (`next dev --turbo`)
  - Substitui Webpack no Next.js 16
  - Mais rápido para desenvolvimento
  - Configurado automaticamente pelo Next.js
- **Next.js Build**: Sistema de build próprio do Next.js para produção (`next build`)

## Code Style

- TypeScript strict mode (`strict: true`, `noUncheckedIndexedAccess: true`, `exactOptionalPropertyTypes: true`)
- Arquivos: kebab-case. Componentes: PascalCase
- Páginas export default; utilitários/components export nomeado
- Imports explícitos; evitar barrels com `export *`
- CSS só com Tailwind
- Classes condicionais: usar `cn()` de `@/lib/cn` (clsx + tailwind-merge)
- Server Components por padrão
- `"use client"` apenas quando necessário (interação, hooks, Motion)
- Imports: Sempre usar alias `@/` ao invés de `../../`
- Ordem de imports:
  1. Bibliotecas externas
  2. Imports internos (`@/`)
  3. Imports relativos (evitar quando possível)

## Architecture

### Estrutura de Pastas Detalhada

```
app/
├── (app)/          # Rotas autenticadas/aplicação
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

### Providers Globais

Todos os providers estão no `app/layout.tsx`:
- `ThemeProvider` (next-themes) - Sistema de temas
- `MotionProvider` (Framer Motion) - Animações
- `QueryProvider` (React Query) - Estado remoto
- `Toaster` (Sonner) - Notificações

**Importante**: Não criar novos providers duplicando esses contextos.

### Padrões de Componentes

**Server Components por Padrão:**
- **Regra**: Todos os componentes são Server Components por padrão
- **Exceção**: Adicionar `"use client"` apenas quando necessário:
  - Interatividade (onClick, onChange, etc.)
  - Hooks do React (useState, useEffect, etc.)
  - Framer Motion (componentes animados)
  - Context API (providers)

**Componentes UI:**
- **Localização**: `components/ui/*` (shadcn/ui)
- **Regra**: Sem lógica de domínio, apenas UI pura
- **Adição**: Via CLI local `pnpm shadcn:add <nome>` (CLI instalado no projeto)
- **Preferência**: Sempre usar shadcn/ui antes de criar custom

**Componentes de Domínio:**
- **Localização**: `components/*` (fora de `ui/`)
- **Permitido**: Lógica de negócio e composição de componentes UI

### Padrões de Estado

**Estado Remoto (Server State):**
- **Ferramenta**: React Query (TanStack Query)
- **Provider**: `QueryProvider` no layout raiz
- **Uso**: `useQuery`, `useMutation` para dados do servidor
- **Query Keys**: Estruturados e estáveis (ex: `["users", { date }]`)

**Estado Local (Client State):**
- **Padrão**: `useState`, `useReducer` para estado local
- **Opcional**: Zustand para estado global complexo (não incluído por padrão)

### APIs

**Route Handlers:**
- **Localização**: `app/api/*/route.ts`
- **Validação**: Zod para entrada e saída
- **Variáveis de ambiente**: Via `lib/env.ts`, nunca `process.env` direto
- **Exemplo**: `app/api/example/route.ts` como referência

**API Client:**
- **Localização**: `lib/api-client.ts`
- **Features**: 
  - Interceptors para autenticação
  - Retry automático
  - Tratamento de erros centralizado
  - Timeout configurável
- **Uso com React Query**: Helper `queryFn()` disponível

### Páginas de Infra

- `app/(app)/loading.tsx` → fallback global de loading
- `app/(app)/error.tsx` → error boundary global
- `app/not-found.tsx` → 404 global
- Não duplicar fallback em cada página sem motivo

## shadcn/ui

### Componentes Disponíveis

- Já inicializados: `button`, `card`, `dialog`, `dropdown-menu`, `input`, `label`, `popover`, `skeleton`, `sonner`, `form` (e componentes relacionados)
- Preferir SEMPRE shadcn/ui antes de criar UI custom
- Não instalar todos os componentes (~50+) - instalar sob demanda conforme necessidade
- Não misturar outras libs de UI sem decisão explícita
- Regra: não colocar lógica de domínio em `components/ui`

### Como Adicionar Novos Componentes

O projeto possui o **shadcn CLI instalado localmente** como dependência de desenvolvimento. Use os scripts do `package.json` para adicionar componentes:

**Método Recomendado (usando scripts do package.json):**
```bash
# Adicionar um componente
pnpm shadcn:add button

# Adicionar múltiplos componentes
pnpm shadcn:add button card dialog

# Ver todos os comandos disponíveis
pnpm shadcn
```

**Scripts Disponíveis:**
- `pnpm shadcn` - Ver todos os comandos disponíveis do CLI
- `pnpm shadcn:add [componente]` - Adicionar componente(s) ao projeto
- `pnpm shadcn:init` - Reinicializar configuração (se necessário)

**Exemplos de Uso:**
```bash
# Adicionar um componente específico
pnpm shadcn:add alert

# Adicionar múltiplos componentes de uma vez
pnpm shadcn:add table select checkbox

# Adicionar componente com overwrite (sobrescrever se já existir)
pnpm shadcn:add button --overwrite
```

**Onde os Componentes são Adicionados:**
- Todos os componentes são adicionados em `components/ui/*`
- O caminho é configurado no `components.json` (alias `@/components/ui`)
- Componentes são gerados como arquivos TypeScript (`.tsx`)

**Alternativa (sem script):**
Se preferir usar diretamente o CLI instalado:
```bash
pnpm exec shadcn add [componente]
```

**Nota:** O CLI está configurado via `components.json` e usa as configurações do projeto (style: new-york, rsc: true, tsx: true, etc.).

## Motion (Framer Motion)

### Sistema Centralizado

- **Localização**: `lib/motion.ts`
- **Provider**: `MotionProvider` no layout (respeita `prefers-reduced-motion`)
- **Variantes**: `VARIANTS.slideUp`, `VARIANTS.fadeIn`, `VARIANTS.scaleIn`
- **Transições**: `TRANSITION.base`, `TRANSITION.spring`, etc.
- **Stagger**: `staggerChildren()` para listas/grids

### Regras de Uso

- **Não criar variantes locais**: Usar as de `lib/motion.ts`
- **On-scroll**: Usar `useOnceInView` hook de `@/hooks/use-once-in-view`
- **Client Components**: Componentes com Motion precisam ser Client Components
- **Isolamento**: Isolar parte animada em subcomponente se necessário
- **Projeto é React/Next**: Não usar exemplos de Vue/Vanilla
- **Import padrão**: `import { Motion, VARIANTS, TRANSITION, staggerChildren } from "@/lib/motion"`
- **Uso padrão**: `initial="hidden" animate="show" variants={VARIANTS.slideUp}`
- **Listas/grids**: `variants={staggerChildren(0.06)}` no contêiner
- **On-scroll**: Só animar quando `inView === true`
- **Não animar**: Header/navbar críticos no first paint sem necessidade

## Dados (React Query)

- Provider global já incluso no layout
- Usar `useQuery({ queryKey: [...], queryFn: async () ... })` para buscar dados
- Usar `lib/api-client.ts` como helper para `queryFn`
- Nomear `queryKey` de forma estável (ex.: `["orders", { date }]`)
- Erros propagam para `app/(app)/error.tsx`
- Loading padrão via `app/(app)/loading.tsx`

## Formulários

### Stack

- **Formulários**: react-hook-form
- **Validação**: Zod 4
- **Integração**: `@hookform/resolvers`
- **Componentes**: shadcn/ui Form (`Form`, `FormField`, `FormMessage`)

### Validação

- **Client-side**: Zod schema com react-hook-form
- **Server-side**: Revalidar com Zod nas API routes

## Variáveis de Ambiente

### Suportadas (via `lib/env.ts`)

- `NEXT_PUBLIC_API_BASE`: URL base da API (opcional)
- `NEXT_PUBLIC_API_TIMEOUT`: Timeout de requisições em ms (opcional)

### Validação

- Todas em `.env`; modelo em `.env.example`
- Validar com `@/lib/env.ts` (zod). Falhar rápido se faltarem chaves
- Nunca hardcode de secrets
- Não acessar `process.env` direto → usar `lib/env.ts`
- Schema Zod em `lib/env.ts`
- Validação em runtime
- Falha rápida se variáveis obrigatórias faltarem

## Configurações e Constantes

- Configurações da aplicação em `lib/config.ts` (valores que variam por ambiente)
- Constantes reutilizáveis em `lib/constants.ts` (valores fixos)
- Não usar valores hardcoded - usar constantes/configurações

## Estilização

### Tailwind CSS 4

- **Único método**: Apenas Tailwind, sem CSS custom
- **Classes condicionais**: `cn()` de `lib/cn` (clsx + tailwind-merge)
- **Responsivo**: Mobile-first por padrão

### Temas

- **Provider**: `ThemeProvider` (next-themes) no layout
- **Atributo**: `class` (suporta dark mode)
- **Padrão**: `system` (detecta preferência do sistema)

## Tratamento de Erros

### Estrutura Hierárquica

1. **Global**: `app/(app)/error.tsx` - Error boundary para rotas autenticadas
2. **404**: `app/not-found.tsx` - Página não encontrada
3. **Loading**: `app/(app)/loading.tsx` - Loading state global

### Regras

- Não duplicar fallbacks sem necessidade
- Erros de React Query propagam para error boundary
- Loading states via Suspense e loading.tsx

## Testing

### Framework

- **Testes**: Vitest + React Testing Library
- **Setup**: `vitest.setup.ts` configurado
- **Foco inicial**: Utilitários (`lib/*`) e hooks (`hooks/*`)
- **Exemplo**: `lib/utils.test.ts`
- **Script**: `pnpm test`

> **Nota importante**: Vitest usa Vite internamente apenas para executar testes. O projeto **não** usa Vite como bundler - o bundler principal é **Turbopack** (via Next.js 16).

## Acessibilidade

- Componentes interativos sempre com atributos `aria-*`
- Foco visível obrigatório; não remover outline sem substituto
- Validar navegação por teclado
- Verificar contraste de cores (WCAG)
- Labels e textos alternativos adequados

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

## Quality Checks

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
- Instalar via CLI local: `pnpm shadcn:add <nome>` (CLI instalado no projeto)
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
1. Verificar se shadcn/ui tem o componente (consultar [shadcn/ui docs](https://ui.shadcn.com/docs/components))
2. Se sim: Usar `pnpm shadcn:add <nome>` (CLI local instalado)
3. Se não: Criar em `components/ui/` seguindo padrão shadcn
4. **NUNCA** colocar lógica de domínio em `components/ui/`

**Exemplo:**
```bash
# Adicionar componente alert
pnpm shadcn:add alert

# Adicionar múltiplos componentes
pnpm shadcn:add table select checkbox
```

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

## Estado Atual do Projeto

### Status Geral

O projeto está em estado **estável e funcional** como template base. Todas as funcionalidades core estão implementadas e testadas. O template está pronto para ser usado como base para novos projetos.

### O Que Está Funcionando

**Infraestrutura Base:**
- ✅ Next.js 16 configurado com App Router e Turbopack
- ✅ TypeScript strict mode ativo
- ✅ Tailwind CSS 4 configurado
- ✅ ESLint + Prettier configurados

**Sistema de UI:**
- ✅ shadcn/ui inicializado
- ✅ Componentes base: button, card, dialog, dropdown-menu, input, label, popover, skeleton, sonner
- ✅ Formulários: Componentes de form do shadcn disponíveis
- ✅ Temas: Sistema claro/escuro funcionando

**Animações:**
- ✅ Framer Motion 12 configurado
- ✅ MotionProvider respeitando `prefers-reduced-motion`
- ✅ Variantes: slideUp, fadeIn, scaleIn disponíveis
- ✅ Stagger: Função para animações em lista/grid
- ✅ Hook: `useOnceInView` para animações on-scroll

**Estado e Dados:**
- ✅ React Query provider configurado
- ✅ API Client completo com retry e tratamento de erros
- ✅ Helper: `queryFn()` para uso com React Query

**Validação:**
- ✅ Zod 4 schemas funcionando
- ✅ react-hook-form integrado com Zod
- ✅ Validação de ambiente com Zod

**Tratamento de Erros:**
- ✅ Error Boundary: `app/(app)/error.tsx`
- ✅ 404: `app/not-found.tsx`
- ✅ Loading: `app/(app)/loading.tsx`

**Configurações:**
- ✅ Config centralizado: `lib/config.ts`
- ✅ Constantes: `lib/constants.ts`
- ✅ Ambiente: `lib/env.ts` validando variáveis

**Testes:**
- ✅ Vitest configurado
- ✅ React Testing Library configurado
- ✅ Exemplo: `lib/utils.test.ts`

**Documentação:**
- ✅ README.md completo
- ✅ AGENTS.md completo
- ✅ Exemplos: API Route Handler completo

### O Que Falta Implementar

**Funcionalidades Opcionais:**
- 🔲 Mais componentes shadcn/ui: Instalar sob demanda conforme necessidade
- 🔲 Autenticação: Não incluída - implementar conforme necessidade do projeto
- 🔲 Banco de dados: Não incluído - template frontend apenas
- 🔲 Estado global complexo: Zustand opcional, não incluído por padrão

**Melhorias Futuras:**
- 🔲 Mais exemplos: Adicionar mais exemplos de uso conforme feedback
- 🔲 Testes adicionais: Expandir cobertura de testes conforme necessário
- 🔲 Documentação de casos de uso: Exemplos práticos de implementação

### Decisões Ativas

**Arquitetura:**
- **Server Components por padrão**: Mantido como padrão
- **shadcn/ui como base UI**: Não misturar outras libs de UI
- **Centralização de animações**: Todas as variantes em `lib/motion.ts`
- **Validação centralizada**: Zod para schemas, `lib/env.ts` para ambiente

**Padrões de Código:**
- **TypeScript strict**: Obrigatório e não negociável
- **kebab-case para arquivos**: Consistência mantida
- **Imports com alias `@/`**: Sempre preferido
- **Exports nomeados**: Para utilitários e componentes (exceto páginas)

### Áreas de Atenção

**Pontos Críticos:**
- **Autenticação**: Não implementada - deve ser adicionada conforme necessidade
- **Banco de dados**: Não incluído - template frontend apenas
- **Estado global**: Zustand não incluído por padrão (opcional)

## Referências Rápidas

### Arquivos de Código Importantes
- **app/api/example/route.ts**: Exemplo completo de API Route Handler
- **lib/motion.ts**: Variantes de animação disponíveis
- **lib/api-client.ts**: Cliente HTTP configurado
- **lib/env.ts**: Validação de ambiente
- **lib/config.ts**: Configurações da aplicação
- **lib/constants.ts**: Constantes reutilizáveis
- **README.md**: Documentação geral e guia de início rápido

## Notas Finais

Este projeto prioriza **consistência**, **manutenibilidade** e **produtividade**. Sempre que houver dúvida, seguir os padrões estabelecidos e consultar a documentação existente antes de criar algo novo.
