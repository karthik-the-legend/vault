"use client";

import { useState } from "react";
import { getProfileByUsername, landingDirectoryUsernames } from "@/lib/mock-data";
import { AccountType, Profile } from "@/types";
import { ProfilePreviewCard } from "@/components/features/profile-preview-card";
import { cn } from "@/lib/utils";

const FILTERS: { label: string; value: AccountType | "ALL" }[] = [
  { label: "All Stakeholders", value: "ALL" },
  { label: "Gamers", value: "GAMER" },
  { label: "Esports Clubs", value: "ESPORTS_CLUB" },
  { label: "League Organizers", value: "ORGANIZER" },
];

const ALL_STAKEHOLDERS_PREVIEW = ["aniket", "zarx_esports", "zarx_gaming"];

export function DirectorySection() {
  const [filter, setFilter] = useState<AccountType | "ALL">("ALL");

  const usernames =
    filter === "ALL" ? ALL_STAKEHOLDERS_PREVIEW : landingDirectoryUsernames[filter];
  const visible = usernames
    .map(getProfileByUsername)
    .filter((p): p is Profile => !!p);

  return (
    <section
      id="discovery"
      className="flex w-full flex-col items-center gap-14 border-y border-border bg-secondary px-6 py-16 sm:px-10 lg:px-20 lg:py-24"
    >
      <div className="flex w-full flex-col items-center gap-4 text-center">
        <h2 className="text-3xl leading-[1.2] font-extrabold tracking-[-0.02em] text-foreground sm:text-4xl">
          DISCOVER THE PEOPLE BEHIND THE GAME.
        </h2>
        <p className="text-base text-muted-foreground">
          Browse through gaming stakeholders with verified competitive track
          records.
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setFilter(f.value)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-[13px] font-semibold transition-colors",
                filter === f.value
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:border-[#9CA3AF] hover:text-foreground"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((profile) => (
          <ProfilePreviewCard key={profile.id} profile={profile} />
        ))}
      </div>
    </section>
  );
}
