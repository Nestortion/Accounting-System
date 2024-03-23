import { Text } from "./ui/text";
import BarGraph from "./BarGraph";

const data = [
  {
    name: "January",
    Sales: 4000,
    "R&D": 2400,
    total: 6400,
  },
  {
    name: "February",
    Sales: 3000,
    "R&D": 1398,
    total: 4398,
  },
  {
    name: "March",
    Sales: 2000,
    "R&D": 9800,
    total: 11800,
  },
  {
    name: "April",
    Sales: 2780,
    "R&D": 3908,
    total: 6688,
  },
  {
    name: "May",
    Sales: 1890,
    "R&D": 4800,
    total: 6690,
  },
  {
    name: "June",
    Sales: 2390,
    "R&D": 3800,
    total: 6190,
  },
  {
    name: "July",
    Sales: 3490,
    "R&D": 4300,
    total: 7790,
  },
];

function Revenues() {
  return (
    <div className="w-full h-[414px]">
      <div>
        <Text variant={"heading3bold"}>REVENUES</Text>
      </div>
      <BarGraph data={data} />
    </div>
  );
}

export default Revenues;
