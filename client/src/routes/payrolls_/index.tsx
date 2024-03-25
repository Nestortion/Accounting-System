import DataTable from '@/components/DataTable'
import {
  payrollColumns,
  type Payrolls,
} from '@/components/table-columns/payrolls.columns'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/payrolls/')({
  component: Payrolls,
})

const data: Payrolls = {
  prDateFrom: new Date().toLocaleDateString(),
  prDateTo: new Date().toLocaleDateString(),
  prEmpName: 'Nestor Gerona',
  prFinalAmount: 1000,
  prTotalDeduction: 200,
}

function Payrolls() {
  const manyData = (() => {
    let many: Array<typeof data> = []

    for (let i = 0; i < 50; i++) {
      many.push(data)
    }
    return many
  })()
  return (
    <div className="min-h-[85vh]">
      <DataTable columns={payrollColumns} data={manyData}></DataTable>
    </div>
  )
}

export default Payrolls
