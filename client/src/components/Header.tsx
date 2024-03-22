import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";

function Header() {
  return (
    <div>
      <Sheet>
        <SheetTrigger>open</SheetTrigger>
        <SheetContent side={"left"}>
          <Button>Close</Button>
          <SheetHeader>Header</SheetHeader>

          <div
            className="relative
            w-fit
            after:content-['']
            after:absolute
            after:bottom-0
            after:left-0
            after:w-0
            after:border-b-8 after:border-cyan-300
            transition-all
            duration-300
            hover:after:w-full
          "
          >
            Test
          </div>
          <SheetDescription>Description</SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Header;
