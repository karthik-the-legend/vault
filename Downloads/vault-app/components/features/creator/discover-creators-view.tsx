"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { CreatorDirectoryEntry } from "@/types";
import { getProfileByUsername } from "@/lib/mock-data";
import { VerifiedDot } from "@/components/shared/verified-badge";

export function DiscoverCreatorsView({
  entries,
  trendingGames,
}: {
  entries: CreatorDirectoryEntry[];
  trendingGames: string[];
}) {
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const filtered = entries.filter((entry) => {
    if (!q) return true;
    const profile = getProfileByUsername(entry.username);
    return (
      profile?.displayName.toLowerCase().includes(q) ||
      entry.gamePosition.toLowerCase().includes(q) ||
      entry.creatorTitle.toLowerCase().includes(q)
    );
  });

  return (
    <div>
      <h1 className="text-2xl font-black tracking-tight">Discover Creators</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Connect with verified players, explore high-fidelity vaults, and link squads.
      </p>

      <div className="mt-6 flex gap-2">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search creators by tag, team name, game or role..."
            className="h-11 w-full rounded-md border border-border pl-10 text-sm outline-none focus:border-foreground"
          />
        </div>
        <button className="h-11 shrink-0 rounded-md bg-foreground px-5 text-sm font-bold text-background">
          Search
        </button>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((entry) => {
          const profile = getProfileByUsername(entry.username);
          if (!profile) return null;
          return (
            <div key={entry.username} className="rounded-lg border border-border bg-card p-5 text-center">
              <Link href={`/creator-zone/creators/${entry.username}`}>
                <span
                  className="mx-auto flex size-16 items-center justify-center rounded-full text-xl font-bold text-white"
                  style={{ background: profile.avatarGradient }}
                >
                  {profile.displayName.charAt(0)}
                </span>
                <div className="mt-3 flex items-center justify-center gap-1 text-sm font-bold">
                  {profile.displayName.toUpperCase()}
                  {profile.verified && <VerifiedDot />}
                </div>
              </Link>
              <div className="text-xs text-muted-foreground">{entry.creatorTitle}</div>
              <div className="mt-1 text-sm font-bold">{entry.gamePosition}</div>
              <div className="mt-2 text-sm text-muted-foreground">
                {entry.followers} Followers
              </div>
              <button className="mt-3 h-9 w-full rounded-md border border-border text-sm font-bold">
                Follow
              </button>
            </div>
          );
        })}
        {filtered.length === 0 && (
          <div className="col-span-full rounded-lg border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
            No creators matched your search.
          </div>
        )}
      </div>

      <div className="mt-10">
        <div className="text-sm font-bold">Trending Games</div>
        <div className="mt-3 flex flex-wrap gap-2">
          {trendingGames.map((game) => (
            <span
              key={game}
              className="rounded-full border border-border px-4 py-1.5 text-sm font-semibold text-muted-foreground"
            >
              {game}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
