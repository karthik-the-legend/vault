"use client";

import { useState } from "react";
import { Calendar, Users2 } from "lucide-react";
import {
  getHubTournamentBySlug,
  myTournamentHistory,
  myTournamentRegistrations,
} from "@/lib/mock-data";
import { HubPageHeader } from "@/components/shared/hub-page-header";
import { cn } from "@/lib/utils";

const TABS = ["Upcoming", "Ongoing", "Completed"] as const;
type Tab = (typeof TABS)[number];

export function MyTournamentsView() {
  const [tab, setTab] = useState<Tab>("Upcoming");

  return (
    <div>
      <HubPageHeader
        title="MY TOURNAMENTS"
        subtitle="Your competitive event history and active challenges."
      />

      <div className="flex gap-6 border-b border-border">
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={cn(
              "border-b-2 pb-2 text-sm font-bold tracking-wide transition-colors",
              tab === t
                ? "border-accent-blue text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            {t.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {tab === "Upcoming" && (
          <div>
            <div className="text-xs font-bold tracking-wide text-muted-foreground">
              ACTIVE REGISTRATIONS
            </div>
            <div className="mt-3 space-y-3">
              {myTournamentRegistrations.map((reg) => {
                const t = getHubTournamentBySlug(reg.tournamentId);
                return (
                  <div key={reg.id} className="rounded-lg border border-border bg-card p-4">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div className="text-xs font-semibold tracking-wide text-muted-foreground">
                        {t?.game}
                      </div>
                      <span className="rounded-md bg-accent-blue-tint px-2 py-0.5 text-[11px] font-bold text-accent-blue">
                        {reg.status}
                      </span>
                    </div>
                    <div className="text-base font-bold">{t?.title}</div>
                    <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-3">
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="size-3.5" />
                          {reg.startLabel}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Users2 className="size-3.5" />
                          Registered Team: {reg.registeredTeam}
                        </span>
                      </div>
                      <button className="shrink-0 rounded-md bg-foreground px-4 py-2 text-xs font-bold text-background">
                        VIEW EVENT LOBBY
                      </button>
                    </div>
                  </div>
                );
              })}
              {myTournamentRegistrations.length === 0 && (
                <div className="rounded-lg border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
                  No upcoming registrations yet.
                </div>
              )}
            </div>
          </div>
        )}

        {tab === "Ongoing" && (
          <div className="rounded-lg border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
            No tournaments in progress right now.
          </div>
        )}

        {tab === "Completed" && (
          <div>
            <div className="text-xs font-bold tracking-wide text-muted-foreground">
              PAST PERFORMANCE HISTORY
            </div>
            <div className="mt-3 space-y-3">
              {myTournamentHistory.map((hist) => (
                <div key={hist.id} className="rounded-lg border border-border bg-card p-4">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="text-xs font-semibold tracking-wide text-muted-foreground">
                      {hist.game}
                    </div>
                    <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-700">
                      {hist.placement}
                    </span>
                  </div>
                  <div className="text-base font-bold">{hist.name}</div>
                  <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-3">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span>{hist.completedLabel}</span>
                      <span>Prize Won: {hist.prizeWon}</span>
                    </div>
                    <button className="shrink-0 rounded-md border border-border px-4 py-2 text-xs font-bold">
                      VIEW BRACKET LOBBY
                    </button>
                  </div>
                </div>
              ))}
              {myTournamentHistory.length === 0 && (
                <div className="rounded-lg border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
                  No completed tournaments yet.
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
