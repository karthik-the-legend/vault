import { notFound } from "next/navigation";
import { getProfileByUsername, tournaments } from "@/lib/mock-data";
import { ManageTournaments } from "@/components/features/dashboard/manage-tournaments";

export default async function DashboardTournamentsPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const profile = getProfileByUsername(username);
  if (!profile) notFound();

  return (
    <ManageTournaments username={username} tournaments={tournaments[username] ?? []} />
  );
}
