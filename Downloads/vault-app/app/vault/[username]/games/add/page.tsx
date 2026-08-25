import { notFound } from "next/navigation";
import { currentUsername, getAllUsernames, getProfileByUsername } from "@/lib/mock-data";
import { AddGameView } from "@/components/features/vault/add-game-view";

export async function generateStaticParams() {
  return getAllUsernames();
}

export default async function AddGamePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const profile = getProfileByUsername(username);
  if (!profile || username !== currentUsername) notFound();

  return <AddGameView />;
}
