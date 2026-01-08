import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetPopup } from "@/components/Sheet";
import { Tabs, TabsList, TabsTrigger, TabsPanel } from "@/components/Tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionPanel,
} from "@/components/Accordion";
import { buildCollectionUrl } from "@/utils/functions";
import type { Collection } from "@/app/(shop)/components/Header";

// TODO: Close drawer on link click
// TODO: Test out mobile UX on real device (make sure focus and touch interactions are intuitive)
// TODO: Make the drawer scrollable if content overflows viewport height

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
      <SheetPopup side="left" className="w-full">
        <div className="mb-8 flex justify-center">
          <Link href="/" className="text-2xl font-bold tracking-widest">
            SORA
          </Link>
        </div>

        <Tabs>
          <TabsList>
            {collections.map((collection) => (
              <TabsTrigger value={collection.handle} key={collection.handle}>
                {collection.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {collections.map((collection) => (
            <TabsPanel value={collection.handle} key={collection.handle}>
              <Accordion multiple>
                {collection.categories.map((category) => (
                  <AccordionItem key={category.handle}>
                    <AccordionTrigger className="font-medium">
                      {category.title}
                    </AccordionTrigger>
                    <AccordionPanel>
                      <div className="flex flex-col py-0.5 pr-0.5 pl-4">
                        {category.subcategories.map((subcategory) => (
                          <Link
                            href={buildCollectionUrl(
                              collection.handle,
                              category.handle,
                              subcategory.handle,
                            )}
                            className="py-2 text-sm hover:underline"
                            key={subcategory.handle}
                          >
                            {subcategory.title}
                          </Link>
                        ))}
                      </div>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsPanel>
          ))}
        </Tabs>
      </SheetPopup>
    </Sheet>
  );
}
