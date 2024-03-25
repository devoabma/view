import { Certificate, House, User } from '@phosphor-icons/react'

import { PopoverContent } from '@/components/ui/popover'

interface MenuProps {
  nav: boolean
}

export function Menu({ nav }: MenuProps) {
  return (
    <PopoverContent>
      {nav && (
        <div className="z-10 flex flex-col items-end gap-3 bg-foreground py-3 pr-4">
          <a
            href="#"
            className="flex items-center gap-2 text-background hover:text-muted-foreground"
          >
            <House className="h-5 w-5" />
            Início
          </a>
          <a
            href="#"
            className="flex items-center  gap-2 text-background  hover:text-muted-foreground"
          >
            <Certificate className="h-5 w-5" />
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
      )}
    </PopoverContent>
  )
}
