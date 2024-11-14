import { cn } from "@/lib/utils";
import { readComponentSource } from "./read-component-source";
import { CopyButton } from "@/components/copy-button";

export default async function DemoComponent({
  directory,
  componentName,
  className,
}: {
  directory: string;
  componentName: string;
  className?: string;
}) {
  const Component = (await import(`@/components/${directory}/${componentName}`)).default;
  const source = await readComponentSource(directory, componentName);

  return (
    <div className={cn("relative min-h-[200px] w-full rounded-md border", className)}>
      <CopyButton className="absolute right-2 top-2 transition-opacity" value={source || ""} />
      <Component />
    </div>
  );
}
