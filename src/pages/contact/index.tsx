import { Code, DeviceMobile } from '@phosphor-icons/react'
import { PhoneCall } from 'lucide-react'

import { Form } from './form'
import { Information } from './information'

export function Contact() {
  return (
    <>
      <div className="mx-auto mt-40 items-center justify-center md:px-6">
        <div className="container px-6 md:px-12">
          <div className="-mt-[100px] block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px]">
            <div className="flex flex-wrap items-center">
              <Form />

              <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                <div className="flex flex-wrap">
                  <Information
                    title="Escola Superior Advocacia"
                    email="esa@oabma.org.br"
                    phone="(98) 2107-5454"
                  >
                    <PhoneCall className="h-6 w-6 text-sky-800" />
                  </Information>

                  <Information
                    title="Central de Eventos"
                    email="eventos@oabma.org.br"
                    phone="(98) 2107-5452"
                  >
                    <DeviceMobile className="h-6 w-6 text-sky-800" />
                  </Information>

                  <Information
                    title="Suporte ao Desenvolvedor"
                    email="informatica@oabma.org.br"
                    phone="(98) 99145-4667"
                  >
                    <Code className="h-6 w-6 text-sky-800" />
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
