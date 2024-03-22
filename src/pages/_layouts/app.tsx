import { Outlet } from 'react-router-dom'

import { Footer } from '@/components/app/footer'

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <div className="flex flex-1 flex-col">
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}
