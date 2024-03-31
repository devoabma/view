import Logo from '../../assets/logo-oabma.png'

export function Loading() {
  return (
    <div className="z-20 flex min-h-screen items-center justify-center">
      <header className="absolute top-0 h-3 w-full animate-bounce bg-slate-300" />

      <img
        src={Logo}
        alt="OAB Seccional Maranhão"
        className="h-30 w-52 animate-pulse"
      />
    </div>
  )
}
