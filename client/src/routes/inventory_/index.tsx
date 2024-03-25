import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/inventory/')({
  component: Inventory,
})

function Inventory() {
  return <div>Inventory</div>
}

export default Inventory
