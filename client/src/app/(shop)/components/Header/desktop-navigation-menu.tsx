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

const content = {
  women: [
    {
      category: "Outerwear",
      links: [
        { label: "Shop All", href: "" },
        { label: "Jackets", href: "" },
        { label: "Coats", href: "" },
      ],
    },
    {
      category: "Tops",
      links: [
        { label: "Shop All", href: "" },
        { label: "T-Shirts", href: "" },
        { label: "Hoodies", href: "" },
        { label: "Sweatshirts", href: "" },
        { label: "Shirts & Blouses", href: "" },
      ],
    },
    {
      category: "Bottoms",
      links: [
        { label: "Shop All", href: "" },
        { label: "Jeans", href: "" },
        { label: "Pants", href: "" },
        { label: "Shorts", href: "" },
        { label: "Skirts", href: "" },
      ],
    },
  ],
  men: [
    {
      category: "Outerwear",
      links: [
        { label: "Shop All", href: "" },
        { label: "Jackets", href: "" },
        { label: "Coats", href: "" },
      ],
    },
    {
      category: "Tops",
      links: [
        { label: "Shop All", href: "" },
        { label: "T-Shirts", href: "" },
        { label: "Hoodies", href: "" },
        { label: "Sweatshirts", href: "" },
        { label: "Shirts", href: "" },
      ],
    },
    {
      category: "Bottoms",
      links: [
        { label: "Shop All", href: "" },
        { label: "Jeans", href: "" },
        { label: "Shorts", href: "" },
        { label: "Pants", href: "" },
      ],
    },
  ],
};

export default function DesktopNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex items-center gap-4">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Women</NavigationMenuTrigger>
          <NavigationMenuContent className="flex gap-48">
            {content.women.map((section) => (
              <div key={section.category}>
                <h2 className="text-xs font-semibold tracking-wider uppercase">
                  {section.category}
                </h2>

                <ul>
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <NavigationMenuLink
                        render={
                          <Link
                            href={link.href}
                            className="block pt-3 text-sm hover:underline"
                          >
                            {link.label}
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

        <NavigationMenuItem>
          <NavigationMenuTrigger>Men</NavigationMenuTrigger>
          <NavigationMenuContent className="flex gap-48">
            {content.men.map((section) => (
              <div key={section.category}>
                <h2 className="text-xs font-semibold tracking-wider uppercase">
                  {section.category}
                </h2>

                <ul>
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <NavigationMenuLink
                        render={
                          <Link
                            href={link.href}
                            className="block pt-3 text-sm hover:underline"
                          >
                            {link.label}
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
      </NavigationMenuList>

      <NavigationMenuPositioner sideOffset={21} className="w-screen">
        <NavigationMenuPopup />
      </NavigationMenuPositioner>
    </NavigationMenu>
  );
}
