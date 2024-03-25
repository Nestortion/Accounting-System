import { ColumnDef } from '@tanstack/react-table'
import { Avatar } from '../ui/avatar'
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'
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

export type Employees = {
  empId: string
  empName: string
  empContactInfo: string
  empAddress: string
  empEmail: string
  empDateHired: string
  empDateTerminated: string
  empImage: string
  empBirtdate: string
  empSalary: number
}

export const employeeColumns: ColumnDef<Employees>[] = [
  {
    accessorKey: 'empName',
    header: 'Employee Name',
    cell: ({ row }) => {
      return (
        <div className="flex gap-4 min-w-32 items-center">
          <div>
            <Avatar>
              <AvatarImage src={row.original.empImage} />
              <AvatarFallback>NG</AvatarFallback>
            </Avatar>
          </div>
          <div>{row.original.empName}</div>
        </div>
      )
    },
  },
  {
    accessorKey: 'empAddress',
    header: 'Address',
    cell: ({ row }) => (
      <div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div className="line-clamp-2 max-w-60">
                {row.original.empAddress}
              </div>
            </TooltipTrigger>
            <TooltipContent>{row.original.empAddress}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    ),
  },
  {
    accessorKey: 'empContactInfo',
    header: 'Contact Info',
  },
  {
    accessorKey: 'empEmail',
    header: 'Email',
  },
  {
    accessorKey: 'empBirtdate',
    header: 'Birthdate',
  },
  {
    accessorKey: 'empDateHired',
    header: 'Date Hired',
  },
  {
    accessorKey: 'empSalary',
    header: 'Salary',
    cell: ({ row }) => {
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',
      }).format(parseInt(row.getValue('empSalary')))

      return formatted
    },
  },
  {
    accessorKey: 'empDateTerminated',
    header: 'Date Terminated',
    cell: ({ row }) => (
      <div className="flex justify-between">
        <div>{row.original.empDateTerminated}</div>
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
                  navigator.clipboard.writeText(row.original.empId)
                }
              >
                Copy Product Code
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View Employee Profile</DropdownMenuItem>
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
