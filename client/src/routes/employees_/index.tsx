import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/employees/')({
  component: Employees,
})

function Employees() {
  return <div>Employees</div>
}

export default Employees
