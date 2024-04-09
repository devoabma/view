import { motion } from 'framer-motion'
import { CalendarX2, Info, MousePointerClick } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Loading } from '@/components/app/loading'
import { Separator } from '@/components/ui/separator'
import { useGetHomeQuery } from '@/graphql/generated'
import { getCurrentDateInfo } from '@/utils/get-current-date-info'

import NotEvent from '../../assets/not-event.svg'

export function Home() {
  const { data } = useGetHomeQuery()

  const { day, fullMonth, year } = getCurrentDateInfo()

  return (
    <>
      {data ? (
        <div className="flex flex-col">
          <motion.h1
            className="mx-auto ml-14 mt-10 flex flex-col gap-3 text-3xl tracking-tight text-background lg:ml-36"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="font-extrabold tracking-tight">Eventos</span>
            <Separator
              className="w-[20rem] bg-muted-foreground sm:w-[30rem] lg:w-[50rem] xl:w-[70rem]"
              orientation="horizontal"
            />
            <p className="text-xs italic text-gray-300">
              Hoje, {day} de {fullMonth} de {year}
            </p>
          </motion.h1>

          {data.event.length >= 1 ? (
            <div className="mx-auto mt-16 grid min-h-screen w-80 flex-1 place-items-start sm:gap-x-10  md:w-[43.75rem] md:grid-cols-2 md:px-10 lg:w-[59.37rem] lg:grid-cols-3 lg:px-5">
              {data.event.map((event) => {
                return (
                  <div key={event.slug} className="mb-10 flex flex-col gap-2">
                    <motion.div
                      initial={{ opacity: 0, y: 200, scale: 0.5 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 200, scale: 0.5 }}
                      transition={{ duration: 0.9 }}
                      className="origin-center"
                    >
                      <Link to={event.linkEvent!} target="_blank">
                        <div className="group relative transition duration-500 ease-in-out hover:scale-105">
                          <img
                            src={event.card.url}
                            alt="Card Image"
                            className="h-96 w-full transform cursor-pointer shadow-custom"
                          />
                          <div className="absolute bottom-0 left-0 right-0 m-0 flex items-center justify-center bg-rose-800 py-1 transition duration-300 ease-in-out">
                            <p className="flex items-center gap-2 text-center font-semibold text-white">
                              Inscreva-se
                              <MousePointerClick className="h-6 w-6" />
                            </p>
                          </div>
                        </div>
                      </Link>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: -100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -100 }}
                      transition={{ duration: 0.9, delay: 0.5 }}
                    >
                      <div className="mt-2 space-y-2 text-center md:h-5">
                        <strong className="mb-2 font-extrabold uppercase">
                          {event.dateEvent}
                        </strong>

                        <Separator orientation="horizontal" />

                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">
                            {event.city}
                          </span>
                          <Separator orientation="vertical" className="h-5" />
                          <Link
                            to={`/event/${event.slug}`}
                            className="flex cursor-pointer items-center gap-1 text-sm font-semibold text-rose-700 hover:text-rose-900"
                          >
                            <Info className="h-5 w-5 font-semibold" />
                            Mais detalhes
                          </Link>
                        </div>
                        <p className="text-sm font-semibold tracking-tight">
                          Tema: {event.theme}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                )
              })}
              <div></div>
            </div>
          ) : (
            <div className="container relative my-10 flex flex-col flex-wrap items-center justify-center gap-2">
              <img
                src={NotEvent}
                alt="Sem eventos"
                className="h-80 w-80 md:h-96 md:w-96 lg:h-[450px] lg:w-[450px]"
              />
              <strong className="absolute bottom-2 flex animate-pulse items-center gap-2 text-rose-700 transition-colors">
                Sem eventos no momento
                <CalendarX2 className="h-6 w-6" />
              </strong>
            </div>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}
