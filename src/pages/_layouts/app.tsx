import { Outlet, useParams } from 'react-router-dom'

import { BackToTop } from '@/components/app/back-to-top'
import { Footer } from '@/components/app/footer'
import { Header } from '@/components/app/header'
import { useGetEventBySlugQuery } from '@/graphql/generated'

export function AppLayout() {
  const { slug } = useParams<{ slug: string }>()

  const { data } = useGetEventBySlugQuery({
    variables: {
      slug,
    },
  })

  return (
    <div className="flex min-h-screen w-full flex-col antialiased">
      <Header slug={data?.events?.slug} id={data?.events?.id} />

      <div className="flex flex-1 flex-col">
        <Outlet />
      </div>

      <BackToTop />

      <Footer />
    </div>
  )
}
