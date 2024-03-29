import { CursorClick } from '@phosphor-icons/react'

import { NavLink } from '@/components/app/nav-item'

export function NotFound() {
  return (
    <div className="mt-32 flex items-center justify-center">
      <div className="text-center">
        <h1 className="mb-10 text-7xl font-bold text-background">404</h1>
        <div className="mb-10 animate-bounce">
          <svg
            className="mx-auto h-16 w-16 text-sky-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
        </div>
        <strong className="uppercase tracking-tight">
          Página não encontrada
        </strong>
        <p className="mt-4 flex items-center gap-1 text-muted-foreground">
          Vamos levar você de volta para
          <NavLink
            to="/"
            className="flex items-center gap-1 font-extrabold text-rose-800 hover:border-b-2 hover:border-b-rose-800"
          >
            Início
            <CursorClick
              className="h-5 w-5 font-extrabold text-rose-800"
              weight="duotone"
            />
          </NavLink>
        </p>
      </div>
    </div>
  )
}
