"use client";

import { useState } from "react";
import {
  Achievement,
  ContentItem,
  GamePassport,
  MatchResult,
  Profile,
  Team,
} from "@/types";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { StatCardRow } from "@/components/shared/stat-block";
import { PrivateVaultState } from "@/components/shared/private-vault-state";
import { VaultProfileHeader } from "@/components/features/vault/vault-profile-header";
import { VaultTabs, VaultTab } from "@/components/features/vault/vault-tabs";
import { OverviewTab } from "@/components/features/vault/overview-tab";
import { CompetitiveTab } from "@/components/features/vault/competitive-tab";
import { ContentTab } from "@/components/features/vault/content-tab";

export function VaultProfileView({
  profile,
  isOwner,
  primaryGame,
  team,
  achievement,
  content,
  matches,
}: {
  profile: Profile;
  isOwner: boolean;
  primaryGame?: GamePassport;
  team?: Team;
  achievement?: Achievement;
  content?: ContentItem;
  matches: MatchResult[];
}) {
  const [tab, setTab] = useState<VaultTab>("Overview");
  const isLocked = !!profile.isPrivate && !isOwner;

  return (
    <div>
      <Breadcrumb
        items={[{ label: "VAULT", href: "/discover" }, { label: profile.username }]}
      />

      <div className="mt-4">
        <VaultProfileHeader profile={profile} isOwner={isOwner} />
      </div>

      {isLocked ? (
        <div className="mt-6">
          <PrivateVaultState />
        </div>
      ) : (
        <>
          <div className="mt-6">
            <StatCardRow stats={profile.stats} />
          </div>

          <div className="mt-8">
            <VaultTabs username={profile.username} active={tab} onChange={setTab} />
          </div>

          <div className="mt-6">
            {tab === "Overview" && (
              <OverviewTab
                username={profile.username}
                isOwner={isOwner}
                primaryGame={primaryGame}
                team={team}
                achievement={achievement}
                content={content}
              />
            )}
            {tab === "Competitive" && <CompetitiveTab matches={matches} />}
            {tab === "Content" && (
              <ContentTab items={content ? [content] : []} />
            )}
          </div>
        </>
      )}
    </div>
  );
}
