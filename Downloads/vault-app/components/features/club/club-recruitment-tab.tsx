import { RecruitmentOpportunity } from "@/types";
import { EmptyState } from "@/components/shared/empty-state";
import { Briefcase } from "lucide-react";

export function ClubRecruitmentTab({
  opportunities,
}: {
  opportunities: RecruitmentOpportunity[];
}) {
  if (opportunities.length === 0) {
    return (
      <EmptyState
        icon={Briefcase}
        title="No open positions — create one."
        description="Keep your digital headquarters updated."
        ctaLabel="Open Recruitment"
      />
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="text-sm font-bold">Open Opportunities</div>
        <div className="text-xs text-muted-foreground">
          {opportunities.length} Active Listings
        </div>
      </div>
      <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {opportunities.map((opp) => (
          <div key={opp.id} className="rounded-lg border border-border bg-card p-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm font-bold">{opp.title}</div>
                <div className="text-xs text-muted-foreground">
                  {opp.region}
                </div>
              </div>
              <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-[10px] font-bold tracking-wide text-emerald-700">
                {opp.status}
              </span>
            </div>
            <div className="mt-3 flex gap-6 border-t border-border pt-3 text-xs">
              <div>
                <div className="text-[10px] font-semibold tracking-wide text-muted-foreground">
                  REQUIRED RANK
                </div>
                <div className="font-bold">{opp.requiredRank}</div>
              </div>
              <div>
                <div className="text-[10px] font-semibold tracking-wide text-muted-foreground">
                  EXPERIENCE
                </div>
                <div className="font-bold">{opp.experience}</div>
              </div>
            </div>
            <button
              type="button"
              className="mt-3 h-9 w-full rounded-md bg-foreground text-xs font-bold text-background"
            >
              Apply via VAULT
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
