import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout')({
  component: LayoutComponent,
})

function LayoutComponent() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default LayoutComponent
