# Arquitetura e convenções
- Padrão de pastas:
  app/(marketing)  | rotas públicas
  app/(app)        | rotas autenticadas
  components/      | UI compartilhada
  lib/             | utils, clients, schemas
- APIs: usar rotas em `app/api/*` (route.ts). Tipar com zod.
- Acessibilidade: todo componente interativo com aria-*. 
- Testes básicos: `pnpm test` (adicione depois). 
- Commits: conv. `feat:`, `fix:`, `chore:`.
