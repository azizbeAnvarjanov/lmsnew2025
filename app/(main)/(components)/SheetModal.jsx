import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import SideLinks from "./SideLinks";

const SheetModal = () => {
  return (
    <div>
      <Sheet className="sheet">
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent side="left" className="px-3">
          <div className="py-5 px-0">
          <SideLinks />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SheetModal;
