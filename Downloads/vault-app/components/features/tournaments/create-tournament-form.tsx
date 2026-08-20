"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { GAMES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { HubPageHeader } from "@/components/shared/hub-page-header";

const FORMATS = ["Online Battle Royale", "Online Elimination", "LAN Bracket"];

export function HubCreateTournamentForm() {
  const router = useRouter();
  const [venue, setVenue] = useState<"ONLINE" | "LAN">("ONLINE");

  return (
    <div>
      <HubPageHeader
        title="CREATE TOURNAMENT"
        subtitle="MVP Form console for certified League Organizers."
      />

      <div className="max-w-xl rounded-lg border border-border bg-card p-6">
        <div className="text-lg font-black tracking-tight">Tournament Details</div>
        <p className="mt-1 text-sm text-muted-foreground">
          Publish and broadcast competitive rules directly into the VAULT tournament grid.
        </p>

        <div className="mt-6 space-y-4 border-t border-border pt-5">
          <div>
            <label className="text-xs font-semibold tracking-wide text-muted-foreground">
              TOURNAMENT NAME
            </label>
            <input
              placeholder="e.g. Zarx Arena Masters"
              className="mt-1.5 h-11 w-full rounded-md border border-border px-3.5 text-sm outline-none focus:border-foreground"
            />
          </div>

          <div>
            <label className="text-xs font-semibold tracking-wide text-muted-foreground">
              ESPORTS GAME
            </label>
            <select className="mt-1.5 h-11 w-full rounded-md border border-border bg-background px-3.5 text-sm outline-none focus:border-foreground">
              <option value="">Select Game...</option>
              {GAMES.map((g) => (
                <option key={g.id}>{g.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold tracking-wide text-muted-foreground">
              TOURNAMENT START DATE
            </label>
            <input
              type="date"
              className="mt-1.5 h-11 w-full rounded-md border border-border px-3.5 text-sm outline-none focus:border-foreground"
            />
          </div>

          <div>
            <label className="text-xs font-semibold tracking-wide text-muted-foreground">
              MATCH FORMAT
            </label>
            <select className="mt-1.5 h-11 w-full rounded-md border border-border bg-background px-3.5 text-sm outline-none focus:border-foreground">
              <option value="">Select Format...</option>
              {FORMATS.map((f) => (
                <option key={f}>{f}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold tracking-wide text-muted-foreground">
              TOTAL PRIZE POOL (INR)
            </label>
            <input
              placeholder="₹1,00,000"
              className="mt-1.5 h-11 w-full rounded-md border border-border px-3.5 text-sm outline-none focus:border-foreground"
            />
          </div>

          <div>
            <label className="text-xs font-semibold tracking-wide text-muted-foreground">
              REGISTRATION DEADLINE
            </label>
            <input
              type="date"
              className="mt-1.5 h-11 w-full rounded-md border border-border px-3.5 text-sm outline-none focus:border-foreground"
            />
          </div>

          <div>
            <label className="text-xs font-semibold tracking-wide text-muted-foreground">
              MAXIMUM SQUADS
            </label>
            <input
              placeholder="200"
              className="mt-1.5 h-11 w-full rounded-md border border-border px-3.5 text-sm outline-none focus:border-foreground"
            />
          </div>

          <div>
            <label className="text-xs font-semibold tracking-wide text-muted-foreground">
              VENUE LOCATION TYPE
            </label>
            <div className="mt-1.5 flex rounded-md border border-border p-1">
              {(["ONLINE", "LAN / OFFLINE"] as const).map((v) => {
                const value = v.startsWith("ONLINE") ? "ONLINE" : "LAN";
                return (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVenue(value)}
                    className={cn(
                      "flex-1 rounded-sm py-2 text-xs font-bold",
                      venue === value ? "bg-foreground text-background" : "text-muted-foreground"
                    )}
                  >
                    {v}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold tracking-wide text-muted-foreground">
              RULES &amp; DESCRIPTION
            </label>
            <textarea
              rows={4}
              placeholder="Enter tournament guidelines, eligibility ranks, schedule phases, discord contact and server connection lobby rules..."
              className="mt-1.5 w-full resize-none rounded-md border border-border px-3.5 py-2.5 text-sm outline-none focus:border-foreground"
            />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
          <p className="max-w-[220px] text-xs text-muted-foreground">
            By publishing, this tournament immediately broadcasts live across the VAULT esports directory.
          </p>
          <button
            type="button"
            onClick={() => router.push("/tournaments")}
            className="shrink-0 rounded-md bg-foreground px-6 py-2.5 text-sm font-bold text-background"
          >
            PUBLISH TOURNAMENT
          </button>
        </div>
      </div>
    </div>
  );
}
