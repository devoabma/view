import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { NotFoundApp } from './pages/404/app'
import { Contact } from './pages/contact'
import { Event } from './pages/event'
import { Home } from './pages/home'

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
