import Link from "next/link";
import { UserRound } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuPositioner,
  NavigationMenuPopup,
} from "@/components/NavigationMenu";
import MobileDrawer from "@/app/(shop)/components/Header/mobile-drawer";
import SearchDrawer from "@/app/(shop)/components/Header/search-drawer";
import CartDrawer from "@/app/(shop)/components/Header/cart-drawer";

export default function Header() {
  return (
    <header className="bg-background sticky top-0 flex items-center gap-2 p-4.5 lg:px-6">
      <NavigationMenu className="hidden w-full md:block">
        <NavigationMenuList className="flex items-center gap-4">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Women</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink
                render={<Link href="/collections/men">Shop All</Link>}
              />
              <NavigationMenuLink
                render={<Link href="/collections/men">Outerwear</Link>}
              />
              <NavigationMenuLink
                render={<Link href="/collections/men">Tops</Link>}
              />
              <NavigationMenuLink
                render={<Link href="/collections/men">Bottoms</Link>}
              />
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Men</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink
                render={<Link href="/collections/women">Shop All</Link>}
              />
              <NavigationMenuLink
                render={<Link href="/collections/women">Outerwear</Link>}
              />
              <NavigationMenuLink
                render={<Link href="/collections/women">Tops</Link>}
              />
              <NavigationMenuLink
                render={<Link href="/collections/women">Bottoms</Link>}
              />
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuPositioner sideOffset={21} className="w-screen">
          <NavigationMenuPopup />
        </NavigationMenuPositioner>
      </NavigationMenu>

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
