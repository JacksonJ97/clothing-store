"use client";

import { Search } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "@/components/Sheet";

export default function SearchBar() {
  return (
    <Sheet>
      <SheetTrigger className="flex size-8 cursor-pointer items-center justify-center">
        <Search strokeWidth={1} />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle>Sheet Title</SheetTitle>
        <SheetDescription>Sheet Description</SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
