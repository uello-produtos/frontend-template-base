# Style Guide (Frontend TemplateBase)

## Stack
- Framework: Next.js (App Router, React 18, TypeScript).
- UI: Tailwind CSS + shadcn/ui.
- Animação: Framer Motion (React).
- Estado: React Query para dados remotos; Zustand opcional para estado global local.
- Notificações: Sonner (Toaster global).
- Import alias: usar sempre "@/".

## Estrutura de pastas
- app/(marketing)/*  → rotas públicas
- app/(app)/*        → rotas autenticadas
- app/api/*          → route handlers
- components/*       → UI compartilhada (sem regra de negócio)
- lib/*              → utilitários (ex.: `lib/cn.ts`, `lib/motion.ts`, `lib/env.ts`)
- hooks/*            → hooks cliente
- providers/*        → providers cliente
- Regra: não colocar lógica de domínio em `components/ui`.

## Server vs Client
- Server Components por padrão.
- `"use client"` apenas quando necessário (interação, hooks, Motion).
- Se a página for server, isolar trechos animados/estado em subcomponente cliente.

## Nomes e padrões
- Arquivos: kebab-case. Componentes: PascalCase.
- Páginas export default; utilitários/components export nomeado.
- Imports explícitos; evitar barrels com `export *`.

## Tailwind e `cn()`
- CSS só com Tailwind.
- Classes condicionais: usar `cn()` de `@/lib/cn` (clsx + tailwind-merge).
- Não escrever classes conflitantes manuais; `cn()` resolve merges.

## Formulários
- react-hook-form + zod.
- Validação client e server quando aplicável.
- Usar componentes do shadcn de formulário (`Form`, `FormField`, `FormMessage`).

## Acessibilidade
- Componentes interativos sempre com `aria-*`.
- Foco visível obrigatório; não remover outline sem substituto.

# shadcn/ui
- Já inicializado; disponíveis no template: `button`, `card`, `input`, `label`, `dialog`, `dropdown-menu`, `popover`, `skeleton`, `sonner`.
- Preferir shadcn/ui antes de criar UI custom.
- Se faltar componente: `pnpm dlx shadcn@latest add <nome>` (gera em `components/ui/*`).
- Não misturar outras libs de UI sem decisão explícita.

# Notificações (Sonner)
- Toaster global já incluído no layout.
- Disparar via `import { toast } from "sonner"`.
- Usar `toast.success|error|info(...)` conforme contexto.
- Não usar o `toast` antigo do shadcn (obsoleto).

# Motion (Framer Motion)
- Projeto é React/Next. Não usar exemplos de Vue/Vanilla.
- Configurado via `<MotionProvider/>` em `app/layout.tsx` (respeita `prefers-reduced-motion`).
- Import padrão:  
  `import { Motion, VARIANTS, TRANSITION, staggerChildren } from "@/lib/motion"`.
- Uso padrão:  
  `initial="hidden" animate="show" variants={VARIANTS.slideUp}`.
- Listas/grids: `variants={staggerChildren(0.06)}` no contêiner.
- On-scroll: `useOnceInView` de `@/hooks/use-once-in-view`; só animar quando `inView === true`.
- Variantes/transições vivem em `@/lib/motion`. Não criar ad-hoc locais.
- Não animar header/navbar críticos no first paint sem necessidade.

# Dados (React Query)
- Provider global já incluso no layout.
- Usar `useQuery({ queryKey: [...], queryFn: async () => ... })` para buscar dados.
- Nomear `queryKey` de forma estável (ex.: `["orders", { date }]`).
- Erros propagam para `app/(app)/error.tsx`.
- Loading padrão via `app/(app)/loading.tsx`.

# Variáveis de ambiente
- Todas em `.env`; modelo em `.env.example`.
- Validar com `@/lib/env.ts` (zod). Falhar rápido se faltarem chaves.
- Nunca hardcode de secrets.

# Qualidade mínima
- TypeScript estrito: `"strict": true`, `"noUncheckedIndexedAccess": true`, `"exactOptionalPropertyTypes": true`.
- Scripts disponíveis:  
  `pnpm dev`, `pnpm build`, `pnpm lint`, `pnpm format`, `pnpm typecheck`.
- PR só com `typecheck` e `lint` zerados.

## Do / Don’t
**Do**
- Usar shadcn antes de inventar componente.
- Centralizar animações em `lib/motion`.
- Usar `cn()` para classes condicionais.
- Validar env com zod.
- Manter Server Components por padrão.

**Don’t**
- Copiar exemplos de Motion de Vue/Vanilla.
- Criar variantes duplicadas fora de `lib/motion`.
- Misturar bibliotecas de UI.
- Inserir regra de negócio em `components/ui`.
- Hardcode de secrets.