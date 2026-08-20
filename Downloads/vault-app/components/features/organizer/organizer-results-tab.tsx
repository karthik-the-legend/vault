import { Award, BarChart3 } from "lucide-react";
import { TournamentResult } from "@/types";
import { EmptyState } from "@/components/shared/empty-state";

export function OrganizerResultsTab({
  results,
}: {
  results: TournamentResult[];
}) {
  if (results.length === 0) {
    return (
      <EmptyState
        icon={BarChart3}
        title="No tournament results yet"
        description="Standings, brackets, and MVP player keys will appear here once matches are finished."
        ctaLabel="View schedule"
      />
    );
  }

  return (
    <div>
      <div className="text-sm font-bold">
        Verified Tournament Podiums ({results.length})
      </div>
      <div className="mt-3 space-y-3">
        {results.map((result) => (
          <div
            key={result.tournamentId}
            className="rounded-lg border border-border bg-card p-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <div className="text-[10px] font-semibold tracking-wide text-muted-foreground">
                  TOURNAMENT CHAMPIONSHIP
                </div>
                <div className="text-sm font-bold">
                  {result.tournamentName}
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-muted-foreground">
                  {result.participants.toLocaleString()} Registered Participants
                </span>
                {result.verified && (
                  <span className="flex items-center gap-1 rounded-full border border-blue-600 px-2 py-0.5 font-semibold text-blue-600">
                    ✓ VERIFIED RESULTS
                  </span>
                )}
              </div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 rounded-md bg-amber-50 px-3 py-2">
                <Award className="size-4 text-amber-600" />
                <div>
                  <div className="text-[10px] font-semibold tracking-wide text-muted-foreground">
                    CHAMPION
                  </div>
                  <div className="text-sm font-bold">{result.champion}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-md bg-secondary px-3 py-2">
                <Award className="size-4 text-muted-foreground" />
                <div>
                  <div className="text-[10px] font-semibold tracking-wide text-muted-foreground">
                    RUNNER-UP
                  </div>
                  <div className="text-sm font-bold">{result.runnerUp}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
