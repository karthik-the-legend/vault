export interface DashboardStat {
  label: string;
  value: string;
  hint?: string;
}

export function DashboardStatGrid({ stats }: { stats: DashboardStat[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-lg border border-border bg-card p-4"
        >
          <div className="text-xs font-medium text-muted-foreground">
            {stat.label}
          </div>
          <div className="mt-1 text-2xl font-black">{stat.value}</div>
          {stat.hint && (
            <div className="mt-0.5 text-[11px] text-muted-foreground">
              {stat.hint}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
