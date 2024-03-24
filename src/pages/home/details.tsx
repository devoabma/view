import { Info } from 'lucide-react'

import { Separator } from '@/components/ui/separator'

export function Details() {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground">São Luís - MA</span>
        <Separator orientation="vertical" className="h-5" />
        <p className="flex cursor-pointer items-center gap-1 text-sm font-medium text-rose-700 hover:text-rose-900">
          <Info className="h-4 w-4" />
          Mais detalhes
        </p>
      </div>
      <p className="text-sm font-semibold tracking-tight">
        Audiência Pública sobre o Código Eleitoral em Previdenciário
      </p>
    </div>
  )
}
