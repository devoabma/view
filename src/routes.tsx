import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { NotFound } from './pages/404'
import { Contact } from './pages/contact'
import { Event } from './pages/event'
import { Home } from './pages/home'

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFound />,
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/:slug', element: <Event /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
])
