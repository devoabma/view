import { ButtonShare } from '@/components/app/button-share'

import Logo from '../../assets/logo-oabma.png'

export function Header() {
  return (
    <>
      <div className="absolute top-[-12.9rem] -z-10 h-[31.25rem] w-full -skew-y-12 bg-foreground" />
      <div className="flex items-center justify-between px-4 pt-4 md:px-7">
        <img src={Logo} className="w-26 h-14" alt="OAB Seccional Maranhão" />

        <ButtonShare url="http://192.168.89.111">
          <span className="md:text-base">Compartilhe</span>
        </ButtonShare>
      </div>
    </>
  )
}
