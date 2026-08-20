import Link from "next/link";
import {
  hubTournaments,
  myGames,
  popularTournamentIds,
  recentlyAddedTournamentIds,
  upcomingTournamentIds,
} from "@/lib/mock-data";
import { HubPageHeader } from "@/components/shared/hub-page-header";
import { TournamentSearchBar } from "@/components/features/tournaments/tournament-search-bar";
import { HubTournamentCard } from "@/components/features/tournaments/hub-tournament-card";
import { HubTournamentListRow } from "@/components/features/tournaments/hub-tournament-list-row";
import { MyGamesCard } from "@/components/features/tournaments/my-games-card";

function byId(ids: string[]) {
  return ids
    .map((id) => hubTournaments.find((t) => t.id === id))
    .filter((t): t is NonNullable<typeof t> => !!t);
}

export default function TournamentsHubPage() {
  const upcoming = byId(upcomingTournamentIds);
  const popular = byId(popularTournamentIds);
  const recent = byId(recentlyAddedTournamentIds);

  return (
    <div>
      <HubPageHeader
        title="TOURNAMENTS"
        subtitle="Connect, compete, and discover elite esports challenges."
      />

      <TournamentSearchBar />

      <div className="mt-4 flex justify-end gap-4 text-sm font-bold">
        <Link href="/tournaments/my" className="text-muted-foreground hover:text-foreground">
          My Tournaments
        </Link>
        <Link href="/tournaments/create" className="text-blue-600 hover:underline">
          + Create Tournament
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_280px]">
        <div className="space-y-10">
          <div>
            <div className="text-xs font-bold tracking-wide text-muted-foreground">
              UPCOMING
            </div>
            <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {upcoming.map((t) => (
                <HubTournamentCard key={t.id} tournament={t} />
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-bold tracking-wide text-muted-foreground">
              POPULAR TOURNAMENTS
            </div>
            <div className="mt-3 space-y-2">
              {popular.map((t) => (
                <HubTournamentListRow key={t.id} tournament={t} />
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-bold tracking-wide text-muted-foreground">
              RECENTLY ADDED
            </div>
            <div className="mt-3 space-y-2">
              {recent.map((t) => (
                <HubTournamentListRow key={t.id} tournament={t} />
              ))}
            </div>
          </div>
        </div>

        <MyGamesCard games={myGames} />
      </div>
    </div>
  );
}
