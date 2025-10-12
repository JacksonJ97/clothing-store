"use client";

import { ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "@/components/Sheet";

export default function Cart() {
  return (
    <Sheet>
      <SheetTrigger className="flex size-8 cursor-pointer items-center justify-center">
        <ShoppingBag strokeWidth={1} />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle>Sheet Title</SheetTitle>
        <SheetDescription>Sheet Description</SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
