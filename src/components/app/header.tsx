import { Certificate, UsersThree, X } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import {
  AlignJustify,
  CalendarCheck,
  MessageCircleQuestion,
} from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { ButtonShare } from '@/components/app/button-share'
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { env } from '@/env'

import Logo from '../../assets/logo-oabma-event.png'
import Wave from '../../assets/wave.svg'
import { Button } from '../ui/button'
import { Menu } from './menu'
import { NavLink } from './nav-item'

interface HeaderProps {
  slug?: string | null
}

export function Header({ slug }: HeaderProps) {
  const [openDropdown, setOpenDropdown] = useState(false)

  function handleNavigation() {
    setOpenDropdown(!openDropdown)
  }

  return (
    <>
      <img
        src={Wave}
        alt="Wave"
        className="absolute top-[-12.9rem] -z-10 h-[31.25rem] w-full -skew-y-12"
      />

      <DropdownMenu open={openDropdown} onOpenChange={setOpenDropdown}>
        <DropdownMenuTrigger asChild>
          <Button
            type="button"
            onClick={handleNavigation}
            className="absolute right-7 top-6 flex select-none items-center rounded-none bg-transparent p-0 text-gray-300 transition-colors hover:bg-transparent hover:text-white md:hidden"
          >
            {!openDropdown ? (
              <AlignJustify className="h-9 w-9" />
            ) : (
              <X className="h-9 w-9" />
            )}
          </Button>
        </DropdownMenuTrigger>

        <Menu openDropdown={openDropdown} slug={slug!} />
      </DropdownMenu>

      <motion.div
        className="flex items-center gap-7 px-4 pt-4 md:px-7"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.9 }}
      >
        <Link to="/">
          <img src={Logo} className="h-16" alt="OAB Seccional Maranhão" />
        </Link>

        <div className="flex flex-1 items-center justify-between gap-20 max-md:hidden">
          <div className="flex items-center justify-center hover:text-white md:space-x-5">
            <NavLink to="/">
              <CalendarCheck className="h-5 w-5" />
              Eventos
            </NavLink>

            <NavLink to="/contact">
              <MessageCircleQuestion className="h-5 w-5" />
              Dúvidas e contatos
            </NavLink>

            {slug && (
              <NavLink to={env.VITE_GOOGLE_FORM} target="_blank">
                <UsersThree className="h-5 w-5" />
                Conexão Jovem
              </NavLink>
            )}

            <NavLink to={env.VITE_ISSUANCE_CERTIFICATE} target="_blank">
              <Certificate className="h-5 w-5" />
              Emitir certificado
            </NavLink>
          </div>

          <ButtonShare
            url={
              slug ? `${env.VITE_API_URL}/event/${slug}` : `${env.VITE_API_URL}`
            }
          >
            <span className="font-semibold md:text-base">Compartilhe</span>
          </ButtonShare>
        </div>
      </motion.div>
    </>
  )
}
