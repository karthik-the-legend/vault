import { notFound, redirect } from "next/navigation";
import {
  currentUsername,
  gamePassports,
  getProfileByUsername,
} from "@/lib/mock-data";
import { EditVaultForm } from "@/components/features/vault/edit-vault-form";

export default async function EditVaultPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const profile = getProfileByUsername(username);
  if (!profile) notFound();
  if (username !== currentUsername) redirect(`/vault/${username}`);

  const linkedGames = (gamePassports[username] ?? []).map((g) => g.gameName);

  return <EditVaultForm profile={profile} linkedGames={linkedGames} />;
}
