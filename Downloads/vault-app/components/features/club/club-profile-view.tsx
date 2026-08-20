"use client";

import { useState } from "react";
import {
  ClubPlayer,
  ClubTeam,
  ContentPost,
  Profile,
  RecruitmentOpportunity,
} from "@/types";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { SimpleTabs } from "@/components/shared/simple-tabs";
import { ClubProfileHeader } from "@/components/features/club/club-profile-header";
import { ClubOverviewTab } from "@/components/features/club/club-overview-tab";
import { ClubTeamsTab } from "@/components/features/club/club-teams-tab";
import { ClubPlayersTab } from "@/components/features/club/club-players-tab";
import { ClubRecruitmentTab } from "@/components/features/club/club-recruitment-tab";
import { ClubContentTab } from "@/components/features/club/club-content-tab";

const TABS = ["Overview", "Teams", "Players", "Recruitment", "Content"] as const;
type ClubTab = (typeof TABS)[number];

export function ClubProfileView({
  profile,
  isOwner,
  clubStats,
  teams,
  players,
  opportunities,
  content,
}: {
  profile: Profile;
  isOwner: boolean;
  clubStats: { teams: number; players: number; wins: number; achievements: number };
  teams: ClubTeam[];
  players: ClubPlayer[];
  opportunities: RecruitmentOpportunity[];
  content: ContentPost[];
}) {
  const [tab, setTab] = useState<ClubTab>("Overview");

  return (
    <div>
      <Breadcrumb
        items={[{ label: "VAULT", href: "/discover" }, { label: profile.username }]}
      />

      <div className="mt-4">
        <ClubProfileHeader profile={profile} isOwner={isOwner} />
      </div>

      <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
        {profile.bio}
      </p>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-6">
          <div>
            <span className="text-lg font-extrabold">{clubStats.teams}</span>{" "}
            <span className="text-sm text-muted-foreground">Teams</span>
          </div>
          <div>
            <span className="text-lg font-extrabold">{clubStats.players}</span>{" "}
            <span className="text-sm text-muted-foreground">Players</span>
          </div>
          <div>
            <span className="text-lg font-extrabold">{clubStats.wins}</span>{" "}
            <span className="text-sm text-muted-foreground">Wins</span>
          </div>
          <div>
            <span className="text-lg font-extrabold">{clubStats.achievements}</span>{" "}
            <span className="text-sm text-muted-foreground">Achievements</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {profile.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border px-2.5 py-1 text-[11px] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <SimpleTabs tabs={TABS} active={tab} onChange={setTab} />
      </div>

      <div className="mt-6">
        {tab === "Overview" && (
          <ClubOverviewTab
            featuredTeam={teams[0]}
            opportunity={opportunities[0]}
            isOwner={isOwner}
          />
        )}
        {tab === "Teams" && (
          <ClubTeamsTab username={profile.username} teams={teams} />
        )}
        {tab === "Players" && <ClubPlayersTab players={players} />}
        {tab === "Recruitment" && (
          <ClubRecruitmentTab opportunities={opportunities} />
        )}
        {tab === "Content" && <ClubContentTab posts={content} />}
      </div>
    </div>
  );
}
