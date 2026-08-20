import Link from "next/link";
import { ClubPlayer } from "@/types";
import { VerifiedDot } from "@/components/shared/verified-badge";

export function ClubPlayersTab({ players }: { players: ClubPlayer[] }) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-muted-foreground">
        FILTER BY
        <select className="rounded-md border border-border bg-background px-2.5 py-1.5 text-xs">
          <option>All Games</option>
        </select>
        <select className="rounded-md border border-border bg-background px-2.5 py-1.5 text-xs">
          <option>All Roles</option>
        </select>
        <select className="rounded-md border border-border bg-background px-2.5 py-1.5 text-xs">
          <option>Active</option>
        </select>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {players.map((player) => (
          <div key={player.id} className="rounded-lg border border-border bg-card p-4">
            <div className="flex items-center gap-2">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold">
                {player.name.charAt(0)}
              </span>
              <div>
                <div className="flex items-center gap-1 text-sm font-bold">
                  {player.name.toUpperCase()}
                  {player.verified && <VerifiedDot />}
                </div>
                <div className="text-xs text-muted-foreground">
                  {player.game} · {player.role}
                </div>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
              <span className="text-[10px] font-semibold tracking-wide text-muted-foreground">
                VAULT Roster
              </span>
              <Link
                href={`/vault/${player.username}`}
                className={
                  player.isSelf
                    ? "rounded-md bg-foreground px-3 py-1 text-xs font-bold text-background"
                    : "rounded-md border border-border px-3 py-1 text-xs font-bold"
                }
              >
                {player.isSelf ? "View VAULT" : "Profile"}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
