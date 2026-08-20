"use client";

import { useState } from "react";
import { ContentPost, League, Profile, Tournament, TournamentResult } from "@/types";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { SimpleTabs } from "@/components/shared/simple-tabs";
import { OrganizerProfileHeader } from "@/components/features/organizer/organizer-profile-header";
import { OrganizerOverviewTab } from "@/components/features/organizer/organizer-overview-tab";
import { OrganizerLeaguesTab } from "@/components/features/organizer/organizer-leagues-tab";
import { OrganizerTournamentsTab } from "@/components/features/organizer/organizer-tournaments-tab";
import { OrganizerResultsTab } from "@/components/features/organizer/organizer-results-tab";
import { OrganizerContentTab } from "@/components/features/organizer/organizer-content-tab";

const TABS = ["Overview", "Leagues", "Tournaments", "Results", "Content"] as const;
type OrganizerTab = (typeof TABS)[number];

export function OrganizerProfileView({
  profile,
  isOwner,
  leagues,
  tournaments,
  results,
  content,
}: {
  profile: Profile;
  isOwner: boolean;
  leagues: League[];
  tournaments: Tournament[];
  results: TournamentResult[];
  content: ContentPost[];
}) {
  const [tab, setTab] = useState<OrganizerTab>("Overview");

  return (
    <div>
      <Breadcrumb
        items={[{ label: "VAULT", href: "/discover" }, { label: profile.username }]}
      />

      <div className="mt-4">
        <OrganizerProfileHeader profile={profile} isOwner={isOwner} />
      </div>

      <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
        {profile.bio}
      </p>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {profile.stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-border bg-card px-3 py-3 text-center"
          >
            <div className="text-lg font-extrabold">{stat.value}</div>
            <div className="text-[10px] font-medium tracking-wide text-muted-foreground">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <SimpleTabs tabs={TABS} active={tab} onChange={setTab} />
      </div>

      <div className="mt-6">
        {tab === "Overview" && (
          <OrganizerOverviewTab
            username={profile.username}
            featuredLeague={leagues[0]}
            recentResult={results[0]}
          />
        )}
        {tab === "Leagues" && (
          <OrganizerLeaguesTab username={profile.username} leagues={leagues} />
        )}
        {tab === "Tournaments" && (
          <OrganizerTournamentsTab tournaments={tournaments} />
        )}
        {tab === "Results" && <OrganizerResultsTab results={results} />}
        {tab === "Content" && <OrganizerContentTab posts={content} />}
      </div>
    </div>
  );
}
