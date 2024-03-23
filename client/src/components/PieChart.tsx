import { Cell, Pie, PieChart as RechartPie } from "recharts";

function PieChart({
  data,
}: {
  data: Array<{
    name: string;
    color: string;
    value: number;
  }>;
}) {
  return (
    <RechartPie width={200} height={180}>
      <Pie
        data={data}
        dataKey="value"
        cx="30%"
        cy="50%"
        innerRadius={30}
        outerRadius={60}
        fill="#8884d8"
      >
        {data.map((d, index) => (
          <Cell key={index} fill={d.color} />
        ))}
      </Pie>
    </RechartPie>
  );
}

export default PieChart;
