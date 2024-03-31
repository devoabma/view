import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface InformationProps {
  title: string
  email: string
  phone: string
  children: ReactNode
}

export function Information({
  title,
  email,
  phone,
  children,
}: InformationProps) {
  return (
    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
      <motion.div
        className="flex items-center"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.9 }}
      >
        <div className="shrink-0">
          <div className="bg-primary-100 inline-block rounded-md p-4 text-primary">
            {children}
          </div>
        </div>
        <div className="ml-6 grow">
          <p className="mb-2 font-bold">{title}</p>
          <p className="text-muted-foreground">{email}</p>
          <p className="text-muted-foreground">{phone}</p>
        </div>
      </motion.div>
    </div>
  )
}
