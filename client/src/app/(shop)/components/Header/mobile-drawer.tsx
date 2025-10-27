import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/Sheet";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/Tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/Accordion";

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

export default function MobileDrawer() {
  return (
    <Sheet>
      <SheetTrigger className="flex size-8 cursor-pointer items-center justify-center">
        <Menu strokeWidth={1.25} />
      </SheetTrigger>
      <SheetContent side="left" className="w-full">
        <div className="mb-6 flex justify-center">
          <Link href="/" className="text-2xl font-bold tracking-widest">
            SORA
          </Link>
        </div>

        <Tabs>
          <TabsList>
            <TabsTrigger>Women</TabsTrigger>
            <TabsTrigger>Men</TabsTrigger>
          </TabsList>

          <TabsContent>
            <Accordion>
              {content.women.map((section) => (
                <AccordionItem key={section.category}>
                  <AccordionTrigger>{section.category}</AccordionTrigger>
                  <AccordionContent className="flex flex-col">
                    {section.links.map((link) => (
                      <Link
                        href={link.href}
                        className="ml-4 py-2 text-sm hover:underline"
                        key={link.label}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>

          <TabsContent>
            <Accordion>
              {content.men.map((section) => (
                <AccordionItem key={section.category}>
                  <AccordionTrigger>{section.category}</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-2">
                    {section.links.map((link) => (
                      <Link
                        href={link.href}
                        className="ml-4 text-sm"
                        key={link.label}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
