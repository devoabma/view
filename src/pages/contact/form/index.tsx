import { zodResolver } from '@hookform/resolvers/zod'
import { Spinner, WhatsappLogo } from '@phosphor-icons/react'
import { useMutation } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import { Controller, useForm } from 'react-hook-form'
import { PatternFormat } from 'react-number-format'
import { toast } from 'sonner'
import { string, z } from 'zod'

import { registerDoubt } from '@/api/register-doubt'
import { Input } from '@/components/ui/input'

const formSchema = z.object({
  name: string().min(3),
  email: string().email(),
  whatsapp: string().min(11),
  message: string().min(3),
})

type FormType = z.infer<typeof formSchema>

export function Form() {
  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      whatsapp: '',
    },
  })

  const { mutateAsync: registerDoubtFn } = useMutation({
    mutationFn: registerDoubt,
  })

  async function handleSendFormData(data: FormType) {
    try {
      await registerDoubtFn({
        name: data.name,
        email: data.email,
        whatsapp: data.whatsapp,
        message: data.message,
      })

      reset()

      toast.success('Sua mensagem foi enviada com sucesso.')
    } catch {
      toast.error('Houve um erro na solicitação, tente novamente!')
    }
  }

  return (
    <motion.div
      className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.9 }}
    >
      <form onSubmit={handleSubmit(handleSendFormData)}>
        <div className="relative mb-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Nome
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Seu nome"
              {...register('name')}
              className="placeholder:italic"
            />
            {errors.name && (
              <span className="text-sm font-semibold text-red-700">
                O campo nome é obrigatório.
              </span>
            )}
          </div>
        </div>

        <div className="relative mb-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              E-mail
            </label>
            <Input
              type="email"
              placeholder="Seu e-mail"
              {...register('email')}
              className="placeholder:italic"
            />
            {errors.email && (
              <span className="text-sm font-semibold text-red-700">
                O campo e-mail é obrigatório.
              </span>
            )}
          </div>
        </div>

        <div className="relative mb-6">
          <div className="space-y-2">
            <label
              htmlFor="tel"
              className="flex items-center gap-1 text-sm font-medium"
            >
              <WhatsappLogo className="h-5 w-5" />
              WhatsApp
            </label>

            <Controller
              control={control}
              name="whatsapp"
              render={({ field: { onChange, name, value } }) => {
                return (
                  <PatternFormat
                    format="(##) #####-####"
                    autoComplete="tel-national"
                    placeholder="(99) 99999-9999"
                    name={name}
                    value={value}
                    onChange={onChange}
                    defaultValue=""
                    className=" block min-h-[auto] w-full rounded border-2 bg-transparent  px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear placeholder:text-sm focus:border-sky-900 motion-reduce:transition-none"
                  />
                )
              }}
            />
            {errors.whatsapp && (
              <span className="text-sm font-semibold text-red-700">
                O campo whatsapp é obrigatório.
              </span>
            )}
          </div>
        </div>

        <div className="relative mb-6">
          <textarea
            className=" block min-h-[auto] w-full rounded border-2 bg-transparent  px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear placeholder:text-sm focus:border-sky-900 motion-reduce:transition-none"
            id="message"
            rows={3}
            {...register('message')}
            placeholder="Sua mensagem..."
          />
          {errors.message && (
            <span className="text-sm font-semibold text-red-700">
              O campo de messagem é obrigatório.
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mb-6 flex w-full items-center justify-center rounded bg-rose-700 px-6 py-3.5 text-xs font-bold uppercase  text-gray-100 transition duration-150 ease-in-out hover:bg-rose-800 disabled:cursor-not-allowed disabled:hover:bg-rose-700 lg:mb-0"
        >
          {isSubmitting ? (
            <Spinner className="h-5 w-5 animate-spin" />
          ) : (
            'Enviar'
          )}
        </button>
      </form>
    </motion.div>
  )
}
