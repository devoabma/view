import { fetchHygraphQuery } from '@/lib/fetch'

export type HomeEventsInfo = {
  slug: string
  title: string
  theme: string
  dataEvent: string[]
  city: string
  card: {
    url: string
  }
  imagesCard: {
    url: string
  }[]
}

export type HomeEventsData = {
  event: HomeEventsInfo
}

export const getHomeData = async (): Promise<HomeEventsData> => {
  const query = `
    query getHome {
      event {
        slug
        title
        theme
        dateEvent
        city
        card {
          url
        }
        imagesCard {
          url
        }
      }
    }
  `

  return fetchHygraphQuery(query)
}
