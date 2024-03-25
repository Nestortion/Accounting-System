import DataTable from '@/components/DataTable'
import {
  Inventories,
  inventoryColumns,
} from '@/components/table-columns/inventory.columns'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/inventory/')({
  component: Inventory,
})

const data: Inventories = {
  invAssetName: 'Asset Name',
  invId: 'Inv Id',
  invStatus: 'GOOD',
  invStocks: 200,
}

function Inventory() {
  const manyData = (() => {
    let many: Array<typeof data> = []

    for (let i = 0; i < 50; i++) {
      many.push(data)
    }
    return many
  })()
  return (
    <div>
      <DataTable columns={inventoryColumns} data={manyData} />
    </div>
  )
}

export default Inventory
