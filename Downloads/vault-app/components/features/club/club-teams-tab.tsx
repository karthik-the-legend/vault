import Link from "next/link";
import { ClubTeam } from "@/types";

export function ClubTeamsTab({
  username,
  teams,
}: {
  username: string;
  teams: ClubTeam[];
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {teams.map((team) => (
        <div key={team.id} className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-start justify-between gap-2">
            <div>
              <div className="text-sm font-bold">{team.name}</div>
              <div className="text-xs text-muted-foreground">
                {team.playersCount} Players
              </div>
            </div>
            {team.statusBadge && (
              <span className="shrink-0 rounded-md border border-border px-2 py-0.5 text-[10px] font-bold tracking-wide">
                {team.statusBadge}
              </span>
            )}
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
            <div>
              <div className="text-[10px] font-bold tracking-wide text-muted-foreground">
                CAPTAIN
              </div>
              <div className="text-sm font-medium">{team.captain}</div>
            </div>
            <Link
              href={`/vault/${username}/teams/${team.id}`}
              className="rounded-md bg-foreground px-3.5 py-1.5 text-xs font-bold text-background"
            >
              View Team
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
