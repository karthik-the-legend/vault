import { notFound } from "next/navigation";
import Link from "next/link";
import { getHubTournamentBySlug } from "@/lib/mock-data";
import { TournamentDetailShell } from "@/components/features/tournaments/tournament-detail-shell";

export default async function TournamentOverviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tournament = getHubTournamentBySlug(slug);
  if (!tournament) notFound();

  return (
    <TournamentDetailShell tournament={tournament} activeTab="Overview">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_300px]">
        <div className="space-y-8">
          <div>
            <div className="text-xs font-bold tracking-wide text-muted-foreground">
              TOURNAMENT DESCRIPTION
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {tournament.description}
            </p>
          </div>

          {tournament.prizeBreakdown.length > 0 && (
            <div>
              <div className="text-xs font-bold tracking-wide text-muted-foreground">
                PRIZE POOL BREAKDOWN
              </div>
              <div className="mt-2 divide-y divide-border rounded-lg border border-border">
                {tournament.prizeBreakdown.map((row) => (
                  <div key={row.label} className="flex items-center justify-between px-4 py-3 text-sm">
                    <span className="font-medium">{row.label}</span>
                    <span className="font-bold">{row.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tournament.eligibility.length > 0 && (
            <div>
              <div className="text-xs font-bold tracking-wide text-muted-foreground">
                ELIGIBILITY &amp; REQUIREMENTS
              </div>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                {tournament.eligibility.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="h-fit space-y-4 rounded-lg border border-border bg-card p-5">
          <div>
            <div className="text-[10px] font-semibold tracking-wide text-muted-foreground">
              DATE &amp; TIME
            </div>
            <div className="text-sm font-bold">{tournament.dateTime}</div>
          </div>
          <div>
            <div className="text-[10px] font-semibold tracking-wide text-muted-foreground">
              MATCH FORMAT
            </div>
            <div className="text-sm font-bold">{tournament.matchFormat}</div>
          </div>
          <div>
            <div className="text-[10px] font-semibold tracking-wide text-muted-foreground">
              PARTICIPANTS
            </div>
            <div className="text-sm font-bold">{tournament.maxParticipants}</div>
          </div>
          <div>
            <div className="text-[10px] font-semibold tracking-wide text-muted-foreground">
              REGISTRATION DEADLINE
            </div>
            <div className="text-sm font-bold">{tournament.registrationDeadline}</div>
          </div>

          <Link
            href={`/tournaments/${tournament.slug}/register`}
            className="flex h-11 w-full items-center justify-center rounded-md bg-accent-blue text-sm font-bold text-white hover:bg-accent-blue"
          >
            REGISTER SQUAD
          </Link>
          <button className="h-11 w-full rounded-md border border-border text-sm font-bold">
            Share Event
          </button>
        </div>
      </div>
    </TournamentDetailShell>
  );
}
