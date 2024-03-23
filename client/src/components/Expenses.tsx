import { text, Text } from "./ui/text";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import PieChart from "./PieChart";
import randomColor from "randomcolor";
import { RxDotFilled } from "react-icons/rx";

const data01 = [
  { name: "Transpo", value: 400 },
  { name: "Meal", value: 300 },
  { name: "Electricity", value: 300 },
  { name: "Payables", value: 200 },
];

const data = data01.map((d) => {
  return { ...d, color: randomColor({ hue: "", luminosity: "light" }) };
});

function Expenses() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between w-full">
        <Text variant={"heading3bold"}>EXPENSES</Text>
        <div className="flex items-center">
          <Select>
            <SelectTrigger className={`${text({ variant: "heading3ghost" })}`}>
              <SelectValue placeholder="Last Month" />
            </SelectTrigger>

            <SelectContent className={`${text({ variant: "heading3ghost" })}`}>
              <SelectItem value="Last Month">Last Month</SelectItem>
              <SelectItem value="Current Month">Current Month</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex gap-4s">
        <div className="flex flex-col justify-start">
          <div className="w-fit">
            <Text variant={"heading3bold"}>₱12000</Text>
            <Text variant={"heading3ghost"}>Last Month</Text>
          </div>
          <div>
            <PieChart data={data} />
          </div>
        </div>
        <div className="mt-8">
          {data.map((d, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-center">
                <RxDotFilled size={20} color={d.color} />
                <Text variant={"heading4bold"}>₱{d.value}</Text>
              </div>
              <Text className="ml-4" variant={"body"}>
                {d.name}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Expenses;
