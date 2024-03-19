import { Share2 } from 'lucide-react'
import { WhatsappShareButton } from 'react-share'

export function ButtonShare() {
  return (
    <WhatsappShareButton url="http://192.168.89.111:5173/">
      <Share2 className="h-5 w-5 text-background hover:text-muted-foreground" />
    </WhatsappShareButton>
  )
}
