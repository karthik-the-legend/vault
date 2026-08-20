import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { getProfileByUsername, leagues, tournaments } from "@/lib/mock-data";
import { Breadcrumb } from "@/components/shared/breadcrumb";

const STATUS_LABEL: Record<string, string> = {
  REGISTRATION_OPEN: "REGISTRATION OPEN",
  UPCOMING: "UPCOMING",
  COMPLETED: "COMPLETED",
  DRAFT: "DRAFT",
};

export default async function LeagueDetailPage({
  params,
}: {
  params: Promise<{ username: string; leagueId: string }>;
}) {
  const { username, leagueId } = await params;
  const profile = getProfileByUsername(username);
  const league = (leagues[username] ?? []).find(
    (l) => l.slug === leagueId || l.id === leagueId
  );

  if (!profile || !league) notFound();

  const leagueTournaments = (tournaments[username] ?? []).filter((t) =>
    league.tournamentIds.includes(t.id)
  );

  const hierarchy = [
    { label: "League Master", sublabel: league.name },
    {
      label: "Active Tournaments",
      sublabel: leagueTournaments.map((t) => t.name.split(" ")[0]).join(", ") || "-",
    },
    { label: "Verified Brackets", sublabel: "Syncing to VAULT ID" },
  ];

  return (
    <div>
      <Breadcrumb
        items={[
          { label: profile.displayName, href: `/vault/${username}` },
          { label: "Leagues", href: `/vault/${username}` },
          { label: league.name },
        ]}
      />

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {league.badges.map((b) => (
          <span
            key={b}
            className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-bold tracking-wide text-secondary-foreground"
          >
            {b}
          </span>
        ))}
        <span className="text-xs text-muted-foreground">
          Season {league.establishedYear}
        </span>
      </div>

      <h1 className="mt-2 text-2xl font-black tracking-tight">
        {league.name}
      </h1>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
        {league.description}
      </p>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="text-xs font-bold tracking-wide text-muted-foreground">
            OPERATIONAL HIERARCHY
          </div>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center">
            {hierarchy.map((step, i) => (
              <div key={step.label} className="flex flex-1 items-center gap-2">
                <div className="flex-1 rounded-md border border-border bg-card p-3">
                  <div className="text-xs font-bold">{step.label}</div>
                  <div className="text-[11px] text-muted-foreground">
                    {step.sublabel}
                  </div>
                </div>
                {i < hierarchy.length - 1 && (
                  <ArrowRight className="hidden size-4 shrink-0 text-muted-foreground sm:block" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-xs font-bold tracking-wide text-muted-foreground">
            TOURNAMENTS INSIDE THIS LEAGUE
          </div>
          <div className="mt-3 space-y-2">
            {leagueTournaments.map((t) => (
              <div
                key={t.id}
                className="flex items-center justify-between gap-3 rounded-lg border border-border bg-card p-4"
              >
                <div>
                  <div className="text-sm font-bold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {t.game} · {t.prizePool}
                  </div>
                </div>
                <span className="shrink-0 rounded-md bg-secondary px-2 py-1 text-[10px] font-bold tracking-wide text-secondary-foreground">
                  {STATUS_LABEL[t.status]}
                </span>
              </div>
            ))}
            {leagueTournaments.length === 0 && (
              <div className="text-xs text-muted-foreground">
                No tournaments linked to this league yet.
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="text-xs font-bold tracking-wide text-muted-foreground">
              PARTICIPANT BREAKDOWN
            </div>
            <div className="mt-3 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Pro Invites</span>
                <span className="font-bold">{league.proInvites}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Open Qualifiers</span>
                <span className="font-bold">{league.openQualifiers}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Required Level</span>
                <span className="font-bold text-blue-600">
                  {league.requiredLevel}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
