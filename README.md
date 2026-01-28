# Frontend Template Base

## 📖 Introdução

Este projeto nasceu da necessidade de **evitar começar do zero em cada novo frontend** quando utilizamos editores de código como o Cursor que insiste a cada projeto "criar" de forma diferente e despadronizada. 
A ideia de um *template base* é ter uma fundação confiável, já equipada com boas práticas, que acelera o início de qualquer aplicação.

Com isso, você ganha:  
- **Produtividade** → menos tempo configurando, mais tempo construindo funcionalidades reais.  
- **Consistência** → mesmo padrão de código, UI e arquitetura em todos os projetos.  
- **Manutenibilidade** → stack já validada, com providers e integrações prontos para uso.  
- **Escalabilidade** → fácil adicionar novas features sem refazer o básico.  
- **Foco** → energia direcionada para resolver o problema do produto, não para reconfigurar setup.  

Este repositório funciona como um ponto de partida moderno e pragmático, reduzindo atrito no desenvolvimento e garantindo que novas ideias possam ser testadas rapidamente sem perder qualidade.


## 🚀 Tecnologias

Stack principal:
- **Framework**: [Next.js 16](https://nextjs.org) com App Router e Turbopack
- **Linguagem**: [TypeScript 5.9](https://www.typescriptlang.org/)
- **React**: [React 19.2](https://react.dev/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) - Componentes reutilizáveis e acessíveis
- **Animações**: [Framer Motion 12](https://www.framer.com/motion/) - Biblioteca de animações para React
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) - Framework CSS utilitário
- **Package Manager**: [pnpm](https://pnpm.io/) - Gerenciador de pacotes rápido e eficiente
- **Validação**: [Zod 4](https://zod.dev/) - Validação de schemas TypeScript
- **Formulários**: [react-hook-form](https://react-hook-form.com/) + Zod - Gerenciamento de formulários
- **Notificações**: [Sonner](https://sonner.emilkowal.ski/) - Sistema de toasts elegante
- **Temas**: [next-themes](https://github.com/pacocoursey/next-themes) - Suporte a temas claro/escuro
- **Testes**: [Vitest](https://vitest.dev/) + React Testing Library - Framework de testes (Vitest usa Vite internamente apenas para testes; o bundler principal é Turbopack)

## ✨ Características

- **Motion Provider**: Configuração centralizada para animações com Framer Motion
- **Query Provider**: Configuração do React Query/TanStack Query para gerenciamento de estado
- **Theme Provider**: Suporte completo a temas claro/escuro com next-themes
- **API Client**: Wrapper configurado para requisições HTTP com interceptors, retry e tratamento de erros
- **Hooks Customizados**: `useOnceInView` para detecção de visibilidade
- **Variantes de Animação**: Sistema de animações pré-definidas e reutilizáveis
- **Componentes UI**: Biblioteca completa de componentes shadcn/ui com Radix UI
- **Formulários**: react-hook-form + Zod para validação completa
- **Responsivo**: Design mobile-first com Tailwind CSS
- **TypeScript**: Tipagem completa e estrita para melhor DX e segurança
- **Validação de Ambiente**: Schema Zod para variáveis de ambiente
- **Configurações Centralizadas**: Arquivos `lib/config.ts` e `lib/constants.ts` para organização
- **Tratamento de Erros**: Páginas de erro, loading e 404 personalizadas e acessíveis
- **Skeletons**: Componentes de carregamento elegantes
- **Testes**: Vitest configurado com React Testing Library
- **Prettier**: Formatação automática de código configurada
- **AGENTS.md**: Instruções padronizadas para agentes de IA (padrão aberto)

## 🏗️ Estrutura do Projeto

Estrutura resumida:
```
├── app/                    # Rotas e páginas (App Router)
│   ├── (app)/             # Rotas autenticadas
│   ├── (marketing)/       # Rotas públicas
│   └── api/               # API Route Handlers
├── components/
│   └── ui/                # Componentes shadcn/ui
├── lib/                    # Utilitários e configurações
├── hooks/                  # Hooks customizados
├── providers/              # Providers React
└── public/                 # Assets estáticos
```

## 🚀 Começando

### Pré-requisitos

- Node.js 18+ 
- pnpm (recomendado) ou npm/yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/utinside/frontend-template-base.git
cd frontend-template-base
```

2. Instale as dependências:
```bash
pnpm install
```

3. Configure as variáveis de ambiente (opcional):
```bash
# .env.local
NEXT_PUBLIC_API_BASE=https://api.exemplo.com
```

4. Execute o servidor de desenvolvimento:
```bash
pnpm dev
```

5. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 🎨 Sistema de Animações

### Motion Provider
```tsx
import { MotionProvider } from '@/providers/MotionProvider'

export default function RootLayout({ children }) {
  return (
    <MotionProvider>
      {children}
    </MotionProvider>
  )
}
```

### Variantes de Animação
```tsx
import { Motion, VARIANTS } from '@/lib/motion'

<Motion.div variants={VARIANTS.slideUp}>
  Conteúdo animado
</Motion.div>
```

### Hook useOnceInView
```tsx
import { useOnceInView } from '@/hooks/use-once-in-view'

const { ref, inView } = useOnceInView()
```

## 🔧 Sistema de Queries

### Query Provider
```tsx
import { QueryProvider } from '@/providers/QueryProvider'

export default function RootLayout({ children }) {
  return (
    <QueryProvider>
      {children}
    </QueryProvider>
  )
}
```

### Uso do React Query
```tsx
import { useQuery } from '@tanstack/react-query'

const { data, isLoading } = useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers
})
```

## 🎭 Componentes UI Disponíveis

### Componentes Já Instalados

- **Button**: Botões com múltiplas variantes e estados
- **Card**: Containers para conteúdo organizado
- **Dialog**: Modais e diálogos acessíveis
- **Input**: Campos de entrada com validação
- **Label**: Labels para formulários
- **Skeleton**: Componentes de carregamento
- **Dropdown Menu**: Menus dropdown interativos
- **Popover**: Popovers informativos
- **Sonner**: Sistema de notificações elegante
- **Form**: Componentes de formulário (react-hook-form integrado)

### Como Adicionar Novos Componentes

O projeto possui o **shadcn CLI instalado localmente**. Use os scripts do `package.json` para adicionar componentes:

```bash
# Adicionar um componente
pnpm shadcn:add button

# Adicionar múltiplos componentes
pnpm shadcn:add table select checkbox

# Ver todos os comandos disponíveis
pnpm shadcn
```

**Scripts Disponíveis:**
- `pnpm shadcn` - Ver todos os comandos disponíveis do CLI
- `pnpm shadcn:add [componente]` - Adicionar componente(s) ao projeto
- `pnpm shadcn:init` - Reinicializar configuração (se necessário)

**Exemplos:**
```bash
# Adicionar componente alert
pnpm shadcn:add alert

# Adicionar componente com overwrite
pnpm shadcn:add button --overwrite
```

Todos os componentes são adicionados em `components/ui/*` e seguem as configurações do projeto definidas em `components.json`.

Para lista completa de componentes disponíveis, consulte [shadcn/ui Components](https://ui.shadcn.com/docs/components).

## 🛠️ Scripts Disponíveis

Comandos principais:
- `pnpm dev` - Servidor de desenvolvimento com Turbopack
- `pnpm build` - Build de produção
- `pnpm start` - Servidor de produção
- `pnpm lint` - Executar ESLint
- `pnpm format` - Formatar código com Prettier
- `pnpm typecheck` - Verificar tipos TypeScript
- `pnpm test` - Executar testes com Vitest

**Scripts do shadcn CLI:**
- `pnpm shadcn` - Ver todos os comandos disponíveis do CLI
- `pnpm shadcn:add [componente]` - Adicionar componente(s) do shadcn/ui
- `pnpm shadcn:init` - Reinicializar configuração do shadcn

## 🔒 Validação e Segurança

### Variáveis de Ambiente
```tsx
import { env } from '@/lib/env'

// Validação automática com Zod
const apiUrl = env.NEXT_PUBLIC_API_BASE
```

### Validação de Dados
```tsx
import { z } from 'zod'

const userSchema = z.object({
  name: z.string().min(1),
  email: z.string().email()
})
```

## 🌓 Sistema de Temas

### Configuração Automática
- Suporte nativo a temas claro/escuro
- Integração com `next-themes`
- Detecção automática de preferência do sistema
- Transições suaves entre temas

## 📚 Recursos Adicionais

- [Next.js 16 Documentation](https://nextjs.org/docs)
- [AGENTS.md](AGENTS.md) - Instruções para agentes de IA (padrão aberto)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS 4](https://tailwindcss.com/docs)
- [React Query](https://tanstack.com/query/latest)
- [Zod](https://zod.dev/)
- [react-hook-form](https://react-hook-form.com/)
- [Sonner](https://sonner.emilkowal.ski/)
- [Vitest](https://vitest.dev/)

## 🎯 Estrutura de Arquivos Importantes

- `AGENTS.md` - Instruções completas para agentes de IA trabalhar no projeto (padrão genérico)
- `lib/api-client.ts` - Cliente HTTP configurado para requisições
- `lib/config.ts` - Configurações da aplicação
- `lib/constants.ts` - Constantes reutilizáveis
- `app/api/example/route.ts` - Exemplo completo de API Route Handler
- `components.json` - Configuração do shadcn/ui
- `.env.example` - Modelo de variáveis de ambiente

## 📖 Documentação Adicional

### AGENTS.md

O arquivo `AGENTS.md` contém instruções completas e padrões críticos para agentes de IA trabalharem no projeto. Inclui:
- Contexto completo do projeto
- Stack tecnológica com versões específicas
- Padrões de arquitetura e código
- Instruções detalhadas sobre como adicionar componentes do shadcn/ui
- Guias de implementação para features comuns
- Estado atual do projeto e o que está funcionando

É um padrão genérico que funciona com qualquer editor/ferramenta de IA, não apenas Cursor.

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**utinside** - [GitHub](https://github.com/utinside)

---

⭐ Se este template foi útil, considere dar uma estrela no repositório!
