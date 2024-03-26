import { GetEventBySlugQuery } from '@/graphql/generated'

interface ContentMainProps {
  data: GetEventBySlugQuery
}

export function ContentMain({ data }: ContentMainProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 py-12 ">
      <strong className="m-auto font-bold text-background lg:text-2xl">
        {data?.events?.title}
      </strong>
      <span className="text-sm tracking-tight text-muted-foreground lg:text-lg">
        TEMA: {data?.events?.theme}
      </span>
    </div>
  )
}
