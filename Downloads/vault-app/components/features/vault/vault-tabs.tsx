"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

const TABS = ["Overview", "Games", "Competitive", "Content"] as const;
export type VaultTab = (typeof TABS)[number];

export function VaultTabs({
  username,
  active,
  onChange,
}: {
  username: string;
  active: VaultTab;
  onChange: (tab: VaultTab) => void;
}) {
  return (
    <div className="flex overflow-x-auto border-b border-border">
      {TABS.map((tab) =>
        tab === "Games" ? (
          <Link
            key={tab}
            href={`/vault/${username}/games`}
            className="shrink-0 border-b-2 border-transparent px-4 py-2.5 text-sm font-bold whitespace-nowrap text-muted-foreground hover:text-foreground"
          >
            {tab}
          </Link>
        ) : (
          <button
            key={tab}
            type="button"
            onClick={() => onChange(tab)}
            className={cn(
              "shrink-0 border-b-2 px-4 py-2.5 text-sm font-bold whitespace-nowrap transition-colors",
              active === tab
                ? "border-foreground text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            {tab}
          </button>
        )
      )}
    </div>
  );
}
