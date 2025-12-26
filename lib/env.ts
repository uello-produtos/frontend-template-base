import { z } from "zod"

const schema = z.object({
  NEXT_PUBLIC_API_BASE: z.string().url().optional(),
  NEXT_PUBLIC_API_TIMEOUT: z.coerce.number().positive().optional(),
})

export const env = schema.parse({
  NEXT_PUBLIC_API_BASE: process.env.NEXT_PUBLIC_API_BASE,
  NEXT_PUBLIC_API_TIMEOUT: process.env.NEXT_PUBLIC_API_TIMEOUT,
})
