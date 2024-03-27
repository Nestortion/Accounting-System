import DataTable from "@/components/DataTable";
import {
  chequeColumns,
  type Cheques,
} from "@/components/table-columns/cheques.columns";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/cheques/")({
  component: Cheques,
});

const data: Cheques = {
  chqAccId: "Account Id",
  chqAmount: 4000,
  chqCreatedAt: new Date().toLocaleDateString(),
  chqDescription: "Description",
  chqIssueDate: new Date().toLocaleDateString(),
  chqPayeeName: "Nestor P. Gerona",
  chqStatus: "APPROVED",
  chqUpdatedAt: new Date().toLocaleDateString(),
};

function Cheques() {
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
        columns={chequeColumns}
        data={manyData}
      ></DataTable>
    </div>
  );
}

export default Cheques;
