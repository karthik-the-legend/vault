import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { clubTeams, getProfileByUsername } from "@/lib/mock-data";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { VerifiedDot } from "@/components/shared/verified-badge";

export default async function TeamDetailPage({
  params,
}: {
  params: Promise<{ username: string; teamId: string }>;
}) {
  const { username, teamId } = await params;
  const profile = getProfileByUsername(username);
  const team = (clubTeams[username] ?? []).find((t) => t.id === teamId);

  if (!profile || !team) notFound();

  return (
    <div>
      <Breadcrumb
        items={[
          { label: "VAULT", href: "/discover" },
          { label: profile.displayName, href: `/vault/${username}` },
          { label: "Teams", href: `/vault/${username}` },
          { label: team.name },
        ]}
      />

      <div className="mt-4 flex items-start justify-between gap-4 rounded-lg border border-border bg-card p-5">
        <div>
          <div className="text-lg font-extrabold">{team.name}</div>
          <div className="text-sm text-muted-foreground">
            {team.description}
          </div>
        </div>
        {team.tierBadge && (
          <span className="shrink-0 rounded-md border border-border px-2.5 py-1 text-xs font-bold">
            {team.tierBadge}
          </span>
        )}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="text-sm font-bold">Active Roster</div>
          <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {team.roster.map((player) => (
              <div
                key={player.id}
                className="flex items-center justify-between gap-2 rounded-lg border border-border bg-card p-4"
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold">
                    {player.name.charAt(0)}
                  </span>
                  <div>
                    <div className="flex items-center gap-1 text-sm font-bold">
                      {player.name.toUpperCase()}
                      {player.verified && <VerifiedDot />}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {player.role}
                    </div>
                    <div className="mt-1 flex items-center gap-1 text-[10px] font-semibold text-blue-600">
                      VAULT Verified
                      <ExternalLink className="size-2.5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="text-xs font-bold tracking-wide text-muted-foreground">
              TEAM ACHIEVEMENTS
            </div>
            <div className="mt-3 space-y-3">
              {team.achievements.map((a) => (
                <div key={a.title} className="border-b border-border pb-3 last:border-0 last:pb-0">
                  <div className="text-sm font-bold">{a.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {a.result}
                  </div>
                </div>
              ))}
              {team.achievements.length === 0 && (
                <div className="text-xs text-muted-foreground">
                  No achievements recorded yet.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
