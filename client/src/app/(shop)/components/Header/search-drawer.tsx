import Link from "next/link";
import { Search } from "lucide-react";
import Input from "@/components/Input";
import { Sheet, SheetTrigger, SheetContent } from "@/components/Sheet";

export default function SearchDrawer() {
  return (
    <Sheet>
      <SheetTrigger className="flex size-8 cursor-pointer items-center justify-center">
        <Search strokeWidth={1.25} />
      </SheetTrigger>
      <SheetContent side="top">
        <div className="mb-6 flex justify-center">
          <Link href="/" className="text-2xl font-bold tracking-widest">
            SORA
          </Link>
        </div>

        <div className="flex justify-center">
          <Input placeholder="Search for..." className="max-w-2xl" />
        </div>
      </SheetContent>
    </Sheet>
  );
}
