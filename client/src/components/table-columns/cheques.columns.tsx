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

export type Cheques = {
  chqPayeeName: string
  chqAmount: number
  chqIssueDate: string
  chqDescription: string
  chqStatus: 'APPROVED' | 'PENDING' | 'REJECTED'
  chqAccId: string
  chqCreatedAt: string
  chqUpdatedAt: string
}

export const chequeColumns: ColumnDef<Cheques>[] = [
  {
    accessorKey: 'chqIssueDate',
    header: 'Issue Date',
  },
  {
    accessorKey: 'chqPayeeName',
    header: 'Payee Name',
    cell: ({ row }) => (
      <div className="min-w-32">{row.original.chqPayeeName}</div>
    ),
  },
  {
    accessorKey: 'chqAmount',
    header: 'Amount',
    cell: ({ row }) => {
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',
      }).format(parseInt(row.getValue('chqAmount')))

      return formatted
    },
  },
  {
    accessorKey: 'chqAccId',
    header: 'Account Id',
  },
  {
    accessorKey: 'chqDescription',
    header: 'Description',
  },
  {
    accessorKey: 'chqStatus',
    header: 'Status',
  },
  {
    accessorKey: 'chqCreatedAt',
    header: 'Created At',
  },
  {
    accessorKey: 'chqUpdatedAt',
    header: 'Updated At',
    cell: ({ row }) => (
      <div className="flex justify-between">
        <div>{row.original.chqUpdatedAt}</div>
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
              <DropdownMenuItem
                onClick={() =>
                  navigator.clipboard.writeText(row.original.chqAccId)
                }
              >
                Copy Cheque ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View Cheque Details</DropdownMenuItem>
              <DropdownMenuItem>Update Cheque Details</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex justify-between">
                Hide <EyeOff />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    ),
  },
]
