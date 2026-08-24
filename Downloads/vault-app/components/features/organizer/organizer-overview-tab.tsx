import Link from "next/link";
import { League, TournamentResult } from "@/types";
import { EmptyState } from "@/components/shared/empty-state";
import { Trophy2Placeholder } from "@/components/features/organizer/trophy-placeholder";
import { Trophy } from "lucide-react";
import { VerifiedPill } from "@/components/shared/verified-badge";

export function OrganizerOverviewTab({
  username,
  featuredLeague,
  recentResult,
}: {
  username: string;
  featuredLeague?: League;
  recentResult?: TournamentResult;
}) {
  if (!featuredLeague) {
    return (
      <EmptyState
        icon={Trophy}
        title="No leagues created yet"
        description="Group multiple season brackets into a singular tier-ranked esports league."
        ctaLabel="Create your first league"
      />
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <div className="text-xs font-bold tracking-wide text-muted-foreground">
          FEATURED ACTIVE LEAGUE
        </div>
        <div className="mt-3 overflow-hidden rounded-lg border border-border bg-card">
          <Trophy2Placeholder />
          <div className="p-5">
            <div className="flex flex-wrap items-center gap-2">
              {featuredLeague.badges.map((b) => (
                <span
                  key={b}
                  className="rounded-md bg-accent-blue px-2 py-0.5 text-[10px] font-bold tracking-wide text-white"
                >
                  {b}
                </span>
              ))}
              <span className="text-[11px] text-muted-foreground">
                Established {featuredLeague.establishedYear}
              </span>
            </div>
            <div className="mt-2 text-lg font-extrabold">
              {featuredLeague.name}
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              {featuredLeague.description}
            </p>
            <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
              <div className="flex gap-6">
                <div>
                  <div className="text-[10px] font-semibold tracking-wide text-muted-foreground">
                    PRIZE POOL
                  </div>
                  <div className="text-sm font-bold">
                    {featuredLeague.prizePool}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-semibold tracking-wide text-muted-foreground">
                    TEAMS
                  </div>
                  <div className="text-sm font-bold">
                    {featuredLeague.teamsCount} Registered
                  </div>
                </div>
              </div>
              <Link
                href={`/vault/${username}/leagues/${featuredLeague.slug}`}
                className="shrink-0 rounded-md bg-foreground px-4 py-2 text-xs font-bold text-background"
              >
                View League
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {recentResult && (
          <div>
            <div className="text-xs font-bold tracking-wide text-muted-foreground">
              RECENT OFFICIAL RESULT
            </div>
            <div className="mt-3 rounded-lg border border-border bg-card p-4">
              <div className="flex items-center justify-between text-[10px] font-semibold tracking-wide text-muted-foreground">
                COMPLETED SERIES
                {recentResult.verified && <VerifiedPill />}
              </div>
              <div className="mt-1 text-sm font-bold">
                {recentResult.tournamentName}
              </div>
              <div className="mt-3 space-y-2">
                <div className="flex items-center justify-between rounded-md bg-secondary px-3 py-2 text-sm">
                  <span className="font-semibold">1ST</span>
                  <span>{recentResult.champion}</span>
                </div>
                <div className="flex items-center justify-between rounded-md bg-secondary/60 px-3 py-2 text-sm">
                  <span className="font-semibold">2ND</span>
                  <span>{recentResult.runnerUp}</span>
                </div>
              </div>
              <div className="mt-3 text-[11px] text-muted-foreground">
                {recentResult.participants.toLocaleString()} unique players
                tracked via VAULT Anti-Cheat.
              </div>
            </div>
          </div>
        )}

        <div className="rounded-lg border border-border bg-card p-4">
          <div className="text-sm font-bold">Host Integrity</div>
          <p className="mt-1 text-xs text-muted-foreground">
            All tournaments under this organizer use VAULT Verified ID and
            match integrity protocols. Brackets automatically sync with
            global player profiles.
          </p>
        </div>
      </div>
    </div>
  );
}
