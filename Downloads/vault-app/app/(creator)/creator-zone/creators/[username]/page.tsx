import { UserSquare2 } from "lucide-react";
import { creatorPosts, gamePassports, getAllUsernames, getProfileByUsername } from "@/lib/mock-data";
import { CreatorProfileView } from "@/components/features/creator/creator-profile-view";
import { EmptyState } from "@/components/shared/empty-state";

export async function generateStaticParams() {
  return getAllUsernames();
}

export default async function CreatorProfilePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const profile = getProfileByUsername(username);

  if (!profile) {
    return (
      <EmptyState
        icon={UserSquare2}
        title="No Creator Profile"
        description="Activate your verified gaming credential and turn your VAULT into a public portfolio."
        ctaLabel="Create Profile"
      />
    );
  }

  const passports = gamePassports[username] ?? [];
  const primaryGame = passports.find((g) => g.isPrimary) ?? passports[0];
  const posts = creatorPosts.filter((p) => p.creatorUsername === username);

  return (
    <CreatorProfileView profile={profile} primaryGame={primaryGame} posts={posts} />
  );
}
