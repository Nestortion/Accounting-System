import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/_layout/reports/')({
  component: Reports,
})

function Reports() {
  return <div>Reports</div>
}

export default Reports
