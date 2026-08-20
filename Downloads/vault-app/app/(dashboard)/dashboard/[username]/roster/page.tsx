import { notFound } from "next/navigation";
import { clubPlayers, getProfileByUsername } from "@/lib/mock-data";
import { VerifiedDot } from "@/components/shared/verified-badge";

export default async function DashboardRosterPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const profile = getProfileByUsername(username);
  if (!profile) notFound();

  const players = clubPlayers[username] ?? [];

  return (
    <div>
      <h1 className="text-xl font-black tracking-tight">Full Roster</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Every player registered across your active teams.
      </p>

      <div className="mt-4 divide-y divide-border rounded-lg border border-border bg-card">
        {players.map((player) => (
          <div
            key={player.id}
            className="flex items-center justify-between gap-3 p-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold">
                {player.name.charAt(0)}
              </span>
              <div>
                <div className="flex items-center gap-1 text-sm font-bold">
                  {player.name}
                  {player.verified && <VerifiedDot />}
                </div>
                <div className="text-xs text-muted-foreground">
                  {player.game} · {player.role}
                </div>
              </div>
            </div>
            <button className="rounded-md border border-border px-3.5 py-1.5 text-xs font-bold">
              Manage
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
