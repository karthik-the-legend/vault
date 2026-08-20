import Link from "next/link";
import {
  discoverTournaments,
  getProfileById,
  popularInRegion,
  recommendedForYou,
  trendingTournamentIds,
} from "@/lib/mock-data";
import { ProfileAvatar } from "@/components/shared/profile-avatar";
import { VerifiedDot } from "@/components/shared/verified-badge";
import { DiscoverResultCard } from "@/components/features/discover/discover-result-card";

export default function RecommendedPage() {
  const because = recommendedForYou
    .map(getProfileById)
    .filter((p): p is NonNullable<typeof p> => !!p);
  const popular = popularInRegion
    .map(getProfileById)
    .filter((p): p is NonNullable<typeof p> => !!p);
  const trending = discoverTournaments.filter((t) =>
    trendingTournamentIds.includes(t.id)
  );

  return (
    <div>
      <h1 className="text-2xl font-black tracking-tight">
        RECOMMENDED FOR YOU
      </h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Based on your interests and activity.
      </p>

      <div className="mt-8">
        <div className="text-xs font-bold tracking-wide text-muted-foreground">
          BECAUSE YOU FOLLOW BGMI
        </div>
        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {because.map((p) => (
            <DiscoverResultCard key={p.id} profile={p} />
          ))}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <div className="text-xs font-bold tracking-wide text-muted-foreground">
            POPULAR IN YOUR REGION
          </div>
          <div className="mt-3 divide-y divide-border rounded-lg border border-border bg-card">
            {popular.map((p) => (
              <div key={p.id} className="flex items-center justify-between gap-3 p-4">
                <Link href={`/vault/${p.username}`} className="flex items-center gap-3">
                  <ProfileAvatar name={p.displayName} gradient={p.avatarGradient} size="sm" />
                  <div>
                    <div className="flex items-center gap-1.5 text-sm font-bold">
                      {p.displayName}
                      {p.verified && <VerifiedDot />}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      @{p.username}
                    </div>
                  </div>
                </Link>
                <button className="shrink-0 rounded-md bg-foreground px-3.5 py-1.5 text-xs font-bold text-background">
                  Follow
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs font-bold tracking-wide text-muted-foreground">
            TRENDING TOURNAMENTS
          </div>
          <div className="mt-3 divide-y divide-border rounded-lg border border-border bg-card">
            {trending.map((t) => (
              <div key={t.id} className="flex items-center justify-between gap-3 p-4">
                <div>
                  <div className="text-sm font-bold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {t.game} · {t.prizePool}
                  </div>
                </div>
                <button className="shrink-0 rounded-md border border-border px-3.5 py-1.5 text-xs font-bold">
                  View
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
