import {
  currentUsername,
  getProfileByUsername,
  gamePassports,
  events,
  profiles,
} from "@/lib/mock-data";
import { ProfileSummaryBar } from "@/components/features/home/profile-summary-bar";
import { ContinueSessionCard } from "@/components/features/home/continue-session-card";
import { GamePillList } from "@/components/features/home/game-pill-list";
import { UpcomingEvents } from "@/components/features/home/upcoming-events";
import { RecommendedCard } from "@/components/features/home/recommended-card";
import { GamerDirectoryList } from "@/components/features/home/gamer-directory-list";

export default function HomePage() {
  const profile = getProfileByUsername(currentUsername)!;
  const games = gamePassports[currentUsername].map((g) => g.gameName);
  const recommended = profiles.find((p) => p.username === "mortal")!;
  const directory = profiles.filter((p) =>
    ["scoutop", "jonathan", "mavi"].includes(p.username)
  );

  return (
    <div>
      <ProfileSummaryBar profile={profile} />

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <ContinueSessionCard />
          <GamePillList games={games} username={currentUsername} />
          <UpcomingEvents events={events} />
        </div>
        <div className="space-y-8">
          <RecommendedCard profile={recommended} />
          <GamerDirectoryList profiles={directory} />
        </div>
      </div>
    </div>
  );
}
