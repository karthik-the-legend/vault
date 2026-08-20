"use client";

import { useState } from "react";
import { Filter, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function FilterTournamentsModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [venue, setVenue] = useState<"ONLINE" | "OFFLINE">("ONLINE");

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-lg border border-border bg-card p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-base font-bold">
            <Filter className="size-4" />
            Filter Tournaments
          </div>
          <button type="button" onClick={onClose} aria-label="Close">
            <X className="size-4 text-muted-foreground" />
          </button>
        </div>

        <div className="mt-5 space-y-4 border-t border-border pt-5">
          <div>
            <label className="text-[11px] font-semibold tracking-wide text-muted-foreground">
              ESPORTS GAME
            </label>
            <select className="mt-1.5 h-10 w-full rounded-md border border-border bg-background px-3 text-sm outline-none focus:border-foreground">
              <option>Free Fire Max</option>
              <option>BGMI</option>
              <option>Valorant</option>
              <option>COD Mobile</option>
            </select>
          </div>

          <div>
            <label className="text-[11px] font-semibold tracking-wide text-muted-foreground">
              START DATE
            </label>
            <input
              readOnly
              value="Aug 15 - Aug 30, 2026"
              className="mt-1.5 h-10 w-full rounded-md border border-border px-3 text-sm text-muted-foreground outline-none"
            />
          </div>

          <div>
            <label className="text-[11px] font-semibold tracking-wide text-muted-foreground">
              MATCH FORMAT
            </label>
            <select className="mt-1.5 h-10 w-full rounded-md border border-border bg-background px-3 text-sm outline-none focus:border-foreground">
              <option>Online Battle Royale</option>
              <option>Online Elimination</option>
              <option>LAN Bracket</option>
            </select>
          </div>

          <div>
            <label className="text-[11px] font-semibold tracking-wide text-muted-foreground">
              VENUE LOCATION
            </label>
            <div className="mt-1.5 flex rounded-md border border-border p-1">
              {(["ONLINE", "OFFLINE"] as const).map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setVenue(v)}
                  className={cn(
                    "flex-1 rounded-sm py-1.5 text-xs font-bold",
                    venue === v ? "bg-foreground text-background" : "text-muted-foreground"
                  )}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-[11px] font-semibold tracking-wide text-muted-foreground">
              PRIZE POOL RANGE (INR)
            </label>
            <input
              readOnly
              value="₹1,00,000 - ₹5,00,000"
              className="mt-1.5 h-10 w-full rounded-md border border-border px-3 text-sm text-muted-foreground outline-none"
            />
          </div>

          <div>
            <label className="text-[11px] font-semibold tracking-wide text-muted-foreground">
              REGISTRATION STATUS
            </label>
            <select className="mt-1.5 h-10 w-full rounded-md border border-border bg-background px-3 text-sm outline-none focus:border-foreground">
              <option>Registration Open</option>
              <option>Registration Closed</option>
              <option>Ongoing</option>
              <option>Completed</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-4 border-t border-border pt-4">
          <button type="button" onClick={onClose} className="text-sm font-medium text-muted-foreground">
            Reset Filters
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md bg-foreground px-5 py-2 text-sm font-bold text-background"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}
