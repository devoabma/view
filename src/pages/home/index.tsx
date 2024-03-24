import { Separator } from '@/components/ui/separator'

import CardImage from '../../assets/cardImage.jpeg'
import { Details } from './details'
import { Header } from './header'

export function Home() {
  return (
    <div className="flex flex-col">
      <Header />

      <h1 className="ml-14 mt-10 flex flex-col gap-3 text-3xl tracking-tight text-background lg:ml-36">
        Eventos
        <Separator
          className="w-[400px] bg-muted-foreground sm:w-[550px] md:w-[48rem] lg:w-[64rem] "
          orientation="horizontal"
        />
        <p className="text-xs italic text-muted-foreground">
          Hoje, 23 de Março de 2024
        </p>
      </h1>

      <div className="mx-auto mt-12 grid w-80 place-items-center sm:gap-x-10  md:w-[43.75rem] md:grid-cols-2 md:px-10 lg:w-[59.37rem] lg:grid-cols-3 lg:px-5">
        {Array.from({ length: 5 }, (_, i) => {
          return (
            <div key={i} className="mb-10 flex flex-col gap-2">
              <img
                src={CardImage}
                alt="Card Image"
                className="h-96 w-full transform cursor-pointer border shadow-lg transition duration-500 ease-in-out hover:scale-105"
              />

              <strong className="text-base font-extrabold uppercase">
                26 de Março de 2024
              </strong>

              <Separator orientation="horizontal" />

              <Details />
            </div>
          )
        })}
      </div>
    </div>
  )
}
