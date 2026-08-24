import Link from "next/link";
import { MoreHorizontal, Trophy } from "lucide-react";
import { Tournament } from "@/types";
import { EmptyState } from "@/components/shared/empty-state";

const STATUS_LABEL: Record<Tournament["status"], string> = {
  REGISTRATION_OPEN: "Registration Open",
  UPCOMING: "Upcoming",
  COMPLETED: "Completed",
  DRAFT: "Draft",
};

const STATUS_CLASS: Record<Tournament["status"], string> = {
  REGISTRATION_OPEN: "text-emerald-600",
  UPCOMING: "text-accent-blue",
  COMPLETED: "text-muted-foreground",
  DRAFT: "text-amber-600",
};

const GROUPS: { title: string; statuses: Tournament["status"][] }[] = [
  { title: "UPCOMING", statuses: ["REGISTRATION_OPEN", "UPCOMING"] },
  { title: "DRAFT", statuses: ["DRAFT"] },
  { title: "PAST / COMPLETED", statuses: ["COMPLETED"] },
];

export function ManageTournaments({
  username,
  tournaments,
}: {
  username: string;
  tournaments: Tournament[];
}) {
  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-xl font-black tracking-tight">
            Manage Tournaments
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Full catalog of your active, draft, and past brackets
          </p>
        </div>
        <Link
          href={`/dashboard/${username}/tournaments/new`}
          className="shrink-0 rounded-md bg-foreground px-4 py-2 text-sm font-bold text-background"
        >
          + Create Tournament
        </Link>
      </div>

      {tournaments.length === 0 ? (
        <div className="mt-6">
          <EmptyState
            icon={Trophy}
            title="No tournaments scheduled"
            description="Launch a custom double-elimination, round robin or swiss bracket."
            ctaLabel="Create your first tournament"
          />
        </div>
      ) : (
        <div className="mt-6 space-y-6">
          {GROUPS.map((group) => {
            const items = tournaments.filter((t) =>
              group.statuses.includes(t.status)
            );
            if (items.length === 0) return null;
            return (
              <div key={group.title}>
                <div className="text-[11px] font-bold tracking-wide text-muted-foreground">
                  {group.title}
                </div>
                <div className="mt-2 space-y-2">
                  {items.map((t) => (
                    <div
                      key={t.id}
                      className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border bg-card p-4"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-secondary text-muted-foreground">
                          <Trophy className="size-4" />
                        </span>
                        <div>
                          <div className="text-sm font-bold">{t.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {t.game} · {t.date}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span
                          className={`text-xs font-semibold ${STATUS_CLASS[t.status]}`}
                        >
                          {STATUS_LABEL[t.status]}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {t.teamsRegistered}/{t.teamsMax} Teams
                        </span>
                        <button className="rounded-md border border-border px-3 py-1.5 text-xs font-bold">
                          Edit
                        </button>
                        <button
                          aria-label="More options"
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <MoreHorizontal className="size-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
