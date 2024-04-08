import { Share2 } from 'lucide-react'
import { ReactElement } from 'react'
import { WhatsappShareButton } from 'react-share'

interface ButtonShareProps {
  children?: ReactElement
  url: string
}

export function ButtonShare({ children, url }: ButtonShareProps) {
  return (
    <WhatsappShareButton url={url}>
      <div className="flex items-center gap-2 font-normal text-slate-300 transition-all hover:text-slate-50 focus-visible:outline-none">
        <Share2 className="h-5 w-5 md:h-6 md:w-6" />
        {children}
      </div>
    </WhatsappShareButton>
  )
}
