import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getProfileByUsername,
  orgStats,
  platformActivity,
  recentTrialApplications,
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
    const trials = recentTrialApplications[username] ?? [];
    return (
      <div>
        <DashboardTopBar
          title={`${profile.displayName.toUpperCase()}`}
          subtitle="Club Management & Roster Operations"
          username={username}
        />
        <div className="mt-6">
          <DashboardStatGrid
            stats={[
              {
                label: "ACTIVE ROSTERS",
                value: String(stats?.activeTeams ?? 0),
                hint: "BGMI, Valorant, Free Fire",
              },
              {
                label: "TOTAL PLAYERS",
                value: String(stats?.activePlayers ?? 0),
                hint: "100% VAULT Verified",
              },
              {
                label: "PENDING APPLICATIONS",
                value: String(stats?.recentApplications ?? 0),
                hint: "2 Under Review",
              },
              {
                label: "MONTHLY PROFILE REACH",
                value: "14.2K",
                hint: "↑ 24% this month",
              },
            ]}
          />
        </div>

        <div className="mt-8 rounded-lg border border-border bg-card p-5">
          <div className="flex items-center justify-between">
            <div className="text-sm font-bold">Recent Trial Applications</div>
            <Link
              href={`/dashboard/${username}/recruitment`}
              className="text-xs font-bold text-accent-blue hover:underline"
            >
              Export All
            </Link>
          </div>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="text-[10px] font-semibold tracking-wide text-muted-foreground">
                  <th className="pb-2 font-semibold">GAMER</th>
                  <th className="pb-2 font-semibold">POSITION</th>
                  <th className="pb-2 font-semibold">IN-GAME RANK</th>
                  <th className="pb-2 font-semibold">VAULT SCORE</th>
                  <th className="pb-2 font-semibold">STATUS</th>
                  <th className="pb-2 font-semibold">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {trials.map((a) => (
                  <tr key={a.id} className="border-t border-border">
                    <td className="py-3 font-bold">{a.name}</td>
                    <td className="py-3 text-muted-foreground">{a.appliedFor}</td>
                    <td className="py-3 text-muted-foreground">{a.verifiedRank}</td>
                    <td className="py-3 font-bold text-accent-blue">{a.vaultScore}</td>
                    <td className="py-3">
                      <span className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-bold tracking-wide text-secondary-foreground">
                        {a.status}
                      </span>
                    </td>
                    <td className="py-3">
                      <button className="rounded-md border border-border px-3 py-1.5 text-xs font-bold">
                        Review
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
              className="text-xs font-bold text-accent-blue hover:underline"
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
