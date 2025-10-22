import Link from "next/link";
import { UserRound } from "lucide-react";
import MobileDrawer from "@/app/(shop)/components/Header/mobile-drawer";
import SearchDrawer from "@/app/(shop)/components/Header/search-drawer";
import CartDrawer from "@/app/(shop)/components/Header/cart-drawer";
import DesktopNavigationMenu from "@/app/(shop)/components/Header/desktop-navigation-menu";

export default function Header() {
  return (
    <header className="bg-background sticky top-0 flex items-center gap-2 p-4.5 lg:px-6">
      <div className="hidden w-full md:block">
        <DesktopNavigationMenu />
      </div>

      <div className="w-full md:hidden">
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
