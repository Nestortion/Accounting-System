import DataTable from "@/components/DataTable";
import {
  Inventories,
  inventoryColumns,
} from "@/components/table-columns/inventory.columns";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/inventory/")({
  component: Inventory,
});

const data: Inventories = {
  invAssetName: "Asset Name",
  invId: "Inv Id",
  invStatus: "GOOD",
  invStocks: 200,
};

function Inventory() {
  const manyData = (() => {
    let many: Array<typeof data> = [];

    for (let i = 0; i < 50; i++) {
      many.push(data);
    }
    return many;
  })();
  return (
    <div className="p-4 min-h-[85vh] flex flex-col items-center">
      <DataTable
        className="w-full md:w-[70vw]"
        columns={inventoryColumns}
        data={manyData}
      ></DataTable>
    </div>
  );
}

export default Inventory;
