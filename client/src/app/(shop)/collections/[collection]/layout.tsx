import { SlidersHorizontal } from "lucide-react";

export default async function Layout({
  children,
}: LayoutProps<"/collections/[collection]">) {
  return (
    <main>
      <div className="border-border bg-background sticky top-17 flex items-center justify-between border-t border-b px-4.5 py-3 lg:px-6">
        <div className="w-full">Breadcrumb</div>
        <div>Subcategory</div>
        <div className="flex w-full justify-end">
          <SlidersHorizontal className="size-6" />
        </div>
      </div>
      <div className="min-h-screen p-4.5 lg:px-6">{children}</div>
    </main>
  );
}
