import Link from "next/link";
import { Search, Heart, UserRound, ShoppingBag } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-background sticky top-0 flex items-center gap-2 p-4.5 min-lg:px-6">
      <div className="flex w-full items-center gap-4">
        <p className="text-sm font-semibold uppercase">Men</p>
        <p className="text-sm font-semibold uppercase">Women</p>
      </div>

      <Link href="/" className="text-2xl font-bold tracking-widest">
        SORA
      </Link>

      <div className="flex w-full items-center justify-end gap-2">
        <button className="flex size-8 cursor-pointer items-center justify-center">
          <Search strokeWidth={1} />
        </button>
        <Link href="/auth" className="flex size-8 items-center justify-center">
          <UserRound strokeWidth={1} />
        </Link>
        <button className="flex size-8 cursor-pointer items-center justify-center">
          <ShoppingBag strokeWidth={1} />
        </button>
      </div>
    </header>
  );
}
