import { House } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

import { PopoverContent } from '@/components/ui/popover'
import { env } from '@/env'

import { ButtonShare } from './button-share'

interface MenuProps {
  openPopover: boolean
  slug: string
}

export function Menu({ openPopover, slug }: MenuProps) {
  return (
    <PopoverContent>
      {openPopover && (
        <div className=" flex flex-col items-end gap-3 border-transparent bg-sky-900 py-3 pr-4 shadow-none">
          <Link
            to={env.VITE_API_URL}
            className="flex items-center gap-2 text-background hover:text-muted-foreground"
          >
            <House className="h-5 w-5" />
            Início
          </Link>
          {/* <Link
            to="#"
            className="flex items-center  gap-2 text-background  hover:text-muted-foreground"
          >
            <Certificate className="hidden h-5 w-5" />
            Emitir certificado
          </Link> */}

          <ButtonShare url={`${env.VITE_API_URL}/${slug}`}>
            <span className="md:text-base">Compartilhe</span>
          </ButtonShare>
        </div>
      )}
    </PopoverContent>
  )
}
