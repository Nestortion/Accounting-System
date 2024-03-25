import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/payrolls/')({
  component: Payrolls,
})

function Payrolls() {
  return <div>Payrolls</div>
}

export default Payrolls
