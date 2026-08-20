"use client";

import { useState } from "react";
import { ClubTeam } from "@/types";
import { cn } from "@/lib/utils";
import { EmptyState } from "@/components/shared/empty-state";
import { Shield } from "lucide-react";

export function TeamsManager({ teams }: { teams: ClubTeam[] }) {
  const [selectedId, setSelectedId] = useState(teams[0]?.id);
  const selected = teams.find((t) => t.id === selectedId);

  if (teams.length === 0) {
    return (
      <EmptyState
        icon={Shield}
        title="Create your first team"
        description="Keep your digital headquarters updated."
        ctaLabel="Build Team Profile"
      />
    );
  }

  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-xl font-black tracking-tight">Active Teams</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage rosters, game IDs and assignments.
          </p>
        </div>
        <button className="shrink-0 rounded-md bg-foreground px-4 py-2 text-sm font-bold text-background">
          Create Team
        </button>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {teams.map((team) => (
          <button
            key={team.id}
            type="button"
            onClick={() => setSelectedId(team.id)}
            className={cn(
              "flex items-center justify-between gap-3 rounded-lg border p-4 text-left transition-colors",
              selectedId === team.id
                ? "border-2 border-foreground"
                : "border-border hover:border-foreground/40"
            )}
          >
            <div>
              <div className="text-sm font-bold">{team.name}</div>
              <div className="text-xs text-muted-foreground">
                {team.playersCount} Players Registered
              </div>
            </div>
            <span className="shrink-0 rounded-md border border-border px-3 py-1.5 text-xs font-bold">
              Edit
            </span>
          </button>
        ))}
      </div>

      {selected && (
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold">{selected.name} Roster</span>
              {selected.statusBadge === "CHAMPION" && (
                <span className="rounded-md bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-700">
                  PRIMARY
                </span>
              )}
            </div>
            <button className="rounded-md border border-border px-3.5 py-1.5 text-xs font-bold">
              + Add Player
            </button>
          </div>

          <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {selected.roster.map((player) => (
              <div
                key={player.id}
                className="rounded-lg border border-border bg-card p-4"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="text-sm font-bold">{player.name}</div>
                    <div className="text-xs text-muted-foreground">
                      @{player.username}
                    </div>
                  </div>
                  <span className="shrink-0 rounded-md bg-secondary px-2 py-0.5 text-[10px] font-bold tracking-wide text-secondary-foreground">
                    {player.role.toUpperCase()}
                  </span>
                </div>
                <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
                  <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600">
                    <span className="size-1.5 rounded-full bg-emerald-500" />
                    Active
                  </span>
                  <button className="rounded-md border border-border px-3 py-1 text-xs font-bold">
                    Manage
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
