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

export type Transactions = {
  tranId: string
  tranAccId: string
  tranDescription: string
  tranAmount: number
  tranEmpId?: string
  tranCustId?: string
  tranVdId?: string
  tranTransactionDate: string
  tranCreatedAt: string
  tranUpdatedAt: string
}

export const transactionColumns: ColumnDef<Transactions>[] = [
  {
    accessorKey: 'tranId',
    header: () => 'Transaction ID',
  },
  {
    accessorKey: 'tranAccId',
    header: () => 'Account ID',
  },
  {
    accessorKey: 'tranAmount',
    header: () => 'Transaction Amount',
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('tranAmount'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount)

      return formatted
    },
  },
  {
    accessorKey: 'Conducted',
    header: '',
  },
  {
    accessorKey: 'tranTransactionDate',
    header: 'Transaction Date',
  },
  {
    header: 'Transaction with',
    cell: ({ row }) => {
      if (row.original.tranEmpId) {
        return `Employee ${row.original.tranEmpId}`
      } else if (row.original.tranCustId) {
        return `Customer ${row.original.tranCustId}`
      } else {
        return `Vendor ${row.original.tranVdId}`
      }
    },
  },
]
