import { notFound } from "next/navigation";
import { getHubTournamentBySlug } from "@/lib/mock-data";
import { TournamentRegistration } from "@/components/features/tournaments/tournament-registration";

export default async function TournamentRegisterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tournament = getHubTournamentBySlug(slug);
  if (!tournament) notFound();

  return <TournamentRegistration tournament={tournament} />;
}
