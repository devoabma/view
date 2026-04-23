import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'

const Home = lazy(() =>
  import('./pages/home').then((module) => ({ default: module.Home })),
)
const Event = lazy(() =>
  import('./pages/event').then((module) => ({ default: module.Event })),
)
const Contact = lazy(() =>
  import('./pages/contact').then((module) => ({ default: module.Contact })),
)
const NotFoundApp = lazy(() =>
  import('./pages/404/app').then((module) => ({
    default: module.NotFoundApp,
  })),
)

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFoundApp />,
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/event/:slug', element: <Event /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
])
