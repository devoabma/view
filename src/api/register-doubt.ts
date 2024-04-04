import { APIGETFORM } from '@/lib/axios'

export interface RegisterDoubt {
  name: string
  email: string
  whatsapp: string
  message: string
}

export async function registerDoubt({
  name,
  email,
  whatsapp,
  message,
}: RegisterDoubt) {
  await APIGETFORM.post('/', {
    name,
    email,
    whatsapp,
    message,
  })
}
