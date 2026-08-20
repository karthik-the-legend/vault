import { cn } from "@/lib/utils";
import { StatEntry } from "@/types";

export function StatBlock({
  stat,
  className,
}: {
  stat: StatEntry;
  className?: string;
}) {
  return (
    <div className={cn("text-center sm:text-left", className)}>
      <div className="text-xl font-extrabold sm:text-2xl">{stat.value}</div>
      <div className="text-[11px] font-medium tracking-wide text-muted-foreground">
        {stat.label}
      </div>
    </div>
  );
}

export function StatCardRow({ stats }: { stats: StatEntry[] }) {
  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-lg border border-border bg-card px-3 py-4 text-center sm:px-4"
        >
          <div className="text-xl font-extrabold sm:text-2xl">{stat.value}</div>
          <div className="mt-0.5 text-[11px] font-medium tracking-wide text-muted-foreground">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
