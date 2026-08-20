"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { GAMES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const FORMATS = ["Single Elimination", "Double Elimination", "Round Robin", "Swiss"];

function Toggle({
  label,
  hint,
  checked,
  onChange,
}: {
  label: string;
  hint: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between rounded-md border border-border p-3">
      <div>
        <div className="text-sm font-bold">{label}</div>
        <div className="text-xs text-muted-foreground">{hint}</div>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={cn(
          "flex h-6 w-11 shrink-0 items-center rounded-full px-0.5 transition-colors",
          checked ? "justify-end bg-foreground" : "justify-start bg-secondary"
        )}
      >
        <span className="size-5 rounded-full bg-background shadow" />
      </button>
    </div>
  );
}

export function CreateTournamentForm({ username }: { username: string }) {
  const router = useRouter();
  const [online, setOnline] = useState(true);
  const [instantReg, setInstantReg] = useState(true);

  function submit() {
    router.push(`/dashboard/${username}/tournaments`);
  }

  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-xl font-black tracking-tight">
            Create New Tournament
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Launch a competitive gaming bracket directly onto the VAULT
            discover feed
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={submit}
            className="rounded-md border border-border px-4 py-2 text-sm font-bold"
          >
            Save as Draft
          </button>
          <button
            type="button"
            onClick={submit}
            className="rounded-md bg-foreground px-4 py-2 text-sm font-bold text-background"
          >
            Publish Tournament
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <div>
            <label className="text-xs font-semibold tracking-wide">
              TOURNAMENT NAME
            </label>
            <input
              placeholder="e.g. ZARX Valorant Pro League"
              className="mt-1.5 h-11 w-full rounded-md border border-border px-3.5 text-sm outline-none focus:border-foreground"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-semibold tracking-wide">
                GAME TITLE
              </label>
              <select className="mt-1.5 h-11 w-full rounded-md border border-border bg-background px-3.5 text-sm outline-none focus:border-foreground">
                <option>Select Game</option>
                {GAMES.map((g) => (
                  <option key={g.id}>{g.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold tracking-wide">
                TOURNAMENT FORMAT
              </label>
              <select className="mt-1.5 h-11 w-full rounded-md border border-border bg-background px-3.5 text-sm outline-none focus:border-foreground">
                {FORMATS.map((f) => (
                  <option key={f}>{f}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Toggle
              label="Online Tournament"
              hint="Happens over discord / server"
              checked={online}
              onChange={setOnline}
            />
            <Toggle
              label="Instant Registration"
              hint="Allow immediate signups"
              checked={instantReg}
              onChange={setInstantReg}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-semibold tracking-wide">
                START DATE
              </label>
              <input
                type="date"
                className="mt-1.5 h-11 w-full rounded-md border border-border px-3.5 text-sm outline-none focus:border-foreground"
              />
            </div>
            <div>
              <label className="text-xs font-semibold tracking-wide">
                REGISTRATION DEADLINE
              </label>
              <input
                type="date"
                className="mt-1.5 h-11 w-full rounded-md border border-border px-3.5 text-sm outline-none focus:border-foreground"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-semibold tracking-wide">
                PRIZE POOL (₹)
              </label>
              <input
                placeholder="₹ 0.00"
                className="mt-1.5 h-11 w-full rounded-md border border-border px-3.5 text-sm outline-none focus:border-foreground"
              />
            </div>
            <div>
              <label className="text-xs font-semibold tracking-wide">
                MAX PLAYERS/TEAMS
              </label>
              <input
                placeholder="e.g. 128"
                className="mt-1.5 h-11 w-full rounded-md border border-border px-3.5 text-sm outline-none focus:border-foreground"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold tracking-wide">
              DESCRIPTION
            </label>
            <textarea
              rows={3}
              placeholder="Write a compelling summary of the tournament to attract players..."
              className="mt-1.5 w-full resize-none rounded-md border border-border px-3.5 py-2.5 text-sm outline-none focus:border-foreground"
            />
          </div>

          <div>
            <label className="text-xs font-semibold tracking-wide">
              TOURNAMENT RULES &amp; REGULATIONS
            </label>
            <textarea
              rows={3}
              placeholder="Outline guidelines, eligibility, map veto rules, and schedule policies..."
              className="mt-1.5 w-full resize-none rounded-md border border-border px-3.5 py-2.5 text-sm outline-none focus:border-foreground"
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold tracking-wide">
            TOURNAMENT COVER IMAGE
          </label>
          <div className="mt-1.5 flex aspect-video flex-col items-center justify-center gap-2 rounded-md border border-dashed border-border text-center">
            <span className="flex size-9 items-center justify-center rounded-full bg-secondary text-muted-foreground">
              <ImageIcon className="size-4" />
            </span>
            <div className="text-sm font-bold">Drag &amp; drop file or browse</div>
            <div className="text-xs text-muted-foreground">
              Recommended ratio 16:9 (1200x675px)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
