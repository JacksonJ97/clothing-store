import Link from "next/link";
import { UserRound } from "lucide-react";
import MobileDrawer from "@/app/(shop)/components/Header/mobile-drawer";
import SearchDrawer from "@/app/(shop)/components/Header/search-drawer";
import CartDrawer from "@/app/(shop)/components/Header/cart-drawer";
import DesktopNavigationMenu from "@/app/(shop)/components/Header/desktop-navigation-menu";

type Subcategory = {
  title: string;
  handle: string;
};

type Category = {
  title: string;
  handle: string;
  subcategories: Subcategory[];
};

export type Collection = {
  title: string;
  handle: string;
  categories: Category[];
};

const collections: Collection[] = [
  {
    title: "Womens",
    handle: "womens",
    categories: [
      {
        title: "Outerwear",
        handle: "outerwear",
        subcategories: [
          { title: "Shop All", handle: "all" },
          { title: "Jackets", handle: "jackets" },
          { title: "Coats", handle: "coats" },
        ],
      },
      {
        title: "Tops",
        handle: "tops",
        subcategories: [
          { title: "Shop All", handle: "all" },
          { title: "T-Shirts", handle: "tees" },
          { title: "Hoodies", handle: "hoodies" },
          { title: "Sweatshirts", handle: "sweatshirts" },
          { title: "Shirts & Blouses", handle: "shirts-and-blouses" },
        ],
      },
      {
        title: "Bottoms",
        handle: "bottoms",
        subcategories: [
          { title: "Shop All", handle: "all" },
          { title: "Jeans", handle: "jeans" },
          { title: "Pants", handle: "pants" },
          { title: "Shorts", handle: "shorts" },
          { title: "Skirts", handle: "skirts" },
        ],
      },
    ],
  },
  {
    title: "Mens",
    handle: "mens",
    categories: [
      {
        title: "Outerwear",
        handle: "outerwear",
        subcategories: [
          { title: "Shop All", handle: "all" },
          { title: "Jackets", handle: "jackets" },
          { title: "Coats", handle: "coats" },
        ],
      },
      {
        title: "Tops",
        handle: "tops",
        subcategories: [
          { title: "Shop All", handle: "all" },
          { title: "T-Shirts", handle: "tees" },
          { title: "Hoodies", handle: "hoodies" },
          { title: "Sweatshirts", handle: "sweatshirts" },
          { title: "Shirts", handle: "shirts" },
        ],
      },
      {
        title: "Bottoms",
        handle: "bottoms",
        subcategories: [
          { title: "Shop All", handle: "all" },
          { title: "Jeans", handle: "jeans" },
          { title: "Shorts", handle: "shorts" },
          { title: "Pants", handle: "pants" },
        ],
      },
    ],
  },
];

export default function Header() {
  return (
    <header className="bg-background sticky top-0 flex items-center gap-2 p-4.5 lg:px-6">
      <div className="hidden w-full md:block">
        <DesktopNavigationMenu collections={collections} />
      </div>

      <div className="w-full md:hidden">
        <MobileDrawer collections={collections} />
      </div>

      <Link href="/" className="text-2xl font-bold tracking-widest">
        SORA
      </Link>

      <div className="flex w-full items-center justify-end gap-2">
        <SearchDrawer />
        <Link href="/auth" className="flex size-8 items-center justify-center">
          <UserRound strokeWidth={1.25} />
        </Link>
        <CartDrawer />
      </div>
    </header>
  );
}
