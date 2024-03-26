import {
  salesColumns,
  type Sales,
} from '@/components/table-columns/sales.columns'
import { createFileRoute } from '@tanstack/react-router'
import DataTable from '@/components/DataTable'

export const Route = createFileRoute('/sales/')({
  component: Sales,
})

const getData = (): Array<Sales> => {
  return [
    {
      productName: 'product Name',
      productCode: 'code',
      dateSold: new Date().toLocaleDateString(),
      id: 'test',
      pricePerUnit: 23,
      total: 23,
      unitsSold: 23,
    },
  ]
}

function Sales() {
  const data = getData()
  const manyData = (() => {
    let many: typeof data = []

    for (let i = 0; i < 50; i++) {
      many.push(data[0])
    }
    return many
  })()

  return (
    <div className="min-h-[85vh] flex flex-col items-center">
      <DataTable
        className="md:w-[70vw]"
        columns={salesColumns}
        data={manyData}
      ></DataTable>
    </div>
  )
}

export default Sales
