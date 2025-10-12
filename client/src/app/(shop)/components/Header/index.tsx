import Link from "next/link";
import { UserRound } from "lucide-react";
import MobileDrawer from "@/app/(shop)/components/Header/mobile-drawer";
import SearchBar from "@/app/(shop)/components/Header/search-drawer";
import Cart from "@/app/(shop)/components/Header/cart-drawer";

export default function Header() {
  return (
    <header className="bg-background sticky top-0 flex items-center gap-2 p-4.5 min-lg:px-6">
      <div className="hidden w-full items-center gap-4 min-md:flex">
        <p className="text-sm font-semibold uppercase">Men</p>
        <p className="text-sm font-semibold uppercase">Women</p>
      </div>

      <div className="w-full min-md:hidden">
        <MobileDrawer />
      </div>

      <Link href="/" className="text-2xl font-bold tracking-widest">
        SORA
      </Link>

      <div className="flex w-full items-center justify-end gap-2">
        <SearchBar />
        <Link href="/auth" className="flex size-8 items-center justify-center">
          <UserRound strokeWidth={1} />
        </Link>
        <Cart />
      </div>
    </header>
  );
}
