import DataTable from '@/components/DataTable'
import {
  chequeColumns,
  type Cheques,
} from '@/components/table-columns/cheques.columns'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cheques/')({
  component: Cheques,
})

const data: Cheques = {
  chqAccId: 'Account Id',
  chqAmount: 4000,
  chqCreatedAt: new Date().toLocaleDateString(),
  chqDescription: 'Description',
  chqIssueDate: new Date().toLocaleDateString(),
  chqPayeeName: 'Nestor P. Gerona',
  chqStatus: 'APPROVED',
  chqUpdatedAt: new Date().toLocaleDateString(),
}

function Cheques() {
  const manyData = (() => {
    let many: Array<typeof data> = []

    for (let i = 0; i < 50; i++) {
      many.push(data)
    }
    return many
  })()

  return (
    <div className="min-h-[85vh]">
      <DataTable columns={chequeColumns} data={manyData}></DataTable>
    </div>
  )
}

export default Cheques
