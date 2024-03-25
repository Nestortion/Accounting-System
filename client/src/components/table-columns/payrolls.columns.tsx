import { ColumnDef } from '@tanstack/react-table'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { EyeOff, MoreHorizontal } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export type Payrolls = {
  prEmpName: string
  prTotalDeduction: number
  prDateFrom: string
  prDateTo: string
  prFinalAmount: number
}

export const payrollColumns: ColumnDef<Payrolls>[] = [
  {
    accessorKey: 'empName',
    header: 'Employee Name',
    cell: ({ row }) => {
      return (
        <div className="flex gap-4 min-w-32 items-center">
          <div>
            <Avatar>
              <AvatarImage src={'https://github.com/nestortion.png'} />
              <AvatarFallback>NG</AvatarFallback>
            </Avatar>
          </div>
          <div>{row.original.prEmpName}</div>
        </div>
      )
    },
  },
  {
    accessorKey: 'prTotalDeduction',
    header: 'Total Deductions',
    cell: ({ row }) => {
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',
      }).format(parseInt(row.getValue('prTotalDeduction')))

      return formatted
    },
  },
  {
    accessorKey: 'prDateFrom',
    header: 'Date From',
  },
  {
    accessorKey: 'prDateTo',
    header: 'Date From',
  },
  {
    accessorKey: 'prFinalAmount',
    header: 'Final Amount',
    cell: ({ row }) => {
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',
      }).format(parseInt(row.getValue('prFinalAmount')))

      return (
        <div className="flex justify-between">
          <div>{formatted}</div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View Payroll Details</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex justify-between">
                  Hide <EyeOff />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      )
    },
  },
]
