# Frontend Template Base

Um template moderno e robusto para desenvolvimento frontend com Next.js, TypeScript, shadcn/ui e Framer Motion.

## 🚀 Tecnologias

- **Framework**: [Next.js 15](https://nextjs.org) com App Router
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) - Componentes reutilizáveis e acessíveis
- **Animações**: [Framer Motion](https://www.framer.com/motion/) - Biblioteca de animações para React
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- **Package Manager**: [pnpm](https://pnpm.io/) - Gerenciador de pacotes rápido e eficiente
- **Linting**: [ESLint](https://eslint.org/) - Linter para JavaScript/TypeScript

## ✨ Características

- **Motion Provider**: Configuração centralizada para animações com Framer Motion
- **Hooks Customizados**: `useOnceInView` para detecção de visibilidade
- **Variantes de Animação**: Sistema de animações pré-definidas e reutilizáveis
- **Componentes UI**: Biblioteca completa de componentes shadcn/ui
- **Responsivo**: Design mobile-first com Tailwind CSS
- **TypeScript**: Tipagem completa para melhor DX e segurança

## 🏗️ Estrutura do Projeto

```
├── app/
│   ├── (app)/
│   │   └── demo/           # Página de demonstração
│   ├── globals.css         # Estilos globais
│   ├── layout.tsx          # Layout principal
│   └── page.tsx            # Página inicial
├── components/
│   └── ui/                 # Componentes shadcn/ui
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── input.tsx
│       └── label.tsx
├── hooks/
│   └── use-once-in-view.ts # Hook para detecção de visibilidade
├── lib/
│   ├── motion.ts           # Utilitários de animação
│   ├── cn.ts              # Utilitário para classes CSS
│   └── utils.ts           # Funções utilitárias
├── providers/
│   └── MotionProvider.tsx  # Provider para configurações de animação
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

3. Execute o servidor de desenvolvimento:
```bash
pnpm dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 📱 Página de Demonstração

Acesse `/demo` para ver exemplos de:
- Cards interativos com animações hover
- Animações de entrada com `staggerChildren`
- Efeitos de hover com spring physics
- Integração shadcn/ui + Framer Motion

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

## 🛠️ Scripts Disponíveis

- `pnpm dev` - Servidor de desenvolvimento
- `pnpm build` - Build de produção
- `pnpm start` - Servidor de produção
- `pnpm lint` - Executar ESLint

## 📚 Recursos Adicionais

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/docs)

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
