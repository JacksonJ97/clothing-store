import Link from "next/link";
import { UserRound } from "lucide-react";
import MobileDrawer from "@/app/(shop)/components/Header/mobile-drawer";
import SearchDrawer from "@/app/(shop)/components/Header/search-drawer";
import CartDrawer from "@/app/(shop)/components/Header/cart-drawer";

export default function Header() {
  return (
    <header className="bg-background sticky top-0 flex items-center gap-2 p-4.5 min-lg:px-6">
      <div className="hidden w-full items-center gap-4 min-md:flex">
        <Link
          href="/collections/men"
          className="text-sm font-semibold uppercase hover:underline"
        >
          Men
        </Link>
        <Link
          href="/collections/women"
          className="text-sm font-semibold uppercase hover:underline"
        >
          Women
        </Link>
      </div>

      <div className="w-full min-md:hidden">
        <MobileDrawer />
      </div>

      <Link href="/" className="text-2xl font-bold tracking-widest">
        SORA
      </Link>

      <div className="flex w-full items-center justify-end gap-2">
        <SearchDrawer />
        <Link href="/auth" className="flex size-8 items-center justify-center">
          <UserRound strokeWidth={1} />
        </Link>
        <CartDrawer />
      </div>
    </header>
  );
}
