import { notFound } from "next/navigation";
import { getProfileByUsername, tournamentResults } from "@/lib/mock-data";
import { OrganizerResultsTab } from "@/components/features/organizer/organizer-results-tab";

export default async function DashboardResultsPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const profile = getProfileByUsername(username);
  if (!profile) notFound();

  return (
    <div>
      <h1 className="text-xl font-black tracking-tight">Results</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Standings, brackets, and MVP player keys once matches are finished.
      </p>
      <div className="mt-6">
        <OrganizerResultsTab results={tournamentResults[username] ?? []} />
      </div>
    </div>
  );
}
