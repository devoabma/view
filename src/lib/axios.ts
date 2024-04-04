import axios from 'axios'

import { env } from '@/env'

export const APIGETFORM = axios.create({
  baseURL: env.VITE_GETFORM_URL,
})

if (env.VITE_ENABLE_API_DELAY) {
  APIGETFORM.interceptors.request.use(async (config) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    return config
  })
}
