import { notFound } from "next/navigation";
import { Trophy } from "lucide-react";
import { getHubTournamentBySlug } from "@/lib/mock-data";
import { TournamentDetailShell } from "@/components/features/tournaments/tournament-detail-shell";
import { VerifiedDot, VerifiedPill } from "@/components/shared/verified-badge";
import { cn } from "@/lib/utils";

export default async function TournamentResultsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tournament = getHubTournamentBySlug(slug);
  if (!tournament) notFound();

  const ordered = [...tournament.podium].sort((a, b) => Number(a.place) - Number(b.place));

  return (
    <TournamentDetailShell tournament={tournament} activeTab="Results">
      {tournament.podium.length === 0 ? (
        <div className="rounded-lg border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
          Results have not been published for this tournament yet.
        </div>
      ) : (
        <>
          <div className="text-sm font-bold">WINNERS PODIUM</div>
          <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {ordered.map((entry) => (
              <div
                key={entry.place}
                className={cn(
                  "rounded-lg border p-4",
                  entry.highlighted ? "border-2 border-accent-blue" : "border-border"
                )}
              >
                <div className="flex items-center gap-1.5 text-[10px] font-semibold tracking-wide text-muted-foreground">
                  {entry.highlighted && <Trophy className="size-3 text-accent-blue" />}
                  <span className={entry.highlighted ? "text-accent-blue" : ""}>
                    {entry.placeLabel.toUpperCase()}
                  </span>
                </div>
                <div className="mt-1 flex items-center gap-1 text-base font-bold">
                  {entry.teamName}
                  {entry.verified && <VerifiedDot />}
                </div>
                <div className="mt-0.5 text-xs text-muted-foreground">{entry.prize}</div>
              </div>
            ))}
          </div>

          {tournament.mvp && (
            <div className="mt-8">
              <div className="text-sm font-bold">INDIVIDUAL AWARDS</div>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border bg-card p-4">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold">
                    {tournament.mvp.name.charAt(0)}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="rounded-md bg-accent-blue px-2 py-0.5 text-[10px] font-bold text-white">
                        TOURNAMENT MVP
                      </span>
                      <VerifiedPill />
                    </div>
                    <div className="mt-1 flex items-center gap-1 text-sm font-bold">
                      {tournament.mvp.name}
                      {tournament.mvp.verified && <VerifiedDot />}
                    </div>
                  </div>
                </div>
                <div className="flex gap-6 text-right">
                  <div>
                    <div className="text-[10px] font-semibold tracking-wide text-muted-foreground">
                      ELIMINATIONS
                    </div>
                    <div className="text-sm font-bold">{tournament.mvp.eliminations}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold tracking-wide text-muted-foreground">
                      AVG SURVIVAL
                    </div>
                    <div className="text-sm font-bold">{tournament.mvp.avgSurvival}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </TournamentDetailShell>
  );
}
