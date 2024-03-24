import CardImage from '../../assets/cardImage.jpeg'

export function CardImages() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-10 px-6 pb-10">
      {Array.from({ length: 3 }, (_, i) => {
        return (
          <img
            key={i}
            src={CardImage}
            className="w-96 shadow-custom lg:w-[500px]"
            alt="Imagem do Card"
          />
        )
      })}
    </div>
  )
}
