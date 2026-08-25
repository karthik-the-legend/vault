import { notFound } from "next/navigation";
import { getAllUsernames, getProfileByUsername } from "@/lib/mock-data";
import { ShareVaultView } from "@/components/features/vault/share-vault-view";

export async function generateStaticParams() {
  return getAllUsernames();
}

export default async function ShareVaultPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const profile = getProfileByUsername(username);
  if (!profile) notFound();

  return <ShareVaultView profile={profile} username={username} />;
}
