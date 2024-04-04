import { FacebookLogo, InstagramLogo, TwitterLogo } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

import { getCurrentDateInfo } from '@/utils/get-current-date-info'

export function Footer() {
  const { year } = getCurrentDateInfo()

  return (
    <footer
      className={`bg-wave flex min-h-16 flex-col items-center justify-center py-2 text-background`}
    >
      <div className="flex items-center justify-center gap-2">
        <Link to="https://www.facebook.com/OABMA/?locale=pt_BR" target="_blank">
          <FacebookLogo
            className="h-5 w-5 hover:text-muted-foreground"
            weight="fill"
          />
        </Link>
        <Link
          target="_blank"
          to="https://www.instagram.com/oabma/?utm_source=ig_embed&ig_rid=afdb66fa-2bdd-43a6-a824-d50d29c5e50f&ig_mid=C861519A-CEA5-4B4C-8392-DE129ABC0794"
        >
          <InstagramLogo
            className="h-5 w-5 hover:text-muted-foreground"
            weight="fill"
          />
        </Link>
        <Link to="https://twitter.com/oab_ma" target="_blank">
          <TwitterLogo
            className="h-5 w-5 hover:text-muted-foreground"
            weight="fill"
          />
        </Link>
      </div>
      <span className="mt-1 text-xs">OAB Seccional do Maranhão</span>
      <p className="text-xs text-slate-400">
        &copy; {year} - Gerência de Tecnologia da Informação
      </p>
    </footer>
  )
}
