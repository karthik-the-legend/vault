"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SlidersHorizontal, Search } from "lucide-react";
import { FilterTournamentsModal } from "@/components/features/tournaments/filter-tournaments-modal";

export function TournamentSearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);

  function submit() {
    if (query.trim()) {
      router.push(`/tournaments/search?q=${encodeURIComponent(query)}`);
    }
  }

  return (
    <div className="flex items-center gap-2">
      <div className="relative flex-1">
        <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          placeholder="Search tournaments"
          className="h-12 w-full rounded-md border border-border pr-16 pl-11 text-sm outline-none focus:border-foreground"
        />
        <span className="absolute top-1/2 right-4 -translate-y-1/2 rounded border border-border px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
          ⌘K
        </span>
      </div>
      <button
        type="button"
        onClick={() => setFilterOpen(true)}
        aria-label="Filter tournaments"
        className="flex size-12 shrink-0 items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground"
      >
        <SlidersHorizontal className="size-4" />
      </button>

      <FilterTournamentsModal open={filterOpen} onClose={() => setFilterOpen(false)} />
    </div>
  );
}
