"use client";

import { useState } from "react";
import Link from "next/link";
import { Profile } from "@/types";
import { ProfileAvatar } from "@/components/shared/profile-avatar";
import { VerifiedDot, VerifiedPill, UnverifiedPill } from "@/components/shared/verified-badge";

export function DiscoverResultCard({ profile }: { profile: Profile }) {
  const [following, setFollowing] = useState(false);

  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <ProfileAvatar
            name={profile.displayName}
            gradient={profile.avatarGradient}
            size="md"
          />
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold">{profile.displayName}</span>
              {profile.verified && <VerifiedDot />}
            </div>
            <div className="text-xs text-muted-foreground">
              @{profile.username}
            </div>
          </div>
        </div>
        {profile.verified ? (
          <VerifiedPill label={`VERIFIED ${profile.typeLabel}`} className="shrink-0" />
        ) : (
          <UnverifiedPill label={`UNVERIFIED ${profile.typeLabel}`} className="shrink-0" />
        )}
      </div>

      <p className="mt-3 text-sm text-muted-foreground">{profile.shortTag}</p>

      <div className="mt-2 flex gap-4 text-sm">
        {profile.stats.map((stat) => (
          <span key={stat.label}>
            <span className="font-bold">{stat.value}</span>{" "}
            <span className="text-muted-foreground">{stat.label}</span>
          </span>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        <Link
          href={`/vault/${profile.username}`}
          className="flex h-9 flex-1 items-center justify-center rounded-md border border-border text-sm font-bold"
        >
          View VAULT
        </Link>
        <button
          type="button"
          onClick={() => setFollowing((v) => !v)}
          className={
            following
              ? "h-9 flex-1 rounded-md border border-border text-sm font-bold"
              : "h-9 flex-1 rounded-md bg-foreground text-sm font-bold text-background"
          }
        >
          {following ? "Following" : "Follow"}
        </button>
      </div>
    </div>
  );
}
