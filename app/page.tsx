import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Frontend Template Base
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Template moderno e completo para acelerar o desenvolvimento frontend.
          Equipado com Next.js 16, React 19, TypeScript, shadcn/ui e muito mais.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild variant="outline" size="lg">
            <a
              href="https://github.com/uello-produtos/frontend-template-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>🚀 Next.js 16</CardTitle>
            <CardDescription>App Router com Turbopack</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Framework moderno com Server Components, otimizações automáticas e
              desenvolvimento rápido.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>🎨 shadcn/ui</CardTitle>
            <CardDescription>Componentes acessíveis</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Biblioteca de componentes reutilizáveis baseada em Radix UI e
              Tailwind CSS.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>⚡ TypeScript</CardTitle>
            <CardDescription>Tipagem completa</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              TypeScript estrito configurado para máxima segurança de tipos e
              melhor DX.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>🎭 Framer Motion</CardTitle>
            <CardDescription>Animações suaves</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Sistema de animações pré-configurado com variantes reutilizáveis.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>🔄 React Query</CardTitle>
            <CardDescription>Gerenciamento de estado</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              TanStack Query configurado para gerenciamento eficiente de dados
              remotos.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>✅ Validação</CardTitle>
            <CardDescription>Zod + react-hook-form</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Validação de formulários e schemas TypeScript-first com Zod.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">Pronto para começar?</h2>
        <p className="text-muted-foreground">
          Clone o repositório e comece a desenvolver imediatamente.
        </p>
        <div className="flex justify-center">
          <code className="rounded-md bg-muted px-4 py-2 text-sm">
            git clone https://github.com/uello-produtos/frontend-template-base.git
          </code>
        </div>
      </section>
    </div>
  )
}
