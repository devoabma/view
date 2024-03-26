import { env } from '@/env'

export const fetchHygraphQuery = async (query: string) => {
  const response = await fetch(env.VITE_HYGRAPH_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${env.VITE_HYGRAPH_TOKEN!}`,
    },
    body: JSON.stringify({
      query,
    }),
  })

  const { data } = await response.json()

  return data
}
