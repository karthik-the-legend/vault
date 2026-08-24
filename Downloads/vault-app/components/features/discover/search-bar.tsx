"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { discoverTournaments, profiles } from "@/lib/mock-data";
import { VerifiedDot } from "@/components/shared/verified-badge";

const CATEGORY_LABEL: Record<string, string> = {
  GAMER: "Gamers",
  ESPORTS_CLUB: "Esports Clubs",
  ORGANIZER: "League Organizers",
};

export function SearchBar({
  initialValue = "",
  autoFocus = false,
}: {
  initialValue?: string;
  autoFocus?: boolean;
}) {
  const router = useRouter();
  const [query, setQuery] = useState(initialValue);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const q = query.trim().toLowerCase();
  const matchedProfiles = q
    ? profiles.filter(
        (p) =>
          p.displayName.toLowerCase().includes(q) ||
          p.username.toLowerCase().includes(q)
      )
    : [];
  const matchedTournaments = q
    ? discoverTournaments.filter((t) => t.name.toLowerCase().includes(q))
    : [];

  const grouped: Record<string, typeof profiles> = {};
  for (const p of matchedProfiles) {
    grouped[p.type] = grouped[p.type] ?? [];
    grouped[p.type].push(p);
  }

  function goToResults() {
    router.push(`/discover/search?q=${encodeURIComponent(query)}`);
    setOpen(false);
  }

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative">
        <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          value={query}
          autoFocus={autoFocus}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => query && setOpen(true)}
          onKeyDown={(e) => e.key === "Enter" && goToResults()}
          placeholder="Search players, clubs, tournaments & more"
          className="h-12 w-full rounded-md border border-border pr-10 pl-11 text-sm outline-none focus:border-foreground"
        />
        {query && (
          <button
            type="button"
            aria-label="Clear search"
            onClick={() => {
              setQuery("");
              setOpen(false);
            }}
            className="absolute top-1/2 right-4 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        )}
      </div>

      {open && q && (
        <div className="absolute z-30 mt-2 w-full rounded-lg border border-border bg-card p-3 shadow-lg">
          {matchedProfiles.length === 0 && matchedTournaments.length === 0 ? (
            <div className="p-3 text-sm text-muted-foreground">
              No matches for &quot;{query}&quot;
            </div>
          ) : (
            <>
              {Object.entries(grouped).map(([type, items]) => (
                <div key={type} className="mb-3 last:mb-0">
                  <div className="px-1 text-[10px] font-bold tracking-wide text-muted-foreground">
                    {CATEGORY_LABEL[type]?.toUpperCase()}
                  </div>
                  <div className="mt-1 space-y-0.5">
                    {items.slice(0, 3).map((p) => (
                      <Link
                        key={p.id}
                        href={`/vault/${p.username}`}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm hover:bg-secondary"
                      >
                        <span className="font-bold">{p.displayName}</span>
                        {p.verified && <VerifiedDot />}
                        <span className="text-muted-foreground">
                          @{p.username}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {matchedTournaments.length > 0 && (
                <div className="mb-1">
                  <div className="px-1 text-[10px] font-bold tracking-wide text-muted-foreground">
                    TOURNAMENTS
                  </div>
                  <div className="mt-1 space-y-0.5">
                    {matchedTournaments.slice(0, 3).map((t) => (
                      <div
                        key={t.id}
                        className="rounded-md px-2 py-1.5 text-sm hover:bg-secondary"
                      >
                        {t.name}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <button
                type="button"
                onClick={goToResults}
                className="mt-2 flex items-center gap-1 border-t border-border px-2 pt-2 text-sm font-bold text-accent-blue hover:underline"
              >
                View all results →
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
