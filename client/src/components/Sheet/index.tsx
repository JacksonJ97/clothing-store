import { X } from "lucide-react";
import { Dialog } from "@base-ui-components/react/dialog";
import { cn } from "@/utils/functions";

function Sheet({ ...props }: React.ComponentProps<typeof Dialog.Root>) {
  return <Dialog.Root data-slot="sheet" {...props} />;
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof Dialog.Trigger>) {
  return <Dialog.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({ ...props }: React.ComponentProps<typeof Dialog.Close>) {
  return <Dialog.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal({ ...props }: React.ComponentProps<typeof Dialog.Portal>) {
  return <Dialog.Portal data-slot="sheet-portal" {...props} />;
}

function SheetBackdrop({
  className,
  ...props
}: React.ComponentProps<typeof Dialog.Backdrop>) {
  return (
    <Dialog.Backdrop
      data-slot="sheet-backdrop"
      className={cn(
        "fixed inset-0 min-h-dvh bg-black/25 transition-colors duration-300 data-ending-style:bg-black/0 data-starting-style:bg-black/0",
        className,
      )}
      {...props}
    />
  );
}

function SheetContent({
  side = "right",
  children,
  className,
  ...props
}: React.ComponentProps<typeof Dialog.Popup> & {
  side?: "top" | "right" | "bottom" | "left";
}) {
  return (
    <SheetPortal>
      <SheetBackdrop />
      <Dialog.Popup
        data-slot="sheet-content"
        className={cn(
          "bg-background fixed transition-transform duration-300 ease-in-out",
          side === "right" &&
            "inset-y-0 right-0 h-full w-xl data-closed:translate-x-full data-ending-style:translate-x-full data-open:translate-x-0 data-starting-style:translate-x-full",
          side === "left" &&
            "inset-y-0 left-0 h-full w-xl data-closed:-translate-x-full data-ending-style:-translate-x-full data-open:translate-x-0 data-starting-style:-translate-x-full",
          side === "top" &&
            "inset-x-0 top-0 h-auto w-full data-closed:-translate-y-full data-ending-style:-translate-y-full data-open:translate-y-0 data-starting-style:-translate-y-full",
          side === "bottom" &&
            "inset-x-0 bottom-0 h-auto w-full data-closed:translate-y-full data-ending-style:translate-y-full data-open:translate-y-0 data-starting-style:translate-y-full",
          className,
        )}
        {...props}
      >
        {children}
        <Dialog.Close>
          <X className="size-4" />
          <span className="sr-only">Close</span>
        </Dialog.Close>
      </Dialog.Popup>
    </SheetPortal>
  );
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof Dialog.Title>) {
  return (
    <Dialog.Title
      data-slot="sheet-title"
      className={cn("font-semibold", className)}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof Dialog.Description>) {
  return (
    <Dialog.Description
      data-slot="sheet-description"
      className={cn("text-sm", className)}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetDescription,
};
