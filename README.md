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

- **Framework**: [Next.js 15.5.2](https://nextjs.org) com App Router
- **Linguagem**: [TypeScript 5](https://www.typescriptlang.org/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) - Componentes reutilizáveis e acessíveis
- **Animações**: [Framer Motion 12](https://www.framer.com/motion/) - Biblioteca de animações para React
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) - Framework CSS utilitário
- **Package Manager**: [pnpm](https://pnpm.io/) - Gerenciador de pacotes rápido e eficiente
- **Linting**: [ESLint 9](https://eslint.org/) - Linter para JavaScript/TypeScript
- **Formatação**: [Prettier](https://prettier.io/) - Formatador de código
- **Validação**: [Zod](https://zod.dev/) - Validação de schemas TypeScript
- **Notificações**: [Sonner](https://sonner.emilkowal.ski/) - Sistema de toasts elegante
- **Temas**: [next-themes](https://github.com/pacocoursey/next-themes) - Suporte a temas claro/escuro

## ✨ Características

- **Motion Provider**: Configuração centralizada para animações com Framer Motion
- **Query Provider**: Configuração do React Query/TanStack Query para gerenciamento de estado
- **Hooks Customizados**: `useOnceInView` para detecção de visibilidade
- **Variantes de Animação**: Sistema de animações pré-definidas e reutilizáveis
- **Componentes UI**: Biblioteca completa de componentes shadcn/ui com Radix UI
- **Responsivo**: Design mobile-first com Tailwind CSS
- **TypeScript**: Tipagem completa para melhor DX e segurança
- **Validação de Ambiente**: Schema Zod para variáveis de ambiente
- **Sistema de Temas**: Suporte nativo a temas claro/escuro
- **Tratamento de Erros**: Páginas de erro, loading e 404 personalizadas
- **Skeletons**: Componentes de carregamento elegantes

## 🏗️ Estrutura do Projeto

```
├── app/
│   ├── (app)/
│   │   ├── demo/           # Página de demonstração
│   │   ├── error.tsx       # Tratamento de erros
│   │   └── loading.tsx     # Página de carregamento
│   ├── globals.css         # Estilos globais
│   ├── layout.tsx          # Layout principal com providers
│   ├── not-found.tsx       # Página 404
│   └── page.tsx            # Página inicial
├── components/
│   └── ui/                 # Componentes shadcn/ui
│       ├── button.tsx      # Botões com variantes
│       ├── card.tsx        # Cards e containers
│       ├── dialog.tsx      # Modais e diálogos
│       ├── dropdown-menu.tsx # Menus dropdown
│       ├── input.tsx       # Campos de entrada
│       ├── label.tsx       # Labels para formulários
│       ├── popover.tsx     # Popovers informativos
│       ├── skeleton.tsx    # Componentes de carregamento
│       └── sonner.tsx      # Sistema de notificações
├── hooks/
│   └── use-once-in-view.ts # Hook para detecção de visibilidade
├── lib/
│   ├── env.ts              # Validação de variáveis de ambiente
│   ├── motion.ts           # Utilitários de animação
│   ├── cn.ts               # Utilitário para classes CSS
│   └── utils.ts            # Funções utilitárias
├── providers/
│   ├── MotionProvider.tsx  # Provider para configurações de animação
│   └── QueryProvider.tsx   # Provider para React Query
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

## 📱 Página de Demonstração

Acesse `/demo` para ver exemplos de:
- Cards interativos com animações hover
- Animações de entrada com `staggerChildren`
- Efeitos de hover com spring physics
- Integração shadcn/ui + Framer Motion
- Sistema de grid responsivo

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

### Componentes Base
- **Button**: Botões com múltiplas variantes e estados
- **Card**: Containers para conteúdo organizado
- **Dialog**: Modais e diálogos acessíveis
- **Input**: Campos de entrada com validação
- **Label**: Labels para formulários
- **Skeleton**: Componentes de carregamento

### Componentes Avançados
- **Dropdown Menu**: Menus dropdown interativos
- **Popover**: Popovers informativos
- **Sonner**: Sistema de notificações elegante

## 🛠️ Scripts Disponíveis

- `pnpm dev` - Servidor de desenvolvimento
- `pnpm build` - Build de produção
- `pnpm start` - Servidor de produção
- `pnpm lint` - Executar ESLint
- `pnpm format` - Formatar código com Prettier
- `pnpm typecheck` - Verificar tipos TypeScript

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

- [Next.js 15 Documentation](https://nextjs.org/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS 4](https://tailwindcss.com/docs)
- [React Query](https://tanstack.com/query/latest)
- [Zod](https://zod.dev/)
- [Sonner](https://sonner.emilkowal.ski/)

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
