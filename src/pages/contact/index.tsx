import { PhoneCall } from 'lucide-react'

import { Header } from '@/components/app/header'

import { Form } from './form'
import { Information } from './information'

export function Contact() {
  return (
    <>
      <Header />
      <div className="mx-auto mt-40 items-center justify-center md:px-6">
        <div className="container px-6 md:px-12">
          <div className="-mt-[100px] block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 md:py-16">
            <div className="flex flex-wrap items-center">
              <Form />

              <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                <div className="flex flex-wrap">
                  <Information
                    title="Suporte Técnico"
                    email="informatica@oabma.org.br"
                    phone="(98) 98329-1170"
                  >
                    <PhoneCall className="h-6 w-6 text-sky-800" />
                  </Information>

                  <Information
                    title="Suporte Técnico"
                    email="informatica@oabma.org.br"
                    phone="(98) 98329-1170"
                  >
                    <PhoneCall className="h-6 w-6 text-sky-800" />
                  </Information>

                  <Information
                    title="Suporte Técnico"
                    email="informatica@oabma.org.br"
                    phone="(98) 98329-1170"
                  >
                    <PhoneCall className="h-6 w-6 text-sky-800" />
                  </Information>

                  <Information
                    title="Suporte Técnico"
                    email="informatica@oabma.org.br"
                    phone="(98) 98329-1170"
                  >
                    <PhoneCall className="h-6 w-6 text-sky-800" />
                  </Information>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
