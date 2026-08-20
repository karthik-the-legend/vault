import { notFound } from "next/navigation";
import { clubTeams, getProfileByUsername } from "@/lib/mock-data";
import { TeamsManager } from "@/components/features/dashboard/teams-manager";

export default async function DashboardTeamsPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const profile = getProfileByUsername(username);
  if (!profile) notFound();

  return <TeamsManager teams={clubTeams[username] ?? []} />;
}
