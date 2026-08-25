import Link from "next/link";
import { HubTournament } from "@/types";
import { VerifiedDot } from "@/components/shared/verified-badge";
import { TournamentStatusBadge } from "@/components/features/tournaments/tournament-status-badge";

export function HubTournamentCard({ tournament }: { tournament: HubTournament }) {
  const isClosed =
    tournament.status === "REGISTRATION_CLOSED" || tournament.status === "COMPLETED";

  return (
    <div className="flex h-full flex-col rounded-lg border border-border bg-card p-5">
      <div className="flex flex-col items-start gap-2 text-[11px] font-semibold tracking-wide text-muted-foreground">
        <span>{tournament.game}</span>
        <TournamentStatusBadge status={tournament.status} />
      </div>
      <div className="mt-3 text-lg font-black tracking-tight">
        {tournament.title}
      </div>

      <div className="mt-auto pt-6">
        <div className="flex flex-col items-start gap-3">
          <div>
            <div className="text-[10px] font-semibold tracking-wide text-muted-foreground">
              ORGANIZER
            </div>
            <div className="flex items-center gap-1 text-sm font-bold">
              {tournament.organizerName}
              {tournament.organizerVerified && <VerifiedDot />}
            </div>
          </div>
          <div>
            <div className="text-[10px] font-semibold tracking-wide text-muted-foreground">
              PRIZE POOL
            </div>
            <div className="text-sm font-bold">{tournament.prizePool}</div>
          </div>
        </div>

        <Link
          href={`/tournaments/${tournament.slug}`}
          className="mt-4 flex h-10 w-full items-center justify-center rounded-md bg-secondary text-xs font-bold tracking-wide text-secondary-foreground"
        >
          {isClosed ? "VIEW RESULTS" : "VIEW TOURNAMENT"}
        </Link>
      </div>
    </div>
  );
}
