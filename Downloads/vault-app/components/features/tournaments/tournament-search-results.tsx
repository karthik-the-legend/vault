"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { X } from "lucide-react";
import { hubTournaments } from "@/lib/mock-data";
import { HubPageHeader } from "@/components/shared/hub-page-header";
import { HubTournamentCard } from "@/components/features/tournaments/hub-tournament-card";

export function TournamentSearchResults() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const q = query.trim().toLowerCase();

  const matched = hubTournaments.filter(
    (t) =>
      t.title.toLowerCase().includes(q) ||
      t.organizerName.toLowerCase().includes(q) ||
      t.game.toLowerCase().includes(q)
  );

  return (
    <div>
      <HubPageHeader
        title="TOURNAMENT SEARCH"
        subtitle="Active search and discovery matches for gaming query."
      />

      <div className="flex items-center justify-between rounded-md border border-border px-4 py-3">
        <span className="flex items-center gap-2 text-sm font-medium">
          <span className="size-2 rounded-full bg-foreground" />
          {query.toUpperCase()}
        </span>
        <button type="button" onClick={() => router.push("/tournaments")} aria-label="Clear search">
          <X className="size-4 text-muted-foreground" />
        </button>
      </div>

      <div className="mt-6 text-sm font-bold tracking-wide">
        MATCHING TOURNAMENTS ({matched.length} FOUND)
      </div>

      <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {matched.map((t) => (
          <HubTournamentCard key={t.id} tournament={t} />
        ))}
        {matched.length === 0 && (
          <div className="col-span-full rounded-lg border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
            No tournaments matched your search.
          </div>
        )}
      </div>
    </div>
  );
}
