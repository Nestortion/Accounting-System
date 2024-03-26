import DataTable from "@/components/DataTable";
import {
  employeeColumns,
  type Employees,
} from "@/components/table-columns/employees.columns";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/employees/")({
  component: Employees,
});

const data: Array<Employees> = [
  {
    empId: "test",
    empAddress: "Block 5 Lot 53 Vista Rosa Subdivision Soro-Soro Binan Laguna",
    empBirtdate: new Date("November 2, 2000").toLocaleDateString(),
    empContactInfo: "09195776662",
    empDateHired: new Date().toLocaleDateString(),
    empDateTerminated: new Date().toLocaleDateString(),
    empEmail: "geronajr.nestor@gmail.com",
    empImage: "https://github.com/nestortion.png",
    empName: "Nestor P. Gerona Jr.",
    empSalary: 1000,
  },
];

function Employees() {
  const manyData = (() => {
    let many: typeof data = [];

    for (let i = 0; i < 50; i++) {
      many.push(data[0]);
    }
    return many;
  })();

  return (
    <div className="p-4 min-h-[85vh] flex flex-col items-center">
      <DataTable
        className="w-full md:w-[70vw]"
        columns={employeeColumns}
        data={manyData}
      ></DataTable>
    </div>
  );
}

export default Employees;
