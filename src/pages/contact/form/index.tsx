import { WhatsappLogo } from '@phosphor-icons/react'
import { PatternFormat } from 'react-number-format'

import { Input } from '@/components/ui/input'

export function Form() {
  return (
    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
      <form>
        <div className="relative mb-6">
          <div className="space-y-2">
            <p className="text-sm font-medium">Nome completo</p>
            <Input
              type="text"
              placeholder="Ex: João da Silva"
              className="placeholder:italic"
            />
          </div>
        </div>

        <div className="relative mb-6">
          <div className="space-y-2">
            <p className="text-sm font-medium">Seu melhor e-mail</p>
            <Input
              type="email"
              placeholder="Ex: joao@example.com"
              className="placeholder:italic"
            />
          </div>
        </div>

        <div className="relative mb-6">
          <div className="space-y-2">
            <p className="flex items-center gap-1 text-sm font-medium">
              <WhatsappLogo className="h-5 w-5" />
              WhatsApp
            </p>
            <PatternFormat
              format="(##) #####-####"
              autoComplete="tel-national"
              placeholder="(99) 99999-9999"
              className=" block min-h-[auto] w-full rounded border-2  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-sky-900 motion-reduce:transition-none"
            />
          </div>
        </div>

        <div className="relative mb-6">
          <textarea
            className=" block min-h-[auto] w-full rounded border-2  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-sky-900 motion-reduce:transition-none"
            id="message"
            rows={3}
            placeholder="Sua mensagem..."
          />
        </div>

        <button
          type="button"
          className="mb-6 inline-block w-full rounded bg-rose-700 px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-rose-800 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-rose-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-rose-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0"
        >
          Enviar mensagem
        </button>
      </form>
    </div>
  )
}
