import Expenses from '@/components/Expenses'
import Revenues from '@/components/Revenues'
import { Text } from '@/components/ui/text'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="max-h-[85vh] px-4 overflow-y-auto w-screens">
      <div className="border-b-2 border-black pb-4 mb-4">
        <Text variant={'heading1bold'}>Dashboard</Text>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-4">
        <Expenses />
        <Expenses />
        <Expenses />
        <Expenses />
        <Revenues />
      </div>
    </div>
  )
}
