import { motion } from 'framer-motion'

import type { GetEventBySlugQuery } from '@/graphql/generated'

interface ContentMainProps {
  data: GetEventBySlugQuery
}

export function ContentMain({ data }: ContentMainProps) {
  return (
    <motion.div
      className="container flex flex-col flex-wrap items-center justify-center gap-1 py-12 text-center"
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.9 }}
    >
      <strong className="m-auto font-bold uppercase text-background lg:text-2xl">
        {data?.events?.title}
      </strong>
      {data.events?.theme && (
        <span className="text-sm tracking-tight text-gray-400 lg:text-lg">
          Tema: {data?.events?.theme}
        </span>
      )}
    </motion.div>
  )
}
