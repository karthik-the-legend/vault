"use client";

import { useState } from "react";
import { Toggle } from "@/components/shared/toggle";

export interface FilterField {
  label: string;
  options: string[];
}

export function FiltersSidebar({
  fields,
  toggleLabel,
}: {
  fields: FilterField[];
  toggleLabel?: string;
}) {
  const [toggleOn, setToggleOn] = useState(true);

  return (
    <div className="w-full shrink-0 rounded-lg border border-border bg-card p-4 lg:w-56">
      <div className="text-xs font-bold tracking-wide text-muted-foreground">
        FILTERS
      </div>
      <div className="mt-3 space-y-3">
        {fields.map((field) => (
          <div key={field.label}>
            <label className="text-[11px] font-semibold tracking-wide text-muted-foreground">
              {field.label.toUpperCase()}
            </label>
            <select className="mt-1 h-9 w-full rounded-md border border-border bg-background px-2.5 text-xs outline-none focus:border-foreground">
              {field.options.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
        ))}
        {toggleLabel && (
          <Toggle checked={toggleOn} onChange={setToggleOn} label={toggleLabel} />
        )}
      </div>
    </div>
  );
}
