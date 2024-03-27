import DataTable from '@/components/DataTable'
import { transactionColumns } from '@/components/table-columns/transactions.columns'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ToWords } from 'to-words'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { SelectGroup, SelectValue } from '@radix-ui/react-select'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import DatePicker from '@/components/ui/DatePicker'

const toWords = new ToWords({
  localeCode: 'en-IN',
  converterOptions: {
    currency: true,
    ignoreDecimal: false,
    ignoreZeroCurrency: false,
    doNotAddOnly: true,
    currencyOptions: {
      name: 'Pesos',
      plural: 'Pesos',
      symbol: '₱',
      fractionalUnit: {
        name: 'Centavo',
        plural: 'Centavos',
        symbol: '',
      },
    },
  },
})

export const Route = createFileRoute('/_layout/transactions/')({
  component: Transactions,
})

const data = {
  tranAccId: 'accId',
  tranAmount: 200,
  tranCreatedAt: new Date().toLocaleDateString(),
  tranUpdatedAt: new Date().toLocaleDateString(),
  tranDescription: 'descrip',
  tranId: 'tranId',
  tranTransactionDate: new Date().toLocaleDateString(),
  tranCustId: 'custId',
  tranEmpId: 'empId',
  tranVdId: 'vdId',
}

function Transactions() {
  const [person, setPerson] = useState<string>('')
  const manyData = (() => {
    let many: Array<typeof data> = []

    for (let i = 0; i < 50; i++) {
      many.push(data)
    }
    return many
  })()
  return (
    <div className="p-4 min-h-[85vh] items-center flex flex-col gap-8">
      <DataTable
        pageSize={5}
        className="w-full md:w-[70vw]"
        columns={transactionColumns}
        data={manyData}
      />
      <div className="flex gap-4 flex-col md:flex-row w-full md:w-[70vw]">
        <Card className="flex-1 overflow-y-auto">
          <CardHeader>Receipt Preview</CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-col items-center text-center">
              <span>5L Solutions Supply & Allied Services Corp.</span>
              <span>
                B19 L12 P3B, Pacita Complex 1, San Francisco, Biñan, Laguna
              </span>
              <span>09436541916</span>
            </div>
            <div className="flex flex-col items-center">
              <b>Receipt of Payment</b>
              <div className="flex justify-evenly w-full gap-1">
                <div className="flex-1 flex flex-col h-40">
                  <div>
                    <div>
                      {new Date().toLocaleDateString()}
                      <div>{toWords.convert(100)}</div>
                    </div>
                    <div>
                      From: <br />
                      5L Solutions Supply and Allied Services Corp.
                      <div>___________________</div>
                      <div>Signature Over Printed Name</div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col h-40">
                  <div>₱100</div>
                  <div>
                    Received by: Nestor
                    <div>___________________</div>
                    <div>Signature Over Printed Name</div>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex justify-evenly w-full"></div>
            </div>
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardHeader>Create Transaction</CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <Label>Amount</Label>
                <Input className="w-full" type="text" placeholder="Amount" />
              </div>
              <div className="flex-1 flex flex-col">
                <Label>Transaction Date</Label>
                <DatePicker />
              </div>
            </div>
            <div className="flex flex-col">
              <Label>Person Transacting with</Label>
              <Select value={person} onValueChange={setPerson}>
                <SelectTrigger>
                  <SelectValue placeholder="Pick One" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Employees</SelectLabel>
                    <SelectItem value="Emp Id1">Nestor | Employee</SelectItem>
                    <SelectItem value="Emp Id2">Nestor | Employee</SelectItem>
                    <SelectItem value="Emp Id3">Nestor | Employee</SelectItem>
                  </SelectGroup>
                  <SelectSeparator />
                  <SelectGroup>
                    <SelectLabel>Customers</SelectLabel>
                    <SelectItem value="Cust Id1">Nestor | Customer</SelectItem>
                    <SelectItem value="Cust Id2">Nestor | Customer</SelectItem>
                    <SelectItem value="Cust Id3">Nestor | Customer</SelectItem>
                  </SelectGroup>
                  <SelectSeparator />
                  <SelectGroup>
                    <SelectLabel>Vendors</SelectLabel>
                    <SelectItem value="Vd Id1">Nestor | Vendor</SelectItem>
                    <SelectItem value="Vd Id2">Nestor | Vendor</SelectItem>
                    <SelectItem value="Vd Id3">Nestor | Vendor</SelectItem>
                    <SelectItem value="Vd Id4">Nestor | Vendor</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col">
              <Label>Transaction Description</Label>
              <Textarea placeholder="Transaction Description" />
            </div>
            <div className="flex w-full gap-4">
              <Button className="flex-1">Submit</Button>
              <Button className="flex-1" variant={'outline'}>
                Clear
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Transactions
