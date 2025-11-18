import { ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetPopup,
  SheetTitle,
} from "@/components/Sheet";

export default function CartDrawer() {
  return (
    <Sheet>
      <SheetTrigger className="flex size-8 cursor-pointer items-center justify-center">
        <ShoppingBag strokeWidth={1.25} />
      </SheetTrigger>
      <SheetPopup className="w-full max-w-xl">
        <SheetTitle className="text-2xl">Your Cart</SheetTitle>
      </SheetPopup>
    </Sheet>
  );
}
