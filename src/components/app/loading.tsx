import Logo from '../../assets/logo-oabma.png'

export function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <header className="h-3 w-full animate-bounce bg-sky-700 absolute top-0" />

      <img
        src={Logo}
        alt="OAB Seccional Maranhão"
        className="w-52 h-30 animate-pulse"
      />
    </div>
  )
}
