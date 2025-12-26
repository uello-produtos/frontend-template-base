# Product Context

## Por Que Este Projeto Existe

### Problema Identificado

Ao iniciar novos projetos frontend, especialmente com editores assistidos por IA, há uma tendência de:
- Recriar configurações básicas a cada projeto
- Inconsistência entre projetos da mesma equipe
- Perda de tempo com setup ao invés de features
- Decisões técnicas tomadas de forma isolada e despadronizada
- Falta de documentação clara para agentes de IA

### Solução Proposta

Um template base que:
- **Padroniza** a stack e arquitetura desde o início
- **Acelera** o início de novos projetos
- **Documenta** decisões e padrões para referência futura
- **Facilita** o trabalho de agentes de IA com instruções claras
- **Garante** qualidade e boas práticas desde o início

## Como Deve Funcionar

### Para Desenvolvedores

1. **Clone/Use o template** → Base pronta em minutos
2. **Configure variáveis de ambiente** → Setup mínimo necessário
3. **Comece a desenvolver features** → Foco no produto, não no setup
4. **Siga os padrões estabelecidos** → Consistência garantida

### Para Agentes de IA

1. **Leia AGENTS.md** → Entenda stack e padrões
2. **Siga arquitetura definida** → Estrutura de pastas e organização
3. **Use componentes existentes** → shadcn/ui antes de criar custom
4. **Respeite convenções** → TypeScript strict, Server Components, etc.

## Experiência do Usuário (Desenvolvedor)

### Fluxo Ideal

```
Clonar template → pnpm install → pnpm dev → Desenvolver
```

### Pontos de Fricção Eliminados

- ✅ Configuração de TypeScript (já configurado)
- ✅ Setup de Tailwind CSS (já configurado)
- ✅ Integração de componentes UI (shadcn/ui pronto)
- ✅ Configuração de animações (Framer Motion pronto)
- ✅ Setup de React Query (provider configurado)
- ✅ Validação de formulários (react-hook-form + Zod)
- ✅ Tratamento de erros (páginas e boundaries prontos)
- ✅ Sistema de temas (next-themes configurado)

## Benefícios Esperados

### Curto Prazo
- Redução de 80%+ no tempo de setup inicial
- Consistência imediata entre projetos
- Menos erros de configuração

### Longo Prazo
- Manutenibilidade melhorada
- Onboarding mais rápido de novos desenvolvedores
- Evolução padronizada da stack

## Casos de Uso Principais

1. **Novo projeto do zero**: Usar template como base
2. **Migração de projeto**: Referência de padrões e estrutura
3. **Aprendizado**: Exemplo de boas práticas e arquitetura moderna
4. **Prototipagem rápida**: Base sólida para validar ideias

