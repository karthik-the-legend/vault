import { Trophy, ChevronRight, Users2 } from "lucide-react";
import { ClubTeam, RecruitmentOpportunity } from "@/types";
import { EmptyState } from "@/components/shared/empty-state";

export function ClubOverviewTab({
  featuredTeam,
  opportunity,
  isOwner,
}: {
  featuredTeam?: ClubTeam;
  opportunity?: RecruitmentOpportunity;
  isOwner: boolean;
}) {
  const hasContent = featuredTeam || opportunity;

  if (!hasContent) {
    return (
      <EmptyState
        icon={Users2}
        title="Create your first team"
        description="Keep your digital headquarters updated."
        ctaLabel="Build Team Profile"
      />
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {featuredTeam && (
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center justify-between text-[10px] font-bold tracking-wide text-muted-foreground">
            FEATURED TEAM
            <span className="rounded-md bg-secondary px-2 py-0.5 text-secondary-foreground">
              ACTIVE
            </span>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-foreground text-sm font-bold text-background">
              {featuredTeam.name.charAt(5) ?? featuredTeam.name.charAt(0)}
            </span>
            <div>
              <div className="text-sm font-bold">{featuredTeam.name}</div>
              <div className="text-xs text-muted-foreground">
                {featuredTeam.playersCount} Players · Captain: {featuredTeam.captain}
              </div>
            </div>
          </div>
          {featuredTeam.achievements[0] && (
            <div className="mt-3 flex items-center gap-1.5 border-t border-border pt-3 text-xs font-medium">
              <Trophy className="size-3.5 text-amber-500" />
              {featuredTeam.achievements[0].title}
            </div>
          )}
        </div>
      )}

      {featuredTeam?.achievements[0] && (
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="text-[10px] font-bold tracking-wide text-muted-foreground">
            RECENT ACHIEVEMENT
          </div>
          <div className="mt-3 flex items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
              <Trophy className="size-4" />
            </span>
            <div>
              <div className="text-sm font-bold">
                {featuredTeam.achievements[0].result}
              </div>
              <div className="text-xs text-muted-foreground">
                {featuredTeam.achievements[0].title}
              </div>
            </div>
          </div>
        </div>
      )}

      {opportunity && (
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center justify-between text-[10px] font-bold tracking-wide text-muted-foreground">
            OPEN RECRUITMENT
            <span className="rounded-md bg-blue-600 px-2 py-0.5 text-white">
              APPLY
            </span>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <div>
              <div className="text-sm font-bold">{opportunity.title}</div>
              <div className="text-xs text-muted-foreground">
                {featuredTeam ? `${featuredTeam.name} Tier-1 Lineup` : opportunity.region}
              </div>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between border-t border-border pt-3 text-xs text-muted-foreground">
            Requires competitive Tier-1 exp.
            {!isOwner && <ChevronRight className="size-4" />}
          </div>
        </div>
      )}
    </div>
  );
}
