import Link from "next/link";
import {
  getProfileById,
  popularInRegion,
  profiles,
  recentlyViewed,
  recommendedForYou,
} from "@/lib/mock-data";
import { SearchBar } from "@/components/features/discover/search-bar";
import { DiscoverResultCard } from "@/components/features/discover/discover-result-card";
import { RecentlyViewed } from "@/components/features/discover/recently-viewed";
import { EmptyDiscoverState } from "@/components/features/discover/empty-discover-state";

const CATEGORY_PILLS = [
  { label: "Players", category: "GAMER" },
  { label: "Clubs", category: "ESPORTS_CLUB" },
  { label: "Tournaments", category: "TOURNAMENTS" },
  { label: "Organizers", category: "ORGANIZER" },
  { label: "Communities", category: "COMMUNITIES" },
];

export default function DiscoverPage() {
  const recommended = recommendedForYou
    .map(getProfileById)
    .filter((p): p is NonNullable<typeof p> => !!p);
  const peopleToFollow = popularInRegion
    .map(getProfileById)
    .filter((p): p is NonNullable<typeof p> => !!p);
  const clubsToFollow = profiles.filter((p) => p.type === "ESPORTS_CLUB").slice(0, 2);
  const hasPersonalization = recommended.length > 0 || peopleToFollow.length > 0;

  return (
    <div>
      <div className="text-center">
        <h1 className="font-heading text-3xl font-black tracking-tight sm:text-4xl">
          DISCOVER
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Find gamers, clubs, organizers and more.
        </p>
      </div>

      <div className="mx-auto mt-6 max-w-2xl">
        <SearchBar />
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {CATEGORY_PILLS.map((pill) => (
          <Link
            key={pill.category}
            href={`/discover/search?category=${pill.category}`}
            className="rounded-full border border-border px-4 py-1.5 text-sm font-semibold text-muted-foreground hover:border-foreground/40 hover:text-foreground"
          >
            {pill.label}
          </Link>
        ))}
      </div>

      {hasPersonalization ? (
        <>
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <div className="text-xs font-bold tracking-wide text-muted-foreground">
                RECOMMENDED FOR YOU
              </div>
              <div className="mt-3 space-y-4">
                {recommended.map((p) => (
                  <DiscoverResultCard key={p.id} profile={p} />
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs font-bold tracking-wide text-muted-foreground">
                PEOPLE TO FOLLOW
              </div>
              <div className="mt-3 space-y-4">
                {peopleToFollow.map((p) => (
                  <DiscoverResultCard key={p.id} profile={p} />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <div className="text-xs font-bold tracking-wide text-muted-foreground">
                CLUBS TO FOLLOW
              </div>
              <div className="mt-3 space-y-4">
                {clubsToFollow.map((p) => (
                  <DiscoverResultCard key={p.id} profile={p} />
                ))}
              </div>
            </div>
            <div>
              <RecentlyViewed items={recentlyViewed} />
            </div>
          </div>
        </>
      ) : (
        <EmptyDiscoverState />
      )}
    </div>
  );
}
