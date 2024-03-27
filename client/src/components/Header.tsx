import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Text } from './ui/text'
import { RxBell, RxGear, RxHamburgerMenu } from 'react-icons/rx'
import { Link } from '@tanstack/react-router'
import {
  ArchiveIcon,
  ArrowLeftRightIcon,
  BadgeDollarSignIcon,
  ClipboardListIcon,
  HandCoinsIcon,
  HomeIcon,
  LogOutIcon,
  MoonIcon,
  ReceiptIcon,
  SettingsIcon,
  UsersRoundIcon,
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { useTheme } from './ui/theme.provider'
import { Switch } from './ui/switch'

function Header() {
  const { setTheme, theme } = useTheme()
  return (
    <header className="h-[10vh] `z-[10] p-4 `top-0 sticky `w-screen">
      <Sheet>
        <div className="flex">
          <div className="flex-1 flex gap-4">
            <SheetTrigger asChild>
              <div className="hover:cursor-pointer">
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
                      <MoonIcon />
                    </div>
                    <div>
                      <Switch
                        checked={theme === 'dark' ? true : false}
                        onCheckedChange={(w) => {
                          w ? setTheme('dark') : setTheme('light')
                        }}
                      />
                    </div>
                  </DropdownMenuItem>
                  <Link to="/login">
                    <DropdownMenuItem className="flex gap-4 hover:cursor-pointer">
                      <div>
                        <LogOutIcon />
                      </div>
                      <div>Logout</div>
                    </DropdownMenuItem>
                  </Link>
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
                <BadgeDollarSignIcon />
                Sales
              </Text>
            </SheetClose>
          </Link>
          <Link to="/transactions">
            <SheetClose>
              <Text
                variant={'heading1'}
                style={'underline'}
                className="flex gap-4"
              >
                <ArrowLeftRightIcon />
                Transactions
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
                <UsersRoundIcon />
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
                <ReceiptIcon />
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
                <HandCoinsIcon />
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
                <ArchiveIcon />
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
                <ClipboardListIcon />
                Reports
              </Text>
            </SheetClose>
          </Link>
        </SheetContent>
      </Sheet>
    </header>
  )
}

export default Header
