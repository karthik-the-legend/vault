"use client";

import { useState } from "react";
import { Applicant, RecruitmentOpportunity } from "@/types";
import { cn } from "@/lib/utils";
import { VerifiedPill } from "@/components/shared/verified-badge";
import { EmptyState } from "@/components/shared/empty-state";
import { UserPlus } from "lucide-react";

export function RecruitmentManager({
  opportunities,
  applicantsByOpportunity,
}: {
  opportunities: RecruitmentOpportunity[];
  applicantsByOpportunity: Record<string, Applicant[]>;
}) {
  const [selectedId, setSelectedId] = useState(opportunities[0]?.id);
  const selected = opportunities.find((o) => o.id === selectedId);
  const applicants = selected ? applicantsByOpportunity[selected.id] ?? [] : [];

  if (opportunities.length === 0) {
    return (
      <EmptyState
        icon={UserPlus}
        title="No open positions — create one."
        description="Keep your digital headquarters updated."
        ctaLabel="Open Recruitment"
      />
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-black tracking-tight">
            Recruitment Station
          </h1>
          <VerifiedPill />
        </div>
        <button className="shrink-0 rounded-md bg-foreground px-4 py-2 text-sm font-bold text-background">
          Create Position
        </button>
      </div>

      <div className="mt-5 text-sm font-bold">Active Opportunities</div>
      <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {opportunities.map((opp) => (
          <button
            key={opp.id}
            type="button"
            onClick={() => setSelectedId(opp.id)}
            className={cn(
              "flex items-center justify-between gap-3 rounded-lg border p-4 text-left transition-colors",
              selectedId === opp.id
                ? "border-2 border-foreground"
                : "border-border hover:border-foreground/40"
            )}
          >
            <div>
              <div className="text-sm font-bold">{opp.title}</div>
              <div className="text-xs text-muted-foreground">
                <span className="font-semibold text-emerald-600">
                  {opp.status}
                </span>{" "}
                · {opp.applicantsCount} Applications
              </div>
            </div>
            <span className="shrink-0 rounded-md border border-border px-3 py-1.5 text-xs font-bold">
              Manage
            </span>
          </button>
        ))}
      </div>

      {selected && (
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-bold">
                Applicants: {selected.title}
              </div>
              <p className="text-xs text-muted-foreground">
                Shortlist or contact candidates directly.
              </p>
            </div>
            <span className="text-xs text-muted-foreground">
              Sorted by highest rank
            </span>
          </div>

          <div className="mt-3 divide-y divide-border rounded-lg border border-border bg-card">
            {applicants.map((a) => (
              <div
                key={a.id}
                className="flex flex-wrap items-center justify-between gap-3 p-4"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold">
                    {a.name.charAt(0)}
                  </span>
                  <div>
                    <div className="flex items-center gap-1.5 text-sm font-bold">
                      {a.name}
                      {a.verified && <VerifiedPill />}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {a.appliedFor} ·{" "}
                      <span className="font-semibold text-accent-blue">
                        {a.verifiedRank}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="rounded-md border border-border px-3 py-1.5 text-xs font-bold">
                    View VAULT
                  </button>
                  <button className="rounded-md border border-border px-3 py-1.5 text-xs font-bold text-accent-blue">
                    Shortlist
                  </button>
                  <button className="rounded-md bg-foreground px-3 py-1.5 text-xs font-bold text-background">
                    Contact
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
