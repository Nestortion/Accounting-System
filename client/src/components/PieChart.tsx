import {
  Cell,
  Pie,
  PieChart as RechartPie,
  Tooltip,
  TooltipProps,
} from 'recharts'
import {
  NameType,
  ValueType,
} from 'recharts/types/component/DefaultTooltipContent'
import { text } from './ui/text'

const CustomToolTip = ({
  active,
  payload,
}: TooltipProps<ValueType, NameType>) =>
  active &&
  payload && (
    <div
      className={text({
        variant: 'body',
        class: `rounded-md px-3 bg-popover border`,
      })}
    >
      {payload[0].name}
    </div>
  )

function PieChart({
  data,
}: {
  data: Array<{
    name: string
    color: string
    value: number
  }>
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
          <Cell key={index} fill={d.color} className="outline-none" />
        ))}
      </Pie>
      <Tooltip content={CustomToolTip} />
    </RechartPie>
  )
}

export default PieChart
