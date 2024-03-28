import { Info } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Loading } from '@/components/app/loading'
import { Separator } from '@/components/ui/separator'
import { env } from '@/env'
import { useGetHomeQuery } from '@/graphql/generated'
import { formatedDate } from '@/utils/formated-date'
import { getCurrentDateInfo } from '@/utils/get-current-date-info'

import { Header } from '../../components/app/header'

export function Home() {
  const { data } = useGetHomeQuery()

  const { day, fullMonth, year } = getCurrentDateInfo()

  return (
    <>
      {data ? (
        <div className="flex flex-col">
          <Header />

          <h1 className="ml-14 mt-10 flex flex-col gap-3 text-3xl tracking-tight text-background lg:ml-36">
            Eventos
            <Separator
              className="w-[20rem] bg-muted-foreground md:w-[48rem] lg:w-[64rem] "
              orientation="horizontal"
            />
            <p className="text-xs italic text-gray-300">
              Hoje, {day} de {fullMonth} de {year}
            </p>
          </h1>

          <div className="mx-auto mt-12 grid w-80 place-items-center sm:gap-x-10  md:w-[43.75rem] md:grid-cols-2 md:px-10 lg:w-[59.37rem] lg:grid-cols-3 lg:px-5">
            {data.event.map((event) => {
              return (
                <div key={event.slug} className="mb-10 flex flex-col gap-2">
                  <Link to={event.linkEvent!} target="_blank">
                    <img
                      src={event.card.url}
                      alt="Card Image"
                      className="h-96 w-full transform cursor-pointer border shadow-lg transition duration-500 ease-in-out hover:scale-105"
                    />
                  </Link>

                  <strong className="text-base font-extrabold uppercase">
                    {formatedDate(event.dateEvent[0])}
                    <p className="mx-2 inline-block lowercase">à</p>
                    {formatedDate(event.dateEvent[1])}
                  </strong>

                  <Separator orientation="horizontal" />

                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        {event.city}
                      </span>
                      <Separator orientation="vertical" className="h-5" />
                      <Link
                        to={`${env.VITE_API_URL}/${event.slug}`}
                        className="flex cursor-pointer items-center gap-1 text-sm font-medium text-rose-700 hover:text-rose-900"
                      >
                        <Info className="h-4 w-4" />
                        Mais detalhes
                      </Link>
                    </div>
                    <p className="text-sm font-semibold tracking-tight">
                      Tema: {event.theme}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}
