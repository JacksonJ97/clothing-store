import { Menu } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "@/components/Sheet";

export default function MobileDrawer() {
  return (
    <Sheet>
      <SheetTrigger className="flex size-8 cursor-pointer items-center justify-center">
        <Menu strokeWidth={1} />
      </SheetTrigger>
      <SheetContent side="left" className="w-full">
        <SheetTitle>Sheet Title</SheetTitle>
        <SheetDescription>Sheet Description</SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
