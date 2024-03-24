import { AlignJustify, User } from 'lucide-react'
import { HouseSimple } from 'phosphor-react'
import { useState } from 'react'

import { ButtonShare } from '@/components/app/button-share'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import Certificate from '../../assets/certificate.svg'
import Logo from '../../assets/logo-oabma.png'

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
            onClick={handleNav}
            className="absolute right-4 top-7 z-[99] h-9 w-9 text-background sm:hidden"
          />
        </PopoverTrigger>
        <PopoverContent>
          {nav ? (
            <div className="z-10 flex flex-col items-end gap-3 bg-foreground py-3 pr-4">
              <a
                href="#"
                className="flex items-center  gap-2 text-background hover:text-muted-foreground"
              >
                <HouseSimple className="h-5 w-5" />
                Início
              </a>
              <a
                href="#"
                className="flex items-center  gap-2 text-background  hover:text-muted-foreground"
              >
                <img
                  src={Certificate}
                  className="h-5 w-5 text-background"
                  alt="Icone certificado"
                />
                Emitir certificado
              </a>
              <a
                href="#"
                className="flex items-center  gap-2 text-background  hover:text-muted-foreground"
              >
                <User className="h-5 w-5" />
                Contato
              </a>
            </div>
          ) : (
            ''
          )}
        </PopoverContent>
      </Popover>

      <div className="flex items-center px-4 pt-4 md:px-7">
        <img src={Logo} className="h-16" alt="OAB Seccional Maranhão" />

        <div className="ml-auto flex items-center gap-20 max-sm:hidden">
          <div className="flex items-center sm:space-x-6 md:space-x-10">
            <a href="#" className="flex items-center gap-1 text-background">
              <HouseSimple className="h-4 w-4" />
              Início
            </a>
            <a href="#" className="flex items-center gap-1 text-background">
              <img
                src={Certificate}
                className="h-5 w-5 text-background"
                alt="Icone certificado"
              />
              Emitir certificado
            </a>
            <a href="#" className="flex items-center gap-1 text-background">
              Contato
            </a>
          </div>

          <ButtonShare url="http://192.168.89.111">
            <span className="md:text-base">Compartilhe</span>
          </ButtonShare>
        </div>
      </div>
    </>
  )
}
