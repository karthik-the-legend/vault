"use client";

import { useState } from "react";
import Link from "next/link";
import { Profile } from "@/types";
import { ProfileAvatar } from "@/components/shared/profile-avatar";

export function RecommendedCard({ profile }: { profile: Profile }) {
  const [following, setFollowing] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="text-xs font-bold tracking-wide text-muted-foreground">
          RECOMMENDED
        </div>
        <Link href="/recommended" className="text-xs font-bold hover:underline">
          View All
        </Link>
      </div>
      <div className="mt-3 flex items-center justify-between gap-3 rounded-lg border border-border bg-card p-4">
        <Link href={`/vault/${profile.username}`} className="flex items-center gap-3">
          <ProfileAvatar
            name={profile.displayName}
            gradient={profile.avatarGradient}
            size="sm"
          />
          <div>
            <div className="text-sm font-bold">{profile.displayName}</div>
            <div className="text-xs text-muted-foreground">
              {profile.shortTag}
            </div>
          </div>
        </Link>
        <button
          type="button"
          onClick={() => setFollowing((v) => !v)}
          className={
            following
              ? "shrink-0 rounded-md border border-border px-3.5 py-1.5 text-xs font-bold"
              : "shrink-0 rounded-md bg-foreground px-3.5 py-1.5 text-xs font-bold text-background"
          }
        >
          {following ? "Following" : "Follow"}
        </button>
      </div>
    </div>
  );
}
