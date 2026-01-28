/**
 * Constantes da aplicação
 * 
 * Valores fixos e reutilizáveis que não mudam entre ambientes.
 * Para valores que variam por ambiente, usar lib/config.ts
 */

/**
 * Rotas da aplicação
 */
export const ROUTES = {
  HOME: "/",
  NOT_FOUND: "/404",
} as const

/**
 * Mensagens de erro comuns
 */
export const ERROR_MESSAGES = {
  NETWORK_ERROR: "Erro de conexão. Verifique sua internet e tente novamente.",
  UNAUTHORIZED: "Sessão expirada. Por favor, faça login novamente.",
  FORBIDDEN: "Você não tem permissão para realizar esta ação.",
  NOT_FOUND: "Recurso não encontrado.",
  SERVER_ERROR: "Erro interno do servidor. Tente novamente mais tarde.",
  VALIDATION_ERROR: "Dados inválidos. Verifique os campos e tente novamente.",
} as const

/**
 * Mensagens de sucesso comuns
 */
export const SUCCESS_MESSAGES = {
  CREATED: "Criado com sucesso!",
  UPDATED: "Atualizado com sucesso!",
  DELETED: "Removido com sucesso!",
  SAVED: "Salvo com sucesso!",
} as const

/**
 * Breakpoints (em pixels) - alinhado com Tailwind
 */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const

/**
 * Durações de animação (em ms)
 */
export const ANIMATION_DURATION = {
  fast: 150,
  normal: 250,
  slow: 400,
} as const

/**
 * Status HTTP comuns
 */
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
} as const

