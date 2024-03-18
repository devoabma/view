import { Share2 } from 'lucide-react'
import { WhatsappShareButton } from 'react-share'

export function ButtonShare() {
  return (
    <WhatsappShareButton
      url="http://192.168.89.111:5173/"
      className="rounded-full relative"
    >
      <Share2 className="text-background" />
    </WhatsappShareButton>
  )
}
