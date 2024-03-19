import { FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react'

export function Footer() {
  return (
    <footer className="flex min-h-16 flex-col items-center justify-center bg-foreground py-2 text-background">
      <div className="flex items-center justify-center gap-2">
        <FacebookLogo className="h-5 w-5" weight="fill" />
        <InstagramLogo className="h-5 w-5" weight="fill" />
        <TwitterLogo className="h-5 w-5" weight="fill" />
      </div>
      <span className="mt-1 text-xs">OAB Seccional do Maranhão</span>
      <p className="text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} - Gerência de Tecnologia da Informação
      </p>
    </footer>
  )
}
