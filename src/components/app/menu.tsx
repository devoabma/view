import { House, Question } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

import { PopoverContent } from '@/components/ui/popover'
import { env } from '@/env'

import { ButtonShare } from './button-share'

interface MenuProps {
  openPopover: boolean
  slug?: string
}

export function Menu({ openPopover, slug }: MenuProps) {
  return (
    <PopoverContent>
      {openPopover && (
        <div className=" flex flex-col items-end gap-3 border-transparent bg-sky-900 py-3 pr-4 shadow-none">
          <Link
            to="/"
            className="flex items-center gap-2 font-semibold text-background hover:text-muted-foreground"
          >
            <House className="h-5 w-5" />
            Início
          </Link>

          <ButtonShare
            url={
              slug ? `${env.VITE_API_URL}/event/${slug}` : `${env.VITE_API_URL}`
            }
          >
            <span className="font-semibold md:text-base">Compartilhe</span>
          </ButtonShare>

          <Link
            to="/contact"
            className="flex items-center gap-1 font-semibold text-background transition-all hover:text-muted-foreground"
          >
            <Question className="h-5 w-5" />
            Dúvidas e contatos
          </Link>
        </div>
      )}
    </PopoverContent>
  )
}
