import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cheques/')({
  component: Cheques,
})

function Cheques() {
  return <div>Cheques</div>
}

export default Cheques
