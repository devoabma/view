import { ApolloProvider } from '@apollo/client'
import { QueryClientProvider } from '@tanstack/react-query'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { Toaster } from './components/ui/sonner'
import { client } from './lib/apollo'
import { queryClient } from './lib/react-query'
import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s OAB">
        <link rel="canonical" href="https://eventos.oabma.org.br" />
      </Helmet>
      <ApolloProvider client={client}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <Toaster richColors position="top-center" />
        </QueryClientProvider>
      </ApolloProvider>
    </HelmetProvider>
  )
}
