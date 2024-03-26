import { GetEventBySlugQuery } from '@/graphql/generated'

interface CardImagesProps {
  data: GetEventBySlugQuery
}

export function CardImages({ data }: CardImagesProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-10 px-6 pb-10">
      <img
        src={data?.events?.card.url}
        className="w-96 shadow-custom lg:w-[500px]"
        alt=""
      />
      {data?.events?.imagesCard.map((card, i) => {
        return (
          <img
            key={i}
            src={card.url}
            className="w-96 shadow-custom lg:w-[500px]"
            alt="Imagem do Card"
          />
        )
      })}
    </div>
  )
}
