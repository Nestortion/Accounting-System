import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/taxes/')({
  component: Taxes,
})

function Taxes() {
  return <div>Taxes</div>
}

export default Taxes
