import { Info } from 'lucide-react'

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
        {Array.from({ length: 5 }, (_, i) => {
          return (
            <div key={i} className="mb-10 flex  flex-col gap-2">
              <img
                src={CardImage}
                alt="Card Image"
                className="h-96 w-full cursor-pointer border shadow-custom transition-all hover:-translate-y-2"
              />

              <strong className="text-base font-extrabold uppercase">
                26 de Março de 2024
              </strong>
              <Separator orientation="horizontal" />
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">São Luís - MA</span>
                  <Separator orientation="vertical" className="h-5" />
                  <p className="flex cursor-pointer items-center gap-1 text-sm font-medium text-rose-700 hover:text-rose-900">
                    <Info className="h-4 w-4" />
                    Mais detalhes
                  </p>
                </div>
                <p className="text-sm font-semibold tracking-tight">
                  Audiência Pública sobre o Código Eleitoral em Previdenciário
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
