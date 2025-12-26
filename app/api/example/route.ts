import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { env } from "@/lib/env"

/**
 * Exemplo de API Route Handler completo
 * 
 * Este arquivo serve como template de referência para criar novas rotas de API.
 * Demonstra:
 * - Validação de entrada com Zod
 * - Tratamento de erros padronizado
 * - Tipagem TypeScript completa
 * - Suporte a diferentes métodos HTTP
 * - Respostas tipadas e padronizadas
 * - Uso de variáveis de ambiente via lib/env.ts
 */

// Schema de validação para entrada (POST/PUT/PATCH)
const exampleSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  age: z.number().int().positive().optional(),
})

type ExampleInput = z.infer<typeof exampleSchema>

// Schema de resposta
const exampleResponseSchema = z.object({
  success: z.boolean(),
  data: z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    createdAt: z.string(),
  }),
  message: z.string().optional(),
})

type ExampleResponse = z.infer<typeof exampleResponseSchema>

/**
 * GET - Buscar recurso
 */
export async function GET(request: NextRequest) {
  try {
    // Exemplo: buscar query params
    const searchParams = request.nextUrl.searchParams
    const id = searchParams.get("id")

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          error: "ID é obrigatório",
        },
        { status: 400 }
      )
    }

    // Exemplo: usar variável de ambiente
    const apiBase = env.NEXT_PUBLIC_API_BASE

    // Simulação de busca de dados
    const data = {
      id,
      name: "Exemplo",
      email: "exemplo@email.com",
      createdAt: new Date().toISOString(),
    }

    // Validar resposta antes de retornar
    const validatedResponse = exampleResponseSchema.parse({
      success: true,
      data,
      message: "Recurso encontrado com sucesso",
    })

    return NextResponse.json(validatedResponse, { status: 200 })
  } catch (error) {
    // Tratamento de erros padronizado
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "Erro de validação",
          details: error.issues,
        },
        { status: 400 }
      )
    }

    console.error("Erro em GET /api/example:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Erro interno do servidor",
      },
      { status: 500 }
    )
  }
}

/**
 * POST - Criar recurso
 */
export async function POST(request: NextRequest) {
  try {
    // Parse e validação do body
    const body = await request.json()
    const validatedData = exampleSchema.parse(body)

    // Processar dados (exemplo: salvar no banco)
    const newResource = {
      id: crypto.randomUUID(),
      ...validatedData,
      createdAt: new Date().toISOString(),
    }

    // Validar resposta
    const response: ExampleResponse = {
      success: true,
      data: {
        id: newResource.id,
        name: newResource.name,
        email: newResource.email,
        createdAt: newResource.createdAt,
      },
      message: "Recurso criado com sucesso",
    }

    return NextResponse.json(response, { status: 201 })
  } catch (error) {
    // Tratamento de erros
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "Dados inválidos",
          details: error.issues,
        },
        { status: 400 }
      )
    }

    console.error("Erro em POST /api/example:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Erro ao criar recurso",
      },
      { status: 500 }
    )
  }
}

/**
 * PUT - Atualizar recurso completo
 */
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = exampleSchema.parse(body)
    const searchParams = request.nextUrl.searchParams
    const id = searchParams.get("id")

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          error: "ID é obrigatório",
        },
        { status: 400 }
      )
    }

    // Simulação de atualização
    const updatedResource = {
      id,
      ...validatedData,
      updatedAt: new Date().toISOString(),
    }

    return NextResponse.json(
      {
        success: true,
        data: updatedResource,
        message: "Recurso atualizado com sucesso",
      },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "Dados inválidos",
          details: error.issues,
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        success: false,
        error: "Erro ao atualizar recurso",
      },
      { status: 500 }
    )
  }
}

/**
 * DELETE - Remover recurso
 */
export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const id = searchParams.get("id")

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          error: "ID é obrigatório",
        },
        { status: 400 }
      )
    }

    // Simulação de remoção
    return NextResponse.json(
      {
        success: true,
        message: "Recurso removido com sucesso",
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Erro em DELETE /api/example:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Erro ao remover recurso",
      },
      { status: 500 }
    )
  }
}

