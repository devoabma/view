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
        <div className="z-10 flex flex-col items-end gap-3 rounded-sm border-transparent py-3 pr-4 shadow-none">
          <Link
            to="/"
            className="flex items-center gap-2 font-semibold text-muted-foreground transition-colors hover:text-white"
          >
            <House className="h-5 w-5" />
            Início
          </Link>

          <ButtonShare
            url={
              slug ? `${env.VITE_API_URL}/event/${slug}` : `${env.VITE_API_URL}`
            }
          >
            <span className="font-semibold text-muted-foreground transition-colors hover:text-white">
              Compartilhe
            </span>
          </ButtonShare>

          <Link
            to="/contact"
            className="flex items-center gap-1 font-semibold text-muted-foreground transition-colors hover:text-white"
          >
            <Question className="h-5 w-5" />
            Dúvidas e contatos
          </Link>
        </div>
      )}
    </PopoverContent>
  )
}
