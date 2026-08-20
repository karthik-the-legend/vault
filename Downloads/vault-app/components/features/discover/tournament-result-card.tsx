import { DiscoverTournament, TournamentStatus } from "@/types";
import { cn } from "@/lib/utils";

const STATUS_LABEL: Record<TournamentStatus, string> = {
  REGISTRATION_OPEN: "Registration Open",
  UPCOMING: "Upcoming",
  COMPLETED: "Ongoing",
  DRAFT: "Draft",
};

const STATUS_CLASS: Record<TournamentStatus, string> = {
  REGISTRATION_OPEN: "bg-emerald-100 text-emerald-700",
  UPCOMING: "bg-blue-100 text-blue-700",
  COMPLETED: "bg-secondary text-secondary-foreground",
  DRAFT: "bg-amber-100 text-amber-700",
};

export function TournamentResultCard({
  tournament,
  showCover = true,
}: {
  tournament: DiscoverTournament;
  showCover?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card">
      {showCover && (
        <div
          className="relative flex aspect-[21/9] items-center justify-center text-4xl text-white/20"
          style={{
            background: "radial-gradient(circle at 70% 30%, #312e81, #020617 70%)",
          }}
        >
          🎮
          <span
            className={cn(
              "absolute top-3 right-3 rounded-md px-2 py-0.5 text-[10px] font-bold",
              STATUS_CLASS[tournament.status]
            )}
          >
            {STATUS_LABEL[tournament.status]}
          </span>
        </div>
      )}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="text-sm font-bold">{tournament.name}</div>
            <div className="text-xs text-muted-foreground">
              {tournament.game}
            </div>
          </div>
          {!showCover && (
            <span
              className={cn(
                "shrink-0 rounded-md px-2 py-0.5 text-[10px] font-bold",
                STATUS_CLASS[tournament.status]
              )}
            >
              {STATUS_LABEL[tournament.status]}
            </span>
          )}
        </div>
        <div className="mt-3 flex items-center justify-between text-xs">
          <span>
            Prize Pool: <span className="font-bold">{tournament.prizePool}</span>
          </span>
          <span className="text-muted-foreground">
            Organized by:{" "}
            <span className="font-semibold text-foreground">
              {tournament.organizerName}
            </span>
          </span>
        </div>
        <button className="mt-3 h-9 w-full rounded-md bg-secondary text-sm font-bold text-secondary-foreground">
          View Tournament
        </button>
      </div>
    </div>
  );
}
