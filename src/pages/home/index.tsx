import { motion } from 'framer-motion'
import { CalendarX2, MousePointerClick } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { Loading } from '@/components/app/loading'
import { Separator } from '@/components/ui/separator'
import { useGetHomeQuery } from '@/graphql/generated'
import { getCurrentDateInfo } from '@/utils/get-current-date-info'

import NotEvent from '../../assets/not-event.svg'
import { Info } from '@phosphor-icons/react'

export function Home() {
  const { data } = useGetHomeQuery()

  const { day, fullMonth, year } = getCurrentDateInfo()

  return (
    <>
      <Helmet title="Eventos" />

      {data ? (
        <div className="flex flex-col">
          <motion.h1
            className="mx-auto ml-14 mt-10 flex flex-col gap-3 text-3xl tracking-tight text-background lg:ml-36"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="font-extrabold tracking-tight">
              Eventos em cartaz
            </span>
            <Separator
              className="w-[20rem] bg-muted-foreground sm:w-[30rem] lg:w-[50rem] xl:w-[70rem]"
              orientation="horizontal"
            />
            <p className="text-xs italic text-gray-300">
              Hoje, {day} de {fullMonth} de {year}
            </p>
          </motion.h1>

          {data.event.length >= 1 ? (
            <div className="mx-auto mt-16 grid min-h-screen w-80 flex-1 place-items-start md:gap-14 sm:gap-x-10 md:w-[43.75rem] md:grid-cols-2 md:pb-14 md:px-10 lg:w-[59.37rem] lg:grid-cols-3 lg:px-5 lg:pb-20">
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
                      {/* biome-ignore lint/style/noNonNullAssertion: <explanation> */}
                      <Link to={event.linkEvent!} target="_blank">
                        <div className="group relative w-full transition duration-500 ease-in-out hover:scale-105">
                          <img
                            src={event.card.url}
                            // biome-ignore lint/a11y/noRedundantAlt: <explanation>
                            alt="Card Image"
                            className="h-[420px] w-[300px] transform cursor-pointer object-cover shadow-custom rounded-md"
                          />
                          <div className="absolute bottom-0 max-sm:w-[300px] left-0 right-0 m-0 flex items-center justify-center rounded-md bg-rose-800 py-1 transition duration-300 ease-in-out">
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
                      <div className="mt-2 space-y-2 w-full  text-center md:h-5">
                      {event.title && (
                          <strong className="text-sm w-full  font-extrabold tracking-tight">
                            {event.title}
                          </strong>
                        )}

                        <Separator orientation="horizontal" />

                        <p className="mb-2 font-semibold uppercase">
                          {event.dateEvent}
                        </p>


                        <div className="flex items-center justify-center gap-3">
                          <span className="text-muted-foreground">
                            {event.city}
                          </span>

                          <Separator orientation="vertical" className="h-5" />

                          <Link
                            to={`/event/${event.slug}`}
                            className="cursor-pointer text-sm font-bold text-rose-700 transition-colors hover:text-red-800"
                            onClick={() => {
                              if (window.scrollY > 0) {
                                window.scrollTo({ top: 0, behavior: "smooth" });
                              }
                            }}
                          >
                            <p className="flex items-center justify-center gap-1">
                              <Info
                                className="h-5 w-5 font-bold"
                                weight="bold"
                              />
                              Informações
                            </p>
                          </Link>
                        </div>
                        
                      </div>
                    </motion.div>
                  </div>
                )
              })}
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
