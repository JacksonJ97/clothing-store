import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu";
import { cn } from "@/utils/functions";

function NavigationMenu(props: NavigationMenuPrimitive.Root.Props) {
  return (
    <NavigationMenuPrimitive.Root data-slot="navigation-menu" {...props} />
  );
}

function NavigationMenuList(props: NavigationMenuPrimitive.List.Props) {
  return (
    <NavigationMenuPrimitive.List data-slot="navigation-menu-list" {...props} />
  );
}

function NavigationMenuItem(props: NavigationMenuPrimitive.Item.Props) {
  return (
    <NavigationMenuPrimitive.Item data-slot="navigation-menu-item" {...props} />
  );
}

function NavigationMenuTrigger({
  children,
  className,
  ...props
}: NavigationMenuPrimitive.Trigger.Props) {
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
}: NavigationMenuPrimitive.Content.Props) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "px-4.5 py-8 transition-[opacity,translate] lg:px-6",
        "data-ending-style:opacity-0 data-starting-style:opacity-0",
        "data-starting-style:data-[activation-direction=left]:-translate-x-1/2",
        "data-ending-style:data-[activation-direction=left]:translate-x-1/2",
        "data-starting-style:data-[activation-direction=right]:translate-x-1/2",
        "data-ending-style:data-[activation-direction=right]:-translate-x-1/2",
        className,
      )}
      {...props}
    />
  );
}

function NavigationMenuPositioner({
  children,
  className,
  ...props
}: NavigationMenuPrimitive.Positioner.Props) {
  return (
    <NavigationMenuPrimitive.Portal data-slot="navigation-menu-portal">
      <NavigationMenuPrimitive.Positioner
        data-slot="navigation-menu-positioner"
        sideOffset={12}
        positionMethod="fixed"
        collisionPadding={0}
        className={cn(
          "h-(--positioner-height) max-h-(--available-height) w-(--positioner-width) max-w-(--available-width) transition-[top,left,right,bottom] duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] before:absolute before:content-[''] data-instant:transition-none",
          "data-[side=top]:before:right-0 data-[side=top]:before:-bottom-2.5 data-[side=top]:before:left-0 data-[side=top]:before:h-2.5",
          "data-[side=right]:before:top-0 data-[side=right]:before:bottom-0 data-[side=right]:before:-left-2.5 data-[side=right]:before:w-2.5",
          "data-[side=bottom]:before:-top-2.5 data-[side=bottom]:before:right-0 data-[side=bottom]:before:left-0 data-[side=bottom]:before:h-2.5",
          "data-[side=left]:before:top-0 data-[side=left]:before:-right-2.5 data-[side=left]:before:bottom-0 data-[side=left]:before:w-2.5",
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
  children,
  className,
  ...props
}: NavigationMenuPrimitive.Popup.Props) {
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

function NavigationMenuLink(props: NavigationMenuPrimitive.Link.Props) {
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
