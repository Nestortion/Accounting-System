import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Text } from "./ui/text";
import {
  RxBell,
  RxDotsVertical,
  RxGear,
  RxHamburgerMenu,
} from "react-icons/rx";
import {
  FaMoneyBillTransfer,
  FaMoneyBillTrendUp,
  FaPeopleGroup,
  FaRegClipboard,
} from "react-icons/fa6";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { MdOutlineInventory2 } from "react-icons/md";
import { TbReceiptTax } from "react-icons/tb";

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
              variant={"heading2bold"}
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
              <RxDotsVertical size={40} />
            </div>
          </div>
        </div>

        <SheetContent side={"left"} className="flex flex-col justify-center">
          <Text
            variant={"heading1"}
            style={"underline"}
            className="flex gap-4 items-center"
          >
            <FaMoneyBillTrendUp />
            Sales
          </Text>
          <Text
            variant={"heading1"}
            style={"underline"}
            className="flex gap-4 items-center"
          >
            <FaPeopleGroup />
            Employees
          </Text>
          <Text
            variant={"heading1"}
            style={"underline"}
            className="flex gap-4 items-center"
          >
            <LiaMoneyCheckAltSolid />
            Cheques
          </Text>
          <Text
            variant={"heading1"}
            style={"underline"}
            className="flex gap-4 items-center"
          >
            <FaMoneyBillTransfer />
            Payrolls
          </Text>
          <Text
            variant={"heading1"}
            style={"underline"}
            className="flex gap-4 items-center"
          >
            <MdOutlineInventory2 />
            Inventory
          </Text>
          <Text
            variant={"heading1"}
            style={"underline"}
            className="flex gap-4 items-center"
          >
            <FaRegClipboard />
            Reports
          </Text>
          <Text variant={"heading1"} style={"underline"} className="flex gap-4">
            <TbReceiptTax />
            Taxes
          </Text>
        </SheetContent>
      </Sheet>
    </header>
  );
}

export default Header;
