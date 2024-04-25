import { z } from 'zod'

const envSchema = z.object({
  VITE_API_URL: z.string().url(),
  VITE_HYGRAPH_URL: z.string().url(),
  VITE_HYGRAPH_TOKEN: z.string(),
  VITE_OAB_URL: z.string().url(),
  VITE_ISSUANCE_CERTIFICATE: z.string().url(),
  VITE_GETFORM_URL: z.string().url(),
  VITE_GOOGLE_FORM: z.string().url(),
  // Transforma o valor booleano da ENV em uma string com o valor 'true'
  VITE_ENABLE_API_DELAY: z.string().transform((value) => value === 'true'),
})

export const env = envSchema.parse(import.meta.env)
