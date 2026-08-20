import Link from "next/link";
import { HubTournament } from "@/types";
import { VerifiedDot } from "@/components/shared/verified-badge";

export function HubTournamentListRow({ tournament }: { tournament: HubTournament }) {
  return (
    <Link
      href={`/tournaments/${tournament.slug}`}
      className="flex items-center justify-between gap-3 rounded-lg border border-border bg-card px-5 py-4"
    >
      <div>
        <div className="text-sm font-bold">{tournament.title}</div>
        <div className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
          {tournament.organizerName}
          {tournament.organizerVerified && <VerifiedDot />}
        </div>
      </div>
      <div className="text-sm font-bold">{tournament.prizePool}</div>
    </Link>
  );
}
