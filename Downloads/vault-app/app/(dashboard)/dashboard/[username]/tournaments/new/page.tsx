import { notFound } from "next/navigation";
import { getProfileByUsername } from "@/lib/mock-data";
import { CreateTournamentForm } from "@/components/features/dashboard/create-tournament-form";

export default async function NewTournamentPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const profile = getProfileByUsername(username);
  if (!profile) notFound();

  return <CreateTournamentForm username={username} />;
}
