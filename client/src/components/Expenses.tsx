import { text, Text } from './ui/text'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import PieChart from './PieChart'
import randomColor from 'randomcolor'
import { RxDotFilled } from 'react-icons/rx'
import { useState } from 'react'
import { Card } from './ui/card'

const expenseData = {
  'Current Month': [
    { name: 'Rent', value: 4000 },
    { name: 'Payables', value: 3000 },
    { name: 'Electricity', value: 3000 },
    { name: 'Payroll', value: 2000 },
  ],
  'Last Month': [
    { name: 'Rent', value: 5000 },
    { name: 'Payables', value: 2000 },
    { name: 'Electricity', value: 8000 },
    { name: 'Payroll', value: 1000 },
  ],
}

function Expenses() {
  const [month, setMonth] = useState<string>('Current Month')
  return (
    <Card className="p-4 ">
      <div className="flex justify-between w-full">
        <Text variant={'heading3bold'}>EXPENSES</Text>
        <div className="flex items-center">
          <Select value={month} onValueChange={setMonth}>
            <SelectTrigger className={`${text({ variant: 'heading3ghost' })}`}>
              <SelectValue placeholder="Current Month" />
            </SelectTrigger>

            <SelectContent className={`${text({ variant: 'heading3ghost' })}`}>
              <SelectItem value="Current Month">Current Month</SelectItem>
              <SelectItem value="Last Month">Last Month</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex gap-4s">
        <div className="flex flex-col justify-start">
          <div className="w-fit">
            <Text variant={'heading3bold'}>
              ₱
              {expenseData[month as keyof typeof expenseData].reduce(
                (acc, val) => acc + val.value,
                0,
              )}
            </Text>
            <Text variant={'heading3ghost'}>Current Month</Text>
          </div>
          <div>
            <PieChart
              data={expenseData[month as keyof typeof expenseData].map((d) => {
                return {
                  ...d,
                  color: randomColor({ hue: 'red', luminosity: 'light' }),
                }
              })}
            />
          </div>
        </div>
        <div className="mt-8">
          {expenseData[month as keyof typeof expenseData]
            .map((d) => {
              return {
                ...d,
                color: randomColor({ hue: 'red', luminosity: 'light' }),
              }
            })
            .map((d, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex items-center">
                  <RxDotFilled size={20} color={d.color} />
                  <Text variant={'heading4bold'}>₱{d.value}</Text>
                </div>
                <Text className="ml-4" variant={'body'}>
                  {d.name}
                </Text>
              </div>
            ))}
        </div>
      </div>
    </Card>
  )
}

export default Expenses
