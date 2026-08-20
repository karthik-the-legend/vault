import { MatchResult } from "@/types";

export function CompetitiveTab({ matches }: { matches: MatchResult[] }) {
  if (matches.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
        No competitive history yet.
      </div>
    );
  }

  return (
    <div>
      <div className="text-xs font-bold tracking-wide text-muted-foreground">
        MATCH HISTORY
      </div>
      <div className="mt-3 divide-y divide-border rounded-lg border border-border bg-card">
        {matches.map((match) => (
          <div
            key={match.id}
            className="flex items-center justify-between gap-3 p-4"
          >
            <div>
              <div className="text-sm font-bold">{match.event}</div>
              <div className="text-xs text-muted-foreground">
                {match.game} · {match.date}
              </div>
            </div>
            <span className="shrink-0 rounded-md bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground">
              {match.placement}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
