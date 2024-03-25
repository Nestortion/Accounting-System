import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/reports/')({
  component: Reports,
})

function Reports() {
  return <div>Reports</div>
}

export default Reports
