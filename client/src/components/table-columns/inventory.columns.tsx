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
import { cn } from '@/lib/utils'

export type Inventories = {
  invId: string
  invAssetName: string
  invStocks: number
  invStatus: 'GOOD' | 'WARNING' | 'DEPLETED'
}

export const inventoryColumns: ColumnDef<Inventories>[] = [
  {
    accessorKey: 'invAssetName',
    header: 'Asset Name',
  },
  {
    accessorKey: 'invStocks',
    header: 'Asset Stocks',
  },
  {
    accessorKey: 'invStatus',
    header: 'Asset Status',
    cell: ({ row }) => {
      return (
        <div className="flex justify-between">
          <div className="flex gap-4 items-center">
            <div>{row.original.invStatus}</div>
            <div
              className={cn([
                'w-10 h-10 rounded-full',
                row.original.invStatus === 'WARNING' && 'bg-yellow-500',
                row.original.invStatus === 'GOOD' && 'bg-emerald-500',
                row.original.invStatus === 'DEPLETED' && 'bg-red-500 ',
              ])}
            ></div>
          </div>
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
                <DropdownMenuItem>View Inventory Details</DropdownMenuItem>
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
