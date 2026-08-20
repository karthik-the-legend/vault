"use client";

import { useState } from "react";
import { getProfileById } from "@/lib/mock-data";
import { AccountType, NetworkEntry } from "@/types";
import { cn } from "@/lib/utils";
import { NetworkListRow } from "@/components/features/discover/network-list-row";

const TYPE_TABS: { label: string; value: AccountType | "ALL" }[] = [
  { label: "All", value: "ALL" },
  { label: "Gamers", value: "GAMER" },
  { label: "Clubs", value: "ESPORTS_CLUB" },
  { label: "Organizers", value: "ORGANIZER" },
];

export function NetworkListPage({
  title,
  countLabel,
  description,
  entries,
  showTypeTabs = false,
}: {
  title: string;
  countLabel: string;
  description?: string;
  entries: NetworkEntry[];
  showTypeTabs?: boolean;
}) {
  const [typeFilter, setTypeFilter] = useState<AccountType | "ALL">("ALL");

  const resolved = entries
    .map((e) => ({ entry: e, profile: getProfileById(e.profileId) }))
    .filter((x): x is { entry: NetworkEntry; profile: NonNullable<typeof x.profile> } => !!x.profile)
    .filter((x) => typeFilter === "ALL" || x.profile.type === typeFilter);

  return (
    <div>
      <h1 className="text-2xl font-black tracking-tight">{title}</h1>
      <p className="mt-1 text-sm text-muted-foreground">{countLabel}</p>
      {description && (
        <p className="mt-1 max-w-xl text-sm text-muted-foreground">
          {description}
        </p>
      )}

      {showTypeTabs && (
        <div className="mt-4 flex gap-5 border-b border-border">
          {TYPE_TABS.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => setTypeFilter(tab.value)}
              className={cn(
                "border-b-2 pb-2 text-sm font-bold tracking-wide transition-colors",
                typeFilter === tab.value
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              {tab.label.toUpperCase()}
            </button>
          ))}
        </div>
      )}

      <div className="mt-4 divide-y divide-border rounded-lg border border-border bg-card">
        {resolved.map(({ entry, profile }) => (
          <NetworkListRow key={entry.id} profile={profile} relationship={entry.relationship} />
        ))}
        {resolved.length === 0 && (
          <div className="p-8 text-center text-sm text-muted-foreground">
            Nothing to show here yet.
          </div>
        )}
      </div>
    </div>
  );
}
