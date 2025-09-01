"use client"

import { Motion, VARIANTS, staggerChildren } from "@/lib/motion"
import { useOnceInView } from "@/hooks/use-once-in-view"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function DemoPage() {
  const { ref, inView } = useOnceInView()

  return (
    <Motion.section
      ref={ref as any}
      className="mx-auto max-w-5xl p-6 space-y-8"
      variants={staggerChildren(0.08)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      <Motion.h1 variants={VARIANTS.slideUp} className="text-2xl font-semibold tracking-tight">
        Demo: shadcn/ui + Framer Motion
      </Motion.h1>

      <Motion.div variants={VARIANTS.fadeIn} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Motion.div 
          variants={VARIANTS.slideUp}
          whileHover={{ 
            scale: 1.05,
            y: -8,
            transition: { type: "spring", stiffness: 300, damping: 20 }
          }}
          whileTap={{ scale: 0.98 }}
          className="cursor-pointer"
        >
          <Card className="h-full transition-shadow duration-300 hover:shadow-xl hover:shadow-blue-500/20">
            <CardHeader>
              <CardTitle>Pedidos</CardTitle>
              <CardDescription>Total hoje</CardDescription>
            </CardHeader>
            <CardContent>
              <Motion.span 
                className="text-3xl font-bold text-blue-600"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                128
              </Motion.span>
            </CardContent>
          </Card>
        </Motion.div>

        <Motion.div 
          variants={VARIANTS.slideUp}
          whileHover={{ 
            scale: 1.05,
            y: -8,
            transition: { type: "spring", stiffness: 300, damping: 20 }
          }}
          whileTap={{ scale: 0.98 }}
          className="cursor-pointer"
        >
          <Card className="h-full transition-shadow duration-300 hover:shadow-xl hover:shadow-green-500/20">
            <CardHeader>
              <CardTitle>Rotas</CardTitle>
              <CardDescription>Ativas</CardDescription>
            </CardHeader>
            <CardContent>
              <Motion.span 
                className="text-3xl font-bold text-green-600"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                34
              </Motion.span>
            </CardContent>
          </Card>
        </Motion.div>

        <Motion.div 
          variants={VARIANTS.slideUp}
          whileHover={{ 
            scale: 1.05,
            y: -8,
            transition: { type: "spring", stiffness: 300, damping: 20 }
          }}
          whileTap={{ scale: 0.98 }}
          className="cursor-pointer"
        >
          <Card className="h-full transition-shadow duration-300 hover:shadow-xl hover:shadow-purple-500/20">
            <CardHeader>
              <CardTitle>Sucesso %</CardTitle>
              <CardDescription>Últimas 24h</CardDescription>
            </CardHeader>
            <CardContent>
              <Motion.span 
                className="text-3xl font-bold text-purple-600"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                96.2%
              </Motion.span>
            </CardContent>
          </Card>
        </Motion.div>
      </Motion.div>

      <Motion.div variants={VARIANTS.slideUp} className="grid gap-4 sm:max-w-md">
        <div className="grid gap-2">
          <Label htmlFor="name">Nome</Label>
          <Input id="name" placeholder="Digite seu nome" />
        </div>
        <div className="flex items-center gap-3">
          <Button type="button">Salvar</Button>
          <Dialog>
            <DialogTrigger asChild><Button variant="secondary">Abrir Dialog</Button></DialogTrigger>
            <DialogContent>
              <DialogHeader><DialogTitle>Dialog shadcn</DialogTitle></DialogHeader>
              <Motion.div variants={VARIANTS.scaleIn} initial="hidden" animate="show" className="text-sm text-muted-foreground">
                Conteúdo com animação (scaleIn).
              </Motion.div>
            </DialogContent>
          </Dialog>
        </div>
      </Motion.div>
    </Motion.section>
  )
}
