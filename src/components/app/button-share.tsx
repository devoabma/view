import { Share2 } from 'lucide-react'
import { ReactNode } from 'react'
import { WhatsappShareButton } from 'react-share'

interface ButtonShareProps {
  children?: ReactNode
  url: string
}

export function ButtonShare({ children, url }: ButtonShareProps) {
  return (
    <WhatsappShareButton url={url}>
      <div className="flex items-center gap-2 font-bold text-background hover:text-muted-foreground">
        <Share2 className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" />
        {children}
      </div>
    </WhatsappShareButton>
  )
}
