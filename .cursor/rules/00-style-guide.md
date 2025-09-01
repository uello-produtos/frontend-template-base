# Style Guide
- Framework: Next.js (App Router). UI: Tailwind + shadcn/ui.
- Componentes em `app/(routes)` e UI compartilhada em `components/`.
- Sempre usar server components por padrão; client only quando necessário (use client).
- Estado: React Query para dados remotos; Zustand para estado local global.
- Nomes: kebab-case para arquivos, PascalCase para componentes.
- CSS: só Tailwind. Utilitário `cn()` para classes condicionais.
- Formulários: react-hook-form + zod. Validação no client e no server.

# shadcn/ui
- Já está instalado no projeto (não precisa repetir `init`).
- Componentes disponíveis: button, card, input, dialog.
- Sempre que precisar de UI interativa, use shadcn/ui antes de criar componentes customizados.
- Se um componente shadcn não existir, avise para rodar: `pnpm dlx shadcn@latest add <nome>`.
- Estilização sempre com Tailwind, usando o utilitário `cn()` de lib/cn.ts.