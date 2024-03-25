import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Text } from './ui/text'
import { RxBell, RxDotsVertical, RxGear, RxHamburgerMenu } from 'react-icons/rx'
import {
  FaMoneyBillTransfer,
  FaMoneyBillTrendUp,
  FaPeopleGroup,
  FaRegClipboard,
} from 'react-icons/fa6'
import { LiaMoneyCheckAltSolid } from 'react-icons/lia'
import { MdOutlineInventory2 } from 'react-icons/md'
import { TbReceiptTax } from 'react-icons/tb'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@radix-ui/react-popover'
import { Link } from '@tanstack/react-router'

function Header() {
  return (
    <header className="h-[10vh] `z-[10] p-4 `top-0 sticky bg-white `w-screen">
      <Sheet>
        <div className="flex">
          <div className="flex-1 flex gap-4">
            <SheetTrigger asChild>
              <div>
                <RxHamburgerMenu size={40} />
              </div>
            </SheetTrigger>
            <Text
              variant={'heading2bold'}
              className="max-w-32 h-fit line-clamp-1 xs:max-w-full xs:line-clamp-0"
            >
              5L Solutions
            </Text>
          </div>

          <div className="flex gap-4">
            <div>
              <RxGear size={40} />
            </div>
            <div>
              <RxBell size={40} />
            </div>
            <div className="ml-4">
              <Popover>
                <PopoverTrigger asChild>
                  <div>
                    <RxDotsVertical size={40} />
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Dimensions</h4>
                      <p className="text-sm text-muted-foreground">
                        Set the dimensions for the layer.
                      </p>
                    </div>
                    <div className="grid gap-2">
                      <div className="grid grid-cols-3 items-center gap-4"></div>
                      <div className="grid grid-cols-3 items-center gap-4"></div>
                      <div className="grid grid-cols-3 items-center gap-4"></div>
                      <div className="grid grid-cols-3 items-center gap-4"></div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>

        <SheetContent side={'left'} className="flex flex-col justify-center">
          <Link to="/">
            <SheetClose asChild>
              <Text
                variant={'heading1'}
                style={'underline'}
                className="flex gap-4 items-center"
              >
                <FaMoneyBillTrendUp />
                Home
              </Text>
            </SheetClose>
          </Link>
          <Link to="/sales">
            <SheetClose asChild>
              <Text
                variant={'heading1'}
                style={'underline'}
                className="flex gap-4 items-center"
              >
                <FaMoneyBillTrendUp />
                Sales
              </Text>
            </SheetClose>
          </Link>
          <Link to="/employees">
            <SheetClose asChild>
              <Text
                variant={'heading1'}
                style={'underline'}
                className="flex gap-4 items-center"
              >
                <FaPeopleGroup />
                Employees
              </Text>
            </SheetClose>
          </Link>
          <Link to="/cheques">
            <SheetClose>
              <Text
                variant={'heading1'}
                style={'underline'}
                className="flex gap-4 items-center"
              >
                <LiaMoneyCheckAltSolid />
                Cheques
              </Text>
            </SheetClose>
          </Link>
          <Link to="/payrolls">
            <SheetClose>
              <Text
                variant={'heading1'}
                style={'underline'}
                className="flex gap-4 items-center"
              >
                <FaMoneyBillTransfer />
                Payrolls
              </Text>
            </SheetClose>
          </Link>
          <Link to="/inventory">
            <SheetClose>
              <Text
                variant={'heading1'}
                style={'underline'}
                className="flex gap-4 items-center"
              >
                <MdOutlineInventory2 />
                Inventory
              </Text>
            </SheetClose>
          </Link>
          <Link to="/reports">
            <SheetClose>
              <Text
                variant={'heading1'}
                style={'underline'}
                className="flex gap-4 items-center"
              >
                <FaRegClipboard />
                Reports
              </Text>
            </SheetClose>
          </Link>
          <Link to="/taxes">
            <SheetClose>
              <Text
                variant={'heading1'}
                style={'underline'}
                className="flex gap-4"
              >
                <TbReceiptTax />
                Taxes
              </Text>
            </SheetClose>
          </Link>
        </SheetContent>
      </Sheet>
    </header>
  )
}

export default Header
