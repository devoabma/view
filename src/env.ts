import { z } from 'zod'

const envSchema = z.object({
  VITE_API_URL: z.string().url(),
  VITE_HYGRAPH_URL: z.string().url(),
  VITE_HYGRAPH_TOKEN: z.string(),
  VITE_OAB_URL: z.string().url(),
  VITE_ISSUANCE_CERTIFICATE: z.string().url(),
})

export const env = envSchema.parse(import.meta.env)
