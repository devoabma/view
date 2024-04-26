import { Certificate, UsersThree } from '@phosphor-icons/react'
import { CalendarCheck, MessageCircleQuestion, Share2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { WhatsappShareButton } from 'react-share'

import { env } from '@/env'

import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '../ui/dropdown-menu'
import { ID_EVENT_VI_JOVEM_ADVOCACIA } from './header'

interface MenuProps {
  openDropdown: boolean
  slug?: string
  id?: string
}

export function Menu({ openDropdown, slug, id }: MenuProps) {
  return (
    <>
      {openDropdown && (
        <DropdownMenuContent
          align="end"
          className="border-slate-500 bg-gradient-to-r from-sky-700 to-indigo-600 font-medium text-gray-200"
        >
          <Link to="/">
            <DropdownMenuItem className="cursor-pointer hover:bg-slate-400/50 hover:text-white">
              <CalendarCheck className="mr-2 h-5 w-5" />
              Eventos
            </DropdownMenuItem>
          </Link>

          <DropdownMenuSeparator className="bg-slate-500" />

          <Link to="/contact">
            <DropdownMenuItem className="cursor-pointer hover:bg-slate-400/50 hover:text-white">
              <MessageCircleQuestion className="mr-2 h-5 w-5" />
              Dúvidas e contatos
            </DropdownMenuItem>
          </Link>

          <DropdownMenuSeparator className="bg-slate-500" />

          {id === ID_EVENT_VI_JOVEM_ADVOCACIA && (
            <>
              <Link to={env.VITE_GOOGLE_FORM}>
                <DropdownMenuItem className="cursor-pointer hover:bg-slate-400/50 hover:text-white">
                  <UsersThree className="mr-2 h-5 w-5" />
                  Conexão Jovem
                </DropdownMenuItem>
              </Link>

              <DropdownMenuSeparator className="bg-slate-500" />
            </>
          )}

          <Link to={env.VITE_ISSUANCE_CERTIFICATE} target="_blank">
            <DropdownMenuItem className="cursor-pointer hover:bg-slate-400/50 hover:text-white">
              <Certificate className="mr-2 h-5 w-5" />
              Emitir certificado
            </DropdownMenuItem>
          </Link>

          <DropdownMenuSeparator className="bg-slate-500" />

          <DropdownMenuItem className="cursor-pointer hover:bg-slate-400/50 hover:text-white">
            <Share2 className="mr-2 h-5 w-5" />
            <WhatsappShareButton
              url={
                slug
                  ? `${env.VITE_API_URL}/event/${slug}`
                  : `${env.VITE_API_URL}`
              }
            >
              Compartilhe
            </WhatsappShareButton>
          </DropdownMenuItem>
        </DropdownMenuContent>
      )}
    </>
  )
}
