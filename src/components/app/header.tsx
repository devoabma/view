import { ClipboardPenLine } from 'lucide-react'

import Logo from '../../assets/logo-oabma.png'
import { Button } from '../ui/button'
import { ButtonShare } from './button-share'

export function Header() {
  return (
    <>
      <div className="absolute top-[-12.9rem] -z-10 h-[31.25rem] w-full -skew-y-12 bg-foreground" />
      <div className="flex items-center justify-between px-4 pt-4 md:px-7">
        <img src={Logo} className="w-26 h-14" alt="OAB Seccional Maranhão" />
        <div className="ml-auto flex items-center gap-4">
          <ButtonShare url="http://192.168.89.111:5173/" />

          <Button
            variant="outline"
            className="bg-foreground font-semibold text-background hover:text-foreground"
          >
            Inscrições
            <ClipboardPenLine className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </>
  )
}
