import { Tournament } from "@/types";
import { EmptyState } from "@/components/shared/empty-state";
import { Trophy } from "lucide-react";

const STATUS_LABEL: Record<Tournament["status"], string> = {
  REGISTRATION_OPEN: "REGISTRATION OPEN",
  UPCOMING: "UPCOMING",
  COMPLETED: "COMPLETED",
  DRAFT: "DRAFT",
};

const STATUS_CLASS: Record<Tournament["status"], string> = {
  REGISTRATION_OPEN: "bg-orange-100 text-orange-700",
  UPCOMING: "bg-blue-100 text-blue-700",
  COMPLETED: "bg-secondary text-secondary-foreground",
  DRAFT: "bg-amber-100 text-amber-700",
};

export function OrganizerTournamentsTab({
  tournaments,
}: {
  tournaments: Tournament[];
}) {
  if (tournaments.length === 0) {
    return (
      <EmptyState
        icon={Trophy}
        title="No tournaments scheduled"
        description="Launch a custom double-elimination, round robin or swiss bracket."
        ctaLabel="Create your first tournament"
      />
    );
  }

  return (
    <div>
      <div className="text-sm font-bold">Hosted Esports Brackets</div>
      <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tournaments.map((t) => (
          <div key={t.id} className="overflow-hidden rounded-lg border border-border bg-card">
            <div
              className="flex aspect-video items-center justify-center text-3xl text-white/20"
              style={{
                background: "radial-gradient(circle at 70% 30%, #1e293b, #020617 70%)",
              }}
            >
              🎮
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between text-[10px] font-bold tracking-wide">
                <span
                  className={`rounded-md px-2 py-0.5 ${STATUS_CLASS[t.status]}`}
                >
                  {STATUS_LABEL[t.status]}
                </span>
                <span className="text-muted-foreground">{t.game}</span>
              </div>
              <div className="mt-2 text-sm font-bold">{t.name}</div>
              <div className="mt-2 flex justify-between text-xs">
                <div>
                  <div className="text-[10px] font-semibold tracking-wide text-muted-foreground">
                    PRIZE POOL
                  </div>
                  <div className="font-bold">{t.prizePool}</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-semibold tracking-wide text-muted-foreground">
                    DATE
                  </div>
                  <div className="font-bold">{t.date}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
