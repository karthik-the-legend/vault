"use client";

import { useState } from "react";
import Link from "next/link";
import { MoreHorizontal } from "lucide-react";
import { Profile } from "@/types";
import { ProfileAvatar } from "@/components/shared/profile-avatar";
import { VerifiedPill } from "@/components/shared/verified-badge";

export function VaultProfileHeader({
  profile,
  isOwner,
}: {
  profile: Profile;
  isOwner: boolean;
}) {
  const [following, setFollowing] = useState(false);

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col items-start gap-4 sm:flex-row">
          <ProfileAvatar
            name={profile.displayName}
            gradient={profile.avatarGradient}
            size="xl"
          />
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-black tracking-tight">
                {profile.displayName.toUpperCase()}
              </span>
              {profile.verified && <VerifiedPill label="VERIFIED GAMER" />}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              @{profile.username}
              {profile.country && ` · ${profile.country} ${profile.countryFlag ?? ""}`}
            </div>
            <p className="mt-3 max-w-lg text-sm text-muted-foreground">
              {profile.bio}
            </p>
            {(profile.followers || profile.following) && (
              <div className="mt-3 flex items-center gap-4 text-sm">
                <Link href="/followers">
                  <span className="font-bold">{profile.followers}</span>{" "}
                  <span className="text-muted-foreground">Followers</span>
                </Link>
                <Link href="/following">
                  <span className="font-bold">{profile.following}</span>{" "}
                  <span className="text-muted-foreground">Following</span>
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {isOwner ? (
            <>
              <Link
                href={`/vault/${profile.username}/edit`}
                className="rounded-md bg-foreground px-4 py-2 text-sm font-bold text-background"
              >
                Edit VAULT
              </Link>
              <button
                type="button"
                className="rounded-md border border-border px-4 py-2 text-sm font-bold"
              >
                Share
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => setFollowing((v) => !v)}
                className={
                  following
                    ? "rounded-md border border-border px-4 py-2 text-sm font-bold"
                    : "rounded-md bg-foreground px-4 py-2 text-sm font-bold text-background"
                }
              >
                {following ? "Following" : "Follow"}
              </button>
              <button
                type="button"
                className="rounded-md border border-border px-4 py-2 text-sm font-bold"
              >
                Connect
              </button>
              <button
                type="button"
                aria-label="More options"
                className="rounded-md border border-border p-2 text-muted-foreground hover:text-foreground"
              >
                <MoreHorizontal className="size-4" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
