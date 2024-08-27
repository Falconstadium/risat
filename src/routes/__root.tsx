import { Outlet, createRootRoute } from '@tanstack/react-router'
import Footer from '../components/Footer'

export const Route = createRootRoute({
  component: () => (
    <main  className="grid min-h-[100dvh] w-full grid-rows-[auto_1fr_auto]">
      <Outlet />
      <Footer />
    </main>
  ),
})
