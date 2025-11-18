import { Tabs as TabsPrimitive } from "@base-ui-components/react/tabs";
import { cn } from "@/utils/functions";

function Tabs({ className, ...props }: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-4", className)}
      {...props}
    />
  );
}

function TabsList({ className, ...props }: TabsPrimitive.List.Props) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn("flex", className)}
      {...props}
    />
  );
}

function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        "border-border data-active:border-foreground w-full cursor-pointer border-b p-2 font-medium uppercase",
        className,
      )}
      {...props}
    />
  );
}

function TabsPanel(props: TabsPrimitive.Panel.Props) {
  return <TabsPrimitive.Panel data-slot="tabs-panel" {...props} />;
}

export { Tabs, TabsList, TabsTrigger, TabsPanel };
