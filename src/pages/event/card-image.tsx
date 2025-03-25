import { motion } from 'framer-motion'

import type { GetEventBySlugQuery } from '@/graphql/generated'

interface CardImagesProps {
  data: GetEventBySlugQuery
}
export function CardImages({ data }: CardImagesProps) {
  console.log(data.events?.imagesCard.length)
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-10 px-6 pb-10">
      {/* <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.9 }}
      >
        <img
          src={data?.events?.card.url}
          className="w-96 shadow-custom lg:w-[450px]"
          alt=""
        />
      </motion.div> */}

      {data?.events?.imagesCard.map((card, i) => {
        return (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.9, delay: i * 0.1 }}
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={i}
          >
            <img
              src={card.url}
              className="w-96 shadow-custom lg:w-[450px]"
              alt="Imagem do Card"
            />
          </motion.div>
        )
      })}
    </div>
  )
}
