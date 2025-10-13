import { Input as BaseInput } from "@base-ui-components/react/input";
import { cn } from "@/utils/functions";

export default function Input({
  className,
  ...props
}: React.ComponentProps<typeof BaseInput>) {
  return (
    <BaseInput
      className={cn(
        "h-10 w-full max-w-64 rounded-sm border border-gray-200 pl-3.5 text-base text-gray-900 focus:outline-2 focus:-outline-offset-1 focus:outline-blue-800",
        className,
      )}
      {...props}
    />
  );
}
