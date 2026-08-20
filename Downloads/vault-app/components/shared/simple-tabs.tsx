import { cn } from "@/lib/utils";

export function SimpleTabs<T extends string>({
  tabs,
  active,
  onChange,
}: {
  tabs: readonly T[];
  active: T;
  onChange: (tab: T) => void;
}) {
  return (
    <div className="flex overflow-x-auto border-b border-border">
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => onChange(tab)}
          className={cn(
            "shrink-0 border-b-2 px-4 py-2.5 text-sm font-bold whitespace-nowrap transition-colors",
            active === tab
              ? "border-foreground text-foreground"
              : "border-transparent text-muted-foreground hover:text-foreground"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
