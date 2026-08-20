import Link from "next/link";
import { League } from "@/types";
import { EmptyState } from "@/components/shared/empty-state";
import { Layers } from "lucide-react";

export function OrganizerLeaguesTab({
  username,
  leagues,
}: {
  username: string;
  leagues: League[];
}) {
  if (leagues.length === 0) {
    return (
      <EmptyState
        icon={Layers}
        title="No leagues created yet"
        description="Group multiple season brackets into a singular tier-ranked esports league."
        ctaLabel="Create your first league"
      />
    );
  }

  return (
    <div>
      <div className="text-sm font-bold">
        Active Esports Leagues ({leagues.length})
      </div>
      <div className="mt-3 space-y-3">
        {leagues.map((league) => (
          <div
            key={league.id}
            className="flex flex-col gap-4 rounded-lg border border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <div className="flex flex-wrap items-center gap-2">
                {league.badges.map((b) => (
                  <span
                    key={b}
                    className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-bold tracking-wide text-secondary-foreground"
                  >
                    {b}
                  </span>
                ))}
              </div>
              <div className="mt-1 text-sm font-bold">{league.name}</div>
              <p className="mt-1 max-w-lg text-xs text-muted-foreground">
                {league.description}
              </p>
              <div className="mt-2 flex flex-wrap gap-4 text-xs">
                <span>
                  <span className="font-bold">{league.prizePool}</span>{" "}
                  <span className="text-muted-foreground">Prize Pool</span>
                </span>
                <span>
                  <span className="font-bold">{league.teamsCount}</span>{" "}
                  <span className="text-muted-foreground">
                    {league.teamsCount === 1 ? "Team" : "Registered"}
                  </span>
                </span>
                <span>
                  <span className="font-bold">
                    {league.verifiedStats ? "Yes" : "No"}
                  </span>{" "}
                  <span className="text-muted-foreground">Verified Stats</span>
                </span>
              </div>
            </div>
            <Link
              href={`/vault/${username}/leagues/${league.slug}`}
              className="shrink-0 rounded-md bg-foreground px-4 py-2 text-xs font-bold text-background"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
