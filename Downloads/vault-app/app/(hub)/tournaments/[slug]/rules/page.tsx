import { notFound } from "next/navigation";
import { getHubTournamentBySlug } from "@/lib/mock-data";
import { TournamentDetailShell } from "@/components/features/tournaments/tournament-detail-shell";

export default async function TournamentRulesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tournament = getHubTournamentBySlug(slug);
  if (!tournament) notFound();

  return (
    <TournamentDetailShell tournament={tournament} activeTab="Rules">
      <div className="space-y-4">
        {tournament.rules.map((rule) => (
          <div key={rule.title} className="rounded-lg border border-border bg-card p-4">
            <div className="text-sm font-bold">{rule.title}</div>
            <p className="mt-1 text-sm text-muted-foreground">{rule.description}</p>
          </div>
        ))}
        {tournament.rules.length === 0 && (
          <div className="rounded-lg border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
            Rules have not been published for this tournament yet.
          </div>
        )}
      </div>
    </TournamentDetailShell>
  );
}
