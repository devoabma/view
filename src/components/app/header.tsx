import { ClipboardPenLine } from 'lucide-react'

import Logo from '../../assets/logo-oabma.png'
import { Button } from '../ui/button'

export function Header() {
  return (
    <>
      <div className=" w-full h-[31.25rem] bg-foreground -skew-y-12 absolute top-[-12.9rem] -z-10" />
      <div className="flex items-center justify-between px-4 pt-4">
        <img src={Logo} className="w-26 h-14" alt="OAB Seccional Maranhão" />
        <Button
          variant="outline"
          className="bg-foreground text-background font-semibold"
        >
          Inscrições
          <ClipboardPenLine className="w-5 h-5 ml-2 text-background" />
        </Button>
      </div>
    </>
  )
}
