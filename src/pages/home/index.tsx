import { Separator } from '@/components/ui/separator'

import CardImage from '../../assets/cardImage.jpeg'
import { Header } from './header'

export function Home() {
  return (
    <div className="flex flex-col p-0">
      <Header />

      <h1 className="ml-14 mt-10 flex flex-col gap-3 text-3xl tracking-tight text-background lg:ml-36">
        Eventos
        <Separator
          className="w-80 bg-muted-foreground md:w-[37.5rem] lg:w-[50rem]"
          orientation="horizontal"
        />
      </h1>

      <div className="mx-auto mt-12 grid w-80 place-items-center gap-x-10 md:w-[700px] md:grid-cols-2 md:px-10 lg:w-[950px] lg:grid-cols-3 lg:px-5">
        {Array.from({ length: 6 }, (_, i) => {
          return (
            <img
              key={i}
              src={CardImage}
              alt="Card Image"
              className="mb-10 h-96 w-full border shadow-custom"
            />
          )
        })}
      </div>
    </div>
  )
}
