import { X } from "lucide-react";
import { Dialog as SheetPrimitive } from "@base-ui-components/react/dialog";
import { cn } from "@/utils/functions";

function Sheet(props: SheetPrimitive.Root.Props) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

function SheetTrigger(props: SheetPrimitive.Trigger.Props) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose(props: SheetPrimitive.Close.Props) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal(props: SheetPrimitive.Portal.Props) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetBackdrop({ className, ...props }: SheetPrimitive.Backdrop.Props) {
  return (
    <SheetPrimitive.Backdrop
      data-slot="sheet-backdrop"
      className={cn(
        "fixed inset-0 bg-black/25 transition-colors duration-300 data-ending-style:bg-black/0 data-starting-style:bg-black/0",
        className,
      )}
      {...props}
    />
  );
}

function SheetPopup({
  side = "right",
  children,
  className,
  ...props
}: SheetPrimitive.Popup.Props & {
  side?: "top" | "right" | "bottom" | "left";
}) {
  return (
    <SheetPortal>
      <SheetBackdrop />
      <SheetPrimitive.Popup
        data-slot="sheet-popup"
        className={cn(
          "bg-background fixed px-4 py-6 transition-transform duration-300 ease-in-out",
          side === "right" &&
            "inset-y-0 right-0 h-full w-xl data-ending-style:translate-x-full data-starting-style:translate-x-full",
          side === "left" &&
            "inset-y-0 left-0 h-full w-xl data-ending-style:-translate-x-full data-starting-style:-translate-x-full",
          side === "top" &&
            "inset-x-0 top-0 h-auto w-full data-ending-style:-translate-y-full data-starting-style:-translate-y-full",
          side === "bottom" &&
            "inset-x-0 bottom-0 h-auto w-full data-ending-style:translate-y-full data-starting-style:translate-y-full",
          className,
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className="absolute top-4 right-2 flex size-8 cursor-pointer items-center justify-center">
          <X className="size-6" strokeWidth={1.25} />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Popup>
    </SheetPortal>
  );
}

function SheetTitle({ className, ...props }: SheetPrimitive.Title.Props) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("font-semibold", className)}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: SheetPrimitive.Description.Props) {
  return (
    <SheetPrimitive.Description
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
  SheetPopup,
  SheetTitle,
  SheetDescription,
};
