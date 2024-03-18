import CardImage from '../../assets/cardImage.jpeg'

export function CardImages() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-10 px-6 pb-10">
      <img
        src={CardImage}
        className="shadow-custom w-96 lg:w-[500px]"
        alt="Imagem do Card"
      />
      <img
        src={CardImage}
        className="shadow-custom w-96 lg:w-[500px]"
        alt="Imagem do Card"
      />
      <img
        src={CardImage}
        className="shadow-custom w-96 lg:w-[500px]"
        alt="Imagem do Card"
      />
    </div>
  )
}
