import { ApolloClient, InMemoryCache } from '@apollo/client'

import { env } from '@/env'

export const client = new ApolloClient({
  uri: env.VITE_HYGRAPH_URL,
  headers: {
    Authorization: `Bearer ${env.VITE_HYGRAPH_TOKEN}`,
  },
  cache: new InMemoryCache(),
})
