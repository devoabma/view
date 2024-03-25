import { Certificate, House } from '@phosphor-icons/react'
import { AlignJustify } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { ButtonShare } from '@/components/app/button-share'
import { Popover, PopoverTrigger } from '@/components/ui/popover'

import Logo from '../../assets/logo-oabma.png'
import { Menu } from './menu'

export function Header() {
  const [nav, setNav] = useState(false)

  function handleNav() {
    setNav(!nav)
  }

  return (
    <>
      <div className="absolute top-[-12.9rem] -z-10 h-[31.25rem] w-full -skew-y-12 bg-foreground" />

      <Popover>
        <PopoverTrigger asChild>
          <AlignJustify
            onClick={() => handleNav()}
            className="absolute right-4 top-7 z-[99] h-9 w-9 text-background md:hidden"
          />
        </PopoverTrigger>
        <Menu nav={nav} />
      </Popover>

      <div className="flex items-center gap-7 px-4 pt-4 md:px-7">
        <Link to="https://www.oabma.org.br" target="_blank">
          <img src={Logo} className="h-16" alt="OAB Seccional Maranhão" />
        </Link>

        <div className="flex flex-1 items-center justify-between gap-20 max-md:hidden">
          <div className="flex items-center justify-center sm:space-x-6 md:space-x-10">
            <Link
              to="/"
              className="flex items-center gap-1 text-background transition-all hover:text-muted-foreground"
            >
              <House className="h-4 w-4" />
              Início
            </Link>
            <Link
              to="#"
              className="flex items-center gap-1 text-background transition-all hover:text-muted-foreground"
            >
              <Certificate className="h-5 w-5" />
              Emitir certificado
            </Link>
          </div>

          <ButtonShare url="https://pje-oabma.vercel.app">
            <span className="md:text-base">Compartilhe</span>
          </ButtonShare>
        </div>
      </div>
    </>
  )
}
