import { notFound } from "next/navigation";
import Link from "next/link";
import {
  applicants,
  getProfileByUsername,
  orgStats,
  platformActivity,
  tournaments,
} from "@/lib/mock-data";
import { DashboardTopBar } from "@/components/features/dashboard/dashboard-topbar";
import { DashboardStatGrid } from "@/components/features/dashboard/dashboard-stat-grid";

export default async function DashboardOverviewPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const profile = getProfileByUsername(username);
  if (!profile) notFound();

  const stats = orgStats[username];
  const isClub = profile.type === "ESPORTS_CLUB";

  if (isClub) {
    const allApplicants = Object.values(applicants).flat().slice(0, 4);
    return (
      <div>
        <DashboardTopBar
          title={`${profile.displayName.toUpperCase()}`}
          subtitle="Club Management Dashboard"
          username={username}
        />
        <div className="mt-6">
          <DashboardStatGrid
            stats={[
              { label: "ACTIVE TEAMS", value: String(stats?.activeTeams ?? 0) },
              { label: "ACTIVE PLAYERS", value: String(stats?.activePlayers ?? 0) },
              { label: "OPEN POSITIONS", value: String(stats?.openPositions ?? 0) },
              { label: "RECENT APPLICATIONS", value: String(stats?.recentApplications ?? 0) },
            ]}
          />
        </div>

        <div className="mt-8 rounded-lg border border-border bg-card p-5">
          <div className="flex items-center justify-between">
            <div className="text-sm font-bold">Recent Applications</div>
            <Link
              href={`/dashboard/${username}/recruitment`}
              className="text-xs font-bold text-blue-600 hover:underline"
            >
              View All Applications
            </Link>
          </div>
          <div className="mt-3 space-y-2">
            {allApplicants.map((a) => (
              <div
                key={a.id}
                className="flex flex-wrap items-center justify-between gap-3 rounded-md bg-secondary/50 p-3"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold">
                    {a.name.charAt(0)}
                  </span>
                  <div>
                    <div className="text-sm font-bold">{a.name}</div>
                    <div className="text-xs text-muted-foreground">
                      Applied for {a.appliedFor}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-right">
                  <div>
                    <div className="text-[10px] font-semibold tracking-wide text-muted-foreground">
                      VERIFIED RANK
                    </div>
                    <div className="text-xs font-bold">{a.verifiedRank}</div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {a.appliedAgo}
                  </div>
                  <button className="rounded-md bg-foreground px-3.5 py-1.5 text-xs font-bold text-background">
                    Review
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const upcoming = (tournaments[username] ?? []).slice(0, 3);
  const activity = platformActivity[username] ?? [];

  return (
    <div>
      <DashboardTopBar
        title={`${profile.displayName.toUpperCase()}`}
        subtitle="Organizer Control Panel"
        username={username}
        actionLabel="Create Tournament"
        actionHref={`/dashboard/${username}/tournaments/new`}
      />
      <div className="mt-6">
        <DashboardStatGrid
          stats={[
            { label: "Tournaments", value: String(stats?.tournaments ?? 0), hint: "+12 this month" },
            { label: "Active Leagues", value: String(stats?.activeLeagues ?? 0), hint: "2 pending launch" },
            { label: "Total Players", value: stats?.totalPlayers ?? "0", hint: "+4.2K new signs" },
            { label: "Total Prize Pools", value: stats?.totalPrizePools ?? "₹0", hint: "Distributed via VAULT Pay" },
          ]}
        />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-5">
          <div className="flex items-center justify-between">
            <div className="text-sm font-bold">Upcoming Tournaments</div>
            <Link
              href={`/dashboard/${username}/tournaments`}
              className="text-xs font-bold text-blue-600 hover:underline"
            >
              Manage All
            </Link>
          </div>
          <div className="mt-3 space-y-2">
            {upcoming.map((t) => (
              <div
                key={t.id}
                className="flex items-center justify-between rounded-md bg-secondary/50 p-3"
              >
                <div>
                  <div className="text-sm font-bold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {t.game} · {t.date}
                  </div>
                </div>
                <div className="text-right text-xs">
                  <div className="font-bold">{t.prizePool}</div>
                  <div className="text-muted-foreground">
                    {t.teamsRegistered} Teams
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-5">
          <div className="text-sm font-bold">Recent Platform Activity</div>
          <div className="mt-3 space-y-3">
            {activity.map((a) => (
              <div key={a.id} className="border-b border-border pb-3 text-sm last:border-0 last:pb-0">
                {a.text}
                <div className="mt-0.5 text-xs text-muted-foreground">
                  {a.timeAgo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
