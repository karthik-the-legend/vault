import { notFound } from "next/navigation";
import { getHubTournamentBySlug } from "@/lib/mock-data";
import { TournamentDetailShell } from "@/components/features/tournaments/tournament-detail-shell";
import { VerifiedDot } from "@/components/shared/verified-badge";
import { cn } from "@/lib/utils";

export default async function TournamentParticipantsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tournament = getHubTournamentBySlug(slug);
  if (!tournament) notFound();

  return (
    <TournamentDetailShell tournament={tournament} activeTab="Participants">
      <div className="flex items-center justify-between">
        <div className="text-sm font-bold">REGISTERED SQUADS</div>
        <div className="text-sm text-muted-foreground">
          {tournament.squadsRegistered} Teams Registered
        </div>
      </div>

      <div className="mt-3 space-y-2">
        {tournament.squads.map((squad) => (
          <div
            key={squad.name}
            className="flex items-center justify-between gap-3 rounded-lg border border-border bg-card px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold">
                {squad.name.charAt(0)}
              </span>
              <div>
                <div className="flex items-center gap-1 text-sm font-bold">
                  {squad.name}
                  {squad.verified && <VerifiedDot />}
                </div>
                <div className="text-xs text-muted-foreground">{squad.playerCount}</div>
              </div>
            </div>
            {squad.statusTag && (
              <span
                className={cn(
                  "flex items-center gap-1 text-xs font-semibold",
                  squad.verified ? "text-blue-600" : "text-muted-foreground"
                )}
              >
                <span className="size-1.5 rounded-full bg-current" />
                {squad.statusTag}
              </span>
            )}
          </div>
        ))}
        {tournament.squads.length === 0 && (
          <div className="rounded-lg border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
            No squads have registered yet.
          </div>
        )}
      </div>
    </TournamentDetailShell>
  );
}
