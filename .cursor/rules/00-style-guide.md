# Style Guide (Frontend)

## Stack
- Framework: Next.js (App Router, React 18, TypeScript).
- UI: Tailwind CSS + shadcn/ui.
- Estado: React Query p/ dados remotos; Zustand (opcional) p/ estado global local.
- Import alias: usar sempre "@/".

## Estrutura de pastas
- app/(marketing)/*  → rotas públicas
- app/(app)/*        → rotas autenticadas / aplicação
- app/api/*          → route handlers
- components/*       → UI compartilhada (sem regra de negócio)
- lib/*              → utilitários (ex.: lib/cn.ts, lib/motion.ts, schemas)
- hooks/*            → hooks cliente
- providers/*        → providers cliente
- Regra: não colocar lógica de domínio em components/ui.

## Server vs Client
- Server Components por padrão.
- Marcar `"use client"` somente quando necessário (interação, estado, Motion).
- Se a página for server, isolar trechos animados/estado em subcomponente cliente.

## Nomes e padrões
- Arquivos: kebab-case. Componentes: PascalCase.
- Páginas export default; utilitários/components export nomeado.
- Imports explícitos; evitar “barrels” com `export *`.

## Tailwind e `cn()`
- CSS só com Tailwind.
- Classes condicionais: usar `cn()` de `@/lib/cn` (clsx + tailwind-merge).
- Evitar classes conflitantes manuais; `cn()` resolve merges.

## Formulários
- react-hook-form + zod.
- Validação client e server quando aplicável.
- Usar componentes do shadcn de formulário (Form, FormField, FormMessage).

## Acessibilidade
- Todo componente interativo com `aria-*` adequado.
- Foco visível obrigatório; não remover outline sem substituto.

# shadcn/ui
- Já instalado; disponíveis no template: button, card, input, label, dialog.
- Preferir shadcn/ui antes de criar UI custom.
- Se faltar componente: `pnpm dlx shadcn@latest add <nome>` (gera em components/ui/*).
- Não misturar outras bibliotecas de UI sem decisão explícita.

# Motion (Framer Motion)
- Projeto é React/Next. Não usar exemplos de Vue/Vanilla.
- Configurado via `<MotionProvider/>` em app/layout.tsx (prefers-reduced-motion respeitado).
- Import padrão: `import { Motion, VARIANTS, TRANSITION, staggerChildren } from "@/lib/motion"`.
- Uso padrão: `initial="hidden" animate="show" variants={VARIANTS.slideUp}`.
- Listas/grids: usar `variants={staggerChildren(0.06)}` no contêiner.
- Variantes e transições devem vir de `@/lib/motion` (não criar ad-hoc locais).
- Animação ao entrar em viewport: `useOnceInView` de `@/hooks/use-once-in-view`; só animar quando `inView === true`.
- Não animar header/navbar críticos no first paint sem necessidade.

## Qualidade (mínimo)
- Prettier (Format on Save) e ESLint sem avisos.
- Scripts: `pnpm dev`, `pnpm build`, `pnpm lint`, `pnpm format`, `pnpm typecheck`.
- `pnpm typecheck` sem erros antes de abrir PR.

## Do / Don’t
**Do**
- Usar shadcn antes de inventar componente.
- Centralizar animações em `lib/motion`.
- Usar `cn()` sempre que houver condição em classes.
- Manter Server Components por padrão.

**Don’t**
- Copiar exemplos de Motion de Vue/Vanilla.
- Duplicar variantes/transições fora de `lib/motion`.
- Misturar bibliotecas de UI.
- Enfiar regra de negócio em `components/ui`.
