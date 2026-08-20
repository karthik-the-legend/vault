import { notFound } from "next/navigation";
import {
  achievements,
  clubContent,
  clubProfileStats,
  clubTeams,
  clubPlayers,
  contentItems,
  gamePassports,
  getProfileByUsername,
  leagues,
  matchHistory,
  organizerContent,
  ownedUsernames,
  recruitmentOpportunities,
  teams,
  tournamentResults,
  tournaments,
} from "@/lib/mock-data";
import { VaultProfileView } from "@/components/features/vault/vault-profile-view";
import { ClubProfileView } from "@/components/features/club/club-profile-view";
import { OrganizerProfileView } from "@/components/features/organizer/organizer-profile-view";

export default async function VaultProfilePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const profile = getProfileByUsername(username);

  if (!profile) {
    notFound();
  }

  const isOwner = ownedUsernames.includes(username);

  if (profile.type === "ESPORTS_CLUB") {
    return (
      <ClubProfileView
        profile={profile}
        isOwner={isOwner}
        clubStats={
          clubProfileStats[username] ?? {
            teams: 0,
            players: 0,
            wins: 0,
            achievements: 0,
          }
        }
        teams={clubTeams[username] ?? []}
        players={clubPlayers[username] ?? []}
        opportunities={recruitmentOpportunities[username] ?? []}
        content={clubContent[username] ?? []}
      />
    );
  }

  if (profile.type === "ORGANIZER") {
    return (
      <OrganizerProfileView
        profile={profile}
        isOwner={isOwner}
        leagues={leagues[username] ?? []}
        tournaments={tournaments[username] ?? []}
        results={tournamentResults[username] ?? []}
        content={organizerContent[username] ?? []}
      />
    );
  }

  const passports = gamePassports[username] ?? [];
  const primaryGame = passports.find((g) => g.isPrimary) ?? passports[0];

  return (
    <VaultProfileView
      profile={profile}
      isOwner={isOwner}
      primaryGame={primaryGame}
      team={(teams[username] ?? [])[0]}
      achievement={(achievements[username] ?? [])[0]}
      content={(contentItems[username] ?? [])[0]}
      matches={matchHistory[username] ?? []}
    />
  );
}
