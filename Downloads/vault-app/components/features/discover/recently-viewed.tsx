"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { RecentlyViewedEntry } from "@/types";

export function RecentlyViewed({ items }: { items: RecentlyViewedEntry[] }) {
  const [entries, setEntries] = useState(items);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="text-xs font-bold tracking-wide text-muted-foreground">
          RECENTLY VIEWED
        </div>
        {entries.length > 0 && (
          <button
            type="button"
            onClick={() => setEntries([])}
            className="text-xs font-bold text-accent-blue hover:underline"
          >
            Clear all
          </button>
        )}
      </div>
      <div className="mt-3 divide-y divide-border rounded-lg border border-border bg-card">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="flex items-center justify-between gap-3 px-4 py-3 text-sm"
          >
            {entry.label}
            <button
              type="button"
              aria-label="Remove"
              onClick={() =>
                setEntries((prev) => prev.filter((e) => e.id !== entry.id))
              }
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          </div>
        ))}
        {entries.length === 0 && (
          <div className="px-4 py-6 text-center text-xs text-muted-foreground">
            Nothing viewed recently.
          </div>
        )}
      </div>
    </div>
  );
}
