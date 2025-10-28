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
import { buildCollectionUrl } from "@/utils/functions";
import type { Collection } from "@/app/(shop)/components/Header";

export default function MobileDrawer({
  collections,
}: {
  collections: Collection[];
}) {
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
            {collections.map((collection) => (
              <TabsTrigger key={collection.handle}>
                {collection.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {collections.map((collection) => (
            <TabsContent key={collection.handle}>
              <Accordion>
                {collection.categories.map((category) => (
                  <AccordionItem key={category.handle}>
                    <AccordionTrigger className="font-medium">
                      {category.title}
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col">
                      {category.subcategories.map((subcategory) => (
                        <Link
                          href={buildCollectionUrl(
                            collection.handle,
                            category.handle,
                            subcategory.handle,
                          )}
                          className="ml-4 py-2 text-sm hover:underline"
                          key={subcategory.handle}
                        >
                          {subcategory.title}
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          ))}
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
