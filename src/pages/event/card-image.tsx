import { useParams } from 'react-router-dom'

import { useGetEventBySlugQuery } from '@/graphql/generated'

export function CardImages() {
  const { slug } = useParams<{ slug: string }>()

  const { data } = useGetEventBySlugQuery({
    variables: {
      slug,
    },
  })

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-10 px-6 pb-10">
      <img
        src={data?.events?.card.url}
        className="w-96 shadow-custom lg:w-[500px]"
        alt=""
      />
      {data?.events?.imagesCard.map((card) => {
        return (
          <img
            key={card.__typename}
            src={card.url}
            className="w-96 shadow-custom lg:w-[500px]"
            alt="Imagem do Card"
          />
        )
      })}
    </div>
  )
}
