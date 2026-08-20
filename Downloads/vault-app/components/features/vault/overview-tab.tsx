import Link from "next/link";
import { Achievement, ContentItem, GamePassport, Team } from "@/types";
import { VerifiedPill } from "@/components/shared/verified-badge";

function SectionLabel({
  label,
  action,
}: {
  label: string;
  action?: { text: string; href?: string };
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-xs font-bold tracking-wide text-muted-foreground">
        {label}
      </div>
      {action && (
        <Link
          href={action.href ?? "#"}
          className="text-xs font-bold hover:underline"
        >
          {action.text}
        </Link>
      )}
    </div>
  );
}

export function OverviewTab({
  username,
  isOwner,
  primaryGame,
  team,
  achievement,
  content,
}: {
  username: string;
  isOwner: boolean;
  primaryGame?: GamePassport;
  team?: Team;
  achievement?: Achievement;
  content?: ContentItem;
}) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <div className="space-y-8">
        {primaryGame && (
          <div>
            <SectionLabel
              label="PRIMARY GAME"
              action={isOwner ? { text: "Edit Badges →" } : undefined}
            />
            <div className="mt-3 flex items-center justify-between gap-3 rounded-lg border border-border bg-card p-4">
              <div className="flex items-center gap-3">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-secondary text-sm font-bold">
                  {primaryGame.gameName.charAt(0)}
                </span>
                <div>
                  <div className="flex items-center gap-2 text-sm font-bold">
                    {primaryGame.gameName}
                    {primaryGame.verified && <VerifiedPill />}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {primaryGame.rank} · {primaryGame.role}
                  </div>
                </div>
              </div>
              {isOwner ? (
                <Link
                  href={`/vault/${username}/games/${primaryGame.gameSlug}`}
                  className="shrink-0 rounded-md border border-border px-3.5 py-1.5 text-xs font-bold"
                >
                  Manage
                </Link>
              ) : (
                <Link
                  href={`/vault/${username}/games/${primaryGame.gameSlug}`}
                  className="shrink-0 rounded-md border border-border px-3.5 py-1.5 text-xs font-bold"
                >
                  Passport
                </Link>
              )}
            </div>
          </div>
        )}

        {team && (
          <div>
            <SectionLabel
              label="CURRENT TEAM"
              action={isOwner ? { text: "Manage →" } : { text: "View all →" }}
            />
            <div className="mt-3 flex items-center gap-3 rounded-lg border border-border bg-card p-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-foreground text-sm font-bold text-background">
                {team.name.charAt(0)}
              </span>
              <div>
                <div className="text-sm font-bold">{team.name}</div>
                <div className="text-xs text-muted-foreground">
                  {team.status} · {team.league}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="space-y-8">
        {achievement && (
          <div>
            <SectionLabel
              label="FEATURED ACHIEVEMENT"
              action={isOwner ? { text: "Edit →" } : undefined}
            />
            <div className="mt-3 rounded-lg border border-border bg-card p-4">
              <div className="text-sm font-bold">🏆 {achievement.title}</div>
              <div className="mt-1 text-xs text-muted-foreground">
                {achievement.description}
              </div>
            </div>
          </div>
        )}

        {content && (
          <div>
            <SectionLabel
              label="FEATURED CONTENT"
              action={isOwner ? { text: "Add Video →" } : undefined}
            />
            <div className="mt-3 overflow-hidden rounded-lg border border-border bg-card">
              <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-slate-800 to-slate-950 text-white/70">
                ▶
              </div>
              <div className="p-3">
                <div className="text-sm font-bold">{content.title}</div>
                <div className="text-xs text-muted-foreground">
                  {content.meta}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
