import Link from "next/link";
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
import { buildCollectionUrl } from "@/utils/functions";
import type { Collection } from "@/app/(shop)/components/Header";

export default function DesktopNavigationMenu({
  collections,
}: {
  collections: Collection[];
}) {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex items-center gap-4">
        {collections.map((collection) => (
          <NavigationMenuItem key={collection.handle}>
            <NavigationMenuTrigger>{collection.title}</NavigationMenuTrigger>
            <NavigationMenuContent className="flex gap-48">
              {collection.categories.map((category) => (
                <div key={category.handle}>
                  <h2 className="text-xs font-semibold tracking-wider uppercase">
                    {category.title}
                  </h2>

                  <ul>
                    {category.subcategories.map((subcategory) => (
                      <li key={subcategory.handle}>
                        <NavigationMenuLink
                          render={
                            <Link
                              href={buildCollectionUrl(
                                collection.handle,
                                category.handle,
                                subcategory.handle,
                              )}
                              className="block pt-3 text-sm hover:underline"
                            >
                              {subcategory.title}
                            </Link>
                          }
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>

      <NavigationMenuPositioner sideOffset={21} className="w-screen">
        <NavigationMenuPopup />
      </NavigationMenuPositioner>
    </NavigationMenu>
  );
}
