import { House, Question } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { AlignJustify } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { ButtonShare } from '@/components/app/button-share'
import { Popover, PopoverTrigger } from '@/components/ui/popover'
import { env } from '@/env'

import Logo from '../../assets/logo-oabma.png'
import { Menu } from './menu'
import { NavLink } from './nav-item'

interface HeaderProps {
  slug?: string | null
}

export function Header({ slug }: HeaderProps) {
  const [nav, setNav] = useState(false)

  function handleNav() {
    setNav(!nav)
  }

  return (
    <>
      <div className="absolute top-[-12.9rem] -z-10 h-[31.25rem] w-full -skew-y-12 bg-sky-900" />

      <Popover open={nav} onOpenChange={setNav}>
        <PopoverTrigger asChild>
          <AlignJustify
            onClick={() => handleNav()}
            className="absolute right-4 top-7 z-[99] h-9 w-9 text-background md:hidden"
          />
        </PopoverTrigger>
        <Menu openPopover={nav} slug={slug!} />
      </Popover>

      <motion.div
        className="flex items-center gap-7 px-4 pt-4 md:px-7"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.9 }}
      >
        <Link to={env.VITE_OAB_URL} target="_blank">
          <img src={Logo} className="h-16" alt="OAB Seccional Maranhão" />
        </Link>

        <div className="flex flex-1 items-center justify-between gap-20 max-md:hidden">
          <div className="flex  items-center justify-center md:space-x-5">
            <NavLink to="/">
              <House className="h-5 w-5" />
              Início
            </NavLink>

            <NavLink to="/contact">
              <Question className="h-5 w-5" />
              Dúvidas e contatos
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
