import Sidebar from "./sidebar";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import { Menu } from "lucide-react";

const MobileSideBar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden ">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-secondary w-36 pt-12">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideBar;
