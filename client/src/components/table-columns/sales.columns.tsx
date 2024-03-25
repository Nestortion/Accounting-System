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

export type Sales = {
  id: string
  productCode: string
  productName: string
  dateSold: string
  unitsSold: number
  pricePerUnit: number
  total: number
}

export const salesColumns: ColumnDef<Sales>[] = [
  {
    accessorKey: 'dateSold',
    header: () => 'Date Sold',
  },
  {
    accessorKey: 'productCode',
    header: () => 'Product Code',
  },
  {
    accessorKey: 'productName',
    header: () => 'Product Name',
  },
  {
    accessorKey: 'pricePerUnit',
    header: () => <div className="">Price Per Unit</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('pricePerUnit'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount)

      return (
        <>
          <div className="flex justify-between items-center font-medium">
            <div>{formatted}</div>
          </div>
        </>
      )
    },
  },

  {
    accessorKey: 'unitsSold',
    header: 'Units Sold',
  },
  {
    accessorKey: 'total',
    header: 'Total',
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('total'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount * parseInt(row.getValue('unitsSold')))
      return (
        <div className="flex justify-between">
          <div>{formatted}</div>
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
                  navigator.clipboard.writeText(row.original.productCode)
                }
              >
                Copy Product Code
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View Details</DropdownMenuItem>
              <DropdownMenuItem>View Product</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex justify-between">
                Hide <EyeOff />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    },
  },
]
