import { notFound } from "next/navigation";
import { getHubTournamentBySlug } from "@/lib/mock-data";
import { TournamentDetailShell } from "@/components/features/tournaments/tournament-detail-shell";
import { cn } from "@/lib/utils";

export default async function TournamentSchedulePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tournament = getHubTournamentBySlug(slug);
  if (!tournament) notFound();

  return (
    <TournamentDetailShell tournament={tournament} activeTab="Schedule">
      <div className="text-sm font-bold">TIMELINE &amp; STAGES</div>
      <p className="mt-1 text-sm text-muted-foreground">
        Track critical dates of the winter championship.
      </p>

      <div className="mt-6 max-w-2xl">
        {tournament.scheduleStages.map((stage, i) => (
          <div key={stage.title} className="flex gap-4">
            <div className="w-24 shrink-0 pt-0.5 text-right text-xs font-semibold text-muted-foreground">
              {stage.date}
            </div>
            <div className="flex flex-col items-center">
              <span
                className={cn(
                  "size-2.5 shrink-0 rounded-full",
                  stage.isCurrent ? "bg-blue-600" : "bg-border"
                )}
              />
              {i < tournament.scheduleStages.length - 1 && (
                <span className="mt-1 w-px flex-1 bg-border" />
              )}
            </div>
            <div className="pb-6">
              <div
                className={cn(
                  "text-sm font-bold",
                  stage.isCurrent && "text-blue-600"
                )}
              >
                {stage.title}
              </div>
              <p className="mt-0.5 text-sm text-muted-foreground">
                {stage.description}
              </p>
            </div>
          </div>
        ))}
        {tournament.scheduleStages.length === 0 && (
          <div className="rounded-lg border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
            Schedule has not been published for this tournament yet.
          </div>
        )}
      </div>
    </TournamentDetailShell>
  );
}
