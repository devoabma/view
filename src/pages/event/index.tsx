import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

import { Loading } from '@/components/app/loading'
import { useGetEventBySlugQuery } from '@/graphql/generated'

import { NotFound } from '../404'
import { CardImages } from './card-image'
import { ContentMain } from './content-main'

export function Event() {
  const { slug } = useParams<{ slug: string }>()

  const { data } = useGetEventBySlugQuery({
    variables: {
      slug,
    },
  })

  return (
    <>
      <Helmet title="Evento" />

      {data ? (
        <>
          {data.events?.slug ? (
            <>
              {/* biome-ignore lint/style/noNonNullAssertion: <explanation> */}
              <ContentMain data={data!} />
              {/* biome-ignore lint/style/noNonNullAssertion: <explanation> */}
              <CardImages data={data!} />
            </>
          ) : (
            <NotFound />
          )}
        </>
      ) : (
        <Loading />
      )}
    </>
  )
}
