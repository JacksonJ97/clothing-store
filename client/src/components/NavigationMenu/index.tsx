import * as React from "react";
import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui-components/react/navigation-menu";
import { cn } from "@/utils/functions";

function NavigationMenu({
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root>) {
  return (
    <NavigationMenuPrimitive.Root data-slot="navigation-menu" {...props}>
      {children}
    </NavigationMenuPrimitive.Root>
  );
}

function NavigationMenuList({
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List data-slot="navigation-menu-list" {...props} />
  );
}

function NavigationMenuItem({
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item data-slot="navigation-menu-item" {...props} />
  );
}

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(
        "cursor-pointer font-semibold tracking-wider uppercase hover:border-b",
        className,
      )}
      {...props}
    >
      {children}
    </NavigationMenuPrimitive.Trigger>
  );
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "px-4.5 py-8 transition-[opacity,translate] lg:px-6",
        "data-ending-style:opacity-0 data-starting-style:opacity-0",
        "data-starting-style:data-[activation-direction=left]:translate-x-[-50%]",
        "data-ending-style:data-[activation-direction=left]:translate-x-[50%]",
        "data-starting-style:data-[activation-direction=right]:translate-x-[50%]",
        "data-ending-style:data-[activation-direction=right]:translate-x-[-50%]",
        className,
      )}
      {...props}
    />
  );
}

function NavigationMenuPositioner({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Positioner>) {
  return (
    <NavigationMenuPrimitive.Portal data-slot="navigation-menu-portal">
      <NavigationMenuPrimitive.Positioner
        data-slot="navigation-menu-positioner"
        sideOffset={12}
        positionMethod="fixed"
        collisionPadding={0}
        className={cn(
          "h-(--positioner-height) max-h-(--available-height) w-(--positioner-width) max-w-(--available-width) transition-[top,left,right,bottom] duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] before:absolute before:content-[''] data-instant:transition-none",
          "data-[side=top]:before:right-0 data-[side=top]:before:bottom-[-10px] data-[side=top]:before:left-0 data-[side=top]:before:h-2.5",
          "data-[side=right]:before:top-0 data-[side=right]:before:bottom-0 data-[side=right]:before:left-[-10px] data-[side=right]:before:w-2.5",
          "data-[side=bottom]:before:top-[-10px] data-[side=bottom]:before:right-0 data-[side=bottom]:before:left-0 data-[side=bottom]:before:h-2.5",
          "data-[side=left]:before:top-0 data-[side=left]:before:right-[-10px] data-[side=left]:before:bottom-0 data-[side=left]:before:w-2.5",
          className,
        )}
        {...props}
      >
        {children}
      </NavigationMenuPrimitive.Positioner>
    </NavigationMenuPrimitive.Portal>
  );
}

function NavigationMenuPopup({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Popup>) {
  return (
    <NavigationMenuPrimitive.Popup
      data-slot="navigation-menu-popup"
      className={cn(
        "bg-background border-border relative h-(--popup-height) w-(--popup-width) border-t border-b",
        className,
      )}
      {...props}
    >
      {children}
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className="relative h-full w-full overflow-hidden"
      />
    </NavigationMenuPrimitive.Popup>
  );
}

function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link data-slot="navigation-menu-link" {...props} />
  );
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuPositioner,
  NavigationMenuPopup,
};
