"use client";

import { useState } from "react";
import Link from "next/link";
import { CreatorPost, GamePassport, Profile } from "@/types";
import { VerifiedDot } from "@/components/shared/verified-badge";
import { SimpleTabs } from "@/components/shared/simple-tabs";
import { EmptyState } from "@/components/shared/empty-state";
import { Video } from "lucide-react";
import { ContentThumb } from "@/components/features/creator/content-thumb";

const TABS = ["Featured", "Videos", "Clips", "Images"] as const;
type Tab = (typeof TABS)[number];

export function CreatorProfileView({
  profile,
  primaryGame,
  posts,
}: {
  profile: Profile;
  primaryGame?: GamePassport;
  posts: CreatorPost[];
}) {
  const [tab, setTab] = useState<Tab>("Featured");

  const filtered = posts.filter((p) => {
    if (tab === "Featured") return p.isFeatured;
    if (tab === "Videos") return p.mediaType === "video";
    if (tab === "Clips") return p.mediaType === "clip";
    return p.mediaType === "image";
  });

  return (
    <div>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col items-start gap-4 sm:flex-row">
          <span
            className="flex size-24 shrink-0 items-center justify-center rounded-full text-3xl font-black text-white"
            style={{ background: profile.avatarGradient }}
          >
            {profile.displayName.charAt(0)}
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tight">
                {profile.displayName.toUpperCase()}
              </span>
              {profile.verified && <VerifiedDot />}
            </div>
            <div className="mt-0.5 text-sm text-muted-foreground">
              @{profile.username} · GAMING CREATOR
            </div>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              {profile.bio}
            </p>
            <div className="mt-3 flex items-center gap-4 text-sm">
              <span>
                <span className="font-bold">{profile.followers ?? "0"}</span>{" "}
                <span className="text-muted-foreground">Followers</span>
              </span>
              <span>
                <span className="font-bold">{profile.following ?? "0"}</span>{" "}
                <span className="text-muted-foreground">Following</span>
              </span>
            </div>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button className="rounded-md bg-foreground px-4 py-2 text-sm font-bold text-background">
            Follow
          </button>
          <Link
            href={`/vault/${profile.username}`}
            className="rounded-md border border-border px-4 py-2 text-sm font-bold"
          >
            View VAULT →
          </Link>
        </div>
      </div>

      {primaryGame && (
        <div className="relative mt-6 rounded-lg bg-foreground p-5 text-background">
          <VerifiedDot className="absolute top-4 right-4 size-5" />
          <div className="flex items-center gap-2 text-xs font-bold tracking-wide">
            GAMER VAULT
            <span className="text-background/60">| VERIFIED GAMER</span>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div>
              <div className="text-[10px] font-medium tracking-wide text-background/60">
                VAULT GAMER ID
              </div>
              <div className="mt-0.5 text-sm font-bold">
                {profile.displayName.toUpperCase()}
              </div>
            </div>
            <div>
              <div className="text-[10px] font-medium tracking-wide text-background/60">
                PRIMARY GAME
              </div>
              <div className="mt-0.5 text-sm font-bold">{primaryGame.gameName}</div>
            </div>
            <div>
              <div className="text-[10px] font-medium tracking-wide text-background/60">
                RANK TIER
              </div>
              <div className="mt-0.5 text-sm font-bold">{primaryGame.rank}</div>
            </div>
            <div>
              <div className="text-[10px] font-medium tracking-wide text-background/60">
                TEAM ROLE
              </div>
              <div className="mt-0.5 text-sm font-bold">
                {primaryGame.role.match(/\(([^)]+)\)/)?.[1] ?? primaryGame.role}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6">
        <SimpleTabs tabs={TABS} active={tab} onChange={setTab} />
      </div>

      <div className="mt-6">
        {filtered.length === 0 ? (
          <EmptyState
            icon={Video}
            title="No Content Yet"
            description="This creator hasn't posted any highlights or game metadata tags yet."
            ctaLabel="Discover Creators"
          />
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {filtered.map((post) => (
              <ContentThumb key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
