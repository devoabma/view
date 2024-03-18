import { useEffect, useState } from 'react'

import { CardImages } from './components/app/card-image'
import { ContentMain } from './components/app/content-main'
import { Header } from './components/app/header'
import { Loading } from './components/app/loading'

export function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timeout)
  })

  return (
    <div className="flex min-h-screen flex-col antialiased">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <ContentMain />
          <CardImages />
        </>
      )}
    </div>
  )
}
