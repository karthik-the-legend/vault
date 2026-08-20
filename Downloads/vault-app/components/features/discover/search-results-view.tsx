"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { communities, discoverTournaments, profiles } from "@/lib/mock-data";
import { AccountType } from "@/types";
import { SearchBar } from "@/components/features/discover/search-bar";
import { DiscoverResultCard } from "@/components/features/discover/discover-result-card";
import { TournamentResultCard } from "@/components/features/discover/tournament-result-card";
import { CommunityCard } from "@/components/features/discover/community-card";
import { FiltersSidebar, FilterField } from "@/components/features/discover/filters-sidebar";

type Category =
  | "ALL"
  | "GAMER"
  | "ESPORTS_CLUB"
  | "ORGANIZER"
  | "TOURNAMENTS"
  | "COMMUNITIES";

const TABS: { value: Category; label: string }[] = [
  { value: "ALL", label: "All" },
  { value: "GAMER", label: "Gamers" },
  { value: "ESPORTS_CLUB", label: "Clubs" },
  { value: "ORGANIZER", label: "Organizers" },
  { value: "TOURNAMENTS", label: "Tournaments" },
  { value: "COMMUNITIES", label: "Communities" },
];

const FILTER_CONFIG: Record<Category, { fields: FilterField[]; toggleLabel?: string }> = {
  ALL: { fields: [] },
  GAMER: {
    fields: [
      { label: "Game", options: ["BGMI", "Valorant", "COD Mobile", "Free Fire"] },
      { label: "Rank", options: ["Conqueror", "Ace", "Diamond", "Platinum"] },
      { label: "Role", options: ["IGL", "Assaulter", "Support", "Sniper"] },
      { label: "Region", options: ["India", "South Asia", "Global"] },
      { label: "Team Status", options: ["Looking for Team", "In a Team", "Any"] },
    ],
    toggleLabel: "Verified Profiles Only",
  },
  ESPORTS_CLUB: {
    fields: [
      { label: "Game", options: ["Valorant", "BGMI", "Free Fire"] },
      { label: "Region", options: ["South Asia", "India", "Global"] },
      { label: "Active Teams", options: ["2+ Teams", "5+ Teams", "Any"] },
    ],
    toggleLabel: "Verified Clubs Only",
  },
  ORGANIZER: {
    fields: [
      { label: "Game", options: ["All Games", "BGMI", "Valorant"] },
      { label: "Region", options: ["Asia Pacific", "India", "Global"] },
      { label: "Tournament Type", options: ["Online Leagues", "LAN Events", "Any"] },
    ],
    toggleLabel: "Verified Organizers Only",
  },
  TOURNAMENTS: {
    fields: [
      { label: "Game", options: ["All Games", "BGMI", "Valorant", "COD Mobile"] },
      { label: "Region", options: ["India", "South Asia", "Global"] },
      { label: "Prize Pool", options: ["₹50k and above", "₹1L and above", "Any"] },
      { label: "Status", options: ["Registration Open", "Upcoming", "Ongoing"] },
    ],
    toggleLabel: "Verified Organizers Only",
  },
  COMMUNITIES: { fields: [] },
};

export function SearchResultsView() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const initialCategory = (searchParams.get("category") as Category) ?? "ALL";

  const [category, setCategory] = useState<Category>(initialCategory);
  const query = initialQuery;

  function changeCategory(next: Category) {
    setCategory(next);
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    params.set("category", next);
    router.replace(`/discover/search?${params.toString()}`);
  }

  const q = query.trim().toLowerCase();

  const matchedProfiles = profiles.filter((p) => {
    const matchesQuery =
      !q ||
      p.displayName.toLowerCase().includes(q) ||
      p.username.toLowerCase().includes(q) ||
      p.shortTag.toLowerCase().includes(q);
    const matchesCategory =
      category === "ALL" ||
      (category !== "TOURNAMENTS" && category !== "COMMUNITIES" && p.type === (category as AccountType));
    return matchesQuery && matchesCategory;
  });

  const matchedTournaments =
    category !== "ALL" && category !== "TOURNAMENTS"
      ? []
      : discoverTournaments.filter(
          (t) => !q || t.name.toLowerCase().includes(q) || t.game.toLowerCase().includes(q)
        );

  const matchedCommunities =
    category !== "ALL" && category !== "COMMUNITIES"
      ? []
      : communities.filter((c) => !q || c.name.toLowerCase().includes(q));

  const totalResults =
    matchedProfiles.length + matchedTournaments.length + matchedCommunities.length;

  const categoryLabel = TABS.find((t) => t.value === category)?.label ?? "Results";
  const filterConfig = FILTER_CONFIG[category];
  const showFilters = filterConfig.fields.length > 0;

  return (
    <div>
      <div className="mx-auto max-w-2xl">
        <SearchBar initialValue={query} />
      </div>

      <div className="mt-4 flex justify-center overflow-x-auto">
        <div className="flex rounded-md border border-border p-1">
          {TABS.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => changeCategory(tab.value)}
              className={cn(
                "shrink-0 rounded-sm px-3 py-1.5 text-xs font-bold whitespace-nowrap tracking-wide transition-colors",
                category === tab.value
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {tab.label.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {category === "ALL" && query && (
        <h1 className="mt-6 text-sm font-bold tracking-wide">
          SEARCH RESULTS FOR &apos;{query.toUpperCase()}&apos;
        </h1>
      )}
      {category !== "ALL" && (
        <div className="mt-6 text-sm text-muted-foreground">
          {totalResults} {categoryLabel} found{showFilters ? " matching filters" : ""}
        </div>
      )}

      {totalResults === 0 ? (
        <div className="mt-10 flex flex-col items-center rounded-lg border border-border bg-card p-12 text-center">
          <div className="text-lg font-bold">No Results</div>
          <p className="mt-1 text-sm text-muted-foreground">
            We couldn&apos;t find anyone matching that search.
          </p>
          <button
            type="button"
            onClick={() => router.push("/discover")}
            className="mt-3 text-sm font-bold text-blue-600 hover:underline"
          >
            Try another search
          </button>
        </div>
      ) : (
        <div className="mt-6 flex flex-col gap-6 lg:flex-row">
          {showFilters && (
            <FiltersSidebar
              fields={filterConfig.fields}
              toggleLabel={filterConfig.toggleLabel}
            />
          )}
          <div
            className={cn(
              "flex-1 gap-4",
              category === "TOURNAMENTS" || category === "COMMUNITIES"
                ? "grid grid-cols-1 sm:grid-cols-2"
                : "flex flex-col"
            )}
          >
            {matchedProfiles.map((p) => (
              <DiscoverResultCard key={p.id} profile={p} />
            ))}
            {matchedTournaments.map((t) => (
              <TournamentResultCard
                key={t.id}
                tournament={t}
                showCover={category === "TOURNAMENTS"}
              />
            ))}
            {matchedCommunities.map((c) => (
              <CommunityCard key={c.id} community={c} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
