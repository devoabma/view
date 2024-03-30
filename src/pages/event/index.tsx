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
      {data ? (
        <>
          {data.events?.slug ? (
            <>
              <ContentMain data={data!} />
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
