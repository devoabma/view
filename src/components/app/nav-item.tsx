import { motion } from 'framer-motion'
import { Link, LinkProps, useLocation } from 'react-router-dom'

export type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation()

  return (
    <div className="relative space-y-2">
      <Link
        data-current={pathname === props.to}
        className="flex items-center gap-1 font-bold text-muted-foreground transition-all data-[current=true]:font-bold data-[current=true]:text-background"
        {...props}
      />

      {pathname === props.to && (
        <motion.div
          layoutId="activeNav"
          className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-lg bg-background"
        />
      )}
    </div>
  )
}