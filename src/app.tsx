import { ApolloProvider } from '@apollo/client'
import { RouterProvider } from 'react-router-dom'

import { client } from './lib/apollo'
import { router } from './routes'

export function App() {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  )
}
