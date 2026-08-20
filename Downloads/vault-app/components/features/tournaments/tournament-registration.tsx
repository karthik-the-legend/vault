"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { HubTournament } from "@/types";
import { currentUsername, getProfileByUsername } from "@/lib/mock-data";
import { VerifiedDot, VerifiedPill } from "@/components/shared/verified-badge";
import { cn } from "@/lib/utils";

export function TournamentRegistration({ tournament }: { tournament: HubTournament }) {
  const [format, setFormat] = useState<"solo" | "team">("solo");
  const [roster, setRoster] = useState("ZARX Alpha (Level 12 Squad)");
  const [submitted, setSubmitted] = useState(false);
  const profile = getProfileByUsername(currentUsername);

  if (submitted) {
    return (
      <div className="mx-auto max-w-md">
        <div className="rounded-lg border border-border bg-card p-10 text-center">
          <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <Check className="size-7" strokeWidth={3} />
          </span>
          <h1 className="mt-4 text-2xl font-black tracking-tight">
            YOU&apos;RE REGISTERED.
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Your roster credentials are locked and confirmed for the bracket. Prepare for combat.
          </p>

          <div className="mt-6 space-y-2 rounded-lg bg-secondary/60 p-4 text-left text-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-wide text-muted-foreground">
                TOURNAMENT
              </span>
              <span className="font-bold">{tournament.title}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-wide text-muted-foreground">
                ESPORTS GAME
              </span>
              <span className="font-bold">{tournament.game}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-wide text-muted-foreground">
                REGISTERED AS
              </span>
              <span className="flex items-center gap-1.5 font-bold">
                <span
                  className="flex size-4 items-center justify-center rounded-full text-[8px] text-white"
                  style={{ background: profile?.avatarGradient }}
                >
                  {profile?.displayName.charAt(0)}
                </span>
                {profile?.displayName.toUpperCase()}
              </span>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <Link
              href={`/tournaments/${tournament.slug}`}
              className="flex h-10 flex-1 items-center justify-center rounded-md bg-foreground text-sm font-bold text-background"
            >
              View Tournament Info
            </Link>
            <Link
              href="/tournaments/my"
              className="flex h-10 flex-1 items-center justify-center rounded-md border border-border text-sm font-bold"
            >
              View My Tournaments
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Link
        href={`/tournaments/${tournament.slug}`}
        className="text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        ← Back to Tournament Overview
      </Link>

      <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
        <div className="rounded-lg border border-border bg-card p-6">
          <h1 className="text-xl font-black tracking-tight">Register Player Profile</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Confirm your verified credentials from your secure VAULT ID.
          </p>

          <div className="mt-6">
            <label className="text-xs font-semibold tracking-wide text-muted-foreground">
              REGISTRATION FORMAT
            </label>
            <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => setFormat("solo")}
                className={cn(
                  "flex items-center gap-3 rounded-md border p-3 text-left",
                  format === "solo" ? "border-2 border-blue-600 bg-blue-50" : "border-border"
                )}
              >
                <span
                  className={cn(
                    "flex size-4 shrink-0 items-center justify-center rounded-full border-2",
                    format === "solo" ? "border-blue-600" : "border-border"
                  )}
                >
                  {format === "solo" && <span className="size-2 rounded-full bg-blue-600" />}
                </span>
                <span>
                  <span className="block text-sm font-bold">SOLO ENTRY</span>
                  <span className="block text-xs text-muted-foreground">Compete individually</span>
                </span>
              </button>
              <button
                type="button"
                onClick={() => setFormat("team")}
                className={cn(
                  "flex items-center gap-3 rounded-md border p-3 text-left",
                  format === "team" ? "border-2 border-blue-600 bg-blue-50" : "border-border"
                )}
              >
                <span
                  className={cn(
                    "flex size-4 shrink-0 items-center justify-center rounded-full border-2",
                    format === "team" ? "border-blue-600" : "border-border"
                  )}
                >
                  {format === "team" && <span className="size-2 rounded-full bg-blue-600" />}
                </span>
                <span>
                  <span className="block text-sm font-bold">TEAM SQUAD</span>
                  <span className="block text-xs text-muted-foreground">Register as a captain</span>
                </span>
              </button>
            </div>
          </div>

          <div className="mt-6">
            <label className="text-xs font-semibold tracking-wide text-muted-foreground">
              CHOOSE ROSTER / CLUBS (OPTIONAL)
            </label>
            <select
              value={roster}
              onChange={(e) => setRoster(e.target.value)}
              className="mt-1.5 h-11 w-full rounded-md border border-border bg-background px-3.5 text-sm outline-none focus:border-foreground"
            >
              <option>ZARX Alpha (Level 12 Squad)</option>
              <option>None — register independently</option>
            </select>
          </div>

          <button
            type="button"
            onClick={() => setSubmitted(true)}
            className="mt-6 h-12 w-full rounded-md bg-foreground text-sm font-bold text-background"
          >
            REGISTER SQUAD FOR {tournament.title.split(" ")[0]}
          </button>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            By registering, you lock your connected gaming credentials to the secure tournament bracket.
          </p>
        </div>

        <div className="h-fit rounded-lg border border-border bg-card p-5">
          <div className="flex items-center justify-between">
            <div className="text-xs font-bold tracking-wide text-muted-foreground">
              YOUR VAULT ID
            </div>
            <VerifiedPill />
          </div>
          <div className="mt-3 flex items-center gap-3">
            <span
              className="flex size-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
              style={{ background: profile?.avatarGradient }}
            >
              {profile?.displayName.charAt(0)}
            </span>
            <div>
              <div className="flex items-center gap-1 text-sm font-bold">
                {profile?.displayName.toUpperCase()}
                {profile?.verified && <VerifiedDot />}
              </div>
              <div className="text-xs text-muted-foreground">@{profile?.username}</div>
            </div>
          </div>

          <div className="mt-4 space-y-3 border-t border-border pt-4 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Default Game</span>
              <span className="font-bold">BGMI (Free Fire Max Mode)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">League Rank</span>
              <span className="font-bold text-blue-600">CONQUEROR</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Squad Role</span>
              <span className="font-bold">In Game Leader (IGL)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Reputation</span>
              <span className="font-bold text-emerald-600">98% Elite Trust</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
