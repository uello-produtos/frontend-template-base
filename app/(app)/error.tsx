"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to error reporting service
    console.error("Error:", error)
  }, [error])

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-destructive">Algo deu errado</CardTitle>
          <CardDescription>
            Ocorreu um erro inesperado. Por favor, tente novamente.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {process.env.NODE_ENV === "development" && (
            <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
              <p className="font-semibold">Erro:</p>
              <p className="mt-1">{error.message}</p>
              {error.digest && (
                <p className="mt-2 text-xs opacity-75">Digest: {error.digest}</p>
              )}
            </div>
          )}
          <div className="flex gap-2">
            <Button onClick={reset} variant="default">
              Tentar novamente
            </Button>
            <Button onClick={() => window.location.href = "/"} variant="outline">
              Ir para início
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
