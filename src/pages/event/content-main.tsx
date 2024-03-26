import { useParams } from 'react-router-dom'

import { useGetEventBySlugQuery } from '@/graphql/generated'

export function ContentMain() {
  const { slug } = useParams<{ slug: string }>()

  const { data } = useGetEventBySlugQuery({
    variables: {
      slug,
    },
  })

  return (
    <div className="flex flex-col items-center justify-center gap-1 py-12 ">
      <strong className="m-auto font-bold text-background lg:text-2xl">
        {data?.events?.title}
      </strong>
      <span className="text-sm tracking-tight text-muted-foreground lg:text-lg">
        TEMA: {data?.events?.theme}
      </span>
    </div>
  )
}
