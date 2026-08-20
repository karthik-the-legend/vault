import { notFound } from "next/navigation";
import Link from "next/link";
import { getProfileByUsername, leagues } from "@/lib/mock-data";
import { OrganizerLeaguesTab } from "@/components/features/organizer/organizer-leagues-tab";

export default async function DashboardLeaguesPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const profile = getProfileByUsername(username);
  if (!profile) notFound();

  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-xl font-black tracking-tight">Leagues</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Group multiple season brackets into tier-ranked esports leagues.
          </p>
        </div>
        <Link
          href={`/vault/${username}`}
          className="shrink-0 rounded-md bg-foreground px-4 py-2 text-sm font-bold text-background"
        >
          + Create League
        </Link>
      </div>
      <div className="mt-6">
        <OrganizerLeaguesTab username={username} leagues={leagues[username] ?? []} />
      </div>
    </div>
  );
}
