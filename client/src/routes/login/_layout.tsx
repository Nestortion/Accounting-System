import Footer from '@/components/Footer'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/login/_layout')({
  component: LoginLayout,
})

function LoginLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}

export default LoginLayout
