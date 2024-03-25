import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Text } from './ui/text'
import { RxBell, RxGear, RxHamburgerMenu } from 'react-icons/rx'
import {
  FaMoneyBillTransfer,
  FaMoneyBillTrendUp,
  FaPeopleGroup,
  FaRegClipboard,
} from 'react-icons/fa6'
import { LiaMoneyCheckAltSolid } from 'react-icons/lia'
import { MdOutlineInventory2 } from 'react-icons/md'
import { TbReceiptTax } from 'react-icons/tb'

import { Link } from '@tanstack/react-router'
import { HomeIcon, LogOutIcon, SettingsIcon } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

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
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="hover:cursor-pointer">
                    <Avatar>
                      <AvatarImage src="https://github.com/nestortion.png" />
                      <AvatarFallback>NG</AvatarFallback>
                    </Avatar>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64">
                  <DropdownMenuLabel>
                    <div className="flex gap-4 items-center">
                      <Avatar>
                        <AvatarImage src="https://github.com/nestortion.png" />
                        <AvatarFallback>NG</AvatarFallback>
                      </Avatar>
                      <div>Nestor P. Gerona</div>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex gap-4 hover:cursor-pointer">
                    <div>
                      <SettingsIcon />
                    </div>
                    <div>Settings</div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex gap-4 hover:cursor-pointer">
                    <div>
                      <LogOutIcon />
                    </div>
                    <div>Logout</div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        <SheetContent side={'left'} className="flex flex-col justify-center">
          <Link to="/">
            <SheetClose>
              <Text
                variant={'heading1'}
                style={'underline'}
                className="flex gap-4 items-center"
              >
                <HomeIcon />
                Home
              </Text>
            </SheetClose>
          </Link>
          <Link to="/sales">
            <SheetClose>
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
            <SheetClose>
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
