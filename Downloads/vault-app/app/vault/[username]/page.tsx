import { notFound } from "next/navigation";
import {
  achievements,
  clubContent,
  clubProfileStats,
  clubTeams,
  clubPlayers,
  gamePassports,
  getProfileByUsername,
  leagues,
  organizerContent,
  ownedUsernames,
  recruitmentOpportunities,
  teams,
  tournamentResults,
  tournaments,
} from "@/lib/mock-data";
import { GamerVaultOwnerView } from "@/components/features/vault/gamer-vault-owner";
import { GamerVaultVisitorView } from "@/components/features/vault/gamer-vault-visitor";
import { ClubProfileView } from "@/components/features/club/club-profile-view";
import { OrganizerProfileView } from "@/components/features/organizer/organizer-profile-view";
import { AuthenticatedShell } from "@/components/layout/authenticated-shell";

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
      <AuthenticatedShell>
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
      </AuthenticatedShell>
    );
  }

  if (profile.type === "ORGANIZER") {
    return (
      <AuthenticatedShell>
        <OrganizerProfileView
          profile={profile}
          isOwner={isOwner}
          leagues={leagues[username] ?? []}
          tournaments={tournaments[username] ?? []}
          results={tournamentResults[username] ?? []}
          content={organizerContent[username] ?? []}
        />
      </AuthenticatedShell>
    );
  }

  const passports = gamePassports[username] ?? [];
  const primaryGame = passports.find((g) => g.isPrimary) ?? passports[0];
  const achievement = (achievements[username] ?? [])[0];

  if (isOwner) {
    return (
      <GamerVaultOwnerView
        profile={profile}
        primaryGame={primaryGame}
        team={(teams[username] ?? [])[0]}
        achievement={achievement}
      />
    );
  }

  return (
    <GamerVaultVisitorView
      profile={profile}
      primaryGame={primaryGame}
      achievement={achievement}
      isPrivate={!!profile.isPrivate}
    />
  );
}
