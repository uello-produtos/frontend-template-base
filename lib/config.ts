/**
 * Configurações da aplicação
 * 
 * Centraliza todas as configurações da aplicação para facilitar manutenção
 * e evitar valores hardcoded no código.
 */

import { env } from "./env"

/**
 * Configurações de API
 */
export const apiConfig = {
  baseUrl: env.NEXT_PUBLIC_API_BASE || "",
  timeout: env.NEXT_PUBLIC_API_TIMEOUT || 30000,
  retry: {
    attempts: 3,
    delay: 1000,
  },
} as const

/**
 * Configurações de ambiente
 */
export const appConfig = {
  env: process.env.NODE_ENV || "development",
  isDevelopment: process.env.NODE_ENV === "development",
  isProduction: process.env.NODE_ENV === "production",
  isTest: process.env.NODE_ENV === "test",
} as const

/**
 * Configurações de features (feature flags)
 */
export const featureFlags = {
  enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true",
  enableDebugMode: appConfig.isDevelopment,
} as const

/**
 * Configurações de limites e timeouts
 */
export const limits = {
  maxFileSize: 10 * 1024 * 1024, // 10MB
  maxUploadFiles: 5,
  requestTimeout: 30000, // 30 segundos
  debounceDelay: 300, // 300ms
} as const

/**
 * Configurações de paginação
 */
export const pagination = {
  defaultPageSize: 10,
  maxPageSize: 100,
} as const

