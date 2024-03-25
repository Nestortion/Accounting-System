import randomColor from 'randomcolor'
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

function BarGraph({
  data,
}: {
  data: Array<{
    name: string
    Sales: number
    'R&D': number
    total: number
  }>
}) {
  return (
    <ResponsiveContainer className="py-4" width="100%" height="100%">
      <ComposedChart data={data} width={350} height={414}>
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" scale="band" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="Sales"
          barSize={20}
          stackId={'a'}
          fill={randomColor({ luminosity: 'light', hue: 'red' })}
        />
        <Bar
          dataKey="R&D"
          barSize={20}
          stackId={'a'}
          fill={randomColor({ luminosity: 'light', hue: 'red' })}
        />
        <Line type="monotone" dataKey="total" stroke="#ff7300" />
      </ComposedChart>
    </ResponsiveContainer>
  )
}

export default BarGraph
