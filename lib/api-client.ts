/**
 * API Client - Wrapper configurado para requisições HTTP
 * 
 * Fornece:
 * - Interceptors para autenticação e tratamento de erros
 * - Retry automático para falhas de rede
 * - Tipagem TypeScript completa
 * - Integração com React Query
 * - Tratamento centralizado de erros HTTP
 */

import { env } from "./env"

export type ApiError = {
  message: string
  status: number
  statusText: string
  data?: unknown
}

export class ApiClientError extends Error {
  status: number
  statusText: string
  data?: unknown

  constructor(message: string, status: number, statusText: string, data?: unknown) {
    super(message)
    this.name = "ApiClientError"
    this.status = status
    this.statusText = statusText
    this.data = data
  }
}

export type RequestConfig = RequestInit & {
  timeout?: number
  retry?: {
    attempts: number
    delay: number
  }
  skipAuth?: boolean
}

const DEFAULT_TIMEOUT = 30000 // 30 segundos
const DEFAULT_RETRY = {
  attempts: 3,
  delay: 1000, // 1 segundo
}

/**
 * Obtém o token de autenticação (implementar conforme necessidade)
 */
function getAuthToken(): string | null {
  // Implementar lógica de obtenção do token
  // Exemplo: return localStorage.getItem("authToken")
  return null
}

/**
 * Cria headers padrão para requisições
 */
function createHeaders(customHeaders?: HeadersInit): Headers {
  const headers = new Headers(customHeaders)
  
  headers.set("Content-Type", "application/json")
  
  const token = getAuthToken()
  if (token) {
    headers.set("Authorization", `Bearer ${token}`)
  }
  
  return headers
}

/**
 * Trata erros HTTP e lança ApiClientError apropriado
 */
function handleError(response: Response, data?: unknown): never {
  const errorMessages: Record<number, string> = {
    400: "Requisição inválida",
    401: "Não autorizado. Por favor, faça login novamente.",
    403: "Acesso negado",
    404: "Recurso não encontrado",
    500: "Erro interno do servidor",
    502: "Servidor temporariamente indisponível",
    503: "Serviço temporariamente indisponível",
  }

  const message = errorMessages[response.status] || `Erro ${response.status}: ${response.statusText}`
  
  throw new ApiClientError(message, response.status, response.statusText, data)
}

/**
 * Wrapper do fetch com timeout
 */
async function fetchWithTimeout(
  url: string,
  options: RequestConfig,
  timeout: number
): Promise<Response> {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeout)

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    })
    clearTimeout(timeoutId)
    return response
  } catch (error) {
    clearTimeout(timeoutId)
    if (error instanceof Error && error.name === "AbortError") {
      throw new ApiClientError("Timeout da requisição", 408, "Request Timeout")
    }
    throw error
  }
}

/**
 * Executa retry automático em caso de falha de rede
 */
async function fetchWithRetry(
  url: string,
  options: RequestConfig,
  retryConfig: { attempts: number; delay: number }
): Promise<Response> {
  let lastError: unknown

  for (let attempt = 1; attempt <= retryConfig.attempts; attempt++) {
    try {
      const timeout = options.timeout || DEFAULT_TIMEOUT
      const response = await fetchWithTimeout(url, options, timeout)

      // Se a resposta foi bem-sucedida ou erro não é de rede, retorna
      if (response.ok || (response.status >= 400 && response.status < 500)) {
        return response
      }

      // Erro 5xx - tenta novamente
      if (response.status >= 500 && attempt < retryConfig.attempts) {
        await new Promise((resolve) => setTimeout(resolve, retryConfig.delay * attempt))
        continue
      }

      return response
    } catch (error) {
      lastError = error
      
      // Se não é erro de rede ou última tentativa, lança erro
      if (attempt === retryConfig.attempts || !(error instanceof TypeError)) {
        throw error
      }

      // Erro de rede - tenta novamente
      await new Promise((resolve) => setTimeout(resolve, retryConfig.delay * attempt))
    }
  }

  throw lastError
}

/**
 * Cliente API principal
 */
export const apiClient = {
  /**
   * Requisição GET
   */
  async get<T>(endpoint: string, config?: RequestConfig): Promise<T> {
    return this.request<T>(endpoint, { ...config, method: "GET" })
  },

  /**
   * Requisição POST
   */
  async post<T>(endpoint: string, data?: unknown, config?: RequestConfig): Promise<T> {
    return this.request<T>(endpoint, {
      ...config,
      method: "POST",
      body: data ? JSON.stringify(data) : null,
    })
  },

  /**
   * Requisição PUT
   */
  async put<T>(endpoint: string, data?: unknown, config?: RequestConfig): Promise<T> {
    return this.request<T>(endpoint, {
      ...config,
      method: "PUT",
      body: data ? JSON.stringify(data) : null,
    })
  },

  /**
   * Requisição PATCH
   */
  async patch<T>(endpoint: string, data?: unknown, config?: RequestConfig): Promise<T> {
    return this.request<T>(endpoint, {
      ...config,
      method: "PATCH",
      body: data ? JSON.stringify(data) : null,
    })
  },

  /**
   * Requisição DELETE
   */
  async delete<T>(endpoint: string, config?: RequestConfig): Promise<T> {
    return this.request<T>(endpoint, { ...config, method: "DELETE" })
  },

  /**
   * Requisição genérica
   */
  async request<T>(endpoint: string, config: RequestConfig = {}): Promise<T> {
    const baseUrl = env.NEXT_PUBLIC_API_BASE || ""
    const url = endpoint.startsWith("http") ? endpoint : `${baseUrl}${endpoint}`

    const headers = config.skipAuth
      ? new Headers(config.headers)
      : createHeaders(config.headers)

    const retryConfig = config.retry || DEFAULT_RETRY

    try {
      const response = await fetchWithRetry(
        url,
        {
          ...config,
          headers,
        },
        retryConfig
      )

      // Parse response
      const contentType = response.headers.get("content-type")
      const isJson = contentType?.includes("application/json")

      let data: unknown
      if (isJson) {
        data = await response.json()
      } else {
        data = await response.text()
      }

      // Trata erros HTTP
      if (!response.ok) {
        handleError(response, data)
      }

      return data as T
    } catch (error) {
      // Re-lança ApiClientError
      if (error instanceof ApiClientError) {
        throw error
      }

      // Erro de rede ou desconhecido
      throw new ApiClientError(
        error instanceof Error ? error.message : "Erro desconhecido",
        0,
        "Network Error"
      )
    }
  },
}

/**
 * Helper para usar com React Query
 * 
 * @example
 * ```ts
 * const { data } = useQuery({
 *   queryKey: ['users'],
 *   queryFn: () => queryFn<User[]>('/users')
 * })
 * ```
 */
export function queryFn<T>(endpoint: string, config?: RequestConfig) {
  return () => apiClient.get<T>(endpoint, config)
}

